import type { LensId } from "@/lib/lenses";

export type Experience = {
  org: string;
  role: string;
  period: string;
  summary: string;
  lenses: LensId[];
  /** Case study slug, when one exists. */
  project?: string;
  /** A LinkedIn post about this experience, by me or the organization. */
  post?: { label: string; href: string };
};

/** Newest first. */
export const experience: Experience[] = [
  {
    org: "SFSU · CSC 648",
    role: "Team Lead & Full-Stack Developer",
    period: "Fall 2026",
    summary:
      "Leading a six-person team building GatorAid with Next.js and Supabase: coordinating front-end, back-end and AI work.",
    lenses: ["build", "design", "ai"],
    project: "gatoraid",
  },
  {
    org: "AI4ALL Ignite",
    role: "AI/ML Fellow",
    period: "Summer 2026",
    summary:
      "Compared three machine-learning models for phishing detection (best: 99.28% accuracy), shipped a Streamlit demo, and audited the training data for bias.",
    lenses: ["ai"],
    project: "phishing-detection",
  },
  {
    org: "Dev/Mission",
    role: "Marketing Intern",
    period: "Jan – May 2026",
    summary:
      "Recruited 100+ trainees and 15+ volunteer mentors with data-informed campaigns; ran 6 email campaigns (1,200+ opens, 160+ clicks) and tracked website growth in Google Analytics.",
    lenses: ["marketing", "design"],
    project: "devmission",
    post: { label: "My internship post", href: "https://lnkd.in/p/gRz8j-ve" },
  },
  {
    org: "Latin American Teachers Association",
    role: "Webmaster & Marketing Intern",
    period: "Jan 2025 – present",
    summary:
      "Integrated Givebutter’s API (+2,600% online donations), improved SEO (+135% visibility and student outreach), and iterated on an accessible UI. Now also designing event flyers and managing LATA’s LinkedIn.",
    lenses: ["marketing", "build", "design"],
    project: "lata",
  },
  {
    org: "Management Leadership for Tomorrow",
    role: "Career Preparation Fellow",
    period: "Jan 2025 – present",
    summary:
      "Competitive 18-month professional-development program for high-achieving diverse talent: business case studies, leadership and technical training.",
    lenses: ["build", "design"],
    post: { label: "What I learned at Tech Trek", href: "https://lnkd.in/p/gxZm8d5E" },
  },
  {
    org: "Dev/Mission",
    role: "Technology Apprentice",
    period: "Sep – Dec 2024",
    summary:
      "12-week program in hardware, programming and career development, with hands-on projects in IoT, web development and IT essentials, plus a team presentation on Green AI.",
    lenses: ["build", "ai"],
    project: "green-ai",
    post: { label: "Dev/Mission’s cohort video", href: "https://lnkd.in/p/gX5vsvS4" },
  },
  {
    org: "Accenture · Learning to Lead Program",
    role: "Business Analyst",
    period: "Jun – Aug 2023",
    summary:
      "As the team's ideator, helped develop and pitch DisneyVerse, an AR/VR concept to improve representation and guest engagement for an Accenture client.",
    lenses: ["design", "marketing"],
    project: "disneyverse",
    post: { label: "Facilitator’s post", href: "https://lnkd.in/p/ghgKMSWU" },
  },
];

export const education = {
  school: "San Francisco State University",
  degree: "B.S. Computer Science",
  minor: "Minor in Marketing",
  period: "Expected May 2027",
  // Most impactful first.
  coursework: [
    "Software Engineering",
    "Web Software Development",
    "Human-Computer Interaction",
    "Artificial Intelligence",
    "Generative AI: Fundamentals & Applications",
    "Operating Systems",
    "Data Structures",
    "Analysis of Algorithms",
    "Programming Methodology",
    "Discrete Mathematics",
    "Principles of Marketing",
    "Ethics, Communication, and Tools for Software Development (GWAR)",
  ],
};
