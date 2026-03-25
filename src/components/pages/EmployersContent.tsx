"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const serene = { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const };
const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

const benefits = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 15l-2-2m0 0l2-2m-2 2h8m-13 5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-4a2 2 0 00-2-2h-8m-2-4h.01" />
      </svg>
    ),
    title: "Increase productivity",
    desc: "Addressing mental health challenges before they impact work performance with a solution that people actually use."
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78v0z" />
      </svg>
    ),
    title: "Decrease burnout",
    desc: "Proactively identify and address burnout signals with early intervention strategies and personalized care."
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
    title: "Better support",
    desc: "Provide mental health support that scales across your entire organization regardless of location or time zone."
  }
];

const dashboardStats = [
  { label: "Total employees", value: "1,247", subtitle: "23 new this month", icon: "users" },
  { label: "Active users", value: "892", subtitle: "71% engagement rate", icon: "user-check" },
  { label: "Wellness score", value: "76/100", subtitle: "5% from last month", icon: "activity" }
];

export default function EmployersContent() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-60px" });

  const benefitsRef = useRef(null);
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-60px" });

  const dashboardRef = useRef(null);
  const dashboardInView = useInView(dashboardRef, { once: true, margin: "-60px" });

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
            className="text-4xl md:text-[56px] font-sans font-bold text-[#0F172A] tracking-tight leading-[1.1] mb-6"
          >
            Support your employees<br />mental health
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...serene, delay: 0.1 }}
            className="text-[17px] md:text-[19px] text-[#64748B] max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Give your team access to personalized mental health support that is confidential, and effective.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...serene, delay: 0.2 }}
          >
            <a href="mailto:support@tranquilai.in" className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#1E293B] text-white text-[15px] font-medium hover:bg-black transition-colors">
              Book a demo
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why it matters */}
      <section ref={benefitsRef} className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={serene}
              className="font-serif text-[32px] md:text-[40px] text-[#1E293B] tracking-tight"
            >
              Why it matters
            </motion.h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ ...spring, delay: i * 0.1 }}
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

      {/* Live Analytics Dashboard */}
      <section ref={dashboardRef} className="px-6 py-20 mt-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={dashboardInView ? { opacity: 1, y: 0 } : {}}
              transition={serene}
              className="font-serif text-[32px] md:text-[40px] text-[#1E293B] tracking-tight mb-3"
            >
              Live analytics dashboard
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={dashboardInView ? { opacity: 1, y: 0 } : {}}
              transition={{ ...serene, delay: 0.1 }}
              className="text-[#64748B] text-[15px]"
            >
              Get actionable insights into your organization&apos;s mental health with our comprehensive data.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {dashboardStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={dashboardInView ? { opacity: 1, y: 0 } : {}}
                transition={{ ...spring, delay: 0.2 + (i * 0.1) }}
                className="bg-white p-8 rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100/60"
              >
                <div className="flex justify-between items-start mb-6">
                  <p className="text-[17px] font-sans font-medium text-[#334155]">{stat.label}</p>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                    <div className="w-4 h-4 bg-slate-600 rounded-sm" />
                  </div>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-[#0F172A] tracking-tight mb-2">{stat.value}</h3>
                  <p className="text-[13px] text-[#94A3B8] font-medium">{stat.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={dashboardInView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...spring, delay: 0.5 }}
            className="bg-white p-8 md:p-10 rounded-[28px] shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-slate-100/60"
          >
            <h3 className="text-[19px] font-sans font-medium text-[#1E293B] mb-8">Department wellness overview</h3>
            
            <div className="space-y-6">
              {[
                { name: "Engineering", count: "234 employees", score: 82, trend: "+3%", width: "82%" },
                { name: "Sales", count: "156 employees", score: 75, trend: "-2%", width: "75%", trendColor: "text-red-400" },
                { name: "Marketing", count: "89 employees", score: 79, trend: "+1%", width: "79%" },
              ].map((dep, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#1E293B] text-white flex items-center justify-center font-bold text-sm">
                    {dep.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[15px] font-medium text-[#1E293B] leading-tight">{dep.name}</h4>
                    <p className="text-[12px] text-[#94A3B8]">{dep.count}</p>
                  </div>
                  <div className="hidden md:block flex-1 max-w-[200px] lg:max-w-[280px]">
                    <div className="h-2 bg-slate-100 rounded-full w-full overflow-hidden">
                      <div className="h-full bg-[#6366F1] rounded-full" style={{ width: dep.width }} />
                    </div>
                  </div>
                  <div className="text-right min-w-[80px]">
                    <div className="text-[13px] font-medium text-[#334155]">Score: {dep.score}</div>
                    <div className={`text-[11px] font-medium ${dep.trendColor || 'text-emerald-400'}`}>{dep.trend} this month</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
