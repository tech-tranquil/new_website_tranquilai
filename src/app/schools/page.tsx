import { Metadata } from 'next';
import SegmentContent from '@/components/pages/SegmentContent';

export const metadata: Metadata = {
  title: 'For Schools & K-12 | Tranquil AI',
  description: 'Youth mental wellness support designed for younger users.',
};

const benefits = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Safe for Young Minds",
    desc: "Age-appropriate conversations with strict safety guardrails, vetted by child development experts for every age group."
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    title: "Emotionally Engaging",
    desc: "Fun, relatable interactions using language and scenarios grounded in school life, friendships, and growing up."
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Counselor Dashboard",
    desc: "School counselors get a bird's-eye view of peer wellbeing trends to intervene early before issues escalate."
  }
];

export default function SchoolsPage() {
  return (
    <main className="min-h-screen bg-[#FAFBFD]">
      <SegmentContent
        title={`Nurturing young minds
at every stage`}
        description="Youth-first mental wellness support that is safe, age-appropriate, and designed for the real challenges students face."
        benefitsTitle="Designed for schools & K-12"
        benefits={benefits}
        howItWorks={[
          { step: "Step 01", title: "School partnership", desc: "We partner with schools to deploy a fully managed, age-gated version of Tranquil AI on campus." },
          { step: "Step 02", title: "Student engagement", desc: "Students interact with Sara through fun, non-clinical conversations that feel familiar, not clinical." },
          { step: "Step 03", title: "Counselor oversight", desc: "School counselors get aggregate trend data, with crisis escalation alerts when a student needs help." },
        ]}
      />
    </main>
  );
}
