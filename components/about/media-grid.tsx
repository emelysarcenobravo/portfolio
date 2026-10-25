import Image from "next/image";
import { ArrowUpRight, Play } from "@/components/ui/icons";
import { media, type MediaFeature } from "@/data/media";

/** Videos and talks I've been part of, each with the LinkedIn posts about it. */
export function MediaGrid() {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {media.map((item, i) => (
        <li key={item.title}>
          <MediaCard item={item} index={i} />
        </li>
      ))}
    </ul>
  );
}

function MediaCard({ item, index }: { item: MediaFeature; index: number }) {
  // The card opens the video; without one, it opens the first post.
  const main = item.video ?? item.posts?.[0]?.href;
  const extras = item.video ? (item.posts ?? []) : (item.posts ?? []).slice(1);

  return (
    <article
      style={{ "--lift-rotate": index % 2 ? "1.2deg" : "-1.2deg" } as React.CSSProperties}
      className="lift group relative flex h-full flex-col rounded-3xl border border-rule bg-paper-raised p-3 has-focus-visible:outline-2 has-focus-visible:outline-offset-4 has-focus-visible:outline-accent"
    >
      <div className="relative aspect-video overflow-hidden rounded-2xl bg-accent-soft">
        {item.image ? (
          <>
            <Image
              src={item.image.src}
              alt={item.image.alt}
              fill
              sizes="(min-width: 1024px) 18rem, (min-width: 640px) 50vw, 92vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none"
              style={{ objectPosition: item.image.position }}
            />
            {item.video && (
              <span
                aria-hidden
                className="absolute bottom-3 left-3 grid size-10 place-items-center rounded-full bg-paper-raised/90 text-accent shadow-lg backdrop-blur-sm"
              >
                <Play className="size-5" />
              </span>
            )}
          </>
        ) : (
          // No photo for this one: a quote-style cover instead.
          <div className="dot-grid flex h-full flex-col justify-end p-4">
            <span aria-hidden className="font-display text-6xl leading-none text-accent">
              “
            </span>
            <span className="font-hand text-2xl leading-none text-accent">on stage</span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col px-2 pt-4 pb-2">
        <p className="flex flex-wrap items-center gap-x-2 font-mono text-[0.7rem] tracking-wider text-ink-muted uppercase">
          <span className="text-accent">{item.outlet}</span>
          {item.date && <span className="ml-auto normal-case">{item.date}</span>}
        </p>
        <h3 className="mt-2 text-xl leading-snug text-balance">
          {main ? (
            <a
              href={main}
              target="_blank"
              rel="noreferrer"
              className="after:absolute after:inset-0 after:rounded-3xl after:content-[''] focus-visible:outline-none"
            >
              {item.title}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : (
            item.title
          )}
        </h3>
        <p className="mt-2 text-sm text-ink-muted">{item.role}</p>
        {extras.length > 0 && (
          // Sits above the card-wide link so each post can be opened on its own.
          <ul className="relative z-10 mt-auto space-y-1 border-t border-rule pt-3">
            {extras.map((post) => (
              <li key={post.href}>
                <a
                  href={post.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
                >
                  {post.label}
                  <ArrowUpRight className="size-3.5" />
                  <span className="sr-only">(LinkedIn, opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
