import { Metadata } from 'next';
import IntegrationsContent from '@/components/pages/IntegrationsContent';

export const metadata: Metadata = {
  title: 'API & Integrations | Tranquil AI',
  description: 'Embed Tranquil AI into your platform with our powerful API.',
};

export default function IntegrationsPage() {
  return (
    <main className="min-h-screen bg-[#FAFBFD]">
      <IntegrationsContent />
    </main>
  );
}
