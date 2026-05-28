'use client';

import { FormEvent } from 'react';

export default function NewsletterForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className="kb-foot-news" onSubmit={handleSubmit}>
      <input type="email" placeholder="E-posta adresiniz" />
      <button type="submit">Abone Ol</button>
    </form>
  );
}
