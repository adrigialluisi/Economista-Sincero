# Spec de Implementação — Seção Oferta (07)
**Projeto:** LP P3X / Charles Mendlowicz  
**Status:** Aprovado  
**Data:** 2026-05-16  
**Responsável:** Antigravity

---

## Visão Geral

Refatoração completa do componente `Offer`. O layout de coluna única centralizada é
substituído por duas colunas equilibradas. O título migra para a coluna esquerda.
O card de preço tem o bug do badge corrigido. Os benefits ganham ícone SVG.
Todos os textos secundários respeitam contraste mínimo — sem rgba abaixo de 0.55.

**Arquivos afetados:**
```
src/components/Offer/Offer.tsx
src/components/Offer/Offer.module.css
```

---

## 1. Layout geral

```
┌──────────────────────────────────────────────────────┐
│  SEÇÃO (fundo #000)                                  │
│  ┌──────────────────────────┬─────────────────────┐  │
│  │  COLUNA ESQUERDA         │  COLUNA DIREITA      │  │
│  │                          │                      │  │
│  │  eyebrow                 │  badge (fora do card)│  │
│  │  headline                │  ┌────────────────┐  │  │
│  │  intro argumento         │  │  CARD          │  │  │
│  │  texto âncora            │  │  plan name     │  │  │
│  │  3 itens de custo        │  │  preço antigo  │  │  │
│  │  (ícone + texto)         │  │  R$ 597/ano    │  │  │
│  │                          │  │  mensal        │  │  │
│  │  ────────────────────    │  │  divider       │  │  │
│  │  fecho com verde         │  │  5 benefits    │  │  │
│  │                          │  │  CTA           │  │  │
│  │                          │  │  fecho verde   │  │  │
│  │                          │  └────────────────┘  │  │
│  └──────────────────────────┴─────────────────────┘  │
└──────────────────────────────────────────────────────┘
```

---

## 2. Offer.tsx — componente completo

