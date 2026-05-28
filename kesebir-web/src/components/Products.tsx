'use client';

import { useMemo, useState } from 'react';
import { CATEGORIES, PRODUCTS } from '@/lib/data';
import ProductCard from './ProductCard';

export default function Products() {
  const [cat, setCat] = useState('all');
  const filtered = useMemo(
    () => (cat === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === cat)),
    [cat],
  );

  return (
    <section id="urunler" className="kb-products">
      <div className="container">
        <div className="kb-prod-head">
          <div>
            <div className="kb-prod-eye">Mağaza · Hasat &apos;26</div>
            <h2 className="kb-prod-h2" style={{ marginTop: 14 }}>
              Atölyeden,<br /><em>elden teslim.</em>
            </h2>
          </div>
          <div />
          <p className="kb-prod-desc">
            Her ürün haftalık olarak üretilir, sipariş geldiğinde paketlenir. Üretim sayımız
            sınırlıdır; stoğumuz, mevsime ve sütümüze göre değişir.
          </p>
        </div>

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

        {/* key on container forces remount → replays kbFadeIn animation */}
        <div className="kb-grid" key={cat}>
          {filtered.map((p, i) => (
            <div key={p.id} style={{ animationDelay: `${i * 60}ms` }}>
              <ProductCard p={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
