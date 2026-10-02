export function Container({
    className = "", 
    children,
 }: { 
    className?: string; 
    children: React.ReactNode
}){
    return(
    <div 
        className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 ${className}`}
        >
            {children}
            </div>
    );
}