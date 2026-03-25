import { Metadata } from "next";
import ParticleBackground from "@/components/ParticleBackground";
import TeamContent from "@/components/pages/TeamContent";


export const metadata: Metadata = {
  title: "The Team — Tranquil AI",
  description:
    "Meet the team behind Tranquil AI — students from VIT Vellore building accessible mental wellness support for everyone.",
};

export default function TeamPage() {
  return (
    <main className="min-h-screen gradient-mesh">
      <ParticleBackground />
      <TeamContent />

    </main>
  );
}
