import type { Metadata } from "next";
import { Certifications } from "@/components/skills/certifications";
import { SkillGroups } from "@/components/skills/skill-groups";
import { SoftwareStack } from "@/components/skills/software-stack";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Squiggle } from "@/components/ui/squiggle";

export const metadata: Metadata = {
  title: "Skills",
  description: "Skills, software stack and certifications across software engineering, AI, UX design and marketing.",
};

const SECTIONS = [
  { href: "#skills", label: "Skills" },
  { href: "#stack", label: "Software stack" },
  { href: "#certifications", label: "Certifications" },
];

export default function SkillsPage() {
  return (
    <Container className="pt-14 md:pt-20">
      <p className="font-hand text-2xl leading-none text-accent">Skills</p>
      <h1 className="mt-3 max-w-3xl text-5xl font-extrabold tracking-tight text-balance md:text-6xl">
        What I can do, and where I’ve <Squiggle>done it</Squiggle>.
      </h1>
      <nav aria-label="On this page" className="mt-8">
        <ul className="flex flex-wrap gap-2">
          {SECTIONS.map((s) => (
            <li key={s.href}>
              <a
                href={s.href}
                className="inline-block rounded-full border border-rule bg-paper-raised px-4 py-2 text-sm font-semibold text-ink-muted hover:border-accent-line hover:text-accent"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section id="skills" aria-labelledby="skills-title" className="scroll-mt-28 pt-16">
        <SectionHeading
          id="skills-title"
          eyebrow="Skills"
          aside={<p>Grouped by the four kinds of work I do, with the projects where I used them.</p>}
        >
          Four kinds of work.
        </SectionHeading>
        <SkillGroups />
      </section>

      <section id="stack" aria-labelledby="stack-title" className="scroll-mt-28 pt-20">
        <SectionHeading
          id="stack-title"
          eyebrow="Software stack"
          aside={<p>The tools I build, analyze and design with.</p>}
        >
          The tools behind the work.
        </SectionHeading>
        <SoftwareStack />
      </section>

      <section id="certifications" aria-labelledby="certifications-title" className="scroll-mt-28 pt-20">
        <SectionHeading
          id="certifications-title"
          eyebrow="Certifications"
          aside={<p>Verified credentials, plus the selective programs I’ve been part of.</p>}
        >
          Always learning.
        </SectionHeading>
        <Certifications />
      </section>
    </Container>
  );
}
