/**
 * A hand-drawn wavy underline that sits under a word and draws itself in on load.
 * Wrap the word: <Squiggle>word</Squiggle>.
 */
export function Squiggle({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative -mr-[0.06em] inline-block whitespace-nowrap">
      {children}
      <svg
        aria-hidden
        viewBox="0 0 200 14"
        preserveAspectRatio="none"
        className="absolute -bottom-[0.18em] left-0 h-[0.32em] w-full overflow-visible"
      >
        <path
          className="squiggle-path"
          d="M2 9 C 20 2, 35 13, 52 7 S 85 2, 102 8 S 135 13, 152 6 S 185 3, 198 8"
          fill="none"
          stroke="var(--accent-line)"
          strokeWidth="4"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </span>
  );
}
