# Spec de Implementação — Seção Dor (02)
**Projeto:** LP P3X / Charles Mendlowicz  
**Status:** Aprovado  
**Data:** 2026-05-16  
**Responsável:** Antigravity

---

## Visão Geral

Refatoração completa do componente `Pain`. O layout muda de coluna única de texto corrido
para duas colunas com pain boxes à esquerda e texto de revelação à direita. Abaixo das
duas colunas: uma faixa de transição com imagem de fundo em parallax.

**Arquivos afetados:**
```
src/components/Pain/Pain.tsx
src/components/Pain/Pain.module.css
```

**Nota:** A seção de transição com parallax pode ser um sub-componente separado
(`PainTransition`) ou parte do próprio `Pain`. Fica a critério do Antigravity — o
importante é que o parallax funcione independentemente.

---

## 1. Layout geral

```
┌─────────────────────────────────────────────────────┐
│  SEÇÃO PRINCIPAL (fundo #0d0d0d)                    │
│  ┌──────────────────────┬──────────────────────┐    │
│  │  COLUNA ESQUERDA     │  COLUNA DIREITA       │    │
│  │  - eyebrow           │  - texto pré-reveal   │    │
│  │  - headline          │  - divisor verde      │    │
│  │  - 5 pain boxes      │  - 3 linhas revelação │    │
│  └──────────────────────┴──────────────────────┘    │
└─────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────┐
│  FAIXA DE TRANSIÇÃO (imagem + parallax)             │
│  - 3 linhas de texto centralizadas                  │
│  - overlay preto ~80%                               │
└─────────────────────────────────────────────────────┘
```

---

## 2. Pain.tsx — componente completo

```tsx
import styles from './Pain.module.css'

// Ícones SVG para cada pain box
const PAIN_ICONS = [
  // Relógio — "fecha sem decidir nada"
  <svg key="clock" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9"/>
    <path d="M12 7v5l3 3"/>
  </svg>,
  // Grid — "dinheiro em duas corretoras"
  <svg key="grid" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="8" height="8" rx="1.5"/>
    <rect x="13" y="3" width="8" height="8" rx="1.5"/>
    <rect x="3" y="13" width="8" height="8" rx="1.5"/>
    <rect x="13" y="13" width="8" height="8" rx="1.5"/>
  </svg>,
  // Lista — "não sabe se compra ou diversifica"
  <svg key="list" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 7h8M8 12h5M8 17h3"/>
    <rect x="3" y="3" width="18" height="18" rx="2"/>
  </svg>,
  // Gráfico de linha — "não sabe os pesos"
  <svg key="chart" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18l4-8 4 4 4-6 4 4"/>
    <path d="M3 18h18"/>
  </svg>,
  // Lua — "vai dormir sem saber"
  <svg key="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
  </svg>,
]

const PAIN_ITEMS = [
  'Abre o app da corretora. Olha o saldo. Fecha sem decidir nada.',
  'Tem dinheiro em duas corretoras e não sabe o total que tem.',
  'Quer fazer um aporte — mas não sabe se compra mais do que tem ou diversifica.',
  'Quer rebalancear — mas não sabe quanto cada ativo pesa hoje.',
  'Vai dormir com a sensação de quem está fazendo algo — mas não sabe o quê.',
]

export default function Pain() {
  return (
    <>
      {/* ── Seção principal: 2 colunas ─────────────────── */}
      <section className={styles.pain} aria-label="O problema">
        <div className={styles.inner}>

          {/* Coluna esquerda — headline + pain boxes */}
          <div className={styles.colLeft}>
            <span className={styles.eyebrow}>O ponto cego</span>
            <h2 className={styles.headline}>
              Deixa eu adivinhar como é o seu domingo à noite.
            </h2>
            <ul className={styles.painBoxes} aria-label="Problemas comuns do investidor">
              {PAIN_ITEMS.map((text, i) => (
                <li key={i} className={styles.painBox}>
                  <span className={styles.painIcon} aria-hidden="true">
                    {PAIN_ICONS[i]}
                  </span>
                  <span className={styles.painText}>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna direita — revelação emocional */}
          <div className={styles.colRight}>
            <p className={styles.revealPre}>
              Isso não é descuido.<br />
              Não é falta de esforço.
            </p>
            <span className={styles.revealDivider} aria-hidden="true" />
            <p className={styles.revealLine}>Não é falta de inteligência.</p>
            <p className={styles.revealLine}>Não é falta de dinheiro.</p>
            <p className={styles.revealGreen}>
              É falta de um lugar onde tudo faça sentido junto.
            </p>
          </div>

        </div>
      </section>

      {/* ── Faixa de transição: parallax ───────────────── */}
      <div className={styles.transition} aria-hidden="true">
        <div className={styles.transitionOverlay} />
        <div className={styles.transitionContent}>
          <p className={styles.transSmall}>
            E enquanto você troca entre sete abas para responder uma pergunta simples
          </p>
          <p className={styles.transBig}>
            "quanto eu tenho, onde está, e o que eu faço amanhã?"
          </p>
          <p className={styles.transSmall}>
            o seu dinheiro fica parado, mal alocado, ou decidido no impulso.
          </p>
        </div>
      </div>
    </>
  )
}
```

