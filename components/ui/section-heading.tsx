/** Eyebrow label + heading + optional side note, used at the top of page sections. */
export function SectionHeading({
  id,
  eyebrow,
  children,
  aside,
  as: Heading = "h2",
}: {
  id: string;
  eyebrow: string;
  children: React.ReactNode;
  aside?: React.ReactNode;
  as?: "h1" | "h2";
}) {
  return (
    <div className="mb-10 grid gap-4 md:mb-12 md:grid-cols-12 md:items-end">
      <div className="md:col-span-8">
        <p className="font-hand text-2xl leading-none text-accent">{eyebrow}</p>
        <Heading id={id} className="mt-3 text-4xl font-bold tracking-tight text-balance md:text-5xl">
          {children}
        </Heading>
      </div>
      {aside && <div className="leading-relaxed text-ink-muted md:col-span-4 md:text-right">{aside}</div>}
    </div>
  );
}
