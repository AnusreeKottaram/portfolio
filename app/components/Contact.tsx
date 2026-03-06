"use client";

import { useState } from "react";
import { contactData } from "../../data/data";

type FormState = { name: string; email: string; subject: string; message: string };
type Status    = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [form, setForm]     = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Wire up your form submission logic here (e.g. Resend, Formspree, EmailJS)
    await new Promise((r) => setTimeout(r, 1200)); // simulate async
    setStatus("sent");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  const inputCls =
    "w-full bg-white/[0.03] border border-white/10 px-4 py-3 font-mono text-sm text-white placeholder-[#404040] focus:outline-none focus:border-[#f5a623]/50 hover:border-white/20 transition-colors";

  return (
    <section id="contact" className="relative bg-[#080808] py-28 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-[#f5a623]/30 to-transparent" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#f5a623]/4 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-5 h-px bg-[#f5a623]" />
            <span className="font-mono text-[10px] text-[#f5a623] tracking-[0.3em] uppercase">
              Get In Touch
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-white">
            {contactData.heading}<br />
            <span className="text-[#f5a623]">.</span>
          </h2>
          <p className="text-[#707070] mt-4 max-w-md">{contactData.subheading}</p>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Left — info */}
          <div className="md:col-span-2 space-y-8">
            {[
              { label: "Email",    value: contactData.email,    href: `mailto:${contactData.email}` },
              { label: "Phone",    value: contactData.phone,    href: `tel:${contactData.phone}` },
              { label: "LinkedIn", value: "anusreekottaram",    href: contactData.linkedin },
              { label: "GitHub",   value: "AnusreeKottaram",    href: contactData.github },
              { label: "Location", value: contactData.location, href: undefined },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-mono text-[10px] text-[#404040] tracking-[0.25em] uppercase mb-1">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-[#a0a0a0] hover:text-[#f5a623] transition-colors text-sm break-all"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-[#a0a0a0] text-sm">{item.value}</p>
                )}
              </div>
            ))}

            {/* Availability badge */}
            <div className="border border-[#f5a623]/20 bg-[#f5a623]/5 px-4 py-3 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-mono text-xs text-[#a0a0a0]">
                Open to internships &amp; opportunities
              </span>
            </div>
          </div>

          {/* Right — form */}
          <div className="md:col-span-3">
            <div className="border border-white/8 bg-white/[0.015] p-8">
              <div className="space-y-4">
                {contactData.formFields.map((field) =>
                  field.type === "textarea" ? (
                    <div key={field.id}>
                      <label
                        htmlFor={field.id}
                        className="block font-mono text-[10px] text-[#505050] tracking-[0.2em] uppercase mb-2"
                      >
                        {field.label}
                      </label>
                      <textarea
                        id={field.id}
                        rows={5}
                        value={form[field.id as keyof FormState]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        className={`${inputCls} resize-none`}
                      />
                    </div>
                  ) : (
                    <div key={field.id}>
                      <label
                        htmlFor={field.id}
                        className="block font-mono text-[10px] text-[#505050] tracking-[0.2em] uppercase mb-2"
                      >
                        {field.label}
                      </label>
                      <input
                        id={field.id}
                        type={field.type}
                        value={form[field.id as keyof FormState]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        className={inputCls}
                      />
                    </div>
                  )
                )}

                <button
                  onClick={handleSubmit}
                  disabled={status === "sending" || status === "sent"}
                  className={`w-full font-mono text-sm tracking-widest uppercase py-3 transition-all duration-300 ${
                    status === "sent"
                      ? "bg-green-400/20 text-green-400 border border-green-400/30"
                      : status === "sending"
                      ? "bg-[#f5a623]/20 text-[#f5a623] border border-[#f5a623]/30 cursor-wait"
                      : "bg-[#f5a623] text-[#0d0d0d] font-bold hover:bg-[#e09510]"
                  }`}
                >
                  {status === "sent"
                    ? "✓ Message Sent!"
                    : status === "sending"
                    ? "Sending…"
                    : "Send Message"}
                </button>

                {status === "error" && (
                  <p className="font-mono text-xs text-red-400 text-center">
                    Something went wrong. Please try again.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}