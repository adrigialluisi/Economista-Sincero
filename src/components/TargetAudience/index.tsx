import styles from './TargetAudience.module.css'

export default function TargetAudience() {
  const audiences = [
    {
      title: 'COMEÇANDO DO ZERO',
      subtitle: 'Você quer começar e não sabe por onde.',
      items: [
        'Cursos de educação financeira que partem do absoluto zero.',
        'Organização das suas finanças pra fazer o dinheiro sobrar.',
        'Carteiras prontas, com a tese explicada. Você só executa.',
        'Uma comunidade cheia de gente no mesmo ponto que você.'
      ]
    },
    {
      title: 'JÁ INVESTE',
      subtitle: 'Você já investe, mas perde tempo juntando os números.',
      items: [
        'Integração com a B3, sem mais planilhas manuais.',
        'Carteiras recomendadas de Brasil e exterior, sempre atualizadas.',
        'Visão consolidada do patrimônio inteiro, em segundos.',
        'Conteúdos avançados pra escalar o que você já construiu.'
      ]
    }
  ]

  return (
    <section className={styles.section} id="pra-quem" aria-label="Para quem é a P3X">
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>PRA QUEM É A P3X</span>
          <h2 className={styles.headline}>Tanto faz se você está começando agora ou já investe.</h2>
        </header>

        <div className={styles.grid}>
          {audiences.map((aud, i) => (
            <div key={i} className={styles.card}>
              <h3 className={styles.cardTitle}>{aud.title}</h3>
              <p className={styles.cardSubtitle}>{aud.subtitle}</p>
              <ul className={styles.list}>
                {aud.items.map((item, idx) => (
                  <li key={idx} className={styles.listItem}>
                    <span className={styles.checkIcon}>✔</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
