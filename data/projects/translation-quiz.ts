import type { Project } from "./types";

export const translationQuiz: Project = {
  slug: "translation-quiz",
  name: "TranslationQuiz driver",
  title: "TranslationQuiz: a Linux device driver that teaches Spanish",
  kicker: "Operating Systems · CSC 415",
  summary:
    "A loadable Linux kernel module in C that runs an English–Spanish vocabulary quiz. Reading the device shows a question and your score, writing to it submits an answer, and ioctl switches the translation direction.",
  order: 7,
  featured: false,
  period: "Spring 2026",
  role: "Solo project: kernel module, test program, write-up",
  headline: "A kernel module with read, write and ioctl",
  hmw: "How might we turn a required kernel-driver assignment into something people could actually use?",
  preview: {
    kind: "image",
    src: "/images/work/translation-quiz.jpg",
    alt: "Terminal running the TranslationQuiz test program: a word to translate, four options, feedback, score, attempts, accuracy, and a mode switch to Spanish-to-English.",
    width: 1052,
    height: 1612,
    // A tall terminal screenshot reads better cropped to its top than shrunk to fit.
    fit: "cover",
    position: "50% 0%",
  },
  stack: ["C", "Linux kernel modules", "Character devices", "ioctl", "Makefile", "Ubuntu", "Git"],
  links: [],
  contribution: [
    "Designed and wrote the TranslationQuiz character device driver: open, release, read, write and ioctl.",
    "Wrote a user-space test program with a menu to answer questions, switch modes and quit.",
    "Documented how to build, load, use and unload the driver, with screenshots, in the project write-up.",
  ],
  lenses: {
    build: {
      relevance: 3,
      headline: "C in kernel space: read, write, ioctl",
      points: [
        "Registers a character device and keeps each session's quiz state in file->private_data, allocated on open and freed on release.",
        "Moves data safely across the kernel/user boundary with copy_to_user and copy_from_user, and validates every answer with kstrtoint.",
        "Uses ioctl to switch between English→Spanish and Spanish→English, and get_random_bytes to pick questions.",
      ],
    },
    design: {
      relevance: 1,
      headline: "Make a systems assignment useful",
      points: [
        "Instead of a toy example, I built a small language-learning tool with instant feedback, a score and an accuracy percentage.",
      ],
    },
  },
  stages: {
    problem: {
      summary:
        "The assignment: write a loadable Linux device driver in C with open, release, read, write and at least one ioctl command, plus a user program that uses it.",
    },
    people: {
      summary:
        "I wanted something people could actually use, so I built a quiz for practicing English–Spanish vocabulary.",
    },
    design: {
      summary: "I mapped each Linux file operation to a quiz action, so using the device feels like playing a game.",
      details: [
        "open: allocate a fresh quiz session and generate the first question.",
        "read: return the current word, four options, feedback, score, attempts and accuracy.",
        "write: submit an answer from 1 to 4, update the score, and generate the next question.",
        "ioctl: switch between English→Spanish and Spanish→English.",
        "release: free the session's memory.",
      ],
    },
    build: {
      summary:
        "The module registers a character device, stores per-session state in a struct, and logs each step with printk so its behavior can be checked in the kernel log.",
      body: [
        "Because kernel code can't trust user input, write copies at most 7 bytes into a kernel buffer, parses it with kstrtoint, and rejects anything outside 1–4. read builds its output with scnprintf and sends it back with copy_to_user.",
      ],
    },
    outcome: {
      summary:
        "The driver loads, runs the quiz, switches modes and unloads cleanly, and the kernel log confirms each step from registration to “Goodbye from TranslationQuiz Driver!”",
    },
  },
  figures: [
    {
      src: "/images/work/translation-quiz.jpg",
      alt: "The test program: translate “Dog”, four Spanish options, feedback “Wrong!”, score 1, 2 attempts, 50% accuracy, then a switch to Spanish-to-English mode.",
      caption: "Playing the quiz through the test program, including a mode switch via ioctl.",
      width: 1052,
      height: 1612,
      stage: "build",
    },
    {
      src: "/images/work/translation-quiz-kernel-log.jpg",
      alt: "Kernel log (dmesg) showing the driver registering, the device opening, answers being received, the mode changing, and the driver unloading.",
      caption: "The kernel log traces the driver's whole lifecycle.",
      width: 1878,
      height: 756,
      stage: "outcome",
      wide: true,
    },
  ],
  learned: [
    {
      title: "The kernel/user boundary is real.",
      body: "You can't simply dereference a user pointer in the kernel. copy_to_user and copy_from_user made me think carefully about where every byte lives.",
    },
    {
      title: "Validate everything in kernel code.",
      body: "A bad input in an app throws an error; in a driver it can crash the system. Bounded buffers and strict parsing weren't optional.",
    },
    {
      title: "Every allocation needs an owner.",
      body: "Allocating on open and freeing on release, with each session's state in private_data, taught me to plan cleanup as carefully as setup.",
    },
  ],
};
