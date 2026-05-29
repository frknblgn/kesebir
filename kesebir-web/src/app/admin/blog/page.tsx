'use client';

import { useState } from 'react';
import AdminShell from '@/components/AdminShell';
import { BLOG_POSTS, type BlogPost } from '@/lib/blog-data';

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>(BLOG_POSTS);
  const [editing, setEditing] = useState<BlogPost | null>(null);
  const [creating, setCreating] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = (updated: BlogPost) => {
    if (creating) {
      setPosts(prev => [updated, ...prev]);
    } else {
      setPosts(prev => prev.map(p => p.id === updated.id ? updated : p));
    }
    setEditing(null);
    setCreating(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const newPost: BlogPost = {
    id: String(Date.now()),
    slug: '',
    title: '',
    excerpt: '',
    content: '',
    category: 'tarif',
    categoryLabel: 'Tarif',
    date: new Date().toISOString().split('T')[0],
    author: 'Kesebir Mutfağı',
    readTime: 3,
  };

  return (
    <AdminShell>
      <div className="kb-admin-page-head">
        <h1 className="kb-admin-h1">Blog Yazıları</h1>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          {saved && <div className="kb-admin-toast">✓ Kaydedildi</div>}
          {!editing && !creating && (
            <button className="btn btn-primary" onClick={() => { setEditing(newPost); setCreating(true); }}>
              + Yeni Yazı
            </button>
          )}
        </div>
      </div>

      <div className="kb-admin-note">
        <strong>Not:</strong> Bu panelde yaptığınız değişiklikler oturum süresince geçerlidir. Kalıcı kayıt için <code>src/lib/blog-data.ts</code> dosyasını güncelleyin.
      </div>

      {editing ? (
        <BlogEditForm post={editing} onSave={handleSave} onCancel={() => { setEditing(null); setCreating(false); }} />
      ) : (
        <div className="kb-admin-table">
          <div className="kb-admin-table-head">
            <span>Başlık</span>
            <span>Kategori</span>
            <span>Tarih</span>
            <span></span>
          </div>
          {posts.map(p => (
            <div key={p.id} className="kb-admin-table-row">
              <div>
                <strong>{p.title}</strong>
                <div style={{ fontSize: 12, color: '#888', marginTop: 2 }}>{p.excerpt.slice(0, 60)}…</div>
              </div>
              <div>{p.categoryLabel}</div>
              <div>{p.date}</div>
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

function BlogEditForm({ post, onSave, onCancel }: {
  post: BlogPost;
  onSave: (p: BlogPost) => void;
  onCancel: () => void;
}) {
  const [form, setForm] = useState({ ...post });
  const set = (k: keyof BlogPost, v: string | number) => setForm(f => ({ ...f, [k]: v }));

  const CATS = [
    { id: 'tarif', label: 'Tarif' },
    { id: 'bilgi', label: 'Peynir Rehberi' },
    { id: 'haber', label: 'Haber' },
  ];

  return (
    <div className="kb-admin-form">
      <h2 className="kb-admin-form-h">{form.title || 'Yeni Yazı'}</h2>

      <div className="kb-form-group">
        <label className="kb-form-label">Başlık</label>
        <input className="kb-form-input" value={form.title} onChange={e => set('title', e.target.value)} />
      </div>

      <div className="kb-form-row">
        <div className="kb-form-group">
          <label className="kb-form-label">Slug (URL)</label>
          <input className="kb-form-input" value={form.slug} placeholder="tarif-adi-kucuk-harf" onChange={e => set('slug', e.target.value)} />
        </div>
        <div className="kb-form-group">
          <label className="kb-form-label">Kategori</label>
          <select className="kb-form-input" value={form.category} onChange={e => {
            const cat = CATS.find(c => c.id === e.target.value)!;
            setForm(f => ({ ...f, category: cat.id as BlogPost['category'], categoryLabel: cat.label }));
          }}>
            {CATS.map(c => <option key={c.id} value={c.id}>{c.label}</option>)}
          </select>
        </div>
      </div>

      <div className="kb-form-row">
        <div className="kb-form-group">
          <label className="kb-form-label">Yazar</label>
          <input className="kb-form-input" value={form.author} onChange={e => set('author', e.target.value)} />
        </div>
        <div className="kb-form-group">
          <label className="kb-form-label">Tarih</label>
          <input className="kb-form-input" type="date" value={form.date} onChange={e => set('date', e.target.value)} />
        </div>
      </div>

      <div className="kb-form-group">
        <label className="kb-form-label">Özet</label>
        <textarea className="kb-form-input kb-form-textarea" value={form.excerpt} onChange={e => set('excerpt', e.target.value)} rows={2} />
      </div>

      <div className="kb-form-group">
        <label className="kb-form-label">İçerik</label>
        <textarea className="kb-form-input kb-form-textarea" value={form.content} onChange={e => set('content', e.target.value)} rows={16} style={{ fontFamily: 'monospace', fontSize: 13 }} />
        <span style={{ fontSize: 11, color: '#888', marginTop: 4 }}>Paragrafları boş satırla ayırın. **kalın** için çift yıldız kullanın.</span>
      </div>

      <div className="kb-admin-form-actions">
        <button className="btn btn-primary" onClick={() => onSave(form)}>Kaydet</button>
        <button className="btn btn-outline" onClick={onCancel}>İptal</button>
      </div>
    </div>
  );
}
