export type CategorySlug =
  | "gods"
  | "giants"
  | "creatures"
  | "realms"
  | "artifacts"
  | "events"
  | "heroes"
  | "concepts"
  | "texts";

export interface Relation {
  /** e.g. "Father", "Wife", "Slain by", "Wielded by" */
  type: string;
  /** slug of a related entity, if it exists in the database */
  slug?: string;
  name: string;
}

export interface Fact {
  label: string;
  value: string;
}

export interface Entity {
  slug: string;
  name: string;
  /** Old Norse form, e.g. "Óðinn" */
  oldNorse?: string;
  pronunciation?: string;
  category: CategorySlug;
  /** Short classifier, e.g. "Æsir god", "Jötunn", "World-tree" */
  kind: string;
  epithets?: string[];
  /** One–two sentence summary used in cards, meta descriptions, and the search index */
  summary: string;
  /** Body paragraphs */
  description: string[];
  facts?: Fact[];
  relations?: Relation[];
  /** Primary-source attestations */
  attestations?: string[];
  tags?: string[];
}

export interface CategoryMeta {
  slug: CategorySlug;
  title: string;
  rune: string;
  blurb: string;
}
