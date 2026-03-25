"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { APP_STORE_URL, GOOGLE_PLAY_URL } from "@/lib/constants";

const serene = { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const };
const spring = { type: "spring" as const, stiffness: 100, damping: 20 };

const features = [
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Talk to Sara",
    desc: "AI companion available 24/7",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    ),
    title: "Guided Journaling",
    desc: "Reflect and build self-awareness",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "Mood Tracking",
    desc: "Understand your emotional patterns",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Sleep & Breathe",
    desc: "75+ hours of calming audio",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "100% Private",
    desc: "Your data stays yours, always",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: "Evidence-Based",
    desc: "CBT & positive psychology methods",
  },
];

const stats = [
  { value: "40K+", label: "Users" },
  { value: "200K+", label: "Conversations" },
  { value: "85K+", label: "Mood Logs" },
  { value: "4.8★", label: "App Rating" },
];

const reviews = [
  {
    text: "Sara helped me get through the worst week of my life. I didn't feel alone once.",
    name: "Priya M.",
    role: "Student",
  },
  {
    text: "Finally an app that feels human. The journaling feature alone is worth it.",
    name: "Arjun K.",
    role: "Software Engineer",
  },
  {
    text: "I've never been able to open up easily — but talking to Sara felt completely safe.",
    name: "Neha R.",
    role: "Teacher",
  },
];

