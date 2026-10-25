import Link from "next/link";
import { ArrowRight } from "@/components/ui/icons";
import { Container } from "@/components/ui/container";
import { Squiggle } from "@/components/ui/squiggle";
import { education } from "@/data/experience";
import { IdBadge } from "./id-badge";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="dot-grid relative -mt-16 overflow-hidden pt-16">
      <Container className="grid items-center gap-12 pt-10 pb-20 md:pt-16 lg:grid-cols-12 lg:gap-14 lg:pb-28">
        <div className="mx-auto w-full max-w-68 pt-10 sm:max-w-xs lg:col-span-5 lg:max-w-sm lg:pt-0">
          <IdBadge />
        </div>
        <div className="lg:col-span-7">
          <p className="font-hand text-3xl text-accent md:text-4xl">hi there, I’m</p>
          <h1
            id="hero-title"
            className="mt-1 text-6xl leading-[0.95] text-balance sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.5rem]"
          >
            Emely <span className="text-accent italic">Sarceno</span> Bravo
          </h1>
          <p className="mt-7 font-display text-2xl leading-snug text-balance md:text-3xl">
            I build digital experiences where technology meets <Squiggle>people</Squiggle>.
          </p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted md:text-xl">
            {education.degree} with a {education.minor.replace("Minor", "minor")} at SF State. I work across software
            engineering, AI, UX design and marketing, and I like projects that need all four.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/work"
              style={{ "--lift-rotate": "-2deg" } as React.CSSProperties}
              className="lift group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-on-accent"
            >
              See my work
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" />
            </Link>
            <Link
              href="/about"
              style={{ "--lift-rotate": "2deg" } as React.CSSProperties}
              className="lift inline-flex items-center gap-2 rounded-full border border-rule bg-paper-raised px-6 py-3.5 text-sm font-semibold"
            >
              About me
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
