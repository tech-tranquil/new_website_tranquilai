"use client";

import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 40, suffix: "K+", label: "Total Users", icon: "users" },
  { value: 200, suffix: "K+", label: "Conversations", icon: "chat" },
  { value: 85, suffix: "K+", label: "Mood logs recorded", icon: "journal" },
  { value: 7.5, suffix: "m", label: "Avg session time", icon: "audio", decimals: 1 },
];

const icons = {
  chat: (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  journal: (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      <path d="M8 7h8M8 11h8" />
    </svg>
  ),
  audio: (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  ),
  users: (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
};

const partners = [
  "Microsoft for Startups",
  "NASSCOM",
  "Cisco thingQbator",
  "IIIT Bangalore",
  "Startup India",
];

function AnimatedNumber({ value, suffix, inView, decimals = 0 }: { value: number; suffix: string; inView: boolean; decimals?: number }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(0, value, {
        duration: 1.4,
        ease: [0.22, 1, 0.36, 1],
        onUpdate: (latest) => setDisplayValue(Number(latest.toFixed(decimals))),
      });
      return () => controls.stop();
    }
  }, [inView, value, decimals]);

  return (
    <span className="tabular-nums">
      {displayValue.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix}
    </span>
  );
}

export default function CredibilityStats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-16 md:py-20 px-6 overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#DBEAFE]/30 blur-[120px]" />
        <div className="absolute inset-0 dot-grid opacity-20" />
      </div>

      <div className="relative max-w-6xl mx-auto space-y-20 md:space-y-24">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-[11px] font-semibold text-[#4A90D9] border border-[#D6EBFF]/80 shadow-sm uppercase tracking-widest mb-6"
          >
            Real-world impact
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.6, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-2xl md:text-3xl md:text-[34px] font-bold text-[#0F172A] tracking-tight leading-[1.15]"
          >
            Built with research.{" "}
            <span className="text-gradient">Proven in real lives.</span>
          </motion.h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-blue-100/60 rounded-2xl overflow-hidden border border-blue-100">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col p-7 md:p-8 bg-white hover:bg-[#EFF6FF] transition-colors duration-300 cursor-default"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center border border-blue-100 transition-all duration-300 group-hover:bg-blue-100 group-hover:border-blue-200">
                  <span className="w-4 h-4">
                    {icons[stat.icon as keyof typeof icons]}
                  </span>
                </span>
              </div>
              <p className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-gradient mb-2">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} inView={inView} decimals={stat.decimals || 0} />
              </p>
              <p className="text-[13px] md:text-sm text-[#64748B] leading-relaxed">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trusted by */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex items-center justify-center gap-5 mb-10">
            <div className="flex-1 max-w-[120px] h-px bg-gradient-to-r from-transparent to-blue-200" />
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#94A3B8]">
              Trusted by
            </p>
            <div className="flex-1 max-w-[120px] h-px bg-gradient-to-l from-transparent to-blue-200" />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-10 md:gap-x-14 gap-y-6">
            {partners.map((name) => (
              <span
                key={name}
                className="text-[13px] font-semibold text-[#94A3B8] hover:text-[#475569] transition-colors duration-200 tracking-tight"
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
