import { Portrait } from "@/components/about/portrait";
import { ArrowUpRight } from "@/components/ui/icons";
import { Container } from "@/components/ui/container";
import { site } from "@/data/site";

/** A compact sign-off with profile links at the bottom of every page. */
export function SiteFooter() {
  return (
    <footer id="connect" className="mt-24 scroll-mt-24 border-t border-rule bg-accent-soft">
      <Container className="py-10 md:py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <Portrait variant="avatar" className="size-14" />
            <div>
              <p className="font-hand text-2xl leading-none text-accent">thanks for stopping by!</p>
              <h2 className="mt-1 text-2xl text-balance md:text-3xl">
                Wish to discuss my experiences and projects further? Let’s talk!
              </h2>
            </div>
          </div>
          <ul className="flex shrink-0 flex-wrap gap-2.5">
            {site.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="lift inline-flex items-center gap-2 rounded-full bg-paper-raised px-5 py-3 text-sm font-semibold"
                >
                  {link.label}
                  <ArrowUpRight className="size-4 text-accent" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-8 flex flex-wrap justify-between gap-2 border-t border-accent-line/40 pt-5 font-mono text-xs text-ink-muted">
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
        </p>
      </Container>
    </footer>
  );
}
