import React, { useRef, useEffect, useState } from "react";

interface GlassCardProps {
  label: string;
  children: React.ReactNode;
  r: number;
}

export const GlassCard = ({ label, children, r }: GlassCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // 요소의 인덱스를 계산 (형제 요소 중 몇 번째인지)
    if (ref.current) {
      const parent = ref.current.parentElement;
      if (parent) {
        const siblings = Array.from(parent.children);
        setIndex(siblings.indexOf(ref.current));
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.9 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const delay = index * 100; // 각 카드마다 100ms 지연

  return (
    <div
      ref={ref}
      className={`
        relative w-[240px] h-[280px]
        bg-gradient-to-br from-white/30 via-white/15 to-white/5
        border border-white/20 shadow-2xl
        flex justify-center items-center
        rounded-xl backdrop-blur-lg
        hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]
        after:absolute after:top-0 after:right-0 after:w-1 after:h-full
        after:bg-gradient-to-b after:from-white/50 after:via-white/20 after:to-transparent
        after:rounded-r-xl after:pointer-events-none after:z-10
        before:absolute before:bottom-0 before:left-0 before:w-full before:h-1
        before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent
        before:rounded-b-xl before:pointer-events-none before:z-10
      `}
      style={{
        transform: isInView ? "rotate(0deg) translateX(0)" : `rotate(${r}deg) translateX(${r > 0 ? 50 : -50}px)`,
        marginLeft: isInView ? "10px" : "-45px",
        opacity: isInView ? 1 : 0.7,
        transition: `all 800ms cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms`,
      }}
    >
      {/* label */}
      <div
        className="
          absolute bottom-0 w-full h-10
          bg-white/5 flex justify-center items-center
          text-white text-sm
        "
      >
        {label}
      </div>

      {/* icon */}
      <div className="text-white text-[2.5em]">{children}</div>
    </div>
  );
};

const Card = () => {
  return (
    <div className="flex justify-center items-center relative group">
      {/* Github */}
      <GlassCard label="Github" r={-15}>
        <svg viewBox="0 0 496 512" height="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M165.9 397.4c0 2-2.3 3.6-5.2..." />
        </svg>
      </GlassCard>

      {/* Code */}
      <GlassCard label="Code" r={5}>
        <svg viewBox="0 0 640 512" height="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M392.8 1.2c-17-4.9-34.7 5..." />
        </svg>
      </GlassCard>

      {/* Earn */}
      <GlassCard label="Earn" r={25}>
        <svg viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M64 64C28.7 64 0 92.7 0..." />
        </svg>
      </GlassCard>
    </div>
  );
};


export default Card;
