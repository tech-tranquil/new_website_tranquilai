"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function WhyMentalHealthMatters() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6 bg-gradient-to-b from-[#E8F4FC]/50 to-[#F5F9FF]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 1, y: 0 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-8"
        >
          A Growing Mental Health Crisis
        </motion.h2>
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4 text-[#4a5568] leading-relaxed"
        >
          <p>
            Mental health remains one of the most pressing yet underserved challenges in modern society.
          </p>
          <p>
            Millions struggle silently with stress, anxiety, loneliness, and emotional burnout while access to affordable support remains limited.
          </p>
          <p>
            Tranquil AI was created to help bridge this gap by offering accessible emotional support through intelligent conversations and mindfulness tools.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
