import SiteShell from '@/components/SiteShell';
import PageBanner from '@/components/PageBanner';

export const metadata = { title: 'Basında Biz · Kesebir Mandıra' };

export default function BasindaBizPage() {
  return (
    <SiteShell>
      <PageBanner eyebrow="Medya & Röportajlar" title="Basında Biz" />

      <section className="kb-basinda">
        <div className="container">
          <div className="kb-basinda-intro">
            <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 22, fontStyle: 'italic', color: 'var(--olive)', maxWidth: 600 }}>
              Basın içeriklerimiz yakında bu sayfada yayınlanacak.
            </p>
            <p style={{ marginTop: 16, color: 'var(--stone)' }}>
              Röportaj veya basın talepleriniz için:{' '}
              <a href="mailto:i-kesebir@hotmail.com" style={{ color: 'var(--olive)' }}>
                i-kesebir@hotmail.com
              </a>
            </p>
          </div>

          <div className="kb-basinda-grid">
            {PRESS.map(p => (
              <div className="kb-basinda-card" key={p.outlet}>
                <div className="kb-basinda-outlet mono">{p.outlet}</div>
                <h3 className="kb-basinda-title">{p.title}</h3>
                <p className="kb-basinda-date">{p.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

const PRESS = [
  { outlet: 'Gastronomika',  title: 'Cunda\'nın En Eski Mandırası Dijitale Açılıyor', date: 'Mart 2026' },
  { outlet: 'Yemek Sanatı', title: 'Ekşi Mayalı Peynirin Ege\'deki Ustası',           date: 'Ocak 2026' },
  { outlet: 'Cumhuriyet',   title: 'Üç Kuşaktır Taş Atölyede',                         date: 'Kasım 2025' },
];
