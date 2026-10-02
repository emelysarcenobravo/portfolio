import type { Metadata } from "next";
import { Geist_Mono, Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import { SiteFooter } from "@/components/navigation/site-footer";
import { SiteHeader } from "../components/navigation/site-header";
import "./globals.css";


// Body text: a warm, slightly rounded sans with more character than a system font, without being decorative.
const bodySans = Plus_Jakarta_Sans({ variable: "--font-body", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});


export const metadata: Metadata = {
    title: "Emely Sarceno Bravo | Portfolio",
    description: 
        "Portfolio of Emely Sarceno Bravo - software egineering, AI, UX, and marketing projects"
};

export default function RootLayout({
    children, 
}: Readonly <{
    children: React.ReactNode;
}>) {
    return(
    <html
    lang="en"
    className={`${bodySans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
>
    <body>
            <SiteHeader/>
                <main id="main" className="flex-1">
                    {children}
                </main>
            <SiteFooter/>
       </body>
    </html>
    );
}