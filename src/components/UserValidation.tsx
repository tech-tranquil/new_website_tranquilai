"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const featureUsage = [
  { name: "AI Companion", percentage: 95 },
  { name: "Mood Logging", percentage: 78 },
  { name: "Journaling", percentage: 72 },
  { name: "Breathing", percentage: 65 },
  { name: "Meditation", percentage: 58 },
  { name: "Sleep Audio", percentage: 54 },
];

export default function UserValidation() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-2xl text-[#FBBF24]">
                ★
              </span>
            ))}
          </div>
          <p className="text-[#4a5568] max-w-2xl mx-auto">
            Loved by early users for its conversational support and emotional understanding.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/85 backdrop-blur-xl rounded-[24px] p-8 shadow-card border border-white/60"
        >
          <h3 className="font-heading text-lg font-semibold text-[#1a1a2e] mb-6">
            Feature Usage
          </h3>
          <div className="space-y-4">
            {featureUsage.map((item, i) => (
              <div key={item.name}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-[#4a5568]">{item.name}</span>
                  <span className="text-[#4A90D9] font-medium">{item.percentage}%</span>
                </div>
                <div className="h-2 bg-[#E8F4FC] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${item.percentage}%` } : {}}
                    transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                    className="h-full bg-gradient-to-r from-[#4A90D9] to-[#5B9AE8] rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
