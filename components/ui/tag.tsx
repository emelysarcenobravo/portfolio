/** A small rounded label, e.g. a project category or tool. */
export function Tag({ children, strong = false }: { children: React.ReactNode; strong?: boolean }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 font-mono text-[0.68rem] tracking-wider uppercase ${
        strong ? "bg-accent-soft text-accent" : "border border-rule text-ink-muted"
      }`}
    >
      {children}
    </span>
  );
}
