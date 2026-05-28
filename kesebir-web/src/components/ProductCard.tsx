'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import type { Product } from '@/lib/data';
import { StarIcon } from './Icons';

export default function ProductCard({ p }: { p: Product }) {
  const { addItem } = useCart();
  const [variant, setVariant] = useState(p.variants[0].w);
  const selected = p.variants.find(v => v.w === variant) ?? p.variants[0];

  return (
    <article className="kb-card">
      <div className={`kb-card-img ph${p.ph ? ` ${p.ph}` : ''}`}>
        <span className="ph-label">{p.phLabel}</span>
        <div className="kb-card-num mono">№ {p.n}</div>
        <div className="kb-card-badges">
          {p.badges.map(b => (
            <span key={b} className="kb-badge">{b}</span>
          ))}
        </div>

        <div className="kb-card-pairing">
          <span className="mono" style={{ color: 'var(--stone)', marginBottom: 6 }}>Eşleşme</span>
          <span style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 18, fontStyle: 'italic', color: 'var(--cream)', letterSpacing: '0.01em', lineHeight: 1.3 }}>
            {p.pairing}
          </span>
        </div>

        <div className="kb-card-action">
          <div className="kb-variants" onClick={e => e.stopPropagation()}>
            {p.variants.map(v => (
              <button
                key={v.w}
                className={`kb-variant${variant === v.w ? ' active' : ''}`}
                onClick={e => { e.preventDefault(); setVariant(v.w); }}
              >
                {v.w}
              </button>
            ))}
          </div>
          <button
            className="kb-add"
            onClick={e => { e.preventDefault(); e.stopPropagation(); addItem(p, selected); }}
          >
            <span>Sepete Ekle</span>
            <span className="kb-add-price">₺{selected.price}</span>
          </button>
        </div>
      </div>

      <div className="kb-card-meta">
        <div className="kb-card-head">
          <div>
            <h3 className="kb-card-name">{p.name}</h3>
            <p className="kb-card-sub">{p.sub}</p>
          </div>
          <div className="kb-card-rating">
            <StarIcon style={{ color: 'var(--olive)' }} />
            <span>{p.rating.toFixed(1)}</span>
            <span style={{ opacity: 0.5 }}>· {p.reviews}</span>
          </div>
        </div>
        <div className="kb-card-foot">
          <span className="mono" style={{ color: 'var(--olive)' }}>
            {p.variants.map(v => v.w).join(' · ')}
          </span>
          <span className="kb-card-price">
            ₺{p.variants[0].price}
            <span style={{ opacity: 0.5 }}> – ₺{p.variants[p.variants.length - 1].price}</span>
          </span>
        </div>
      </div>
    </article>
  );
}
