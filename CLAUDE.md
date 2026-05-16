# LP Template — Influencer Landing Page

Projeto de Landing Page de vendas modular para influencers do mercado financeiro.
Primeira instância: **Charles Mendlowicz / P3X** (comunidadep3x.com.br).
A arquitetura é um **template reutilizável** — cada influencer troca apenas tokens e copy.

---

## Leia antes de começar

Estes arquivos contêm todo o briefing do projeto. Leia todos antes de escrever qualquer código:

| Arquivo | O que contém |
|---|---|
| `BRANDBOOK.md` | Design tokens: cores, fontes, CSS variables, regras visuais |
| `LP-STRUCTURE.md` | Arquitetura completa das 11 seções, variáveis `{{chaves}}`, notas de produção |
| `COPY-CHARLES.md` | Copy completo da LP do Charles, seção por seção |
| `INFLUENCER-CHARLES.md` | Bio, credenciais, tom de voz, fotos aprovadas |
| `TEMPLATE-GUIDE.md` | Mapa de variáveis YAML, checklist de adaptação para novos influencers |
| `PROJECT.md` | Visão geral, contexto de negócio, estrutura de pastas |

---

## Stack

- **Framework:** Next.js (App Router)
- **Estilização:** CSS Modules + CSS Custom Properties (tokens em `src/styles/tokens.css`)
- **Fontes:** TuskerGrotesk (local, pasta `public/fonts/`) + Proxima Nova (Google Fonts fallback ou local)
- **Imagens:** `next/image` para todas as fotos e assets
- **Animações:** CSS puro ou Framer Motion (apenas se necessário)
- **Sem UI library** — componentes próprios, design fiel ao brandbook

---

## Estrutura de Pastas

```
/
├── CLAUDE.md
├── BRANDBOOK.md
├── LP-STRUCTURE.md
├── COPY-CHARLES.md
├── INFLUENCER-CHARLES.md
├── TEMPLATE-GUIDE.md
├── PROJECT.md
│
├── public/
│   ├── fonts/
│   │   └── TuskerGrotesk-*.ttf
│   ├── images/
│   │   ├── charles-hero.jpg        (01 - Principal.jpg)
│   │   ├── charles-authority.jpg   (02 - Principal.jpg)
│   │   └── logo-negativo.png
│   └── favicon.ico
│
└── src/
    ├── app/
    │   ├── layout.tsx
    │   ├── page.tsx                ← monta a LP chamando as seções em ordem
    │   └── globals.css
    │
    ├── styles/
    │   └── tokens.css              ← TODAS as variáveis de marca ficam aqui
    │
    └── components/
        ├── Nav/
        ├── Hero/
        ├── Pain/
        ├── Solution/
        ├── Moment/
        ├── Authority/
        ├── SocialProof/
        ├── Offer/
        ├── Guarantee/
        ├── FAQ/
        ├── Closing/
        └── Footer/
```

---

## Regra Principal — Template First

**Nunca hardcodar cor, texto ou asset de influencer dentro de um componente.**

Todos os valores variáveis devem vir de:
- `src/styles/tokens.css` → cores, fontes, espaçamentos
- `src/data/charles.ts` → copy, preços, credenciais, caminhos de imagem

Isso garante que adaptar para um novo influencer = trocar apenas esses dois arquivos.

---

## tokens.css — Estrutura Base

```css
/* src/styles/tokens.css */
:root {
  /* === MARCA — alterar por influencer === */
  --brand-primary: #2A9345;
  --brand-dark:    #000000;
  --brand-mid:     #2D2D2D;
  --brand-light:   #FFFFFF;

  --font-headline: 'TuskerGrotesk', sans-serif;
  --font-body:     'Proxima Nova', 'Inter', sans-serif;

  /* === DERIVADOS — não alterar === */
  --cta-bg:        var(--brand-primary);
  --cta-text:      var(--brand-light);
  --accent:        var(--brand-primary);
  --text-on-dark:  var(--brand-light);
  --text-on-light: var(--brand-dark);

  /* === ESCALA TIPOGRÁFICA === */
  --text-hero: clamp(2.5rem, 6vw, 5rem);
  --text-h2:   clamp(2rem, 4vw, 3.5rem);
  --text-h3:   clamp(1.5rem, 3vw, 2.25rem);
  --text-body-lg: 1.125rem;
  --text-body:    1rem;
  --text-small:   0.875rem;

  /* === ESPAÇAMENTOS === */
  --section-padding: clamp(4rem, 8vw, 8rem);
  --container-max:   1200px;
  --container-pad:   1.5rem;
}
```

---

## Ordem das Seções (page.tsx)

```tsx
// src/app/page.tsx
import Nav          from '@/components/Nav'
import Hero         from '@/components/Hero'
import Pain         from '@/components/Pain'
import Solution     from '@/components/Solution'
import Moment       from '@/components/Moment'
import Authority    from '@/components/Authority'
import SocialProof  from '@/components/SocialProof'
import Offer        from '@/components/Offer'
import Guarantee    from '@/components/Guarantee'
import FAQ          from '@/components/FAQ'
import Closing      from '@/components/Closing'
import Footer       from '@/components/Footer'

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Pain />
        <Solution />
        <Moment />
        <Authority />
        <SocialProof />
        <Offer />
        <Guarantee />
        <FAQ />
        <Closing />
      </main>
      <Footer />
    </>
  )
}
```

---

## Regras de Código

- TypeScript em todos os arquivos
- CSS Modules por componente (`ComponentName.module.css`)
- Imagens sempre via `next/image` com `alt` descritivo
- Nenhum `console.log` no código final
- Componentes sem lógica de negócio — apenas apresentação
- Mobile-first: estilos base para mobile, `@media (min-width: 768px)` para desktop

---

## Referência Visual

Design baseado na LP do Mira (outro influencer do mesmo contexto):
- Seções bem delimitadas, alternando fundo escuro e claro
- Muito espaço entre elementos — não compactar
- Tipografia grande nos headlines (TuskerGrotesk)
- CTAs repetidos em múltiplas seções
- Componentes limpos, sem poluição visual
- Foto do influencer integrada em pelo menos 2 seções (Hero e Autoridade)

---

## Skills Disponíveis — Usar Sempre

Este projeto tem acesso a skills globais de UX/UI e frontend. **Consulte e aplique essas skills em toda decisão de interface**.

Skills obrigatórias neste projeto (usar via `/nome-da-skill`):

| Skill | Quando usar |
|---|---|
| `frontend-design` | Antes de implementar qualquer componente novo |
| `impeccable` | Revisão de polimento visual e qualidade do código CSS |
| `impeccable:reference:color-and-contrast` | Verificar contraste de cores e acessibilidade |
| `impeccable:reference:interaction-design` | Comportamento de CTAs, accordion FAQ, nav sticky |
| `impeccable:reference:motion-design` | Animações e transições |
| `critique` | Auditar seções prontas antes de commitar |
| `animate` | Implementar animações CSS |
| `delight` | Adicionar microinterações e detalhes de UX |

Para listar todas as skills disponíveis: `/skills`

---

## Começando

Primeira tarefa sugerida:
1. Criar a estrutura de pastas do Next.js
2. Configurar `tokens.css` com os valores da P3X
3. Criar `src/data/charles.ts` com todo o copy do `COPY-CHARLES.md`
4. Implementar os componentes seção por seção, na ordem da LP
