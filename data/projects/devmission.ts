import type { Project } from "./types";

export const devmission: Project = {
  slug: "devmission",
  name: "Dev/Mission",
  title: "Turning quiet interest into sign-ups",
  kicker: "Marketing Analytics Intern · Dev/Mission",
  summary:
    "Enrollment in a free coding program was falling and mentors were scarce. I found where people were dropping off, then rebuilt the website, email and social outreach around those moments. The result: 100+ trainees and 15+ volunteer mentors recruited.",
  period: "Jan – May 2026",
  role: "Research, web UX, email campaigns, social content, analytics",
  order: 3,
  featured: true,
  headline: "100+ trainees · 15+ mentors recruited",
  hmw: "How might we turn people who arrive while registration is closed into future trainees and mentors?",
  preview: {
    kind: "image",
    src: "/images/work/vol-news.png",
    alt: "“Volunteers Needed!” campaign graphic with a trainee and mentor working together at a laptop.",
    width: 1018,
    height: 1234,
    matte: "linear-gradient(to right, #6175b6 50%, #5a96ed 50%)",
    position: "50% 20%",
  },
  stack: ["WordPress", "Mailchimp", "Google Analytics", "Figma", "Canva", "SEO"],
  links: [
    { label: "Live program page", href: "https://devmission.org/free-coding-classes/", kind: "live" },
    {
      label: "Roadmap & showcase mockups",
      href: "https://www.figma.com/design/Kd9vdympEJB02y1N8IqZUV/Program-Roadmap-and-Project-Showcase?node-id=0-1&t=c0YMC30Z6ppdyZve-1",
      kind: "design",
    },
    { label: "January newsletter", href: "https://mailchi.mp/devmission.org/summer-updates-14763700", kind: "article" },
    {
      label: "Volunteer newsletter",
      href: "https://mailchi.mp/devmission.org/summer-updates-14764330",
      kind: "article",
    },
    { label: "March newsletter", href: "https://mailchi.mp/devmission.org/summer-updates-14764630", kind: "article" },
  ],
  contribution: [
    "Interviewed the lead instructor and program coordinator to find where prospective trainees and mentors were dropping off.",
    "Designed the program roadmap and project showcase in Figma, then shipped them on the WordPress site.",
    "Added interest-form reminders so visitors could still sign up while registration was closed.",
    "Designed, launched and analyzed 6 email campaigns in Mailchimp, including monthly newsletters and a volunteer-recruitment campaign.",
    "Planned the Mentor & Mentee and Before & After social series.",
    "Built a contact list of partner nonprofits and schools, and tracked website and campaign performance in Google Analytics against a baseline.",
  ],
  lenses: {
    marketing: {
      relevance: 3,
      headline: "+456% clicks · 7.5× email reach",
      points: [
        "Replaced generic updates with problem-focused campaigns for each audience: trainees, mentors and partners.",
        "Set a baseline first, then compared newsletters and Jan–Apr website traffic year over year.",
        "Spam reports fell from 25 to 1, so the list got healthier as well as bigger.",
      ],
    },
    design: {
      relevance: 3,
      headline: "A path for people who arrive too early",
      points: [
        "Registration was closed for much of the year, so interested trainees hit a dead end. A reminder form turned that moment into 23 sign-ups.",
        "A program roadmap answers “what happens if I join?” before anyone has to ask.",
        "A project showcase with trainee names and cohorts shows real outcomes, not promises.",
      ],
    },
    build: {
      relevance: 1,
      headline: "Shipped on WordPress and Mailchimp",
      points: [
        "Implemented the form, showcase and roadmap directly in the organization's WordPress site, so the team can maintain them without me.",
      ],
    },
  },
  stages: {
    problem: {
      summary:
        "Pre-apprenticeship enrollment had dropped for several months, prospective trainees stopped responding after first contact, and the program didn't have enough volunteer mentors.",
      body: [
        "Dev/Mission runs a free program that gives young adults aged 18–24 hardware, coding instruction and a six-month tech mentor. When enrollment and mentor numbers fall, fewer people get that chance, so the marketing problem was really an access problem.",
      ],
    },
    people: {
      summary:
        "Three audiences, each with a different reason to care: young adults considering tech, professionals who could mentor them, and partner organizations who could refer both.",
      body: [
        "I interviewed the lead instructor and program coordinator to learn where people dropped off. I also reviewed news about the tech job market to understand why interest was shifting, and studied successful nonprofit campaigns for patterns worth borrowing.",
      ],
      details: [
        "Prospective trainees wanted to know what the program involves and what past trainees went on to build.",
        "Many arrived while registration was closed, and the website gave them nowhere to go.",
        "Potential mentors needed a specific, low-effort way to say yes.",
      ],
    },
    design: {
      summary:
        "Each change targets a specific drop-off point: closed registration, an unclear program journey, and no visible results from past cohorts.",
      details: [
        "Interest-form reminders shown only while registration is closed.",
        "A program roadmap that lays out the journey from applying to graduating.",
        "A project showcase featuring trainee projects, names and cohorts.",
        "Mentor & Mentee and Before & After social series.",
        "A volunteer-recruitment newsletter written specifically for mentors.",
      ],
    },
    build: {
      summary:
        "Shipped in the tools the team already maintains: WordPress for the site, Mailchimp for email, and a shared partner contact list. The changes outlast my internship.",
    },
    intelligence: {
      summary:
        "I measured newsletter opens, clicks and spam reports against the first campaign, and compared website behavior for Jan–Apr 2026 with the same months in 2025.",
      body: [
        "A year-over-year comparison controls for seasonality, but other things changed during the same period too. I read these numbers as strong signals, not certain causes, and I said so when I reported them.",
      ],
    },
    outcome: {
      summary:
        "23 interest-form sign-ups while registration was closed, 10 volunteer interest forms from one newsletter, and higher engagement on every channel I measured.",
    },
  },
  metrics: [
    {
      stage: "outcome",
      title: "Before and after",
      caption:
        "Newsletter figures compare against the first campaign baseline. Website figures compare Jan–Apr 2025 with Jan–Apr 2026.",
      items: [
        { label: "Trainees recruited", after: "100+", context: "for Dev/Mission's technology training programs" },
        { label: "Volunteer mentors recruited", after: "15+", context: "through targeted outreach" },
        { label: "Email campaigns", after: "6", context: "1,200+ opens and 160+ clicks in total" },
        { label: "Newsletter clicks", before: "9", after: "50", change: "+456%" },
        { label: "Email reach", before: "8", after: "60", change: "+650%" },
        { label: "Newsletter open rate", before: "16.7%", after: "21.2%", change: "+4.5" },
        { label: "Spam reports", before: "25", after: "1", change: "−96%" },
        { label: "Website new users", before: "2.7K", after: "4K", change: "+48%" },
        { label: "Website events", before: "15K", after: "19K", change: "+27%" },
        { label: "Interest-form sign-ups", after: "23", context: "while registration was closed" },
        { label: "Volunteer interest forms", after: "10", context: "from one newsletter" },
      ],
    },
  ],
  figures: [
    {
      src: "/images/work/reminders.png",
      alt: "Dev/Mission program page with an “Interest Form Reminders” sign-up form beside the program details.",
      caption: "Registration closed? The page now asks for an email instead of ending the visit.",
      width: 1022,
      height: 756,
      stage: "design",
    },
    {
      src: "/images/work/project-mockup.png",
      alt: "Figma mockup of a project showcase grid with six trainee projects, each with a screenshot, name, cohort and description.",
      caption: "Showcase mockup in Figma: names and cohorts make outcomes feel real.",
      width: 886,
      height: 1068,
      stage: "design",
    },
    {
      src: "/images/work/proj-showcase.png",
      alt: "The shipped project showcase on the Dev/Mission website: six trainee projects with screenshots, titles, descriptions and View Project buttons.",
      caption: "The shipped showcase on devmission.org.",
      width: 1188,
      height: 1292,
      stage: "build",
    },
  ],
  learned: [
    {
      title: "Problem-focused beats general updates.",
      body: "When each newsletter spoke to one audience about one problem, clicks went from 9 to 50 and spam reports almost disappeared. Specific messages earn attention that general ones don't.",
    },
    {
      title: "Design for people who arrive at the wrong time.",
      body: "The biggest win came from an edge case. Visitors who arrived while registration was closed used to leave; a simple reminder form turned 23 of them into sign-ups.",
    },
    {
      title: "Measure before you change anything.",
      body: "Recording a baseline first is what let me show impact, and also be honest about what the numbers can't prove.",
    },
    {
      title: "Build for the people who stay.",
      body: "I used tools the team already knew, so the roadmap, showcase and campaigns keep working after I leave.",
    },
  ],
};
