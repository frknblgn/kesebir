'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { ArrowIcon, BagIcon, CloseIcon, MinusIcon, PlusIcon } from './Icons';

const FREE_AT = 1500;

export default function CartPageContent() {
  const { items, updateQty, removeItem } = useCart();

  const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);
  const shipping = subtotal >= FREE_AT ? 0 : 60;
  const remaining = Math.max(0, FREE_AT - subtotal);
  const progress = Math.min(1, subtotal / FREE_AT);

  if (items.length === 0) {
    return (
      <section className="kb-sepet-page">
        <div className="container" style={{ textAlign: 'center', padding: '120px 0' }}>
          <div style={{ width: 64, height: 64, margin: '0 auto 24px', opacity: 0.3 }}><BagIcon /></div>
          <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 36, marginBottom: 16 }}>Sepetiniz boş</h2>
          <p style={{ color: 'var(--olive)', marginBottom: 32 }}>Atölyemizden el yapımı bir lezzet ekleyin.</p>
          <Link href="/urunler" className="btn btn-primary">Ürünleri Keşfet <ArrowIcon /></Link>
        </div>
      </section>
    );
  }

  return (
    <section className="kb-sepet-page">
      <div className="container">
        <div className="kb-sepet-grid">

          <div className="kb-sepet-items">
            {remaining > 0 ? (
              <div className="kb-ship-note" style={{ marginBottom: 24 }}>
                <strong>₺{remaining}</strong> daha ekleyin, soğuk zincir kargo bizden.
              </div>
            ) : (
              <div className="kb-ship-note" style={{ marginBottom: 24 }}>
                <strong>Kargo bizden ✓</strong> Soğuk zincir kapınıza.
              </div>
            )}
            <div className="kb-progress-line" style={{ marginBottom: 32 }}>
              <span style={{ width: `${progress * 100}%` }} />
            </div>

            {items.map(it => (
              <div className="kb-sepet-item" key={it.key}>
                <div className={`kb-cart-thumb ph${it.ph ? ` ${it.ph}` : ''}`} style={{ width: 90, height: 90, flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <h3 className="kb-cart-name">{it.name}</h3>
                  <div className="kb-cart-variant">{it.weight} · El Yapımı</div>
                  <div className="kb-stepper" style={{ marginTop: 12 }}>
                    <button onClick={() => updateQty(it.key, -1)} aria-label="Azalt"><MinusIcon /></button>
                    <span className="qty">{it.qty}</span>
                    <button onClick={() => updateQty(it.key, 1)} aria-label="Arttır"><PlusIcon /></button>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8 }}>
                  <button className="kb-cart-remove" onClick={() => removeItem(it.key)} aria-label="Kaldır"><CloseIcon /></button>
                  <span className="kb-cart-price">₺{it.price * it.qty}</span>
                </div>
              </div>
            ))}

            <div style={{ marginTop: 24 }}>
              <Link href="/urunler" style={{ fontSize: 13, color: 'var(--olive)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                ← Alışverişe Devam Et
              </Link>
            </div>
          </div>

          <div className="kb-sepet-summary">
            <h3 className="kb-sepet-summary-h">Sipariş Özeti</h3>

            <div className="kb-cart-row"><span className="label">Ara Toplam</span><span className="v">₺{subtotal}</span></div>
            <div className="kb-cart-row">
              <span className="label">Soğuk Zincir Kargo</span>
              <span className="v" style={{ color: 'var(--olive)' }}>{shipping === 0 ? 'Ücretsiz' : `₺${shipping}`}</span>
            </div>
            <div className="kb-cart-row total"><span className="label">Toplam</span><span className="v big">₺{subtotal + shipping}</span></div>

            <div className="kb-cart-trust" style={{ margin: '20px 0' }}>
              <div className="kb-trust-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3l8 4v6c0 4.5-3.4 8.4-8 9-4.6-.6-8-4.5-8-9V7l8-4z" /><path d="M9 12.5l2 2 4-4.5" />
                </svg>
                SSL Güvenli
              </div>
              <div className="kb-trust-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
                </svg>
                48 Saat Teslimat
              </div>
            </div>

            <Link href="/odeme" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Ödemeye Geç <ArrowIcon />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
