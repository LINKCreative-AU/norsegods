/**
 * The Norse Gods mark: a bind-rune fusing ᚾ naudiz (N) and ᚷ gebo (G) —
 * one stave, one crossing. Brand kit proposal 01, concept A.
 */
export default function BindRune({
  size = 28,
  color = "var(--gold)",
  ring = false,
  ringColor = "var(--gold-dim)",
  title = "Norse Gods bind-rune",
}: {
  size?: number;
  color?: string;
  ring?: boolean;
  ringColor?: string;
  title?: string;
}) {
  // Heavier strokes at small sizes so the mark holds at favicon scale
  const stroke = size >= 80 ? 7 : size >= 40 ? 9 : 12;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      role="img"
      aria-label={title}
    >
      {ring && <circle cx="60" cy="60" r="55" stroke={ringColor} strokeWidth="2.5" />}
      <line x1="60" y1={ring ? 22 : 12} x2="60" y2={ring ? 98 : 108} stroke={color} strokeWidth={stroke} />
      <line x1={ring ? 40 : 30} y1={ring ? 44 : 42} x2={ring ? 80 : 90} y2={ring ? 76 : 94} stroke={color} strokeWidth={stroke} />
      <line x1={ring ? 80 : 90} y1={ring ? 44 : 42} x2={ring ? 40 : 30} y2={ring ? 76 : 94} stroke={color} strokeWidth={stroke} />
    </svg>
  );
}
