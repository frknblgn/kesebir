'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import type { Product } from '@/lib/data';
import { ArrowIcon, StarIcon } from './Icons';

export default function ProductDetail({ p }: { p: Product }) {
  const { addItem } = useCart();
  const [variant, setVariant] = useState(p.variants[0].w);
  const selected = p.variants.find(v => v.w === variant) ?? p.variants[0];
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(p, selected);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="kb-detail">
      <div className="container">
        <div className="kb-detail-grid">
          <div className={`kb-detail-img ph${p.ph ? ` ${p.ph}` : ''}`}>
            <span className="ph-label">{p.phLabel}</span>
            <div className="kb-card-num mono">№ {p.n}</div>
            <div className="kb-card-badges">
              {p.badges.map(b => <span key={b} className="kb-badge">{b}</span>)}
            </div>
          </div>

          <div className="kb-detail-body">
            <div className="kb-detail-rating">
              <StarIcon style={{ color: 'var(--olive)' }} />
              <span>{p.rating.toFixed(1)}</span>
              <span style={{ opacity: 0.5 }}>· {p.reviews} değerlendirme</span>
            </div>

            <h2 className="kb-detail-h2">{p.name}</h2>
            <p className="kb-detail-sub">{p.sub}</p>
            <p className="kb-detail-desc">{p.description}</p>

            <div className="kb-detail-pairing">
              <span className="mono" style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--olive)', display: 'block', marginBottom: 8 }}>
                Eşleşme Önerisi
              </span>
              <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 20, fontStyle: 'italic', color: 'var(--navy)' }}>
                {p.pairing}
              </p>
            </div>

            <div className="kb-detail-variants">
              <span className="mono" style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--olive)', display: 'block', marginBottom: 12 }}>
                Gramaj Seçin
              </span>
              <div style={{ display: 'flex', gap: 8 }}>
                {p.variants.map(v => (
                  <button
                    key={v.w}
                    className={`kb-variant-lg${variant === v.w ? ' active' : ''}`}
                    onClick={() => setVariant(v.w)}
                  >
                    <span>{v.w}</span>
                    <span>₺{v.price}</span>
                  </button>
                ))}
              </div>
            </div>

            <button className="kb-detail-add" onClick={handleAdd}>
              {added ? 'Sepete Eklendi ✓' : <><span>Sepete Ekle</span><span className="kb-add-price">₺{selected.price}</span></>}
              {!added && <ArrowIcon />}
            </button>

            <div className="kb-detail-trust">
              <div className="kb-trust-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3l8 4v6c0 4.5-3.4 8.4-8 9-4.6-.6-8-4.5-8-9V7l8-4z" /><path d="M9 12.5l2 2 4-4.5" />
                </svg>
                ISO 22000 Sertifikalı
              </div>
              <div className="kb-trust-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8l9-5 9 5v8l-9 5-9-5V8z" /><path d="M3 8l9 5 9-5M12 13v9" />
                </svg>
                Soğuk Zincir
              </div>
              <div className="kb-trust-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
                </svg>
                48 Saatte Kapınızda
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
