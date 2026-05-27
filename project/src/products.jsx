// Product grid with filter chips and rich hover state.
const { useState: useStateP, useMemo } = React;

function ProductCard({ p, onAdd }) {
  const [variant, setVariant] = useStateP(p.variants[0].w);
  const selected = p.variants.find(v => v.w === variant) || p.variants[0];

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onAdd(p, selected);
  };

  return (
    <article className="kb-card">
      <div className={"kb-card-img ph " + (p.ph || "")}>
        <span className="ph-label">{p.phLabel}</span>

        <div className="kb-card-num mono">№ {p.n}</div>

        <div className="kb-card-badges">
          {p.badges.map(b => (
            <span key={b} className="kb-badge">{b}</span>
          ))}
        </div>

        <div className="kb-card-pairing">
          <span className="mono" style={{ color: "var(--stone)", marginBottom: 6 }}>Eşleşme</span>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontStyle: "italic", color: "var(--cream)", letterSpacing: "0.01em", lineHeight: 1.3 }}>
            {p.pairing}
          </span>
        </div>

        <div className="kb-card-action">
          <div className="kb-variants" onClick={(e)=>e.stopPropagation()}>
            {p.variants.map(v => (
              <button
                key={v.w}
                className={"kb-variant " + (variant === v.w ? "active" : "")}
                onClick={(e) => { e.preventDefault(); setVariant(v.w); }}
              >{v.w}</button>
            ))}
          </div>
          <button className="kb-add" onClick={handleAdd}>
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
            <window.Icon.star style={{ color: "var(--olive)" }} />
            <span>{p.rating.toFixed(1)}</span>
            <span style={{ opacity: 0.5 }}>· {p.reviews}</span>
          </div>
        </div>
        <div className="kb-card-foot">
          <span className="mono" style={{ color: "var(--olive)" }}>
            {p.variants.map(v => v.w).join(" · ")}
          </span>
          <span className="kb-card-price">
            ₺{p.variants[0].price}<span style={{ opacity: 0.5 }}> – ₺{p.variants[p.variants.length-1].price}</span>
          </span>
        </div>
      </div>
    </article>
  );
}

