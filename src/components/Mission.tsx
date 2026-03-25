"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Mission() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="mission" ref={ref} className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 1, y: 0 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-8"
        >
          Making Mental Health Support Accessible
        </motion.h2>
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4 text-[#4a5568] leading-relaxed"
        >
          <p>
            Tranquil AI was created with a mission to make emotional support accessible to anyone who needs it.
          </p>
          <p>
            The platform combines artificial intelligence with mindfulness practices to create a companion that listens, understands, and supports people through their emotional journeys.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
