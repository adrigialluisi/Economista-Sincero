'use client'

import styles from './VideoHero.module.css'

export default function VideoHero() {
  return (
    <section className={styles.videoSection} aria-label="Vídeo de Apresentação">
      <div className={styles.inner}>
        <div className={styles.videoWrapper} aria-label="Play Vídeo">
          <div className={styles.playIcon} aria-hidden="true">
            <div className={styles.playTriangle}></div>
          </div>
          <span className={styles.placeholderText}>Área de Vídeo</span>
          {/* O iframe ou componente de vídeo real (ex: YouTube, Vimeo, Panda) será inserido aqui */}
        </div>
      </div>
    </section>
  )
}
