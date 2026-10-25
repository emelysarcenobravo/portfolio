import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CaseFigure } from "@/components/projects/case-study/case-figure";
import { ComparisonTable } from "@/components/projects/case-study/comparison-table";
import { FlowDiagram } from "@/components/projects/case-study/flow-diagram";
import { MetricGrid } from "@/components/projects/case-study/metric-grid";
import { ProjectLinks } from "@/components/projects/case-study/project-links";
import { StoryNav } from "@/components/projects/case-study/story-nav";
import { ProjectPreview, WindowFrame } from "@/components/projects/project-preview";
import { ArrowLeft, ArrowRight } from "@/components/ui/icons";
import { Container } from "@/components/ui/container";
import { Squiggle } from "@/components/ui/squiggle";
import { Tag } from "@/components/ui/tag";
import { categoriesOf, getProject, projects, type Project } from "@/data/projects";
import type { Figure } from "@/data/projects/types";
import { getLens, STAGES, type StageId } from "@/lib/lenses";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const project = getProject((await params).slug);
  return project ? { title: project.name, description: project.summary } : {};
}

/** "GatorAid: one front door to campus life" → "one front door to campus life". */
function taglineOf(project: Project) {
  const [first, ...rest] = project.title.split(": ");
  return rest.length && first === project.name ? rest.join(": ") : project.title;
}

