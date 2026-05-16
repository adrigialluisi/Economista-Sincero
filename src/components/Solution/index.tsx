import type { ReactNode } from 'react'
import styles from './Solution.module.css'

const ICONS: ReactNode[] = [
  <svg key="chart" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="2" y="13" width="4" height="8" rx="1" fill="currentColor" opacity=".5"/>
    <rect x="9" y="8" width="4" height="13" rx="1" fill="currentColor" opacity=".75"/>
    <rect x="16" y="3" width="4" height="18" rx="1" fill="currentColor"/>
  </svg>,
  <svg key="portfolio" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <rect x="3" y="7" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M3 12h18M12 12v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>,
  <svg key="play" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M10 8.5l6 3.5-6 3.5V8.5z" fill="currentColor"/>
  </svg>,
  <svg key="users" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="8.5" cy="7.5" r="3.5" stroke="currentColor" strokeWidth="1.8"/>
    <path d="M2 20c0-3.314 2.91-6 6.5-6s6.5 2.686 6.5 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M16 4c1.657 0 3 1.343 3 3s-1.343 3-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M20 20c0-2.761-1.79-5-4-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>,
]

interface SolutionProps {
  label: string
  headline: string
  description: string
  pillars: Array<{ title: string; description: string }>
  closing: string
  ctaText: string
  ctaUrl: string
}

export default function Solution({
  label,
  headline,
  description,
  pillars,
  closing,
  ctaText,
  ctaUrl,
}: SolutionProps) {
  // Destaca "as quatro coisas" no fim da descrição
  const lastWord = (text: string) => {
    const i = text.lastIndexOf(' ')
    return i > 0 ? [text.slice(0, i), text.slice(i + 1)] : [text, '']
  }

  return (
    <section id="solucao" className={styles.solution}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.label}>{label}</span>
          <h2 className={styles.headline}>{headline}</h2>
          <p className={styles.description}>{description}</p>
        </header>

        <div className={styles.pillars}>
          {pillars.map((pillar, i) => (
            <div key={pillar.title} className={styles.card}>
              <span className={styles.cardNum}>0{i + 1}</span>
              <div className={styles.iconWrap}>{ICONS[i]}</div>
              <h3 className={styles.cardTitle}>{pillar.title}</h3>
              <p className={styles.cardDesc}>{pillar.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.bottomBlock}>
          <p className={styles.closing}>{closing}</p>

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
      </div>
    </section>
  )
}
