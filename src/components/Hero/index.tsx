import Image from 'next/image'
import styles from './Hero.module.css'

interface HeroProps {
  headline: string
  subheadline: {
    before: string
    highlight: string
  }
  description?: string
  checklist: string[]
  checklistHighlight: string
  ctaText: string
  ctaMicrocopy: string
  ctaUrl: string
  heroImage: string
  authorName: string
}

export default function Hero({
  headline,
  subheadline,
  description,
  checklist,
  checklistHighlight,
  ctaText,
  ctaMicrocopy,
  ctaUrl,
  heroImage,
  authorName,
}: HeroProps) {
  return (
    <section className={styles.hero} aria-label="Apresentação P3X">
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.glow2} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.textCol}>
          <p className={styles.eyebrow}>
            {headline}
          </p>

          <h1 className={styles.headline}>
            {subheadline.before.split('\n').map((line, i, arr) => {
              if (i === arr.length - 1) {
                return (
                  <span key={i} style={{ display: 'block' }}>
                    {line}
                    <span style={{ color: 'var(--brand-primary)' }}>
                      {subheadline.highlight}
                    </span>
                  </span>
                )
              }
              return <span key={i} style={{ display: 'block' }}>{line}</span>
            })}
          </h1>

          {description && (
            <p className={styles.description}>
              {description}
            </p>
          )}

          {/* New Checklist Block */}
          <div className={styles.checklistBlock} style={{ marginBottom: '2rem' }}>
            <ul className={styles.checklist} style={{ listStyle: 'none', padding: 0, margin: '0 0 1rem 0' }}>
              {checklist.map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '1.125rem' }}>
                  <span aria-hidden="true" style={{ color: 'var(--color-primary, #2A9345)' }}>✔</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className={styles.checklistHighlight} style={{ fontWeight: 'bold', fontSize: '1rem', letterSpacing: '0.05em' }}>
              {checklistHighlight}
            </p>
          </div>

          <div className={styles.ctaBlock}>
            <a href={ctaUrl} className={styles.ctaBtn}>
              {ctaText}
              <svg
                className={styles.ctaArrow}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <p className={styles.microcopy}>{ctaMicrocopy}</p>
          </div>
        </div>

        <div className={styles.imageCol}>
          <div className={styles.imageWrapper}>
            <Image
              src="/Economista-Sincero/images/hero.jpeg"
              alt={authorName}
              fill
              priority
              sizes="(max-width: 767px) 100vw, 45vw"
              className={styles.photo}
            />
            <div className={styles.imageGradient} aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}
