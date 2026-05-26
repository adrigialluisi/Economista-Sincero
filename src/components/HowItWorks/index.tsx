import styles from './HowItWorks.module.css'

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Conecte sua B3',
      text: 'Um clique, pela integração oficial. Sem digitar ativo por ativo, sem planilha.'
    },
    {
      num: '02',
      title: 'Veja tudo na hora',
      text: 'Suas ações, FIIs, renda fixa e dividendos aparecem juntos em segundos.'
    },
    {
      num: '03',
      title: 'Saiba o próximo passo',
      text: 'Você vê as carteiras recomendadas com a tese explicada, do jeito que o Charlão pensa.'
    }
  ]

  return (
    <section className={styles.section} id="como-funciona" aria-label="Como funciona">
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>COMO FUNCIONA</span>
          <h2 className={styles.headline}>Funciona em 3 passos.</h2>
        </header>
        <div className={styles.grid}>
          {steps.map((step, i) => (
            <div key={i} className={styles.card}>
              <span className={styles.number}>{step.num}.</span>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.text}>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
