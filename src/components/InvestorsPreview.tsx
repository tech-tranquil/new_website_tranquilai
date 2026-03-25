"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function InvestorsPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-16 md:py-24 px-6 bg-[#0B1120] relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#1D4ED8]/20 blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-slate-300 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
          For Investors & VCs
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-3xl md:text-[40px] font-bold text-white tracking-tight leading-[1.15] mb-5"
        >
          Scaling <span className="text-[#60A5FA]">emotional wellness</span><br />
          for the next billion.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-slate-400 text-[15px] md:text-[17px] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We are currently raising our seed round to scale engineering, secure clinical validations, and capture the immense gap in accessible mental healthcare. 
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href="/investors"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-[15px] rounded-xl bg-white text-[#0F172A] font-bold shadow-lg hover:bg-slate-50 hover:scale-[1.02] transition-all duration-300"
          >
            View Investment Thesis
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
