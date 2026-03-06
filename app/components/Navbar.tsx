"use client";

import { useState, useEffect } from "react";
import { navLinks, siteConfig } from "../../data/data";

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active, setActive]       = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Highlight active section
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0d0d0d]/95 backdrop-blur-md border-b border-[#f5a623]/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav("#hero")}
          className="font-display text-xl font-bold tracking-tight text-white hover:text-[#f5a623] transition-colors"
        >
          AK<span className="text-[#f5a623]">.</span>
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            return (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className={`relative font-mono text-sm tracking-widest uppercase transition-colors pb-1 ${
                    active === id
                      ? "text-[#f5a623]"
                      : "text-[#a0a0a0] hover:text-white"
                  }`}
                >
                  {link.label}
                  {active === id && (
                    <span className="absolute bottom-0 left-0 w-full h-px bg-[#f5a623]" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <a
          href="mailto:anusreekottaram64@gmail.com"
          className="hidden md:inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase px-4 py-2 border border-[#f5a623] text-[#f5a623] hover:bg-[#f5a623] hover:text-[#0d0d0d] transition-all duration-300"
        >
          Hire Me
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-6 bg-white transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-white transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 pb-6 pt-4 bg-[#0d0d0d]/98 border-t border-[#f5a623]/10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="w-full text-left font-mono text-sm tracking-widest uppercase py-3 text-[#a0a0a0] hover:text-[#f5a623] transition-colors border-b border-white/5"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li className="pt-3">
            <a
              href="mailto:anusreekottaram64@gmail.com"
              className="block text-center font-mono text-xs tracking-widest uppercase px-4 py-3 border border-[#f5a623] text-[#f5a623]"
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}