import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tranquil AI — Your AI Companion for Mental Wellness",
  description:
    "Tranquil AI is an intelligent mental health companion designed to help people navigate emotions, build resilience, and feel understood — anytime, anywhere.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable}`}>
      <body
        className="font-sans antialiased"
        style={{ background: "#F8FAFE", color: "#0F172A" }}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
