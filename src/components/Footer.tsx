"use client";

import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/who-we-serve", label: "Who We Serve" },
  { href: "/features", label: "Features" },
  { href: "/about", label: "About" },
  { href: "/team", label: "The Team" },
  { href: "/investors", label: "Investors" },
  { href: "/download", label: "Download" },
];

const socialLinks = [
  {
    href: "https://instagram.com/tranquil_ai",
    label: "Instagram",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c.796 0 1.441.645 1.441 1.44s-.645 1.44-1.441 1.44c-.795 0-1.439-.645-1.439-1.44s.644-1.44 1.439-1.44z" />
      </svg>
    )
  },
  {
    href: "https://www.linkedin.com/company/tranquilai01",
    label: "LinkedIn",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    )
  },
  {
    href: "https://x.com/tranquil_labs",
    label: "Twitter",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    )
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0B1120] border-t border-slate-800/60">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="group flex items-center gap-2.5 mb-4">
              <img
                src="/logo.png"
                alt="Tranquil AI Logo"
                className="w-8 h-8 object-contain"
              />
              <span className="font-heading text-xl font-bold text-white tracking-tight">
                Tranquil AI
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              AI-powered mental wellness companion helping people talk, reflect, and grow emotionally.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-9 h-9 rounded-xl bg-slate-800/40 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-[#60A5FA] hover:bg-[#3B82F6]/10 hover:border-[#3B82F6]/30 transition-all duration-300 shadow-sm group/social"
                >
                  <div className="group-hover/social:scale-110 transition-transform duration-300">
                    {link.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-5 uppercase tracking-[0.1em]">Navigation</h4>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-[#60A5FA] transition-colors text-[13px]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-5 uppercase tracking-[0.1em]">Company</h4>
            <p className="text-slate-400 text-[13px] leading-relaxed">Tranquil Labs Private Limited</p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-[#1E3A8A] bg-[#1E3A8A]/20 px-3 py-1.5 text-[11px] font-medium text-[#60A5FA]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] shadow-[0_0_6px_rgba(34,197,94,0.3)]" />
              Actively growing
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-5 uppercase tracking-[0.1em]">Connect</h4>
            <div className="space-y-2.5">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-slate-400 hover:text-[#60A5FA] transition-colors text-[13px]"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href="mailto:support@tranquilai.in"
              className="block text-slate-400 hover:text-[#60A5FA] transition-colors text-[13px] mt-2.5"
            >
              support@tranquilai.in
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-slate-800/60 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-[11px]">
            © 2026 Tranquil AI. All rights reserved.
          </p>
          <p className="text-slate-500 text-[11px]">
            Made with care for mental wellness
          </p>
        </div>
      </div>
    </footer>
  );
}
