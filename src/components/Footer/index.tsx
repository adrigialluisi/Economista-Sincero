import Image from 'next/image'
import styles from './Footer.module.css'

interface FooterLink {
  label: string
  href: string
}

interface FooterProps {
  logo: string
  logoAlt?: string
  tagline: string
  links: FooterLink[]
  copyright: string
}

export default function Footer({ logo, logoAlt = 'P3X', tagline, links, copyright }: FooterProps) {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <Image
              src={logo}
              alt={logoAlt}
              width={260}
              height={64}
              style={{ objectFit: 'contain', objectPosition: 'left center', width: '260px', height: 'auto', display: 'block' }}
            />
            <p className={styles.tagline}>
              {tagline}
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
        </div>
      </div>
    </footer>
  )
}