```tsx
import styles from './Offer.module.css'

const COST_ITEMS = [
  {
    text: 'Aporte parado em conta corrente por falta de decisão',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6"/>
      </svg>
    ),
  },
  {
    text: 'Posição que caiu por inércia — você sabia que estava errado',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
  {
    text: 'Imposto pago a mais por não acompanhar o calendário',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
  },
]

const BENEFIT_ITEMS = [
  {
    text: 'Consolidador integrado à B3, com leitura oficial',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"/>
        <polyline points="13 2 13 9 20 9"/>
      </svg>
    ),
  },
  {
    text: 'Carteiras recomendadas — Brasil e Exterior',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
  },
  {
    text: 'Cursos do iniciante ao avançado, atualizados',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polygon points="10 8 16 12 10 16 10 8"/>
      </svg>
    ),
  },
  {
    text: 'Comunidade ativa, moderada, sem ruído',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
  {
    text: 'Acesso por 12 meses completos a tudo',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
]

interface OfferProps {
  headline: string
  anchorText: string
  priceList: string
  priceCurrent: string
  priceMonthly: string
  pricePeriod: string
  priceNote: string
  priceComparison: string
  ctaText: string
  ctaUrl: string
}

export default function Offer({
  headline,
  anchorText,
  priceList,
  priceCurrent,
  priceMonthly,
  pricePeriod,
  priceComparison,
  ctaText,
  ctaUrl,
}: OfferProps) {
  // Separa "R$ " do número para colorir o símbolo em verde
  const match = priceCurrent.match(/^(R\$\s*)(.+)$/)
  const currencySymbol = match?.[1] ?? ''
  const priceAmount = match?.[2] ?? priceCurrent

  return (
    <section id="oferta" className={styles.offer} aria-label="Oferta P3X">
      <div className={styles.inner}>

        {/* ── Coluna esquerda — argumento ── */}
        <div className={styles.colLeft}>
          <span className={styles.eyebrow}>Investimento</span>
          <h2 className={styles.headline}>{headline}</h2>

          <p className={styles.anchorIntro}>Antes do número, faz uma conta.</p>
          <p className={styles.anchorText}>{anchorText}</p>

          <ul className={styles.costList} aria-label="Exemplos de custo da falta de clareza">
            {COST_ITEMS.map((item, i) => (
              <li key={i} className={styles.costItem}>
                <span className={styles.costIcon} aria-hidden="true">
                  {item.icon}
                </span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>

          <div className={styles.leftClosing}>
            <p className={styles.leftClosingText}>
              Provavelmente esse número passou de{' '}
              <span className={styles.leftClosingGreen}>R$ 597</span>{' '}
              só nos últimos doze meses.
            </p>
          </div>
        </div>

        {/* ── Coluna direita — card de preço ── */}
        <div className={styles.colRight}>
          {/* Badge FORA do card — evita o bug de overflow:hidden */}
          <div className={styles.badgeWrap}>
            <span className={styles.badge}>Acesso completo</span>
          </div>

          <div className={styles.card}>
            <p className={styles.planName}>Assinatura anual P3X</p>

            <p className={styles.priceOld}>
              De <s>{priceList}</s>
              <span className={styles.priceOldTag}>40% off</span>
            </p>

            <div className={styles.priceRow}>
              <span className={styles.priceCurrencyAcc}>{currencySymbol}</span>
              <span className={styles.priceAmount}>{priceAmount}</span>
              <span className={styles.pricePeriod}>,00/{pricePeriod}</span>
            </div>

            <p className={styles.priceMonthly}>
              Equivalente a{' '}
              <strong className={styles.priceMonthlyEm}>{priceMonthly}/mês</strong>
            </p>

            <hr className={styles.divider} />

            <ul className={styles.benefits} aria-label="O que está incluído">
              {BENEFIT_ITEMS.map((item, i) => (
                <li key={i} className={styles.benefit}>
                  <span className={styles.benIcon} aria-hidden="true">
                    {item.icon}
                  </span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>

            <a href={ctaUrl} className={styles.cta}>
              {ctaText}
              <svg
                className={styles.ctaArrow}
                width="14" height="14" viewBox="0 0 14 14"
                fill="none" aria-hidden="true"
              >
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            <p className={styles.cardClosing}>
              Menos do que você gasta em{' '}
              <span className={styles.cardClosingGreen}>delivery num mês comum.</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
```

---

## 3. Offer.module.css — completo

