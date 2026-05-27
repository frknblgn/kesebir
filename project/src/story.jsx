// Brand story — asymmetric editorial with pull quote + value pillars.
function Story() {
  return (
    <section id="hikaye" className="kb-story">
      <style>{`
        .kb-story {
          background: var(--cream-soft);
          padding: 140px 0 100px;
          position: relative;
        }
        @media (max-width: 720px) { .kb-story { padding: 80px 0 60px; } }

        .kb-story-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 80px;
          align-items: stretch;
        }
        @media (max-width: 1024px) {
          .kb-story-grid { grid-template-columns: 1fr; gap: 56px; }
        }
        .kb-story-left {
          position: relative;
          aspect-ratio: 4/5;
          min-height: 540px;
          overflow: hidden;
          border: 1px solid var(--stone);
          border-radius: 2px;
        }
        .kb-story-left .ph-label { color: var(--stone); }
        .kb-story-frame-label {
          position: absolute; left: 18px; bottom: 18px;
          color: var(--cream);
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 18px;
          letter-spacing: 0.02em;
          background: rgba(22,37,44,0.6);
          backdrop-filter: blur(8px);
          padding: 10px 16px;
          border: 1px solid rgba(217,207,193,0.2);
        }
        .kb-story-stamp {
          position: absolute; right: 18px; top: 18px;
          width: 90px; height: 90px; border-radius: 50%;
          border: 1px solid rgba(217,207,193,0.4);
          color: var(--stone);
          display: flex; align-items: center; justify-content: center;
          flex-direction: column;
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px; letter-spacing: 0.2em; text-transform: uppercase;
          text-align: center;
          line-height: 1.4;
          background: rgba(22,37,44,0.55);
        }

        .kb-story-right {
          display: flex; flex-direction: column; justify-content: center;
        }
        .kb-story-eye {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase;
          color: var(--olive);
        }
        .kb-story-h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 4.4vw, 56px);
          line-height: 1.05;
          letter-spacing: -0.005em;
          margin: 22px 0 28px;
        }
        .kb-story-h2 em { font-style: italic; color: var(--olive); }
        .kb-story-body {
          font-size: 16px; line-height: 1.85;
          color: var(--navy);
          max-width: 520px;
          margin: 0 0 36px;
        }
        .kb-story-quote {
          padding: 28px 0 28px;
          border-top: 1px solid var(--stone);
          border-bottom: 1px solid var(--stone);
          margin-bottom: 32px;
        }
        .kb-story-quote p {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 28px;
          line-height: 1.25;
          color: var(--olive);
          margin: 0 0 14px;
          letter-spacing: 0.005em;
        }
        .kb-story-quote cite {
          font-style: normal;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--navy);
          opacity: 0.65;
        }
        .kb-story-link {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 14px 0;
          color: var(--olive);
          font-size: 13px; letter-spacing: 0.14em; text-transform: uppercase;
          font-weight: 500;
          border-bottom: 1px solid var(--olive);
          transition: gap 320ms, color 320ms;
          align-self: flex-start;
        }
        .kb-story-link:hover { gap: 16px; }

        /* pillars */
        .kb-pillars {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          margin-top: 110px;
          border-top: 1px solid var(--stone);
          border-bottom: 1px solid var(--stone);
        }
        @media (max-width: 720px) {
          .kb-pillars { grid-template-columns: 1fr; }
          .kb-pillar + .kb-pillar { border-top: 1px solid var(--stone); border-left: none; }
        }
        .kb-pillar {
          padding: 48px 36px;
          display: flex; flex-direction: column; gap: 16px;
          align-items: flex-start;
          position: relative;
        }
        .kb-pillar + .kb-pillar { border-left: 1px solid var(--stone); }
        .kb-pillar-num {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--olive);
        }
        .kb-pillar-glyph {
          width: 56px; height: 56px;
          border: 1px solid var(--stone);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          color: var(--olive);
          margin-bottom: 4px;
        }
        .kb-pillar-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 28px;
          color: var(--navy);
          margin: 0;
        }
        .kb-pillar-body {
          font-size: 14px;
          color: var(--navy);
          opacity: 0.75;
          line-height: 1.7;
          margin: 0;
        }
      `}</style>

      <div className="container">
        <div className="kb-story-grid">
          <div className="kb-story-left ph warm">
            <span className="ph-label">ATMOSFER · OLİVE GROVE, DUSK</span>
            <div className="kb-story-stamp">
              <span>Est.</span>
              <span style={{ fontSize: 18, letterSpacing: "0.05em", margin: "2px 0" }}>1979</span>
              <span>Cunda</span>
            </div>
            <div className="kb-story-frame-label">Cunda · 1979</div>
          </div>

          <div className="kb-story-right">
            <div className="kb-story-eye">Bir Aile · Bir Ada · Bir Gelenek</div>
            <h2 className="kb-story-h2">
              Mübadeleden gelen lezzetler,<br />
              <em>Cunda’da yaşıyor.</em>
            </h2>
            <p className="kb-story-body">
              1979’da Cunda’da küçük bir kasap dükkânı olarak başlayan yolculuğumuz, bugün
              3. kuşağa taşınan bir peynir sanatına dönüştü. Bulgar peynir ustamızın bilgisi,
              Girit mübadelesiyle adaya taşınan tarifler ve Kuzey Ege’nin tuz kokan rüzgârları —
              hepsi her bir peynirin içinde.
            </p>
            <div className="kb-story-quote">
              <p>“Bizi marka yapan sebep; tamamen el yapımı, eski usul butik üretim yapmamız.”</p>
              <cite>— İsmail Kesebir, Kurucu</cite>
            </div>
            <a className="kb-story-link" href="#hikaye">
              Üretim sürecimizi keşfedin <window.Icon.arrow />
            </a>
          </div>
        </div>

        <div className="kb-pillars">
          {[
            {
              n: "01",
              title: "Doğal Süt",
              body: "Koyun, keçi ve inek sütü — Cunda’nın tuz esintili otlaklarından, soğuk sabah sağımıyla.",
              glyph: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 4l2 4h4l2-4M6 8h12v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8z"></path>
                </svg>
              ),
            },
            {
              n: "02",
              title: "El Emeği",
              body: "Fabrikasyon yok, makine yok. Her kalıp, atölyede elle yoğrulur ve sabırla olgunlaşır.",
              glyph: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 11V6a2 2 0 0 1 4 0v5M11 11V4a2 2 0 0 1 4 0v7M15 11V6a2 2 0 0 1 4 0v9c0 4-3 7-7 7s-7-3-7-7v-2a2 2 0 0 1 4 0"></path>
                </svg>
              ),
            },
            {
              n: "03",
              title: "ISO 22000",
              body: "Sertifikalı gıda güvenliği, geleneksel ekşi maya ile birleşir — eskinin ruhu, bugünün titizliğiyle.",
              glyph: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3l8 4v6c0 4.5-3.4 8.4-8 9-4.6-.6-8-4.5-8-9V7l8-4z"></path>
                  <path d="M9 12.5l2 2 4-4.5"></path>
                </svg>
              ),
            },
          ].map(p => (
            <div className="kb-pillar" key={p.n}>
              <span className="kb-pillar-num">{p.n} · İlke</span>
              <div className="kb-pillar-glyph">{p.glyph}</div>
              <h3 className="kb-pillar-title">{p.title}</h3>
              <p className="kb-pillar-body">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Story = Story;
