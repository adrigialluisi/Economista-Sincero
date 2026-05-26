'use client'
import { useRef, useState, useEffect } from 'react'
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
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: '22px', height: '22px' }}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: '22px', height: '22px' }}><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
  ];

  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const handleScroll = () => {
    if (!scrollRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
    
    // Check buttons state
    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(Math.ceil(scrollLeft) < scrollWidth - clientWidth)

    // Estimate active index based on card width + gap (~320px on desktop)
    const cardWidth = window.innerWidth >= 768 ? 320 : window.innerWidth * 0.85
    const index = Math.round(scrollLeft / cardWidth)
    setActiveIndex(Math.min(index, pillars.length - 1))
  }

  useEffect(() => {
    handleScroll()
    window.addEventListener('resize', handleScroll)
    return () => window.removeEventListener('resize', handleScroll)
  }, [])

  const scrollByAmount = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    const amount = window.innerWidth >= 768 ? 320 : window.innerWidth * 0.85
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth'
    })
  }

  const scrollToDot = (index: number) => {
    if (!scrollRef.current) return
    const cards = scrollRef.current.children
    if (cards[index]) {
      cards[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
    }
  }

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

        <div className={styles.carouselWrap}>
          <button 
            className={`${styles.arrow} ${styles.arrowLeft}`} 
            onClick={() => scrollByAmount('left')}
            aria-label="Anterior"
            disabled={!canScrollLeft}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          
          <div className={styles.pillars} ref={scrollRef} onScroll={handleScroll}>
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

          <button 
            className={`${styles.arrow} ${styles.arrowRight}`} 
            onClick={() => scrollByAmount('right')}
            aria-label="Próximo"
            disabled={!canScrollRight}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>

        <div className={styles.pagination}>
          {pillars.map((_, i) => (
            <div 
              key={i} 
              className={`${styles.dot} ${activeIndex === i ? styles.dotActive : ''}`} 
              onClick={() => scrollToDot(i)}
            />
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
