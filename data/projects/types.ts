import type { LensId, StageId } from "@/lib/lenses";

/** How a project reads through one lens. */
export type LensView = {
  /** 3 = key project for this lens, 1 = also relevant. Drives ordering. */
  relevance: 1 | 2 | 3;
  /** The one fact a card shows when this lens is active. */
  headline: string;
  points: string[];
};

export type Stage = {
  /** One or two sentences, shown large. */
  summary: string;
  /** Supporting paragraphs. */
  body?: string[];
  /** Short supporting facts, shown as a list. */
  details?: string[];
};

export type Metric = {
  label: string;
  before?: string;
  after: string;
  change?: string;
  context?: string;
};

export type MetricGroup = {
  stage: StageId;
  title: string;
  caption?: string;
  items: Metric[];
};

/** A small table, e.g. model results. Values are numbers so they can also be drawn as bars. */
export type Comparison = {
  stage: StageId;
  title: string;
  caption?: string;
  unit: string;
  columns: string[];
  rows: { label: string; note?: string; values: number[]; highlight?: boolean }[];
};

export type Figure = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  stage: StageId;
  /** Spans the full content width instead of sitting in a grid. */
  wide?: boolean;
};

/** A left-to-right flow (pipeline, architecture) rendered as an accessible list. */
export type FlowDiagram = {
  title: string;
  caption?: string;
  stage: StageId;
  columns: { label: string; nodes: { title: string; note?: string }[] }[];
};

/** The image beside a project card, or a designed cover when there's no good screenshot. */
export type Preview =
  | {
      kind: "image";
      src: string;
      alt: string;
      width: number;
      height: number;
      /** "contain" (default) shows the whole image over a soft blurred backdrop; "cover" fills and crops. */
      fit?: "cover" | "contain";
      /** CSS background behind the image, matched to its edges so any gap blends in. */
      matte?: string;
      position?: string;
    }
  | {
      kind: "cover";
      label: string;
      stats: { value: string; label: string }[];
      /** Lens color used for the numbers. Defaults to the accent. */
      tone?: LensId;
    };

export type ProjectLink = {
  label: string;
  href: string;
  kind: "live" | "code" | "demo" | "slides" | "design" | "article";
};

export type Project = {
  slug: string;
  /** Short name for lists, e.g. "GatorAid". */
  name: string;
  title: string;
  /** Role · organization, shown above the title. */
  kicker: string;
  /** One or two sentences for the card. */
  summary: string;
  period: string;
  role: string;
  team?: string;
  /** Position in the default, un-lensed view. */
  order: number;
  /** Featured projects get the large cards; the rest appear under "More projects". */
  featured: boolean;
  /** Card fact for the default view. */
  headline: string;
  /** The project's guiding "How might we…" question, shown at the top of the case study. */
  hmw: string;
  preview: Preview;
  stack: string[];
  links: ProjectLink[];
  /** What I personally did, separate from what the team did. */
  contribution: string[];
  lenses: Partial<Record<LensId, LensView>>;
  stages: Partial<Record<StageId, Stage>>;
  metrics?: MetricGroup[];
  comparison?: Comparison;
  figures?: Figure[];
  diagram?: FlowDiagram;
  learned: { title: string; body: string }[];
};
