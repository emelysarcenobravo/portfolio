import { categoriesOf, getProject, projects } from "@/data/projects";
import { getLens } from "@/lib/lenses";
import { OG_SIZE, renderOgImage } from "@/lib/og";

export const alt = "Case study by Emely Sarceno Bravo";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug)!;
  return renderOgImage({
    eyebrow: `Case study · ${project.period}`,
    title: project.title,
    tags: categoriesOf(project).map((id) => getLens(id).short),
  });
}
