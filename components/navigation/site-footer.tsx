import { Portrait } from "@/components/about/portrait";
import { ArrowUpRight } from "@/components/ui/icons";
import { Container } from "@/components/ui/container";
import { site } from "@/data/site";

export function SiteFooter(){
    return (
        <footer id="contact" className="mt-24 bg-tint">
            <Container className="grid gap-10 py-16 md:grid-cols-12 md:py-24">
                <div className="md:col-span-7">
                    <div className="flex items-center gap-3">
                        <Portrait variant="avatar" className="size-12" />
                            <p className="font-mono text-xs tracking-[0.2em] text-ink-muted uppercase"> Contact </p>
                    </div>
                    <h2 className="mt-4 font-display text-5xl leading-[0.95] text-balance md:text-7xl">
                        Wish to discuss my experiences and projects further? <em className="text-accent"> Let's talk! </em>
                    </h2>
                </div>
                    <ul className="flex flex-col justify-end gap-3 md:col-span-4 md:col-start-9">
                        {site.links.map((link) => (
                            <li key={link.href}>
                                <a 
                                    href={link.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group flex items-center justify-between rounded-2xl border border-rule bg-paper-raised/70 px-5 py-4 text-lg transition-colors hover:border-accent hover:bg-paper-raised motion-reduce: transition-none"
                                    >
                                        {link.label}
                                        <ArrowUpRight className="size-5 text-ink-muted transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:text-ink motion-reduce: transition-none"/>
                                        <span className="sr-only">(opens in a new tab)</span>
                                    </a>
                            </li>
                        ))}
                    </ul>
            </Container>
            <Container className="flex flex-wrap justify-between gap-2 border-t border-rule py-6 font-mono text-xs text-ink-muted">
                <p> 
                    © {new Date().getFullYear()} {site.name}
                </p>
                <p> Designed and built with Next.js </p>
            </Container>
        </footer>
    )
}