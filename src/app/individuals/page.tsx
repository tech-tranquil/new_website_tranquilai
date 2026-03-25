import { Metadata } from 'next';
import SegmentContent from '@/components/pages/SegmentContent';

export const metadata: Metadata = {
  title: 'For Individuals | Tranquil AI',
  description: 'Personal mental health support for anyone seeking emotional wellness.',
};

const benefits = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    ),
    title: "Always Available",
    desc: "Access instant emotional support 24/7. Tranquil AI is ready whenever you need someone to talk to, no appointments needed."
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "Guided Journaling",
    desc: "Process your thoughts through structured, AI-guided journaling sessions designed to uncover patterns and build self-awareness."
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "Mood Tracking",
    desc: "Keep a daily log of your emotional state and visualize your progress over time with intelligent wellness reports."
  }
];

export default function IndividualsPage() {
  return (
    <main className="min-h-screen bg-[#FAFBFD]">
      <SegmentContent 
        title={`Personal support,
tailored for you`}
        description="Talk to Sara, journal your thoughts, and build resilience at your own pace without judgment or waiting lists."
        benefitsTitle="Why individuals choose Tranquil AI"
        benefits={benefits}
        howItWorks={[
          { step: "Step 01", title: "Download the app", desc: "Get started for free on iOS or Android. Setup takes less than 60 seconds." },
          { step: "Step 02", title: "Talk to Sara", desc: "Start a conversation anytime. Sara listens, learns, and adapts to your unique emotional patterns." },
          { step: "Step 03", title: "Build resilience", desc: "Track your mood, revisit insights, and watch your emotional wellness grow week over week." },
        ]}
      />
    </main>
  );
}
