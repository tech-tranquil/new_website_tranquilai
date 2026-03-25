"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CalmShapes } from "../illustrations/CalmShapes";

const spring = { type: "spring" as const, stiffness: 180, damping: 22 };
const serene = { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const };

const segments = [
  {
    number: "01",
    title: "Individuals",
    description: "Personal mental health support for anyone seeking emotional wellness. Talk to Sara, journal, and build resilience at your own pace.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="7" r="3.5" />
        <path d="M5 19.5C5.8 16.5 8.6 15 12 15s6.2 1.5 7 4.5" />
      </svg>
    ),
    gradient: "from-violet-50 via-indigo-50/80 to-white",
    accent: "violet",
    stats: ["24/7", "Available"],
    href: "/individuals",
  },
  {
    number: "02",
    title: "Employers",
    description: "Workplace wellness solutions that support employee mental health. Reduce burnout, improve productivity, and foster a caring culture.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
      </svg>
    ),
    gradient: "from-sky-50 via-cyan-50/80 to-white",
    accent: "sky",
    stats: ["B2B", "Enterprise"],
    href: "/employers",
  },
  {
    number: "03",
    title: "Universities",
    description: "Campus mental health resources for students. 24/7 support for stress, anxiety, and the unique challenges of student life.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9L12 5l9 4-9 4-9-4Z" />
        <path d="M7 12v4.5A3.5 3.5 0 0 0 10.5 20h3A3.5 3.5 0 0 0 17 16.5V12" />
      </svg>
    ),
    gradient: "from-emerald-50 via-teal-50/80 to-white",
    accent: "emerald",
    stats: ["Students", "24/7"],
    href: "/universities",
  },
  {
    number: "04",
    title: "Healthcare Providers",
    description: "Tools for clinics and therapists to extend care. Tranquil AI complements traditional therapy with between-session support.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.3 6.3a5 5 0 0 0-7.1 0L12 7.5l-1.2-1.2a5 5 0 1 0-7.1 7.1L12 21l8.3-8.6a5 5 0 0 0 0-7.1Z" />
      </svg>
    ),
    gradient: "from-rose-50 via-pink-50/80 to-white",
    accent: "rose",
    stats: ["Clinical", "Support"],
    href: "/healthcare",
  },
  {
    number: "05",
    title: "Schools & K-12",
    description: "Youth mental wellness support designed for younger users. Safe, age-appropriate emotional guidance for students.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <path d="M12 6v6" />
      </svg>
    ),
    gradient: "from-amber-50 via-orange-50/80 to-white",
    accent: "amber",
    stats: ["Youth", "Safe"],
    href: "/schools",
  },
  {
    number: "06",
    title: "API & Integrations",
    description: "Embed Tranquil AI into your platform. Chatbot integration solutions for apps, websites, and custom workflows.",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    gradient: "from-blue-50 via-indigo-50/80 to-white",
    accent: "blue",
    stats: ["Embed", "Custom"],
    href: "/integrations",
  },
];

const accentColors: Record<string, string> = {
  violet: "text-violet-600",
  sky: "text-sky-600",
  emerald: "text-emerald-600",
  rose: "text-rose-600",
  amber: "text-amber-600",
  blue: "text-[#4A90D9]",
};

export default function WhoWeServeContent() {
  const heroRef = useRef(null);
  const gridRef = useRef(null);
  const ctaRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-60px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-60px" });

  return (
    <div className="pt-16 pb-24">
      {/* Hero */}
      <section ref={heroRef} className="relative px-6 pt-16 pb-16 overflow-hidden">
        <CalmShapes />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={serene}
            className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-[11px] font-semibold text-[#4A90D9] border border-[#D6EBFF]/80 shadow-sm uppercase tracking-widest mb-6"
          >
            Who We Serve
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...serene, delay: 0.05 }}
            className="font-heading text-3xl md:text-4xl lg:text-[44px] font-bold text-[#0F172A] tracking-[-0.02em] leading-[1.15] mb-5"
          >
            Tailored solutions for{" "}
            <span className="bg-gradient-to-r from-[#4A90D9] to-[#9EC5FF] bg-clip-text text-transparent">
              every mind
            </span>
            , at every scale
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...serene, delay: 0.1 }}
            className="text-base md:text-[17px] text-[#64748B] max-w-2xl mx-auto leading-relaxed"
          >
            From individuals seeking personal support to enterprises building wellness programs, Tranquil AI adapts to serve your unique context.
          </motion.p>
        </div>
      </section>

      {/* Grid */}
      <section ref={gridRef} className="px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {segments.map((segment, i) => (
              <motion.div
                key={segment.title}
                initial={{ opacity: 0, y: 24 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ ...spring, delay: 0.05 + i * 0.05 }}
              >
                <Link
                  href={segment.href}
                  className="group relative block h-full rounded-[1.25rem] md:rounded-[1.5rem] overflow-hidden transition-all duration-300"
                >
                  <div className="absolute -inset-px rounded-[1.5rem] bg-gradient-to-br from-[#4A90D9]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div
                    className={`relative flex flex-col h-full min-h-[220px] rounded-[1.25rem] md:rounded-[1.5rem] p-6 md:p-7 bg-gradient-to-br ${segment.gradient} border border-white/80 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-0.5`}
                  >
                    <span className="absolute top-5 right-5 font-heading text-3xl font-bold text-black/[0.03] group-hover:text-black/[0.06] transition-colors">
                      {segment.number}
                    </span>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={spring}
                      className={`relative w-11 h-11 rounded-xl bg-white/80 flex items-center justify-center mb-5 border border-white/60 shadow-sm ${accentColors[segment.accent]}`}
                    >
                      {segment.icon}
                    </motion.div>

                    <h3 className="font-heading text-lg md:text-xl font-bold text-[#0F172A] mb-2 group-hover:text-[#4A90D9] transition-colors duration-200">
                      {segment.title}
                    </h3>

                    <p className="text-[#475569] text-sm md:text-[15px] leading-relaxed flex-1 mb-4">
                      {segment.description}
                    </p>

                    <div className="flex items-center gap-1.5 text-[13px] font-semibold text-[#4A90D9] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      Learn more
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B CTA */}
      <section ref={ctaRef} className="px-6 py-16 md:py-24 relative overflow-hidden mt-8 md:mt-12">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={serene}
          >
            <h2 className="text-[28px] md:text-[34px] font-sans font-bold text-[#0F172A] mb-4 tracking-tight">
              Interested in Tranquil AI for your organization?
            </h2>
            <p className="text-[#64748B] text-[15px] md:text-[17px] mb-8 max-w-xl mx-auto leading-relaxed">
              We&apos;ll design custom integrations to support your team&apos;s wellness journey.
            </p>
            <a
              href="mailto:support@tranquilai.in?subject=B2B%20Inquiry"
              className="inline-flex items-center justify-center px-6 py-3 rounded-[12px] bg-[#3B82F6] text-white text-[15px] font-semibold hover:bg-[#2563EB] transition-all duration-300 shadow-sm group"
            >
              Contact Us
              <svg className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
