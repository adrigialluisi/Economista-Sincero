import styles from './Guarantee.module.css'

interface GuaranteeProps {
  days: number
  text: string
}

export default function Guarantee({ days, text }: GuaranteeProps) {
  return (
    <section className={styles.guarantee}>
      <div className={styles.inner}>
        <span className={styles.eyebrow}>Garantia incondicional</span>

        <div className={styles.badge}>
          <div className={styles.shieldWrap}>
            <svg
              className={styles.shield}
              viewBox="0 0 72 80"
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="g-shield" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2A9345" stopOpacity="0.18"/>
                  <stop offset="100%" stopColor="#2A9345" stopOpacity="0"/>
                </linearGradient>
              </defs>
              <path
                d="M36 2L6 14v24c0 18 12.5 35 30 41 17.5-6 30-23 30-41V14L36 2z"
                fill="url(#g-shield)"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M23 40l9 9 17-17"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <span className={styles.days}>{days}</span>
          <span className={styles.daysSuffix}>dias de garantia</span>
        </div>

        <h2 className={styles.headline}>O risco é nosso. Não o seu.</h2>
        <p className={styles.text}>{text}</p>
      </div>
    </section>
  )
}
