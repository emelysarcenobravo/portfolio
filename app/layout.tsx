import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "../components/navigation/site-header";
import { SiteFooter } from "@/components/navigation/site-footer";

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
    <html lang="en">
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