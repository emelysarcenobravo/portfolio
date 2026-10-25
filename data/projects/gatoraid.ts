import type { Project } from "./types";

export const gatoraid: Project = {
  slug: "gatoraid",
  name: "GatorAid",
  title: "GatorAid: one front door to campus life",
  kicker: "Team Lead · CSC 648 Software Engineering",
  summary:
    "SFSU's events, resources and buildings are scattered across dozens of sites and flyers. I lead a six-person team building one platform to discover them, see them on a map, explore them in 3D, and ask an AI assistant about them.",
  period: "Fall 2026 · in progress",
  role: "Team lead & full-stack developer: product direction, team process, front end, data integration",
  team: "6 engineers",
  order: 1,
  featured: true,
  headline: "4 personas → 18 user stories → 1 platform",
  hmw: "How might we bring SFSU’s scattered events, resources and buildings into one place students actually check?",
  preview: {
    kind: "image",
    src: "/images/work/gatoraid.jpg",
    alt: "GatorAid’s Explore campus events page: a sidebar with Explore events, For you, Saved events and Campus map, a search bar with category, date and location filters, and a grid of colorful event cards such as Women's Club Soccer Home Game and Financial Aid Q&A.",
    width: 2000,
    height: 1139,
    matte: "linear-gradient(to bottom, #fdf9ee 50%, #f7f7f8 50%)",
  },
  stack: ["Next.js", "React", "Tailwind CSS", "Supabase", "PostgreSQL", "Scaniverse", "Unity", "Vercel"],
  links: [
    {
      label: "Team site (in progress)",
      href: "https://sfsu-csc648-06-fall26-team06-three.vercel.app/about",
      kind: "live",
    },
  ],
  contribution: [
    "Set the product direction and led the team through Milestone 1: executive summary, personas, user stories, requirements and competitive analysis.",
    "Ran the team process: weekly Sunday meetings on Discord, code review on every commit, and clear ownership for each area.",
    "Mapped the team's experience with each technology and turned it into a study plan that pairs a lead with the teammates who are learning it.",
    "Coordinate front-end, back-end and AI development, and set up the team's Git branching and pull-request workflow.",
    "Build responsive interfaces with React, Next.js and Tailwind CSS, and integrate PostgreSQL (Supabase) and external APIs.",
  ],
  lenses: {
    build: {
      relevance: 3,
      headline: "Next.js + Supabase, secure by design",
      points: [
        "Next.js App Router with Route Handlers for server logic, Supabase Postgres with row-level security, deployed on Vercel.",
        "A nine-entity data model: User, Host, Event, Location, RSVP, Category, Saved Event, Admission and Notification.",
        "Non-functional requirements from day one: every commit code-reviewed, API keys kept server-side, and failures isolated so one broken feature doesn't take down the app.",
      ],
    },
    design: {
      relevance: 3,
      headline: "4 personas → 18 prioritized user stories",
      points: [
        "Personas for new students, active students, event organizers and goal-oriented students, each with their own pain points.",
        "18 user stories across five activities, prioritized High or Medium to set scope.",
        "A 2D map that opens into a 3D scan of a real building, connecting information to physical places.",
      ],
    },
    ai: {
      relevance: 2,
      headline: "A campus assistant grounded in real data",
      points: [
        "Allison, the AI campus assistant (in development), answers questions about locations, events and resources, summarizes events, and helps people use the app.",
        "It's built on a large language model and grounded in the platform's own data rather than general web knowledge.",
      ],
    },
    marketing: {
      relevance: 1,
      headline: "Positioned against Luma and the SF State app",
      points: [
        "A competitive analysis showed no existing tool combines events, navigation, recommendations and an assistant for SFSU, and that gap became our positioning.",
      ],
    },
  },
  stages: {
    problem: {
      summary:
        "Campus information is spread across university websites, department pages, event listings and flyers. Students miss opportunities they don't know to look for, and new students can't find the buildings they're meant to go to.",
    },
    people: {
      summary:
        "Four personas, from the freshman who can't find a building to the club organizer who can't reach students beyond their followers.",
      details: [
        "New or unfamiliar student: knows a building's name but not where it is or what it looks like.",
        "Active student: wants events and resources that match their interests without checking ten sites.",
        "Event organizer: needs to reach students outside their existing audience.",
        "Goal-oriented student: needs one fast answer, often without knowing the resource's exact name.",
      ],
    },
    design: {
      summary:
        "A home dashboard as the single starting point: search, upcoming events, personalized recommendations, the campus map and the assistant, all in one place.",
      body: [
        "Before designing, we compared the tools students already use. Luma handles events but not navigation; the SF State app has maps and services but no assistant or real personalization. GatorAid's advantage is linking digital information to physical places: discover an event, see where it is, then walk through the building in 3D before you go.",
      ],
      details: [
        "Events filterable by date, time, location, audience, category and admission type.",
        "Detail pages with an option to open the location in 3D.",
        "Organizers can create, edit and remove their own events.",
        "Saved items and a personalized recommendations page.",
      ],
    },
    build: {
      summary:
        "A full-stack Next.js app on Vercel, backed by Supabase Postgres with row-level security. The 3D experience uses a Scaniverse scan of the Cesar Chavez Student Center, rendered with Unity.",
      details: [
        "Every commit is code-reviewed by at least one teammate, with pair programming where possible.",
        "Passwords are encrypted and API keys never reach the client or the repository.",
        "The architecture lets new events, resources and building scans be added without restructuring.",
      ],
    },
    intelligence: {
      summary:
        "Allison, the campus assistant, gives students a conversational way into the same data the rest of the interface shows: ask where something is, what an event is about, or how to use the app.",
    },
    outcome: {
      summary:
        "Milestone 1 is complete: executive summary, personas, 18 user stories, 8 functional requirements, non-functional requirements, a competitive analysis and data definitions. Implementation is underway.",
    },
  },
  figures: [
    {
      src: "/images/work/gatoraid.jpg",
      alt: "GatorAid’s Explore campus events page with search, filters for category, date and location, and event cards.",
      caption: "The Explore events page: search, filters and event cards, with organizer tools in the sidebar.",
      width: 2000,
      height: 1139,
      stage: "design",
      wide: true,
    },
  ],
  diagram: {
    title: "System architecture",
    caption: "Planned architecture as of Milestone 1.",
    stage: "build",
    columns: [
      {
        label: "Client",
        nodes: [
          { title: "Next.js + React", note: "App Router, Tailwind" },
          { title: "Campus map", note: "2D map → 3D building" },
        ],
      },
      {
        label: "Server",
        nodes: [
          { title: "Route Handlers", note: "Auth, protected routes" },
          { title: "Assistant service", note: "Grounded prompts" },
        ],
      },
      {
        label: "Services",
        nodes: [
          { title: "Supabase Postgres", note: "Row-level security" },
          { title: "LLM API", note: "Allison" },
          { title: "Scaniverse + Unity", note: "3D scan & rendering" },
        ],
      },
    ],
  },
  learned: [
    {
      title: "Leading means making the plan visible.",
      body: "With six people, the hardest part isn't the code. It's making sure everyone knows who owns what, what's next, and who to ask. Written ownership and a weekly rhythm do more than any single technical decision.",
    },
    {
      title: "Plan for the learning curve.",
      body: "Our familiarity survey showed most of the team was new to Vercel and Next.js. Pairing each technology with a lead turned that gap into a schedule instead of a surprise.",
    },
    {
      title: "Competitive analysis is a scoping tool.",
      body: "Comparing ourselves to Luma and the SF State app showed where we could actually be different (connecting information to places) and what we didn't need to rebuild.",
    },
    {
      title: "Security is a requirement, not a phase.",
      body: "Deciding up front that keys stay server-side and data is protected by row-level security shaped the architecture from the start, instead of being bolted on at the end.",
    },
  ],
};
