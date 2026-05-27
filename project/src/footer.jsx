function Footer() {
  return (
    <footer id="iletisim" className="kb-footer">
      <style>{`
        .kb-footer {
          background: var(--navy);
          color: var(--cream);
          padding: 110px 0 40px;
          position: relative;
          overflow: hidden;
        }
        .kb-footer::before {
          content: ""; position: absolute; inset: 0;
          background:
            radial-gradient(60% 80% at 80% 0%, rgba(78,94,83,0.45), transparent 60%);
          pointer-events: none;
        }
        .kb-foot-top {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1fr;
          gap: 40px;
          padding-bottom: 80px;
          border-bottom: 1px solid rgba(217,207,193,0.18);
        }
        @media (max-width: 900px) {
          .kb-foot-top { grid-template-columns: 1fr 1fr; }
          .kb-foot-top > :first-child { grid-column: 1 / -1; }
        }
        @media (max-width: 560px) { .kb-foot-top { grid-template-columns: 1fr; } }

        .kb-foot-h {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase;
          color: var(--stone);
          margin-bottom: 22px;
        }
        .kb-foot-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 12px; }
        .kb-foot-list a {
          font-family: 'Cormorant Garamond', serif;
          font-size: 20px;
          letter-spacing: 0.01em;
          transition: color 320ms;
        }
        .kb-foot-list a:hover { color: var(--stone); }

        .kb-foot-news {
          margin-top: 24px;
          display: flex;
          border: 1px solid rgba(217,207,193,0.3);
          border-radius: 2px;
          overflow: hidden;
          max-width: 440px;
        }
        .kb-foot-news input {
          flex: 1;
          background: transparent;
          border: 0;
          padding: 14px 16px;
          color: var(--cream);
          font-size: 14px;
          outline: none;
        }
        .kb-foot-news input::placeholder { color: rgba(217,207,193,0.5); }
        .kb-foot-news button {
          padding: 0 22px;
          background: var(--cream); color: var(--navy);
          font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase;
          font-weight: 500;
          transition: background 320ms;
        }
        .kb-foot-news button:hover { background: var(--stone); }

        .kb-foot-h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 4.4vw, 56px);
          line-height: 1.05;
          letter-spacing: -0.005em;
          color: var(--cream);
          margin: 12px 0 18px;
        }
        .kb-foot-h2 em { font-style: italic; color: var(--stone); }
        .kb-foot-body {
          font-size: 14px;
          color: rgba(251,249,245,0.7);
          line-height: 1.8;
          max-width: 420px;
        }

        .kb-foot-bottom {
          display: flex; justify-content: space-between; align-items: center;
          padding-top: 40px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase;
          color: rgba(217,207,193,0.65);
          gap: 24px; flex-wrap: wrap;
        }
        .kb-marquee {
          position: relative;
          margin-top: 60px;
          padding: 18px 0;
          border-top: 1px solid rgba(217,207,193,0.18);
          border-bottom: 1px solid rgba(217,207,193,0.18);
          white-space: nowrap;
          overflow: hidden;
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 28px;
          color: var(--stone);
        }
        .kb-marquee-track {
          display: inline-block;
          animation: kbMarquee 32s linear infinite;
          padding-right: 40px;
        }
        .kb-marquee-track span { padding: 0 32px; opacity: 0.85; }
        .kb-marquee-track span::before {
          content: "✦"; padding-right: 32px; color: var(--olive);
        }
        @keyframes kbMarquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>

      <div className="container" style={{ position: "relative" }}>
        <div className="kb-foot-top">
          <div>
            <div className="kb-foot-h">Cunda Mektubu</div>
            <div className="kb-foot-h2">
              Mevsim defterimize<br /><em>siz de yazılın.</em>
            </div>
            <p className="kb-foot-body">
              Yeni hasatlar, sınırlı üretimler ve atölyemizden notlar — ayda iki, kısa ve kokulu mektuplar.
            </p>
            <form className="kb-foot-news" onSubmit={(e)=>e.preventDefault()}>
              <input type="email" placeholder="E-posta adresiniz" />
              <button>Abone Ol</button>
            </form>
          </div>

          <div>
            <div className="kb-foot-h">Mağaza</div>
            <ul className="kb-foot-list">
              <li><a href="#urunler">Cunda Peynirleri</a></li>
              <li><a href="#urunler">Saganaki</a></li>
              <li><a href="#urunler">Zeytinyağı</a></li>
              <li><a href="#urunler">Zeytin</a></li>
              <li><a href="#urunler">Hediye Setleri</a></li>
            </ul>
          </div>

          <div>
            <div className="kb-foot-h">Hikayemiz</div>
            <ul className="kb-foot-list">
              <li><a href="#hikaye">Hakkımızda</a></li>
              <li><a href="#hikaye">Üretim Süreci</a></li>
              <li><a href="#hikaye">Sertifikalarımız</a></li>
              <li><a href="#hikaye">Basında Biz</a></li>
            </ul>
          </div>

          <div>
            <div className="kb-foot-h">Ziyaret</div>
            <p className="kb-foot-body" style={{ marginBottom: 18 }}>
              Taş Kahve arkası<br />
              Cunda Adası · Ayvalık<br />
              Pzt–Cmt · 09:00–18:00
            </p>
            <div className="kb-foot-h">İletişim</div>
            <p className="kb-foot-body">
              +90 266 ··· ····<br />
              merhaba@kesebirmandira.com
            </p>
          </div>
        </div>

        <div className="kb-marquee">
          <div className="kb-marquee-track">
            <span>Cunda Adası</span><span>1979’dan beri</span><span>Ekşi Mayalı</span>
            <span>El Yapımı</span><span>Soğuk Zincir</span><span>Üç Kuşak</span>
            <span>Cunda Adası</span><span>1979’dan beri</span><span>Ekşi Mayalı</span>
            <span>El Yapımı</span><span>Soğuk Zincir</span><span>Üç Kuşak</span>
          </div>
        </div>

        <div className="kb-foot-bottom">
          <span>© 2026 Kesebir Mandıra</span>
          <span>Kuzey Ege · N 39°20′ E 26°41′</span>
          <span>Gizlilik · Mesafeli Satış · KVKK</span>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
