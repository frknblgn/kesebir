import Link from 'next/link';
import SiteShell from '@/components/SiteShell';
import PageBanner from '@/components/PageBanner';
import { BLOG_POSTS, BLOG_CATEGORIES } from '@/lib/blog-data';

export const metadata = { title: 'Blog · Kesebir Mandıra' };

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ cat?: string }> }) {
  const { cat } = await searchParams;
  const posts = cat && cat !== 'all' ? BLOG_POSTS.filter(p => p.category === cat) : BLOG_POSTS;

  return (
    <SiteShell>
      <PageBanner eyebrow="Tarifler · Rehber · Haberler" title="Blog" />

      <section className="kb-blog-list">
        <div className="container">
          <div className="kb-chips" style={{ paddingTop: 40, paddingBottom: 0 }}>
            {BLOG_CATEGORIES.map(c => (
              <Link
                key={c.id}
                href={c.id === 'all' ? '/blog' : `/blog?cat=${c.id}`}
                className={`kb-chip${(!cat && c.id === 'all') || cat === c.id ? ' active' : ''}`}
              >
                {c.label}
              </Link>
            ))}
          </div>

          <div className="kb-blog-grid">
            {posts.map(post => (
              <article key={post.id} className="kb-blog-card">
                <Link href={`/blog/${post.slug}`} className="kb-blog-card-img ph olive">
                  <span className="kb-blog-cat">{post.categoryLabel}</span>
                </Link>
                <div className="kb-blog-card-body">
                  <div className="kb-blog-meta">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime} dk okuma</span>
                  </div>
                  <h2 className="kb-blog-card-title">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="kb-blog-card-excerpt">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="kb-story-link" style={{ marginTop: 16 }}>
                    Devamını oku →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
