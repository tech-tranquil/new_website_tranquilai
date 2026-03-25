"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Pre-generated deterministic values to avoid hydration mismatch
const PARTICLES = [
  { id: 0, x: 12, y: 18, size: 3, duration: 18, delay: 0 },
  { id: 1, x: 87, y: 24, size: 2, duration: 22, delay: 1 },
  { id: 2, x: 45, y: 62, size: 3.5, duration: 20, delay: 2 },
  { id: 3, x: 8, y: 75, size: 2, duration: 16, delay: 0.5 },
  { id: 4, x: 92, y: 88, size: 2.5, duration: 24, delay: 3 },
  { id: 5, x: 33, y: 35, size: 2, duration: 19, delay: 1.5 },
  { id: 6, x: 68, y: 45, size: 2.5, duration: 21, delay: 2.5 },
  { id: 7, x: 15, y: 52, size: 2, duration: 17, delay: 0.8 },
  { id: 8, x: 78, y: 12, size: 3, duration: 23, delay: 1.2 },
  { id: 9, x: 55, y: 82, size: 2, duration: 15, delay: 2 },
  { id: 10, x: 22, y: 8, size: 2.5, duration: 20, delay: 0.3 },
  { id: 11, x: 95, y: 55, size: 2, duration: 18, delay: 1.8 },
  { id: 12, x: 5, y: 42, size: 2, duration: 22, delay: 0.6 },
  { id: 13, x: 62, y: 28, size: 2.5, duration: 16, delay: 2.2 },
  { id: 14, x: 40, y: 90, size: 2, duration: 19, delay: 1 },
  { id: 15, x: 18, y: 65, size: 2.5, duration: 21, delay: 0.4 },
  { id: 16, x: 85, y: 38, size: 2, duration: 17, delay: 2.8 },
  { id: 17, x: 50, y: 15, size: 3, duration: 23, delay: 1.4 },
  { id: 18, x: 72, y: 72, size: 2, duration: 18, delay: 0.9 },
  { id: 19, x: 28, y: 48, size: 2.5, duration: 20, delay: 1.6 },
];

// Light blue / sky particles
const COLORS = [
  "bg-[#BFDBFE]/60",
  "bg-[#93C5FD]/50",
  "bg-[#60A5FA]/40",
  "bg-[#DBEAFE]/70",
];

export default function ParticleBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {PARTICLES.map((p, i) => (
        <motion.div
          key={p.id}
          className={`absolute rounded-full ${COLORS[i % COLORS.length]}`}
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.55, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
