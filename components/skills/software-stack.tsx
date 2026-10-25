import { stack } from "@/data/skills";

/** The tools behind the work, by category. */
export function SoftwareStack() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stack.map((category) => (
        <li key={category.title} className="rounded-3xl border border-rule bg-paper-raised p-5">
          <h3 className="flex items-center gap-2 font-mono text-xs tracking-wider text-accent uppercase">
            <span aria-hidden className="size-2 rounded-full bg-accent" />
            {category.title}
          </h3>
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {category.tools.map((tool) => (
              <li
                key={tool}
                className="rounded-full bg-tint px-3 py-1 text-sm transition-colors hover:bg-accent-soft hover:text-accent motion-reduce:transition-none"
              >
                {tool}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
