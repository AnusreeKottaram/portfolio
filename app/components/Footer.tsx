"use client";
import { footerData } from "../../data/data";

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] border-t border-white/5 py-12 overflow-hidden">
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f5a623]/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Branding */}
          <div>
            <p className="font-display text-2xl font-bold text-white">
              AK<span className="text-[#f5a623]">.</span>
            </p>
            <p className="font-mono text-xs text-[#404040] mt-1 tracking-wider">
              {footerData.tagline}
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerData.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                }}
                className="font-mono text-xs text-[#505050] hover:text-[#f5a623] tracking-widest uppercase transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex justify-end gap-4">
            {footerData.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-[#505050] hover:text-[#f5a623] transition-colors tracking-wider"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="font-mono text-[10px] text-[#303030] tracking-wider">
            © {footerData.year} {footerData.name}. All rights reserved.
          </p>
          <p className="font-mono text-[10px] text-[#303030] tracking-wider">
            {footerData.builtWith}
          </p>
        </div>
      </div>
    </footer>
  );
}