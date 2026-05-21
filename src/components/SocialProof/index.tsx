'use client'

import { useRef, useState, useEffect } from 'react'
import styles from './SocialProof.module.css'

interface Testimonial {
  text: string
  name: string
  role: string
}

interface Stat {
  value: string
  label: string
}

interface SocialProofProps {
  headline: string
  testimonials: Testimonial[]
  stats: Stat[]
}

function initials(name: string) {
  const cleaned = name.replace(/\[|\]/g, '').trim()
  if (!cleaned) return '—'
  const parts = cleaned.split(/\s+/)
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return (parts[0][0] + parts[1][0]).toUpperCase()
}

export default function SocialProof({ headline, testimonials, stats }: SocialProofProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [maxDots, setMaxDots] = useState(testimonials.length)

  const handleScroll = () => {
    if (!scrollRef.current) return
    
    const cardWidth = scrollRef.current.firstElementChild?.clientWidth || 0
    if (cardWidth === 0) return
    
    // 24px is 1.5rem gap
    const gap = 24
    const itemWidth = cardWidth + gap
    
    const newIndex = Math.round(scrollRef.current.scrollLeft / itemWidth)
    setActiveIndex(newIndex)
  }

  useEffect(() => {
    const handleResize = () => {
      if (!scrollRef.current) return
      // Calculate how many visible items we have to adjust the number of dots
      // If we have 6 items, and we show 3, max scroll index is 3 (so 4 dots total: 0,1,2,3).
      const { scrollWidth, clientWidth } = scrollRef.current
      const cardWidth = scrollRef.current.firstElementChild?.clientWidth || 0
      const gap = 24
      const itemWidth = cardWidth + gap
      
      const maxScrollLeft = scrollWidth - clientWidth
      const maxPossibleIndex = Math.max(0, Math.ceil(maxScrollLeft / itemWidth))
      
      setMaxDots(maxPossibleIndex + 1)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [testimonials.length])

  const scrollTo = (index: number) => {
    if (!scrollRef.current) return
    const cardWidth = scrollRef.current.firstElementChild?.clientWidth || 0
    const gap = 24
    const itemWidth = cardWidth + gap
    scrollRef.current.scrollTo({
      left: itemWidth * index,
      behavior: 'smooth'
    })
  }

  return (
    <section id="prova-social" className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Depoimentos</span>
          <h2 className={styles.headline}>
            {headline}
          </h2>
        </header>

        <div className={styles.carouselWrap}>
          <div 
            className={styles.cards} 
            ref={scrollRef} 
            onScroll={handleScroll}
          >
            {testimonials.map((t, index) => (
              <article key={index} className={styles.card}>
                <span className={styles.quoteChar} aria-hidden="true">
                  &ldquo;
                </span>
                <p className={styles.text}>{t.text}</p>
                <footer className={styles.cardFooter}>
                  <span className={styles.avatar} aria-hidden="true">
                    {initials(t.name)}
                  </span>
                  <span className={styles.authorBlock}>
                    <strong className={styles.authorName}>{t.name}</strong>
                    <span className={styles.authorRole}>{t.role}</span>
                  </span>
                </footer>
              </article>
            ))}
          </div>

          {maxDots > 1 && (
            <div className={styles.dots}>
              {Array.from({ length: maxDots }).map((_, idx) => (
                <button
                  key={idx}
                  className={`${styles.dot} ${idx === activeIndex ? styles.dotActive : ''}`}
                  onClick={() => scrollTo(idx)}
                  aria-label={`Ir para depoimento ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        <div className={styles.stats} aria-label="Números da plataforma">
          {stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
