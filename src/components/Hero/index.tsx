import Image from 'next/image'
import styles from './Hero.module.css'

interface HeroProps {
  tag: string
  headline: string
  subheadline: string
  context: string
  ctaText: string
  ctaMicrocopy: string
  ctaUrl: string
  heroImage: string
  authorName: string
}

export default function Hero({
  tag,
  headline,
  subheadline,
  context,
  ctaText,
  ctaMicrocopy,
  ctaUrl,
  heroImage,
  authorName,
}: HeroProps) {
  // A subheadline agora é exibida de forma direta
  return (
    <section className={styles.hero} aria-label="Apresentação P3X">
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.glow2} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.textCol}>
          <p className={styles.subheadline}>
            {subheadline}
          </p>

          <h1 className={styles.headline}>
            <span className={styles.headlineRegular}>{headline.split('. ')[0]}.</span>
            {' '}
            <span className={styles.headlineBold}>{headline.split('. ')[1]}</span>
          </h1>

          <p className={styles.context}>{context}</p>

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

          <ul className={styles.trust} aria-label="Garantias de confiança">
            <li className={styles.trustItem}>
              <svg
                className={styles.trustIcon}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path d="M8 1L2 3.5v4.2c0 3.4 2.4 6.5 6 7.3 3.6-.8 6-3.9 6-7.3V3.5L8 1z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
                <path d="M5.5 8l2 2 3.5-3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Integração oficial B3
            </li>
            <li className={styles.trustItem}>
              <svg
                className={styles.trustIcon}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.3"/>
                <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Sem custódia dos ativos
            </li>
            <li className={styles.trustItem}>
              <svg
                className={styles.trustIcon}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <rect x="2" y="3" width="12" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
                <path d="M2 6h12M5 9.5h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
              </svg>
              Cancele quando quiser
            </li>
          </ul>
        </div>

        <div className={styles.imageCol}>
          <div className={styles.imageWrapper}>
            <div className={styles.imageGradient} aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}
