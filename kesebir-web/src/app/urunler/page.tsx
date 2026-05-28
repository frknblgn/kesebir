import SiteShell from '@/components/SiteShell';
import PageBanner from '@/components/PageBanner';
import Products from '@/components/Products';

export const metadata = { title: 'Ürünlerimiz · Kesebir Mandıra' };

export default async function UrunlerPage({ searchParams }: { searchParams: Promise<{ cat?: string }> }) {
  const { cat } = await searchParams;
  return (
    <SiteShell>
      <PageBanner eyebrow="Mağaza · Hasat '26" title="Ürünlerimiz" />
      <Products initialCategory={cat ?? 'all'} />
    </SiteShell>
  );
}
