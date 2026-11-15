interface BrandLogoProps {
  size?: number;
  className?: string;
}

export default function BrandLogo({ size = 36, className = "" }: BrandLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      {/* Background container tile */}
      <rect width="32" height="32" rx="4" fill="#0f2140" stroke="rgba(184, 115, 51, 0.4)" strokeWidth="1" />
      
      {/* Stepped pillars (rising graph / architectural foundation) */}
      <rect x="6" y="8" width="4" height="16" rx="1" fill="#b87333" />
      <rect x="12" y="11" width="4" height="13" rx="1" fill="#7a9bc2" />
      <rect x="18" y="14" width="4" height="10" rx="1" fill="#a4bdd4" />
    </svg>
  );
}
