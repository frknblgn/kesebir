import SiteShell from '@/components/SiteShell';
import PageBanner from '@/components/PageBanner';
import CheckoutContent from '@/components/CheckoutContent';

export const metadata = { title: 'Ödeme · Kesebir Mandıra' };

export default function OdemePage() {
  return (
    <SiteShell>
      <PageBanner eyebrow="Son Adım" title="Ödeme" />
      <CheckoutContent />
    </SiteShell>
  );
}
