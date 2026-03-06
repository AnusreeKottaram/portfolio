"use client";

import { useEffect, useRef, useState } from "react";
import { skillsData } from "../../data/data";
import type { SkillLevel } from "../../data/data";

const levelColor: Record<SkillLevel, string> = {
  Beginner:     "text-[#707070]",
  Intermediate: "text-[#a0a0a0]",
  Advanced:     "text-[#f5a623]",
};

function SkillBar({
  name,
  percent = 0,
  level,
  animate,
}: {
  name: string;
  percent?: number;
  level?: SkillLevel;
  animate: boolean;
}) {
  return (
    <div className="group">
      <div className="flex justify-between items-baseline mb-1.5">
        <span className="text-sm text-[#c0c0c0] group-hover:text-white transition-colors">
          {name}
        </span>
        <div className="flex items-center gap-2">
          {level && (
            <span className={`font-mono text-[10px] tracking-wider ${levelColor[level]}`}>
              {level}
            </span>
          )}
          <span className="font-mono text-xs text-[#f5a623]">{percent}%</span>
        </div>
      </div>
      <div className="h-px bg-white/8 relative overflow-hidden">
        <div
          className="h-full bg-[#f5a623] transition-all duration-1000 ease-out"
          style={{ width: animate ? `${percent}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={ref}
      className="relative bg-[#080808] py-28 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f5a623]/3 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-5 h-px bg-[#f5a623]" />
            <span className="font-mono text-[10px] text-[#f5a623] tracking-[0.3em] uppercase">
              Capabilities
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-white">
            Skills &<br />
            <span className="text-[#f5a623]">Expertise</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillsData.map((cat, i) => (
            <div
              key={i}
              className="border border-white/8 bg-white/[0.015] p-6 hover:border-[#f5a623]/20 transition-all duration-300 group relative"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-0 h-px bg-[#f5a623] group-hover:w-12 transition-all duration-500" />
              <div className="absolute top-0 right-0 w-px h-0 bg-[#f5a623] group-hover:h-12 transition-all duration-500" />

              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{cat.emoji}</span>
                <h3 className="font-display text-lg font-semibold text-white">
                  {cat.category}
                </h3>
              </div>

              <div className="space-y-4">
                {cat.skills.map((skill, j) => (
                  <SkillBar
                    key={j}
                    name={skill.name}
                    percent={skill.percent}
                    level={skill.level}
                    animate={animate}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="font-mono text-xs text-[#404040] text-center mt-10 tracking-wider">
          // constantly learning · open to new tools and domains
        </p>
      </div>
    </section>
  );
}