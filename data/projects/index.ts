import type { LensId, LensState } from "@/lib/lenses";
import { devmission } from "./devmission";
import { disneyverse } from "./disneyverse";
import { gatoraid } from "./gatoraid";
import { greenAi } from "./green-ai";
import { lata } from "./lata";
import { movieReviews } from "./movie-reviews";
import { phishing } from "./phishing";
import { translationQuiz } from "./translation-quiz";
import type { Project } from "./types";
import { wordGames } from "./word-games";

export type { Project } from "./types";

export const projects: Project[] = [
  gatoraid,
  phishing,
  devmission,
  lata,
  disneyverse,
  movieReviews,
  translationQuiz,
  wordGames,
  greenAi,
].sort((a, b) => a.order - b.order);

export const featuredProjects = projects.filter((p) => p.featured);
export const moreProjects = projects.filter((p) => !p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

/** Sort key for a project under a lens: most relevant first, default order breaks ties. */
export function rankFor(project: Project, lens: LensState) {
  if (lens === "all") return project.order;
  const relevance = project.lenses[lens]?.relevance ?? 0;
  return (3 - relevance) * 100 + project.order;
}

/** The categories a project is filed under on the Work page: its strongest lenses first. */
export function categoriesOf(project: Project): LensId[] {
  return (Object.entries(project.lenses) as [LensId, { relevance: number }][])
    .filter(([, view]) => view.relevance >= 2)
    .sort((a, b) => b[1].relevance - a[1].relevance)
    .map(([id]) => id);
}
