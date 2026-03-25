import { Metadata } from 'next';
import SegmentContent from '@/components/pages/SegmentContent';

export const metadata: Metadata = {
  title: 'For Healthcare Providers | Tranquil AI',
  description: 'Tools for clinics and therapists to extend care between sessions.',
};

const benefits = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Between-Session Support",
    desc: "Extend clinical care beyond appointment slots. Sara supports patients between sessions, reducing relapse and improving outcomes."
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "Clinically Informed",
    desc: "Our guardrails and conversation protocols are built alongside clinical frameworks ensuring evidence-based, safe interactions."
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "Patient Insights",
    desc: "Receive anonymized mood and sentiment summaries to help clinicians come better prepared for each consultation."
  }
];

export default function HealthcarePage() {
  return (
    <main className="min-h-screen bg-[#FAFBFD]">
      <SegmentContent
        title={`Extending care
beyond the clinic`}
        description="Tranquil AI partners with therapists and healthcare providers to deliver always-on support between clinical sessions."
        benefitsTitle="Built for clinical environments"
        benefits={benefits}
        howItWorks={[
          { step: "Step 01", title: "Clinician setup", desc: "Onboard in minutes. Add your patients and configure conversation boundaries to match your practice." },
          { step: "Step 02", title: "Patient support", desc: "Patients access Sara between sessions for check-ins, mood logging, and guided coping exercises." },
          { step: "Step 03", title: "Informed sessions", desc: "Receive a pre-session summary of patient sentiment trends so every appointment is better informed." },
        ]}
      />
    </main>
  );
}
