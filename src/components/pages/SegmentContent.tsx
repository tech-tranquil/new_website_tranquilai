"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

const serene = { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const };

interface SegmentContentProps {
  title: string;
  description: string;
  benefitsTitle: string;
  benefits: { title: string; desc: string; icon: ReactNode }[];
  howItWorks?: { step: string; title: string; desc: string }[];
}

export default function SegmentContent({ title, description, benefitsTitle, benefits, howItWorks }: SegmentContentProps) {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-60px" });

  const benefitsRef = useRef(null);
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-60px" });

  const howRef = useRef(null);
  const howInView = useInView(howRef, { once: true, margin: "-60px" });

  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-60px" });

  return (
    <div className="bg-[#FAFBFD] font-sans pb-32">
      {/* Hero */}
      <section ref={heroRef} className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#E5F0FF]/40 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={serene}
            className="text-4xl md:text-[56px] font-sans font-bold text-[#0F172A] tracking-tight leading-[1.1] mb-6 whitespace-pre-line"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...serene, delay: 0.1 }}
            className="text-[17px] md:text-[19px] text-[#64748B] max-w-2xl mx-auto leading-relaxed mb-10"
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...serene, delay: 0.2 }}
          >
            <a href="mailto:support@tranquilai.in" className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#1E293B] text-white text-[15px] font-medium hover:bg-black transition-colors">
              Get Started
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section ref={benefitsRef} className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={serene}
              className="font-serif text-[32px] md:text-[40px] text-[#1E293B] tracking-tight"
            >
              {benefitsTitle}
            </motion.h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: i * 0.1 }}
                className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-slate-100/50"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-[#334155] mb-6">
                  {b.icon}
                </div>
                <h3 className="text-[20px] font-sans font-semibold text-[#1E293B] mb-3 leading-tight">{b.title}</h3>
                <p className="text-[#64748B] text-[15px] leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      {howItWorks && howItWorks.length > 0 && (
        <section ref={howRef} className="px-6 py-20 border-t border-slate-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={howInView ? { opacity: 1, y: 0 } : {}}
                transition={serene}
                className="font-serif text-[32px] md:text-[40px] text-[#1E293B] tracking-tight"
              >
                How it works
              </motion.h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {howItWorks.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={howInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ type: "spring", stiffness: 100, damping: 20, delay: i * 0.12 }}
                  className="relative"
                >
                  <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#94A3B8] mb-4">{step.step}</div>
                  <h3 className="text-[20px] font-semibold text-[#1E293B] mb-3">{step.title}</h3>
                  <p className="text-[#64748B] text-[15px] leading-relaxed">{step.desc}</p>
                  {i < howItWorks.length - 1 && (
                    <div className="hidden md:block absolute top-4 right-[-20px] w-8 h-px bg-slate-200" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section ref={ctaRef} className="px-6 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={serene}
          >
            <h2 className="text-[30px] md:text-[38px] font-serif text-[#1E293B] tracking-tight mb-4">
              Ready to get started?
            </h2>
            <p className="text-[#64748B] text-[16px] mb-8 leading-relaxed">
              Reach out and our team will help you find the right plan.
            </p>
            <a
              href="mailto:support@tranquilai.in"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#1E293B] text-white text-[15px] font-medium hover:bg-black transition-colors group"
            >
              Contact Us
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