export default function DownloadContent() {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const reviewsRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-60px" });
  const featuresInView = useInView(featuresRef, { once: true, margin: "-60px" });
  const reviewsInView = useInView(reviewsRef, { once: true, margin: "-60px" });

  return (
    <div className="bg-[#FAFBFD] font-sans">
      {/* ── Hero ── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden px-6 pt-28 pb-20">
        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#DBEAFE]/60 blur-[120px]" />
          <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] rounded-full bg-[#EDE9FE]/50 blur-[100px]" />
        </div>

        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

            {/* Left content */}
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={serene}
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[11px] font-bold text-[#4A90D9] border border-[#DBEAFE] shadow-sm uppercase tracking-widest mb-8"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4A90D9] opacity-40" />
                  <span className="relative h-2 w-2 rounded-full bg-[#4A90D9]" />
                </span>
                Free to Download
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ ...serene, delay: 0.06 }}
                className="text-5xl md:text-[64px] font-bold text-[#0F172A] tracking-tight leading-[1.05] mb-6"
              >
                Your mental wellness<br />
                <span className="bg-gradient-to-r from-[#4A90D9] to-[#818CF8] bg-clip-text text-transparent">
                  companion awaits
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ ...serene, delay: 0.12 }}
                className="text-[18px] text-[#64748B] max-w-lg mx-auto lg:mx-0 leading-relaxed mb-10"
              >
                Talk to Sara, journal your thoughts, track your mood, and build resilience — any time, anywhere. Join 40,000+ people already on their journey.
              </motion.p>

              {/* Store buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ ...serene, delay: 0.18 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
              >
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3.5 px-7 py-4 rounded-2xl bg-[#0F172A] text-white font-semibold shadow-[0_8px_32px_rgba(15,23,42,0.25)] hover:shadow-[0_14px_40px_rgba(15,23,42,0.35)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] font-medium text-white/70 leading-none mb-0.5">Download on the</div>
                    <div className="text-[16px] font-bold leading-none">App Store</div>
                  </div>
                </a>
                <a
                  href={GOOGLE_PLAY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3.5 px-7 py-4 rounded-2xl bg-[#0F172A] text-white font-semibold shadow-[0_8px_32px_rgba(15,23,42,0.25)] hover:shadow-[0_14px_40px_rgba(15,23,42,0.35)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] font-medium text-white/70 leading-none mb-0.5">Get it on</div>
                    <div className="text-[16px] font-bold leading-none">Google Play</div>
                  </div>
                </a>
              </motion.div>

              {/* Mini stats row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={heroInView ? { opacity: 1 } : {}}
                transition={{ ...serene, delay: 0.3 }}
                className="flex gap-8 justify-center lg:justify-start"
              >
                {stats.map((s, i) => (
                  <div key={i} className="text-center lg:text-left">
                    <div className="text-[22px] font-bold text-[#0F172A] tracking-tight">{s.value}</div>
                    <div className="text-[12px] text-[#94A3B8] font-medium">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right — Phone mockup */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ ...serene, delay: 0.15 }}
              className="flex-1 flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Glow */}
                <div className="absolute inset-0 translate-y-8 blur-3xl bg-gradient-to-b from-[#4A90D9]/30 to-[#818CF8]/20 rounded-full scale-90 pointer-events-none" />
                
                {/* Phone shell */}
                <div className="relative w-[300px] md:w-[320px] bg-[#0F172A] rounded-[3rem] p-3 shadow-[0_40px_100px_rgba(15,23,42,0.3),0_0_0_1px_rgba(255,255,255,0.05)]">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-[#0F172A] rounded-b-2xl z-10" />
                  
                  {/* Screen */}
                  <div className="rounded-[2.4rem] overflow-hidden bg-white">
                    {/* Status bar */}
                    <div className="flex justify-between items-center px-5 pt-10 pb-3 bg-white">
                      <span className="text-[11px] font-semibold text-[#0F172A]">9:41</span>
                      <div className="flex gap-1 items-center">
                        <div className="w-4 h-2.5 rounded-sm bg-[#0F172A] relative">
                          <div className="absolute right-[-3px] top-1/2 -translate-y-1/2 w-0.5 h-1 bg-[#0F172A] rounded-r" />
                          <div className="absolute inset-0.5 bg-green-500 rounded-sm" />
                        </div>
                      </div>
                    </div>

                    {/* App content */}
                    <div className="px-4 pb-6 bg-[#FAFBFD] min-h-[480px]">
                      {/* Header */}
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4A90D9] to-[#818CF8] flex items-center justify-center text-white font-bold text-sm shadow-lg">S</div>
                        <div>
                          <p className="text-[13px] font-semibold text-[#0F172A]">Sara</p>
                          <div className="flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                            <p className="text-[10px] text-[#94A3B8]">Online</p>
                          </div>
                        </div>
                      </div>

                      {/* Chat bubbles */}
                      <div className="space-y-3 mb-5">
                        <div className="flex justify-end">
                          <div className="bg-[#4A90D9] rounded-2xl rounded-br-md px-3.5 py-2.5 max-w-[82%] shadow-sm">
                            <p className="text-[12px] text-white leading-relaxed">&quot;I&apos;ve been feeling overwhelmed lately&quot;</p>
                          </div>
                        </div>
                        <div className="flex justify-start">
                          <div className="bg-white rounded-2xl rounded-bl-md px-3.5 py-2.5 max-w-[82%] shadow-sm border border-slate-100">
                            <p className="text-[12px] text-[#1E293B] leading-relaxed">I&apos;m really glad you shared that. Can you tell me more about what&apos;s been on your mind? 💙</p>
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <div className="bg-[#4A90D9] rounded-2xl rounded-br-md px-3.5 py-2.5 max-w-[82%] shadow-sm">
                            <p className="text-[12px] text-white leading-relaxed">&quot;Work stress mostly...&quot;</p>
                          </div>
                        </div>
                        <div className="flex justify-start">
                          <div className="bg-white rounded-2xl rounded-bl-md px-3.5 py-2.5 max-w-[82%] shadow-sm border border-slate-100">
                            <p className="text-[12px] text-[#1E293B] leading-relaxed">That&apos;s so common. Let&apos;s work through it together. How does your body feel right now?</p>
                          </div>
                        </div>
                      </div>

                      {/* Mood check */}
                      <div className="bg-white rounded-2xl p-3 border border-slate-100 shadow-sm mb-4">
                        <p className="text-[10px] font-semibold text-[#94A3B8] uppercase tracking-wider mb-2">Today&apos;s mood</p>
                        <div className="flex justify-between">
                          {["😞","😕","😐","🙂","😊"].map((e, i) => (
                            <button key={i} className={`text-[20px] w-9 h-9 rounded-full flex items-center justify-center transition-all ${i === 3 ? "bg-[#EFF6FF] ring-2 ring-[#4A90D9]/40 scale-110" : "hover:bg-slate-50"}`}>{e}</button>
                          ))}
                        </div>
                      </div>

                      {/* Input bar */}
                      <div className="flex gap-2 items-center">
                        <div className="flex-1 h-10 rounded-full bg-white border border-slate-200 flex items-center px-4">
                          <span className="text-[11px] text-[#CBD5E1]">Message Sara...</span>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-[#4A90D9] flex items-center justify-center shadow-md">
                          <svg className="w-4 h-4 text-white rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-12 top-20 bg-white rounded-2xl px-4 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-slate-100/80 hidden lg:flex items-center gap-2"
                >
                  <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-[#1E293B]">DPIIT Recognised</p>
                    <p className="text-[10px] text-[#94A3B8]">Startup India</p>
                  </div>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -right-12 bottom-28 bg-white rounded-2xl px-4 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-slate-100/80 hidden lg:flex items-center gap-2"
                >
                  <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-[16px]">⭐</div>
                  <div>
                    <p className="text-[11px] font-semibold text-[#1E293B]">4.8 / 5 Rating</p>
                    <p className="text-[10px] text-[#94A3B8]">App Store & Play</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Features grid ── */}
      <section ref={featuresRef} className="px-6 py-24 border-t border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={serene}
              className="font-serif text-[36px] md:text-[44px] text-[#1E293B] tracking-tight mb-3"
            >
              Everything you need to thrive
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ ...serene, delay: 0.1 }}
              className="text-[#64748B] text-[16px]"
            >
              One app. All the tools for your mental wellness journey.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ ...spring, delay: i * 0.08 }}
                className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-[0_2px_16px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.05)] hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-2xl bg-[#EFF6FF] flex items-center justify-center text-[#4A90D9] mb-4 group-hover:bg-[#4A90D9] group-hover:text-white transition-colors duration-300">
                  {f.icon}
                </div>
                <h3 className="text-[16px] font-semibold text-[#1E293B] mb-1">{f.title}</h3>
                <p className="text-[13px] text-[#94A3B8] leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section ref={reviewsRef} className="px-6 py-24 bg-[#F8FAFC] border-t border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={reviewsInView ? { opacity: 1, y: 0 } : {}}
              transition={serene}
              className="font-serif text-[36px] md:text-[44px] text-[#1E293B] tracking-tight"
            >
              Loved by thousands
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {reviews.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={reviewsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ ...spring, delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)]"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, si) => (
                    <svg key={si} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[15px] text-[#475569] leading-relaxed mb-6 italic">&ldquo;{r.text}&rdquo;</p>
                <div>
                  <p className="text-[14px] font-semibold text-[#1E293B]">{r.name}</p>
                  <p className="text-[12px] text-[#94A3B8]">{r.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={reviewsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...spring, delay: 0.4 }}
            className="relative rounded-[2rem] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#1E293B] via-[#1E293B] to-[#2D3748]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(74,144,217,0.15)_0%,transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(129,140,248,0.12)_0%,transparent_60%)]" />

            <div className="relative px-10 md:px-16 py-16 md:py-20 flex flex-col md:flex-row items-center gap-10 justify-between">
              <div className="text-center md:text-left">
                <h2 className="text-[28px] md:text-[36px] font-bold text-white tracking-tight leading-tight mb-3">
                  Begin your journey today.
                </h2>
                <p className="text-white/60 text-[15px] max-w-sm">
                  Free to download. No credit card required. Start in under 60 seconds.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white text-[#0F172A] font-semibold text-[14px] hover:bg-slate-100 transition-colors shadow-lg"
                >
                  <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  App Store
                </a>
                <a
                  href={GOOGLE_PLAY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white text-[#0F172A] font-semibold text-[14px] hover:bg-slate-100 transition-colors shadow-lg"
                >
                  <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  Google Play
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
