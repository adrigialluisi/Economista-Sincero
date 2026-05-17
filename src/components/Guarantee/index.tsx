import Image from 'next/image'
import styles from './Guarantee.module.css'

interface GuaranteeProps {
  days: number
  text: string
}

export default function Guarantee({ text }: GuaranteeProps) {
  return (
    <section className={styles.guarantee}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>Garantia incondicional</span>
          <h2 className={styles.headline}>O risco é nosso. Não o seu.</h2>
          <p className={styles.text}>{text}</p>
        </div>
        <div className={styles.imageCol}>
          <Image
            src="/Economista-Sincero/images/charles-6.jpg"
            alt="Charles"
            fill
            className={styles.image}
          />
          <div className={styles.imageFade} aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
