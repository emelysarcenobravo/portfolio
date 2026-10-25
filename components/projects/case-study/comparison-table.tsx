import type { Comparison } from "@/data/projects/types";
import { CountUp } from "./count-up";

/**
 * A real <table> so screen readers can navigate it by row and column.
 * The highlighted row is tinted, and the best value in each column is marked.
 */
export function ComparisonTable({ comparison }: { comparison: Comparison }) {
  const best = comparison.columns.map((_, c) => Math.max(...comparison.rows.map((r) => r.values[c])));

  return (
    <figure className="overflow-hidden rounded-3xl border border-rule bg-paper-raised">
      <figcaption className="px-5 pt-5 text-xl font-bold tracking-tight md:px-7 md:pt-7">{comparison.title}</figcaption>
      <div className="overflow-x-auto px-2 pb-2 md:px-4 md:pb-4">
        <table className="mt-4 w-full min-w-[34rem] border-separate border-spacing-y-1.5 text-left">
          <thead>
            <tr className="font-mono text-[0.7rem] tracking-wider text-ink-muted uppercase">
              <th scope="col" className="px-3 py-2 font-normal">
                Model
              </th>
              {comparison.columns.map((col) => (
                <th key={col} scope="col" className="px-3 py-2 text-right font-normal">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparison.rows.map((row) => (
              <tr key={row.label} className={row.highlight ? "bg-accent-soft" : ""}>
                <th scope="row" className="rounded-l-2xl px-3 py-3 font-normal">
                  <span className="block font-medium">{row.label}</span>
                  {row.note && <span className="block text-xs text-ink-muted">{row.note}</span>}
                </th>
                {row.values.map((value, c) => {
                  const isBest = value === best[c];
                  return (
                    <td
                      key={comparison.columns[c]}
                      className={`px-3 py-3 text-right text-xl font-bold tracking-tight last:rounded-r-2xl ${isBest ? "text-accent" : ""}`}
                    >
                      <CountUp value={`${value}${comparison.unit}`} />
                      {isBest && <span className="sr-only"> (best)</span>}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {comparison.caption && <p className="px-5 pb-5 text-sm text-ink-muted md:px-7 md:pb-7">{comparison.caption}</p>}
    </figure>
  );
}
