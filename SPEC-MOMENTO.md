# Spec de Implementação — Seção Momento (04)
**Projeto:** LP P3X / Charles Mendlowicz  
**Status:** Aprovado  
**Data:** 2026-05-16  
**Responsável:** Antigravity

---

## Visão Geral

Refatoração completa do componente `Moment`. O layout de duas colunas é mantido, mas
a coluna direita deixa de ter o mock SVG do dashboard e passa a ser um placeholder de
vídeo em tela cheia. A quote ganha tratamento visual correto com border-left verde.
O fecho é um único bloco de texto corrido com peso uniforme.

**Arquivos afetados:**
```
src/components/Moment/Moment.tsx
src/components/Moment/Moment.module.css
```

---

## 1. Layout geral

```
┌──────────────────────────────────────────────────────┐
│  SEÇÃO (fundo #0d0d0d, max-height 700px)             │
│  ┌─────────────────────────┬───────────────────────┐ │
│  │  COLUNA ESQUERDA (58%)  │  COLUNA DIREITA (42%) │ │
│  │                         │                       │ │
│  │  eyebrow                │  placeholder vídeo    │ │
│  │  headline (1.375rem)    │  fundo #050505        │ │
│  │  narrative              │  play button centro   │ │
│  │  lead-in                │  borda dashed sutil   │ │
│  │  quote (border-left)    │                       │ │
│  │  ─────────────────────  │                       │ │
│  │  fecho (bloco corrido)  │                       │ │
│  └─────────────────────────┴───────────────────────┘ │
└──────────────────────────────────────────────────────┘
```

---

## 2. Moment.tsx — componente completo

```tsx
import styles from './Moment.module.css'

interface MomentProps {
  headline: string
  narrative: string
  quote: string
  closing: string
  videoSrc?: string  // opcional — quando o vídeo chegar
}

export default function Moment({ headline, narrative, quote, closing, videoSrc }: MomentProps) {
  return (
    <section className={styles.moment} aria-label="O momento que muda tudo">
      <div className={styles.inner}>

        {/* ── Coluna esquerda — texto ── */}
        <div className={styles.colLeft}>
          <div className={styles.topBlock}>
            <span className={styles.eyebrow}>O momento que muda tudo</span>

            <h2 className={styles.headline}>{headline}</h2>

            <p className={styles.narrative}>{narrative}</p>

            <p className={styles.leadin}>Você olha para a tela e pensa:</p>

            <blockquote className={styles.quoteBlock}>
              <span className={styles.quoteText}>{quote}</span>
            </blockquote>
          </div>

          <div className={styles.closingBlock}>
            <p className={styles.closingText}>{closing}</p>
          </div>
        </div>

        {/* ── Coluna direita — placeholder vídeo ── */}
        <div className={styles.colRight} aria-label="Área de vídeo">
          {videoSrc ? (
            /* Quando o vídeo chegar: trocar o placeholder pelo elemento <video> */
            <video
              className={styles.video}
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            /* Placeholder até o vídeo estar disponível */
            <>
              <div className={styles.videoHint} aria-hidden="true" />
              <div className={styles.playBtn} aria-hidden="true">
                <div className={styles.playTriangle} />
              </div>
              <span className={styles.videoLabel}>Vídeo do consolidador</span>
              <span className={styles.videoSub}>Em produção</span>
            </>
          )}
        </div>

      </div>
    </section>
  )
}
```

### Dados em `src/data/charles.ts`

Confirmar que os valores passados para o componente são:

```ts
moment: {
  headline: 'Tem um momento, dentro da P3X, que muda alguma coisa em quem entra.',
  narrative: 'É quando você conecta sua conta da B3 pela primeira vez. Leva trinta segundos. A tela carrega. E aí, de repente, está tudo ali. Cada ação que você esqueceu. Cada FII que acumulou. Cada centavo de dividendo que pingou.',
  quote: '"Caralh#, é isso que eu tenho."',
  closing: 'Não é mágica. É só o seu dinheiro, finalmente visível. E é a partir daí que toda decisão fica mais fácil.',
}
```

---

## 3. Moment.module.css — completo