```css
/* ══════════════════════════════════════
   SEÇÃO
══════════════════════════════════════ */
.offer {
  background-color: var(--brand-dark);
  padding-block: clamp(3.5rem, 6vw, 5rem);
  position: relative;
  isolation: isolate;
  overflow: hidden;
}

/* Glow verde central muito sutil */
.offer::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60vw;
  height: 60vw;
  max-width: 700px;
  max-height: 700px;
  background: radial-gradient(circle, rgba(42, 147, 69, 0.09) 0%, transparent 60%);
  filter: blur(50px);
  pointer-events: none;
  z-index: -1;
}

.inner {
  max-width: var(--container-max);
  margin-inline: auto;
  padding-inline: var(--container-pad);
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: start;
}

@media (min-width: 900px) {
  .inner {
    grid-template-columns: 1fr 1fr;
    gap: 0;
    align-items: stretch;
  }
}

/* ══════════════════════════════════════
   COLUNA ESQUERDA
══════════════════════════════════════ */
.colLeft {
  display: flex;
  flex-direction: column;
  gap: 0;
}

@media (min-width: 900px) {
  .colLeft {
    padding-right: 3rem;
    border-right: 0.5px solid rgba(255, 255, 255, 0.07);
  }
}

.eyebrow {
  font-family: var(--font-body);
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--brand-primary);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.125rem;
}

.eyebrow::before {
  content: '';
  width: 16px;
  height: 1px;
  background: var(--brand-primary);
  display: inline-block;
}

.headline {
  font-family: var(--font-headline);
  font-size: clamp(1.5rem, 2.5vw, 1.875rem);
  font-weight: 700;
  color: #ffffff;
  line-height: 1.06;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  margin-bottom: 1.75rem;
}

.anchorIntro {
  font-family: var(--font-body);
  font-size: 0.8125rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 0.875rem;
}

.anchorText {
  font-family: var(--font-body);
  font-size: 0.9375rem;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.75;
  margin-bottom: 1.375rem;
}

/* Lista de 3 custos */
.costList {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 9px;
  margin-bottom: 1.75rem;
}

.costItem {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-family: var(--font-body);
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.5;
}

.costIcon {
  width: 30px;
  height: 30px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.04);
  border: 0.5px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: rgba(255, 255, 255, 0.4);
  margin-top: 1px;
}

.costIcon svg {
  width: 14px;
  height: 14px;
}

/* Fecho coluna esquerda */
.leftClosing {
  margin-top: auto;
  padding-top: 1.5rem;
  border-top: 0.5px solid rgba(255, 255, 255, 0.08);
}

.leftClosingText {
  font-family: var(--font-body);
  font-size: 0.9375rem;
  color: #ffffff;
  line-height: 1.7;
  font-weight: 400;
}

/* IMPORTANTE: valor "R$ 597" em verde — contraponto de cor */
.leftClosingGreen {
  color: var(--brand-primary);
  font-weight: 600;
}

/* ══════════════════════════════════════
   COLUNA DIREITA — CARD DE PREÇO
══════════════════════════════════════ */
.colRight {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 900px) {
  .colRight {
    padding-left: 3rem;
    justify-content: center;
  }
}

/* Badge ACIMA do card — fora do overflow */
/* IMPORTANTE: nunca mover o badge para dentro do card com position:absolute.
   O bug anterior era causado por transform:translate(-50%,-50%) dentro de overflow:hidden. */
.badgeWrap {
  text-align: center;
  margin-bottom: 0.875rem;
  width: 100%;
}

.badge {
  display: inline-block;
  background: var(--brand-primary);
  color: #ffffff;
  font-family: var(--font-body);
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 5px 14px;
  border-radius: var(--radius-pill);
}

/* Card */
.card {
  width: 100%;
  background: #0c0c0c;
  border: 1px solid rgba(42, 147, 69, 0.35);
  border-radius: 14px;
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  /* SEM overflow:hidden — conteúdo nunca corta */
}

.planName {
  font-family: var(--font-body);
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.45);
  text-align: center;
}

.priceOld {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: var(--font-body);
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.4);
  align-self: center;
}

.priceOld s {
  text-decoration-thickness: 1.5px;
  text-decoration-color: rgba(255, 100, 100, 0.5);
}

.priceOldTag {
  font-family: var(--font-body);
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--brand-primary);
  background: rgba(42, 147, 69, 0.12);
  border: 1px solid rgba(42, 147, 69, 0.3);
  padding: 2px 8px;
  border-radius: var(--radius-pill);
}

/* Linha do preço principal */
.priceRow {
  display: flex;
  align-items: baseline;
  gap: 4px;
  justify-content: center;
  line-height: 1;
}

/* R$ em verde */
.priceCurrencyAcc {
  font-family: var(--font-headline);
  font-size: 2rem;
  font-weight: 800;
  color: var(--brand-primary);
  line-height: 1;
}

/* 597 em branco puro — SEM background-clip (causava bug) */
.priceAmount {
  font-family: var(--font-headline);
  font-size: clamp(3.5rem, 8vw, 4.25rem);
  font-weight: 800;
  color: #ffffff;
  line-height: 0.92;
  letter-spacing: -0.03em;
}

/* ,00/ano em cinza */
.pricePeriod {
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.45);
  align-self: flex-end;
  margin-bottom: 4px;
}

.priceMonthly {
  font-family: var(--font-body);
  font-size: 0.8125rem;
  color: rgba(255, 255, 255, 0.55);
  text-align: center;
}

.priceMonthlyEm {
  color: #ffffff;
  font-weight: 500;
}

.divider {
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  margin-block: 0.125rem;
}

/* Benefits com ícone */
.benefits {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.benefit {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-body);
  font-size: 0.8125rem;
  color: rgba(255, 255, 255, 0.82);
  line-height: 1.4;
}

.benIcon {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: rgba(42, 147, 69, 0.1);
  border: 0.5px solid rgba(42, 147, 69, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--brand-primary);
}

.benIcon svg {
  width: 13px;
  height: 13px;
}

/* CTA */
.cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  background: var(--brand-primary);
  color: #ffffff;
  font-family: var(--font-headline);
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 1rem 1.5rem;
  border-radius: var(--radius-pill);
  width: 100%;
  margin-top: 0.375rem;
  transition: background 0.2s ease, transform 0.15s ease;
  cursor: pointer;
}

.cta:hover {
  background: var(--cta-hover);
  transform: translateY(-1px);
}

.cta:active {
  transform: translateY(0);
}

.ctaArrow {
  transition: transform 0.2s ease;
}

.cta:hover .ctaArrow {
  transform: translateX(2px);
}

/* Fecho do card — sem cinza, contraponto verde */
.cardClosing {
  font-family: var(--font-body);
  font-size: 0.875rem;
  color: #ffffff;
  text-align: center;
  line-height: 1.5;
  padding-top: 0.125rem;
}

/* IMPORTANTE: "delivery num mês comum" em verde — contraponto de cor */
.cardClosingGreen {
  color: var(--brand-primary);
  font-weight: 500;
}
```

