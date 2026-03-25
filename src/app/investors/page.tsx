import { Metadata } from "next";
import ParticleBackground from "@/components/ParticleBackground";
import InvestorsContent from "@/components/pages/InvestorsContent";

export const metadata: Metadata = {
  title: "Investors — Tranquil AI",
  description:
    "Tranquil AI is scaling emotional wellness. Learn about our vision, market opportunity, and metrics for investors, VCs, and funders.",
};

export default function InvestorsPage() {
  return (
    <main className="min-h-screen gradient-mesh">
      <ParticleBackground />
      <InvestorsContent />
    </main>
  );
}
