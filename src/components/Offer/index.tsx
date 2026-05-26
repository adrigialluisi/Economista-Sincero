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

        <div className={styles.contentGrid}>
          {/* COLUNA ESQUERDA: TABELA DE VALOR PERCEBIDO */}
          <div className={styles.leftCol}>
            <header className={styles.header}>
              <span className={styles.eyebrow}>Investimento</span>
              <h2 className={styles.headline}>{headline}</h2>
            </header>

            <h3 className={styles.receiveTitle}>O que você recebe</h3>

            <div className={styles.valueTable}>
              <div className={styles.valueRow}>
                <span>Consolidador integrado à B3</span>
                <span>R$ [valor]</span>
              </div>
              <div className={styles.valueRow}>
                <span>Carteiras recomendadas (BR + exterior)</span>
                <span>R$ [valor]</span>
              </div>
              <div className={styles.valueRow}>
                <span>Cursos do iniciante ao avançado</span>
                <span>R$ [valor]</span>
              </div>
              <div className={styles.valueRow}>
                <span>Comunidade ativa e moderada</span>
                <span>R$ [valor]</span>
              </div>
              <div className={styles.valueRow}>
                <span>Clube de Benefícios (economia recorrente)</span>
                <span>R$ [valor]</span>
              </div>
              <div className={`${styles.valueRow} ${styles.valueTotal}`}>
                <span><strong>VALOR TOTAL</strong></span>
                <span><strong>R$ [soma]</strong></span>
              </div>
            </div>
          </div>

          {/* COLUNA DIREITA: CARD */}
          <div className={styles.cardWrapper}>
            {/* Badge FORA do card */}
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

              <div className={styles.urgencyText}>
                🔒 Quem entra no mês de lançamento trava o preço: seu valor não muda pelos próximos 2 anos, mesmo que a P3X reajuste para novos assinantes.
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}