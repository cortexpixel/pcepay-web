"use client";
import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const branches = [
  { label: "IR35 Contractors", angle: -72 },
  { label: "Recruitment Agencies", angle: -36 },
  { label: "Limited Companies", angle: 0 },
  { label: "Umbrella Workers", angle: 36 },
  { label: "Temporary Contractors", angle: 72 },
];

const MindMap = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  if (isMobile) {
    return (
      <div ref={ref} className="w-full flex justify-center py-4">
        <div className="w-full max-w-sm flex flex-col items-center gap-3">
          {/* Center node */}
          <div
            className="w-36 h-36 rounded-full bg-primary flex items-center justify-center text-center shadow-lg"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "scale(1)" : "scale(0.8)",
              transition: "opacity 0.5s ease, transform 0.5s ease",
            }}
          >
            <div>
              <p className="text-primary-foreground text-sm font-bold font-display leading-tight">Peace Payroll</p>
              <p className="text-primary-foreground text-xs font-display">Services</p>
            </div>
          </div>

          {/* Branch nodes stacked */}
          <div className="w-full flex flex-col gap-2 mt-2">
            {branches.map((b, i) => (
              <div
                key={b.label}
                className="flex items-center gap-3 bg-card border border-border/50 rounded-xl px-4 py-3 shadow-sm"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateX(0)" : "translateX(-20px)",
                  transition: `opacity 0.4s ease ${0.3 + i * 0.1}s, transform 0.4s ease ${0.3 + i * 0.1}s`,
                }}
              >
                <div className="w-3 h-3 rounded-full bg-accent/20 border-2 border-accent flex-shrink-0" />
                <span className="text-foreground text-sm font-medium">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const cx = 400, cy = 250;
  const radius = 190;

  return (
    <div ref={ref} className="w-full flex justify-center py-8">
      <svg
        viewBox="0 0 800 500"
        className="w-full max-w-3xl"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Connecting lines */}
        {branches.map((b, i) => {
          const rad = (b.angle * Math.PI) / 180;
          const ex = cx + radius * Math.cos(rad);
          const ey = cy + radius * Math.sin(rad);
          return (
            <line
              key={`line-${i}`}
              x1={cx} y1={cy} x2={ex} y2={ey}
              className="stroke-accent/40"
              strokeWidth="2"
              style={{
                transition: `stroke-dashoffset 0.8s ease ${i * 0.15}s`,
                strokeDashoffset: visible ? 0 : 300,
                strokeDasharray: 300,
              }}
            />
          );
        })}

        {/* Center node */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "scale(1)" : "scale(0.8)",
            transformOrigin: `${cx}px ${cy}px`,
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
        >
          <circle cx={cx} cy={cy} r="64" className="fill-primary" />
          <text x={cx} y={cy - 8} textAnchor="middle" className="fill-primary-foreground text-[13px] font-bold" fontFamily="Poppins, sans-serif">Peace Payroll</text>
          <text x={cx} y={cy + 12} textAnchor="middle" className="fill-primary-foreground text-[12px]" fontFamily="Poppins, sans-serif">Services</text>
        </g>

        {/* Branch nodes */}
        {branches.map((b, i) => {
          const rad = (b.angle * Math.PI) / 180;
          const nx = cx + radius * Math.cos(rad);
          const ny = cy + radius * Math.sin(rad);
          const words = b.label.split(" ");
          const line1 = words.slice(0, Math.ceil(words.length / 2)).join(" ");
          const line2 = words.slice(Math.ceil(words.length / 2)).join(" ");

          return (
            <g
              key={`node-${i}`}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "scale(1)" : "scale(0.7)",
                transformOrigin: `${nx}px ${ny}px`,
                transition: `opacity 0.5s ease ${0.3 + i * 0.12}s, transform 0.5s ease ${0.3 + i * 0.12}s`,
              }}
            >
              <rect x={nx - 70} y={ny - 22} width="140" height="44" rx="22" className="fill-card stroke-border" strokeWidth="1.5" filter="drop-shadow(0 2px 8px rgba(0,0,0,0.06))" />
              <circle cx={nx - 48} cy={ny} r="6" className="fill-accent/20 stroke-accent" strokeWidth="1.5" />
              {line2 ? (
                <>
                  <text x={nx + 4} y={ny - 4} textAnchor="middle" className="fill-foreground text-[11px] font-medium" fontFamily="Inter, sans-serif">{line1}</text>
                  <text x={nx + 4} y={ny + 10} textAnchor="middle" className="fill-foreground text-[11px] font-medium" fontFamily="Inter, sans-serif">{line2}</text>
                </>
              ) : (
                <text x={nx + 4} y={ny + 4} textAnchor="middle" className="fill-foreground text-[11px] font-medium" fontFamily="Inter, sans-serif">{line1}</text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default MindMap;
