import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          DEFAULT: "#2563EB",
          light: "#60A5FA",
          mid: "#3B82F6",
          dark: "#1D4ED8",
        },
        surface: {
          0: "#F8FAFE",
          1: "#EFF6FF",
          2: "#DBEAFE",
          3: "#FFFFFF",
        },
        text: {
          primary: "#0F172A",
          secondary: "#334155",
          muted: "#64748B",
        },
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #2563EB 0%, #3B82F6 100%)",
        "gradient-brand-light": "linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)",
        "gradient-surface": "linear-gradient(180deg, #EFF6FF 0%, #F8FAFE 100%)",
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "24px",
      },
      boxShadow: {
        "brand": "0 4px 20px rgba(37, 99, 235, 0.3)",
        "brand-lg": "0 8px 40px rgba(37, 99, 235, 0.4)",
        "card": "0 2px 16px rgba(0, 0, 0, 0.05)",
        "card-hover": "0 12px 40px rgba(0, 0, 0, 0.10)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "marquee": "marquee 30s linear infinite",
        "marquee-reverse": "marquee-reverse 35s linear infinite",
        "shimmer": "shimmer 4s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
