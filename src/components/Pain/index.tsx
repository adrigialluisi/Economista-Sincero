import styles from './Pain.module.css'

// Ícones SVG para cada pain box
const PAIN_ICONS = [
  // Relógio — "fecha sem decidir nada"
  <svg key="clock" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9"/>
    <path d="M12 7v5l3 3"/>
  </svg>,
  // Grid — "dinheiro em duas corretoras"
  <svg key="grid" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="8" height="8" rx="1.5"/>
    <rect x="13" y="3" width="8" height="8" rx="1.5"/>
    <rect x="3" y="13" width="8" height="8" rx="1.5"/>
    <rect x="13" y="13" width="8" height="8" rx="1.5"/>
  </svg>,
  // Lista — "não sabe se compra ou diversifica"
  <svg key="list" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 7h8M8 12h5M8 17h3"/>
    <rect x="3" y="3" width="18" height="18" rx="2"/>
  </svg>,
  // Gráfico de linha — "não sabe os pesos"
  <svg key="chart" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18l4-8 4 4 4-6 4 4"/>
    <path d="M3 18h18"/>
  </svg>,
  // Lua — "vai dormir sem saber"
  <svg key="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
  </svg>,
]

const PAIN_ITEMS = [
  'Abre o app da corretora. Olha o saldo. Fecha sem decidir nada.',
  'Tem dinheiro em duas corretoras e não sabe o total que tem.',
  'Quer fazer um aporte — mas não sabe se compra mais do que tem ou diversifica.',
  'Quer rebalancear — mas não sabe quanto cada ativo pesa hoje.',
  'Vai dormir com a sensação de quem está fazendo algo — mas não sabe o quê.',
]

export default function Pain() {
  return (
    <>
      {/* ── Seção principal: 2 colunas ─────────────────── */}
      <section className={styles.pain} aria-label="O problema">
        <div className={styles.inner}>

          {/* Coluna esquerda — headline + pain boxes */}
          <div className={styles.colLeft}>
            <span className={styles.eyebrow}>O ponto cego</span>
            <h2 className={styles.headline}>
              Deixa eu adivinhar como é o seu domingo à noite.
            </h2>
            <ul className={styles.painBoxes} aria-label="Problemas comuns do investidor">
              {PAIN_ITEMS.map((text, i) => (
                <li key={i} className={styles.painBox}>
                  <span className={styles.painIcon} aria-hidden="true">
                    {PAIN_ICONS[i]}
                  </span>
                  <span className={styles.painText}>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna direita — revelação emocional */}
          <div className={styles.colRight}>
            <p className={styles.revealPre}>
              Isso não é descuido. Não é falta de esforço.
            </p>
            <span className={styles.revealDivider} aria-hidden="true" />
            <p className={styles.revealLine}>Não é falta de inteligência.</p>
            <p className={styles.revealLine}>Não é falta de dinheiro.</p>
            <p className={styles.revealGreen}>
              É falta de um lugar onde tudo faça sentido junto.
            </p>
          </div>

        </div>
      </section>

      {/* ── Faixa de transição: parallax ───────────────── */}
      <div className={styles.transition} aria-hidden="true">
        <div className={styles.transitionOverlay} />
        <div className={styles.transitionContent}>
          <p className={styles.transSmall}>
            E enquanto você troca entre sete abas para responder uma pergunta simples
          </p>
          <p className={styles.transBig}>
            "quanto eu tenho, onde está, e o que eu faço amanhã?"
          </p>
          <p className={styles.transSmall}>
            o seu dinheiro fica parado, mal alocado, ou decidido no impulso.
          </p>
        </div>
      </div>
    </>
  )
}