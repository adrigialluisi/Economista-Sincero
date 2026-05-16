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

### Família Principal — TuskerGrotesk (Headlines)

Fonte display da marca. Usada em títulos, headlines e chamadas de impacto.

**Localização dos arquivos:** `./font/TuskerGrotesk-*.ttf`

| Largura | Medium (500) | Semibold (600) | Bold (700) | Super (800) |
|---|---|---|---|---|
| 1x (condensed) | ✅ | ✅ | ✅ | ✅ |
| 2x | ✅ | ✅ | ✅ | ✅ |
| 3x | ✅ | ✅ | ✅ | ✅ |
| 4x | ✅ | ✅ | ✅ | ✅ |
| 5x | ✅ | ✅ | ✅ | ✅ |
| 6x | ✅ | ✅ | ✅ | ✅ |
| 7x | — | ✅ | ✅ | ✅ |
| 8x | — | — | ✅ | ✅ |
| 9x (extended) | — | — | — | ✅ |

**Pesos recomendados para a LP:**
- Headlines H1: `TuskerGrotesk-6700Bold` ou `TuskerGrotesk-6800Super`
- Headlines H2/H3: `TuskerGrotesk-5600Semibold` ou `TuskerGrotesk-5700Bold`
- Chamadas de seção: `TuskerGrotesk-4600Semibold`

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

### Escala Tipográfica (LP)

```css
:root {
  /* === TIPOGRAFIA — variáveis fixas === */
  --font-headline: 'TuskerGrotesk', sans-serif;
  --font-body: 'Proxima Nova', 'Inter', sans-serif;

  --text-hero: clamp(2.5rem, 6vw, 5rem);      /* H1 hero */
  --text-h2: clamp(2rem, 4vw, 3.5rem);         /* Títulos de seção */
  --text-h3: clamp(1.5rem, 3vw, 2.25rem);      /* Subtítulos */
  --text-body-lg: 1.125rem;                     /* Corpo grande */
  --text-body: 1rem;                            /* Corpo padrão */
  --text-small: 0.875rem;                       /* Microcopy */
}
```

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
