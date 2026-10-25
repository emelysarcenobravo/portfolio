import { Code, Globe, Mail, PenTool, Play, Slides } from "@/components/ui/icons";
import type { ProjectLink } from "@/data/projects/types";

const ICONS = { live: Globe, code: Code, demo: Play, slides: Slides, design: PenTool, article: Mail } as const;

/** Project links as pill buttons. The first one (usually the demo or live site) is filled. */
export function ProjectLinks({ links }: { links: ProjectLink[] }) {
  if (links.length === 0) return null;
  return (
    <ul className="flex flex-wrap gap-2.5">
      {links.map((link, i) => {
        const Icon = ICONS[link.kind];
        return (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className={`lift inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold ${
                i === 0
                  ? "bg-accent text-on-accent"
                  : "border border-rule bg-paper-raised hover:border-accent hover:text-accent"
              }`}
            >
              <Icon className="size-4" />
              {link.label}
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
