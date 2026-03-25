"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const press = [
  { name: "Indian Express", link: "#" },
  { name: "Startuppedia", link: "#" },
  { name: "The Interview World", link: "#" },
];

export default function PressMentions() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="press" ref={ref} className="py-24 px-6 bg-gradient-to-b from-[#E8F4FC]/60 to-[#F5F9FF]">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 1, y: 0 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl md:text-4xl font-bold text-center text-[#1a1a2e] mb-16"
        >
          Press Mentions
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-8">
          {press.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 1, y: 0 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={item.link}
                className="block bg-white/85 backdrop-blur-xl rounded-[24px] px-12 py-6 shadow-card border border-white/60 hover:shadow-soft-lg transition-all duration-300 font-heading font-semibold text-[#1a1a2e]"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
