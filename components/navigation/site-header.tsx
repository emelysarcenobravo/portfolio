import Link from "next/link";
import { Container } from "@/components/ui/container";

const NAV = [
    {href: "/#work", label: "Work"},
    {href: "/#skills", label: "Skills"},
    {href: "/#about", label: "About"},
    {href: "/#contact", label: "Contact"},
];

export function SiteHeader(){
    return(
        <header className="sticky top-0 z-40 border-b border-rule/70 bg-paper/85 backdrop-blur-md">
        <Container className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-3">
         <Link href="/" className="flex items-center gap-2.5 font-display text-xl leading-none whitespace-nowrap">
            Emely Sarceno Bravo
         </Link>

         <div className="flex items-center gap-3 md:order-last">
            <nav aria-label="Primary">
                <ul className="flex items-center gap-4 text-sm sm:gap-5">
                    {NAV.map((item) => (
                        <li key={item.href}>
                            <Link href={item.href} className="text-ink-muted hover:text-ink">
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

         </div>
        </Container>
        </header>
    )
}