"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

/** Splits "2.7K" into 2.7 + "K", "16.7%" into 16.7 + "%", keeping decimal places and thousands separators. */
function parse(value: string) {
  const match = value.match(/^([^\d-]*)(-?[\d,]*\.?\d+)(.*)$/);
  if (!match) return null;
  const [, prefix, number, suffix] = match;
  const decimals = number.split(".")[1]?.length ?? 0;
  const grouped = number.includes(",");
  const format = (n: number) =>
    `${prefix}${n.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals, useGrouping: grouped })}${suffix}`;
  return { target: Number(number.replace(/,/g, "")), format };
}

/**
 * Counts a metric up from zero the first time it scrolls into view.
 * The server renders the final value, so it is correct without JavaScript, and
 * screen readers always get the final value rather than the moving number.
 */
export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const parsed = parse(value);
  const [display, setDisplay] = useState(value);

  // Reset to zero only while the number is still below the fold, so the reset is never seen.
  useEffect(() => {
    const el = ref.current;
    if (!parsed || !el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top > window.innerHeight) {
      setDisplay(parsed.format(0));
    }
    // Runs once on mount; parsed is derived from a static prop.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!inView || !parsed || display === value) return;
    const controls = animate(0, parsed.target, {
      duration: 1.4,
      ease: [0.2, 0.8, 0.2, 1],
      onUpdate: (n) => setDisplay(parsed.format(n)),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <span ref={ref} className="tabular-nums">
      <span aria-hidden>{display}</span>
      <span className="sr-only">{value}</span>
    </span>
  );
}
