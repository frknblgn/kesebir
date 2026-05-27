// Hero — full viewport, dark atmospheric placeholder with editorial typography.
function Hero() {
  return (
    <section id="top" className="kb-hero">
      <style>{`
        .kb-hero {
          position: relative;
          min-height: 100vh;
          color: var(--cream);
          overflow: hidden;
          isolation: isolate;
          display: flex;
          flex-direction: column;
        }
        .kb-hero-bg {
          position: absolute; inset: 0; z-index: -3;
          background:
            radial-gradient(80% 60% at 70% 30%, rgba(78,94,83,0.45), transparent 60%),
            radial-gradient(60% 80% at 20% 80%, rgba(217,207,193,0.10), transparent 60%),
            linear-gradient(160deg, #0C1418 0%, #16252C 50%, #1F323A 100%);
        }
        .kb-hero-grain {
          position: absolute; inset: 0; z-index: -2;
          background-image:
            repeating-linear-gradient(45deg, rgba(217,207,193,0.03) 0 1px, transparent 1px 5px),
            repeating-linear-gradient(-45deg, rgba(0,0,0,0.3) 0 1px, transparent 1px 7px);
          mix-blend-mode: overlay;
          opacity: 0.7;
        }
        .kb-hero-orb {
          position: absolute; z-index: -1; pointer-events: none;
          width: 720px; height: 720px; border-radius: 50%;
          right: -200px; top: -120px;
          background: radial-gradient(circle, rgba(217,207,193,0.18) 0%, rgba(217,207,193,0) 60%);
          animation: kbDrift 14s ease-in-out infinite alternate;
        }
        @keyframes kbDrift {
          0% { transform: translate(0,0) scale(1); }
          100% { transform: translate(-40px, 30px) scale(1.06); }
        }

        .kb-hero-top {
          padding-top: 140px;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: end;
          gap: 32px;
        }
        .kb-hero-coord {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase;
          color: var(--stone);
          opacity: 0.7;
        }
        .kb-hero-body {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px 0 80px;
        }
        .kb-hero-content {
          text-align: center;
          max-width: 980px;
          margin: 0 auto;
        }
        .kb-hero-eyebrow {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 18px;
          color: var(--stone);
          letter-spacing: 0.02em;
          margin-bottom: 28px;
          display: inline-flex;
          align-items: center;
          gap: 18px;
        }
        .kb-hero-eyebrow::before, .kb-hero-eyebrow::after {
          content: ""; width: 36px; height: 1px; background: var(--stone); opacity: 0.5;
        }
        .kb-hero-h1 {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 400;
          font-size: clamp(48px, 8vw, 112px);
          line-height: 0.98;
          letter-spacing: -0.005em;
          color: var(--cream);
          margin: 0 0 8px;
        }
        .kb-hero-h1 em {
          font-style: italic;
          color: var(--stone);
          font-weight: 400;
        }
        .kb-hero-sub {
          font-size: 17px;
          line-height: 1.7;
          color: var(--cream);
          opacity: 0.78;
          max-width: 560px;
          margin: 32px auto 44px;
        }
        .kb-hero-ctas {
          display: inline-flex; gap: 14px; flex-wrap: wrap; justify-content: center;
        }
        /* panoramic banner ------------------------------------------- */
        .kb-hero-pano {
          position: relative;
          margin-bottom: 36px;
          overflow: hidden;
          mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
        }
        .kb-hero-pano-track {
          display: flex;
          gap: 14px;
          width: max-content;
          animation: kbPano 60s linear infinite;
        }
        @keyframes kbPano {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .kb-hero-pano-cell {
          width: 240px;
          height: 130px;
          flex-shrink: 0;
          position: relative;
          border: 1px solid rgba(217,207,193,0.18);
          border-radius: 2px;
          overflow: hidden;
        }
        .kb-hero-pano-cell .ph-label {
          font-size: 9px;
          opacity: 0.6;
          letter-spacing: 0.14em;
        }
        .kb-hero-pano-frame {
          position: absolute; top: 8px; right: 10px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.14em;
          color: var(--stone);
          opacity: 0.55;
        }
        .kb-hero-pano-cell::after {
          content: "";
          position: absolute; inset: 0;
          border: 1px solid transparent;
          pointer-events: none;
          background:
            linear-gradient(to right, rgba(217,207,193,0.15) 0 1px, transparent 1px) 0 0/40px 100%,
            linear-gradient(to bottom, rgba(217,207,193,0.10) 0 1px, transparent 1px) 0 0/100% 40px;
          mix-blend-mode: overlay;
          opacity: 0.5;
        }
        @media (max-width: 720px) {
          .kb-hero-pano-cell { width: 180px; height: 110px; }
        }

        .kb-hero-bottom {
          padding-bottom: 36px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          align-items: end;
          gap: 24px;
        }
        .kb-scroll {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px; letter-spacing: 0.24em; text-transform: uppercase;
          color: var(--stone);
          justify-self: center;
        }
        .kb-scroll-line {
          width: 1px; height: 56px;
          background: linear-gradient(to bottom, var(--stone), transparent);
          position: relative; overflow: hidden;
        }
        .kb-scroll-line::after {
          content: "";
          position: absolute; left: 0; top: -100%;
          width: 100%; height: 100%;
          background: var(--cream);
          animation: kbScroll 2.2s ease-in-out infinite;
        }
        @keyframes kbScroll {
          0% { top: -100%; }
          70% { top: 110%; }
          100% { top: 110%; }
        }
        .kb-vert {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px; letter-spacing: 0.24em; text-transform: uppercase;
          color: var(--stone);
          opacity: 0.6;
        }
        .kb-feature-strip {
          display: flex; gap: 24px; align-items: center;
          color: var(--stone);
          font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase;
          justify-content: flex-end;
        }
        .kb-feature-strip span { opacity: 0.8; }
        @media (max-width: 720px) {
          .kb-hero-top, .kb-hero-bottom { grid-template-columns: 1fr; }
          .kb-feature-strip { justify-content: flex-start; flex-wrap: wrap; }
          .kb-hero-eyebrow::before, .kb-hero-eyebrow::after { width: 18px; }
        }
      `}</style>

      <div className="kb-hero-bg"></div>
      <div className="kb-hero-grain"></div>
      <div className="kb-hero-orb"></div>

      <div className="container kb-hero-top">
        <div className="kb-hero-coord">N 39°20′ · E 26°41′<br/>Cunda · Ayvalık</div>
        <div className="mono" style={{ color: "var(--stone)", textAlign: "center" }}>
          № 001 — Hasat ’26
        </div>
        <div className="kb-hero-coord" style={{ textAlign: "right" }}>
          Sıcaklık 22°C<br/>Rüzgar tuzlu, hafif
        </div>
      </div>

      <div className="container kb-hero-body">
        <div className="kb-hero-content">
          <div className="kb-hero-eyebrow">Cunda Adası’ndan · 1979’dan beri</div>
          <h1 className="kb-hero-h1">
            Elden çıkmış,<br />
            <em>doğadan</em> gelmiş.
          </h1>
          <p className="kb-hero-sub">
            Koyun, keçi ve inek sütünden, ekşi maya ve sabırla. Üç kuşaktır taş atölyenin
            içinde elle yoğrulan peynirler — soğuk zincirle kapınıza.
          </p>
          <div className="kb-hero-ctas">
            <a href="#urunler" className="btn btn-primary" style={{ background: "var(--cream)", color: "var(--navy)", borderColor: "var(--cream)" }}>
              Ürünleri Keşfet <window.Icon.arrow />
            </a>
            <a href="#hikaye" className="btn btn-ghost">Hikayemizi Oku</a>
          </div>
        </div>
      </div>

      <div className="container kb-hero-pano">
        <div className="kb-hero-pano-track">
          {[
            ["OLİVE GROVE · DUSK", "F-01", "warm"],
            ["TAŞ ATÖLYE · İÇ", "F-02", ""],
            ["DAMLA SAKIZ · MAKRO", "F-03", "olive"],
            ["CUNDA LİMANI · ŞAFAK", "F-04", ""],
            ["EKŞİ MAYA · YOĞURMA", "F-05", "warm"],
            ["KAŞAR KESİTİ · 1Y", "F-06", ""],
          ].concat([
            ["OLİVE GROVE · DUSK", "F-01", "warm"],
            ["TAŞ ATÖLYE · İÇ", "F-02", ""],
            ["DAMLA SAKIZ · MAKRO", "F-03", "olive"],
            ["CUNDA LİMANI · ŞAFAK", "F-04", ""],
            ["EKŞİ MAYA · YOĞURMA", "F-05", "warm"],
            ["KAŞAR KESİTİ · 1Y", "F-06", ""],
          ]).map(([label, frame, variant], i) => (
            <div key={i} className={"kb-hero-pano-cell ph " + variant}>
              <span className="kb-hero-pano-frame">{frame}</span>
              <span className="ph-label">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="container kb-hero-bottom">
        <div className="kb-vert">Ekşi Mayalı · Çiğ Süt</div>
        <a href="#urunler" className="kb-scroll">
          Aşağı kaydır
          <span className="kb-scroll-line"></span>
        </a>
        <div className="kb-feature-strip">
          <span>29 SKU</span>
          <span style={{ opacity: 0.4 }}>·</span>
          <span>ISO 22000</span>
          <span style={{ opacity: 0.4 }}>·</span>
          <span>3. Kuşak</span>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
