'use client';

import { FormEvent, useState } from 'react';
import { ArrowIcon } from './Icons';

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="kb-contact-success">
        <p style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 28, fontStyle: 'italic' }}>
          Mesajınız iletildi.
        </p>
        <p style={{ color: 'var(--olive)', marginTop: 8 }}>En kısa sürede size döneceğiz.</p>
      </div>
    );
  }

  return (
    <form className="kb-contact-form" onSubmit={handleSubmit}>
      <div className="kb-form-row">
        <div className="kb-form-group">
          <label className="kb-form-label">Ad Soyad</label>
          <input className="kb-form-input" type="text" placeholder="Adınız Soyadınız" required />
        </div>
        <div className="kb-form-group">
          <label className="kb-form-label">E-posta</label>
          <input className="kb-form-input" type="email" placeholder="ornek@email.com" required />
        </div>
      </div>
      <div className="kb-form-group">
        <label className="kb-form-label">Telefon</label>
        <input className="kb-form-input" type="tel" placeholder="0(5XX) XXX XX XX" />
      </div>
      <div className="kb-form-group">
        <label className="kb-form-label">Mesajınız</label>
        <textarea className="kb-form-input kb-form-textarea" placeholder="Merhaba, …" required rows={5} />
      </div>
      <button type="submit" className="btn btn-primary">
        Gönder <ArrowIcon />
      </button>
    </form>
  );
}
