"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { asset } from "@/lib/asset";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/who-we-serve", label: "Who We Serve" },
  { href: "/features", label: "Features" },
  { href: "/about", label: "About Us" },
  { href: "/investors", label: "Investors" },
  { href: "/download", label: "Download" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-3.5 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-2xl border-b border-blue-100 shadow-[0_2px_20px_rgba(37,99,235,0.08)]"
          : "bg-white/60 backdrop-blur-xl border-b border-blue-50"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2.5 transition-all duration-300">
          <img 
            src={asset("/logo.png")} 
            alt="Tranquil AI Logo" 
            className="w-9 h-9 object-contain drop-shadow-[0_2px_8px_rgba(37,99,235,0.2)] group-hover:drop-shadow-[0_4px_12px_rgba(37,99,235,0.35)] transition-all duration-300"
          />
          <span className="font-heading text-xl md:text-2xl font-bold bg-gradient-to-r from-[#1D4ED8] to-[#3B82F6] bg-clip-text text-transparent">
            Tranquil AI
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 ${
                  isActive
                    ? "text-[#2563EB] bg-blue-50"
                    : "text-[#475569] hover:text-[#1D4ED8] hover:bg-blue-50/70"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute inset-x-3 bottom-1 h-px bg-gradient-to-r from-[#2563EB] to-[#60A5FA] rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href="/download"
            className="hidden md:inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white text-sm font-semibold shadow-[0_4px_14px_rgba(37,99,235,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] hover:shadow-[0_6px_22px_rgba(37,99,235,0.45),inset_0_1px_0_rgba(255,255,255,0.25)] hover:scale-[1.03] active:scale-100 transition-all duration-200"
          >
            Download App
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-[#64748B] hover:text-[#1D4ED8] hover:bg-blue-50 transition-all"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden"
          >
            <div className="py-4 space-y-1 border-t border-blue-100 mt-3 mx-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2.5 px-4 rounded-xl text-[#475569] hover:bg-blue-50 hover:text-[#1D4ED8] font-medium transition-colors text-sm"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/download"
                onClick={() => setMobileOpen(false)}
                className="block mx-0 mt-3 py-3 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white text-center font-semibold text-sm shadow-[0_4px_14px_rgba(37,99,235,0.3)]"
              >
                Download App
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
