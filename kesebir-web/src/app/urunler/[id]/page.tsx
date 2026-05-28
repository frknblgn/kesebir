import { notFound } from 'next/navigation';
import SiteShell from '@/components/SiteShell';
import PageBanner from '@/components/PageBanner';
import ProductDetail from '@/components/ProductDetail';
import { PRODUCTS } from '@/lib/data';

export async function generateStaticParams() {
  return PRODUCTS.map(p => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return {};
  return { title: `${product.name} · Kesebir Mandıra` };
}

export default async function UrunDetayPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) notFound();

  return (
    <SiteShell>
      <PageBanner eyebrow={`№ ${product.n} · ${product.sub}`} title={product.name} />
      <ProductDetail p={product} />
    </SiteShell>
  );
}
