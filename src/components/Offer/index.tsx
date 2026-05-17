import styles from './Offer.module.css'

const COST_ITEMS = [
  {
    text: 'Aporte parado em conta corrente por falta de decisão',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6"/>
      </svg>
    ),
  },
  {
    text: 'Posição que caiu por inércia — você sabia que estava errado',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    text: 'Imposto pago a mais por não acompanhar o calendário',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
  },
]

const BENEFIT_ITEMS = [
  {
    text: 'Consolidador integrado à B3, com leitura oficial',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"/>
        <polyline points="13 2 13 9 20 9"/>
      </svg>
    ),
  },
  {
    text: 'Carteiras recomendadas — Brasil e Exterior',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
  },
  {
    text: 'Cursos do iniciante ao avançado, atualizados',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polygon points="10 8 16 12 10 16 10 8"/>
      </svg>
    ),
  },
  {
    text: 'Comunidade ativa, moderada, sem ruído',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
  {
    text: 'Acesso por 12 meses completos a tudo',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
]

interface OfferProps {
  headline: string
  anchorText: string
  priceList: string
  priceCurrent: string
  priceMonthly: string
  pricePeriod: string
  priceNote: string
  priceComparison: string
  ctaText: string
  ctaUrl: string
}

export default function Offer({
  headline,
  anchorText,
  priceList,
  priceCurrent,
  priceMonthly,
  pricePeriod,
  priceComparison,
  ctaText,
  ctaUrl,
}: OfferProps) {
  // Separa "R$ " do número para colorir o símbolo em verde
  const match = priceCurrent.match(/^(R\$\s*)(.+)$/)
  const currencySymbol = match?.[1] ?? ''
  const priceAmount = match?.[2] ?? priceCurrent

  return (
    <section id="oferta" className={styles.offer} aria-label="Oferta P3X">
      <div className={styles.inner}>

        {/* ── Coluna esquerda — argumento ── */}
        <div className={styles.colLeft}>
          <span className={styles.eyebrow}>Investimento</span>
          <h2 className={styles.headline}>{headline}</h2>

          <p className={styles.anchorIntro}>Antes do número, faz uma conta.</p>
          <p className={styles.anchorText}>{anchorText}</p>

          <ul className={styles.costList} aria-label="Exemplos de custo da falta de clareza">
            {COST_ITEMS.map((item, i) => (
              <li key={i} className={styles.costItem}>
                <span className={styles.costIcon} aria-hidden="true">
                  {item.icon}
                </span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>

          <div className={styles.leftClosing}>
            <p className={styles.leftClosingText}>
              Provavelmente esse número passou de{' '}
              <span className={styles.leftClosingGreen}>R$ 597</span>{' '}
              só nos últimos doze meses.
            </p>
          </div>
        </div>

        {/* ── Coluna direita — card de preço ── */}
        <div className={styles.colRight}>
          {/* Badge FORA do card — evita o bug de overflow:hidden */}
          <div className={styles.badgeWrap}>
            <span className={styles.badge}>Acesso completo</span>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <p className={styles.planName}>Assinatura anual P3X</p>

              <p className={styles.priceOld}>
                De <s>{priceList}</s>
                <span className={styles.priceOldTag}>40% off</span>
              </p>

              <div className={styles.priceRow}>
                <span className={styles.priceCurrencyAcc}>{currencySymbol}</span>
                <span className={styles.priceAmount}>{priceAmount}</span>
                <span className={styles.pricePeriod}>,00/{pricePeriod}</span>
              </div>

              <p className={styles.priceMonthly}>
                Equivalente a{' '}
                <strong className={styles.priceMonthlyEm}>{priceMonthly}/mês</strong>
              </p>
            </div>

            <hr className={styles.divider} />

            <ul className={styles.benefits} aria-label="O que está incluído">
              {BENEFIT_ITEMS.map((item, i) => (
                <li key={i} className={styles.benefit}>
                  <span className={styles.benIcon} aria-hidden="true">
                    {item.icon}
                  </span>
                  <span>{item.text}</span>
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
              Menos do que você gasta em{' '}
              <span className={styles.cardClosingGreen}>delivery num mês comum.</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}