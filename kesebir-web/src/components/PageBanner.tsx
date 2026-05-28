interface PageBannerProps {
  eyebrow?: string;
  title: string;
}

export default function PageBanner({ eyebrow, title }: PageBannerProps) {
  return (
    <div className="kb-page-banner">
      <div className="kb-page-banner-bg" />
      <div className="kb-page-banner-grain" />
      <div className="container kb-page-banner-inner">
        {eyebrow && <div className="kb-page-banner-eye">{eyebrow}</div>}
        <h1 className="kb-page-banner-h1">{title}</h1>
      </div>
    </div>
  );
}
