
interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <img
      src="/200.png"
      alt="Código Fuente"
      className={`h-20 bg-[#2BE88E] w-auto object-contain ${className}`}
    />
  );
}
