'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined' && !sessionStorage.getItem('kb_admin')) {
      router.replace('/admin');
    }
  }, [router]);

  const logout = () => {
    sessionStorage.removeItem('kb_admin');
    router.push('/admin');
  };

  const navItems = [
    { href: '/admin/urunler', label: 'Ürünler' },
    { href: '/admin/blog', label: 'Blog Yazıları' },
  ];

  return (
    <div className="kb-admin">
      <aside className="kb-admin-sidebar">
        <div className="kb-admin-brand">
          <span>KESEBİR</span>
          <span style={{ fontSize: 10, opacity: 0.6, letterSpacing: '0.18em' }}>YÖNETİM</span>
        </div>
        <nav className="kb-admin-nav">
          {navItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={`kb-admin-nav-item${path.startsWith(item.href) ? ' active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="kb-admin-sidebar-foot">
          <Link href="/" className="kb-admin-nav-item" style={{ opacity: 0.6 }} target="_blank">
            ↗ Siteyi Gör
          </Link>
          <button className="kb-admin-nav-item" onClick={logout} style={{ textAlign: 'left' }}>
            Çıkış Yap
          </button>
        </div>
      </aside>
      <main className="kb-admin-main">
        {children}
      </main>
    </div>
  );
}
