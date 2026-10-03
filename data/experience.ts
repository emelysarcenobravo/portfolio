import type { LensId } from "@/lib/lenses";

export type Experience = {
    org: string; 
    role: string; 
    period: string; 
    summary: string; 
    lenses: LensId[];
    /* Case study slug */
    project?: string; 
}; 

/* Most recent are listed first */
export const experience: Experience[] = [
    {
        org: "AI4ALL Ignite",
        role: "Machine Learning and AI Fellow", 
        period: "May - Aug 2026", 
        summary: "Developed and evaluated three machine-learning models for phishing detection, achieving 99.28% accuracy with the strongest model. Built a Streamlit demonstration and examined the training data for potential sources of bias.",
        lenses: ["ai", "engineering"],
        project: "phishing-detection",
    },
    {
        org: "Dev/Mission",
        role: "Marketing Intern", 
        period: "Jan - May 2026", 
        summary: "Used data-informed campaigns to recruit 100+ trainees and 15+ volunteer mentors. Managed six email campaigns that generated 1,200+ opens and 160+ clicks while tracking website growth and audience engagement through Google Analytics.",
        lenses: ["marketing", "design"],
        project: "devmission",
    }, 
    {
        org: "Latin American Teachers Association",
        role: "Webmaster Intern",
        period: "Jan - May 2025",
        summary: "Integrated the Givebutter API to increase online donations by 2,600%, strengthened SEO to improve visibility by 135%, and iterated on the website experience to better support visitors.",
        lenses: ["engineering", "design"],
        project: "lata", 
    }, 
  {
    org: "Dev/Mission",
    role: "Technology Apprentice",
    period: "Sep – Dec 2024",
    summary: "Completed a 12-week technical and career development program covering hardware, programming, IoT, web development, and IT fundamentals. Collaborated on hands-on projects and presented a team project exploring Green AI.",
    lenses: ["engineering", "ai"],
    project: "green-ai",
  },
  {
    org: "Accenture · Learning to Lead Program",
    role: "Business Analyst",
    period: "Jun – Aug 2023",
    summary: "Served as the team's ideator in developing and pitching DisneyVerse, an AR/VR concept designed to improve representation and guest engagement for an Accenture client.",
    lenses: ["design", "marketing"],
    project: "disneyverse",
  },
];

export const education = {
  school: "San Francisco State University",
  degree: "B.S. Computer Science",
  minor: "Minor in Marketing",
  period: "Expected May 2027",
  coursework: [
    "Data Structures",
    "Analysis of Algorithms",
    "Web Software Development",
    "Software Engineering",
    "Artificial Intelligence",
    "Generative AI: Fundamentals & Applications",
    "Marketing Principles",
  ],
};