---

## 3. Pain.module.css — completo

```css
/* ══════════════════════════════════════
   SEÇÃO PRINCIPAL
══════════════════════════════════════ */
.pain {
  background-color: #0d0d0d;
  padding-block: clamp(3.5rem, 6vw, 5rem);
}

.inner {
  max-width: var(--container-max);
  margin-inline: auto;
  padding-inline: var(--container-pad);
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

@media (min-width: 900px) {
  .inner {
    grid-template-columns: 1fr 1fr;
    gap: 0;
    align-items: start;
  }
}

/* ── Coluna esquerda ── */
.colLeft {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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
  color: rgba(255, 255, 255, 0.35);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.eyebrow::before {
  content: '';
  width: 16px;
  height: 1px;
  background: rgba(255, 255, 255, 0.3);
  display: inline-block;
}

.headline {
  font-family: var(--font-headline);
  font-size: clamp(1.375rem, 2.5vw, 1.75rem);
  font-weight: 700;
  color: #ffffff;
  line-height: 1.15;
  letter-spacing: -0.02em;
}

/* Pain boxes — lista sem bullet */
.painBoxes {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 9px;
}

.painBox {
  display: flex;
  align-items: center;
  gap: 13px;
  background: rgba(255, 255, 255, 0.03);
  border: 0.5px solid rgba(255, 255, 255, 0.08);
  border-radius: 9px;
  padding: 12px 14px;
  transition: border-color 0.2s ease;
}

.painBox:hover {
  border-color: rgba(42, 147, 69, 0.3);
}

.painIcon {
  width: 36px;
  height: 36px;
  border-radius: 7px;
  background: rgba(42, 147, 69, 0.1);
  border: 0.5px solid rgba(42, 147, 69, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--brand-primary);
}

.painIcon svg {
  width: 17px;
  height: 17px;
}

.painText {
  font-family: var(--font-body);
  font-size: 0.8125rem;
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.45;
}

/* ── Coluna direita — revelação ── */
.colRight {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.375rem;
}

@media (min-width: 900px) {
  .colRight {
    padding-left: 3rem;
    /* Alinhamento vertical com a coluna esquerda */
    padding-top: 3.75rem; /* compensa eyebrow + headline */
  }
}

.revealPre {
  font-family: var(--font-body);
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.38);
  line-height: 1.7;
  margin-bottom: 0.875rem;
}

.revealDivider {
  display: block;
  width: 28px;
  height: 2px;
  background: var(--brand-primary);
  margin-bottom: 1.25rem;
}

.revealLine {
  font-family: var(--font-headline);
  font-size: clamp(1.375rem, 2.5vw, 1.625rem);
  font-weight: 700;
  color: rgba(255, 255, 255, 0.88);
  line-height: 1.25;
  letter-spacing: -0.02em;
}

.revealGreen {
  font-family: var(--font-headline);
  font-size: clamp(1.375rem, 2.5vw, 1.75rem);
  font-weight: 700;
  color: var(--brand-primary);
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-top: 0.75rem;
}

/* ══════════════════════════════════════
   FAIXA DE TRANSIÇÃO — PARALLAX
══════════════════════════════════════ */
.transition {
  position: relative;
  overflow: hidden;
  /* Altura mínima para dar espaço ao texto */
  min-height: 220px;
  display: flex;
  align-items: center;
}

/*
  IMAGEM DE FUNDO:
  Substituir o background-color abaixo pela imagem real:
  background-image: url('/images/pain-transition.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;   ← parallax no desktop
*/
.transition {
  background-color: #0a1a10; /* fallback até ter a imagem */
  background-size: cover;
  background-position: center;
  /* Adicionar background-attachment: fixed; após incluir a imagem */
}

/* Desabilitar parallax no mobile — comportamento inconsistente no iOS */
@media (max-width: 767px) {
  .transition {
    background-attachment: scroll;
  }
}

/* Overlay escuro sobre a imagem — garante legibilidade do texto */
.transitionOverlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.84),
    rgba(0, 0, 0, 0.80)
  );
  pointer-events: none;
}

/* Conteúdo sobre o overlay */
.transitionContent {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 680px;
  margin-inline: auto;
  padding: 3rem var(--container-pad);
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  align-items: center;
}

.transSmall {
  font-family: var(--font-body);
  font-size: clamp(0.875rem, 1.5vw, 1rem);
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.65;
}

.transBig {
  font-family: var(--font-body);
  font-size: clamp(1.125rem, 2.5vw, 1.5rem);
  font-weight: 600;
  color: var(--brand-primary);
  line-height: 1.3;
  letter-spacing: -0.01em;
}
```

