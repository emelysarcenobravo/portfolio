import Link from "next/link";
import { Portrait } from "@/components/about/portrait";
import { NavLinks } from "./nav-links";
import { ThemeToggle } from "./theme-toggle";

/** A full-width navigation bar: name on the left, pages and theme toggle on the right. */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper-raised/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-10">
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-full pr-2 text-[0.95rem] font-semibold whitespace-nowrap"
        >
          <Portrait variant="avatar" className="size-8" />
          <span className="hidden sm:inline">Emely Sarceno Bravo</span>
          <span className="sm:hidden">Emely</span>
        </Link>
        <div className="flex items-center gap-1">
          <NavLinks />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
