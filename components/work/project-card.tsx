import Link from "next/link";
import { ProjectPreview } from "@/components/projects/project-preview";
import { ArrowRight } from "@/components/ui/icons";
import { categoriesOf, type Project } from "@/data/projects";
import { getLens } from "@/lib/lenses";

/**
 * A project in the work archive: preview, number and categories, title, one-line story, and a link.
 * The whole card is clickable; only the title is announced to screen readers.
 */
export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const categories = categoriesOf(project);

  return (
    <article
      // Alternate a tiny tilt on hover, like picking up a card from a table.
      style={{ "--lift-rotate": index % 2 ? "0.6deg" : "-0.6deg" } as React.CSSProperties}
      className="lift group relative flex h-full flex-col rounded-3xl border border-rule bg-paper-raised p-3 has-focus-visible:outline-2 has-focus-visible:outline-offset-4 has-focus-visible:outline-accent"
    >
      <ProjectPreview preview={project.preview} />
      <div className="flex flex-1 flex-col px-2 pt-5 pb-2">
        <p className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[0.7rem] tracking-wider text-ink-muted uppercase">
          <span className="text-accent">{String(index + 1).padStart(2, "0")}</span>
          {categories.map((id) => (
            <span key={id}>· {getLens(id).short}</span>
          ))}
          <span className="ml-auto normal-case">{project.period}</span>
        </p>
        <h3 className="mt-3 text-2xl font-bold tracking-tight text-balance">
          <Link
            href={`/work/${project.slug}`}
            className="after:absolute after:inset-0 after:rounded-3xl after:content-[''] focus-visible:outline-none"
          >
            {project.name}
          </Link>
        </h3>
        <p className="mt-2 leading-relaxed text-ink-muted">{project.summary}</p>
        <p className="mt-auto flex items-center justify-between gap-4 pt-5">
          <span className="rounded-full bg-accent-soft px-3 py-1 text-sm font-semibold text-accent">
            {project.headline}
          </span>
          <ArrowRight className="size-5 shrink-0 text-accent transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
        </p>
      </div>
    </article>
  );
}