---

## 4. Imagem da faixa de transição

A faixa de parallax precisa de uma imagem real. Duas opções em ordem de preferência:

**Opção A — Foto ambiente (recomendada)**
Notebook aberto em mesa de trabalho, com várias abas do navegador visíveis na tela.
Estilo: ambiente escuro/noturno, luz do monitor iluminando levemente o entorno.
Fonte sugerida: Unsplash, buscar "person computer night dark" ou "notebook desk dark".
Salvar em: `public/images/pain-transition.jpg`

**Opção B — Foto do Charles**
`Fotos - Charles/Charles (1).jpg` ou similar, enquadramento fechado.
Opção menos ideal pois a foto do Charles já aparece na seção Autoridade.

Após escolher a imagem, adicionar no `.transition`:
```css
background-image: url('/images/pain-transition.jpg');
background-attachment: fixed;
```

---

## 5. Checklist de QA

- [ ] Layout em duas colunas aparece a partir de 900px
- [ ] Em mobile: colunas empilham — coluna esquerda acima, direita abaixo
- [ ] Hover nos pain boxes acende borda verde
- [ ] Ícone verde dentro do box — verificar cor e tamanho (17px)
- [ ] Divisor verde (28px × 2px) aparece entre `revealPre` e `revealLine`
- [ ] Frase verde ("É falta de um lugar...") em cor `var(--brand-primary)`
- [ ] Faixa de transição: texto centralizado, linha do meio em verde
- [ ] Parallax funcionando no desktop (background-attachment: fixed)
- [ ] Parallax desabilitado em mobile (background-attachment: scroll)
- [ ] Drop cap REMOVIDO — confirmar que `.pain::first-letter` não existe mais
- [ ] `padding-block` da seção principal: máximo 5rem (não 8rem como antes)
- [ ] Sem `console.log` no código final

---

## 6. O que foi removido

- Drop cap (`.pain::first-letter`) — removido completamente
- Parágrafo narrativo em bloco único — substituído pelos 5 pain boxes
- Blockquote com `border-left` — substituído pelo bloco de revelação na coluna direita
- `padding-block: var(--spacing-section)` (até 8rem) — reduzido para máximo 5rem
- Eyebrow com `::before` de 22px — padronizado para 16px com a mesma lógica do Nav

---

*Spec gerado em 2026-05-16. Dúvidas → Adriana.*
