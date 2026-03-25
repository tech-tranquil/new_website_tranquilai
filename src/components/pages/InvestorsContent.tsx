"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CalmShapes } from "../illustrations/CalmShapes";

const spring = { type: "spring" as const, stiffness: 180, damping: 22 };
const serene = { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const };

const metrics = [
  { label: "Total Users", value: "50K+", trend: "Organic Growth" },
  { label: "Conversations", value: "200K+", trend: "High Engagement" },
  { label: "Mood Logs", value: "85K+", trend: "Daily Action" },
  { label: "Avg. Session", value: "7.5m", trend: "Deep Retention" },
];

const recognitions = [
  {
    title: "NASSCOM Foundation",
    description: "Awarded a ₹5 Lakh seed grant from NASSCOM for building an innovative, scalable AI healthcare solution.",
    icon: (
      <svg className="w-5 h-5 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "from-emerald-50 to-emerald-100",
  },
  {
    title: "DPIIT Recognized",
    description: "Officially recognized by the Department for Promotion of Industry and Internal Trade, Government of India as a verified startup.",
    icon: (
      <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: "from-blue-50 to-blue-100",
  },
];

const pillars = [
  {
    title: "Vast Market Need",
    description: "In India alone, 1 in 7 people suffer from mental disorders, but systemic gaps in supply and affordability mean 80% receive no care. Our AI closes this gap scalably without judgment.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <path d="M7.5 4.21l4.5 2.6 4.5-2.6" />
        <path d="M7.5 19.79v-5.5l-4.5-2.6" />
        <path d="M21 11.73l-4.5 2.6v5.5" />
        <path d="M12 22v-6.5" />
      </svg>
    ),
  },
  {
    title: "Hyper-Personalized Tech",
    description: "Tranquil AI learns conversation contexts longitudinally, adapting memory loops that make users feel seen. We pair this with proprietary guardrails built alongside clinical frameworks.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
  {
    title: "Capital Efficient Growth",
    description: "Built by Gen-Z engineers from VIT, we focus on compounding organic growth via university ambassadorships and tight community loops over high CAC advertising.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v20" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
];

export default function InvestorsContent() {
  const heroRef = useRef(null);
  const metricsRef = useRef(null);
  const pillarsRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true, margin: "-60px" });
  const metricsInView = useInView(metricsRef, { once: true, margin: "-60px" });
  const pillarsInView = useInView(pillarsRef, { once: true, margin: "-60px" });
  const recognitionsRef = useRef(null);
  const recognitionsInView = useInView(recognitionsRef, { once: true, margin: "-60px" });

  return (
    <div className="pt-16 pb-24 font-sans">
      {/* Hero */}
      <section ref={heroRef} className="relative px-6 pt-16 pb-20 justify-center flex flex-col items-center">
        <CalmShapes />

        <div className="relative max-w-4xl mx-auto text-center z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...serene, delay: 0.05 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-[11px] font-semibold text-[#4A90D9] border border-[#D6EBFF]/80 shadow-sm uppercase tracking-widest mb-6"
          >
            Funders & VCs
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...serene, delay: 0.1 }}
            className="font-heading text-4xl md:text-[44px] lg:text-[48px] font-bold text-[#0F172A] tracking-[-0.02em] leading-[1.15] mb-5"
          >
            Scaling emotional wellness{" "}
            <span className="bg-gradient-to-r from-[#4A90D9] to-[#9EC5FF] bg-clip-text text-transparent">
              for millions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...serene, delay: 0.2 }}
            className="text-[17px] text-[#64748B] max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Tranquil AI represents a pivotal shift in accessible mental health. We are merging empathic AI with evidence-based structures to provide immediate care wherever and whenever it&apos;s needed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...serene, delay: 0.3 }}
            className="flex justify-center"
          >
            <a
              href="mailto:support@tranquilai.in"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[15px] rounded-xl bg-[#0F172A] text-white font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              Contact Founders
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section ref={metricsRef} className="px-6 relative z-10 -mt-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={metricsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...serene, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 bg-white/95 backdrop-blur-xl border border-slate-100 rounded-[1.5rem] shadow-sm"
          >
            {metrics.map((m, i) => (
              <div key={i} className={`p-6 md:p-8 flex flex-col items-center justify-between h-full text-center ${
                i !== metrics.length - 1 ? "md:border-r md:border-slate-100" : ""
              } ${
                i % 2 === 0 ? "border-r border-slate-100 md:border-r" : ""
              } ${
                i < 2 ? "border-b border-slate-100 md:border-b-0" : ""
              }`}>
                <div className="mb-4">
                  <p className="text-[12px] md:text-[13px] font-bold text-[#64748B] uppercase tracking-[0.1em] mb-3 leading-[1.6] max-w-[140px] mx-auto">{m.label}</p>
                  <h3 className="text-3xl md:text-[38px] font-sans font-bold text-[#0F172A] tracking-tight">{m.value}</h3>
                </div>
                <div className="inline-flex items-center gap-1.5 bg-[#ECFDF5] text-[#059669] px-3 py-1.5 rounded-[6px] text-[10px] md:text-[11.5px] font-bold mt-auto">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                  {m.trend}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Grants & Recognition */}
      <section ref={recognitionsRef} className="px-6 py-10 mt-12 relative z-10 w-full flex justify-center">
        <div className="max-w-4xl mx-auto w-full">
          <div className="text-center mb-8">
            <h2 className="font-heading text-xl md:text-2xl font-bold text-[#0F172A]">Backed & Recognized By</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5 w-full">
            {recognitions.map((rec, i) => (
              <motion.div
                key={rec.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={recognitionsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ ...spring, delay: 0.1 + i * 0.1 }}
                className={`bg-gradient-to-br ${rec.color} p-6 md:p-8 rounded-[1.5rem] border border-white/60 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-5`}
              >
                <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center flex-shrink-0">
                  {rec.icon}
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#0F172A] mb-1">{rec.title}</h3>
                  <p className="text-[#475569] text-sm leading-relaxed">{rec.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Thesis */}
      <section ref={pillarsRef} className="px-6 py-20 mt-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#0F172A] mb-4">The Investment Thesis</h2>
            <p className="text-[#64748B] max-w-xl mx-auto text-[15px]">Why Tranquil AI is uniquely positioned to dominate the conversational health space.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ ...spring, delay: 0.1 + i * 0.1 }}
                className="bg-white border border-[#E2E8F0] p-8 rounded-[1.5rem] hover:shadow-[0_12px_40px_rgba(37,99,235,0.08)] hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#2563EB] mb-6 group-hover:scale-110 group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-300">
                  {pillar.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-[#0F172A] mb-3">{pillar.title}</h3>
                <p className="text-[#475569] text-[15px] leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Bottom CTA block */}
      <section className="px-6 py-12 md:py-16 relative overflow-hidden">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-[34px] text-[#334155] mb-4 font-serif" style={{ letterSpacing: "-0.01em" }}>
            Join us in our mission
          </h2>
          <p className="text-[#64748B] text-[15px] md:text-base font-light mb-8 max-w-xl mx-auto">
            Help us make mental health support accessible to everyone.
          </p>
          <a
            href="mailto:support@tranquilai.in?subject=Investor Inquiry - Pitch Deck Request"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-[#94A3B8] text-[#334155] text-sm hover:bg-slate-50 hover:border-[#64748B] transition-all duration-300 group shadow-sm bg-white"
          >
            Get in touch
            <svg className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
