import styles from './Pain.module.css'

interface PainProps {
  headline: string
  narrative: string[]
  bulletsIntro: string
  bullets: string[]
  closing: string
  closingBold: string
}

export default function Pain({
  narrative,
  bulletsIntro,
  bullets,
  closing,
  closingBold,
}: PainProps) {
  const headlinePart1 = "SEUS INVESTIMENTOS ESTÃO DESORGANIZADOS E SEM LÓGICA"
  const headlinePart2 = "E ISSO CUSTA CARO."

  const painIcons = [
    (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" key="1">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
    (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" key="2">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    ),
    (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" key="3">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="3" y1="9" x2="21" y2="9"></line>
        <line x1="9" y1="21" x2="9" y2="9"></line>
      </svg>
    )
  ]

  const questionIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
      <line x1="12" y1="17" x2="12.01" y2="17"></line>
    </svg>
  )

  return (
    <section id="dor" className={styles.pain} aria-label="O problema">
      <div className={styles.inner}>
        
        {/* Coluna esquerda */}
        <div className={styles.colLeft}>
          <span className={styles.eyebrow}>O PONTO CEGO</span>
          
          <h2 className={styles.headline}>
            {headlinePart1} <span>{headlinePart2}</span>
          </h2>

          <ul className={styles.painBoxes}>
            {narrative.map((text, idx) => (
              <li key={idx} className={styles.painBox}>
                <span className={styles.painIcon}>{painIcons[idx]}</span>
                <span className={styles.painText}>{text}</span>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: '1.5rem' }}>
            <p className={styles.bulletsIntro}>{bulletsIntro}</p>
            <ul className={styles.painBoxes} style={{ marginTop: '1rem' }}>
              {bullets.map((bullet, idx) => (
                <li key={idx} className={styles.painBox}>
                  <span className={styles.painIcon}>{questionIcon}</span>
                  <span className={styles.painText}>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Coluna direita */}
        <div className={styles.colRight}>
          <p className={styles.revealPre}>O problema não é falta de inteligência.</p>
          <p className={styles.revealGreen}>É FALTA DE CLAREZA.</p>
        </div>

      </div>
    </section>
  )
}