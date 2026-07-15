import Link from "next/link";
import type { Entity } from "@/data";

export default function EntityCard({ entity }: { entity: Entity }) {
  return (
    <Link href={`/${entity.category}/${entity.slug}`} className="entity-card">
      <h3>
        {entity.name}
        {entity.oldNorse && entity.oldNorse !== entity.name && entity.oldNorse !== "—" && (
          <span className="on-name">{entity.oldNorse}</span>
        )}
      </h3>
      <span className="kind">{entity.kind}</span>
      <p>{entity.summary}</p>
    </Link>
  );
}
