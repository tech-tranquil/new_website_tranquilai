"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const team = [
  { name: "Arihant Bhardwaj", role: "Founder & CEO", image: "/team/arihant.jpg" },
  { name: "Ritwik Tripathi", role: "CTO", image: "/team/ritwik.jpg" },
  { name: "Shreyas Tiwary", role: "CFO", image: "/team/shreyas.jpg" },
  { name: "Ashutosh Kala", role: "Development & Growth Officer", image: "/team/ashutosh.jpg" },
];

export default function Team() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" ref={ref} className="py-24 px-6 bg-gradient-to-b from-[#F5F9FF] to-[#E8F4FC]/40">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 1, y: 0 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl md:text-4xl font-bold text-center text-[#1a1a2e] mb-16"
        >
          Built by Students from VIT Vellore
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 1, y: 0 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/85 backdrop-blur-xl rounded-[24px] p-8 shadow-card border border-white/60 text-center hover:shadow-soft-lg transition-all duration-300"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#4A90D9] to-[#5B9AE8] flex items-center justify-center text-white font-heading text-2xl font-bold mx-auto mb-4">
                {member.name.charAt(0)}
              </div>
              <h3 className="font-heading text-lg font-semibold text-[#1a1a2e]">
                {member.name}
              </h3>
              <p className="text-[#4a5568] text-sm mt-1">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
