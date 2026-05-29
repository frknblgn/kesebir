'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import AdminShell from '@/components/AdminShell';
import { PRODUCTS, CATEGORIES, type Product } from '@/lib/data';

const RichTextEditor = dynamic(() => import('@/components/RichTextEditor'), { ssr: false });

export default function AdminUrunlerPage() {
  const [products, setProducts] = useState<Product[]>(PRODUCTS);
  const [editing, setEditing] = useState<Product | null>(null);
  const [saved, setSaved] = useState(false);

  const handleSave = (updated: Product) => {
    setProducts(prev => prev.map(p => p.id === updated.id ? updated : p));
    setEditing(null);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <AdminShell>
      <div className="kb-admin-page-head">
        <h1 className="kb-admin-h1">Ürünler</h1>
        {saved && <div className="kb-admin-toast">✓ Kaydedildi</div>}
      </div>

      <div className="kb-admin-note">
        <strong>Not:</strong> Görseller kalıcı olarak <code>public/images/products/</code> klasörüne kaydedilir. Metin değişiklikleri oturum süresince geçerlidir; kalıcı kayıt için <code>src/lib/data.ts</code> dosyasını güncelleyin.
      </div>

      {editing ? (
        <ProductEditForm product={editing} onSave={handleSave} onCancel={() => setEditing(null)} />
      ) : (
        <div className="kb-admin-table">
          <div className="kb-admin-table-head" style={{ gridTemplateColumns: '60px 2fr 1fr 1fr 80px' }}>
            <span>Görsel</span>
            <span>Ürün Adı</span>
            <span>Kategori</span>
            <span>Fiyat</span>
            <span></span>
          </div>
          {products.map(p => (
            <div key={p.id} className="kb-admin-table-row" style={{ gridTemplateColumns: '60px 2fr 1fr 1fr 80px' }}>
              <div>
                {p.image
                  ? <Image src={p.image} alt={p.name} width={48} height={48} style={{ objectFit: 'cover', borderRadius: 2 }} />
                  : <div style={{ width: 48, height: 48, background: '#e8e5df', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, color: '#aaa' }}>YOK</div>
                }
              </div>
              <div>
                <strong>{p.name}</strong>
                <div style={{ fontSize: 12, color: '#888', marginTop: 2 }}>{p.sub}</div>
              </div>
              <div>{CATEGORIES.find(c => c.id === p.category)?.label ?? p.category}</div>
              <div>₺{p.variants[0].price} – ₺{p.variants[p.variants.length - 1].price}</div>
              <div><button className="kb-admin-btn" onClick={() => setEditing(p)}>Düzenle</button></div>
            </div>
          ))}
        </div>
      )}
    </AdminShell>
  );
}

function ProductEditForm({ product, onSave, onCancel }: {
  product: Product;
  onSave: (p: Product) => void;
  onCancel: () => void;
}) {
  const [form, setForm] = useState({ ...product });
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const set = (k: keyof Product, v: unknown) => setForm(f => ({ ...f, [k]: v }));

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const fd = new FormData();
    fd.append('file', file);
    const res = await fetch('/api/admin/upload', { method: 'POST', body: fd });
    const data = await res.json();
    if (data.url) set('image', data.url);
    setUploading(false);
  };

  return (
    <div className="kb-admin-form">
      <h2 className="kb-admin-form-h">{form.name}</h2>

      {/* Görsel */}
      <div className="kb-form-group">
        <label className="kb-form-label">Ürün Görseli</label>
        <div className="kb-admin-img-upload">
          {form.image ? (
            <div className="kb-admin-img-preview">
              <Image src={form.image} alt="" width={160} height={200} style={{ objectFit: 'cover', borderRadius: 2 }} />
              <button type="button" className="kb-admin-img-remove" onClick={() => set('image', '')}>✕ Kaldır</button>
            </div>
          ) : (
            <div className="kb-admin-img-placeholder" onClick={() => fileRef.current?.click()}>
              <span>+ Görsel Yükle</span>
              <span style={{ fontSize: 11, opacity: 0.6 }}>JPG, PNG, WebP · Önerilen: 480×600px</span>
            </div>
          )}
          <input ref={fileRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={handleImageUpload} />
          {!form.image && (
            <button type="button" className="kb-admin-btn" onClick={() => fileRef.current?.click()} style={{ marginTop: 8 }}>
              {uploading ? 'Yükleniyor…' : 'Dosya Seç'}
            </button>
          )}
          {form.image && (
            <button type="button" className="kb-admin-btn" onClick={() => fileRef.current?.click()} style={{ marginTop: 8 }}>
              {uploading ? 'Yükleniyor…' : 'Değiştir'}
            </button>
          )}
        </div>
      </div>

      <div className="kb-form-row">
        <div className="kb-form-group">
          <label className="kb-form-label">Ürün Adı</label>
          <input className="kb-form-input" value={form.name} onChange={e => set('name', e.target.value)} />
        </div>
        <div className="kb-form-group">
          <label className="kb-form-label">Alt Başlık</label>
          <input className="kb-form-input" value={form.sub} onChange={e => set('sub', e.target.value)} />
        </div>
      </div>

      <div className="kb-form-group">
        <label className="kb-form-label">Kategori</label>
        <select className="kb-form-input" value={form.category} onChange={e => set('category', e.target.value)}>
          {CATEGORIES.filter(c => c.id !== 'all').map(c => (
            <option key={c.id} value={c.id}>{c.label}</option>
          ))}
        </select>
      </div>

      <div className="kb-form-group">
        <label className="kb-form-label">Açıklama</label>
        <RichTextEditor value={form.description} onChange={v => set('description', v)} placeholder="Ürün açıklaması…" />
      </div>

      <div className="kb-form-group">
        <label className="kb-form-label">Eşleşme Önerisi</label>
        <input className="kb-form-input" value={form.pairing} onChange={e => set('pairing', e.target.value)} />
      </div>

      <div className="kb-admin-variants-section">
        <label className="kb-form-label" style={{ display: 'block', marginBottom: 12 }}>Gramaj & Fiyatlar</label>
        {form.variants.map((v, i) => (
          <div key={i} className="kb-admin-variant-row">
            <input className="kb-form-input" value={v.w} onChange={e => {
              const variants = [...form.variants];
              variants[i] = { ...v, w: e.target.value };
              setForm(f => ({ ...f, variants }));
            }} style={{ width: 80 }} />
            <input className="kb-form-input" type="number" value={v.price} onChange={e => {
              const variants = [...form.variants];
              variants[i] = { ...v, price: Number(e.target.value) };
              setForm(f => ({ ...f, variants }));
            }} style={{ flex: 1 }} />
            <span style={{ fontSize: 13, color: '#888' }}>₺</span>
          </div>
        ))}
      </div>

      <div className="kb-admin-form-actions">
        <button className="btn btn-primary" onClick={() => onSave(form)}>Kaydet</button>
        <button className="btn btn-outline" onClick={onCancel}>İptal</button>
      </div>
    </div>
  );
}
