'use client';

import { useMemo, useState } from 'react';
import { CATEGORIES, PRODUCTS } from '@/lib/data';
import ProductCard from './ProductCard';

export default function Products({ initialCategory = 'all' }: { initialCategory?: string }) {
  const [cat, setCat] = useState(initialCategory);
  const filtered = useMemo(
    () => (cat === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === cat)),
    [cat],
  );

  return (
    <section id="urunler" className="kb-products">
      <div className="container">
        <div className="kb-chips">
          {CATEGORIES.map(c => (
            <button
              key={c.id}
              className={`kb-chip${cat === c.id ? ' active' : ''}`}
              onClick={() => setCat(c.id)}
            >
              {c.label}
            </button>
          ))}
          <span className="kb-chip-count">{filtered.length} ürün gösteriliyor</span>
        </div>

        <div className="kb-grid" key={cat}>
          {filtered.length === 0 ? (
            <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '80px 0', color: 'var(--stone)' }}>
              <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 22, fontStyle: 'italic' }}>Bu kategori yakında geliyor.</p>
            </div>
          ) : filtered.map((p, i) => (
            <div key={p.id} style={{ animationDelay: `${i * 60}ms` }}>
              <ProductCard p={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
