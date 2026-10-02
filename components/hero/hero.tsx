import Link from "next/link";
import { Portrait } from "@/components/about/portrait";
import { ArrowDown, ArrowRight } from "@/components/ui/icons";
import { Container } from "@/components/ui/container";
import { education } from "@/data/experience";
import type { LensId } from "@/lib/lenses";

export function Hero(){
    return(
        <section aria-labelledby="hero-title" className="relative overflow-hidden"> 
        <Container className="grid items-center gap-12 pt-10 pb-20 md:pt-16 lg:grid-cols-12 lg:gap-16 lg:pb-28">
            <div className="relative mx-auto w-full max-w-[18rem] sm:max-w-sm lg:col-span-5 lg:max-w-none">
                <div aria-hidden className="glow absolute -inset-10 -z-10 opacity-70"/>
                <Portrait variant="arch" priority className="offset-shadow lens-transition"/>
            </div>


        <div className="lg:col-span-7">
          <p className="inline-flex items-center gap-2 rounded-full bg-tint px-3 py-1.5 font-mono text-[0.7rem] tracking-[0.15em] text-ink-muted uppercase">
            <span aria-hidden className="size-1.5 rounded-full bg-accent-2" />
            {education.degree} · {education.minor} · San Francisco State University
          </p>
          <h1
            id="hero-title"
            className="mt-6 font-display text-[clamp(3rem,7vw,6.25rem)] leading-[0.92] tracking-[-0.01em] text-balance"
          >
            Hi, I’m Emely. I {" "} 
            <em className="lens-transition text-lens"> turn ideas into experiences </em>
            people can actually use
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-muted md:text-xl">
            My work sits at the intersection of software engineering, AI, design, and marketing. I’m interested in the full journey: from understanding a problem and designing the experience to building the solution and measuring what happens next.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent"
            >
              See the work
              <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5 motion-reduce:transition-none" />
            </Link>
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-sm font-medium hover:border-ink"
            >
              More about me
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" />
            </Link>
          </div>
        </div>

        </Container>
        </section>
    )
}