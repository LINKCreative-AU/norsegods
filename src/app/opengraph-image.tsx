import { brandOgImage, OG_SIZE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Norse Gods — The Norse Mythology Database";

export default function Image() {
  return brandOgImage({
    title: "Norse Gods",
    subtitle:
      "Every god, giant, creature, realm, artifact, myth, and source of the Norse world — searchable and cited.",
  });
}
