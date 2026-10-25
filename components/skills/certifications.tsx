import { ArrowUpRight } from "@/components/ui/icons";
import { Tag } from "@/components/ui/tag";
import { certifications, programs } from "@/data/skills";
import { getLens } from "@/lib/lenses";

/** Verified certifications on the left, selective programs and fellowships on the right. */
export function Certifications() {
  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <ul className="grid gap-4 lg:col-span-8">
        {certifications.map((cert) => (
          <li
            key={cert.name}
            className="grid gap-5 rounded-3xl border border-rule bg-paper-raised p-6 sm:grid-cols-[auto_1fr] md:p-7"
          >
            {/* A seal, like the stamp on a certificate. */}
            <span
              aria-hidden
              className="grid size-14 -rotate-6 place-items-center rounded-full border-2 border-dashed border-accent-line bg-accent-soft text-xl font-extrabold text-accent"
            >
              {cert.issuer.charAt(0)}
            </span>
            <div>
              <p className="flex flex-wrap items-center gap-2 font-mono text-[0.7rem] tracking-wider text-ink-muted uppercase">
                <span>{cert.issuer}</span>
                <span aria-hidden>·</span>
                <span>{cert.date}</span>
                <Tag strong>{getLens(cert.lens).short}</Tag>
              </p>
              <h3 className="mt-2 text-xl font-bold tracking-tight">{cert.name}</h3>
              <p className="mt-2 leading-relaxed text-ink-muted">{cert.detail}</p>
              {cert.verifyUrl && (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-rule px-3.5 py-1.5 text-sm font-semibold hover:border-accent hover:text-accent"
                >
                  Verify credential
                  <ArrowUpRight className="size-4" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>

      <section
        aria-labelledby="programs-title"
        className="dot-grid rounded-3xl bg-accent-soft p-6 md:p-7 lg:col-span-4"
      >
        <h3 id="programs-title" className="font-hand text-2xl leading-none text-accent">
          Programs & fellowships
        </h3>
        <ul className="mt-5 space-y-5">
          {programs.map((program) => (
            <li key={program.name} className="flex gap-3">
              <span aria-hidden className="mt-2 size-2.5 shrink-0 rounded-full bg-accent" />
              <div>
                <p className="text-lg font-bold tracking-tight">{program.name}</p>
                <p className="text-sm text-ink-muted">
                  {program.org} · {program.period}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
