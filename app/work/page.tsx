import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Squiggle } from "@/components/ui/squiggle";
import { ProjectCard } from "@/components/work/project-card";
import { WorkExplorer } from "@/components/work/work-explorer";
import { categoriesOf, projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Case studies across software engineering, AI, UX design and marketing, filterable by the kind of work.",
};

export default function WorkPage() {
  return (
    <Container className="pt-14 md:pt-20">
      <p className="font-hand text-2xl leading-none text-accent">Work</p>
      <h1 className="mt-3 max-w-3xl text-5xl font-extrabold tracking-tight text-balance md:text-6xl">
        Things I’ve <Squiggle>built</Squiggle>, designed and measured.
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
        {projects.length} projects across software engineering, AI, UX and marketing. Filter by the kind of work you’re
        curious about, or open any card for the full story.
      </p>

      <div className="mt-12">
        <WorkExplorer
          items={projects.map((project, i) => ({
            key: project.slug,
            categories: categoriesOf(project),
            card: <ProjectCard project={project} index={i} />,
          }))}
        />
      </div>
    </Container>
  );
}
