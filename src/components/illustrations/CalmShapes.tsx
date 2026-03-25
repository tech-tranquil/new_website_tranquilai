"use client";

import { motion } from "framer-motion";

export const CalmShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <svg className="absolute w-[120%] h-[120%] left-[-10%] top-[-10%] opacity-[0.6] mix-blend-multiply" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <defs>
          <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DBEAFE" />
            <stop offset="100%" stopColor="#EFF6FF" />
          </linearGradient>
          <linearGradient id="g2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E0E7FF" />
            <stop offset="100%" stopColor="#F0F5FF" />
          </linearGradient>
          <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="60" />
          </filter>
        </defs>

        <motion.ellipse
          cx="300"
          cy="200"
          rx="350"
          ry="300"
          fill="url(#g1)"
          filter="url(#blur)"
          className="animate-drift"
        />
        
        <motion.ellipse
          cx="700"
          cy="800"
          rx="400"
          ry="350"
          fill="url(#g2)"
          filter="url(#blur)"
          className="animate-drift"
          style={{ animationDirection: "reverse", animationDuration: "25s" }}
        />
        
        <motion.circle
          cx="800"
          cy="200"
          r="250"
          fill="#DBEAFE"
          filter="url(#blur)"
          className="animate-pulse-glow"
          style={{ animationDelay: "2s" }}
        />
      </svg>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.4),rgba(255,255,255,0.7))] backdrop-blur-[30px]" />
    </div>
  );
};

export const MindIllustration = ({ className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          d="M200 80 C 130 80, 80 130, 80 200 C 80 270, 130 320, 200 320 C 270 320, 320 270, 320 200 C 320 130, 270 80, 200 80 Z"
          stroke="#3B82F6"
          strokeWidth="1.5"
          strokeDasharray="4 8"
          strokeLinecap="round"
        />
        
        <motion.path
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          className="origin-center"
          d="M170 170 Q 200 120, 230 170 T 290 230 Q 200 280, 110 230 T 170 170 Z"
          fill="url(#mindGrad1)"
          fillOpacity="0.4"
        />

        <motion.path
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
          className="origin-center"
          d="M140 200 Q 200 280, 260 200 T 200 120 T 140 200 Z"
          fill="url(#mindGrad2)"
          fillOpacity="0.5"
        />

        <motion.circle
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 1.5, type: "spring", stiffness: 100 }}
          cx="200"
          cy="200"
          r="25"
          fill="#fff"
          className="drop-shadow-md"
        />
        <motion.circle
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 1.7, type: "spring", stiffness: 100 }}
          cx="200"
          cy="200"
          r="10"
          fill="#3B82F6"
        />

        <defs>
          <linearGradient id="mindGrad1" x1="110" y1="170" x2="290" y2="230" gradientUnits="userSpaceOnUse">
            <stop stopColor="#60A5FA" />
            <stop offset="1" stopColor="#93C5FD" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="mindGrad2" x1="140" y1="120" x2="260" y2="280" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3B82F6" />
            <stop offset="1" stopColor="#BFDBFE" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
