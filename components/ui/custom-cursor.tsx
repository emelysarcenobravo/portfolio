"use client";

import { useEffect, useRef } from "react";

const TRAIL_LENGTH = 8;

export function CustomCursor() {
  const trailRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const dots = trailRef.current;

    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let mouseX = 0;
    let mouseY = 0;

    const positions = Array.from({ length: TRAIL_LENGTH }, () => ({
      x: 0,
      y: 0,
    }));

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrame: number;

    const animate = () => {
      positions[0].x += (mouseX - positions[0].x) * 0.35;
      positions[0].y += (mouseY - positions[0].y) * 0.35;

      for (let i = 1; i < positions.length; i++) {
        positions[i].x +=
          (positions[i - 1].x - positions[i].x) * 0.25;
        positions[i].y +=
          (positions[i - 1].y - positions[i].y) * 0.25;
      }

      dots.forEach((dot, i) => {
        if (!dot) return;

        const scale = 1 - i / TRAIL_LENGTH;
        const opacity = (1 - i / TRAIL_LENGTH) * 0.35;

        dot.style.transform = `translate3d(
          ${positions[i].x - 5}px,
          ${positions[i].y - 5}px,
          0
        ) scale(${scale})`;

        dot.style.opacity = String(opacity);
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-9999"
    >
      {Array.from({ length: TRAIL_LENGTH }).map((_, i) => (
        <div
          key={i}
          ref={(element) => {
            if (element) trailRef.current[i] = element;
          }}
          className="absolute left-0 top-0 h-3 w-3 rounded-full bg-accent blur-[3px]"
          style={{
            opacity: 0,
            willChange: "transform, opacity",
          }}
        />
      ))}
    </div>
  );
}