import styles from './Offer.module.css'

interface OfferProps {
  headline: string
  cardTitle: string
  priceList: string
  priceCurrent: string
  priceMonthly: string
  pricePeriod: string
  badge: string
  priceComparison: string
  benefitsTitle: string
  benefits: string[]
  ctaText: string
  ctaUrl: string
}

export default function Offer({
  headline,
  cardTitle,
  priceList,
  priceCurrent,
  priceMonthly,
  pricePeriod,
  badge,
  priceComparison,
  benefitsTitle,
  benefits,
  ctaText,
  ctaUrl,
}: OfferProps) {
  const match = priceCurrent.match(/^(R\$\s*)(.+)$/)
  const currencySymbol = match?.[1] ?? 'R$'
  const priceAmount = match?.[2] ?? '597,00'

  return (
    <section id="oferta" className={styles.offer} aria-label="Oferta P3X">
      <div className={styles.inner}>

        <header className={styles.header}>
          <span className={styles.eyebrow}>Investimento</span>
          <h2 className={styles.headline}>{headline}</h2>
        </header>

        <div className={styles.cardWrapper}>
          {/* Badge FORA do card — evita o bug de overflow:hidden */}
          <div className={styles.badgeWrap}>
            <span className={styles.badge}>{cardTitle}</span>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <p className={styles.priceOld}>
                De <s>{priceList}</s>
                <span className={styles.priceOldTag}>{badge}</span>
              </p>

              <div className={styles.priceRow}>
                <span className={styles.priceCurrencyAcc}>{currencySymbol}</span>
                <span className={styles.priceAmount}>{priceAmount}</span>
                <span className={styles.pricePeriod}>/{pricePeriod.toLowerCase()}</span>
              </div>

              <p className={styles.priceMonthly}>
                Equivalente a{' '}
                <strong className={styles.priceMonthlyEm}>{priceMonthly}/mês</strong>
              </p>
            </div>

            <hr className={styles.divider} />

            <div style={{ marginBottom: '1rem', fontWeight: 'bold' }}>
              {benefitsTitle}
            </div>

            <ul className={styles.benefits} aria-label="O que está incluído">
              {benefits.map((text, i) => (
                <li key={i} className={styles.benefit}>
                  <span className={styles.benIcon} aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 13l4 4L19 7"/>
                    </svg>
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <a href={ctaUrl} className={styles.cta}>
              {ctaText}
              <svg
                className={styles.ctaArrow}
                width="14" height="14" viewBox="0 0 14 14"
                fill="none" aria-hidden="true"
              >
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            <p className={styles.cardClosing}>
              {priceComparison}
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}