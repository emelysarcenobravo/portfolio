import Image from "next/image";
import headshot from "@/public/images/about/headshot.png";

const ALT = "Emely Sarceno Bravo, smiling, in a black cardigan against a gray studio background.";

export function Portrait({
    variant, 
    className = "",
    priority = false, 
}: {
    variant: "arch" | "avatar" | "frame";
    className?: string;
    priority?: boolean;
}){
    if(variant === "avatar"){
        return(
            <span className={`relative block overflow-hidden rounded-full ring-2 ring-accent/40 ${className}`}>
                <Image src={headshot} alt="" fill sizes="64px" className="object-cover object-[50%_18%]"/>
            </span>
        );
    }
    return (
        <div className={`relative overflow-hidden bg-tint ${
            variant === "arch" 
            ? "aspect-4/5 rounded-t-full rounded-b-[2em]" 
            : "aspect-4/5 rounded-4xl"
        } ${className}`}
        >
            <Image 
                src={headshot}
                alt={ALT}
                fill
                priority={priority}
                loading={priority ? "eager" : "lazy"}
                placeholder="blur"
                sizes="(min-width: 1024px) 28rem, (min-width: 640px) 50vw, 90vw"
                className="object-cover object-[50%_22%]"
        />
        </div>
    )

}
