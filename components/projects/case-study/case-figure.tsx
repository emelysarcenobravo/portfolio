import Image from "next/image";
import type { Figure } from "@/data/projects/types";

/**
 * A captioned image inside a case study. The box takes the image's own shape,
 * so the whole image fills it edge to edge, with no cropping and no empty space.
 */
export function CaseFigure({ figure }: { figure: Figure }) {
  return (
    <figure>
      <div className="overflow-hidden rounded-3xl border border-rule bg-paper-raised">
        <Image
          src={figure.src}
          alt={figure.alt}
          width={figure.width}
          height={figure.height}
          sizes={figure.wide ? "(min-width: 1024px) 56rem, 100vw" : "(min-width: 1024px) 28rem, 100vw"}
          className="h-auto w-full"
        />
      </div>
      <figcaption className="mt-3 text-sm text-ink-muted">{figure.caption}</figcaption>
    </figure>
  );
}
