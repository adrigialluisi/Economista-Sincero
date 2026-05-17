import Image from 'next/image'
import styles from './Authority.module.css'

interface AuthorityProps {
  name: string
  title: string
  bioFull: string
  credentials: string[]
  photo: string
}

export default function Authority({ name, title, bioFull, credentials, photo }: AuthorityProps) {
  return (
    <section id="autoridade" className={styles.authority}>
      <div className={styles.inner}>
        <div className={styles.photoCol}>
          <div className={styles.photoWrap}>
            <Image
              src={photo}
              alt={`${name} — ${title}`}
              fill
              sizes="(max-width: 767px) 100vw, 45vw"
              className={styles.photo}
            />
            <div className={styles.gradient} aria-hidden="true" />
            <span className={styles.ribbon}>
              <span className={styles.ribbonDot} />
              Eleito 4× pela ANBIMA
            </span>
          </div>
        </div>

        <div className={styles.textCol}>
          <span className={styles.eyebrow}>Economista Sincero</span>
          <div className={styles.nameBlock}>
            <h2 className={styles.name}>{name}</h2>
          </div>
          <p className={styles.bio}>{bioFull}</p>
          <ul className={styles.credentials} aria-label="Credenciais">
            {credentials.map((cred) => (
              <li key={cred} className={styles.credItem}>
                <span className={styles.credCheck} aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6.5l2.25 2.25L9.5 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span>{cred}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
