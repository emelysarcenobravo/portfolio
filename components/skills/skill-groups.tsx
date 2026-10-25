import Link from "next/link";
import { categoriesOf, projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import { getLens } from "@/lib/lenses";

/** Skills grouped by the four kinds of work, each linking to the projects where I used them. */
export function SkillGroups() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {skillGroups.map((group, i) => {
        const lens = getLens(group.lens);
        const examples = projects.filter((p) => categoriesOf(p).includes(group.lens));
        return (
          <li key={group.lens} className="flex flex-col rounded-3xl border border-rule bg-paper-raised p-6">
            <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-3 text-xl font-bold tracking-tight">{lens.label}</h3>
            <p className="mt-2 leading-snug text-ink-muted">{group.statement}</p>

            <ul className="mt-5 space-y-2 text-sm">
              {group.skills.map((skill) => (
                <li key={skill} className="flex gap-2.5">
                  <span aria-hidden className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                  {skill}
                </li>
              ))}
            </ul>

            {examples.length > 0 && (
              <div className="mt-auto pt-6">
                <h4 className="font-mono text-[0.7rem] tracking-wider text-ink-muted uppercase">See it in</h4>
                <ul className="mt-2 flex flex-wrap gap-1.5">
                  {examples.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/work/${p.slug}`}
                        className="inline-block rounded-full bg-accent-soft px-2.5 py-1 text-xs font-semibold text-accent hover:bg-accent hover:text-on-accent"
                      >
                        {p.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
