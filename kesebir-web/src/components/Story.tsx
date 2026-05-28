import { ArrowIcon } from './Icons';

export default function Story() {
  return (
    <section id="hikaye" className="kb-story">
      <div className="container">
        <div className="kb-story-grid">
          {/* Left: atmospheric image placeholder */}
          <div className="kb-story-left ph warm">
            <span className="ph-label">ATMOSFER · OLİVE GROVE, DUSK</span>
            <div className="kb-story-stamp">
              <span>Est.</span>
              <span style={{ fontSize: 18, letterSpacing: '0.05em', margin: '2px 0' }}>1979</span>
              <span>Cunda</span>
            </div>
            <div className="kb-story-frame-label">Cunda · 1979</div>
          </div>

          {/* Right: editorial text */}
          <div className="kb-story-right">
            <div className="kb-story-eye">Bir Aile · Bir Ada · Bir Gelenek</div>
            <h2 className="kb-story-h2">
              Mübadeleden gelen lezzetler,<br />
              <em>Cunda&apos;da yaşıyor.</em>
            </h2>
            <p className="kb-story-body">
              1979&apos;da Cunda&apos;da küçük bir kasap dükkânı olarak başlayan yolculuğumuz,
              bugün 3. kuşağa taşınan bir peynir sanatına dönüştü. Bulgar peynir ustamızın
              bilgisi, Girit mübadelesiyle adaya taşınan tarifler ve Kuzey Ege&apos;nin tuz
              kokan rüzgârları — hepsi her bir peynirin içinde.
            </p>
            <div className="kb-story-quote">
              <p>
                &ldquo;Bizi marka yapan sebep; tamamen el yapımı, eski usul butik üretim
                yapmamız.&rdquo;
              </p>
              <cite>— İsmail Kesebir, Kurucu</cite>
            </div>
            <a className="kb-story-link" href="#hikaye">
              Üretim sürecimizi keşfedin <ArrowIcon />
            </a>
          </div>
        </div>

        {/* Value pillars */}
        <div className="kb-pillars">
          {PILLARS.map(p => (
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

const PILLARS = [
  {
    n: '01',
    title: 'Doğal Süt',
    body: "Koyun, keçi ve inek sütü — Cunda'nın tuz esintili otlaklarından, soğuk sabah sağımıyla.",
    glyph: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 4l2 4h4l2-4M6 8h12v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8z" />
      </svg>
    ),
  },
  {
    n: '02',
    title: 'El Emeği',
    body: 'Fabrikasyon yok, makine yok. Her kalıp, atölyede elle yoğrulur ve sabırla olgunlaşır.',
    glyph: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 11V6a2 2 0 0 1 4 0v5M11 11V4a2 2 0 0 1 4 0v7M15 11V6a2 2 0 0 1 4 0v9c0 4-3 7-7 7s-7-3-7-7v-2a2 2 0 0 1 4 0" />
      </svg>
    ),
  },
  {
    n: '03',
    title: 'ISO 22000',
    body: "Sertifikalı gıda güvenliği, geleneksel ekşi maya ile birleşir — eskinin ruhu, bugünün titizliğiyle.",
    glyph: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l8 4v6c0 4.5-3.4 8.4-8 9-4.6-.6-8-4.5-8-9V7l8-4z" />
        <path d="M9 12.5l2 2 4-4.5" />
      </svg>
    ),
  },
];
