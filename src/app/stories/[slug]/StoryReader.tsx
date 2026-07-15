"use client";

import { useState } from "react";
import StoryPlayer from "@/components/StoryPlayer";

export default function StoryReader({
  paragraphs,
  audioUrl,
  narrator,
}: {
  paragraphs: string[];
  audioUrl?: string;
  narrator?: string;
}) {
  const [active, setActive] = useState(-1);

  return (
    <>
      {audioUrl ? (
        <div className="story-player">
          <audio controls preload="metadata" src={audioUrl} className="story-audio">
            Your browser cannot play this audio.
          </audio>
          {narrator && <p className="player-note">{narrator}</p>}
        </div>
      ) : (
        <StoryPlayer paragraphs={paragraphs} onParagraph={setActive} />
      )}
      <article className="story-body">
        {paragraphs.map((p, i) => (
          <p key={i} className={i === active ? "story-p reading" : "story-p"}>
            {p}
          </p>
        ))}
      </article>
    </>
  );
}
