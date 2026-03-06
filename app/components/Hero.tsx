"use client";

import { useEffect, useState } from "react";
import { heroData } from "../../data/data";

// Typewriter hook
function useTypewriter(words: string[], speed = 80, pause = 2000) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    }

    setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

export default function Hero() {
  const typed = useTypewriter(heroData.roles);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 100);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0d0d0d]"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#f5a623 1px, transparent 1px), linear-gradient(90deg, #f5a623 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#f5a623]/5 rounded-full blur-3xl" />

      {/* Decorative line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#f5a623]/40 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-12 grid md:grid-cols-2 gap-16 items-center">
        {/* Left — text */}
        <div>
          {/* Eyebrow */}
          <div
            className={`flex items-center gap-3 mb-6 transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="w-8 h-px bg-[#f5a623]" />
            <span className="font-mono text-xs text-[#f5a623] tracking-[0.25em] uppercase">
              {heroData.greeting}
            </span>
          </div>

          {/* Name */}
          <h1
            className={`font-display text-5xl md:text-7xl font-bold text-white leading-none mb-4 transition-all duration-700 delay-100 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {heroData.name.split(" ").map((word, i) => (
              <span key={i} className="block">
                {i === 1 ? (
                  <span className="text-[#f5a623]">{word}</span>
                ) : (
                  word
                )}
              </span>
            ))}
          </h1>

          {/* Typewriter */}
          <div
            className={`flex items-center gap-2 mb-6 transition-all duration-700 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="font-mono text-lg text-[#a0a0a0]">
              {typed}
              <span className="inline-block w-0.5 h-5 bg-[#f5a623] ml-0.5 animate-pulse" />
            </span>
          </div>

          {/* Bio */}
          <p
            className={`text-[#707070] leading-relaxed max-w-md mb-10 transition-all duration-700 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {heroData.bio}
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-wrap gap-4 mb-12 transition-all duration-700 delay-[400ms] ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <a
              href={heroData.cta.primary.href}
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector(heroData.cta.primary.href)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="font-mono text-sm tracking-widest uppercase px-6 py-3 bg-[#f5a623] text-[#0d0d0d] font-bold hover:bg-[#e09510] transition-colors"
            >
              {heroData.cta.primary.label}
            </a>
            <a
              href={heroData.cta.secondary.href}
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector(heroData.cta.secondary.href)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="font-mono text-sm tracking-widest uppercase px-6 py-3 border border-white/20 text-white hover:border-[#f5a623] hover:text-[#f5a623] transition-colors"
            >
              {heroData.cta.secondary.label}
            </a>
          </div>

          {/* Socials */}
          <div
            className={`flex items-center gap-6 transition-all duration-700 delay-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {[
              { label: "GitHub",   href: heroData.socials.github },
              { label: "LinkedIn", href: heroData.socials.linkedin },
              { label: "Email",    href: heroData.socials.email },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-[#505050] hover:text-[#f5a623] tracking-widest uppercase transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right — stats */}
        <div
          className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-300 ${
            mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
        >
          {heroData.stats.map((stat, i) => (
            <div
              key={i}
              className="relative border border-white/8 bg-white/[0.02] p-6 group hover:border-[#f5a623]/30 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-6 h-px bg-[#f5a623] group-hover:w-full transition-all duration-500" />
              <p className="font-display text-4xl font-bold text-[#f5a623] mb-1">
                {stat.value}
              </p>
              <p className="font-mono text-xs text-[#606060] tracking-wider uppercase">
                {stat.label}
              </p>
            </div>
          ))}

          {/* Code snippet decoration */}
          <div className="col-span-2 border border-white/8 bg-white/[0.02] p-4 font-mono text-xs text-[#505050] leading-relaxed">
            <span className="text-[#f5a623]">const</span>{" "}
            <span className="text-white">analyst</span> ={" "}
            {"{"}
            <br />
            &nbsp;&nbsp;<span className="text-[#f5a623]">tools</span>:{" "}
            <span className="text-[#8bc4e0]">["Power BI", "SQL", "Python"]</span>,
            <br />
            &nbsp;&nbsp;<span className="text-[#f5a623]">focus</span>:{" "}
            <span className="text-[#98d899]">"data-driven decisions"</span>
            <br />
            {"}"};
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-[10px] text-[#404040] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#f5a623]/40 to-transparent animate-bounce" />
      </div>
    </section>
  );
}