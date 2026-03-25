"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const serene = { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const };
const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

const codeSnippet = `import TranquilAI from '@tranquilai/sdk';

const sara = new TranquilAI({
  apiKey: process.env.TRANQUIL_API_KEY,
});

const response = await sara.chat({
  userId: 'user_123',
  message: "I'm feeling overwhelmed.",
});

console.log(response.reply);
// → "It sounds like things feel heavy 
//    right now. Want to talk about it?"`;

const features = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "Simple REST API",
    desc: "A clean, well-documented API that lets you embed Sara into any app in minutes. Supports streaming responses."
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Built-in Safety Rails",
    desc: "Clinical safety guardrails come baked in. Crisis detection and escalation triggers are handled out of the box."
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    title: "Persistent Memory",
    desc: "Sara remembers past conversations per user, enabling longitudinal, hyper-personalized therapeutic experiences."
  }
];

export default function IntegrationsContent() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-60px" });

  const featuresRef = useRef(null);
  const featuresInView = useInView(featuresRef, { once: true, margin: "-60px" });

  const codeRef = useRef(null);
  const codeInView = useInView(codeRef, { once: true, margin: "-60px" });

  return (
    <div className="bg-[#FAFBFD] font-sans pb-32">
      {/* Hero */}
      <section ref={heroRef} className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#E5F0FF]/40 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...serene }}
            className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-[11px] font-semibold text-[#4A90D9] border border-[#D6EBFF]/80 shadow-sm uppercase tracking-widest mb-8"
          >
            API & Integrations
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...serene, delay: 0.05 }}
            className="text-4xl md:text-[56px] font-sans font-bold text-[#0F172A] tracking-tight leading-[1.1] mb-6"
          >
            Embed Sara into <br />your product
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...serene, delay: 0.1 }}
            className="text-[17px] md:text-[19px] text-[#64748B] max-w-2xl mx-auto leading-relaxed mb-10"
          >
            A powerful, developer-first API to bring emotionally intelligent AI conversations into any app, workflow, or platform.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...serene, delay: 0.2 }}
            className="flex items-center justify-center gap-4 flex-wrap"
          >
            <a href="mailto:support@tranquilai.in" className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#1E293B] text-white text-[15px] font-medium hover:bg-black transition-colors">
              Request API Access
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
            <a href="mailto:support@tranquilai.in" className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white border border-slate-200 text-[#334155] text-[15px] font-medium hover:border-slate-300 transition-colors shadow-sm">
              View Docs
            </a>
          </motion.div>
        </div>
      </section>

      {/* Code Snippet */}
      <section ref={codeRef} className="px-6 py-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={codeInView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...spring, delay: 0.1 }}
            className="bg-[#0F172A] rounded-[24px] overflow-hidden shadow-[0_24px_80px_rgba(15,23,42,0.12)]"
          >
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-5 py-4 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
              <span className="ml-3 text-[12px] text-white/30 font-mono">chat.ts</span>
            </div>
            <pre className="p-6 md:p-8 text-[13px] md:text-[14px] font-mono leading-[1.85] overflow-x-auto">
              <code>
                {codeSnippet.split("\n").map((line, i) => {
                  // Simple syntax highlighting
                  const highlighted = line
                    .replace(/(import|from|const|await|process|console)/g, '<span class="text-[#C678DD]">$1</span>')
                    .replace(/('.*?')/g, '<span class="text-[#98C379]">$1</span>')
                    .replace(/(\/\/.*)/g, '<span class="text-[#5C6370] italic">$1</span>')
                    .replace(/(\w+)(?=\()/g, '<span class="text-[#61AFEF]">$1</span>');
                  return (
                    <span key={i} className="block text-white/80" dangerouslySetInnerHTML={{ __html: highlighted }} />
                  );
                })}
              </code>
            </pre>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section ref={featuresRef} className="px-6 py-16 mt-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={serene}
              className="font-serif text-[32px] md:text-[40px] text-[#1E293B] tracking-tight"
            >
              Everything you need
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ ...spring, delay: i * 0.1 }}
                className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-slate-100/50"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-[#334155] mb-6">
                  {f.icon}
                </div>
                <h3 className="text-[20px] font-sans font-semibold text-[#1E293B] mb-3 leading-tight">{f.title}</h3>
                <p className="text-[#64748B] text-[15px] leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
