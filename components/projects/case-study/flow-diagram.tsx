import { ArrowDown, ArrowRight } from "@/components/ui/icons";
import type { FlowDiagram as FlowDiagramData } from "@/data/projects/types";

/** Pipelines and architectures as structured lists, so they read correctly without the visuals. */
export function FlowDiagram({ diagram }: { diagram: FlowDiagramData }) {
  return (
    <figure className="rounded-3xl border border-rule bg-paper-raised p-5 md:p-8">
      <figcaption className="mb-6">
        <span className="font-mono text-xs tracking-wider text-ink-muted uppercase">Diagram</span>
        <span className="mt-1 block text-xl font-bold tracking-tight">{diagram.title}</span>
      </figcaption>
      <ol className="flex flex-col gap-3 md:flex-row md:items-stretch md:gap-0">
        {diagram.columns.map((column, i) => (
          <li key={column.label} className="flex flex-col md:flex-1 md:flex-row md:items-center">
            <div className="flex-1">
              <p className="mb-2 font-mono text-[0.7rem] tracking-wider text-ink-muted uppercase">{column.label}</p>
              <ul className="space-y-2">
                {column.nodes.map((node) => (
                  <li key={node.title} className="bg-accent-soft rounded-xl px-3 py-2.5">
                    <span className="block text-sm font-medium">{node.title}</span>
                    {node.note && <span className="block text-xs text-ink-muted">{node.note}</span>}
                  </li>
                ))}
              </ul>
            </div>
            {i < diagram.columns.length - 1 && (
              <span aria-hidden className="flex justify-center py-1 text-accent md:px-3 md:pt-6 md:pb-0">
                <ArrowDown className="size-4 md:hidden" />
                <ArrowRight className="hidden size-4 md:block" />
              </span>
            )}
          </li>
        ))}
      </ol>
      {diagram.caption && <p className="mt-6 text-sm text-ink-muted">{diagram.caption}</p>}
    </figure>
  );
}
