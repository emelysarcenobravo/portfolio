"use client";

import { domMax, LazyMotion, MotionConfig } from "motion/react";

/**
 * Motion setup for the whole site. reducedMotion="user" skips every animation
 * for visitors who ask their device for less motion.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domMax} strict>
        {children}
      </LazyMotion>
    </MotionConfig>
  );
}
