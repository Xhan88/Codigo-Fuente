interface CornerBracketsProps {
  size?: number;
  className?: string;
}

export function CornerBrackets({ size = 12, className = '' }: CornerBracketsProps) {
  const style = { width: `${size}px`, height: `${size}px` };

  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`}>
      <span style={style} className="absolute top-0 left-0 border-t-[1.5px] border-l-[1.5px] border-[#2BE88E]" />
      <span style={style} className="absolute top-0 right-0 border-t-[1.5px] border-r-[1.5px] border-[#2BE88E]" />
      <span style={style} className="absolute bottom-0 left-0 border-b-[1.5px] border-l-[1.5px] border-[#2BE88E]" />
      <span style={style} className="absolute bottom-0 right-0 border-b-[1.5px] border-r-[1.5px] border-[#2BE88E]" />
    </div>
  );
}