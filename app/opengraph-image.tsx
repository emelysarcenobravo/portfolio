import { OG_SIZE, renderOgImage } from "@/lib/og";

export const alt = "Emely Sarceno Bravo: I build digital experiences where technology meets people.";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    eyebrow: "Portfolio",
    title: "I build digital experiences where technology meets",
    highlight: "people.",
    photo: true,
  });
}
