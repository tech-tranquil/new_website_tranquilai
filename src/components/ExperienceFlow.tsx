"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  { number: 1, title: "Share how you're feeling" },
  { number: 2, title: "Sara listens and understands" },
  { number: 3, title: "Receive thoughtful responses and guidance" },
  { number: 4, title: "Track your emotional growth" },
];

export default function ExperienceFlow() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 1, y: 0 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl md:text-4xl font-bold text-center text-[#1a1a2e] mb-16"
        >
          A Companion That Adapts to You
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 1, y: 0 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#4A90D9] to-[#5B9AE8] flex items-center justify-center text-white font-heading text-2xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <p className="font-medium text-[#1a1a2e]">{step.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
