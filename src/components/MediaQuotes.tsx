"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const LOGO_HEIGHT = "h-10";

const quotes = [
  {
    quote:
      "If you want to vent, it listens. If you want comfort, it responds. If you want structured guidance, it adapts.",
    source: "Indian Express",
    logo: "/logos/indian-express-logo.svg",
    logoType: "image" as const,
    date: "January 2025",
    link: "https://indianexpress.com/article/upsc-current-affairs/upsc-essentials/ai-companion-for-mental-health-always-there-always-listening-9859499/",
  },
  {
    quote:
      "Tranquil AI is different from other mental health apps in more ways than one, primarily because it places a deep focus on experience by aiming to emulate the continuity, care, and emotional awareness of a real conversation.",
    source: "Startuppedia",
    logoType: "text" as const,
    date: "November 2024",
    link: "https://startuppedia.in/tech-innovation/four-22-year-old-vit-vellore-students-turned-a-hackathon-idea-into-an-ai-mental-health-app-bagged-5-lakh-seed-grant-10635543",
  },
  {
    quote:
      "Mental health remains a deeply rooted and pressing issue in Indian society. The scale of the problem is far greater than it appears on the surface.",
    source: "The Interview World",
    logoType: "text" as const,
    date: "May 2024",
    link: "https://theinterview.world/tranquil-ai-disrupting-mental-health-through-mindfulness/",
  },
];

export default function MediaQuotes() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = quotes[activeIndex];

  const goToNext = () => setActiveIndex((i) => (i + 1) % quotes.length);

  return (
    <section className="py-16 md:py-20 px-6 bg-[#EFF6FF] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-white/60 blur-[100px]" />
        <div className="absolute inset-0 dot-grid opacity-20" />
      </div>

      <div className="max-w-3xl mx-auto relative">
        {/* Label */}
        <div className="mb-10 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-[11px] font-semibold text-[#4A90D9] border border-[#D6EBFF]/80 shadow-sm uppercase tracking-widest mb-6">
            In the press
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <button
              type="button"
              onClick={goToNext}
              className="w-full text-center cursor-pointer block group/card"
            >
              {/* Publication logo */}
              <div className={`flex justify-center items-center mb-10 ${LOGO_HEIGHT}`}>
                {active.logoType === "image" && "logo" in active ? (
                  <Image
                    src={active.logo}
                    alt={active.source}
                    width={180}
                    height={40}
                    className="h-9 w-auto object-contain max-w-[180px] opacity-60 group-hover/card:opacity-90 transition-opacity duration-300"
                  />
                ) : active.source === "Startuppedia" ? (
                  <div className="inline-flex items-center gap-1.5 h-10 opacity-70 group-hover/card:opacity-100 transition-opacity duration-300">
                    <span className="rounded-md bg-[#1D4ED8] px-2.5 py-1 text-xs font-bold uppercase tracking-[0.14em] text-white">
                      STARTUP
                    </span>
                    <span className="text-sm font-semibold tracking-[0.1em] text-[#475569] uppercase">
                      pedia
                    </span>
                  </div>
                ) : (
                  <span className="text-sm font-bold tracking-wide text-[#64748B] font-serif leading-none opacity-70 group-hover/card:opacity-100 transition-opacity duration-300">
                    The Interview World
                  </span>
                )}
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                {/* Big decorative quotes */}
                <span className="absolute -top-4 -left-4 text-6xl text-[#BFDBFE] font-serif select-none leading-none">&ldquo;</span>
                <blockquote className="relative text-[#334155] text-[15px] md:text-base leading-relaxed max-w-2xl mx-auto font-light italic">
                  {active.quote}
                </blockquote>
                <span className="absolute -bottom-8 -right-4 text-6xl text-[#BFDBFE] font-serif select-none leading-none">&rdquo;</span>
              </div>

              {/* Date */}
              <p className="text-[13px] text-[#94A3B8] mt-8 mb-2">{active.date}</p>
            </button>

            {/* Read article */}
            <a
              href={active.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#2563EB] hover:text-[#1D4ED8] transition-colors mt-2"
            >
              Read full article
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        <div className="mt-10 flex justify-center items-center gap-2">
          {quotes.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="p-2 rounded-full focus:outline-none"
              aria-label={`Show quote from ${quotes[index].source}`}
            >
              <span
                className={`block rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-6 h-2 bg-[#2563EB]"
                    : "w-2 h-2 bg-blue-200 hover:bg-blue-300"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
