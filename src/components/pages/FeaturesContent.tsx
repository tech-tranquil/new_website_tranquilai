"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const features = [
  {
    id: "sara",
    number: "01",
    title: "AI Companion",
    subtitle: "Chat with Sara",
    description: "An empathetic AI that listens without judgment, guides you through difficult moments, and remembers what matters to you.",
    wide: true,
    visual: (
      <div className="w-full max-w-[300px] space-y-2.5">
        <div className="flex gap-2.5 items-end">
          <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-[11px] font-semibold text-slate-400 shrink-0">S</div>
          <div className="bg-slate-50 border border-slate-100 rounded-2xl rounded-bl-sm px-4 py-2.5 max-w-[200px]">
            <p className="text-[12.5px] text-slate-600 leading-relaxed">How are you feeling today?</p>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-[#2563EB] rounded-2xl rounded-br-sm px-4 py-2.5 max-w-[200px]">
            <p className="text-[12.5px] text-white leading-relaxed">A bit overwhelmed today...</p>
          </div>
        </div>
        <div className="flex gap-2.5 items-end">
          <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-[11px] font-semibold text-slate-400 shrink-0">S</div>
          <div className="bg-slate-50 border border-slate-100 rounded-2xl rounded-bl-sm px-4 py-2.5 max-w-[220px]">
            <p className="text-[12.5px] text-slate-600 leading-relaxed">I hear you. Let&apos;s take a moment to breathe first.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "journal",
    number: "02",
    title: "Journaling",
    subtitle: "Insights & Patterns",
    description: "Your entries are more than text. Tranquil surfaces emotional themes and insights from your daily reflections.",
    wide: false,
    visual: (
      <div className="w-full space-y-3">
        <div className="bg-slate-50 border border-slate-100 rounded-xl p-3">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Key Themes</p>
          <div className="flex flex-wrap gap-1.5">
            {["Work Stress", "Gratitude", "Productivity"].map(tag => (
              <span key={tag} className="text-[10px] px-2 py-0.5 bg-white border border-slate-100 rounded-full text-slate-500">{tag}</span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 px-1">
          <div className="text-[14px]">📈</div>
          <p className="text-[11px] text-slate-500">Positive trend in morning entries</p>
        </div>
      </div>
    ),
  },
  {
    id: "mood",
    number: "03",
    title: "Mood Tracking",
    subtitle: "Know Your Patterns",
    description: "Log your emotional state daily and uncover the patterns that shape your wellbeing over time.",
    wide: false,
    visual: (
      <div className="w-full">
        <div className="flex gap-1 items-end h-14 mb-3">
          {[45, 68, 42, 82, 58, 90, 72].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-full"
              style={{ height: `${h}%`, background: i === 5 ? "#2563EB" : "#E2E8F0" }}
            />
          ))}
        </div>
        <div className="flex justify-between px-0.5">
          {["M","T","W","T","F","S","S"].map((d, i) => (
            <span key={i} className={`text-[10px] font-medium ${i === 5 ? "text-[#2563EB]" : "text-slate-300"}`}>{d}</span>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "goals",
    number: "04",
    title: "Habits",
    subtitle: "Daily Wellness Goals",
    description: "Small steps lead to big changes. Set and track daily goals for water, sleep, and mindfulness.",
    wide: false,
    visual: (
      <div className="w-full space-y-2">
        {[
          { label: "10m Meditation", done: true },
          { label: "Drink 2L Water", done: true },
          { label: "Evening Journal", done: false },
        ].map((g) => (
          <div key={g.label} className="flex items-center gap-3">
            <div className={`w-4 h-4 rounded border ${g.done ? "bg-[#2563EB] border-[#2563EB]" : "border-slate-200"} flex items-center justify-center`}>
              {g.done && <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4"><path d="M5 13l4 4L19 7" /></svg>}
            </div>
            <span className={`text-[12px] ${g.done ? "text-slate-400 line-through" : "text-slate-600 font-medium"}`}>{g.label}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "games",
    number: "05",
    title: "Focus",
    subtitle: "Mindfulness Games",
    description: "Designed by psychologists to improve focus and cognitive flexibility through gentle interaction.",
    wide: false,
    visual: (
      <div className="w-full grid grid-cols-3 gap-1.5 px-4">
        {[...Array(9)].map((_, i) => (
          <div key={i} className={`aspect-square rounded-lg border ${i === 4 ? "bg-[#2563EB] border-[#2563EB]" : "bg-slate-50 border-slate-100"}`} />
        ))}
      </div>
    ),
  },
  {
    id: "breathe",
    number: "06",
    title: "Breathing",
    subtitle: "Reset in Minutes",
    description: "Evidence-based box breathing and 4-7-8 techniques — calm your nervous system anywhere.",
    wide: false,
    visual: (
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-[80px] h-[80px] flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 80 80">
            <circle cx="40" cy="40" r="34" fill="none" stroke="#F1F5F9" strokeWidth="3" />
            <circle
              cx="40" cy="40" r="34"
              fill="none"
              stroke="#2563EB"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="213.6"
              strokeDashoffset="85"
            />
          </svg>
          <span className="text-[11px] font-semibold text-slate-500">inhale</span>
        </div>
      </div>
    ),
  },
  {
    id: "audio",
    number: "07",
    title: "Meditation",
    subtitle: "75+ Hours of Audio",
    description: "From quick 5-minute stress relief to deep sleep stories — crafted for every moment.",
    wide: false,
    visual: (
      <div className="w-full space-y-2">
        {[
          { name: "Deep Sleep Story", dur: "22m", pct: 65 },
          { name: "Morning Clarity",  dur: "8m",  pct: 100 },
        ].map((t, i) => (
          <div key={t.name} className="flex items-center gap-3">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${i === 0 ? "bg-[#2563EB]" : "bg-slate-100"}`}>
              <svg className={`w-2 h-2 ${i === 0 ? "text-white" : "text-slate-400"}`} fill="currentColor" viewBox="0 0 24 24"><path d="M5 3l14 9-14 9V3z"/></svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between mb-0.5">
                <span className={`text-[10.5px] font-medium truncate ${i === 0 ? "text-slate-700" : "text-slate-400"}`}>{t.name}</span>
                <span className="text-[9px] text-slate-300 ml-1">{t.dur}</span>
              </div>
              <div className="h-[2px] bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#2563EB] rounded-full" style={{ width: `${t.pct}%`, opacity: i === 0 ? 1 : 0.3 }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    ),
  },
];

export default function FeaturesContent() {
  const heroRef = useRef(null);
  const gridRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-60px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-40px" });

  return (
    <div className="pt-16 bg-white min-h-screen">
      {/* ── Hero ── */}
      <section ref={heroRef} className="px-6 pt-20 pb-16 max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#2563EB]/70 mb-5"
        >
          Features
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.05, ease }}
          className="text-[40px] md:text-[52px] font-bold text-[#0F172A] tracking-tight leading-[1.1] mb-5"
        >
          Tools that care about
          <br />
          <span className="text-[#2563EB]">how you feel</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="text-[17px] text-slate-500 max-w-lg mx-auto leading-relaxed"
        >
          Seven thoughtfully designed features — each one built to support a different dimension of your mental health.
        </motion.p>
      </section>

      {/* ── Divider ── */}
      <div className="max-w-5xl mx-auto px-5">
        <div className="h-px bg-slate-100" />
      </div>

      {/* ── Grid ── */}
      <section ref={gridRef} className="max-w-5xl mx-auto px-5 py-16 pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-100 rounded-2xl overflow-hidden border border-slate-100">
          {features.map((f, i) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0 }}
              animate={gridInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.04 * i, ease }}
              className={f.wide ? "md:col-span-2" : ""}
            >
              <div className="group bg-white p-8 md:p-10 flex flex-col md:flex-row gap-8 md:gap-12 h-full hover:bg-slate-50/70 transition-colors duration-300">
                {/* Left: text */}
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-bold text-slate-200 tracking-[0.18em] uppercase mb-6">{f.number}</p>
                  <p className="text-[11px] font-semibold text-[#2563EB] uppercase tracking-[0.14em] mb-2">{f.title}</p>
                  <h3 className="text-[22px] md:text-[24px] font-bold text-[#0F172A] tracking-tight leading-snug mb-3">
                    {f.subtitle}
                  </h3>
                  <p className="text-[14px] text-slate-500 leading-relaxed max-w-sm">
                    {f.description}
                  </p>
                </div>

                {/* Right: visual */}
                <div className={`flex items-center justify-center shrink-0 ${f.wide ? "md:w-[320px]" : "md:w-[200px]"}`}>
                  {f.visual}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
