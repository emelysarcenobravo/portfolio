import type { Metadata } from "next"; 
import Link from "next/link";
import { Portrait } from "@/components/about/portrait";
import { ArrowRight } from "@/components/ui/icons";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { education, experience } from "@/data/experience";
import { getLens, type LensId } from "@/lib/lenses";

export const metadata: Metadata = {
    title: "About Me", 
    description: "How Emely Sarceno Bravo approaches technology and where she has done the work.",
};

const PRINCIPLES: {
  title: string;
  body: string;
  lens: LensId;
}[] = [
  {
    title: "Engineering with intention.",
    body: "I care about how things work behind the interface. I aim to make technical decisions that are practical, maintainable, and purposeful.",
    lens: "engineering",
  },
  {
    title: "Explore what’s possible.",
    body: "I enjoy experimenting with AI and emerging technologies to understand what they can do, where they create value, and how they can become part of a thoughtful solution.",
    lens: "ai",
  },
  {
    title: "Connect ideas to outcomes.",
    body: "I use data to understand reach, engagement, and growth, turning what I learn into better decisions and more intentional work.",
    lens: "marketing",
  },
];


export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div aria-hidden className="glow absolute top-10 -left-40 -z-10 h-[32rem] w-[32rem] opacity-50" />
        <Container className="grid items-center gap-12 pt-10 pb-20 md:grid-cols-12 md:pt-16">
          <div className="mx-auto w-full max-w-sm md:col-span-5 md:max-w-none">
            <Portrait variant="arch" priority className="offset-shadow lens-transition" />
          </div>
          <div className="md:col-span-7">
            <p className="font-mono text-xs tracking-[0.2em] text-ink-muted uppercase">About Me</p>
            <h1 className="mt-5 font-display text-[clamp(3rem,6.5vw,6rem)] leading-[0.92] text-balance">
              I'm interested in what happens <em className="text-accent"> between people and technology </em>
            </h1>
            <div className="mt-8 space-y-5 text-lg leading-relaxed">
              <p>
                I’m Emely, a computer science student at SF State with a minor in marketing. 
                I like working where technology, people, and ideas meet: understanding what 
                someone needs, figuring out how to build it, and finding ways to make the 
                experience feel intuitive.
              </p>
              <p className="text-ink-muted">
                My work has taken me across software engineering, AI, UX, and marketing. 
                I’ve led an engineering team, explored machine-learning models, designed digital 
                experiences, and used data to understand what actually reached people. I’m looking
                for opportunities where I can build thoughtful products, analyze data, and solve 
                meaningful problems—while continuing to grow at the intersection of technology, people, and business.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="principles-title" className="theme-deep py-20 md:py-28">
        <Container>
          <SectionHeading id="principles-title" eyebrow="Principles">
            How I <em className="text-accent-2">work.</em>
          </SectionHeading>
          <ol className="grid gap-4 md:grid-cols-2">
            {PRINCIPLES.map((p, i) => (
              <li
                key={p.title}
                style={{ "--col": `var(--lens-${p.lens})` } as React.CSSProperties}
                className="rounded-3xl border-2 border-(--col) bg-[color-mix(in_oklab,var(--col)_12%,var(--paper-raised))] p-6 md:p-8"
              >
                <span aria-hidden className="font-mono text-xs text-(--col)">
                  {String(i + 1).padStart(2, "0")} · {getLens(p.lens).label}
                </span>
                <h3 className="mt-2 font-display text-3xl leading-tight">{p.title}</h3>
                <p className="mt-3 text-lg leading-relaxed text-ink-muted">{p.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>


    <section aria-labelledby="education-title" className="pt-20 md:pt-28">
        <Container>
          <div className="grid gap-6 rounded-[2rem] bg-tint p-6 md:grid-cols-12 md:p-10">
            <div className="md:col-span-5">
              <p className="font-mono text-xs tracking-[0.2em] text-ink-muted uppercase">Education</p>
              <h2 id="education-title" className="mt-3 font-display text-4xl leading-tight md:text-5xl">
                {education.school}
              </h2>
              <p className="mt-4 text-xl">
                {education.degree} <span className="text-ink-muted">·</span>{" "}
                <span className="text-accent">{education.minor}</span>
              </p>
              <p className="mt-2 text-ink-muted">
                {education.period}
              </p>
            </div>
            <div className="md:col-span-7">
              <h3 className="font-mono text-xs tracking-[0.2em] text-ink-muted uppercase">Relevant coursework</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {education.coursework.map((course) => (
                  <li key={course} className="rounded-full border border-rule bg-paper-raised px-3.5 py-1.5 text-sm">
                    {course}
                  </li>
                ))}
              </ul>
                <p className="mt-6 leading-relaxed text-ink-muted">
                    Computer science gives me a strong foundation in software engineering and
                    AI, while my marketing minor has strengthened how I think about audiences,
                    communication, and strategy. Together, these perspectives shape how I approach 
                    both what I build and who I’m building it for.
                </p>
            </div>
          </div>
        </Container>
      </section>

     <section aria-labelledby="experience-title" className="py-20 md:py-28">
        <Container>
          <SectionHeading
            id="experience-title"
            eyebrow="Experience"
            aside={<p>A look at where I’ve learned, built, and led.</p>}
          >
             Where I’ve <em className="text-accent">put ideas into practice.</em>
          </SectionHeading>
          <ol className="relative space-y-4 before:absolute before:top-2 before:bottom-2 before:left-[0.4rem] before:w-px before:bg-rule md:before:left-[calc(16.66%+0.4rem)]">
            {experience.map((item) => (
              <li
                key={`${item.org}-${item.role}`}
                className="relative grid gap-3 pl-8 md:grid-cols-12 md:gap-8 md:pl-0"
              >
                <span
                  aria-hidden
                  style={{ background: `var(--lens-${item.lenses[0]})` }}
                  className="absolute top-2 left-0 size-3.5 rounded-full ring-4 ring-paper md:left-[16.66%]"
                />
                <p className="font-mono text-xs tracking-wider text-ink-muted uppercase md:col-span-2 md:pt-1.5">
                  {item.period}
                </p>
                <div className="rounded-3xl border border-rule bg-paper-raised p-5 md:col-span-10 md:ml-8 md:grid md:grid-cols-10 md:gap-6 md:p-6">
                  <div className="md:col-span-4">
                    <h3 className="font-display text-3xl leading-tight">{item.role}</h3>
                    <p className="text-ink-muted">{item.org}</p>
                  </div>
                  <div className="mt-3 md:col-span-6 md:mt-0">
                    <p className="leading-relaxed">{item.summary}</p>
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <ul className="flex flex-wrap gap-1.5" aria-label="Lenses">
                        {item.lenses.map((l) => (
                          <li
                            key={l}
                            style={{ "--col": `var(--lens-${l})` } as React.CSSProperties}
                            className="rounded-full bg-[color-mix(in_oklab,var(--col)_14%,transparent)] px-2.5 py-0.5 font-mono text-[0.68rem] tracking-wider text-(--col) uppercase"
                          >
                            {getLens(l).label}
                          </li>
                        ))}
                      </ul>
                      {item.project && (
                        <Link
                          href={`/work/${item.project}`}
                          className="group ml-auto inline-flex items-center gap-1.5 text-sm font-medium hover:text-accent"
                        >
                          Case study
                          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </>
  );
}