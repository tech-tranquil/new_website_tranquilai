"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const spring = { type: "spring" as const, stiffness: 200, damping: 24 };
const serene = { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const };

const team = [
  {
    name: "Arihant Bhardwaj",
    role: "Founder & CEO",
    bio: "Visionary leader dedicated to making mental wellness accessible.",
    color: "from-[#4A90D9] to-[#5B9AE8]",
  },
  {
    name: "Ritwik Tripathi",
    role: "CTO",
    bio: "Architect of the technology that powers Tranquil AI.",
    color: "from-[#5B9AE8] to-[#7BB3F5]",
  },
  {
    name: "Shreyas Tiwary",
    role: "CFO",
    bio: "Driving sustainable growth and financial strategy.",
    color: "from-[#7BB3F5] to-[#9EC5FF]",
  },
  {
    name: "Ashutosh Kala",
    role: "Development & Growth Officer",
    bio: "Building products and scaling our impact.",
    color: "from-[#4A90D9] to-[#9EC5FF]",
  },
];

export default function TeamContent() {
  const heroRef = useRef(null);
  const gridRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-80px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-80px" });

  return (
    <div className="pt-20 pb-32">
      {/* Hero */}
      <section ref={heroRef} className="relative px-6 pt-20 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-[#9EC5FF]/12 blur-[100px]" />
          <div className="absolute bottom-1/4 -right-1/4 w-[400px] h-[400px] rounded-full bg-[#B8D9FF]/10 blur-[80px]" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={serene}
            className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-xl px-5 py-2.5 text-xs font-semibold text-[#4A90D9] border border-[#D6EBFF]/80 shadow-[0_4px_24px_rgba(74,144,217,0.08)] mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4A90D9] opacity-40" />
              <span className="relative h-2 w-2 rounded-full bg-[#4A90D9]" />
            </span>
            The Team
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...serene, delay: 0.08 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[#0f172a] tracking-[-0.03em] leading-[1.12] mb-6"
          >
            Built by students from{" "}
            <span className="bg-gradient-to-r from-[#4A90D9] via-[#5B9AE8] to-[#9EC5FF] bg-clip-text text-transparent">
              VIT Vellore
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...serene, delay: 0.15 }}
            className="text-lg md:text-xl text-[#64748B] max-w-2xl mx-auto leading-relaxed"
          >
            A passionate team on a mission to make mental wellness support accessible to everyone, anytime, anywhere.
          </motion.p>
        </div>
      </section>

      {/* Team Grid */}
      <section ref={gridRef} className="px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ ...spring, delay: 0.1 + i * 0.08 }}
              >
                <div className="group relative h-full rounded-2xl md:rounded-[1.75rem] overflow-hidden">
                  <div className="absolute -inset-px rounded-2xl md:rounded-[1.75rem] bg-gradient-to-br from-[#4A90D9]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative h-full rounded-2xl md:rounded-[1.75rem] p-8 bg-white/90 backdrop-blur-xl border border-white/80 shadow-[0_4px_24px_rgba(15,23,42,0.06)] group-hover:shadow-[0_24px_48px_rgba(74,144,217,0.1)] transition-all duration-500 group-hover:-translate-y-1 text-center">
                    {/* Avatar */}
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      transition={spring}
                      className="relative w-28 h-28 mx-auto mb-6 rounded-2xl overflow-hidden"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-heading text-4xl font-bold`}>
                        {member.name.charAt(0)}
                      </div>
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>

                    <h3 className="font-heading text-xl font-bold text-[#0f172a] mb-1 group-hover:text-[#4A90D9] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-[#4A90D9] text-sm font-semibold mb-3">{member.role}</p>
                    <p className="text-[#64748B] text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values strip */}
      <section className="px-6 mt-24">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={serene}
            className="rounded-2xl p-8 md:p-12 bg-gradient-to-br from-[#E8F4FC]/60 to-[#F5F9FF] border border-white/80"
          >
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-center text-[#0f172a] mb-10">
              Our values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Accessibility", desc: "Mental wellness for everyone, everywhere." },
                { title: "Empathy", desc: "AI that listens and understands without judgment." },
                { title: "Impact", desc: "Building tools that genuinely help people heal." },
              ].map((item, i) => (
                <div key={item.title} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#4A90D9]/10 flex items-center justify-center">
                    <span className="text-[#4A90D9] font-bold">{i + 1}</span>
                  </div>
                  <h4 className="font-heading font-semibold text-[#0f172a] mb-2">{item.title}</h4>
                  <p className="text-[#64748B] text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
