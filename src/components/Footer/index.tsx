import Image from 'next/image'
import styles from './Footer.module.css'

interface FooterLink {
  label: string
  href: string
}

interface FooterProps {
  logo: string
  logoAlt?: string
  links: FooterLink[]
  copyright: string
}

export default function Footer({ logo, logoAlt = 'P3X', links, copyright }: FooterProps) {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <Image
              src={logo}
              alt={logoAlt}
              width={140}
              height={56}
              style={{ height: '44px', width: 'auto' }}
            />
            <p className={styles.tagline}>
              Onde informação vira decisão e decisão vira renda.
            </p>
          </div>
          <nav className={styles.nav} aria-label="Links do rodapé">
            {links.map((link) => (
              <a key={link.label} href={link.href} className={styles.link}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>{copyright}</p>
          <span className={styles.disclaimer}>P3X não é corretora — sem custódia de ativos</span>
        </div>
      </div>
    </footer>
  )
}
