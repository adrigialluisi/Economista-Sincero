# Brandbook — P3X / Charles Mendlowicz

> Design tokens extraídos do brandbook oficial "[P3X] ARTES E CONCEITO.pdf".
> Em um template multi-influencer, estes tokens são as **variáveis que mudam** para cada novo influencer.

---

## 🎨 Paleta de Cores

### Cores Primárias

| Nome | HEX | RGB | CMYK | Uso |
|---|---|---|---|---|
| **Verde P3X** | `#2A9345` | R42 G147 B69 | C90 M8 Y100 K1 | Cor de destaque, CTAs, ícones ativos, links |
| **Cinza** | `#2D2D2D` | R45 G45 B45 | C71 M61 Y57 K70 | Fundos secundários, texto sobre claro |
| **Branco** | `#FFFFFF` | R255 G255 B255 | C0 M0 Y0 K0 | Fundos claros, texto sobre escuro |
| **Preto** | `#000000` | R0 G0 B0 | C91 M79 Y62 K97 | Fundo principal, texto primário |

### Hierarquia de Uso

```
Fundo principal da LP    → #000000 (Preto)
Seções alternadas        → #2D2D2D (Cinza)
Destaque / CTA / Accent  → #2A9345 (Verde)
Texto sobre fundo escuro → #FFFFFF (Branco)
Texto sobre fundo claro  → #000000 (Preto)
```

### CSS Custom Properties (Template)

```css
:root {
  /* === VARIÁVEIS DE MARCA — alterar por influencer === */
  --brand-primary: #2A9345;      /* Verde P3X — COR DO INFLUENCER */
  --brand-dark: #000000;         /* Fundo principal */
  --brand-mid: #2D2D2D;          /* Fundo secundário / cinza */
  --brand-light: #FFFFFF;        /* Texto e fundos claros */

  /* === VARIÁVEIS DERIVADAS — não alterar === */
  --cta-bg: var(--brand-primary);
  --cta-text: var(--brand-light);
  --cta-hover: color-mix(in srgb, var(--brand-primary) 80%, black);
  --section-dark: var(--brand-dark);
  --section-mid: var(--brand-mid);
  --section-light: var(--brand-light);
  --text-on-dark: var(--brand-light);
  --text-on-light: var(--brand-dark);
  --accent: var(--brand-primary);
}
```

---

## 🔤 Tipografia

### Família Principal — Bebas Neue (Headlines)

Fonte display da marca. Usada em todos os títulos, headlines e chamadas de impacto.
Substituiu a TuskerGrotesk em 25/05/2026.

**Arquivo local:** `public/fonts/BebasNeue-Regular.ttf`
**Google Fonts (fallback):** `https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap`

| Peso disponível | Uso |
|---|---|
| Regular (400) | Único peso — todos os títulos e headlines |

**Notas de uso:**
- Bebas Neue tem apenas um peso (Regular 400). Para variar hierarquia, use tamanho e espaçamento.
- A fonte é toda maiúscula por natureza — `text-transform: uppercase` é opcional mas recomendado para consistência no CSS.
- Excelente legibilidade em tamanhos grandes. Não usar abaixo de 20px.

**Pesos recomendados para a LP:**
- Headlines H1 (Hero): `font-size: var(--text-hero)` — Bebas Neue Regular
- Headlines H2 (Títulos de seção): `font-size: var(--text-h2)` — Bebas Neue Regular
- Chamadas de seção / H3: `font-size: var(--text-h3)` — Bebas Neue Regular

### Família Secundária — Proxima Nova (Corpo)

Usada em parágrafos, bullets, legendas e microcopy. Fonte de sistema/licenciada.

```css
/* Fallback stack caso Proxima Nova não esteja disponível */
font-family: 'Proxima Nova', 'Inter', 'Helvetica Neue', Arial, sans-serif;
```

| Peso | Uso |
|---|---|
| Regular (400) | Corpo de texto, parágrafos longos |
| Medium (500) | Subtítulos, bullets, labels |
| Semibold (600) | Destaques inline, badges |
| Bold (700) | Labels de CTA, microcopy de destaque |

### Escala Tipográfica (LP) — Especificação Definitiva

| Elemento | Fonte | Peso | Tamanho | Line Height | Letter Spacing | Cor |
|---|---|---|---|---|---|---|
| **Eyebrow** (acima dos títulos) | Proxima Nova | Semibold 600 | 12px | — | 2% (0.02em) | Verde `#2A9345` |
| **H1 — Hero** | Bebas Neue | Regular 400 | 48px | 70px | — | Branco |
| **H2 — Títulos de seção** | Bebas Neue | Regular 400 | 40px | 56px | — | Branco ou Preto |
| **Body text** | Proxima Nova | Regular 400 | 16px | 28px | — | Branco |
| **Texto de botão** | Proxima Nova | Semibold 600 | 14px | — | — | Uppercase |
| **Caption** | Proxima Nova | Regular 400 | 12px | — | — | Branco |

