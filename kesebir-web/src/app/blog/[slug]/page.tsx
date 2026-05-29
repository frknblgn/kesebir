import { notFound } from 'next/navigation';
import Link from 'next/link';
import SiteShell from '@/components/SiteShell';
import PageBanner from '@/components/PageBanner';
import { BLOG_POSTS } from '@/lib/blog-data';

export async function generateStaticParams() {
  return BLOG_POSTS.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find(p => p.slug === slug);
  if (!post) return {};
  return { title: `${post.title} · Kesebir Blog` };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find(p => p.slug === slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter(p => p.id !== post.id && p.category === post.category).slice(0, 2);

  return (
    <SiteShell>
      <PageBanner eyebrow={`${post.categoryLabel} · ${post.readTime} dk okuma`} title={post.title} />

      <article className="kb-blog-post">
        <div className="container">
          <div className="kb-blog-post-inner">
            <div className="kb-blog-post-meta">
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.author}</span>
            </div>

            <div className="kb-blog-post-content">
              {post.content.split('\n\n').map((block, i) => {
                if (block.startsWith('**') && block.endsWith('**')) {
                  return <h3 key={i} className="kb-blog-post-h3">{block.replace(/\*\*/g, '')}</h3>;
                }
                const html = block
                  .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                  .replace(/\n/g, '<br />');
                return <p key={i} dangerouslySetInnerHTML={{ __html: html }} />;
              })}
            </div>

            <div className="kb-blog-post-back">
              <Link href="/blog" className="kb-story-link">← Tüm yazılara dön</Link>
            </div>

            {related.length > 0 && (
              <div className="kb-blog-related">
                <h3 className="kb-blog-related-h">Bunları da okuyun</h3>
                <div className="kb-blog-related-grid">
                  {related.map(r => (
                    <Link key={r.id} href={`/blog/${r.slug}`} className="kb-blog-related-card">
                      <span className="kb-blog-cat" style={{ marginBottom: 8, display: 'block' }}>{r.categoryLabel}</span>
                      <h4>{r.title}</h4>
                      <p>{r.excerpt}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </article>
    </SiteShell>
  );
}
