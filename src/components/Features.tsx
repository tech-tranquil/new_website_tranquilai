"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const spring = { type: "spring" as const, stiffness: 200, damping: 24 };
const serene = { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const };

const cards = [
  {
    title: "Feel heard, grounded, and lighter",
    description: "Talk to Sara anytime. Our AI companion listens with empathy and helps you process emotions in a safe space.",
    stat: null,
    statLabel: null,
    tags: ["Anxiety", "Stress", "Mood", "Sleep", "Relationships", "Burnout", "Self-talk"],
    iconPath: "M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v6A2.5 2.5 0 0 1 17.5 15H9l-4 4v-4.5",
    colorClass: "from-[#EFF6FF] to-[#DBEAFE]/60",
    borderClass: "border-blue-200/70",
    iconColor: "text-[#2563EB]",
    iconBg: "bg-blue-100",
    tagBg: "bg-blue-50 border-blue-200 text-[#2563EB]",
    glowColor: "rgba(37,99,235,0.08)",
    statColor: "text-[#1D4ED8]",
  },
  {
    title: "Available 24/7",
    description: "No appointments or waiting rooms. Instant support from Sara, even on weekends and at 4 A.M.",
    stat: "24/7",
    statLabel: "support whenever you need it",
    tags: null,
    iconPath: "M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4 12 14.01 9 11.01",
    colorClass: "from-[#F0FDFA] to-[#CCFBF1]/60",
    borderClass: "border-emerald-200/70",
    iconColor: "text-[#059669]",
    iconBg: "bg-emerald-50",
    tagBg: null,
    glowColor: "rgba(5,150,105,0.07)",
    statColor: "text-[#047857]",
  },
  {
    title: "Private & judgment-free",
    description: "When talking to AI, there's no fear of being judged. Address your thoughts and feelings openly, on your terms.",
    stat: "100%",
    statLabel: "private — your data stays yours",
    tags: null,
    iconPath: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
    colorClass: "from-[#FFF7ED] to-[#FED7AA]/40",
    borderClass: "border-orange-200/70",
    iconColor: "text-[#EA580C]",
    iconBg: "bg-orange-50",
    tagBg: null,
    glowColor: "rgba(234,88,12,0.06)",
    statColor: "text-[#C2410C]",
  },
  {
    title: "Safe & evidence-based",
    description: "Science-backed techniques. When you need more than a chatbot, we guide you to therapists, hotlines, and professional support.",
    stat: null,
    statLabel: null,
    tags: null,
    iconPath: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    colorClass: "from-[#FAF5FF] to-[#E9D5FF]/40",
    borderClass: "border-violet-200/70",
    iconColor: "text-[#7C3AED]",
    iconBg: "bg-violet-50",
    tagBg: null,
    glowColor: "rgba(124,58,237,0.07)",
    statColor: "text-[#6D28D9]",
  },
];

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" ref={ref} className="relative py-16 md:py-20 px-6 overflow-hidden bg-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full bg-[#DBEAFE]/40 blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] rounded-full bg-[#EDE9FE]/30 blur-[80px]" />
        <div className="absolute inset-0 dot-grid opacity-25" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={serene}
          className="text-center mb-14 md:mb-18"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ ...serene, delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-5 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#2563EB]"
          >
            <span className="w-1 h-1 rounded-full bg-[#3B82F6]" />
            Why Tranquil AI
          </motion.span>
          <h2 className="font-heading text-3xl md:text-[34px] font-bold text-[#0F172A] tracking-tight leading-[1.2] max-w-3xl mx-auto">
            Everything you need to feel{" "}
            <span className="text-gradient">
              heard, grounded, and a little lighter
            </span>
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
              transition={{ ...serene, delay: 0.15 + i * 0.1 }}
              className="h-full"
            >
              <Link
                href="/features"
                className="group relative block h-full"
              >
                {/* Hover glow */}
                <div
                  className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"
                  style={{ background: `radial-gradient(circle, ${card.glowColor}, transparent 70%)` }}
                />

                <div
                  className={`relative flex flex-col h-full min-h-[300px] md:min-h-[320px] rounded-2xl p-6 md:p-7 bg-gradient-to-br ${card.colorClass} border ${card.borderClass}
                    shadow-[0_2px_16px_rgba(0,0,0,0.04)]
                    group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]
                    group-hover:-translate-y-1
                    transition-all duration-500
                    overflow-hidden`}
                >
                  {/* Inner noise */}
                  <div className="absolute inset-0 noise rounded-2xl" />

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={spring}
                    className={`relative z-10 w-12 h-12 md:w-14 md:h-14 rounded-xl ${card.iconBg} flex items-center justify-center mb-5 shadow-sm`}
                  >
                    <svg className={`w-6 h-6 md:w-7 md:h-7 ${card.iconColor}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      {card.iconPath.split(" M ").map((segment, idx) => (
                        <path key={idx} d={idx === 0 ? segment : `M ${segment}`} />
                      ))}
                    </svg>
                  </motion.div>

                  {/* Heading */}
                  <h3 className="relative z-10 font-heading text-xl md:text-2xl font-bold text-[#0F172A] leading-tight mb-3 tracking-tight">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="relative z-10 text-[#475569] leading-[1.7] mb-4 text-sm md:text-base">
                    {card.description}
                  </p>

                  {/* Stat */}
                  {card.stat && (
                    <div className="relative z-10 mb-4">
                      <span className={`font-heading font-bold text-3xl md:text-4xl ${card.statColor} tracking-tight`}>
                        {card.stat}
                      </span>
                      <span className="text-[#64748B] text-sm ml-2">{card.statLabel}</span>
                    </div>
                  )}

                  {/* Tags */}
                  {card.tags && (
                    <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`rounded-full px-3 py-1 text-xs font-medium border ${card.tagBg} transition-colors duration-300`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Arrow link */}
                  <div className="relative z-10 mt-auto pt-4 flex items-center gap-1.5 text-[#64748B] group-hover:text-[#2563EB] opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-400 text-sm font-medium">
                    Explore
                    <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ ...serene, delay: 0.6 }}
          className="text-center mt-14"
        >
          <Link
            href="/features"
            className="group inline-flex items-center gap-3 rounded-xl border border-blue-200 bg-blue-50 px-8 py-4 text-sm font-semibold text-[#2563EB] hover:bg-blue-100 hover:border-blue-300 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shadow-sm"
          >
            Explore all features
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
