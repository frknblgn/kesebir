'use client';

import { useCart } from '@/context/CartContext';
import { ArrowIcon, BagIcon, CloseIcon, MinusIcon, PlusIcon } from './Icons';

const FREE_AT = 1500;

export default function Cart() {
  const { items, cartOpen, closeCart, updateQty, removeItem } = useCart();

  const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);
  const remaining = Math.max(0, FREE_AT - subtotal);
  const progress = Math.min(1, subtotal / FREE_AT);
  const count = items.reduce((s, it) => s + it.qty, 0);

  return (
    <>
      <div className={`kb-cart-backdrop${cartOpen ? ' open' : ''}`} onClick={closeCart} />

      <aside className={`kb-cart${cartOpen ? ' open' : ''}`} aria-hidden={!cartOpen}>
        <div className="kb-cart-head">
          <div>
            <div className="sub">Sepetiniz</div>
            <h3>{count > 0 ? `${count} ürün` : 'Sepet boş'}</h3>
          </div>
          <button className="kb-icon-btn" aria-label="Kapat" onClick={closeCart} style={{ width: 40, height: 40 }}>
            <CloseIcon />
          </button>
        </div>

        <div className="kb-cart-body">
          {items.length === 0 ? (
            <div className="kb-cart-empty">
              <div className="kb-cart-empty-mark"><BagIcon /></div>
              <h4>Sepetiniz boş</h4>
              <p>
                Atölyemizden el yapımı bir peyniri sepetinize ekleyin; soğuk zincirle 48
                saatte kapınıza gelsin.
              </p>
              <button className="btn btn-outline" onClick={closeCart}>
                Ürünleri Keşfet <ArrowIcon />
              </button>
            </div>
          ) : (
            items.map(it => (
              <div className="kb-cart-item" key={it.key}>
                <div className={`kb-cart-thumb ph${it.ph ? ` ${it.ph}` : ''}`} />
                <div>
                  <h4 className="kb-cart-name">{it.name}</h4>
                  <div className="kb-cart-variant">{it.weight} · El Yapımı</div>
                  <div className="kb-stepper">
                    <button onClick={() => updateQty(it.key, -1)} aria-label="Azalt"><MinusIcon /></button>
                    <span className="qty">{it.qty}</span>
                    <button onClick={() => updateQty(it.key, 1)} aria-label="Arttır"><PlusIcon /></button>
                  </div>
                </div>
                <div className="kb-cart-right">
                  <button className="kb-cart-remove" onClick={() => removeItem(it.key)} aria-label="Kaldır">
                    <CloseIcon />
                  </button>
                  <span className="kb-cart-price">₺{it.price * it.qty}</span>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="kb-cart-foot">
            {remaining > 0 ? (
              <div className="kb-ship-note">
                <strong>₺{remaining}</strong> daha ekleyin, soğuk zincir kargo bizden.
              </div>
            ) : (
              <div className="kb-ship-note">
                <strong>Kargo bizden ✓</strong> Soğuk zincir kapınıza.
              </div>
            )}
            <div className="kb-progress-line">
              <span style={{ width: `${progress * 100}%` }} />
            </div>

            <div className="kb-cart-trust">
              <div className="kb-trust-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v6M9 5l3-3 3 3M5 12h14M3 16h18M7 20h10" />
                </svg>
                Soğuk Zincir
              </div>
              <div className="kb-trust-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8l9-5 9 5v8l-9 5-9-5V8z" />
                  <path d="M3 8l9 5 9-5M12 13v9" />
                </svg>
                İzoleli Kutu
              </div>
              <div className="kb-trust-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
                48 Saat
              </div>
            </div>

            <div className="kb-cart-row">
              <span className="label">Ara Toplam</span>
              <span className="v">₺{subtotal}</span>
            </div>
            <div className="kb-cart-row">
              <span className="label">Soğuk Zincir Kargo</span>
              <span className="v" style={{ color: 'var(--olive)' }}>
                {remaining > 0 ? '₺60' : 'Ücretsiz'}
              </span>
            </div>
            <div className="kb-cart-row total">
              <span className="label">Toplam</span>
              <span className="v big">₺{subtotal + (remaining > 0 ? 60 : 0)}</span>
            </div>

            <div className="kb-cart-cta">
              <button className="btn btn-outline" onClick={closeCart}>Sepete Git</button>
              <button className="btn btn-primary">Ödemeye Geç <ArrowIcon /></button>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
