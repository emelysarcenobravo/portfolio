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

export const ArrowRight = (p: IconProps) => (
  <Icon {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Icon>
);

export const ArrowLeft = (p: IconProps) => (
    <Icon {...p}>
        <path d="M19 12H5M11 6l-6 6 6 6" />
    </Icon>
);

export const ArrowDown = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 5v14M6 13l6 6 6-6" />
  </Icon>
);

export const ArrowUpRight = (p: IconProps) => (
    <Icon {...p}>
        <path d="M7 17 17 7M8 7h9v9" />
    </Icon>
);