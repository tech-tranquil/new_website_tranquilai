import { Metadata } from "next";
import ParticleBackground from "@/components/ParticleBackground";
import FeaturesContent from "@/components/pages/FeaturesContent";


export const metadata: Metadata = {
  title: "Features — Tranquil AI",
  description:
    "Explore Tranquil AI's features: AI companion Sara, journaling, mood logging, breathing exercises, meditation, and sleep audio for complete mental wellness.",
};

export default function FeaturesPage() {
  return (
    <main className="min-h-screen gradient-mesh">
      <ParticleBackground />
      <FeaturesContent />

    </main>
  );
}
