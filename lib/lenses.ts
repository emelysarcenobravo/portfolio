/**
 * The vocabulary shared by the whole site:
 * - STAGES: the steps a project moves through, used as chapter labels in case studies.
 * - LENSES: the four kinds of work I do. They're the filters on the Work page and the
 *   groups on the Skills page. (Called "lenses" because each one is a way of looking at the same work.)
 */

export const STAGES = [
  { id: "problem", label: "Problem" },
  { id: "people", label: "People" },
  { id: "design", label: "Design" },
  { id: "build", label: "Build" },
  { id: "intelligence", label: "Data & AI" },
  { id: "outcome", label: "Outcome" },
] as const;

export type StageId = (typeof STAGES)[number]["id"];

export const LENSES = [
  {
    id: "build",
    label: "Software Engineering",
    short: "Software",
    blurb: "Full-stack apps, APIs, systems programming and team Git workflows.",
  },
  {
    id: "ai",
    label: "AI and Machine Learning",
    short: "AI",
    blurb: "Model comparison, evaluation, bias analysis and LLM-powered features.",
  },
  {
    id: "design",
    label: "UX and Design",
    short: "UX and Design",
    blurb: "Research, personas, prototypes and accessible, responsive interfaces.",
  },
  {
    id: "marketing",
    label: "Marketing and Data",
    short: "Marketing",
    blurb: "Campaigns, SEO, analytics and measuring what actually changed.",
  },
] as const;

export type LensId = (typeof LENSES)[number]["id"];
/** "all" means no filter. */
export type LensState = LensId | "all";

export const LENS_IDS = LENSES.map((l) => l.id) as LensId[];

export function isLensId(value: unknown): value is LensId {
  return typeof value === "string" && (LENS_IDS as string[]).includes(value);
}

export function getLens(id: LensId) {
  return LENSES.find((l) => l.id === id)!;
}
