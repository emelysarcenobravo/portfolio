"use client";

import { animate, m, useMotionValue, useReducedMotion } from "motion/react";
import { useEffect, useId, useRef } from "react";
import { Portrait } from "@/components/about/portrait";
import { education } from "@/data/experience";
import { site } from "@/data/site";

/** Distance from the badge up to the pivot. The lanyard is this long, so its top end always sits off-screen. */
const STRAP = 600;
const DEG_PER_PX = 180 / Math.PI / STRAP;
/** Loose spring, so the badge swings a few times before it settles. */
const SWING = { type: "spring", stiffness: 55, damping: 3.5 } as const;

/**
 * The headshot as a plastic work badge on a lanyard hanging from the top of the screen.
 * It swings in on load, gets a nudge on hover, and can be pulled sideways and let go.
 */
export function IdBadge() {
  const rotate = useMotionValue(0);
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const start = useRef(0);

  const swing = (velocity: number) => {
    if (!reduce) animate(rotate, 0, { ...SWING, velocity });
  };

  useEffect(() => {
    if (reduce) return;
    const t = setTimeout(() => animate(rotate, 0, { ...SWING, velocity: 28 }), 250);
    return () => clearTimeout(t);
  }, [reduce, rotate]);

  return (
    <m.div
      ref={ref}
      style={{ rotate, transformOrigin: `50% -${STRAP}px`, touchAction: "pan-y" }}
      onHoverStart={(e) => {
        // Motion's hover event has no currentTarget, so measure the badge through its ref.
        const box = ref.current?.getBoundingClientRect();
        if (dragging.current || !box) return;
        swing(e.clientX < box.left + box.width / 2 ? 12 : -12);
      }}
      onPanStart={() => {
        if (reduce) return;
        dragging.current = true;
        rotate.stop();
        start.current = rotate.get();
      }}
      onPan={(_, info) => {
        if (reduce) return;
        rotate.set(Math.max(-12, Math.min(12, start.current + info.offset.x * DEG_PER_PX)));
      }}
      onPanEnd={(_, info) => {
        dragging.current = false;
        swing(info.velocity.x * DEG_PER_PX);
      }}
      className="relative mx-auto max-w-76 cursor-grab select-none active:cursor-grabbing"
    >
      <Lanyard />

      {/* The card: white PVC, so it stays white in dark mode too. */}
      <div className="relative overflow-hidden rounded-[14px] bg-linear-to-b from-white to-[#f3efee] text-[#2a1a1f] shadow-[0_30px_60px_-20px_rgb(0_0_0/0.55),0_8px_18px_-8px_rgb(0_0_0/0.35),inset_0_1px_0_white] ring-1 ring-black/10">
        {/* Punched slot the clip goes through. */}
        <div className="flex h-9 items-start justify-center pt-3.5">
          <span className="h-2 w-11 rounded-full bg-[#d8d1d0] shadow-[inset_0_1px_2px_rgb(0_0_0/0.45)]" />
        </div>

        <p className="bg-[#8c1d40] px-4 py-2 text-center font-mono text-[0.6rem] tracking-[0.16em] whitespace-nowrap text-white uppercase">
          Software · AI · UX · Marketing
        </p>

        <div className="px-4 pt-4">
          <Portrait variant="frame" priority className="pointer-events-none rounded-md! ring-1 ring-black/10" />
        </div>

        <div className="px-4 pt-3.5 pb-4">
          <p className="font-display text-[1.35rem] leading-tight">{site.name}</p>
          <p className="mt-0.5 text-xs text-[#6e5a60]">{education.degree}</p>
          <div className="mt-3 flex items-end justify-between border-t border-black/10 pt-2.5">
            <p className="font-mono text-[0.6rem] leading-relaxed tracking-wider text-[#6e5a60] uppercase">
              SF State
              <br />
              {education.period}
            </p>
            {/* Holographic sticker. */}
            {/* <span
              aria-hidden
              className="size-7 rounded-full opacity-80 ring-1 ring-black/10"
              style={{
                background: "conic-gradient(from 30deg,#8c1d40, #b84a6b, #d9a0b2, #f0d5de, #8c1d40, #b84a6b, #8c1d40)",
              }}
            /> */}
          </div>
        </div>

        {/* Glossy sheen across the plastic. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgb(255_255_255/0.55)_0%,rgb(255_255_255/0)_30%,rgb(255_255_255/0)_70%,rgb(255_255_255/0.18)_100%)]"
        />
      </div>
    </m.div>
  );
}

/** Woven fabric strap, metal crimp, split ring and a clear snap strap, drawn above the card. */
function Lanyard() {
  const id = useId();
  const weave = `${id}-weave`;
  const shade = `${id}-shade`;
  const metal = `${id}-metal`;
  // Where the fabric ends and the hardware starts, measured from the top of the SVG.
  const base = STRAP - 58;
  const straps = [`12,0 34,0 59,${base} 45,${base}`, `86,0 108,0 75,${base} 61,${base}`];

  return (
    <svg
      aria-hidden
      width="120"
      height={STRAP + 30}
      viewBox={`0 0 120 ${STRAP + 30}`}
      className="pointer-events-none absolute left-1/2 z-10 -translate-x-1/2 overflow-visible"
      style={{ top: -STRAP }}
    >
      <defs>
        <pattern id={weave} width="4" height="3" patternUnits="userSpaceOnUse">
          <rect width="4" height="3" fill="#8c1d40" />
          <rect width="4" height="1" fill="#a3294f" />
        </pattern>
        <linearGradient id={shade} x1="0" x2="1">
          <stop offset="0" stopColor="black" stopOpacity="0.28" />
          <stop offset="0.35" stopColor="white" stopOpacity="0.12" />
          <stop offset="1" stopColor="black" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id={metal} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f2eeef" />
          <stop offset="0.45" stopColor="#a8a0a3" />
          <stop offset="0.7" stopColor="#e4dfe0" />
          <stop offset="1" stopColor="#7e7578" />
        </linearGradient>
      </defs>

      {/* Two strap ends meeting at the crimp. */}
      {straps.map((points) => (
        <g key={points}>
          <polygon points={points} fill={`url(#${weave})`} />
          <polygon points={points} fill={`url(#${shade})`} />
        </g>
      ))}

      {/* Crimp. */}
      <rect
        x="43"
        y={base - 6}
        width="34"
        height="18"
        rx="3"
        fill={`url(#${metal})`}
        stroke="#6d6467"
        strokeWidth="0.75"
      />
      <line x1="47" x2="73" y1={base + 3} y2={base + 3} stroke="#6d6467" strokeWidth="0.75" opacity="0.6" />

      {/* Split ring. */}
      <circle cx="60" cy={base + 22} r="9" fill="none" stroke={`url(#${metal})`} strokeWidth="3.2" />
      <circle cx="60" cy={base + 22} r="9" fill="none" stroke="#6d6467" strokeWidth="0.5" opacity="0.6" />

      {/* Clear vinyl strap with a snap, running down into the card's slot. */}
      <rect
        x="53"
        y={base + 27}
        width="14"
        height={STRAP - base - 5}
        rx="4"
        fill="rgb(255 255 255 / 0.28)"
        stroke="rgb(255 255 255 / 0.7)"
        strokeWidth="1"
      />
      <circle cx="60" cy={STRAP - 8} r="3.6" fill={`url(#${metal})`} stroke="#6d6467" strokeWidth="0.6" />
    </svg>
  );
}
