import ParticleBackground from "@/components/ParticleBackground";
import Hero from "@/components/Hero";
import WhoWeServePreview from "@/components/WhoWeServePreview";
import Features from "@/components/Features";
import CredibilityStats from "@/components/CredibilityStats";
import InvestorsPreview from "@/components/InvestorsPreview";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFE]">
      <ParticleBackground />
      <Hero />
      <WhoWeServePreview />
      <Features />
      <CredibilityStats />
      <InvestorsPreview />
      <Testimonials />
    </main>
  );
}
