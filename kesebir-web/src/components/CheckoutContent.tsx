'use client';

import { FormEvent, useState } from 'react';
import { useCart } from '@/context/CartContext';
import { ArrowIcon } from './Icons';

const FREE_AT = 1500;

export default function CheckoutContent() {
  const { items } = useCart();
  const [step, setStep] = useState<'form' | 'success'>('form');

  const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);
  const shipping = subtotal >= FREE_AT ? 0 : 60;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStep('success');
  };

  if (step === 'success') {
    return (
      <section className="kb-odeme">
        <div className="container" style={{ textAlign: 'center', padding: '100px 0' }}>
          <div style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 64, color: 'var(--olive)', marginBottom: 24 }}>✓</div>
          <h2 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 40, marginBottom: 16 }}>Siparişiniz Alındı</h2>
          <p style={{ color: 'var(--olive)', maxWidth: 480, margin: '0 auto' }}>
            Teşekkürler! Siparişiniz hazırlanmaya başlanmıştır. 48 saat içinde soğuk zincirle kapınıza ulaşacak.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="kb-odeme">
      <div className="container">
        <div className="kb-odeme-grid">

          <form className="kb-odeme-form" onSubmit={handleSubmit}>
            <h3 className="kb-odeme-section-h">Teslimat Bilgileri</h3>

            <div className="kb-form-row">
              <div className="kb-form-group">
                <label className="kb-form-label">Ad</label>
                <input className="kb-form-input" type="text" placeholder="Adınız" required />
              </div>
              <div className="kb-form-group">
                <label className="kb-form-label">Soyad</label>
                <input className="kb-form-input" type="text" placeholder="Soyadınız" required />
              </div>
            </div>

            <div className="kb-form-row">
              <div className="kb-form-group">
                <label className="kb-form-label">E-posta</label>
                <input className="kb-form-input" type="email" placeholder="ornek@email.com" required />
              </div>
              <div className="kb-form-group">
                <label className="kb-form-label">Telefon</label>
                <input className="kb-form-input" type="tel" placeholder="0(5XX) XXX XX XX" required />
              </div>
            </div>

            <div className="kb-form-group">
              <label className="kb-form-label">Adres</label>
              <textarea className="kb-form-input kb-form-textarea" placeholder="Sokak, cadde, mahalle…" required rows={3} />
            </div>

            <div className="kb-form-row">
              <div className="kb-form-group">
                <label className="kb-form-label">İlçe</label>
                <input className="kb-form-input" type="text" placeholder="İlçe" required />
              </div>
              <div className="kb-form-group">
                <label className="kb-form-label">Şehir</label>
                <input className="kb-form-input" type="text" placeholder="Şehir" required />
              </div>
            </div>

            <div className="kb-form-group">
              <label className="kb-form-label">Sipariş Notu (opsiyonel)</label>
              <input className="kb-form-input" type="text" placeholder="Özel bir isteğiniz varsa…" />
            </div>

            <div className="kb-odeme-iyzico-note">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3l8 4v6c0 4.5-3.4 8.4-8 9-4.6-.6-8-4.5-8-9V7l8-4z" />
              </svg>
              Ödeme altyapısı yakında iyzico ile entegre edilecektir.
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}>
              Siparişi Tamamla <ArrowIcon />
            </button>
          </form>

          <div className="kb-odeme-summary">
            <h3 className="kb-sepet-summary-h">Sipariş Özeti</h3>
            {items.map(it => (
              <div key={it.key} className="kb-odeme-item">
                <span>{it.name} <span className="mono" style={{ fontSize: 10, color: 'var(--olive)' }}>×{it.qty}</span></span>
                <span>₺{it.price * it.qty}</span>
              </div>
            ))}
            <div style={{ borderTop: '1px solid var(--stone)', marginTop: 16, paddingTop: 16 }}>
              <div className="kb-cart-row"><span className="label">Ara Toplam</span><span className="v">₺{subtotal}</span></div>
              <div className="kb-cart-row">
                <span className="label">Kargo</span>
                <span className="v" style={{ color: 'var(--olive)' }}>{shipping === 0 ? 'Ücretsiz' : `₺${shipping}`}</span>
              </div>
              <div className="kb-cart-row total"><span className="label">Toplam</span><span className="v big">₺{subtotal + shipping}</span></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
