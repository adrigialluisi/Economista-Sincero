import styles from './Moment.module.css'

interface MomentProps {
  headline: string
  narrative: string
  quote: string
  closing: string
  videoSrc?: string  // opcional — quando o vídeo chegar
}

export default function Moment({ headline, narrative, quote, closing, videoSrc }: MomentProps) {
  return (
    <section id="momento" className={styles.moment} aria-label="O momento que muda tudo">
      <div className={styles.inner}>

        {/* ── Coluna esquerda — texto ── */}
        <div className={styles.colLeft}>
          <div className={styles.topBlock}>
            <span className={styles.eyebrow}>O momento que muda tudo</span>

            <h2 className={styles.headline}>{headline}</h2>

            <p className={styles.narrative}>{narrative}</p>

            <blockquote className={styles.quoteBlock}>
              <span className={styles.quoteText}>{quote}</span>
            </blockquote>
          </div>

          <div className={styles.closingBlock}>
            <p className={styles.closingText}>{closing}</p>
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