import type { Project } from "./types";

export const movieReviews: Project = {
  slug: "movie-reviews",
  name: "MovieLog",
  title: "MovieLog: a full-stack movie review app",
  kicker: "Software Development · CSC 413 final project",
  summary:
    "A Spring Boot, MongoDB and Next.js app where people sign in, browse movies, and rate and review them. I built the search, add-movie and top-rated features from API to interface.",
  order: 6,
  featured: false,
  period: "Spring 2026",
  role: "Full-stack developer: search, add movie, top-rated",
  team: "4 developers",
  headline: "3 REST endpoints, API to interface",
  hmw: "How might we help people find a movie worth watching, and share what they thought of it?",
  preview: {
    kind: "image",
    src: "/images/work/movielog.jpg",
    alt: "MovieLog login screen: a dark card titled MovieLog, “Browse reviews and rate your favorite movies!”, with Login and Register tabs, under a red gradient header.",
    width: 1788,
    height: 971,
    matte: "linear-gradient(to bottom, #a8212f 50%, #141415 50%)",
  },
  stack: ["Java", "Spring Boot", "MongoDB", "Next.js", "React", "REST APIs", "Maven", "Git"],
  links: [
    {
      label: "Final demo",
      href: "https://drive.google.com/drive/folders/1b0n8cVup9IJNTdFqUi8LKOtWu2Fu6lLR?usp=sharing",
      kind: "demo",
    },
    {
      label: "First demo",
      href: "https://drive.google.com/file/d/15BMpPfqSr6oElsHqhBhLy81upNHapuem/view?usp=sharing",
      kind: "demo",
    },
  ],
  contribution: [
    "Built POST /movies: creates a URL-friendly ID from the title and rejects duplicates with a clear error.",
    "Built GET /movies/search: case-insensitive search across title, director, year and genre, returning each movie's average rating and review count.",
    "Built GET /movies/top-rated: movies with at least one review and an average of 4 stars or more.",
    "Added the MovieRequest data transfer object, and built the /movies page in Next.js: search bar, add-movie form, top-rated view and styling.",
  ],
  lenses: {
    build: {
      relevance: 3,
      headline: "Search, add and top-rated in Spring Boot",
      points: [
        "REST endpoints with a shared ApiResponse wrapper ({ status, data, error }), so the front end handles every response the same way.",
        "Java streams to filter movies and calculate average ratings from their reviews.",
        "A Next.js page that calls the API for search, adding movies and the top-rated list.",
      ],
    },
    design: {
      relevance: 1,
      headline: "Find something worth watching, fast",
      points: [
        "One search box matches title, director, year or genre, so people don't have to know which field to use.",
      ],
    },
  },
  stages: {
    problem: {
      summary:
        "The final project for Software Development: a team-built, full-stack app where users register, log in, browse movies and leave ratings and reviews.",
      body: [
        "The team split ownership by feature, so each of us owned specific endpoints and the screens that use them.",
      ],
    },
    design: {
      summary:
        "We agreed on the API contract first. Every endpoint returns the same { status, data, error } shape, so front-end and back-end work could happen in parallel.",
      details: [
        "POST /movies: add a movie.",
        "GET /movies/search?q=: search by title, director, year or genre.",
        "GET /movies/top-rated: average rating of 4 or more, with at least one review.",
      ],
    },
    build: {
      summary:
        "A Spring Boot REST API on MongoDB, with a Next.js front end. Login uses an auth cookie and SHA-256-hashed passwords.",
      body: [
        "Adding a movie turns its title into a stable ID (“The Dark Knight” becomes the-dark-knight) and returns a 400 error if that movie already exists. Search and top-rated join each movie with its reviews to calculate an average rating and a review count.",
      ],
    },
    outcome: {
      summary: "My three features shipped in the final app, and the team README documents who built what.",
    },
  },
  figures: [
    {
      src: "/images/work/movielog.jpg",
      alt: "MovieLog login screen with Login and Register tabs on a dark card under a red gradient.",
      caption: "MovieLog’s sign-in screen, from the team’s demo video.",
      width: 1788,
      height: 971,
      stage: "outcome",
      wide: true,
    },
  ],
  learned: [
    {
      title: "An API is a contract with your teammates.",
      body: "Agreeing on one response shape early meant the front end could be built against my endpoints before they were finished.",
    },
    {
      title: "Spot the N+1 query.",
      body: "Each endpoint looks up reviews movie by movie. That's fine for a class dataset, but next time I'd calculate averages with a MongoDB aggregation, or store them, so it scales.",
    },
    {
      title: "Plan for duplicate data.",
      body: "Generating IDs from titles made URLs readable, but it meant designing for duplicates and odd characters from the start.",
    },
  ],
};
