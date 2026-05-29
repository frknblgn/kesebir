'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD ?? 'kesebir2026';

export default function AdminLoginPage() {
  const router = useRouter();
  const [pw, setPw] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (pw === ADMIN_PASSWORD) {
      sessionStorage.setItem('kb_admin', '1');
      router.push('/admin/urunler');
    } else {
      setError(true);
    }
  };

  return (
    <div className="kb-admin-login">
      <div className="kb-admin-login-box">
        <div className="kb-admin-logo">
          <span>KESEBİR</span>
          <span className="kb-admin-logo-sub">Yönetim Paneli</span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="kb-form-group">
            <label className="kb-form-label">Şifre</label>
            <input
              className="kb-form-input"
              type="password"
              value={pw}
              onChange={e => { setPw(e.target.value); setError(false); }}
              placeholder="••••••••"
              autoFocus
            />
            {error && <span style={{ color: '#c0392b', fontSize: 13 }}>Şifre hatalı.</span>}
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
}
