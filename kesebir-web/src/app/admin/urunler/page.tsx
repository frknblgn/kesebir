'use client';

import { useState } from 'react';
import AdminShell from '@/components/AdminShell';
import { PRODUCTS, CATEGORIES, type Product } from '@/lib/data';

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
        {saved && <div className="kb-admin-toast">✓ Değişiklikler kaydedildi</div>}
      </div>

      <div className="kb-admin-note">
        <strong>Not:</strong> Bu panelde yaptığınız değişiklikler oturum süresince geçerlidir. Kalıcı kayıt için kod tabanında <code>src/lib/data.ts</code> dosyasını güncelleyin.
      </div>

      {editing ? (
        <ProductEditForm product={editing} onSave={handleSave} onCancel={() => setEditing(null)} />
      ) : (
        <div className="kb-admin-table">
          <div className="kb-admin-table-head">
            <span>Ürün Adı</span>
            <span>Kategori</span>
            <span>Fiyat Aralığı</span>
            <span></span>
          </div>
          {products.map(p => (
            <div key={p.id} className="kb-admin-table-row">
              <div>
                <strong>{p.name}</strong>
                <div style={{ fontSize: 12, color: '#888', marginTop: 2 }}>{p.sub}</div>
              </div>
              <div>{CATEGORIES.find(c => c.id === p.category)?.label ?? p.category}</div>
              <div>₺{p.variants[0].price} – ₺{p.variants[p.variants.length - 1].price}</div>
              <div>
                <button className="kb-admin-btn" onClick={() => setEditing(p)}>Düzenle</button>
              </div>
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
  const set = (k: keyof Product, v: string) => setForm(f => ({ ...f, [k]: v }));

  return (
    <div className="kb-admin-form">
      <h2 className="kb-admin-form-h">{form.name}</h2>

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
        <textarea className="kb-form-input kb-form-textarea" value={form.description} onChange={e => set('description', e.target.value)} rows={4} />
      </div>

      <div className="kb-form-group">
        <label className="kb-form-label">Eşleşme Önerisi</label>
        <input className="kb-form-input" value={form.pairing} onChange={e => set('pairing', e.target.value)} />
      </div>

      <div className="kb-admin-variants-section">
        <label className="kb-form-label" style={{ display: 'block', marginBottom: 12 }}>Fiyatlar</label>
        {form.variants.map((v, i) => (
          <div key={i} className="kb-admin-variant-row">
            <span className="mono" style={{ minWidth: 60 }}>{v.w}</span>
            <div className="kb-form-group" style={{ margin: 0, flex: 1 }}>
              <input
                className="kb-form-input"
                type="number"
                value={v.price}
                onChange={e => {
                  const variants = [...form.variants];
                  variants[i] = { ...v, price: Number(e.target.value) };
                  setForm(f => ({ ...f, variants }));
                }}
              />
            </div>
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
