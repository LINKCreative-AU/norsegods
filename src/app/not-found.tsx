import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container" style={{ textAlign: "center", padding: "120px 20px" }}>
      <div style={{ fontSize: 48, color: "var(--gold)", marginBottom: 16 }}>ᚾ</div>
      <h1 style={{ marginBottom: 12 }}>Lost in the mists of Niflheimr</h1>
      <p style={{ color: "var(--text-dim)", marginBottom: 28 }}>
        This page does not exist in any of the nine worlds.
      </p>
      <Link href="/">← Return to Midgard</Link>
    </div>
  );
}