const PROCESS_STAGES: StageId[] = ["design", "build", "intelligence"];

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  const index = projects.indexOf(project);
  const previous = index > 0 ? projects[index - 1] : undefined;
  const next = index < projects.length - 1 ? projects[index + 1] : undefined;
  const processStages = PROCESS_STAGES.filter((id) => project.stages[id]);
  const snapshots = (project.figures ?? []).filter((f) => !f.wide && f.src !== previewSrc(project)).slice(0, 2);
  // Size the hero window to the preview's shape: tall images get a narrower window.
  const ratio = project.preview.kind === "image" ? project.preview.width / project.preview.height : 4 / 3;
  const windowWidth = ratio < 1 ? "max-w-md" : ratio < 1.45 ? "max-w-2xl" : "max-w-4xl";

  const chapters = [
    { id: "overview", label: "Overview" },
    { id: "context", label: "Context" },
    ...(processStages.length ? [{ id: "process", label: "Process" }] : []),
    ...(project.stages.outcome ? [{ id: "outcome", label: "Outcome" }] : []),
    { id: "reflection", label: "Reflection" },
  ];

  return (
    <article>
      {/* ---------- Hero ---------- */}
      <header className="dot-grid -mt-16 pt-16">
        <Container className="pt-8 pb-16 md:pt-12 md:pb-20">
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 rounded-full border border-rule bg-paper-raised px-3.5 py-1.5 text-sm font-semibold text-ink-muted hover:text-accent"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5 motion-reduce:transition-none" />
            All work
          </Link>

          <div className="mt-10 text-center">
            <p className="flex flex-wrap justify-center gap-2">
              {categoriesOf(project).map((id) => (
                <Tag key={id} strong>
                  {getLens(id).short}
                </Tag>
              ))}
              <Tag>{project.period}</Tag>
            </p>
            <h1 className="mt-6 text-5xl font-extrabold tracking-tight md:text-7xl">
              <Squiggle>{project.name}</Squiggle>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-ink-muted md:text-2xl">
              {taglineOf(project)}
            </p>
            <div className="mt-8 flex justify-center">
              <ProjectLinks links={project.links} />
            </div>
          </div>

          {/* The preview in a browser window, with a couple of snapshots pinned beside it. */}
          <div className={`relative mx-auto mt-14 ${windowWidth}`}>
            {snapshots.map((figure, i) => (
              <Snapshot key={figure.src} figure={figure} side={i === 0 ? "left" : "right"} />
            ))}
            <WindowFrame label={`${project.slug}.case-study`}>
              <ProjectPreview preview={project.preview} priority framed />
            </WindowFrame>
          </div>
        </Container>
      </header>

      <Container className="grid gap-10 lg:grid-cols-[13rem_1fr] lg:gap-16">
        {/* ---------- Chapter menu ---------- */}
        <aside className="sticky top-[5.25rem] z-30 -mx-4 border-b border-rule bg-paper/90 px-4 py-2 backdrop-blur-md lg:top-28 lg:mx-0 lg:self-start lg:border-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
          <StoryNav chapters={chapters} />
        </aside>

        <div className="min-w-0 space-y-24 pt-6 lg:pt-0">
          {/* ---------- Overview ---------- */}
          <section id="overview" aria-labelledby="overview-title" className="scroll-mt-40 lg:scroll-mt-28">
            <dl className="grid grid-cols-2 gap-x-8 gap-y-6 border-b border-rule pb-10 md:grid-cols-4">
              <Meta label="Role">{project.role}</Meta>
              <Meta label="Team">{project.team ?? "Individual role"}</Meta>
              <Meta label="Timeline">{project.period}</Meta>
              <Meta label="Tools">{project.stack.join(", ")}</Meta>
            </dl>

            <p className="mt-12 font-hand text-2xl leading-none text-accent">TL;DR</p>
            <h2
              id="overview-title"
              className="mt-3 text-2xl leading-snug font-bold tracking-tight text-balance md:text-3xl"
            >
              {project.summary}
            </h2>
            <h3 className="mt-10 text-lg font-bold">What I did</h3>
            <ol className="mt-4 grid gap-3 md:grid-cols-2">
              {project.contribution.map((item, i) => (
                <li key={item} className="rounded-2xl border border-rule bg-paper-raised p-5">
                  <span className="font-mono text-xs font-semibold text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <p className="mt-2 leading-relaxed">{item}</p>
                </li>
              ))}
            </ol>

            {/* The guiding question, set apart like a sticky note. */}
            <figure className="relative mt-14 -rotate-[0.6deg] rounded-3xl bg-accent-soft px-6 py-10 text-center md:px-14">
              <figcaption className="font-hand text-2xl text-accent">the question</figcaption>
              <blockquote className="mx-auto mt-2 max-w-2xl text-2xl font-bold tracking-tight text-balance md:text-3xl">
                {project.hmw}
              </blockquote>
            </figure>
          </section>

          {/* ---------- Context ---------- */}
          <section id="context" aria-labelledby="context-title" className="scroll-mt-40 lg:scroll-mt-28">
            <Chapter eyebrow="Context" id="context-title" headline={project.stages.problem?.summary ?? project.summary}>
              {project.stages.problem?.body?.map((p) => (
                <Paragraph key={p}>{p}</Paragraph>
              ))}
              {project.stages.problem?.details && <Details items={project.stages.problem.details} />}
              {project.stages.people && (
                <div className="rounded-3xl border border-rule bg-paper-raised p-6 md:p-8">
                  <p className="font-hand text-2xl text-accent">who it’s for</p>
                  <p className="mt-1 text-xl font-bold tracking-tight text-balance">{project.stages.people.summary}</p>
                  {project.stages.people.body?.map((p) => (
                    <p key={p} className="mt-3 leading-relaxed text-ink-muted">
                      {p}
                    </p>
                  ))}
                  {project.stages.people.details && <Details items={project.stages.people.details} />}
                </div>
              )}
              <StageExtras project={project} stage="problem" />
              <StageExtras project={project} stage="people" />
            </Chapter>
          </section>

          {/* ---------- Process ---------- */}
          {processStages.length > 0 && (
            <section id="process" aria-labelledby="process-title" className="scroll-mt-40 lg:scroll-mt-28">
              <p className="font-hand text-2xl leading-none text-accent">Process</p>
              <h2 id="process-title" className="sr-only">
                Process
              </h2>
              <div className="mt-6 space-y-16">
                {processStages.map((id, i) => {
                  const stage = project.stages[id]!;
                  return (
                    <div key={id} className="relative border-l-2 border-dashed border-accent-line pl-6 md:pl-10">
                      <span
                        aria-hidden
                        className="absolute top-0 -left-[0.7rem] grid size-5 place-items-center rounded-full bg-accent font-mono text-[0.6rem] font-bold text-on-accent"
                      >
                        {i + 1}
                      </span>
                      <h3 className="font-mono text-xs tracking-[0.18em] text-ink-muted uppercase">
                        {STAGES.find((s) => s.id === id)!.label}
                      </h3>
                      <p className="mt-2 text-2xl font-bold tracking-tight text-balance md:text-3xl">{stage.summary}</p>
                      <div className="mt-6 space-y-8">
                        {stage.body?.map((p) => (
                          <Paragraph key={p}>{p}</Paragraph>
                        ))}
                        {stage.details && <Details items={stage.details} />}
                        <StageExtras project={project} stage={id} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* ---------- Outcome ---------- */}
          {project.stages.outcome && (
            <section id="outcome" aria-labelledby="outcome-title" className="scroll-mt-40 lg:scroll-mt-28">
              <Chapter eyebrow="Outcome" id="outcome-title" headline={project.stages.outcome.summary}>
                {project.stages.outcome.body?.map((p) => (
                  <Paragraph key={p}>{p}</Paragraph>
                ))}
                {project.stages.outcome.details && <Details items={project.stages.outcome.details} />}
                <StageExtras project={project} stage="outcome" />
              </Chapter>
            </section>
          )}

          {/* ---------- Reflection ---------- */}
          <section id="reflection" aria-labelledby="reflection-title" className="scroll-mt-40 lg:scroll-mt-28">
            <p className="font-hand text-2xl leading-none text-accent">Reflection</p>
            <h2 id="reflection-title" className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              What I’m taking with me
            </h2>
            <ol className="mt-8 grid gap-4 md:grid-cols-2">
              {project.learned.map((lesson, i) => (
                <li
                  key={lesson.title}
                  style={{ "--lift-rotate": i % 2 ? "0.6deg" : "-0.6deg" } as React.CSSProperties}
                  className="lift rounded-3xl border border-rule bg-paper-raised p-6 md:p-7"
                >
                  <span className="font-mono text-xs font-semibold text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 text-xl font-bold tracking-tight">{lesson.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-muted">{lesson.body}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* ---------- Next up ---------- */}
          <nav aria-labelledby="next-up-title" className="rounded-[2rem] bg-accent-soft p-6 md:p-10">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-hand text-2xl leading-none text-accent">
                  Case study {index + 1} of {projects.length}
                </p>
                <h2 id="next-up-title" className="mt-2 text-3xl font-bold tracking-tight">
                  Keep exploring
                </h2>
              </div>
              <Link
                href="/work"
                className="lift inline-flex items-center gap-2 rounded-full bg-paper-raised px-5 py-2.5 text-sm font-semibold"
              >
                <ArrowLeft className="size-4" />
                All work
              </Link>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {previous ? <NeighborLink project={previous} direction="previous" /> : <div aria-hidden />}
              {next && <NeighborLink project={next} direction="next" />}
            </div>
          </nav>
        </div>
      </Container>
    </article>
  );
}

function previewSrc(project: Project) {
  return project.preview.kind === "image" ? project.preview.src : undefined;
}

/** A tilted photo with a handwritten caption, pinned beside the hero window (wide screens only). */
function Snapshot({ figure, side }: { figure: Figure; side: "left" | "right" }) {
  const caption = `the ${STAGES.find((s) => s.id === figure.stage)?.label.toLowerCase() ?? "work"}`;
  return (
    <figure
      aria-hidden
      className={`absolute z-10 hidden w-44 bg-paper-raised p-2 pb-1 shadow-xl shadow-accent/20 xl:block ${
        side === "left" ? "-top-8 -left-36 -rotate-6" : "-right-36 -bottom-10 rotate-5"
      }`}
    >
      <div className="relative aspect-square overflow-hidden bg-tint">
        <Image src={figure.src} alt="" fill sizes="11rem" className="object-cover object-top" />
      </div>
      <figcaption className="py-1 text-center font-hand text-xl text-ink-muted">{caption}</figcaption>
    </figure>
  );
}

function Chapter({
  eyebrow,
  id,
  headline,
  children,
}: {
  eyebrow: string;
  id: string;
  headline: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <p className="font-hand text-2xl leading-none text-accent">{eyebrow}</p>
      <h2 id={id} className="mt-3 text-3xl font-bold tracking-tight text-balance md:text-4xl">
        {headline}
      </h2>
      <div className="mt-8 space-y-8">{children}</div>
    </>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className="max-w-3xl text-lg leading-relaxed text-ink-muted">{children}</p>;
}

function Details({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
      {items.map((d) => (
        <li key={d} className="flex gap-3 rounded-2xl bg-tint p-4 leading-relaxed">
          <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
          {d}
        </li>
      ))}
    </ul>
  );
}

/** Diagrams, metrics, results tables and images that belong to a stage. */
function StageExtras({ project, stage }: { project: Project; stage: StageId }) {
  const figures = project.figures?.filter((f) => f.stage === stage) ?? [];
  const wide = figures.filter((f) => f.wide);
  const grid = figures.filter((f) => !f.wide);
  const metrics = project.metrics?.filter((m) => m.stage === stage) ?? [];
  const diagram = project.diagram?.stage === stage ? project.diagram : undefined;
  const comparison = project.comparison?.stage === stage ? project.comparison : undefined;
  if (!figures.length && !metrics.length && !diagram && !comparison) return null;

  return (
    <>
      {diagram && <FlowDiagram diagram={diagram} />}
      {metrics.map((group) => (
        <MetricGrid key={group.title} metrics={group} />
      ))}
      {comparison && <ComparisonTable comparison={comparison} />}
      {grid.length > 0 && (
        <div className={`grid gap-6 ${grid.length > 1 ? "items-start sm:grid-cols-2" : "max-w-md"}`}>
          {grid.map((f) => (
            <CaseFigure key={f.src} figure={f} />
          ))}
        </div>
      )}
      {wide.map((f) => (
        <CaseFigure key={f.src} figure={f} />
      ))}
    </>
  );
}

function Meta({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="font-mono text-[0.7rem] tracking-wider text-accent uppercase">{label}</dt>
      <dd className="mt-1.5 leading-snug">{children}</dd>
    </div>
  );
}

function NeighborLink({ project, direction }: { project: Project; direction: "previous" | "next" }) {
  const isNext = direction === "next";
  return (
    <Link
      href={`/work/${project.slug}`}
      className={`lift group flex items-center gap-4 rounded-3xl bg-paper-raised p-3 pr-5 ${
        isNext ? "md:flex-row-reverse md:pr-3 md:pl-5 md:text-right" : ""
      }`}
    >
      <div className="w-28 shrink-0 sm:w-32">
        <ProjectPreview preview={project.preview} size="small" />
      </div>
      <div className="min-w-0 flex-1">
        <span className="inline-flex items-center gap-1.5 font-mono text-xs tracking-wider text-ink-muted uppercase">
          {!isNext && <ArrowLeft className="size-3.5" />}
          {isNext ? "Next case study" : "Previous case study"}
          {isNext && <ArrowRight className="size-3.5" />}
        </span>
        <span className="mt-1 block text-lg leading-tight font-bold group-hover:text-accent">{project.name}</span>
      </div>
    </Link>
  );
}
