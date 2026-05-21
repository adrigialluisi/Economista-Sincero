import Image from 'next/image'
import styles from './Guarantee.module.css'

interface GuaranteeProps {
  headline: string
  subheadline: string
  text: string
  photo: string
}

export default function Guarantee({ headline, subheadline, text, photo }: GuaranteeProps) {
  return (
    <section className={styles.guarantee}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>{subheadline}</span>
          <h2 className={styles.headline}>{headline}</h2>
          <p className={styles.text}>
            Entre, conecte sua B3 e teste a plataforma.<br />
            Se não fizer sentido pra você, devolvemos 100%. Sem burocracia.
          </p>
        </div>
        <div className={styles.imageCol}>
          <Image
            src="/Economista-Sincero/images/charles-7.jpg"
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
