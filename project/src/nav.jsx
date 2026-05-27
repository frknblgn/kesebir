// Sticky nav with dropdowns + mobile drawer.
const { useState, useEffect, useRef } = React;

function Logo({ inverted }) {
  const color = inverted ? "var(--cream)" : "var(--navy)";
  return (
    <a href="#top" className="kb-logo" style={{ color, display: "flex", alignItems: "center", gap: 12 }}>
      <window.Icon.crest width="28" height="28" style={{ color: inverted ? "var(--stone)" : "var(--olive)" }} />
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
        <span style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 22, letterSpacing: "0.08em", textTransform: "uppercase",
          fontWeight: 500,
        }}>Kesebir</span>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 9, letterSpacing: "0.32em", textTransform: "uppercase",
          marginTop: 3, opacity: 0.7,
        }}>Mandıra · 1979</span>
      </div>
    </a>
  );
}

function Dropdown({ items, eyebrow, footnote }) {
  return (
    <div className="kb-dropdown">
      <div className="eyebrow" style={{ color: "var(--olive)", marginBottom: 18 }}>{eyebrow}</div>
      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 2 }}>
        {items.map(([label, hint]) => (
          <li key={label}>
            <a href="#urunler" className="kb-dropdown-row">
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, letterSpacing: "0.02em" }}>{label}</span>
              <span className="mono" style={{ color: "var(--olive)", opacity: 0.7 }}>{hint}</span>
            </a>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: 22, paddingTop: 16, borderTop: "1px solid var(--stone)", fontSize: 12, color: "var(--olive)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontStyle: "italic", fontFamily: "'Cormorant Garamond', serif", fontSize: 15 }}>{footnote}</span>
        <a href="#urunler" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase" }}>
          Tümünü gör <window.Icon.arrow />
        </a>
      </div>
    </div>
  );
}

