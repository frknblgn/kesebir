'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { NAV_PRODUCTS, NAV_STORY, type NavItem } from '@/lib/data';
import {
  ArrowIcon,
  BagIcon,
  CaretIcon,
  CloseIcon,
  CrestIcon,
  MenuIcon,
  SearchIcon,
  UserIcon,
} from './Icons';

function Logo({ inverted }: { inverted: boolean }) {
  const color = inverted ? 'var(--cream)' : 'var(--navy)';
  return (
    <Link href="/" style={{ color, display: 'flex', alignItems: 'center', gap: 12 }}>
      <CrestIcon
        width="28"
        height="28"
        style={{ color: inverted ? 'var(--stone)' : 'var(--olive)' }}
      />
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <span style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 22, letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 500 }}>
          Kesebir
        </span>
        <span style={{ fontFamily: 'var(--font-jetbrains), monospace', fontSize: 9, letterSpacing: '0.32em', textTransform: 'uppercase', marginTop: 3, opacity: 0.7 }}>
          Mandıra · 1979
        </span>
      </div>
    </Link>
  );
}

function Dropdown({ items, eyebrow, footnote, footHref }: { items: NavItem[]; eyebrow: string; footnote: string; footHref: string; }) {
  return (
    <div className="kb-dropdown">
      <div className="eyebrow" style={{ color: 'var(--olive)', marginBottom: 18 }}>{eyebrow}</div>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>
        {items.map(item => (
          <li key={item.label}>
            <Link href={item.href} className="kb-dropdown-row">
              <span style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 22, letterSpacing: '0.02em' }}>
                {item.label}
              </span>
              <span className="mono" style={{ color: 'var(--olive)', opacity: 0.7 }}>{item.hint}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: 22, paddingTop: 16, borderTop: '1px solid var(--stone)', fontSize: 12, color: 'var(--olive)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontStyle: 'italic', fontFamily: 'var(--font-cormorant), serif', fontSize: 15 }}>{footnote}</span>
        <Link href={footHref} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
          Tümünü gör <ArrowIcon />
        </Link>
      </div>
    </div>
  );
}

export default function Nav() {
  const { totalQty, pulse, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setOpen(null); setMobileOpen(false); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const enter = (k: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(k);
  };
  const leave = () => { closeTimer.current = setTimeout(() => setOpen(null), 160); };

  return (
    <>
      <nav className={`kb-nav${scrolled ? ' scrolled' : ''}`}>
        <div className="container kb-nav-inner">
          <Logo inverted={!scrolled} />

          <div className="kb-nav-center">
            <Link href="/" className="kb-nav-item">Ana Sayfa</Link>

            <div onMouseEnter={() => enter('urunler')} onMouseLeave={leave} style={{ position: 'relative' }}>
              <button
                className={`kb-nav-item${open === 'urunler' ? ' active' : ''}`}
                onClick={() => setOpen(open === 'urunler' ? null : 'urunler')}
              >
                Ürünlerimiz <CaretIcon style={{ transform: open === 'urunler' ? 'rotate(180deg)' : 'none', transition: 'transform 320ms' }} />
              </button>
              <div className={`kb-drop-wrap${open === 'urunler' ? ' show' : ''}`}>
                <Dropdown items={NAV_PRODUCTS} eyebrow="Atölyemizden · El Yapımı" footnote="Soğuk zincirle 48 saatte kapınızda" footHref="/urunler" />
              </div>
            </div>

            <div onMouseEnter={() => enter('hikayemiz')} onMouseLeave={leave} style={{ position: 'relative' }}>
              <button
                className={`kb-nav-item${open === 'hikayemiz' ? ' active' : ''}`}
                onClick={() => setOpen(open === 'hikayemiz' ? null : 'hikayemiz')}
              >
                Hikayemiz <CaretIcon style={{ transform: open === 'hikayemiz' ? 'rotate(180deg)' : 'none', transition: 'transform 320ms' }} />
              </button>
              <div className={`kb-drop-wrap${open === 'hikayemiz' ? ' show' : ''}`}>
                <Dropdown items={NAV_STORY} eyebrow="Cunda · Bir Aile · Üç Kuşak" footnote="1979'dan beri taş atölyede" footHref="/hikayemiz" />
              </div>
            </div>

            <Link href="/iletisim" className="kb-nav-item">İletişim</Link>
          </div>

          <div className="kb-nav-right">
            <button className="kb-icon-btn desk-only" aria-label="Ara"><SearchIcon /></button>
            <button className="kb-icon-btn desk-only" aria-label="Hesabım"><UserIcon /></button>
            <button className="kb-icon-btn" aria-label="Sepet" onClick={openCart}>
              <BagIcon />
              <span className={`kb-cart-badge${pulse ? ' pulse' : ''}`}>{totalQty}</span>
            </button>
            <button className="kb-icon-btn kb-mobile-btn" aria-label="Menü" onClick={() => setMobileOpen(true)}>
              <MenuIcon />
            </button>
          </div>
        </div>
      </nav>

      <div className={`kb-mobile-overlay${mobileOpen ? ' open' : ''}`}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Logo inverted />
          <button className="kb-icon-btn" onClick={() => setMobileOpen(false)} aria-label="Kapat"><CloseIcon /></button>
        </div>
        <div style={{ marginTop: 48, display: 'flex', flexDirection: 'column', gap: 6 }}>
          {([['Ana Sayfa', '/'], ['Ürünlerimiz', '/urunler'], ['Hikayemiz', '/hikayemiz'], ['İletişim', '/iletisim']] as const).map(
            ([l, h]) => (
              <Link key={l} href={h} onClick={() => setMobileOpen(false)} style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 44, letterSpacing: '0.02em', padding: '14px 0', borderBottom: '1px solid rgba(217,207,193,0.2)' }}>
                {l}
              </Link>
            )
          )}
        </div>
        <div style={{ marginTop: 'auto', color: 'var(--stone)', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
          Cunda Adası · Ayvalık<br />+90 535 439 96 10
        </div>
      </div>
    </>
  );
}
