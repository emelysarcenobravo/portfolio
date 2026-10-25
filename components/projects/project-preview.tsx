import Image from "next/image";
import type { Preview } from "@/data/projects/types";

/**
 * The visual for a project: a real screenshot or artefact when there is a good one,
 * otherwise a designed cover built from the project's own facts (never a fake screenshot).
 * Every preview uses the same 4:3 frame so cards line up. Images are scaled as large as they can be
 * without cropping; any small gap is filled with a color matched to the image's own edges.
 */
export function ProjectPreview({
  preview,
  priority = false,
  size = "large",
  framed = false,
  className = "",
}: {
  preview: Preview;
  priority?: boolean;
  /** large: work cards and case-study heroes. small: thumbnails (next/previous links). */
  size?: "large" | "small";
  /** Inside a frame (e.g. the browser window) that already rounds the corners. */
  framed?: boolean;
  className?: string;
}) {
  const small = size === "small";
  const radius = framed ? "" : small ? "rounded-xl" : "rounded-2xl";

  if (preview.kind === "cover") {
    return (
      <div
        className={`dot-grid relative flex aspect-[4/3] flex-col justify-between overflow-hidden bg-accent-soft ${radius} ${
          small ? "p-3" : "p-6 sm:p-8"
        } ${className}`}
      >
        {!small && <p className="font-mono text-[0.7rem] tracking-[0.2em] text-accent uppercase">Case study</p>}
        <div>
          <p className={`font-extrabold tracking-tight ${small ? "text-base" : "text-4xl sm:text-5xl"}`}>
            {preview.label}
          </p>
          {!small && (
            <dl className="mt-5 grid max-w-sm grid-cols-2 gap-x-6 gap-y-3">
              {preview.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-2xl leading-none font-bold whitespace-nowrap text-accent sm:text-3xl">
                    {stat.value}
                  </dd>
                  <dd aria-hidden className="mt-1 text-xs text-ink-muted">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </div>
    );
  }

  const ratio = preview.width / preview.height;
  const forcedCover = preview.fit === "cover";
  // In a frame (the case-study hero) the image keeps its own shape, so there's no empty space around it.
  const frameRatio = framed ? Math.min(Math.max(ratio, 4 / 5), 2) : 4 / 3;
  const exactFit = Math.abs(frameRatio - ratio) < 0.03;

  return (
    <div
      style={{ background: preview.matte ?? "var(--tint)", aspectRatio: frameRatio }}
      className={`relative overflow-hidden ${radius} ${className}`}
    >
      <Image
        src={preview.src}
        alt={preview.alt}
        fill
        priority={priority}
        sizes={small ? "10rem" : "(min-width: 1024px) 36rem, (min-width: 640px) 50vw, 92vw"}
        className={`transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none ${
          forcedCover || exactFit ? "object-cover" : "object-contain"
        }`}
        style={{ objectPosition: forcedCover ? preview.position : undefined }}
      />
    </div>
  );
}

/** A preview inside a little browser window, for the top of a case study. */
export function WindowFrame({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-rule bg-paper-raised shadow-[0_30px_60px_-30px] shadow-accent/40">
      <div className="flex items-center gap-1.5 border-b border-rule px-4 py-2.5">
        <span aria-hidden className="size-2.5 rounded-full bg-accent-line" />
        <span aria-hidden className="size-2.5 rounded-full bg-accent-line/70" />
        <span aria-hidden className="size-2.5 rounded-full bg-accent-line/40" />
        <span className="ml-3 truncate font-mono text-xs text-ink-muted">{label}</span>
      </div>
      {children}
    </div>
  );
}
