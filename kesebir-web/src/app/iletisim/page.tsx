import SiteShell from '@/components/SiteShell';
import PageBanner from '@/components/PageBanner';
import ContactForm from '@/components/ContactForm';

export const metadata = { title: 'İletişim · Kesebir Mandıra' };

export default function IletisimPage() {
  return (
    <SiteShell>
      <PageBanner eyebrow="Bize Ulaşın" title="İletişim" />

      <section className="kb-iletisim">
        <div className="container">
          <div className="kb-iletisim-grid">

            <div className="kb-iletisim-left">
              <div className="kb-iletisim-block">
                <div className="kb-iletisim-label">Adres</div>
                <p className="kb-iletisim-val">
                  Namık Kemal, Belediye Sok. No:7<br />
                  10405 Ayvalık / Balıkesir
                </p>
              </div>
              <div className="kb-iletisim-block">
                <div className="kb-iletisim-label">Telefon</div>
                <a className="kb-iletisim-val kb-iletisim-link" href="tel:+905354399610">
                  0535 439 96 10
                </a>
              </div>
              <div className="kb-iletisim-block">
                <div className="kb-iletisim-label">E-posta</div>
                <a className="kb-iletisim-val kb-iletisim-link" href="mailto:i-kesebir@hotmail.com">
                  i-kesebir@hotmail.com
                </a>
              </div>
              <div className="kb-iletisim-block">
                <div className="kb-iletisim-label">Çalışma Saatleri</div>
                <p className="kb-iletisim-val">
                  Pazartesi – Cumartesi<br />
                  09:00 – 18:00
                </p>
              </div>

              <div className="kb-iletisim-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2768.6124802296117!2d26.65542387539259!3d39.33225752092961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ba75d7c4c4a5b1%3A0xa82437a8e9d835c0!2zS2VzZWJpciBNYW5kxLFyYXPEsQ!5e1!3m2!1str!2str!4v1780011007134!5m2!1str!2str"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: 2 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="kb-iletisim-right">
              <div className="kb-iletisim-form-head">
                <h2 className="kb-iletisim-h2">Mesaj Gönderin</h2>
                <p style={{ color: 'var(--olive)', marginTop: 8 }}>
                  Sorularınız, özel sipariş talepleriniz veya toplu alım için bize yazın.
                </p>
              </div>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </SiteShell>
  );
}
