import type { Metadata } from "next";
import Link from "next/link";
import { MediaGrid } from "@/components/about/media-grid";
import { Portrait } from "@/components/about/portrait";
import { ArrowRight, ArrowUpRight } from "@/components/ui/icons";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Squiggle } from "@/components/ui/squiggle";
import { Tag } from "@/components/ui/tag";
import { education, experience } from "@/data/experience";
import { getLens, type LensId } from "@/lib/lenses";

export const metadata: Metadata = {
  title: "About",
  description: "How Emely Sarceno Bravo approaches technology, and where she has done the work.",
};

const PRINCIPLES: { lens: LensId; title: string; body: string }[] = [
  {
    lens: "marketing",
    title: "Find the real problem first.",
    body: "Low enrollment wasn’t really a marketing problem. People were reaching a closed form and leaving. My best work usually starts by asking one more question.",
  },
  {
    lens: "design",
    title: "Design for a specific person.",
    body: "A new transfer student and an event organizer need different things from the same platform. Personas and user stories keep a team honest about who it’s building for.",
  },
  {
    lens: "ai",
    title: "Use AI when it earns its place.",
    body: "In our phishing research, a simple logistic regression beat BERT. Start with the simplest model that could work, measure it in terms that matter to people, and look hard at what the data might be hiding.",
  },
  {
    lens: "build",
    title: "Engineer for the people who stay.",
    body: "I use tools the team already knows, review every commit, and keep secrets on the server, so what I build keeps working after I hand it off.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="dot-grid -mt-16 pt-16">
        <Container className="grid items-center gap-12 pt-10 pb-20 md:grid-cols-12 md:pt-16">
          <div className="relative mx-auto w-full max-w-[19rem] sm:max-w-sm md:col-span-5 md:max-w-none">
            <div
              aria-hidden
              className="absolute inset-4 translate-x-4 translate-y-4 rounded-t-full rounded-b-[2rem] bg-accent-soft"
            />
            <Portrait variant="arch" priority className="relative" />
          </div>
          <div className="md:col-span-7">
            <p className="font-hand text-2xl leading-none text-accent">About</p>
            <h1 className="mt-4 text-5xl leading-[1.05] font-extrabold tracking-tight text-balance md:text-6xl">
              Between people and the <Squiggle>systems</Squiggle> built for them.
            </h1>
            <div className="mt-8 space-y-5 text-lg leading-relaxed">
              <p>
                I’m Emely, a computer science student with a minor in marketing at SF State. I’m driven by the
                intersection of technology, users and business, and I build digital experiences that are technically
                sound, intuitive, and grounded in real people’s needs.
              </p>
              <p className="text-ink-muted">
                My experience spans front-end development, UX design, data analytics and marketing: leading an
                engineering team, comparing machine-learning models, designing for nonprofits, and measuring what
                campaigns actually changed. I’m now deepening my skills in software engineering and AI, and I’m looking
                for roles where I can build impactful products, analyze data and solve meaningful problems.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="principles-title" className="py-16 md:py-20">
        <Container>
          <SectionHeading id="principles-title" eyebrow="Principles">
            How I work.
          </SectionHeading>
          <ol className="grid gap-4 md:grid-cols-2">
            {PRINCIPLES.map((p, i) => (
              <li
                key={p.title}
                style={{ "--lift-rotate": i % 2 ? "1.2deg" : "-1.2deg" } as React.CSSProperties}
                className="lift rounded-3xl border border-rule bg-paper-raised p-6 md:p-8"
              >
                <span className="flex items-center gap-3">
                  <span className="font-mono text-xs font-semibold text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <Tag strong>{getLens(p.lens).short}</Tag>
                </span>
                <h3 className="mt-3 text-2xl font-bold tracking-tight">{p.title}</h3>
                <p className="mt-3 text-lg leading-relaxed text-ink-muted">{p.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section aria-labelledby="media-title" className="pb-16 md:pb-20">
        <Container>
          <SectionHeading id="media-title" eyebrow="In the spotlight">
            Telling my story, out loud.
          </SectionHeading>
          <p className="-mt-4 mb-10 max-w-3xl text-lg leading-relaxed text-ink-muted md:-mt-6">
            I’ve been asked to share my story on the news, on camera and on stage, for the programs that opened doors
            for me. I believe in paying it forward: the people who invested in me deserve to see what
            it made possible, and the next student deserves to know the door is open to them too.
          </p>
          <MediaGrid />
        </Container>
      </section>

      <section aria-labelledby="education-title" className="py-4">
        <Container>
          <div className="dot-grid grid gap-6 rounded-[2rem] bg-accent-soft p-6 md:grid-cols-12 md:p-10">
            <div className="md:col-span-5">
              <p className="font-hand text-2xl leading-none text-accent">Education</p>
              <h2
                id="education-title"
                className="mt-3 text-3xl leading-tight font-extrabold tracking-tight md:text-4xl"
              >
                {education.school}
              </h2>
              <p className="mt-4 text-xl">
                {education.degree} <span className="text-ink-muted">·</span>{" "}
                <span className="font-semibold text-accent">{education.minor}</span>
              </p>
              <p className="mt-2 text-ink-muted">{education.period}</p>
            </div>
            <div className="md:col-span-7">
              <h3 className="font-hand text-2xl leading-none text-accent">Relevant coursework</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {education.coursework.map((course) => (
                  <li key={course} className="rounded-full border border-rule bg-paper-raised px-3.5 py-1.5 text-sm">
                    {course}
                  </li>
                ))}
              </ul>
              <p className="mt-6 leading-relaxed text-ink-muted">
                Computer science gives me the engineering and AI foundation; the marketing minor is where I learned
                audience research, campaigns and analytics. Together they’re why I care about both building the product
                and getting it to the people it’s for.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="experience-title" className="py-16 md:py-20">
        <Container>
          <SectionHeading
            id="experience-title"
            eyebrow="Experience"
            aside={<p>Work, internships and leadership, newest first.</p>}
          >
            Where I’ve done the work.
          </SectionHeading>
          <ol className="relative space-y-4 before:absolute before:top-2 before:bottom-2 before:left-[0.4rem] before:w-0.5 before:bg-accent-line/50 md:before:left-[calc(16.66%+0.4rem)]">
            {experience.map((item) => (
              <li
                key={`${item.org}-${item.role}`}
                className="relative grid gap-3 pl-8 md:grid-cols-12 md:gap-8 md:pl-0"
              >
                <span
                  aria-hidden
                  className="absolute top-2 left-0 size-3.5 rounded-full bg-accent ring-4 ring-paper md:left-[16.66%]"
                />
                <p className="font-mono text-xs tracking-wider text-ink-muted uppercase md:col-span-2 md:pt-1.5">
                  {item.period}
                </p>
                <div className="rounded-3xl border border-rule bg-paper-raised p-5 md:col-span-10 md:ml-8 md:grid md:grid-cols-10 md:gap-6 md:p-6">
                  <div className="md:col-span-4">
                    <h3 className="text-xl leading-tight font-bold tracking-tight">{item.role}</h3>
                    <p className="text-ink-muted">{item.org}</p>
                  </div>
                  <div className="mt-3 md:col-span-6 md:mt-0">
                    <p className="leading-relaxed">{item.summary}</p>
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <ul className="flex flex-wrap gap-1.5" aria-label="Kinds of work">
                        {item.lenses.map((l) => (
                          <li key={l}>
                            <Tag strong>{getLens(l).short}</Tag>
                          </li>
                        ))}
                      </ul>
                      {item.post && (
                        <a
                          href={item.post.href}
                          target="_blank"
                          rel="noreferrer"
                          className="ml-auto inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
                        >
                          {item.post.label}
                          <ArrowUpRight className="size-4" />
                          <span className="sr-only">(LinkedIn, opens in a new tab)</span>
                        </a>
                      )}
                      {item.project && (
                        <Link
                          href={`/work/${item.project}`}
                          className={`group inline-flex items-center gap-1.5 text-sm font-semibold text-accent ${item.post ? "" : "ml-auto"}`}
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
