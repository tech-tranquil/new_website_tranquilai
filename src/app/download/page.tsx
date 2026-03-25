import { Metadata } from "next";
import ParticleBackground from "@/components/ParticleBackground";
import DownloadContent from "@/components/pages/DownloadContent";

export const metadata: Metadata = {
  title: "Download — Tranquil AI",
  description:
    "Download Tranquil AI for iOS and Android. Your AI mental health companion for 24/7 emotional support, journaling, and mindfulness.",
};

export default function DownloadPage() {
  return (
    <main className="min-h-screen gradient-mesh">
      <ParticleBackground />
      <DownloadContent />
    </main>
  );
}
