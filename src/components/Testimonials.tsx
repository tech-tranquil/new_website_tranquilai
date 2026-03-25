"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote:
      "It's almost as if I'm talking to my therapist. At first, I couldn't believe it was an AI chatbot. It feels like it knows me better than I know myself sometimes.",
    date: "January 2024",
    initials: "A",
    color: "from-[#2563EB] to-[#60A5FA]",
    cardColor: "from-[#EFF6FF] to-white",
    border: "border-blue-100",
  },
  {
    quote:
      "I got my first job during a tough period and had really bad social anxiety. My therapist recommended I try Tranquil AI. It helped me manage my anxious thoughts in real-time.",
    date: "November 2023",
    initials: "R",
    color: "from-[#059669] to-[#34D399]",
    cardColor: "from-[#F0FDFA] to-white",
    border: "border-emerald-100",
  },
  {
    quote:
      "I had difficulty finding the words to express myself and needed quick advice, so I decided to try Tranquil AI. Since then, I have used it for everything. I am so grateful for this app.",
    date: "May 2024",
    initials: "P",
    color: "from-[#7C3AED] to-[#A78BFA]",
    cardColor: "from-[#FAF5FF] to-white",
    border: "border-violet-100",
  },
];

const StarRating = () => (
  <div className="flex gap-0.5">
    {Array(5).fill(0).map((_, i) => (
      <svg key={i} className="w-3.5 h-3.5 text-[#F59E0B]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 md:py-20 px-6 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-100 to-transparent" />
        <div className="absolute bottom-[20%] left-[10%] w-[300px] h-[300px] rounded-full bg-[#DBEAFE]/40 blur-[80px]" />
        <div className="absolute top-[20%] right-[10%] w-[200px] h-[200px] rounded-full bg-[#EDE9FE]/30 blur-[60px]" />
        <div className="absolute inset-0 dot-grid opacity-20" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-[11px] font-semibold text-[#4A90D9] border border-[#D6EBFF]/80 shadow-sm uppercase tracking-widest mb-6">
            What users say
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#0F172A] tracking-tight">
            Loved by early users
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {testimonials.map((t, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`group relative rounded-2xl bg-gradient-to-br ${t.cardColor} border ${t.border} p-6 md:p-7
                hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]
                transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.04)]`}
            >
              {/* Top row: stars + date */}
              <div className="flex items-center justify-between mb-5">
                <StarRating />
                <span className="text-[11px] text-[#94A3B8]">{t.date}</span>
              </div>

              {/* Quote */}
              <p className="text-[#334155] text-sm md:text-[15px] leading-[1.75] mb-6 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Attribution */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-sm font-bold shadow-sm flex-shrink-0`}>
                  {t.initials}
                </div>
                <span className="font-medium text-[#64748B] text-[13px]">Tranquil AI user</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
