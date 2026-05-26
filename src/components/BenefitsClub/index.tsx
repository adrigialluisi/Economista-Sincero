import styles from './BenefitsClub.module.css'

export default function BenefitsClub() {
  return (
    <section className={styles.section} id="clube-beneficios" aria-label="Clube de Benefícios">
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>CLUBE DE BENEFÍCIOS</span>
          <h2 className={styles.headline}>Tem uma parte que pode fazer a P3X se pagar sozinha.</h2>
          <div className={styles.textBlock}>
            <p>Dentro da P3X você também ganha acesso ao Clube de Benefícios, com descontos em farmácias, mercados, postos, e-commerces e vários serviços que você já usa no dia a dia.</p>
            <p>São gastos que você já tem todo mês. A diferença é que agora parte desse dinheiro volta pro seu bolso.</p>
            <p>Pra quem usa bem, o Clube pode cobrir o valor da própria assinatura. <strong>Na prática, a clareza nos seus investimentos sai de graça.</strong></p>
          </div>
        </div>
        <div className={styles.imageBlock} aria-hidden="true">
           <div className={styles.illustration}>
             <div className={styles.icon}>
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                 <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line>
               </svg>
             </div>
             <div className={styles.icon}>
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                 <circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
               </svg>
             </div>
             <div className={styles.icon}>
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                 <path d="M3 22h18"></path><path d="M4 22V6c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v16"></path><path d="M14 10h4c1.1 0 2 .9 2 2v10"></path><line x1="8" y1="12" x2="8" y2="12.01"></line><line x1="18" y1="14" x2="18" y2="14.01"></line>
               </svg>
             </div>
             <div className={styles.icon}>
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                 <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
               </svg>
             </div>
           </div>
        </div>
      </div>
    </section>
  )
}
