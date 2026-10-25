import type { Project } from "./types";

export const greenAi: Project = {
  slug: "green-ai",
  name: "Green AI presentation",
  title: "Green AI: explaining AI's environmental cost",
  kicker: "Business Communication · Dev/Mission Pre-Apprenticeship",
  summary:
    "A team presentation for a general audience on generative AI's energy and carbon cost, and on how AI is also being used to protect the environment.",
  order: 9,
  featured: false,
  period: "Fall 2024",
  role: "Record keeper & presenter",
  team: "3 presenters",
  headline: "A complex topic, made clear for a live audience",
  hmw: "How might we explain AI’s environmental cost to an audience that’s new to tech?",
  preview: {
    kind: "image",
    src: "/images/work/green-ai.jpg",
    alt: "Title slide: “Green AI – The Future of AI and the Environment, by Prometheus” on a dark green background with hexagon outlines and a glowing green globe.",
    width: 960,
    height: 540,
    matte: "#00380e",
  },
  stack: ["Google Slides", "Research", "Public speaking", "Storytelling"],
  links: [
    {
      label: "Presentation slides",
      href: "https://docs.google.com/presentation/d/1khDMcG6WhJ-ggB1IYFuCRWZHyWGGlM5MaDGziqxob7E/edit?usp=sharing",
      kind: "slides",
    },
  ],
  contribution: [
    "Served as the team's record keeper, tracking decisions, tasks and sources.",
    "Researched and presented three sections: what generative AI is, what sustainability means, and how Green AI is being used.",
    "Opened the talk by asking the audience what they think of when they hear “AI”, then built on their answers.",
  ],
  lenses: {
    ai: {
      relevance: 2,
      headline: "AI's environmental cost, and its upside",
      points: [
        "Explained how generative AI creates content from prompts, and why training and running models takes so much energy.",
        "Showed how AI also helps: predicting wildfires, improving renewable-energy storage, and sorting recycling with computer vision.",
      ],
    },
    marketing: {
      relevance: 2,
      headline: "Communicating tech to a general audience",
      points: [
        "Structured the talk as a story, from what AI is to its costs to solutions, ending on a clear stance.",
        "Used audience participation and simple statistics to keep a technical topic approachable.",
      ],
    },
  },
  stages: {
    problem: {
      summary:
        "AI took off in 2022 and is here to stay, but most people don't know what it costs the environment, or that AI can also help reduce that cost.",
    },
    people: {
      summary:
        "Our audience was a room of peers new to tech, so every idea had to make sense without a technical background.",
    },
    design: {
      summary:
        "We built an eight-part story: what AI is, its benefits, its costs, what sustainability means, what Green AI is, how it works, how it's used, and our stance.",
    },
    intelligence: {
      summary:
        "My sections focused on adoption and applications: how many people already rely on generative AI, and where Green AI is making a difference.",
      details: [
        "Predicting and managing natural disasters such as wildfires.",
        "Optimizing renewable-energy storage for wind and solar.",
        "Improving recycling with machine learning and computer vision.",
      ],
    },
    outcome: {
      summary:
        "We delivered the presentation as a team and landed on a balanced stance: AI's energy use is a real cost, but Green AI offers faster ways to protect the planet than we'd have without it.",
    },
  },
  figures: [
    {
      src: "/images/work/green-ai.jpg",
      alt: "Title slide of the Green AI presentation by team Prometheus.",
      caption: "Our title slide. The full deck is linked above.",
      width: 960,
      height: 540,
      stage: "design",
      wide: true,
    },
  ],
  learned: [
    {
      title: "Start where the audience is.",
      body: "Asking people what they already think about AI made the rest of the talk feel like a conversation instead of a lecture.",
    },
    {
      title: "Take a position, honestly.",
      body: "Presenting both the costs and the benefits before stating our view made the conclusion more convincing.",
    },
    {
      title: "Keeping records is a team skill.",
      body: "As record keeper, I saw how shared notes and sources keep a group aligned and make the final product easier to trust.",
    },
  ],
};
