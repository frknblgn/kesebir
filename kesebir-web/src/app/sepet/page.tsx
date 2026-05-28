import SiteShell from '@/components/SiteShell';
import PageBanner from '@/components/PageBanner';
import CartPageContent from '@/components/CartPageContent';

export const metadata = { title: 'Sepetim · Kesebir Mandıra' };

export default function SepetPage() {
  return (
    <SiteShell>
      <PageBanner eyebrow="Alışveriş" title="Sepetim" />
      <CartPageContent />
    </SiteShell>
  );
}
