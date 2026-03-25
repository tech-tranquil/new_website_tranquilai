"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const tractionStats = [
  { value: "150K+", label: "Conversations" },
  { value: "40K+", label: "Users" },
  { value: "50K+", label: "Mood Logs" },
  { value: "75+", label: "Hours Audio" },
];

export default function Traction() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6 bg-gradient-to-b from-[#E8F4FC]/30 to-[#F5F9FF]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {tractionStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 1, scale: 1 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-heading text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#4A90D9] to-[#5B9AE8] bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-[#4a5568] mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
