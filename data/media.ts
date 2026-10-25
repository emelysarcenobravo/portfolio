export type MediaFeature = {
  outlet: string;
  title: string;
  date?: string;
  /** What I did in it, in a few words. */
  role: string;
  /** The video itself. The card opens this, or the first post when there is no video. */
  video?: string;
  /** LinkedIn posts about it, by me or the organizations involved. */
  posts?: { label: string; href: string }[];
  /**
   * Thumbnail in public/images/media, cropped to 16:9 on the card. Features without one get a designed cover.
   * `position` is the CSS object-position that keeps the important part in frame, e.g. faces.
   */
  image?: { src: string; alt: string; width: number; height: number; position?: string };
};

/** Newest first. */
export const media: MediaFeature[] = [
  {
    outlet: "Golden State Valkyries",
    title: "Free Throws for Futures | Dev/Mission",
    date: "Aug 2026",
    role: "Featured",
    video: "https://www.youtube.com/watch?v=fw8uzfUi_Zc",
    posts: [{ label: "Dev/Mission CEO’s post", href: "https://lnkd.in/p/giDduUzi" }],
    image: {
      src: "/images/media/valkyries-free-throws.png",
      alt: "Emely smiling during an interview against a purple backdrop, captioned “Emely Sarceno Bravo (Alumna).”",
      width: 2458,
      height: 1380,
    },
  },
  {
    outlet: "ScholarMatch",
    title: "The ScholarMatch Impact",
    date: "Nov 2025",
    role: "Featured",
    video: "https://www.youtube.com/watch?v=d7UzZ4B2IxM",
    posts: [{ label: "ScholarMatch’s post", href: "https://lnkd.in/p/gWGE7CgF" }],
    image: {
      src: "/images/media/scholarmatch-impact.png",
      alt: "Emely smiling as she works on a laptop beside another woman on a couch.",
      width: 2454,
      height: 1186,
    },
  },
  {
    outlet: "KTVU FOX 2",
    title: "Closing the digital divide: Dev/Mission’s impact",
    date: "Oct 2025",
    role: "Interviewed with Dev/Mission’s founder and CEO",
    video: "https://www.ktvu.com/video/1722253",
    posts: [{ label: "Dev/Mission CEO’s post", href: "https://lnkd.in/p/gaiWzEey" }],
    image: {
      src: "/images/media/ktvu-devmission.png",
      alt: "Emely on the KTVU FOX 2 news set with Dev/Mission’s founder and a news anchor, beside a Hispanic Heritage Month screen.",
      width: 1125,
      height: 1500,
      position: "50% 22%",
    },
  },
  {
    outlet: "Dev/Mission Gala",
    title: "Speaking to city officials and program funders",
    date: "Sep 2025",
    role: "Keynote Speaker",
    posts: [
      { label: "My post about the gala", href: "https://lnkd.in/p/gdiTN36p" },
      { label: "Dev/Mission’s post", href: "https://lnkd.in/p/gi75MVXg" },
    ],
    image: {
      src: "/images/media/gala-devmission.jpg",
      alt: "Emely speaking at a podium at the W San Francisco, with a slide behind her reading “Emely Bravo, Pre-Apprenticeship Alum” and guests seated at tables.",
      width: 2400,
      height: 1600,
    },
  },
];
