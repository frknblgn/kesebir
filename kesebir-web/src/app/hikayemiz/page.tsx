import SiteShell from '@/components/SiteShell';
import PageBanner from '@/components/PageBanner';
import { ArrowIcon } from '@/components/Icons';

export const metadata = { title: 'Hikayemiz · Kesebir Mandıra' };

export default function HikayemizPage() {
  return (
    <SiteShell>
      <PageBanner eyebrow="Bir Aile · Bir Ada · Üç Kuşak" title="Hikayemiz" />

      {/* Hakkımızda */}
      <section id="hakkimizda" className="kb-story">
        <div className="container">
          <div className="kb-story-grid">
            <div className="kb-story-left ph warm">
              <span className="ph-label">ATMOSFER · OLİVE GROVE, DUSK</span>
              <div className="kb-story-stamp">
                <span>Est.</span>
                <span style={{ fontSize: 18, letterSpacing: '0.05em', margin: '2px 0' }}>1979</span>
                <span>Cunda</span>
              </div>
              <div className="kb-story-frame-label">Cunda · 1979</div>
            </div>
            <div className="kb-story-right">
              <div className="kb-story-eye">Hakkımızda</div>
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
                <p>&ldquo;Bizi marka yapan sebep; tamamen el yapımı, eski usul butik üretim yapmamız.&rdquo;</p>
                <cite>— İsmail Kesebir, Kurucu</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Üretim Süreci */}
      <section id="uretim-sureci" className="kb-hikaye-section">
        <div className="container">
          <div className="kb-hikaye-section-head">
            <div className="kb-story-eye">Üretim Süreci</div>
            <h2 className="kb-story-h2">Atölyeden masaya,<br /><em>her adımda el emeği.</em></h2>
          </div>
          <div className="kb-hikaye-steps">
            {STEPS.map((s, i) => (
              <div className="kb-hikaye-step" key={i}>
                <div className="kb-hikaye-step-num mono">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="kb-hikaye-step-title">{s.title}</h3>
                <p className="kb-hikaye-step-body">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sertifikalar */}
      <section id="sertifikalar" className="kb-hikaye-section kb-hikaye-section--alt">
        <div className="container">
          <div className="kb-hikaye-section-head">
            <div className="kb-story-eye">Sertifikalarımız</div>
            <h2 className="kb-story-h2">Eskinin ruhu,<br /><em>bugünün titizliği.</em></h2>
          </div>
          <div className="kb-sertifika-grid">
            {CERTS.map(c => (
              <div className="kb-sertifika" key={c.code}>
                <div className="kb-sertifika-code mono">{c.code}</div>
                <h3 className="kb-sertifika-title">{c.title}</h3>
                <p className="kb-sertifika-body">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value pillars */}
      <section className="kb-story" style={{ paddingTop: 0 }}>
        <div className="container">
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
    </SiteShell>
  );
}

const STEPS = [
  { title: 'Sabah Sağımı', body: 'Her sabah şafakta koyun, keçi ve ineklerimiz sağılır. Tuzlu Ege rüzgârıyla büyüyen hayvanlarımızın sütü günlük olarak atölyeye taşınır.' },
  { title: 'El ile Yoğurma', body: 'Sütü doğru sıcaklığa getirdikten sonra ekşi maya kültürümüz eklenir. Pıhtılaşan süt elle kesilerek sepetlere aktarılır.' },
  { title: 'Tuzlama', body: 'Her peynir kalıbı, geleneksel kaya tuzu ile elle tuzlanır. Bu adım hem koruma sağlar hem de karakteristik aromayı şekillendirir.' },
  { title: 'Olgunlaştırma', body: 'Taş odalarımızda peynirler, ürüne göre 1 aydan 1 yıla kadar dinlendirilir. Bu süreçte haftalık çevirme ve kontrol yapılır.' },
  { title: 'Soğuk Zincir', body: 'Olgunlaşan peynirler tartılıp paketlenerek soğuk zincir araçlarıyla 48 saat içinde kapınıza ulaşır.' },
];

const CERTS = [
  { code: 'ISO 22000', title: 'Gıda Güvenliği Yönetim Sistemi', body: 'Üretimden sofraya her aşamada uluslararası gıda güvenliği standartlarını karşılıyoruz.' },
  { code: 'TSE', title: 'Türk Standartları Enstitüsü', body: 'Peynir üretimimiz Türk gıda standartları çerçevesinde düzenli denetimlerle belgelenmiştir.' },
  { code: 'KVKK', title: 'Kişisel Veri Koruma', body: 'Müşteri verileriniz KVKK kapsamında güvence altında tutulmaktadır.' },
];

const PILLARS = [
  {
    n: '01', title: 'Doğal Süt',
    body: "Koyun, keçi ve inek sütü — Cunda'nın tuz esintili otlaklarından, soğuk sabah sağımıyla.",
    glyph: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M8 4l2 4h4l2-4M6 8h12v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8z" /></svg>,
  },
  {
    n: '02', title: 'El Emeği',
    body: 'Fabrikasyon yok, makine yok. Her kalıp, atölyede elle yoğrulur ve sabırla olgunlaşır.',
    glyph: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M7 11V6a2 2 0 0 1 4 0v5M11 11V4a2 2 0 0 1 4 0v7M15 11V6a2 2 0 0 1 4 0v9c0 4-3 7-7 7s-7-3-7-7v-2a2 2 0 0 1 4 0" /></svg>,
  },
  {
    n: '03', title: 'ISO 22000',
    body: "Sertifikalı gıda güvenliği, geleneksel ekşi maya ile birleşir — eskinin ruhu, bugünün titizliğiyle.",
    glyph: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 4v6c0 4.5-3.4 8.4-8 9-4.6-.6-8-4.5-8-9V7l8-4z" /><path d="M9 12.5l2 2 4-4.5" /></svg>,
  },
];
