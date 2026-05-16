'use client'

import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from 'react'

interface RevealProps {
  children: ReactNode
  /** delay em ms para entrada escalonada */
  delay?: number
  className?: string
  style?: CSSProperties
}

/**
 * Wrapper que aplica `reveal` + `is-visible` quando entra no viewport.
 * Estilos definidos em globals.css.
 */
export default function Reveal({
  children,
  delay = 0,
  className = '',
  style,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal${visible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined, ...style }}
    >
      {children}
    </div>
  )
}
