import Link from 'next/link';
import NewsletterForm from './NewsletterForm';

export default function Footer() {
  return (
    <footer id="iletisim" className="kb-footer">
      <div className="container" style={{ position: 'relative' }}>
        <div className="kb-foot-top">
          <div>
            <div className="kb-foot-h">Cunda Mektubu</div>
            <div className="kb-foot-h2">
              Mevsim defterimize<br /><em>siz de yazılın.</em>
            </div>
            <p className="kb-foot-body">
              Yeni hasatlar, sınırlı üretimler ve atölyemizden notlar — ayda iki, kısa ve
              kokulu mektuplar.
            </p>
            <NewsletterForm />
          </div>

          <div>
            <div className="kb-foot-h">Mağaza</div>
            <ul className="kb-foot-list">
              <li><Link href="#urunler">Cunda Peynirleri</Link></li>
              <li><Link href="#urunler">Saganaki</Link></li>
              <li><Link href="#urunler">Zeytinyağı</Link></li>
              <li><Link href="#urunler">Zeytin</Link></li>
              <li><Link href="#urunler">Hediye Setleri</Link></li>
            </ul>
          </div>

          <div>
            <div className="kb-foot-h">Hikayemiz</div>
            <ul className="kb-foot-list">
              <li><Link href="#hikaye">Hakkımızda</Link></li>
              <li><Link href="#hikaye">Üretim Süreci</Link></li>
              <li><Link href="#hikaye">Sertifikalarımız</Link></li>
              <li><Link href="#hikaye">Basında Biz</Link></li>
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
            <span>Cunda Adası</span>
            <span>1979&apos;dan beri</span>
            <span>Ekşi Mayalı</span>
            <span>El Yapımı</span>
            <span>Soğuk Zincir</span>
            <span>Üç Kuşak</span>
            <span>Cunda Adası</span>
            <span>1979&apos;dan beri</span>
            <span>Ekşi Mayalı</span>
            <span>El Yapımı</span>
            <span>Soğuk Zincir</span>
            <span>Üç Kuşak</span>
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
