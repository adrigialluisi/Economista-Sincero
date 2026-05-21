import type { ReactNode } from 'react'
import styles from './Solution.module.css'

interface SolutionProps {
  label: string
  headline: string
  description: string
  pillars: Array<{ icon: string; title: string; description: string }>
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
  const SVGS = [
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: '22px', height: '22px' }}><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>,
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: '22px', height: '22px' }}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>,
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: '22px', height: '22px' }}><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>,
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: '22px', height: '22px' }}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
  ];

  return (
    <section id="solucao" className={styles.solution}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.label}>{label}</span>
          <h2 className={styles.headline}>
            {headline}
          </h2>
          <p className={styles.description}>{description}</p>
        </header>

        <div className={styles.pillars}>
          {pillars.map((pillar, i) => (
            <div key={pillar.title} className={styles.card}>
              <span className={styles.cardNum}>0{i + 1}</span>
              <div className={styles.iconWrap}>
                {SVGS[i] || pillar.icon}
              </div>
              <h3 className={styles.cardTitle}>{pillar.title}</h3>
              <p className={styles.cardDesc}>{pillar.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.bottomBlock}>
          <p className={styles.closingText}>
            {closing}
          </p>

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
