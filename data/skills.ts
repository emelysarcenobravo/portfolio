import type { LensId } from "@/lib/lenses";

/* ---------- Skills: what I can do, grouped by the four lenses ---------- */

export type SkillGroup = {
  lens: LensId;
  /** What this group of skills lets me do, in one sentence. */
  statement: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    lens: "build",
    statement: "I turn a design into working, maintainable software.",
    skills: [
      "Full-stack web development",
      "Responsive front-end development",
      "REST API integration",
      "Database design & data modeling",
      "Object-oriented programming",
      "Data structures & algorithms",
      "Linux systems programming (C)",
      "Computer architecture & MIPS assembly",
      "Git branching & pull-request workflows",
      "Team leadership & code review",
    ],
  },
  {
    lens: "ai",
    statement: "I use AI where it helps people, and check where it could fail them.",
    skills: [
      "Machine learning (classification)",
      "Neural networks & perceptrons",
      "Working with tensors in PyTorch",
      "Feature engineering",
      "Model evaluation: accuracy, precision, recall, F1",
      "Natural language processing (TF-IDF)",
      "Dataset bias analysis",
      "Prompt engineering",
      "Responsible AI",
      "LLM-powered features",
      "LLM agents that write, run and debug code",
      "Retrieval-augmented generation (RAG) with web search",
      "Running open-source LLMs locally",
    ],
  },
  {
    lens: "design",
    statement: "I start with the people a product is for, and design what they actually need.",
    skills: [
      "User-centered design",
      "UX research & stakeholder interviews",
      "Personas & user stories",
      "Wireframing & prototyping",
      "UI design",
      "Competitive analysis",
      "Usability testing",
      "Accessible, responsive design",
    ],
  },
  {
    lens: "marketing",
    statement: "I help work reach the right audience, and measure whether it did.",
    skills: [
      "Marketing analytics",
      "Email marketing campaigns",
      "Audience research & segmentation",
      "Content strategy & social media",
      "SEO",
      "Web analytics & reporting",
      "Recruitment & outreach campaigns",
      "Before/after performance measurement",
      "Probability & statistics in R",
      "Business cases & budgeting",
      "Presenting & pitching",
    ],
  },
];

/* ---------- Software stack: the tools behind the work ---------- */

export type StackCategory = {
  title: string;
  /** Color the category with the lens it mostly supports. */
  lens: LensId;
  tools: string[];
};

export const stack: StackCategory[] = [
  {
    title: "Languages",
    lens: "build",
    tools: ["JavaScript", "TypeScript", "Python", "Java", "C++", "C", "R", "MIPS Assembly", "HTML", "CSS", "SQL"],
  },
  { title: "Frontend", lens: "build", tools: ["React", "Next.js", "Tailwind CSS", "Bootstrap", "EJS"] },
  {
    title: "Backend & APIs",
    lens: "build",
    tools: ["Node.js", "Express.js", "Spring Boot", "Next.js Route Handlers", "REST APIs", "Airtable API"],
  },
  { title: "Databases & cloud", lens: "build", tools: ["PostgreSQL", "Supabase", "MongoDB", "Vercel", "Docker"] },
  {
    title: "AI & machine learning",
    lens: "ai",
    tools: [
      "scikit-learn",
      "pandas",
      "NumPy",
      "Matplotlib",
      "PyTorch",
      "Hugging Face Transformers",
      "DistilBERT",
      "llama.cpp",
      "Gradio",
      "Streamlit",
    ],
  },
  { title: "Design & product", lens: "design", tools: ["Figma", "Canva", "WordPress"] },
  {
    title: "Marketing & analytics",
    lens: "marketing",
    tools: ["Google Analytics", "Google Sheets", "Mailchimp", "WordPress", "Givebutter", "SEO tools"],
  },
  {
    title: "Developer tools",
    lens: "build",
    tools: [
      "Git",
      "GitHub",
      "VS Code",
      "IntelliJ IDEA",
      "Jupyter Notebook",
      "Google Colab",
      "RStudio",
      "Chrome DevTools",
      "Postman",
      "Maven",
      "Linux (Ubuntu)",
    ],
  },
];

/* ---------- Certifications & programs ---------- */

export type Certification = {
  name: string;
  issuer: string;
  date: string;
  lens: LensId;
  /** What it covered, briefly. */
  detail: string;
  verifyUrl?: string;
};

export const certifications: Certification[] = [
  {
    name: "Google UX Design Professional Certificate",
    issuer: "Google · Coursera",
    date: "Apr 2026",
    lens: "design",
    detail:
      "8 courses: UX research, empathizing and ideating, wireframes, low- and high-fidelity prototypes in Figma, usability testing, and responsive web UI.",
    verifyUrl: "https://coursera.org/verify/professional-cert/NXW7BGIKVWRX",
  },
  {
    name: "Google AI Essentials",
    issuer: "Google · Coursera",
    date: "Apr 2026",
    lens: "ai",
    detail:
      "5 courses: introduction to AI, productivity with AI tools, prompting, using AI responsibly, and staying ahead of AI.",
    verifyUrl: "https://coursera.org/verify/specialization/6WR548V00OK3",
  },
  {
    name: "Human Research: Social/Behavioral Research",
    issuer: "CITI Program · San Francisco State University",
    date: "Jun 2026",
    lens: "design",
    detail: "Research ethics and human-subjects protection for social and behavioral research. Valid through Jun 2029.",
    verifyUrl: "https://www.citiprogram.org/verify/?wa70f0981-3590-4cca-8d8c-05ab6c06d87c-77659183",
  },
];

export type Program = { name: string; org: string; period: string; lens: LensId };

/** Selective programs and fellowships, shown alongside certifications. */
export const programs: Program[] = [
  { name: "AI/ML Fellow", org: "AI4ALL", period: "2026", lens: "ai" },
  {
    name: "Career Preparation Fellow",
    org: "Management Leadership for Tomorrow",
    period: "2025 – present",
    lens: "marketing",
  },
  { name: "Technology Apprentice", org: "Dev/Mission", period: "2024", lens: "build" },
  { name: "Learning to Lead", org: "Accenture", period: "2023", lens: "design" },
];
