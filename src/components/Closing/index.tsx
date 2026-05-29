import Image from 'next/image'
import styles from './Closing.module.css'

interface ClosingProps {
  label: string
  headline: string
  subheadline: { before: string; highlight: string }
  checklist: string[]
  ctaText: string
  ctaUrl: string
  photo: string
  authorName: string
}

const CheckIcon = () => (
  <svg viewBox="0 0 14 14" fill="none" aria-hidden="true" width="16" height="16">
    <path d="M3 7.5l2.75 2.75L11 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Closing({
  label,
  headline,
  subheadline,
  checklist,
  ctaText,
  ctaUrl,
  photo,
  authorName,
}: ClosingProps) {
  return (
    <section className={styles.closing}>
      <div className={styles.inner}>
        <div className={styles.textCol}>
          <span className={styles.eyebrow}>{label}</span>
          <h2 className={styles.headline}>{headline}</h2>

          <div style={{ marginBottom: '2rem', fontSize: '1.25rem', opacity: 0.9 }}>
            {subheadline.before}
            <span style={{ color: 'var(--brand-primary)' }}>{subheadline.highlight}</span>
          </div>

          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0' }}>
            {checklist.map((item, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '1.125rem' }}>
                <span style={{ color: 'var(--color-primary, #2A9345)' }}><CheckIcon /></span>
                {item}
              </li>
            ))}
          </ul>

          <a href={ctaUrl} className={styles.cta}>
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
        </div>

        <div className={styles.photoCol}>
          <div className={styles.photoWrap}>
            <Image
              src="/Economista-Sincero/images/charles-4.jpg"
              alt={authorName}
              fill
              sizes="(max-width: 767px) 100vw, 45vw"
              className={styles.photo}
            />
            <div className={styles.gradient} aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}
