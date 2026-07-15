import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

const GOLD = "#d4a843";
const GOLD_DEEP = "#8a6f2e";
const BONE = "#e9e4d8";
const DIM = "#a49e8d";
const NIGHT = "#0b0d12";

async function loadFonts() {
  const dir = join(process.cwd(), "src", "assets");
  const [cinzel, garamond] = await Promise.all([
    readFile(join(dir, "Cinzel-Bold.ttf")),
    readFile(join(dir, "EBGaramond-Medium.ttf")),
  ]);
  return [
    { name: "Cinzel", data: cinzel, weight: 700 as const, style: "normal" as const },
    { name: "EB Garamond", data: garamond, weight: 500 as const, style: "normal" as const },
  ];
}

function Mark({ size }: { size: number }) {
  const s = size / 120;
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" style={{ display: "flex" }}>
      <circle cx="60" cy="60" r="55" stroke={GOLD_DEEP} strokeWidth="2.5" />
      <line x1="60" y1="22" x2="60" y2="98" stroke={GOLD} strokeWidth="7" />
      <line x1="40" y1="44" x2="80" y2="76" stroke={GOLD} strokeWidth="7" />
      <line x1="80" y1="44" x2="40" y2="76" stroke={GOLD} strokeWidth="7" />
    </svg>
  );
}

export async function brandOgImage({
  kicker,
  title,
  subtitle,
}: {
  kicker?: string;
  title: string;
  subtitle: string;
}) {
  const fonts = await loadFonts();
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          backgroundColor: NIGHT,
          backgroundImage:
            "radial-gradient(circle at 50% -20%, rgba(212,168,67,0.16), rgba(11,13,18,0) 60%)",
          padding: "60px 90px",
        }}
      >
        <Mark size={110} />
        {kicker && (
          <div
            style={{
              display: "flex",
              color: GOLD,
              fontFamily: "EB Garamond",
              fontSize: 26,
              letterSpacing: 8,
              textTransform: "uppercase",
              marginTop: 34,
            }}
          >
            {kicker}
          </div>
        )}
        <div
          style={{
            display: "flex",
            color: BONE,
            fontFamily: "Cinzel",
            fontSize: title.length > 22 ? 64 : 84,
            letterSpacing: 6,
            marginTop: 18,
          }}
        >
          {title.toUpperCase()}
        </div>
        <div
          style={{
            display: "flex",
            color: DIM,
            fontFamily: "EB Garamond",
            fontSize: 30,
            lineHeight: 1.4,
            maxWidth: 900,
            marginTop: 22,
          }}
        >
          {subtitle}
        </div>
        <div
          style={{
            display: "flex",
            color: GOLD,
            fontFamily: "EB Garamond",
            fontSize: 24,
            letterSpacing: 10,
            textTransform: "uppercase",
            marginTop: 44,
          }}
        >
          norsegods.org
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts }
  );
}
