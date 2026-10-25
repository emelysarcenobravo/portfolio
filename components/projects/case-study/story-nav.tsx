"use client";

import { m } from "motion/react";
import { useEffect, useState } from "react";

/**
 * The case study's chapter menu. On wide screens it sits beside the story; on phones it's a
 * row of pills under the header. The chapter you're reading is highlighted as you scroll.
 */
export function StoryNav({ chapters }: { chapters: { id: string; label: string }[] }) {
  const [active, setActive] = useState(chapters[0]?.id);

  useEffect(() => {
    const sections = chapters.map((c) => document.getElementById(c.id)).filter((el): el is HTMLElement => el !== null);
    // A chapter counts as "current" once its top passes the upper third of the screen.
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [chapters]);

  return (
    <nav aria-label="Case study chapters">
      <ol className="isolate flex gap-1.5 overflow-x-auto lg:flex-col lg:gap-1 lg:overflow-visible">
        {chapters.map((chapter, i) => {
          const isActive = active === chapter.id;
          return (
            <li key={chapter.id} className="shrink-0">
              <a
                href={`#${chapter.id}`}
                aria-current={isActive ? "location" : undefined}
                className={`relative flex items-center gap-2.5 rounded-full px-3.5 py-2 text-sm font-semibold whitespace-nowrap transition-colors ${
                  isActive ? "text-accent" : "text-ink-muted hover:text-ink"
                }`}
              >
                {isActive && (
                  <m.span
                    layoutId="story-nav-pill"
                    transition={{ type: "spring", stiffness: 420, damping: 36 }}
                    className="absolute inset-0 -z-10 rounded-full bg-accent-soft"
                  />
                )}
                <span className="font-mono text-[0.7rem] opacity-70">{String(i + 1).padStart(2, "0")}</span>
                {chapter.label}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
