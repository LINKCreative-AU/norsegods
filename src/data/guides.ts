/**
 * Guides — long-form topic/overview/comparison pages that sit alongside the
 * entity encyclopedia. Each maps to content/guides/<slug>.md and renders at
 * /guides/<slug>. Ordered as shown on the /guides index.
 */
export interface Guide {
  slug: string;
  title: string;
  /** Meta description + index-card blurb (~150-160 chars). */
  description: string;
  /** Short label shown on the index card. */
  kicker: string;
}

export const guides: Guide[] = [
  {
    slug: "norse-gods-list",
    title: "The Complete List of Norse Gods and Goddesses",
    description:
      "Every Norse god and goddess of the Æsir and Vanir — Odin, Thor, Freyja, Loki, Frigg and dozens more — with who they are and what they rule.",
    kicker: "Reference",
  },
  {
    slug: "norse-gods-family-tree",
    title: "The Norse Gods Family Tree",
    description:
      "How the Norse gods are related — from Ymir and the first frost giants to Odin's sons and the children of Loki, mapped out and explained.",
    kicker: "Reference",
  },
  {
    slug: "aesir-vs-vanir",
    title: "Æsir vs Vanir: The Two Families of Norse Gods",
    description:
      "The two tribes of Norse gods, the war that set them against each other, and the truce that merged them — who belongs to each and why it matters.",
    kicker: "Explained",
  },
  {
    slug: "nine-realms",
    title: "The Nine Realms of Norse Mythology",
    description:
      "Asgard, Midgard, Jötunheim, Helheim and the rest — the nine worlds held in the branches and roots of Yggdrasil, and how they fit together.",
    kicker: "Cosmology",
  },
  {
    slug: "norse-symbols",
    title: "Norse and Viking Symbols and Their Meanings",
    description:
      "The Valknut, Vegvísir, Helm of Awe, Mjölnir and more — what the great Norse symbols meant, which are ancient, and which are modern inventions.",
    kicker: "Explained",
  },
  {
    slug: "berserkers",
    title: "Berserkers: The Bear-Shirt Warriors of the Norse",
    description:
      "The frenzied warriors of the sagas who fought in a trance sacred to Odin — what the sources actually say, and where legend outran history.",
    kicker: "History",
  },
  {
    slug: "norse-mythology-for-kids",
    title: "Norse Mythology for Kids: A Gentle Introduction",
    description:
      "The Norse gods and their world, told simply for younger readers — who Odin, Thor and Loki are, and the best myths to start with at bedtime.",
    kicker: "For families",
  },
  {
    slug: "days-of-the-week",
    title: "How the Norse Gods Named the Days of the Week",
    description:
      "Tuesday, Wednesday, Thursday and Friday are named for Týr, Odin, Thor and Frigg — the hidden Norse gods inside the English calendar, explained.",
    kicker: "Explained",
  },
  {
    slug: "norse-vs-greek-gods",
    title: "Norse Gods vs Greek Gods: How They Compare",
    description:
      "Odin and Zeus, Thor and Heracles, Hel and Hades — how the Norse and Greek pantheons line up, where they differ, and why their worlds feel so unlike.",
    kicker: "Comparison",
  },
  {
    slug: "norse-afterlife",
    title: "The Norse Afterlife: Valhalla, Fólkvangr, Hel and Beyond",
    description:
      "Where the dead went in Norse belief — Odin's Valhalla, Freyja's Fólkvangr, Rán's sea-hall and shadowy Hel — and why it was never just one place.",
    kicker: "Explained",
  },
];

export function getGuideMeta(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
