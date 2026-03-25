"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function WhatIsTranquil() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 1, y: 0 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-8"
        >
          Mental health support that truly listens.
        </motion.h2>
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4 text-[#4a5568] leading-relaxed"
        >
          <p>
            Tranquil AI is a personal mental wellness companion designed to help people talk, reflect, and grow emotionally.
          </p>
          <p>
            Instead of relying only on static exercises or generic advice, Tranquil focuses on conversation-driven emotional support. Users can express themselves naturally and receive thoughtful responses from an AI companion designed to listen with empathy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
