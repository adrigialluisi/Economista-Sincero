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
  testimonials: Testimonial[]
  stats: Stat[]
}

function initials(name: string) {
  // Tira colchetes de placeholder e gera 1-2 letras
  const cleaned = name.replace(/\[|\]/g, '').trim()
  if (!cleaned) return '—'
  const parts = cleaned.split(/\s+/)
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return (parts[0][0] + parts[1][0]).toUpperCase()
}

export default function SocialProof({ testimonials, stats }: SocialProofProps) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Quem já está dentro</span>
          <h2 className={styles.headline}>
            Investidores que pararam de operar no escuro.
          </h2>
        </header>

        <div className={styles.cards}>
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
