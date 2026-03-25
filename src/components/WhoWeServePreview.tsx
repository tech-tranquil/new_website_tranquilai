"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const segments = [
  {
    title: "Individuals",
    subtitle: "Daily emotional check-ins, journaling, and gentle self-care nudges.",
    icon: "person",
    href: "/who-we-serve",
    tag: "B2C",
    color: "from-[#EFF6FF] to-[#DBEAFE]/50",
    border: "border-blue-200/80",
    iconColor: "text-[#2563EB]",
    iconBg: "bg-blue-100",
    tagColor: "text-[#2563EB]",
    numColor: "text-blue-200",
  },
  {
    title: "Employers",
    subtitle: "Confidential support for teams, burnout prevention, and pulse insights.",
    icon: "building",
    href: "/who-we-serve",
    tag: "B2B",
    color: "from-[#F0FDFA] to-[#CCFBF1]/50",
    border: "border-emerald-200/80",
    iconColor: "text-[#059669]",
    iconBg: "bg-emerald-50",
    tagColor: "text-[#059669]",
    numColor: "text-emerald-200",
  },
  {
    title: "Universities",
    subtitle: "24/7 student support for stress, exams, and campus life transitions.",
    icon: "university",
    href: "/who-we-serve",
    tag: "B2B",
    color: "from-[#FFF7ED] to-[#FED7AA]/40",
    border: "border-orange-200/80",
    iconColor: "text-[#EA580C]",
    iconBg: "bg-orange-50",
    tagColor: "text-[#EA580C]",
    numColor: "text-orange-200",
  },
  {
    title: "Healthcare",
    subtitle: "Between-session companion that extends the work of clinics, therapists, and care programs.",
    icon: "health",
    href: "/who-we-serve",
    tag: "B2B",
    color: "from-[#FAF5FF] to-[#E9D5FF]/40",
    border: "border-violet-200/80",
    iconColor: "text-[#7C3AED]",
    iconBg: "bg-violet-50",
    tagColor: "text-[#7C3AED]",
    numColor: "text-violet-200",
  },
];

const icons = {
  person: (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="7" r="3.5" />
      <path d="M5 19.5C5.8 16.5 8.6 15 12 15s6.2 1.5 7 4.5" />
    </svg>
  ),
  building: (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
    </svg>
  ),
  university: (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9L12 5l9 4-9 4-9-4Z" />
      <path d="M7 12v4.5A3.5 3.5 0 0 0 10.5 20h3A3.5 3.5 0 0 0 17 16.5V12" />
    </svg>
  ),
  health: (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.3 6.3a5 5 0 0 0-7.1 0L12 7.5l-1.2-1.2a5 5 0 1 0-7.1 7.1L12 21l8.3-8.6a5 5 0 0 0 0-7.1Z" />
      <path d="M10.5 11.5h3M12 10v3" />
    </svg>
  ),
};

export default function WhoWeServePreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative px-6 py-16 md:py-20 overflow-hidden bg-[#EFF6FF]">
      {/* Subtle backgrounds */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
        <div className="absolute top-0 right-1/4 w-[350px] h-[350px] rounded-full bg-white/50 blur-[80px]" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-[#DBEAFE]/60 blur-[80px]" />
        <div className="absolute inset-0 dot-grid opacity-20" />
      </div>

      <div className="relative max-w-6xl mx-auto flex flex-col items-center gap-10 md:gap-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 mb-5 rounded-full border border-blue-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#2563EB] shadow-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3B82F6] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
            </span>
            Designed to feel personal at every scale
          </div>
          <h2 className="font-heading text-3xl md:text-[34px] font-bold text-[#0F172A] tracking-tight leading-[1.2] mb-4">
            Tailored solutions for every mind, from individuals to enterprises.
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-5 mt-4">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-[#475569]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
              Always-on emotional support
            </span>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-[#475569]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6]" />
              Human-centered, AI-assisted care
            </span>
          </div>
        </motion.div>

        {/* Segments grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {segments.map((segment, i) => (
            <motion.div
              key={segment.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href={segment.href} className="group block">
                <div className={`relative flex gap-5 p-6 rounded-2xl bg-gradient-to-br ${segment.color} border ${segment.border}
                  shadow-[0_2px_12px_rgba(0,0,0,0.04)]
                  hover:shadow-[0_10px_32px_rgba(0,0,0,0.08)]
                  hover:-translate-y-0.5 transition-all duration-300 bg-white/60 backdrop-blur-sm`}>
                  {/* Index */}
                  <div className="flex flex-col items-center gap-2 flex-shrink-0">
                    <span className={`font-heading text-2xl font-bold ${segment.numColor} group-hover:opacity-60 transition-all duration-300 tabular-nums select-none`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={`w-11 h-11 flex items-center justify-center rounded-xl ${segment.iconBg} ${segment.iconColor} group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                      <span className="w-5 h-5">
                        {icons[segment.icon as keyof typeof icons]}
                      </span>
                    </span>
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1 pt-0.5">
                    <span className={`text-xs font-bold uppercase tracking-[0.2em] ${segment.tagColor}`}>
                      {segment.tag}
                    </span>
                    <h3 className="font-heading mt-1.5 text-lg md:text-xl font-bold text-[#0F172A] group-hover:text-[#1D4ED8] transition-colors duration-300">
                      {segment.title}
                    </h3>
                    <p className="mt-2 text-sm md:text-base text-[#64748B] leading-[1.6]">
                      {segment.subtitle}
                    </p>
                    <span className={`mt-3 inline-flex items-center gap-1.5 text-xs font-semibold ${segment.iconColor} opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300`}>
                      Explore
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href="/who-we-serve"
            className="group inline-flex items-center gap-2.5 rounded-xl border border-blue-200 bg-white px-7 py-3.5 text-sm font-semibold text-[#2563EB] hover:bg-blue-50 hover:border-blue-300 hover:scale-[1.02] active:scale-100 transition-all duration-300 shadow-sm"
          >
            View all segments
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
