import type { Project } from "./types";

export const disneyverse: Project = {
  slug: "disneyverse",
  name: "DisneyVerse",
  title: "DisneyVerse: representation you can step into",
  kicker: "Business Analyst · Accenture Learning to Lead",
  summary:
    "A pitch for an AR and VR extension to Disney's park app that lets guests see themselves in the story, turns waiting in line into play, and pays for itself: a projected $6.4M net per month.",
  order: 5,
  featured: true,
  period: "Jun – Aug 2023",
  role: "Ideator: concept, features, personas, pitch",
  team: "4 analysts",
  headline: "2 personas → 5 features → a $6.4M/month plan",
  hmw: "How might we help every guest see themselves in the story, even while they wait in line?",
  preview: {
    kind: "image",
    src: "/images/work/disneyverse.jpg",
    alt: "DisneyVerse title slide: a light-blue castle silhouette under an arc on a navy background, above the word DisneyVerse.",
    width: 1468,
    height: 1098,
    matte: "#022a73",
  },
  stack: ["Canva", "Figma", "Persona research", "Business case", "AR/VR"],
  links: [
    {
      label: "Pitch deck",
      href: "https://www.canva.com/design/DAHHjDKCcQY/crTcJLIlLwqA0xidERIsgg/view",
      kind: "slides",
    },
    {
      label: "Prototypes in Figma",
      href: "https://www.figma.com/design/0oEG4OWcrPT36kvbk5d273/DisneyVerse?node-id=0-1&t=mJSF4A86x2XT34RR-1",
      kind: "design",
    },
  ],
  contribution: [
    "Served as the team's ideator: generated and shaped the DisneyVerse concept and its five features.",
    "Helped build the two personas, a young guest and a Disney animator, that grounded the pitch in real people.",
    "Contributed to the Figma prototypes and co-presented the final pitch to Accenture.",
  ],
  lenses: {
    design: {
      relevance: 3,
      headline: "Two personas, five features",
      points: [
        "Designed for a guest who rarely sees herself on screen and an animator who wants to create characters that reflect his identity.",
        "Customizable characters and branching storylines let guests appear in the story, not just watch it.",
        "An AR game spreads characters away from crowded areas, using play as gentle crowd control.",
      ],
    },
    marketing: {
      relevance: 3,
      headline: "A business case, not just an idea",
      points: [
        "Modeled monthly revenue and costs: ticket sales, headset insurance, ads, impressions, equipment and damage.",
        "Projected a net of about $6.4M per month, with a 25% customer-retention goal.",
        "Framed the pitch around Disney's brand risk: public image, DEI accountability and keeping attractions new.",
      ],
    },
    build: {
      relevance: 1,
      headline: "AR and VR inside an existing app",
      points: [
        "Extends the My Disney Experience app instead of launching a new one, reusing the Virtual Queue to prompt guests just before their turn.",
      ],
    },
  },
  stages: {
    problem: {
      summary:
        "Disney faced criticism for a lack of representation, falling engagement in its parks, complaints about long lines, and pressure to keep up with immersive technology.",
      body: [
        "We framed it as a business problem as much as a social one: representation affects public image and customer retention, and stale attractions give guests fewer reasons to come back.",
      ],
    },
    people: {
      summary: "We designed for two people on either side of the screen.",
      details: [
        "Carina, a second-grader whose favorite place is Disneyland. She'd love to see more characters like herself and to be entertained while she waits in line.",
        "James, a Disney animator who is a person of color and a member of the LGBTQ+ community. He wants the freedom to create characters that reflect who he is.",
      ],
    },
    design: {
      summary:
        "DisneyVerse is an extension to the My Disney Experience app that adds AR and VR experiences in the parks.",
      body: [
        "Before designing, we looked at what Disney already does: Disney Movie VR at home and a Snapchat AR partnership at Walt Disney World. DisneyVerse builds on both inside the park.",
      ],
      details: [
        "Customizable characters: guests create characters that represent their identities.",
        "Interactive storylines: based on Disney films, changed by the guest's choices.",
        "Immersive VR: park-provided headsets, booked through the Virtual Queue with a prompt before your turn.",
        "Interactive AR game: collect characters and artefacts around the park.",
        "Park Perks: rewards from the game that can be used in the park.",
      ],
    },
    intelligence: {
      summary:
        "We built a monthly budget to test whether the idea could pay for itself, including the unglamorous costs: damaged headsets, insurance and theft prevention.",
    },
    outcome: {
      summary:
        "We pitched DisneyVerse to Accenture with a staged roadmap: hire developers in 2023, launch the app update by 2025, open at Magic Kingdom in 2026, and reach every Disney park by 2030.",
      body: [
        "Future plans included DisneyVerse on personal VR headsets at home, a repository of stories from people of diverse backgrounds, and a creator fund for artists of color.",
      ],
    },
  },
  metrics: [
    {
      stage: "intelligence",
      title: "Monthly business model",
      caption: "Projections from our pitch, not real Disney data.",
      items: [
        { label: "Projected net / month", after: "$6.4M", context: "after equipment, development and advertising" },
        { label: "Ticket revenue", after: "$11.25M", context: "150,000 guests × $75" },
        { label: "VR headsets", after: "10,000", context: "$3M one-time equipment cost" },
        { label: "Retention goal", after: "+25%", context: "customer retention" },
      ],
    },
  ],
  learned: [
    {
      title: "Ideas need a business case.",
      body: "Working out headset damage, insurance and theft turned a fun concept into something a company could actually say yes to.",
    },
    {
      title: "Design for both sides of the product.",
      body: "Thinking about the animator as well as the guest made the pitch about who gets to tell stories, not just who gets to watch them.",
    },
    {
      title: "Start a pitch with the problem.",
      body: "Executives cared about brand risk and retention first. Leading with those made the creative ideas land.",
    },
  ],
};
