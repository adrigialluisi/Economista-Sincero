import styles from './InlineTestimonial.module.css'

export default function InlineTestimonial() {
  return (
    <section className={styles.section} aria-label="Depoimento de Aluno">
      <div className={styles.inner}>
        <div className={styles.quoteWrapper}>
          <span className={styles.quoteMark} aria-hidden="true">&ldquo;</span>
          <blockquote className={styles.quote}>
            "Abri, conectei a B3 e pela primeira vez vi tudo o que tenho num lugar só."
          </blockquote>
          <footer className={styles.footer}>
            <div className={styles.avatar}>N</div>
            <div className={styles.authorInfo}>
              <strong className={styles.name}>[Nome real]</strong>
              <span className={styles.role}>[Profissão / Cidade]</span>
            </div>
          </footer>
        </div>
      </div>
    </section>
  )
}