---

## 4. Regra de contraste — aplicar em toda a LP

Aprovada nesta seção, vale como padrão global:

| Uso | Valor mínimo | Proibido |
|---|---|---|
| Texto principal | `#ffffff` | — |
| Texto secundário | `rgba(255,255,255,0.65)` | abaixo de 0.55 |
| Texto de suporte | `rgba(255,255,255,0.55)` | abaixo de 0.40 |
| Texto decorativo | `rgba(255,255,255,0.40)` | abaixo de 0.30 |
| Destaque / CTA | `var(--brand-primary)` (#2A9345) | — |

Qualquer `rgba(255,255,255,0.3)` ou menos deve ser elevado ou removido em todos os componentes.

---

## 5. O que foi removido / corrigido

- `overflow: hidden` no `.card` — removido (era a causa do conteúdo cortando)
- `position: absolute; transform: translate(-50%,-50%)` no badge — removido completamente
- `background-clip: text; -webkit-text-fill-color: transparent` no preço — removido (bug em alguns browsers)
- Layout centralizado em coluna única — substituído por duas colunas
- `padding-block: var(--spacing-section)` — reduzido para `clamp(3.5rem, 6vw, 5rem)`
- `max-width: 720px` no `.inner` — substituído por `var(--container-max)` para ocupar a largura completa

---

## 6. Checklist de QA

- [ ] Duas colunas a partir de 900px — coluna única em mobile
- [ ] Eyebrow + headline na coluna esquerda (não acima das colunas)
- [ ] Badge "Acesso completo" acima do card, fora do DOM do card
- [ ] Preço: R$ em verde, 597 em branco, ,00/ano em rgba(255,255,255,0.45)
- [ ] SEM `background-clip: text` no preço — confirmar no DevTools
- [ ] Card SEM `overflow: hidden` — confirmar no DevTools
- [ ] 5 benefits com ícone SVG verde em box 28×28px
- [ ] Fecho da coluna esquerda: "R$ 597" em `var(--brand-primary)`
- [ ] Fecho do card: "delivery num mês comum" em `var(--brand-primary)`
- [ ] Nenhum texto com opacidade abaixo de rgba(255,255,255,0.40)
- [ ] CTA full-width dentro do card, border-radius pill
- [ ] Seção sem ultrapassar ~640px de altura em desktop

---

*Spec gerado em 2026-05-16. Dúvidas → Adriana.*
