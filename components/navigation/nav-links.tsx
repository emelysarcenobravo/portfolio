"use client";

import { m } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/work", label: "Work" },
  { href: "/skills", label: "Skills" },
  { href: "/about", label: "About" },
];

/** Page links; a soft burgundy pill slides to the page you're on. */
export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary">
      <ul className="isolate flex items-center gap-0.5 text-sm font-medium">
        {NAV.map((item) => {
          const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative block rounded-full px-2.5 py-2 transition-colors sm:px-4 ${
                  active ? "text-accent" : "text-ink-muted hover:text-ink"
                }`}
              >
                {active && (
                  <m.span
                    layoutId="nav-pill"
                    transition={{ type: "spring", stiffness: 420, damping: 36 }}
                    className="absolute inset-0 -z-10 rounded-full bg-accent-soft"
                  />
                )}
                {item.label}
              </Link>
            </li>
          );
        })}
        <li>
          <a href="#connect" className="hidden rounded-full px-3 py-2 text-ink-muted hover:text-ink sm:block sm:px-4">
            Connect
          </a>
        </li>
      </ul>
    </nav>
  );
}
