"use client";

import { projectsData } from "../../data/data";

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative bg-[#0d0d0d] py-28 overflow-hidden">
      {/* Left accent */}
      <div className="absolute left-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-[#f5a623]/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-5 h-px bg-[#f5a623]" />
            <span className="font-mono text-[10px] text-[#f5a623] tracking-[0.3em] uppercase">
              Work
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-white">
            Featured<br />
            <span className="text-[#f5a623]">Projects</span>
          </h2>
        </div>

        {/* Project cards */}
        <div className="space-y-8">
          {projectsData.map((project) => (
            <article
              key={project.id}
              className="group border border-white/8 bg-white/[0.015] hover:border-[#f5a623]/25 transition-all duration-500 relative overflow-hidden"
            >
              {/* Top accent line */}
              <div className="h-px w-0 bg-[#f5a623] group-hover:w-full transition-all duration-700" />

              <div className="p-8 md:p-10">
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Main content */}
                  <div className="md:col-span-2">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        {project.featured && (
                          <span className="font-mono text-[10px] text-[#f5a623] tracking-[0.25em] uppercase mb-2 block">
                            ★ Featured Project
                          </span>
                        )}
                        <h3 className="font-display text-2xl font-bold text-white group-hover:text-[#f5a623] transition-colors">
                          {project.title}
                        </h3>
                      </div>

                      {/* Links */}
                      <div className="flex items-center gap-3 flex-shrink-0">
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#606060] hover:text-[#f5a623] transition-colors"
                            aria-label="GitHub"
                          >
                            <GitHubIcon />
                          </a>
                        )}
                        {project.links.live && (
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#606060] hover:text-[#f5a623] transition-colors"
                            aria-label="Live site"
                          >
                            <ExternalIcon />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-[#707070] leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {project.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-[#808080]">
                          <span className="mt-1.5 w-1 h-1 bg-[#f5a623]/60 rounded-full flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] tracking-wider uppercase px-3 py-1 border border-white/10 text-[#606060] hover:border-[#f5a623]/30 hover:text-[#f5a623] transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics sidebar */}
                  {project.metrics && (
                    <div className="flex flex-col gap-4 md:border-l md:border-white/8 md:pl-8">
                      <p className="font-mono text-[10px] text-[#404040] tracking-[0.25em] uppercase">
                        Key Metrics
                      </p>
                      {project.metrics.map((m, i) => (
                        <div key={i}>
                          <p className="font-display text-3xl font-bold text-[#f5a623]">
                            {m.value}
                          </p>
                          <p className="font-mono text-xs text-[#505050] tracking-wider">
                            {m.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* More projects CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/AnusreeKottaram"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm tracking-widest uppercase text-[#606060] hover:text-[#f5a623] transition-colors border border-white/10 hover:border-[#f5a623]/30 px-6 py-3"
          >
            <GitHubIcon />
            More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}