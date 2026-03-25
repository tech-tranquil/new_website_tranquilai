import { Metadata } from "next";
import ParticleBackground from "@/components/ParticleBackground";
import WhoWeServeContent from "@/components/pages/WhoWeServeContent";


export const metadata: Metadata = {
  title: "Who We Serve — Tranquil AI",
  description:
    "Tranquil AI serves individuals, employers, universities, and organizations with tailored mental wellness solutions. Discover how we support B2B and B2C needs.",
};

export default function WhoWeServePage() {
  return (
    <main className="min-h-screen gradient-mesh">
      <ParticleBackground />
      <WhoWeServeContent />

    </main>
  );
}
