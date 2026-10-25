import Link from "next/link";
import { Hero } from "@/components/hero/hero";
import { ArrowRight } from "@/components/ui/icons";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/work/project-card";
import { education } from "@/data/experience";
import { categoriesOf, featuredProjects, projects } from "@/data/projects";
import { site } from "@/data/site";
import { certifications } from "@/data/skills";
import { LENSES } from "@/lib/lenses";

// Structured data: tells search engines this site is about a person, and links her profiles.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  image: `${site.url}/images/about/headshot.jpg`,
  sameAs: site.links.map((l) => l.href),
  alumniOf: { "@type": "CollegeOrUniversity", name: education.school },
  hasCredential: certifications.map((c) => ({ "@type": "EducationalOccupationalCredential", name: c.name })),
  knowsAbout: ["Software engineering", "Machine learning", "UX design", "Marketing analytics", "Web analytics"],
};

/** The homepage is a short front door: who I am, what I do, a few projects, and a way into each page. */
export default function HomePage() {
  const selected = featuredProjects.slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
      />

      <Hero />

      <section aria-labelledby="what-title" className="py-16 md:py-20">
        <Container>
          <SectionHeading id="what-title" eyebrow="What I do">
            Four kinds of work, one way of thinking.
          </SectionHeading>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {LENSES.map((lens, i) => {
              const count = projects.filter((p) => categoriesOf(p).includes(lens.id)).length;
              return (
                <li key={lens.id}>
                  <Link
                    href={`/work?filter=${lens.id}`}
                    style={{ "--lift-rotate": i % 2 ? "1.5deg" : "-1.5deg" } as React.CSSProperties}
                    className="lift group flex h-full flex-col rounded-3xl border border-rule bg-paper-raised p-6"
                  >
                    <span className="font-hand text-2xl leading-none text-accent">{String(i + 1).padStart(2, "0")}</span>
                    <span className="mt-3 font-display text-2xl">{lens.label}</span>
                    <span className="mt-2 leading-relaxed text-ink-muted">{lens.blurb}</span>
                    <span className="mt-auto flex items-center gap-1.5 pt-5 text-sm font-semibold text-accent">
                      {count} projects
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="selected-title" className="py-16 md:py-20">
        <Container>
          <SectionHeading
            id="selected-title"
            eyebrow="Selected work"
            aside={
              <Link href="/work" className="group inline-flex items-center gap-2 font-semibold text-accent">
                See all {projects.length} projects
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
              </Link>
            }
          >
            A few favorites to start with.
          </SectionHeading>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {selected.map((project) => (
              <li key={project.slug}>
                <ProjectCard project={project} index={projects.indexOf(project)} />
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
