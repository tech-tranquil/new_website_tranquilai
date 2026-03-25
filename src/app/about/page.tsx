import { Metadata } from "next";
import ParticleBackground from "@/components/ParticleBackground";
import AboutContent from "@/components/pages/AboutContent";


export const metadata: Metadata = {
  title: "About — Tranquil AI",
  description:
    "Tranquil AI was built by students from VIT Vellore with a mission to make mental health support accessible to everyone.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen gradient-mesh">
      <ParticleBackground />
      <AboutContent />

    </main>
  );
}
