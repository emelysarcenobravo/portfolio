type IconProps = {className?: string};

function Icon({ className = "size-4", children}: IconProps & {children: React.ReactNode}){
    return(
        <svg
            aria-hidden
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.75}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            {children}
        </svg>
    );
}

export const ArrowUpRight = (p: IconProps) => (
    <Icon {...p}>
        <path d="M7 17 17 7M8 7h9v9" />
    </Icon>
);