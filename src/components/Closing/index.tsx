import Image from 'next/image'
import styles from './Closing.module.css'

interface ClosingProps {
  headline: string
  pathA: string
  pathB: string
  summary: string
  ctaText: string
  ctaUrl: string
  photo: string
  authorName: string
  authorTitle: string
}

const XIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
)

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const CheckIcon = () => (
  <svg viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M3 7.5l2.75 2.75L11 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Closing({
  headline,
  pathA,
  pathB,
  summary: _summary,
  ctaText,
  ctaUrl,
  photo,
  authorName,
  authorTitle,
}: ClosingProps) {
  return (
    <section className={styles.closing}>
      <div className={styles.inner}>
        <div className={styles.textCol}>
          <span className={styles.eyebrow}>Decisão</span>
          <h2 className={styles.headline}>{headline}</h2>

          <div className={styles.paths}>
            <div className={`${styles.path} ${styles.pathA}`}>
              <span className={styles.pathIcon}><XIcon /></span>
              <p>{pathA}</p>
            </div>
            <div className={`${styles.path} ${styles.pathB}`}>
              <span className={styles.pathIcon}><ArrowIcon /></span>
              <p>{pathB}</p>
            </div>
          </div>

          <div className={styles.summary}>
            <span className={styles.summaryItem}><CheckIcon /> 7 dias de garantia</span>
            <span className={styles.summaryItem}><CheckIcon /> R$ 597 no ano</span>
            <span className={styles.summaryItem}><CheckIcon /> Acesso imediato</span>
          </div>

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
              src={photo}
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
