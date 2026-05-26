import styles from './Moment.module.css'

interface MomentProps {
  headline: string
  narrative: string[]
  bullets: string[]
  closing: string
  closingBold: string
  videoSrc?: string  // opcional — quando o vídeo chegar
}

export default function Moment({ headline, narrative, bullets, closing, closingBold, videoSrc }: MomentProps) {
  return (
    <section id="momento" className={styles.moment} aria-label="O momento que muda tudo">
      <div className={styles.inner}>

        {/* ── Coluna esquerda — texto ── */}
        <div className={styles.colLeft}>
          <div className={styles.topBlock}>
            <span className={styles.eyebrow}>O momento que muda tudo</span>

            <h2 className={styles.headline}>{headline}</h2>

            <div className={styles.narrative} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {narrative.map((line, i) => (
                <p key={i} style={{ fontSize: '1.25rem', opacity: 0.9 }}>{line}</p>
              ))}
            </div>

            <ul style={{ listStyle: 'none', paddingLeft: 0, margin: '0 0 2rem 0', fontSize: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {bullets.map((bullet, i) => (
                <li key={i} style={{ opacity: 0.8, display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>
                    <span style={{ color: 'var(--brand-primary)' }}>{bullet.split(' ')[0]}</span>{' '}
                    {bullet.substring(bullet.indexOf(' ') + 1)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.closingBlock} style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
            <p className={styles.closingText} style={{ fontSize: '1.5rem' }}>
              {closing}
              <strong style={{ color: 'var(--color-primary, #2A9345)' }}>{closingBold}</strong>
            </p>
          </div>
        </div>

        {/* ── Coluna direita — placeholder vídeo ── */}
        <div className={styles.colRight} aria-label="Área de vídeo">
          {videoSrc ? (
            /* Quando o vídeo chegar: trocar o placeholder pelo elemento <video> */
            <video
              className={styles.video}
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            /* Placeholder até o vídeo estar disponível */
            <>
              <div className={styles.videoHint} aria-hidden="true" />
              <div className={styles.playBtn} aria-hidden="true">
                <div className={styles.playTriangle} />
              </div>
              <span className={styles.videoLabel}>Vídeo do consolidador</span>
              <span className={styles.videoSub}>Em produção</span>
            </>
          )}
        </div>

      </div>
    </section>
  )
}