function Nav({ onOpenCart, cartCount, scrolled }) {
  const [open, setOpen] = useState(null); // 'urunler' | 'hikayemiz' | null
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef(null);

  const enter = (k) => {
    clearTimeout(closeTimer.current);
    setOpen(k);
  };
  const leave = () => {
    closeTimer.current = setTimeout(() => setOpen(null), 160);
  };

  // Close on Esc
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") { setOpen(null); setMobileOpen(false); } };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <style>{`
        .kb-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 60;
          transition: background 420ms, border-color 420ms, color 420ms;
          color: var(--cream);
          border-bottom: 1px solid transparent;
        }
        .kb-nav.scrolled {
          background: rgba(251,249,245,0.92);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          color: var(--navy);
          border-bottom-color: var(--stone);
        }
        .kb-nav-inner {
          display: flex; align-items: center; justify-content: space-between;
          padding: 22px 0; gap: 24px;
        }
        .kb-nav-center {
          display: flex; align-items: center; gap: 4px;
        }
        .kb-nav-item {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 10px 14px;
          font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase;
          font-weight: 500;
          position: relative;
        }
        .kb-nav-item:hover { color: var(--stone); }
        .kb-nav.scrolled .kb-nav-item:hover { color: var(--olive); }
        .kb-nav-item.active { color: var(--olive); }
        .kb-nav-right {
          display: flex; align-items: center; gap: 4px;
        }
        .kb-icon-btn {
          width: 40px; height: 40px;
          display: inline-flex; align-items: center; justify-content: center;
          border-radius: 2px;
          transition: background 420ms, color 420ms;
          position: relative;
        }
        .kb-icon-btn:hover { background: rgba(217,207,193,0.18); }
        .kb-cart-badge {
          position: absolute; top: 4px; right: 2px;
          min-width: 18px; height: 18px;
          padding: 0 5px;
          border-radius: 999px;
          background: var(--olive);
          color: var(--cream);
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          display: inline-flex; align-items: center; justify-content: center;
        }
        .kb-cart-badge.pulse { animation: kbPulse 600ms ease-out; }
        @keyframes kbPulse {
          0% { transform: scale(1); }
          40% { transform: scale(1.45); background: var(--cream); color: var(--navy); }
          100% { transform: scale(1); }
        }

        /* dropdown panel */
        .kb-drop-wrap {
          position: absolute; left: 50%; top: 100%;
          transform: translateX(-50%);
          padding-top: 18px;
          pointer-events: none;
          opacity: 0; transition: opacity 320ms;
        }
        .kb-drop-wrap.show { opacity: 1; pointer-events: auto; }
        .kb-dropdown {
          background: var(--cream);
          color: var(--navy);
          border: 1px solid var(--stone);
          border-radius: 2px;
          padding: 28px 32px;
          width: 460px;
          box-shadow: 0 24px 60px rgba(22,37,44,0.08);
        }
        .kb-dropdown-row {
          display: flex; align-items: baseline; justify-content: space-between;
          padding: 12px 0;
          border-bottom: 1px solid var(--cream-soft);
          transition: padding 320ms, color 320ms;
        }
        .kb-dropdown-row:hover { padding-left: 8px; color: var(--olive); }

        @media (max-width: 900px) {
          .kb-nav-center, .kb-nav-right .desk-only { display: none; }
          .kb-mobile-btn { display: inline-flex !important; }
        }
        .kb-mobile-btn { display: none; }

        /* mobile overlay */
        .kb-mobile-overlay {
          position: fixed; inset: 0; z-index: 70;
          background: var(--navy); color: var(--cream);
          padding: 28px 28px;
          transform: translateY(-100%);
          transition: transform 480ms, visibility 0s linear 480ms;
          display: flex; flex-direction: column;
          overflow: hidden;
          visibility: hidden;
        }
        .kb-mobile-overlay.open {
          transform: translateY(0);
          visibility: visible;
          transition: transform 480ms, visibility 0s;
        }
      `}</style>

      <nav className={"kb-nav " + (scrolled ? "scrolled" : "")}>
        <div className="container kb-nav-inner">
          <Logo inverted={!scrolled} />

          <div className="kb-nav-center">
            <a href="#top" className="kb-nav-item">Ana Sayfa</a>

            <div onMouseEnter={() => enter("urunler")} onMouseLeave={leave} style={{ position: "relative" }}>
              <button className={"kb-nav-item " + (open==="urunler" ? "active" : "")} onClick={() => setOpen(open==="urunler" ? null : "urunler")}>
                Ürünler <window.Icon.caret style={{ transform: open==="urunler" ? "rotate(180deg)" : "none", transition: "transform 320ms" }} />
              </button>
              <div className={"kb-drop-wrap " + (open==="urunler" ? "show" : "")}>
                <Dropdown
                  items={window.NAV_PRODUCTS}
                  eyebrow="Atölyemizden · El Yapımı"
                  footnote="Soğuk zincirle 48 saatte kapınızda"
                />
              </div>
            </div>

            <div onMouseEnter={() => enter("hikayemiz")} onMouseLeave={leave} style={{ position: "relative" }}>
              <button className={"kb-nav-item " + (open==="hikayemiz" ? "active" : "")} onClick={() => setOpen(open==="hikayemiz" ? null : "hikayemiz")}>
                Hikayemiz <window.Icon.caret style={{ transform: open==="hikayemiz" ? "rotate(180deg)" : "none", transition: "transform 320ms" }} />
              </button>
              <div className={"kb-drop-wrap " + (open==="hikayemiz" ? "show" : "")}>
                <Dropdown
                  items={window.NAV_STORY}
                  eyebrow="Cunda · Bir Aile · Üç Kuşak"
                  footnote="1979'dan beri taş atölyede"
                />
              </div>
            </div>

            <a href="#iletisim" className="kb-nav-item">İletişim</a>
          </div>

          <div className="kb-nav-right">
            <button className="kb-icon-btn desk-only" aria-label="Ara"><window.Icon.search /></button>
            <button className="kb-icon-btn desk-only" aria-label="Hesabım"><window.Icon.user /></button>
            <button className="kb-icon-btn" aria-label="Sepet" onClick={onOpenCart}>
              <window.Icon.bag />
              <span className={"kb-cart-badge " + (cartCount.pulse ? "pulse" : "")}>{cartCount.n}</span>
            </button>
            <button className="kb-icon-btn kb-mobile-btn" aria-label="Menü" onClick={() => setMobileOpen(true)}>
              <window.Icon.menu />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={"kb-mobile-overlay " + (mobileOpen ? "open" : "")}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Logo inverted />
          <button className="kb-icon-btn" onClick={() => setMobileOpen(false)} aria-label="Kapat"><window.Icon.close /></button>
        </div>
        <div style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 6 }}>
          {[
            ["Ana Sayfa", "#top"],
            ["Ürünler", "#urunler"],
            ["Hikayemiz", "#hikaye"],
            ["İletişim", "#iletisim"],
          ].map(([l, h]) => (
            <a key={l} href={h} onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 44, letterSpacing: "0.02em",
                padding: "14px 0",
                borderBottom: "1px solid rgba(217,207,193,0.2)",
              }}>{l}</a>
          ))}
        </div>
        <div style={{ marginTop: "auto", color: "var(--stone)", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase" }}>
          Cunda Adası · Ayvalık<br /> +90 266 ··· ····
        </div>
      </div>
    </>
  );
}

window.Nav = Nav;
window.Logo = Logo;
