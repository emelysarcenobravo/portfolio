import type { MetricGroup } from "@/data/projects/types";
import { CountUp } from "./count-up";

export function MetricGrid({ metrics }: { metrics: MetricGroup }) {
  return (
    <figure>
      <figcaption className="mb-4 text-xl font-bold tracking-tight">{metrics.title}</figcaption>
      <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {metrics.items.map((m) => (
          <div key={m.label} className="bg-accent-soft flex flex-col gap-2 rounded-2xl p-5">
            <dt className="font-mono text-[0.68rem] tracking-wider text-ink-muted uppercase">{m.label}</dt>
            <dd className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              {m.before && (
                <span className="text-ink-muted">
                  <span className="sr-only">from </span>
                  {m.before}
                  <span aria-hidden> →</span>
                  <span className="sr-only"> to</span>
                </span>
              )}
              <span className="text-4xl leading-none font-extrabold tracking-tight">
                <CountUp value={m.after} />
              </span>
              {m.change && (
                <span className="rounded-full bg-accent px-2 py-0.5 font-mono text-xs text-on-accent">{m.change}</span>
              )}
            </dd>
            {m.context && <dd className="text-sm text-ink-muted">{m.context}</dd>}
          </div>
        ))}
      </dl>
      {metrics.caption && <p className="mt-3 text-sm text-ink-muted">{metrics.caption}</p>}
    </figure>
  );
}
