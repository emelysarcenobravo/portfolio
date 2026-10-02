export function SectionHeading({ 
    id, 
    eyebrow, 
    children, 
    aside, 
}: {
    id: string; 
    eyebrow: string; 
    children: React.ReactNode;
    aside?: React.ReactNode;
}) {

    return ( 
        <div className="mb-10 grid gap-4 md:mb-14 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
                <p className="font-mono text-xs tracking-[0.2em] text-ink-muted uppercase"> {eyebrow} </p> 
                <h2 id={id} className="mt-3 font-display text-5xl leading-[0.95] text-balance md:text-6xl">
                    {children}
                </h2> 
            </div>
            {aside && <div className="text-ink-muted md:col-span-4 md:text-right"> {aside} </div>}
        </div>
    );
}
