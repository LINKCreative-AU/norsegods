import type { CategoryMeta, CategorySlug, Entity } from "./types";
import { gods } from "./gods";
import { giants } from "./giants";
import { creatures } from "./creatures";
import { realms } from "./realms";
import { artifacts } from "./artifacts";
import { events } from "./events";
import { concepts } from "./concepts";
import { texts } from "./texts";
import { moreGods } from "./more-gods";
import { moreGiants } from "./more-giants";
import { moreCreatures } from "./more-creatures";
import { moreConcepts } from "./more-concepts";
import { moreArtifacts } from "./more-artifacts";
import { moreEvents } from "./more-events";
import { heroes } from "./heroes";
import { moreTexts } from "./more-texts";

export type { CategoryMeta, CategorySlug, Entity } from "./types";

export const categories: CategoryMeta[] = [
  {
    slug: "gods",
    title: "Gods & Goddesses",
    rune: "ᚨ",
    blurb: "The Æsir and Vanir — Odin, Thor, Freyja, Loki, and the whole divine family of the North.",
  },
  {
    slug: "giants",
    title: "Giants & Jötnar",
    rune: "ᚦ",
    blurb: "The old powers beyond the fence — from primordial Ymir to Surtr, who ends the world.",
  },
  {
    slug: "creatures",
    title: "Creatures & Beasts",
    rune: "ᚹ",
    blurb: "Fenrir, the World Serpent, eight-legged Sleipnir, and the beasts that live in the world-tree.",
  },
  {
    slug: "realms",
    title: "The Nine Realms",
    rune: "ᛗ",
    blurb: "From golden Asgard to frozen Niflheimr — the cosmology of the Norse universe.",
  },
  {
    slug: "artifacts",
    title: "Artifacts & Treasures",
    rune: "ᛏ",
    blurb: "Mjölnir, Gungnir, Gleipnir — the dwarf-forged treasures that arm and doom the gods.",
  },
  {
    slug: "events",
    title: "Myths & Events",
    rune: "ᛉ",
    blurb: "The creation, the death of Baldr, the binding of the wolf, and Ragnarök itself.",
  },
  {
    slug: "heroes",
    title: "Heroes & Legends",
    rune: "ᛋ",
    blurb: "Sigurðr, Brynhildr, Ragnar Loðbrók — the dragon-slayers, shield-maidens, and doomed kings of the sagas.",
  },
  {
    slug: "concepts",
    title: "Cosmology & Concepts",
    rune: "ᛟ",
    blurb: "Yggdrasil, Valhalla, the norns, seiðr, and the runes — the ideas that hold the myths together.",
  },
  {
    slug: "texts",
    title: "Sources & Texts",
    rune: "ᚱ",
    blurb: "The Eddas, sagas, and histories — where everything we know actually comes from.",
  },
];

export const allEntities: Entity[] = [
  ...gods,
  ...moreGods,
  ...giants,
  ...moreGiants,
  ...creatures,
  ...moreCreatures,
  ...realms,
  ...artifacts,
  ...moreArtifacts,
  ...events,
  ...moreEvents,
  ...heroes,
  ...concepts,
  ...moreConcepts,
  ...texts,
  ...moreTexts,
];

const bySlug = new Map<string, Entity>(allEntities.map((e) => [e.slug, e]));
const categoryMetaBySlug = new Map<CategorySlug, CategoryMeta>(
  categories.map((c) => [c.slug, c])
);

export function getEntity(slug: string): Entity | undefined {
  return bySlug.get(slug);
}

export function getCategory(slug: string): CategoryMeta | undefined {
  return categoryMetaBySlug.get(slug as CategorySlug);
}

export function getEntitiesByCategory(slug: CategorySlug): Entity[] {
  return allEntities.filter((e) => e.category === slug);
}

/** Compact records for the client-side search index */
export function searchIndex() {
  return allEntities.map((e) => ({
    slug: e.slug,
    name: e.name,
    oldNorse: e.oldNorse ?? "",
    category: e.category,
    kind: e.kind,
    summary: e.summary,
    epithets: e.epithets ?? [],
    tags: e.tags ?? [],
  }));
}
