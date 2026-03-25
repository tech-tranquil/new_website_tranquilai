"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CalmShapes } from "../illustrations/CalmShapes";

const spring = { type: "spring" as const, stiffness: 180, damping: 22 };
const serene = { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const };

const values = [
  {
    title: "Empathy First",
    description: "Every response, feature, and design choice is rooted in understanding and compassion.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    color: "from-rose-50 via-pink-50/80 to-white",
    textColor: "text-rose-600",
  },
  {
    title: "Privacy Standard",
    description: "Mental health is deeply personal. We ensure your data is secure, private, and always yours.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    color: "from-sky-50 via-blue-50/80 to-white",
    textColor: "text-blue-600",
  },
  {
    title: "Evidence Based",
    description: "We work with clinical frameworks to ensure our AI delivers safe, helpful, and effective guidance.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.83M11.42 15.17l-.416-.416m0 0l-4.242 4.242-2.829-2.829 4.242-4.242m-1.414 1.414L3 9.414 4.414 8l1.414 1.414m2.828-2.828l1.414-1.414 1.414 1.414" />
      </svg>
    ),
    color: "from-emerald-50 via-teal-50/80 to-white",
    textColor: "text-emerald-600",
  },
];

const team = [
  { 
    name: "Shreyas Tiwary", 
    role: "CFO", 
    image: "/team/shreyas.jpg",
    init: "ST" 
  },
  { 
    name: "Arihant Bhardwaj", 
    role: "Founder & CEO", 
    image: "/team/arihant.jpg",
    init: "AB" 
  },
  { 
    name: "Ritwik Tripathi", 
    role: "CTO", 
    image: "/team/ritwik.jpg",
    init: "RT" 
  },
  { 
    name: "Ashutosh Kala", 
    role: "Development & Growth", 
    image: "/team/ashutosh.jpg",
    init: "AK" 
  },
];

export default function AboutContent() {
  const heroRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-60px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-60px" });
  const teamInView = useInView(teamRef, { once: true, margin: "-60px" });

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
            About Us
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...serene, delay: 0.05 }}
            className="font-heading text-3xl md:text-4xl lg:text-[44px] font-bold text-[#0F172A] tracking-[-0.02em] leading-[1.15] mb-5"
          >
            Real people building AI for{" "}
            <span className="bg-gradient-to-r from-[#4A90D9] to-[#9EC5FF] bg-clip-text text-transparent">
              mental wellness
            </span>{" "}
            the right way
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...serene, delay: 0.1 }}
            className="text-base md:text-[17px] text-[#64748B] max-w-2xl mx-auto leading-relaxed mb-8"
          >
            Originating from a passion project by students at VIT Vellore, we combine technology with a deeply human touch to ensure everyone gets effective support when and where they need it.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...serene, delay: 0.15 }}
          >
            <Link
              href="/download"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white text-sm font-semibold shadow-[0_4px_14px_rgba(37,99,235,0.3)] hover:shadow-md hover:scale-[1.02] transition-all duration-300"
            >
              Get the App
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Values Grid */}
      <section ref={valuesRef} className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={serene}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#0F172A] mb-3 tracking-tight">Our Core Values</h2>
            <p className="text-[#64748B] text-sm md:text-[15px]">The principles we stand by every day.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {values.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ ...spring, delay: 0.05 + i * 0.05 }}
              >
                <div className={`relative flex flex-col h-full min-h-[200px] rounded-[1.25rem] md:rounded-[1.5rem] p-6 md:p-8 bg-gradient-to-br ${item.color} border border-white/80 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5`}>
                  <div className={`w-10 h-10 rounded-[10px] bg-white/80 flex items-center justify-center mb-5 border border-white/60 shadow-sm ${item.textColor}`}>
                    {item.icon}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[#0F172A] mb-2">{item.title}</h3>
                  <p className="text-sm md:text-[15px] text-[#475569] leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section ref={teamRef} className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={serene}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#0F172A] mb-3 tracking-tight">Meet the Team</h2>
            <p className="text-[#64748B] text-sm md:text-[15px]">Built by a passionate group of students at VIT Vellore.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ ...spring, delay: 0.05 + i * 0.05 }}
                className="group p-5 md:p-6 rounded-[1.25rem] bg-white border border-[#E2E8F0] shadow-sm flex flex-col items-center text-center transition-all duration-300 hover:shadow-md hover:border-blue-100"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center text-[#4A90D9] font-heading text-lg font-bold mb-4 border border-blue-100 transition-transform duration-300 group-hover:scale-110 overflow-hidden relative">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    member.init
                  )}
                </div>
                <p className="font-heading font-bold text-[#0F172A] text-[15px] md:text-base mb-1">{member.name}</p>
                <p className="text-[13px] md:text-sm text-[#64748B] font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
