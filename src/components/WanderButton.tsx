"use client";

import { useRouter } from "next/navigation";

/** Sends the reader to a random entry — Odin-style wandering. */
export default function WanderButton({ paths }: { paths: string[] }) {
  const router = useRouter();
  return (
    <button
      type="button"
      className="wander-btn"
      title="Visit a random entry"
      onClick={() => router.push(paths[Math.floor(Math.random() * paths.length)])}
    >
      ᛟ Wander
    </button>
  );
}
