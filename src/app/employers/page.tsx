import { Metadata } from 'next';
import EmployersContent from '@/components/pages/EmployersContent';

export const metadata: Metadata = {
  title: 'For Employers | Tranquil AI',
  description: 'Workplace wellness solutions that support employee mental health.',
};

export default function EmployersPage() {
  return (
    <main className="min-h-screen bg-[#FAFBFD]">
      <EmployersContent />
    </main>
  );
}
