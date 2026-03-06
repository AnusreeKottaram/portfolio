"use client";

import { aboutData, experienceData } from "../../data/data";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <span className="w-5 h-px bg-[#f5a623]" />
      <span className="font-mono text-[10px] text-[#f5a623] tracking-[0.3em] uppercase">
        {children}
      </span>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative bg-[#0d0d0d] py-28 overflow-hidden">
      {/* Subtle top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f5a623]/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-16">
          <SectionLabel>About Me</SectionLabel>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-white">
            The Person Behind<br />
            <span className="text-[#f5a623]">The Data</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — bio + highlights */}
          <div>
            <p className="text-[#808080] leading-relaxed text-lg mb-8">
              {aboutData.bio}
            </p>

            <ul className="space-y-3">
              {aboutData.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#f5a623] flex-shrink-0" />
                  <span className="text-[#a0a0a0]">{h}</span>
                </li>
              ))}
            </ul>

            {/* Languages */}
            <div className="mt-10">
              <SectionLabel>Languages</SectionLabel>
              <div className="flex flex-wrap gap-3">
                {aboutData.languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="border border-white/10 px-4 py-2 bg-white/[0.02]"
                  >
                    <span className="font-mono text-sm text-white">{lang.name}</span>
                    <span className="font-mono text-xs text-[#505050] ml-2">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — education + experience */}
          <div className="space-y-10">
            {/* Education */}
            <div>
              <SectionLabel>Education</SectionLabel>
              <div className="space-y-4">
                {aboutData.education.map((edu, i) => (
                  <div
                    key={i}
                    className="relative border border-white/8 bg-white/[0.02] p-5 group hover:border-[#f5a623]/20 transition-all duration-300"
                  >
                    <div className="absolute top-0 left-0 w-0 h-px bg-[#f5a623] group-hover:w-full transition-all duration-500" />
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-white font-semibold">{edu.degree}</p>
                        <p className="font-mono text-xs text-[#606060] mt-1">
                          {edu.institution}
                        </p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <span className="font-mono text-xs text-[#f5a623]">
                          {edu.duration}
                        </span>
                        <br />
                        <span
                          className={`font-mono text-[10px] ${
                            edu.status === "In Progress"
                              ? "text-green-400"
                              : "text-[#505050]"
                          }`}
                        >
                          {edu.status}
                        </span>
                        {edu.cgpa && (
                          <p className="font-mono text-xs text-[#f5a623] mt-0.5">
                            CGPA {edu.cgpa}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <SectionLabel>Experience</SectionLabel>
              <div className="relative border-l border-[#f5a623]/20 pl-6 space-y-8">
                {experienceData.map((exp, i) => (
                  <div key={i} className="relative">
                    {/* Timeline dot */}
                    <span className="absolute -left-[25px] top-1 w-2.5 h-2.5 border border-[#f5a623] bg-[#0d0d0d] rounded-full" />
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span
                        className={`font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 ${
                          exp.type === "Leadership"
                            ? "bg-[#f5a623]/10 text-[#f5a623]"
                            : "bg-white/5 text-[#707070]"
                        }`}
                      >
                        {exp.type}
                      </span>
                      <span className="font-mono text-xs text-[#505050]">
                        {exp.duration}
                      </span>
                    </div>
                    <h4 className="font-semibold text-white">{exp.role}</h4>
                    <p className="font-mono text-xs text-[#606060] mb-3">
                      {exp.organisation}
                    </p>
                    <ul className="space-y-1.5">
                      {exp.bullets.map((b, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm text-[#707070]"
                        >
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-[#f5a623]/50 flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}