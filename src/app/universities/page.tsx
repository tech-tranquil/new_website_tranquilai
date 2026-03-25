import { Metadata } from 'next';
import SegmentContent from '@/components/pages/SegmentContent';

export const metadata: Metadata = {
  title: 'For Universities | Tranquil AI',
  description: 'Campus mental health resources for students. 24/7 support.',
};

const benefits = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    title: "Student-Centric Care",
    desc: "Address the specific pressures of academic life, from assignment stress and homesickness to career anxiety."
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Safe & Anonymized",
    desc: "Offer students a judgement-free space to speak freely, ensuring privacy while delivering aggregate campus insights."
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "Scale Campus Resources",
    desc: "Act as a first-line of support to reduce the burden on university counseling centers and eliminate student wait times."
  }
];

export default function UniversitiesPage() {
  return (
    <main className="min-h-screen bg-[#FAFBFD]">
      <SegmentContent 
        title={`Mental wellness for
the modern campus`}
        description="Provide every student with 24/7 support for stress, anxiety, and the unique challenges of student life."
        benefitsTitle="Empowering university students"
        benefits={benefits}
        howItWorks={[
          { step: "Step 01", title: "Institution onboarding", desc: "We set up a branded, university-specific deployment in days — no engineering required." },
          { step: "Step 02", title: "Students get access", desc: "Students sign up via their college email. No personal data shared with the institution." },
          { step: "Step 03", title: "Campus insights", desc: "Admins receive anonymized aggregate wellbeing data to guide campus mental health strategy." },
        ]}
      />
    </main>
  );
}
