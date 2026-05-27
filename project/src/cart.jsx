// Slide-in cart drawer with quantity stepper, free-shipping progress, trust strip.
function Cart({ open, items, onClose, onQty, onRemove }) {
  const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);
  const FREE_AT = 1500;
  const remaining = Math.max(0, FREE_AT - subtotal);
  const progress = Math.min(1, subtotal / FREE_AT);
  const count = items.reduce((s, it) => s + it.qty, 0);

  return (
    <>
      <style>{`
        .kb-cart-backdrop {
          position: fixed; inset: 0; z-index: 80;
          background: rgba(22,37,44,0.45);
          backdrop-filter: blur(4px);
          opacity: 0; pointer-events: none;
          transition: opacity 420ms;
        }
        .kb-cart-backdrop.open { opacity: 1; pointer-events: auto; }

        .kb-cart {
          position: fixed; top: 0; right: 0; bottom: 0; z-index: 90;
          width: min(480px, 100vw);
          background: var(--cream);
          color: var(--navy);
          transform: translateX(100%);
          transition: transform 520ms;
          display: flex; flex-direction: column;
          border-left: 1px solid var(--stone);
        }
        .kb-cart.open { transform: translateX(0); }

        .kb-cart-head {
          padding: 26px 28px;
          display: flex; align-items: center; justify-content: space-between;
          border-bottom: 1px solid var(--stone);
        }
        .kb-cart-head h3 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 28px;
          letter-spacing: 0.005em;
          margin: 0;
        }
        .kb-cart-head .sub {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase;
          color: var(--olive);
        }

        .kb-cart-body {
          flex: 1;
          overflow-y: auto;
        }

        .kb-cart-empty {
          padding: 80px 28px;
          text-align: center;
          color: var(--navy);
        }
        .kb-cart-empty-mark {
          width: 72px; height: 72px;
          border: 1px solid var(--stone);
          border-radius: 50%;
          display: inline-flex; align-items: center; justify-content: center;
          color: var(--olive);
          margin-bottom: 22px;
        }
        .kb-cart-empty h4 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 28px;
          margin: 0 0 10px;
        }
        .kb-cart-empty p {
          font-size: 14px;
          color: var(--olive);
          margin: 0 0 26px;
          max-width: 320px;
          margin-left: auto; margin-right: auto;
          line-height: 1.7;
        }

        .kb-cart-item {
          display: grid;
          grid-template-columns: 80px 1fr auto;
          gap: 18px;
          padding: 22px 28px;
          border-bottom: 1px solid var(--cream-soft);
          align-items: start;
        }
        .kb-cart-thumb {
          aspect-ratio: 1;
          border-radius: 2px;
          border: 1px solid var(--stone);
          overflow: hidden;
        }
        .kb-cart-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 20px;
          margin: 0 0 4px;
          line-height: 1.2;
        }
        .kb-cart-variant {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase;
          color: var(--olive);
          margin-bottom: 14px;
        }
        .kb-stepper {
          display: inline-flex; align-items: center;
          border: 1px solid var(--stone);
          border-radius: 2px;
        }
        .kb-stepper button {
          width: 30px; height: 30px;
          display: inline-flex; align-items: center; justify-content: center;
          color: var(--navy);
          transition: background 320ms;
        }
        .kb-stepper button:hover { background: var(--cream-soft); }
        .kb-stepper .qty {
          min-width: 28px;
          text-align: center;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
        }
        .kb-cart-right {
          text-align: right;
          display: flex; flex-direction: column; gap: 12px;
          align-items: flex-end;
        }
        .kb-cart-price {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
        }
        .kb-cart-remove {
          width: 24px; height: 24px;
          display: inline-flex; align-items: center; justify-content: center;
          color: var(--olive);
          opacity: 0.6;
          transition: opacity 320ms, color 320ms;
        }
        .kb-cart-remove:hover { opacity: 1; color: var(--navy); }

        .kb-cart-foot {
          border-top: 1px solid var(--stone);
          padding: 22px 28px 24px;
          background: var(--cream);
        }
        .kb-progress-line {
          height: 4px; background: var(--cream-soft);
          border-radius: 999px; overflow: hidden;
          margin: 10px 0 16px;
        }
        .kb-progress-line span {
          display: block; height: 100%;
          background: var(--olive);
          transition: width 520ms;
        }
        .kb-cart-trust {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          margin: 16px 0 18px;
        }
        .kb-trust-item {
          padding: 10px 8px;
          border: 1px solid var(--stone);
          border-radius: 2px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px; letter-spacing: 0.14em; text-transform: uppercase;
          text-align: center;
          color: var(--olive);
          display: flex; flex-direction: column; gap: 4px;
          align-items: center;
        }
        .kb-trust-item svg { color: var(--navy); }

        .kb-cart-row {
          display: flex; justify-content: space-between; align-items: baseline;
          padding: 8px 0;
        }
        .kb-cart-row.total {
          padding-top: 14px;
          border-top: 1px solid var(--stone);
        }
        .kb-cart-row .label {
          font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--olive);
        }
        .kb-cart-row .v {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
        }
        .kb-cart-row .v.big {
          font-size: 30px;
        }
        .kb-cart-cta {
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: 8px;
          margin-top: 16px;
        }

        .kb-ship-note {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 16px;
          color: var(--navy);
        }
        .kb-ship-note strong { color: var(--olive); font-style: normal; font-weight: 500; }
      `}</style>

      <div className={"kb-cart-backdrop " + (open ? "open" : "")} onClick={onClose}></div>

      <aside className={"kb-cart " + (open ? "open" : "")} aria-hidden={!open}>
        <div className="kb-cart-head">
          <div>
            <div className="sub">Sepetiniz</div>
            <h3>{count > 0 ? `${count} ürün` : "Sepet boş"}</h3>
          </div>
          <button className="kb-icon-btn" aria-label="Kapat" onClick={onClose} style={{ width: 40, height: 40 }}>
            <window.Icon.close />
          </button>
        </div>

        <div className="kb-cart-body">
          {items.length === 0 ? (
            <div className="kb-cart-empty">
              <div className="kb-cart-empty-mark"><window.Icon.bag /></div>
              <h4>Sepetiniz boş</h4>
              <p>
                Atölyemizden el yapımı bir peyniri sepetinize ekleyin; soğuk zincirle 48 saatte
                kapınıza gelsin.
              </p>
              <button className="btn btn-outline" onClick={onClose}>
                Ürünleri Keşfet <window.Icon.arrow />
              </button>
            </div>
          ) : (
            items.map((it) => (
              <div className="kb-cart-item" key={it.key}>
                <div className={"kb-cart-thumb ph " + (it.ph || "")}>
                </div>
                <div>
                  <h4 className="kb-cart-name">{it.name}</h4>
                  <div className="kb-cart-variant">{it.weight} · El Yapımı</div>
                  <div className="kb-stepper">
                    <button onClick={() => onQty(it.key, -1)} aria-label="Azalt"><window.Icon.minus /></button>
                    <span className="qty">{it.qty}</span>
                    <button onClick={() => onQty(it.key, 1)} aria-label="Arttır"><window.Icon.plus /></button>
                  </div>
                </div>
                <div className="kb-cart-right">
                  <button className="kb-cart-remove" onClick={() => onRemove(it.key)} aria-label="Kaldır"><window.Icon.close /></button>
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
              <div className="kb-ship-note"><strong>Kargo bizden ✓</strong> Soğuk zincir kapınıza.</div>
            )}
            <div className="kb-progress-line"><span style={{ width: (progress * 100) + "%" }}></span></div>

            <div className="kb-cart-trust">
              <div className="kb-trust-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v6M9 5l3-3 3 3M5 12h14M3 16h18M7 20h10"></path></svg>
                Soğuk Zincir
              </div>
              <div className="kb-trust-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8l9-5 9 5v8l-9 5-9-5V8z"></path><path d="M3 8l9 5 9-5M12 13v9"></path></svg>
                İzoleli Kutu
              </div>
              <div className="kb-trust-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path></svg>
                48 Saat
              </div>
            </div>

            <div className="kb-cart-row">
              <span className="label">Ara Toplam</span>
              <span className="v">₺{subtotal}</span>
            </div>
            <div className="kb-cart-row">
              <span className="label">Soğuk Zincir Kargo</span>
              <span className="v" style={{ color: "var(--olive)" }}>{remaining > 0 ? "₺60" : "Ücretsiz"}</span>
            </div>
            <div className="kb-cart-row total">
              <span className="label">Toplam</span>
              <span className="v big">₺{subtotal + (remaining > 0 ? 60 : 0)}</span>
            </div>

            <div className="kb-cart-cta">
              <button className="btn btn-outline" onClick={onClose}>Sepete Git</button>
              <button className="btn btn-primary">Ödemeye Geç <window.Icon.arrow /></button>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}

window.Cart = Cart;
