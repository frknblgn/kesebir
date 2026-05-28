import Link from 'next/link';
import Image from 'next/image';
import { ArrowIcon } from './Icons';

const PANO_CELLS: [string, string, string][] = [
  ['OLİVE GROVE · DUSK',   'F-01', 'warm'],
  ['TAŞ ATÖLYE · İÇ',      'F-02', ''],
  ['DAMLA SAKIZ · MAKRO',  'F-03', 'olive'],
  ['CUNDA LİMANI · ŞAFAK', 'F-04', ''],
  ['EKŞİ MAYA · YOĞURMA',  'F-05', 'warm'],
  ['KAŞAR KESİTİ · 1Y',    'F-06', ''],
];

export default function Hero() {
  return (
    <section id="top" className="kb-hero">
      <div className="kb-hero-photo">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>
      <div className="kb-hero-bg" />
      <div className="kb-hero-grain" />
      <div className="kb-hero-orb" />

      <div className="container kb-hero-top">
        <div className="kb-hero-coord">
          N 39°20′ · E 26°41′<br />Cunda · Ayvalık
        </div>
        <div className="mono" style={{ color: 'var(--stone)', textAlign: 'center' }}>
          № 001 — Hasat &apos;26
        </div>
        <div className="kb-hero-coord" style={{ textAlign: 'right' }}>
          Sıcaklık 22°C<br />Rüzgar tuzlu, hafif
        </div>
      </div>

      <div className="container kb-hero-body">
        <div className="kb-hero-content">
          <div className="kb-hero-eyebrow">Cunda Adası&apos;ndan · 1979&apos;dan beri</div>
          <h1 className="kb-hero-h1">
            Elden çıkmış,<br />
            <em>doğadan</em> gelmiş.
          </h1>
          <p className="kb-hero-sub">
            Koyun, keçi ve inek sütünden, ekşi maya ve sabırla. Üç kuşaktır taş atölyenin
            içinde elle yoğrulan peynirler — soğuk zincirle kapınıza.
          </p>
          <div className="kb-hero-ctas">
            <Link
              href="#urunler"
              className="btn btn-primary"
              style={{ background: 'var(--cream)', color: 'var(--navy)', borderColor: 'var(--cream)' }}
            >
              Ürünleri Keşfet <ArrowIcon />
            </Link>
            <Link href="#hikaye" className="btn btn-ghost">
              Hikayemizi Oku
            </Link>
          </div>
        </div>
      </div>

      <div className="container kb-hero-pano">
        <div className="kb-hero-pano-track">
          {[...PANO_CELLS, ...PANO_CELLS].map(([label, frame, variant], i) => (
            <div key={i} className={`kb-hero-pano-cell ph${variant ? ` ${variant}` : ''}`}>
              <span className="kb-hero-pano-frame">{frame}</span>
              <span className="ph-label">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="container kb-hero-bottom">
        <div className="kb-vert">Ekşi Mayalı · Çiğ Süt</div>
        <Link href="#urunler" className="kb-scroll">
          Aşağı kaydır
          <span className="kb-scroll-line" />
        </Link>
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
