import type { Project } from "./types";

export const wordGames: Project = {
  slug: "word-games",
  name: "Word Games",
  title: "Word Games: Hangman and Wordle in C++",
  kicker: "CSC 340 · Object-oriented C++",
  summary:
    "A menu-driven C++ program with two games, Hangman and Wordle, built on one shared object model: an abstract game class, a custom linked list for word banks, and a leaderboard that keeps the top five players in a file.",
  period: "Spring 2025",
  role: "Developer: Wordle, leaderboard, word banks, build setup",
  team: "4 developers",
  order: 8,
  featured: false,
  headline: "One abstract class, two games",
  hmw: "How might we apply object-oriented design to games that four people can build at the same time?",
  preview: {
    kind: "image",
    src: "/images/work/word-games.png",
    alt: "Terminal output: an ASCII Hangman game on the left and Wordle with color-coded letter feedback on the right.",
    width: 694,
    height: 488,
    matte: "#140426",
  },
  stack: ["C++11", "OOP", "Inheritance & polymorphism", "Linked lists", "File I/O", "Sorting & searching", "Git"],
  links: [
    { label: "Code on GitHub", href: "https://github.com/emelysarcenobravo/wordGamesProject", kind: "code" },
    {
      label: "Project presentation",
      href: "https://docs.google.com/presentation/d/19BvupAq-ijIX7F4BvwdnxrqUonZ81XD_tGm6WGJRjt4/edit?usp=sharing",
      kind: "slides",
    },
  ],
  contribution: [
    "Built the Wordle game: random target word, input validation, and color-coded feedback for each letter.",
    "Built an early version of the leaderboard (players sorted by wins), which the team developed into the final linked-list leaderboard.",
    "Expanded the Hangman and Wordle word banks and updated the User model to track wins.",
    "Set up the shared VS Code build and debug configuration so all four of us could compile the same way, one of the project's hardest problems.",
  ],
  lenses: {
    build: {
      relevance: 3,
      headline: "Inheritance, polymorphism, linked lists",
      points: [
        "An abstract WordGame class declares a virtual play(); Hangman and Wordle override it, so the menu can run either game the same way.",
        "Composition: each game has a User and a LinkedList word bank; the leaderboard has Users and a linked list of top scores.",
        "File I/O loads the word banks and saves scores. Linear search checks guesses, and insertion sort ranks the leaderboard.",
      ],
    },
    design: {
      relevance: 1,
      headline: "Feedback players can read at a glance",
      points: [
        "Wordle explains its color key before the first guess (green, yellow, red), and Hangman draws its progress in ASCII art, so players always know where they stand.",
      ],
    },
  },
  stages: {
    problem: {
      summary:
        "The CSC 340 final project: apply object-oriented programming and core data structures in a C++ program people actually want to use, with four people editing one codebase.",
    },
    design: {
      summary:
        "We designed the classes in UML before writing code, so both games share players, scoring and word storage, and a third game would only need to implement play().",
      details: [
        "Inheritance: Hangman and Wordle “are a” WordGame.",
        "Polymorphism: both override the virtual play() method.",
        "Composition: each WordGame “has a” User and a LinkedList word bank.",
        "The LeaderBoard “has a” User and a linked list of the top five players.",
      ],
    },
    build: {
      summary:
        "A menu lets the player choose Hangman, Wordle or the leaderboard. Each game loads its word bank from a file into the linked list and picks a random word.",
      body: [
        "Hangman keeps two vectors, one for previous guesses and one for the ASCII art at each stage, and uses a linear search to check each letter. Wordle checks that a guess is exactly five letters, then colors each letter: green for the right place, yellow for the wrong place, red for not in the word.",
        "The leaderboard loads the score file into a linked list, keeps only the highest score for a returning player, sorts by score with insertion sort, and writes the top five back to the file.",
      ],
    },
    outcome: {
      summary:
        "Two playable games with persistent rankings, presented with a UML walkthrough and a live demo. The hardest parts were getting multiple files to work together and building one correct build configuration for the whole team.",
    },
  },
  figures: [
    {
      src: "/images/work/wordgames-update.png",
      alt: "Class diagram: abstract Word Game class with User, LeaderBoard and WordBank members; Hangman and Wordle inherit from it.",
      caption: "The UML class design, agreed before implementation.",
      width: 741,
      height: 571,
      stage: "design",
    },
    {
      src: "/images/work/word-games.png",
      alt: "Terminal output: an ASCII Hangman game on the left and Wordle with color-coded letter feedback on the right.",
      caption: "Both games running in the terminal.",
      width: 694,
      height: 488,
      stage: "build",
    },
  ],
  learned: [
    {
      title: "Agree on the design before the code.",
      body: "A shared UML diagram let four people work in parallel. Everyone knew what play() had to do before anyone wrote it.",
    },
    {
      title: "Build tooling is part of the project.",
      body: "Getting every file to compile together, the same way on everyone's machine, took real work. I learned to treat the build setup as a shared deliverable.",
    },
    {
      title: "Building a data structure shows you what you rely on.",
      body: "Writing our own linked list, and sorting it ourselves, made pointers, traversal and dynamic memory concrete.",
    },
    {
      title: "Small UX details matter, even in a terminal.",
      body: "Colored feedback and ASCII art were the parts people enjoyed most, and the parts that made the games easy to understand.",
    },
  ],
};
