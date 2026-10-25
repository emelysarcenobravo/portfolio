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
    src: "/images/work/movielog-final-dashboard.jpg",
    alt: "MovieLog’s movies dashboard on a red gradient: a search bar with Search, Top Rated, Add Movie and All Movies buttons, above Interstellar, Parasite, Sinners and Project Hail Mary with their ratings.",
    width: 2774,
    height: 1502,
    matte: "#141414",
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
    { label: "Project on GitHub", href: "https://github.com/emelysarcenobravo/movielog", kind: "code" },
  ],
  contribution: [
    "Built POST /movies: creates a URL-friendly ID from the title and rejects duplicates with a clear error.",
    "Built GET /movies/search: case-insensitive search across title, director, year and genre, returning each movie's average rating and review count.",
    "Built GET /movies/top-rated: movies with at least one review and an average of 4 stars or more.",
    "Wrote the back-end classes behind these features: the Movie model, MovieController and the MovieRequest data transfer object.",
    "Built the front end for them on the /movies page in Next.js: the search bar, the add-movie form and the top-rated view.",
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
        "The team split ownership by feature, so each of us owned specific endpoints and the screens that use them. My teammates built browsing and movie details, reviews and ratings, and user profiles; I built search, adding movies and the top-rated list.",
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
      src: "/images/work/movielog-final-search.jpg",
      alt: "MovieLog search for “Barbie” returning Barbie (2023) by Greta Gerwig, a comedy with no ratings yet.",
      caption: "Searching by title: “Barbie” returns the matching movie.",
      width: 1700,
      height: 470,
      stage: "design",
    },
    {
      src: "/images/work/movielog-final-search-director.jpg",
      alt: "MovieLog search for “John Greens” returning Fault in our Stars 2, a romance directed by John Greens.",
      caption: "Searching by director: the same search box matches the director’s name.",
      width: 1700,
      height: 470,
      stage: "design",
    },
    {
      src: "/images/work/movielog-final-search-genre.jpg",
      alt: "MovieLog search for “Thriller” returning Parasite and Sinners, both thrillers, with their average ratings.",
      caption: "Searching by genre: “Thriller” returns every thriller with its average rating and review count.",
      width: 1700,
      height: 710,
      stage: "design",
      wide: true,
    },
    {
      src: "/images/work/movielog-final-add-movie.jpg",
      alt: "The “Adding a Movie” form filled in with RRR, 2023, Raja Moulie and History, above a Submit Movie button.",
      caption: "The add-movie form, which sends a POST /movies request.",
      width: 1700,
      height: 890,
      stage: "build",
      wide: true,
    },
    {
      src: "/images/work/movielog-final-top-rated.jpg",
      alt: "The Top Rated view showing Interstellar and Parasite, each averaging 4.7 stars from three reviews.",
      caption: "Top Rated shows only movies averaging 4 stars or more.",
      width: 1700,
      height: 710,
      stage: "build",
      wide: true,
    },
    {
      src: "/images/work/movielog-final-dashboard.jpg",
      alt: "The finished MovieLog dashboard: search bar and buttons above a list of movies with directors, genres, ratings and reviews.",
      caption: "The finished movies dashboard, from the team’s final demo.",
      width: 2774,
      height: 1502,
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
