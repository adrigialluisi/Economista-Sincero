'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './Nav.module.css'

interface NavProps {
  logoTop: string
  logoScrolled: string
  logoAlt?: string
  ctaText: string
  ctaUrl: string
}

// IDs das seções que os links de âncora apontam
const NAV_SECTIONS = ['dor', 'solucao', 'momento', 'autoridade', 'prova-social', 'oferta', 'faq']

export default function Nav({ logoTop, logoScrolled, logoAlt = 'P3X', ctaText, ctaUrl }: NavProps) {
  const [hidden, setHidden] = useState(false)
  const [solid, setSolid] = useState(false)
  const [lastY, setLastY] = useState(0)
  const [activeSection, setActiveSection] = useState<string | null>(null)

  // Comportamento de scroll — hide/show + sólido após 32px (mantido sem alteração)
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setSolid(y > 32)
      if (y < 120) {
        setHidden(false)
      } else {
        setHidden(y > lastY)
      }
      setLastY(y)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [lastY])

  // IntersectionObserver — detecta qual seção está na viewport
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    NAV_SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        {
          // Considera a seção "ativa" quando ocupa pelo menos 30% da viewport
          threshold: 0.3,
          // Margem negativa no topo para compensar a altura do nav fixo
          rootMargin: '-72px 0px 0px 0px',
        }
      )

      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((obs) => obs.disconnect())
  }, [])

  return (
    <header
      className={[
        styles.nav,
        solid ? styles.navSolid : '',
        hidden ? styles.navHidden : '',
      ]
        .filter(Boolean)
        .join(' ')}
      role="banner"
    >
      <div className={styles.inner}>
        {/* Logo — height aumentado de 48px para 56px */}
        <a href="/" className={styles.logoLink} aria-label="P3X — Página inicial">
          <img
            src={logoScrolled}
            alt={logoAlt}
            className={styles.logoImg}
          />
        </a>

        {/* Links de navegação — recebem classe .linkActive quando a seção está visível */}
        <nav className={styles.links} aria-label="Navegação principal">
          <a
            href="#dor"
            className={`${styles.link}${activeSection === 'dor' ? ` ${styles.linkActive}` : ''}`}
          >
            O Ponto Cego
          </a>
          <a
            href="#solucao"
            className={`${styles.link}${activeSection === 'solucao' ? ` ${styles.linkActive}` : ''}`}
          >
            Ecossistema
          </a>
          <a
            href="#momento"
            className={`${styles.link}${activeSection === 'momento' ? ` ${styles.linkActive}` : ''}`}
          >
            A Plataforma
          </a>
          <a
            href="#autoridade"
            className={`${styles.link}${activeSection === 'autoridade' ? ` ${styles.linkActive}` : ''}`}
          >
            Charles
          </a>
          <a
            href="#prova-social"
            className={`${styles.link}${activeSection === 'prova-social' ? ` ${styles.linkActive}` : ''}`}
          >
            Depoimentos
          </a>
          <a
            href="#oferta"
            className={`${styles.link}${activeSection === 'oferta' ? ` ${styles.linkActive}` : ''}`}
          >
            Preço
          </a>
          <a
            href="#faq"
            className={`${styles.link}${activeSection === 'faq' ? ` ${styles.linkActive}` : ''}`}
          >
            FAQ
          </a>
        </nav>

        {/* CTA e Login */}
        <div className={styles.actions}>
          <a href="#" className={styles.loginLink}>
            Entrar
          </a>
          <a href={ctaUrl} className={styles.cta}>
            {ctaText}
            <svg
              className={styles.ctaArrow}
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M2 7h10M8 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </header>
  )
}