"use client";

import { Moon, Sun } from "@/components/ui/icons";

// Must match the key read by the init script in app/layout.tsx.
const THEME_STORAGE_KEY = "theme";

function currentTheme(): "light" | "dark" {
  const chosen = document.documentElement.getAttribute("data-theme");
  if (chosen === "light" || chosen === "dark") return chosen;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

/**
 * Switches between light and dark. The first visit follows the system setting;
 * after that the visitor's choice is remembered in this browser.
 * The icons swap with CSS (dark: variant), so the server and client render the same markup.
 */
export function ThemeToggle() {
  function toggle() {
    const next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Storage can be unavailable (private mode); the toggle still works for this visit.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="grid size-9 place-items-center rounded-full text-ink-muted hover:bg-tint hover:text-ink"
    >
      <span className="sr-only">Toggle dark mode</span>
      <Moon className="size-[1.1rem] dark:hidden" />
      <Sun className="hidden size-[1.1rem] dark:block" />
    </button>
  );
}
