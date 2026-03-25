"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CalmShapes } from "./illustrations/CalmShapes";

const WAVE_HEIGHTS = [2, 4, 7, 11, 8, 14, 10, 16, 13, 16, 10, 14, 8, 11, 7, 4, 2];
const ISLAND_BARS = [3, 5, 4, 6, 3];
const SIG_BARS = [2, 3, 4, 5];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#F8FAFE]">
      {/* Background layers */}
      <CalmShapes />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 md:py-28 pt-32 md:pt-36 flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
        {/* ── Left text block ── */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 mb-6 rounded-full bg-white/90 px-4 py-2 text-[11px] font-semibold text-[#4A90D9] border border-[#D6EBFF]/80 shadow-sm uppercase tracking-widest"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3B82F6] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
            </span>
            AI Mental Health Companion
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-4xl md:text-[44px] lg:text-[48px] font-bold leading-[1.15] tracking-tight mb-4 text-[#0F172A]"
          >
            Your AI Companion for{" "}
            <span className="text-gradient">Mental Wellness</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[17px] text-[#475569] mb-3 font-medium"
          >
            Talk, reflect, breathe, and heal — anytime, anywhere.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-[15px] md:text-[17px] text-[#64748B] max-w-xl mb-10 leading-relaxed lg:mx-0 mx-auto"
          >
            Tranquil AI is an intelligent mental health companion designed to help people navigate emotions, build resilience, and feel understood.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
          >
            <Link
              href="/download"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[15px] rounded-xl bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white font-semibold shadow-[0_4px_20px_rgba(37,99,235,0.35),inset_0_1px_0_rgba(255,255,255,0.2)] hover:shadow-[0_8px_32px_rgba(37,99,235,0.5),inset_0_1px_0_rgba(255,255,255,0.25)] hover:scale-[1.02] active:scale-100 transition-all duration-200"
            >
              Download App
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </Link>
            <Link
              href="/#features"
              className="inline-flex items-center justify-center px-7 py-3.5 text-[15px] rounded-xl bg-white border border-blue-200 text-[#2563EB] font-semibold hover:bg-blue-50 hover:border-blue-300 hover:scale-[1.02] active:scale-100 transition-all duration-200 shadow-sm"
            >
              See How It Works
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap justify-center lg:justify-start gap-5 text-[13px] text-[#94A3B8] font-medium"
          >
            {["40K+ Users", "150K+ Conversations", "Evidence-based"].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-[#3B82F6]" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        {/* ── Right: Phone mockup — voice session ── */}
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Layered ambient glow */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[220px] h-[220px] rounded-full bg-[#4A90D9]/18 blur-[64px] pointer-events-none" />
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[140px] h-[140px] rounded-full bg-[#818CF8]/12 blur-[40px] pointer-events-none" />

            {/* Phone chassis */}
            <div
              className="relative w-[248px] rounded-[3.5rem] p-[10px]"
              style={{
                background: "linear-gradient(160deg, #1c1f2a 0%, #11141e 100%)",
                boxShadow:
                  "0 64px 150px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.07), inset 0 1px 0 rgba(255,255,255,0.09), inset 0 -1px 0 rgba(0,0,0,0.6)",
              }}
            >
              {/* Decorative side buttons */}
              <div className="absolute -right-[3px] top-[86px] w-[3px] h-[54px] rounded-r-full bg-[#282b38]" />
              <div className="absolute -left-[3px] top-[70px] w-[3px] h-[36px] rounded-l-full bg-[#282b38]" />
              <div className="absolute -left-[3px] top-[114px] w-[3px] h-[36px] rounded-l-full bg-[#282b38]" />

              {/* Dynamic island */}
              <div className="absolute top-[15px] left-1/2 -translate-x-1/2 z-30 w-[86px] h-[26px] bg-black rounded-full flex items-center justify-center gap-2 px-3">
                <div className="flex gap-[2.5px] items-center">
                  {ISLAND_BARS.map((h, i) => (
                    <div
                      key={i}
                      className="w-[2.5px] rounded-full bg-white/40 animate-bounce"
                      style={{ height: `${h}px`, animationDuration: `${0.45 + i * 0.1}s`, animationDelay: `${i * 0.07}s` }}
                    />
                  ))}
                </div>
              </div>

              {/* Screen */}
              <div
                className="rounded-[3rem] overflow-hidden"
                style={{
                  background: "linear-gradient(178deg, #090d18 0%, #0d1225 38%, #0f1530 70%, #080d1a 100%)",
                  minHeight: "530px",
                }}
              >
                {/* Aurora colour wash */}
                <div className="absolute top-0 left-0 right-0 h-[280px] pointer-events-none overflow-hidden rounded-t-[3rem]">
                  <div className="absolute -top-10 -left-8 w-[200px] h-[200px] rounded-full bg-[#4A90D9]/9 blur-[55px]" />
                  <div className="absolute -top-6 -right-8 w-[160px] h-[160px] rounded-full bg-[#818CF8]/7 blur-[45px]" />
                </div>

                {/* ── Status bar ── */}
                <div className="flex justify-between items-center px-7 pt-14 pb-0 relative z-10">
                  <span className="text-[10.5px] font-semibold text-white/30 tracking-wide">9:41</span>
                  <div className="flex items-center gap-1.5">
                    <div className="flex gap-[2.5px] items-end">
                      {SIG_BARS.map((h, i) => (
                        <div
                          key={i}
                          className="w-[2.5px] rounded-full bg-white/30"
                          style={{ height: `${h * 2.5}px` }}
                        />
                      ))}
                    </div>
                    <svg className="w-3 h-3 text-white/30" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M1.5 8.5C5.5 4.5 10.5 2.5 12 2.5s6.5 2 10.5 6l-1.5 1.5C17.5 6.5 14.5 4.5 12 4.5S6.5 6.5 3 10L1.5 8.5zM12 8.5c-1.5 0-3.5.7-5 2.2L5.5 9.2C7.5 7.2 9.8 6.5 12 6.5s4.5.7 6.5 2.7l-1.5 1.5C15.5 9.2 13.5 8.5 12 8.5zM12 12.5c-.8 0-1.8.4-2.5 1.1L8 12.1C9.2 10.9 10.6 10.5 12 10.5s2.8.4 4 1.6l-1.5 1.5c-.7-.7-1.7-1.1-2.5-1.1zM12 16.5c-.5 0-1 .2-1.5.7L12 19l1.5-1.8c-.5-.5-1-.7-1.5-.7z" />
                    </svg>
                    <div className="w-[18px] h-[9px] rounded-[2.5px] border border-white/22 p-[1.5px]">
                      <div className="h-full w-3/4 rounded-sm bg-green-400/75" />
                    </div>
                  </div>
                </div>

                {/* ── Voice call content ── */}
                <div className="flex flex-col items-center px-6 pt-7 pb-8 relative z-10">
                  {/* Session label */}
                  <div
                    className="inline-flex items-center gap-2 rounded-full px-3.5 py-[5px] mb-7"
                    style={{ background: "rgba(74,144,217,0.1)", border: "1px solid rgba(74,144,217,0.18)" }}
                  >
                    <svg className="w-[10px] h-[10px] text-[#4A90D9]/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                    <p className="text-[9.5px] font-semibold text-white/35 uppercase tracking-[0.22em]">Voice Session</p>
                  </div>

                  {/* Avatar — static glow, no rings */}
                  <div className="relative flex items-center justify-center mb-5">
                    {/* Static soft glow disc */}
                    <div
                      className="absolute w-[100px] h-[100px] rounded-full"
                      style={{ background: "radial-gradient(circle, rgba(74,144,217,0.18) 0%, rgba(74,144,217,0) 70%)" }}
                    />
                    {/* Avatar */}
                    <div
                      className="relative w-[76px] h-[76px] rounded-full flex items-center justify-center"
                      style={{
                        background: "linear-gradient(145deg, #5BA8E8 0%, #5B6EEF 45%, #7C88F0 100%)",
                        boxShadow:
                          "0 0 0 1.5px rgba(74,144,217,0.3), 0 0 32px rgba(74,144,217,0.28), 0 16px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.15)",
                      }}
                    >
                      {/* Inner shimmer */}
                      <div
                        className="absolute inset-0 rounded-full"
                        style={{ background: "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.18) 0%, transparent 60%)" }}
                      />
                      <span className="text-white font-bold text-[26px] tracking-tight select-none relative z-10">S</span>
                    </div>
                  </div>

                  <p className="text-white text-[16.5px] font-semibold tracking-[-0.01em] mb-[3px]">Sara</p>
                  <p className="text-white/28 text-[10.5px] mb-7 tracking-wide">AI Companion · Speaking</p>

                  {/* Waveform */}
                  <div className="flex items-center justify-center gap-[3px] mb-5 h-11">
                    {WAVE_HEIGHTS.map((h, i) => (
                      <div
                        key={i}
                        className="w-[2.5px] rounded-full animate-bounce"
                        style={{
                          height: `${h * 2.9}px`,
                          background:
                            i <= 8
                              ? `rgba(74,144,217,${0.35 + (i / 9) * 0.55})`
                              : `rgba(129,140,248,${0.9 - ((i - 8) / 9) * 0.5})`,
                          animationDuration: `${0.38 + (i % 5) * 0.11}s`,
                          animationDelay: `${i * 0.055}s`,
                          boxShadow: h > 10 ? "0 0 5px rgba(74,144,217,0.38)" : "none",
                        }}
                      />
                    ))}
                  </div>

                  {/* Session timer pill */}
                  <div
                    className="rounded-full px-5 py-[5px] mb-7"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.065)",
                    }}
                  >
                    <span className="text-white/35 text-[11px] font-mono tracking-[0.22em]">04 : 32</span>
                  </div>

                  {/* Controls */}
                  <div className="flex items-center justify-center gap-5 w-full">
                    {/* Mute */}
                    <button className="flex flex-col items-center gap-[6px]">
                      <div
                        className="w-[48px] h-[48px] rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
                        style={{ background: "rgba(255,255,255,0.055)", border: "1px solid rgba(255,255,255,0.075)" }}
                      >
                        <svg className="w-[18px] h-[18px] text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                        </svg>
                      </div>
                      <span className="text-[8.5px] text-white/18 tracking-widest uppercase">Mute</span>
                    </button>

                    {/* End call */}
                    <button className="flex flex-col items-center gap-[6px]">
                      <div
                        className="w-[58px] h-[58px] rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
                        style={{
                          background: "linear-gradient(140deg, #f04040, #d92020)",
                          boxShadow: "0 10px 30px rgba(239,68,68,0.48), 0 0 0 1px rgba(255,255,255,0.07)",
                        }}
                      >
                        <svg className="w-[21px] h-[21px] text-white rotate-[135deg]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <span className="text-[8.5px] text-white/18 tracking-widest uppercase">End</span>
                    </button>

                    {/* Speaker */}
                    <button className="flex flex-col items-center gap-[6px]">
                      <div
                        className="w-[48px] h-[48px] rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
                        style={{ background: "rgba(255,255,255,0.055)", border: "1px solid rgba(255,255,255,0.075)" }}
                      >
                        <svg className="w-[18px] h-[18px] text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                        </svg>
                      </div>
                      <span className="text-[8.5px] text-white/18 tracking-widest uppercase">Speaker</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
