"use client";

import { AnimatePresence, m } from "motion/react";
import { useEffect, useId, useState } from "react";
import { isLensId, LENSES, type LensId, type LensState } from "@/lib/lenses";

export type WorkItem = {
  key: string;
  categories: LensId[];
  /** The card, rendered on the server. */
  card: React.ReactNode;
};

const FILTERS: { id: LensState; label: string }[] = [
  { id: "all", label: "All" },
  ...LENSES.map((l) => ({ id: l.id, label: l.label })),
];

/** Keeps ?filter= in the address bar so a filtered view can be shared, without a page reload. */
function syncUrl(filter: LensState) {
  const url = new URL(window.location.href);
  if (filter === "all") url.searchParams.delete("filter");
  else url.searchParams.set("filter", filter);
  window.history.replaceState(window.history.state, "", url);
}

/**
 * Filter chips + project grid. The chips are a native radio group, so they work with
 * arrow keys and screen readers. Cards animate out and in as the filter changes.
 */
export function WorkExplorer({ items }: { items: WorkItem[] }) {
  const [filter, setFilter] = useState<LensState>("all");
  const name = useId();

  // Adopt ?filter= from a shared link (read after hydration so the page can be pre-rendered).
  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get("filter");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time sync from the URL
    if (isLensId(fromUrl)) setFilter(fromUrl);
  }, []);

  function choose(next: LensState) {
    setFilter(next);
    syncUrl(next);
  }

  const visible = filter === "all" ? items : items.filter((item) => item.categories.includes(filter));
  const countFor = (id: LensState) =>
    id === "all" ? items.length : items.filter((item) => item.categories.includes(id)).length;

  return (
    <div>
      <fieldset>
        <legend className="sr-only">Filter projects</legend>
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((option) => (
            <label
              key={option.id}
              className="relative cursor-pointer rounded-full border border-rule bg-paper-raised px-4 py-2 text-sm font-semibold text-ink-muted transition-colors hover:border-accent-line hover:text-ink has-checked:border-transparent has-checked:text-on-accent has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-accent"
            >
              <input
                type="radio"
                name={name}
                value={option.id}
                checked={filter === option.id}
                onChange={() => choose(option.id)}
                className="sr-only"
              />
              {filter === option.id && (
                <m.span
                  aria-hidden
                  layoutId={`${name}-chip`}
                  transition={{ type: "spring", stiffness: 420, damping: 36 }}
                  className="absolute inset-0 rounded-full bg-accent"
                />
              )}
              <span className="relative">
                {option.label}
                <span className="ml-1.5 font-mono text-xs opacity-70">{countFor(option.id)}</span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <p className="mt-6 font-mono text-sm text-ink-muted" aria-live="polite">
        {visible.length} {visible.length === 1 ? "project" : "projects"}
      </p>

      <m.ul layout className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((item) => (
            <m.li
              key={item.key}
              layout
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {item.card}
            </m.li>
          ))}
        </AnimatePresence>
      </m.ul>
    </div>
  );
}
