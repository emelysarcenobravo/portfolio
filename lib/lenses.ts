export const STAGES = [
    { id: "problem", label: "Problem", verb: "Identify what needs to change" },
    { id: "people", label: "People", verb: "Understand who it affects" },
    { id: "design", label: "Design", verb: "Shape an intuitive solution" },
    { id: "engineering", label: "Engineering", verb: "Turn ideas into working products"},
    { id: "intelligence", label: "Data & AI", verb: "Use data and AI with purpose" },
    { id: "outcome", label: "Outcome", verb: "Measure impact and tell the story" },
] as const;

export type StageId = (typeof STAGES)[number]["id"]

export const LENSES = [
    {
        id: "engineering", 
        label: "Engineering", 
        question: "How was it engineered?",
        focus: "Architecture, implementation, technical decisions, and development", 
        stages: ["design", "engineering"],
    },
    {
        id: "ai",
        label: "AI",
        question: "Where does intelligence fit?",
        focus: "Models, data, evaluation, and meaningful human-AI interaction",
        stages: ["engineering", "intelligence"],
    },
    {
        id: "design",
        label: "Design",
        question: "Who is it for?",
        focus: "User research, user flows, prototypes, visual design, and accessibility",
        stages: ["people", "design", "outcome"],
    },
    {
        id: "marketing", 
        label: "Marketing", 
        question: "Who did it reach and what changed?",
        focus: "Audience research, campaigns, analytics, and measurable outcomes",
        stages: ["people", "intelligence", "outcome"],
    },
] as const satisfies readonly {
    id: string; 
    label: string;
    question: string;
    focus: string; 
    stages: readonly StageId[];
}[];

export type LensId = (typeof LENSES)[number]["id"];

export type LensState = LensId | "all";

export const LENS_IDS = LENSES.map((l) => l.id) as LensId[];
export function isLensId(value: unknown): value is LensId {
    return typeof value === "string" && (LENS_IDS as string[]).includes(value);
}

export function getLens(id: LensId){
    return LENSES.find((l) => l.id === id);
}