```css
/* ══════════════════════════════════════
   SEÇÃO
══════════════════════════════════════ */
.moment {
  background-color: #0d0d0d;
  /* Altura controlada — não ultrapassa 700px */
  max-height: 700px;
  overflow: hidden;
}

.inner {
  max-width: var(--container-max);
  margin-inline: auto;
  padding-inline: var(--container-pad);
  display: grid;
  grid-template-columns: 1fr;
  /* Altura fixa para as duas colunas ficarem iguais */
  min-height: 580px;
}

@media (min-width: 900px) {
  .inner {
    grid-template-columns: 58fr 42fr;
    min-height: 640px;
  }
}

/* ══════════════════════════════════════
   COLUNA ESQUERDA
══════════════════════════════════════ */
.colLeft {
  padding: 3rem 2.75rem 3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: none;
}

@media (min-width: 900px) {
  .colLeft {
    border-right: 0.5px solid rgba(255, 255, 255, 0.07);
    padding-right: 2.75rem;
  }
}

.topBlock {
  display: flex;
  flex-direction: column;
}

/* Eyebrow */
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

/* Headline — tamanho aprovado: 1.375rem */
/* IMPORTANTE: menor que o padrão da LP para esta seção específica.
   A headline aqui não é o elemento de impacto — a quote é.
   Manter em 1.375rem mesmo que pareça pequeno isolado. */
.headline {
  font-family: var(--font-headline);    /* TuskerGrotesk */
  font-size: 1.375rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.12;
  letter-spacing: -0.005em;
  text-transform: uppercase;
  margin-bottom: 1.625rem;
}

/* Narrativa */
.narrative {
  font-family: var(--font-body);
  font-size: 0.9375rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

/* Lead-in */
.leadin {
  font-family: var(--font-body);
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.35);
  line-height: 1.6;
  margin-bottom: 1.25rem;
  font-style: normal;
}

/* Quote — border-left verde, TuskerGrotesk */
.quoteBlock {
  padding: 0.875rem 0 0.875rem 1.25rem;
  border-left: 2.5px solid var(--brand-primary);
  margin: 0;
  /* Resetar estilos padrão de blockquote */
  border-top: none;
  border-right: none;
  border-bottom: none;
}

.quoteText {
  font-family: var(--font-headline);    /* TuskerGrotesk */
  font-size: 1.625rem;
  font-weight: 700;
  color: var(--brand-primary);
  line-height: 1.1;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  display: block;
}

/* ── Fecho — bloco corrido, peso e cor uniformes ── */
.closingBlock {
  padding-top: 1.5rem;
  border-top: 0.5px solid rgba(255, 255, 255, 0.08);
  margin-top: auto;
}

/* IMPORTANTE: closing-text é um único parágrafo corrido.
   "Não é mágica. É só o seu dinheiro, finalmente visível.
   E é a partir daí que toda decisão fica mais fácil."
   Tudo na mesma linha, mesmo peso, mesma cor. Não separar em spans. */
.closingText {
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 500;
  color: #ffffff;
  line-height: 1.7;
}

/* ══════════════════════════════════════
   COLUNA DIREITA — PLACEHOLDER VÍDEO
══════════════════════════════════════ */
.colRight {
  background: #050505;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  position: relative;
  overflow: hidden;
  /* Em mobile: altura fixa para não colapsar */
  min-height: 260px;
}

@media (min-width: 900px) {
  .colRight {
    min-height: unset;
  }
}

/* Glow verde sutil ao centro */
.colRight::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse 55% 45% at 50% 50%,
    rgba(42, 147, 69, 0.07) 0%,
    transparent 65%
  );
  pointer-events: none;
}

/* Borda tracejada — indica área do vídeo */
.videoHint {
  position: absolute;
  inset: 20px;
  border: 1px dashed rgba(42, 147, 69, 0.15);
  border-radius: 6px;
  pointer-events: none;
}

/* Botão de play */
.playBtn {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 1.5px solid rgba(42, 147, 69, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.playTriangle {
  width: 0;
  height: 0;
  border-top: 11px solid transparent;
  border-bottom: 11px solid transparent;
  border-left: 18px solid rgba(42, 147, 69, 0.6);
  margin-left: 4px;
}

.videoLabel {
  font-family: var(--font-body);
  font-size: 0.6875rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.2);
  position: relative;
  z-index: 1;
}

.videoSub {
  font-family: var(--font-body);
  font-size: 0.625rem;
  color: rgba(42, 147, 69, 0.35);
  position: relative;
  z-index: 1;
  letter-spacing: 0.03em;
}

/* ── Quando o vídeo real chegar ── */
.video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

---

## 4. Substituição do vídeo quando chegar

Quando o time entregar o vídeo (15–20s do consolidador), a troca é mínima:

**Passo 1** — Adicionar o arquivo em:
```
public/videos/consolidador-demo.mp4
```

**Passo 2** — Passar a prop `videoSrc` no `page.tsx`:
```tsx
<Moment
  {...charlesData.moment}
  videoSrc="/videos/consolidador-demo.mp4"
/>
```

O componente detecta a prop e substitui automaticamente o placeholder pelo `<video>`.
Não precisa alterar nenhum outro arquivo.

---

## 5. O que foi removido

- Mock SVG do dashboard com dados fictícios — removido completamente
- `ALLOCATIONS` array hardcoded no componente — removido
- Gráfico sparkline e barras de alocação — removidos
- `blockquote` com `border-left` genérico substituído por `.quoteBlock` com `border-left: 2.5px solid var(--brand-primary)`
- Lead-in "Pela primeira vez você olha para a tela e pensa:" → encurtado para "Você olha para a tela e pensa:"

---

## 6. Checklist de QA

- [ ] Headline em TuskerGrotesk, tamanho 1.375rem — confirmar no DevTools
- [ ] Quote em TuskerGrotesk 700, 1.625rem, cor `var(--brand-primary)` (#2A9345)
- [ ] Border-left da quote: 2.5px sólido, verde — sem border-top/right/bottom
- [ ] Lead-in: "Você olha para a tela e pensa:" (sem "Pela primeira vez")
- [ ] Fecho: parágrafo único corrido, weight 500, cor #ffffff
- [ ] Fecho separado do corpo por `border-top: 0.5px solid rgba(255,255,255,0.08)`
- [ ] Coluna direita: fundo #050505, sem border frame de browser
- [ ] Play button centralizado, borda verde semitransparente
- [ ] Borda dashed visível na área de vídeo
- [ ] Duas colunas a partir de 900px — coluna única em mobile
- [ ] Seção não ultrapassa 700px de altura em nenhuma viewport
- [ ] Mock SVG e array ALLOCATIONS completamente removidos do .tsx

---

*Spec gerado em 2026-05-16. Dúvidas → Adriana.*