function Products({ onAdd }) {
  const [cat, setCat] = useStateP("all");
  const filtered = useMemo(
    () => cat === "all" ? window.PRODUCTS : window.PRODUCTS.filter(p => p.category === cat),
    [cat]
  );

  return (
    <section id="urunler" className="kb-products">
      <style>{`
        .kb-products { padding: 120px 0 100px; background: var(--cream); }
        @media (max-width: 720px) { .kb-products { padding: 72px 0 60px; } }

        .kb-prod-head {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: end;
          gap: 32px;
          margin-bottom: 56px;
        }
        @media (max-width: 900px) {
          .kb-prod-head { grid-template-columns: 1fr; gap: 18px; }
        }
        .kb-prod-h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(40px, 5vw, 72px);
          line-height: 1.02;
          letter-spacing: -0.005em;
        }
        .kb-prod-h2 em { font-style: italic; color: var(--olive); }
        .kb-prod-eye {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--olive);
        }
        .kb-prod-desc {
          max-width: 320px;
          color: var(--navy);
          opacity: 0.7;
          font-size: 14px;
          line-height: 1.7;
        }

        .kb-chips {
          display: flex; gap: 8px;
          padding: 28px 0;
          border-top: 1px solid var(--stone);
          border-bottom: 1px solid var(--stone);
          margin-bottom: 56px;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .kb-chips::-webkit-scrollbar { display: none; }
        .kb-chip {
          flex-shrink: 0;
          padding: 10px 18px;
          font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase;
          font-weight: 500;
          color: var(--navy);
          background: transparent;
          border: 1px solid var(--stone);
          border-radius: 2px;
          transition: all 400ms;
        }
        .kb-chip:hover { border-color: var(--olive); color: var(--olive); }
        .kb-chip.active {
          background: var(--olive);
          color: var(--cream);
          border-color: var(--olive);
        }
        .kb-chip-count {
          margin-left: auto;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase;
          color: var(--olive);
          padding: 8px 0;
          flex-shrink: 0;
        }

        .kb-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px 32px;
        }
        @media (max-width: 1024px) { .kb-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px)  { .kb-grid { grid-template-columns: 1fr; } }

        /* card ----------------------------------------------------- */
        .kb-card {
          position: relative;
          transition: transform 420ms;
          will-change: transform;
          opacity: 0;
          animation: kbFadeIn 520ms forwards;
        }
        @keyframes kbFadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .kb-card:hover { transform: translateY(-6px); }

        .kb-card-img {
          position: relative;
          aspect-ratio: 4/5;
          width: 100%;
          border-radius: 2px;
          border: 1px solid var(--stone);
          overflow: hidden;
        }
        .kb-card-num {
          position: absolute; top: 14px; right: 16px;
          color: var(--stone); opacity: 0.7;
        }
        .kb-card-badges {
          position: absolute; top: 14px; left: 16px;
          display: flex; gap: 6px; flex-wrap: wrap;
          max-width: 70%;
        }
        .kb-badge {
          padding: 5px 10px;
          font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--cream);
          background: rgba(78,94,83,0.65);
          border: 1px solid rgba(217,207,193,0.25);
          backdrop-filter: blur(8px);
          border-radius: 2px;
        }
        .kb-card.stone .kb-badge { color: var(--navy); background: rgba(22,37,44,0.10); border-color: rgba(22,37,44,0.15); }

        .kb-card-pairing {
          position: absolute;
          left: 16px; right: 16px;
          bottom: 90px;
          display: flex; flex-direction: column;
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 420ms, transform 420ms;
        }
        .kb-card:hover .kb-card-pairing { opacity: 1; transform: translateY(0); }

        .kb-card-action {
          position: absolute;
          left: 12px; right: 12px; bottom: 12px;
          padding: 12px;
          background: rgba(22,37,44,0.85);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(217,207,193,0.18);
          border-radius: 2px;
          color: var(--cream);
          display: flex; flex-direction: column; gap: 10px;
          transform: translateY(calc(100% + 16px));
          opacity: 0;
          transition: transform 480ms, opacity 320ms;
        }
        .kb-card:hover .kb-card-action { transform: translateY(0); opacity: 1; }

        .kb-variants { display: flex; gap: 4px; }
        .kb-variant {
          flex: 1;
          padding: 8px;
          font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--cream);
          background: transparent;
          border: 1px solid rgba(217,207,193,0.3);
          border-radius: 2px;
          transition: all 320ms;
        }
        .kb-variant:hover { border-color: var(--stone); }
        .kb-variant.active { background: var(--olive); border-color: var(--olive); }

        .kb-add {
          display: flex; justify-content: space-between; align-items: center;
          padding: 12px 16px;
          background: var(--cream);
          color: var(--navy);
          font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase;
          font-weight: 500;
          border-radius: 2px;
          transition: background 320ms, color 320ms;
        }
        .kb-add:hover { background: var(--stone); }
        .kb-add-price { font-family: 'JetBrains Mono', monospace; font-size: 12px; }

        .kb-card-meta {
          padding: 18px 4px 0;
          display: flex; flex-direction: column; gap: 14px;
        }
        .kb-card-head {
          display: flex; align-items: start; justify-content: space-between;
          gap: 16px;
        }
        .kb-card-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 24px; letter-spacing: 0.005em;
          line-height: 1.2;
          color: var(--navy);
          margin: 0 0 4px;
        }
        .kb-card-sub {
          font-size: 13px; color: var(--olive);
          margin: 0;
        }
        .kb-card-rating {
          display: inline-flex; align-items: center; gap: 4px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: var(--navy);
          padding-top: 4px;
        }
        .kb-card-foot {
          display: flex; justify-content: space-between; align-items: center;
          padding-top: 14px;
          border-top: 1px solid var(--stone);
        }
        .kb-card-price {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
        }
      `}</style>

      <div className="container">
        <div className="kb-prod-head">
          <div>
            <div className="kb-prod-eye">Mağaza · Hasat ’26</div>
            <h2 className="kb-prod-h2" style={{ marginTop: 14 }}>
              Atölyeden,<br /><em>elden teslim.</em>
            </h2>
          </div>
          <div></div>
          <p className="kb-prod-desc">
            Her ürün haftalık olarak üretilir, sipariş geldiğinde paketlenir. Üretim sayımız sınırlıdır;
            stoğumuz, mevsime ve sütümüze göre değişir.
          </p>
        </div>

        <div className="kb-chips">
          {window.CATEGORIES.map(c => (
            <button
              key={c.id}
              className={"kb-chip " + (cat === c.id ? "active" : "")}
              onClick={() => setCat(c.id)}
            >{c.label}</button>
          ))}
          <span className="kb-chip-count">{filtered.length} ürün gösteriliyor</span>
        </div>

        <div className="kb-grid" key={cat}>
          {filtered.map((p, i) => (
            <div key={p.id} style={{ animationDelay: `${i*60}ms` }}>
              <ProductCard p={p} onAdd={onAdd} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Products = Products;
