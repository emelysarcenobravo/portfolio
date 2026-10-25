import type { Project } from "./types";

export const lata: Project = {
  slug: "lata",
  name: "LATA",
  title: "LATA: helping a teachers’ association grow online",
  kicker: "Webmaster & Marketing Intern · Latin American Teachers Association",
  summary:
    "LATA supports San Francisco’s Latine students and teachers. As webmaster I made the website easier to find and easier to give through: online donations rose 2,600% and visibility 135%. I’ve since returned as their marketing intern.",
  order: 4,
  featured: true,
  period: "Jan 2025 – present",
  role: "Webmaster (website, donations, SEO) · Marketing intern (events, social, LinkedIn)",
  headline: "+2,600% online donations",
  hmw: "How might we make LATA easier to find, support and donate to online?",
  preview: {
    kind: "image",
    src: "/images/work/lata-site.jpg",
    alt: "The LATA SF website homepage: purple navigation bar with the LATA logo, and a banner reading “Building a Brighter Future for San Francisco's Latine Students and Teachers” beside a video of scholarship recipients.",
    width: 2000,
    height: 1112,
    matte: "#ffffff",
  },
  stack: ["WordPress", "Givebutter API", "SEO", "HTML & CSS", "Canva", "LinkedIn"],
  links: [
    { label: "Live site: latasf.org", href: "https://latasf.org/", kind: "live" },
    { label: "Kickoff event flyers", href: "https://canva.link/hjq0i7s0dxfv7a3", kind: "design" },
  ],
  contribution: [
    "Integrated Givebutter’s API, a fundraising platform, into the website, increasing online donations by 2,600%.",
    "Improved SEO by optimizing metadata, content structure and keyword relevance, increasing visibility and student outreach by 135%.",
    "Applied iterative design to improve the UI/UX, keeping the site responsive and accessible.",
    "Publish LATA’s monthly newsletters on the WordPress site so updates and events go out on time.",
    "As marketing intern: designed two flyers for the Pa’Lante con LATA kickoff event, and manage LATA’s LinkedIn page.",
  ],
  lenses: {
    marketing: {
      relevance: 3,
      headline: "+2,600% donations · +135% visibility",
      points: [
        "Turned the website into a fundraising channel: donations happen on the site itself, through Givebutter.",
        "SEO work on metadata, content structure and keywords made LATA easier to find for students and teachers.",
        "Now running event promotion and LinkedIn, so the website, events and social channels work together.",
      ],
    },
    build: {
      relevance: 2,
      headline: "Givebutter API on a WordPress site",
      points: [
        "Integrated a third-party fundraising platform into an existing WordPress site without rebuilding it.",
        "Keep the site current: monthly newsletters, events and resources, published on schedule.",
      ],
    },
    design: {
      relevance: 2,
      headline: "An accessible site and two event flyers",
      points: [
        "Iterative UI/UX improvements for a responsive, accessible experience on phones and desktops.",
        "Two flyer designs for the kickoff event: a bright papel-picado version and a bold dark floral version.",
      ],
    },
  },
  stages: {
    problem: {
      summary:
        "LATA offers scholarships, newsletters and community for Latine students and teachers in San Francisco, but its website wasn’t easy to find, easy to donate through, or always up to date.",
    },
    people: {
      summary:
        "The site serves several audiences at once: students looking for scholarships, new, veteran and retired teachers, and donors who want to support them.",
    },
    design: {
      summary:
        "I improved the site in small, tested steps rather than one big redesign, so it stayed usable for the community throughout. As marketing intern, I designed the kickoff event flyers in two styles.",
    },
    build: {
      summary:
        "I integrated Givebutter’s fundraising API into the WordPress site so people can donate without leaving it, and I publish the monthly newsletters there.",
    },
    intelligence: {
      summary:
        "For search, I optimized metadata, restructured content and improved keyword relevance, so students and teachers searching for scholarships and support can find LATA.",
    },
    outcome: {
      summary:
        "Online donations grew 2,600% and visibility and student outreach grew 135%. I’ve returned as LATA’s marketing intern to promote events and manage LinkedIn.",
    },
  },
  metrics: [
    {
      stage: "outcome",
      title: "Results",
      items: [
        { label: "Online donations", after: "+2,600%", context: "after integrating Givebutter" },
        { label: "Visibility & student outreach", after: "+135%", context: "after SEO improvements" },
        { label: "Kickoff flyers", after: "2", context: "for Pa’Lante con LATA, Oct 9" },
      ],
    },
  ],
  figures: [
    {
      src: "/images/work/lata-flyer-1.jpg",
      alt: "Pa’Lante con LATA flyer on a cream background with colorful papel picado: Friday, October 9th, 4:30–7:30 PM at 2481 Mission St., welcoming new, veteran and retired teachers.",
      caption: "Kickoff flyer, light version.",
      width: 1246,
      height: 1616,
      stage: "design",
    },
    {
      src: "/images/work/lata-flyer-2.jpg",
      alt: "Pa’Lante con LATA flyer on a dark purple background with bright floral borders: Friday, October 9th, Bar TZA, 2481 Mission St., 4:30–7:30 PM.",
      caption: "Kickoff flyer, dark version.",
      width: 1246,
      height: 1620,
      stage: "design",
    },
    {
      src: "/images/work/lata-site.jpg",
      alt: "The LATA SF website homepage with its purple header and scholarship banner.",
      caption: "latasf.org, the site I maintain.",
      width: 2000,
      height: 1112,
      stage: "build",
      wide: true,
    },
  ],
  learned: [
    {
      title: "Make the next step effortless.",
      body: "People were willing to give. Putting donations directly on the site, instead of sending them somewhere else, is what changed the numbers.",
    },
    {
      title: "SEO is design for people who are searching.",
      body: "Clear structure and the words students and teachers actually use made the site findable by the people it’s meant for.",
    },
    {
      title: "Channels work better together.",
      body: "Coming back as marketing intern showed me how the website, event flyers and LinkedIn reinforce each other when they tell the same story.",
    },
  ],
};
