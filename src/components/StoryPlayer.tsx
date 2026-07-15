"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface Chunk {
  text: string;
  paragraph: number;
}

/** Split paragraphs into sentence-sized chunks — long utterances get cut off in some browsers. */
function toChunks(paragraphs: string[]): Chunk[] {
  const chunks: Chunk[] = [];
  paragraphs.forEach((p, paragraph) => {
    const sentences = p.match(/[^.!?…]+[.!?…]+["']?|\s*[^.!?…]+$/g) ?? [p];
    let buf = "";
    for (const s of sentences) {
      if ((buf + s).length > 220 && buf) {
        chunks.push({ text: buf.trim(), paragraph });
        buf = s;
      } else {
        buf += s;
      }
    }
    if (buf.trim()) chunks.push({ text: buf.trim(), paragraph });
  });
  return chunks;
}

/** Prefer deep, natural-sounding English voices where the platform offers them. */
function rankVoice(v: SpeechSynthesisVoice): number {
  if (!v.lang.toLowerCase().startsWith("en")) return -1;
  const n = v.name.toLowerCase();
  let score = 0;
  if (n.includes("natural") || n.includes("neural")) score += 40;
  for (const good of ["ryan", "guy", "brian", "daniel", "george", "james", "male"]) {
    if (n.includes(good)) score += 20;
  }
  if (n.includes("google")) score += 10;
  if (n.includes("female") || n.includes("zira") || n.includes("hazel")) score -= 8;
  return score;
}

export default function StoryPlayer({
  paragraphs,
  onParagraph,
}: {
  paragraphs: string[];
  onParagraph?: (index: number) => void;
}) {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [voiceURI, setVoiceURI] = useState<string>("");
  const [rate, setRate] = useState(0.88);
  const [status, setStatus] = useState<"idle" | "playing" | "paused">("idle");
  const [supported, setSupported] = useState(true);
  const chunksRef = useRef<Chunk[]>([]);
  const posRef = useRef(0);
  const stoppedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      setSupported(false);
      return;
    }
    chunksRef.current = toChunks(paragraphs);
    const load = () => {
      const vs = window.speechSynthesis
        .getVoices()
        .filter((v) => rankVoice(v) >= 0)
        .sort((a, b) => rankVoice(b) - rankVoice(a));
      setVoices(vs);
      setVoiceURI((cur) => cur || vs[0]?.voiceURI || "");
    };
    load();
    window.speechSynthesis.onvoiceschanged = load;
    return () => {
      window.speechSynthesis.cancel();
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, [paragraphs]);

  const speakFrom = useCallback(
    (index: number) => {
      const synth = window.speechSynthesis;
      const chunk = chunksRef.current[index];
      if (!chunk) {
        setStatus("idle");
        onParagraph?.(-1);
        return;
      }
      posRef.current = index;
      onParagraph?.(chunk.paragraph);
      const u = new SpeechSynthesisUtterance(chunk.text);
      const voice = synth.getVoices().find((v) => v.voiceURI === voiceURI);
      if (voice) u.voice = voice;
      u.rate = rate;
      u.pitch = 0.9;
      u.onend = () => {
        if (!stoppedRef.current) speakFrom(index + 1);
      };
      synth.speak(u);
    },
    [voiceURI, rate, onParagraph]
  );

  const play = () => {
    const synth = window.speechSynthesis;
    stoppedRef.current = false;
    if (status === "paused") {
      synth.resume();
      setStatus("playing");
      return;
    }
    synth.cancel();
    setStatus("playing");
    speakFrom(0);
  };

  const pause = () => {
    window.speechSynthesis.pause();
    setStatus("paused");
  };

  const stop = () => {
    stoppedRef.current = true;
    window.speechSynthesis.cancel();
    setStatus("idle");
    onParagraph?.(-1);
  };

  if (!supported) {
    return (
      <div className="story-player">
        <p style={{ color: "var(--text-dim)", fontSize: 15 }}>
          Your browser doesn&apos;t support read-aloud. The story awaits below, in the old way.
        </p>
      </div>
    );
  }

  return (
    <div className="story-player">
      <div className="player-controls">
        {status !== "playing" ? (
          <button className="play-btn" onClick={play} aria-label="Play narration">
            ▶ {status === "paused" ? "Resume" : "Listen"}
          </button>
        ) : (
          <button className="play-btn" onClick={pause} aria-label="Pause narration">
            ❚❚ Pause
          </button>
        )}
        {status !== "idle" && (
          <button className="stop-btn" onClick={stop} aria-label="Stop narration">
            ■ Stop
          </button>
        )}
      </div>
      <div className="player-settings">
        <label>
          Voice
          <select
            value={voiceURI}
            onChange={(e) => setVoiceURI(e.target.value)}
            disabled={status === "playing"}
          >
            {voices.map((v) => (
              <option key={v.voiceURI} value={v.voiceURI}>
                {v.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Pace
          <input
            type="range"
            min="0.7"
            max="1.1"
            step="0.02"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            disabled={status === "playing"}
          />
        </label>
      </div>
      <p className="player-note">
        Narrated by your device&apos;s voice — pick the deepest one it offers, dim the lights.
      </p>
    </div>
  );
}