> **Nota Bebas Neue:** fonte de peso único (Regular 400). Toda a hierarquia de títulos é feita por tamanho.
> Todos os textos Bebas Neue devem ter `text-transform: uppercase`.

```css
:root {
  /* === TIPOGRAFIA — tokens definitivos === */
  --font-headline: 'Bebas Neue', sans-serif;
  --font-body:     'Proxima Nova', 'Inter', sans-serif;

  /* Tamanhos */
  --text-hero:    3rem;      /* 48px — H1 Hero */
  --text-h2:      2.5rem;    /* 40px — H2 Seções */
  --text-body:    1rem;      /* 16px — Body */
  --text-button:  0.875rem;  /* 14px — Botões */
  --text-eyebrow: 0.75rem;   /* 12px — Labels acima dos títulos */
  --text-caption: 0.75rem;   /* 12px — Captions */

  /* Line heights */
  --lh-hero: 70px;
  --lh-h2:   56px;
  --lh-body: 1.75;           /* = 28px em 16px */

  /* Letter spacing */
  --ls-eyebrow: 0.02em;      /* 2% — obrigatório nos eyebrows */
  --ls-button:  0.07em;

  /* Font weights */
  --fw-headline: 400;        /* Bebas Neue Regular — único peso disponível */
  --fw-body:     400;        /* Proxima Nova Regular */
  --fw-semibold: 600;        /* Proxima Nova Semibold — eyebrow e botões */
}
```

### Regras de Aplicação

- **Eyebrow:** sempre `text-transform: uppercase`, `letter-spacing: var(--ls-eyebrow)`, `color: var(--accent)`
- **H1/H2:** sempre `text-transform: uppercase`, `font-weight: var(--fw-headline)`, `font-family: var(--font-headline)`
- **Body:** `line-height: var(--lh-body)` em todo parágrafo de texto corrido
- **Botões:** `text-transform: uppercase`, `font-weight: var(--fw-semibold)`, `font-size: var(--text-button)`
- **Caption:** `font-size: var(--text-caption)`, `color: rgba(255,255,255,0.55)` em fundos escuros

---

## 🖼️ Logos e Identidade Visual

### Versões Disponíveis

| Arquivo | Fundo recomendado | Uso |
|---|---|---|
| `LOGO/__positivo.png` | Branco / claro | Seções claras da LP |
| `LOGO/__negativo.png` | Preto / escuro | Header, hero, seções escuras |
| `LOGO/__fundo-preto.png` | Qualquer | Versão com fundo já embutido |
| `LOGO/__positivo-icon.png` | Branco / claro | Favicon, ícone mobile |
| `LOGO/__negativo-icon.png` | Preto / escuro | Favicon dark mode |
| `LOGO/__fundo-preto-icon.png` | Qualquer | Ícone com fundo |

---

## 📐 Espaçamentos e Grid

```css
:root {
  /* Espaçamentos — fixos no template */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 2rem;
  --spacing-lg: 4rem;
  --spacing-xl: 6rem;
  --spacing-section: clamp(4rem, 8vw, 8rem);  /* Entre seções */

  /* Grid */
  --container-max: 1200px;
  --container-padding: 1.5rem;

  /* Border radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-pill: 999px;  /* Para badges e CTAs arredondados */
}
```

---

## 🔘 Componente CTA (Botão Principal)

```css
.btn-primary {
  background: var(--brand-primary);   /* #2A9345 */
  color: var(--brand-light);          /* #FFFFFF */
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 1.125rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 1rem 2.5rem;
  border-radius: var(--radius-pill);
  border: none;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.1s ease;
}

.btn-primary:hover {
  background: var(--cta-hover);
  transform: translateY(-1px);
}
```

---

## 🗂️ Assets de Conteúdo

### Fotos do Charles (aprovadas)
| Arquivo | Uso prioritário |
|---|---|
| `Fotos - Charles/01 - Principal.jpg` | ⭐ Hero section, autoridade |
| `Fotos - Charles/02 - Principal.jpg` | ⭐ Seção de fechamento, alternativa hero |
| `Fotos - Charles/Charles (1-8).jpg` | Apoio, depoimentos, seções internas |

### Capas dos Módulos P3X
- Localização: `Charles-P3X/` (full size) e `Charles-P3X/455x255/` (thumbnails)
- Módulos disponíveis: Investimento Express, Renda Fixa, Cripto Sem Enrolação, DeFi, Investimentos no Exterior, Imposto na Prática, IRPF 2026, Liberdade Financeira, Milhas e Cartões, Previdência Privada, Clube do Livro, Saúde e Bem-Estar, Clube do Vinho

---

## 🚫 Regras Visuais (do Brandbook)

- ❌ Sem emojis na LP (instrução explícita do copy)
- ❌ Sem mockups — usar imagens reais do dashboard
- ❌ Sem promessas milagrosas ou linguagem de "guru"
- ✅ Paleta sóbria: Verde + Preto + Cinza + Branco
- ✅ Tipografia grande e impactante nos headlines
- ✅ Muito espaço em branco (respiração entre seções)
- ✅ Seções alternando fundo escuro (#000 / #2D2D2D) e claro (#FFF)
