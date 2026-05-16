# LP Structure — Template de Landing Page para Influencers

> Este documento define a **arquitetura de seções e componentes** da LP.
> As variáveis entre `{{chaves}}` são os pontos de personalização por influencer.
> Referência visual: LP do Mira (design clean, seções bem delimitadas, componentes claros).

---

## Visão Geral da LP

```
┌─────────────────────────────────────┐
│  00. HEADER / NAV                   │  Fundo escuro, logo + CTA
├─────────────────────────────────────┤
│  01. HERO                           │  Headline + foto + CTA principal
├─────────────────────────────────────┤
│  02. DOR                            │  Espelho do leitor — cena cotidiana
├─────────────────────────────────────┤
│  03. SOLUÇÃO / O QUE É              │  Desconstrução + 4 pilares
├─────────────────────────────────────┤
│  04. O MOMENTO "AAAHH"              │  Gatilho emocional + vídeo curto
├─────────────────────────────────────┤
│  05. AUTORIDADE DO CRIADOR          │  Foto + bio + credenciais
├─────────────────────────────────────┤
│  06. PROVA SOCIAL                   │  Depoimentos + números da plataforma
├─────────────────────────────────────┤
│  07. OFERTA                         │  Preço âncora → preço atual + CTA
├─────────────────────────────────────┤
│  08. GARANTIA                       │  Badge + texto de garantia
├─────────────────────────────────────┤
│  09. FAQ                            │  Accordion de objeções
├─────────────────────────────────────┤
│  10. FECHAMENTO                     │  Dois caminhos + CTA final + assinatura
├─────────────────────────────────────┤
│  11. FOOTER                         │  Links legais + logo
└─────────────────────────────────────┘
```

---

## Seção 00 — HEADER / NAV

**Fundo:** `var(--brand-dark)` — #000000
**Comportamento:** Sticky. Some em scroll down, aparece em scroll up.

```
[Logo {{platform_name}}]                    [CTA: "{{cta_nav_text}}" →]
```

| Variável | Charles/P3X | Exemplo outro influencer |
|---|---|---|
| `{{platform_logo}}` | Logo P3X negativo | Logo da plataforma |
| `{{cta_nav_text}}` | "Começar agora" | "Entrar na comunidade" |
| `{{cta_nav_url}}` | URL de checkout | URL de checkout |

---

## Seção 01 — HERO

**Fundo:** `var(--brand-dark)` — #000000
**Layout:** 2 colunas (texto esquerda | foto direita) — colapsa em 1 coluna no mobile.

```
┌──────────────────────┬──────────────────────┐
│                      │                      │
│  [Tag de contexto]   │                      │
│                      │   [Foto principal    │
│  {{hero_headline}}   │    do influencer]    │
│                      │                      │
│  {{hero_subheadline}}│                      │
│                      │                      │
│  [CTA PRINCIPAL →]   │                      │
│                      │                      │
│  {{cta_microcopy}}   │                      │
│                      │                      │
└──────────────────────┴──────────────────────┘
```

| Variável | Charles/P3X |
|---|---|
| `{{hero_tag}}` | "Plataforma de Investimentos" |
| `{{hero_headline}}` | "Para quem cansou de não saber, no domingo à noite, quanto realmente tem investido." |
| `{{hero_subheadline}}` | "Você não tem um problema de dinheiro. Você tem um problema de visão." |
| `{{cta_primary_text}}` | "QUERO VER MEU DINHEIRO COM CLAREZA →" |
| `{{cta_microcopy}}` | "Acesso imediato. Garantia de 7 dias. Seus ativos continuam na sua corretora." |
| `{{hero_image}}` | `Fotos - Charles/01 - Principal.jpg` |

**Notas de produção:**
- Headline em TuskerGrotesk Bold, tamanho `var(--text-hero)`
- Foto recortada sem fundo ou integrada ao layout com gradiente
- CTA com `background: var(--brand-primary)`, full-width no mobile

---

## Seção 02 — DOR

**Fundo:** `var(--brand-mid)` — #2D2D2D
**Layout:** Coluna única centralizada, max-width 800px.

```
┌─────────────────────────────────────┐
│                                     │
│  {{pain_headline}}                  │
│                                     │
│  {{pain_narrative}}                 │
│                                     │
│  {{pain_transition}}                │
│                                     │
└─────────────────────────────────────┘
```

| Variável | Charles/P3X |
|---|---|
| `{{pain_headline}}` | "Deixa eu adivinhar como é o seu domingo à noite." |
| `{{pain_narrative}}` | Texto corrido sobre o ritual de abrir o app, fechar, não saber... |
| `{{pain_transition}}` | "Não é falta de inteligência. Não é falta de dinheiro. É falta de um lugar onde tudo faça sentido junto." |

**Notas de produção:**
- Headline em TuskerGrotesk, texto corpo em Proxima Nova Regular
- Parágrafo espaçado, letra grande (~1.25rem), line-height 1.7
- Sem listas nem bullets — texto corrido intencional

---

## Seção 03 — SOLUÇÃO / O QUE É

**Fundo:** `var(--brand-dark)` — #000000
**Layout:** Intro texto → Grid de pilares (4 cards)

```
┌─────────────────────────────────────┐
│  {{solution_label}}                 │  ← Label pequeno em verde
│  {{solution_headline}}              │
│  {{solution_description}}           │
│                                     │
│  ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐ │
│  │ Pilar │ │ Pilar │ │ Pilar │ │ Pilar │ │
│  │  01   │ │  02   │ │  03   │ │  04   │ │
│  └───────┘ └───────┘ └───────┘ └───────┘ │
│                                     │
│  [CTA SECUNDÁRIO →]                 │
└─────────────────────────────────────┘
```

| Variável | Charles/P3X |
|---|---|
| `{{solution_label}}` | "O ecossistema completo do investidor brasileiro" |
| `{{solution_headline}}` | "Não é APENAS uma comunidade. Não é mais um curso. Não é mais um agregador." |
| `{{solution_description}}` | "É a melhor plataforma brasileira que junta, num só ambiente, as quatro coisas que um investidor sério precisa..." |
| `{{pillar_1_icon}}` | Ícone de gráfico/B3 |
| `{{pillar_1_title}}` | "Consolidador integrado à B3" |
| `{{pillar_1_desc}}` | "Conecta uma vez, vê tudo: ações, FIIs, renda fixa, BDRs. Sem digitar nada." |
| `{{pillar_2_title}}` | "Carteiras recomendadas" |
| `{{pillar_3_title}}` | "Cursos e conteúdos" |
| `{{pillar_4_title}}` | "Comunidade ativa" |

**Notas de produção:**
- Cards com borda sutil `1px solid rgba(255,255,255,0.1)` e fundo `#111`
- Ícones monocromáticos em `var(--brand-primary)` (verde)
- Layout responsivo: 4 colunas → 2 colunas → 1 coluna

---

## Seção 04 — O MOMENTO "AAAHH"

**Fundo:** `var(--brand-mid)` — #2D2D2D
**Layout:** Texto left + vídeo/screenshot right

```
┌──────────────────────┬──────────────────────┐
│                      │                      │
│  {{moment_headline}} │  [Video 15-20s OU    │
│                      │   Screenshot real    │
│  {{moment_narrative}}│   do dashboard]      │
│                      │                      │
│  "{{moment_quote}}"  │                      │
│                      │                      │
└──────────────────────┴──────────────────────┘
```

| Variável | Charles/P3X |
|---|---|
| `{{moment_headline}}` | "Tem um momento, dentro da P3X, que muda alguma coisa em quem entra." |
| `{{moment_narrative}}` | "É quando você conecta sua conta da B3 pela primeira vez. Leva trinta segundos..." |
| `{{moment_quote}}` | "Caralh#, é isso que eu tenho." |
| `{{moment_media}}` | Vídeo curto (15-20s) do dashboard OU screenshot real |

**Notas de produção:**
- Quote em destaque — TuskerGrotesk grande, cor `var(--brand-primary)`
- VSL recomendada como substituta desta seção inteira (2-3min)
- Screenshot deve ser REAL — não mockup

---

## Seção 05 — AUTORIDADE DO CRIADOR

**Fundo:** `var(--brand-dark)` — #000000
**Layout:** Foto grande left + texto credenciais right

```
┌──────────────────────┬──────────────────────┐
│                      │                      │
│  [Foto do criador]   │  {{author_name}}     │
│                      │  {{author_title}}    │
│                      │                      │
│                      │  {{author_bio}}      │
│                      │                      │
│                      │  ┌────┐ ┌────┐ ┌────┐│
│                      │  │Selos/credenciais  ││
│                      │  └────┘ └────┘ └────┘│
└──────────────────────┴──────────────────────┘
```

| Variável | Charles/P3X |
|---|---|
| `{{author_photo}}` | `Fotos - Charles/02 - Principal.jpg` |
| `{{author_name}}` | "Charles Mendlowicz" |
| `{{author_title}}` | "Economista Sincero" |
| `{{author_bio}}` | Bio de 3-4 linhas (ver INFLUENCER-CHARLES.md) |
| `{{author_credential_1}}` | "30 anos de mercado real" |
| `{{author_credential_2}}` | "4x Melhor Influenciador ANBIMA" |
| `{{author_credential_3}}` | "Best-seller em 3 idiomas" |
| `{{author_credential_4}}` | "2x Top 03 IBEST" |

---

## Seção 06 — PROVA SOCIAL

**Fundo:** `var(--brand-mid)` — #2D2D2D
**Layout:** 3 depoimentos em grid + faixa de números

```
┌──────────────────────────────────────────┐
│                                          │
│  "{{testimonial_1_text}}"                │
│   — {{testimonial_1_name}}, {{cidade}}  │
│                                          │
│  "{{testimonial_2_text}}"                │
│   — {{testimonial_2_name}}, {{cidade}}  │
│                                          │
│  "{{testimonial_3_text}}"                │
│   — {{testimonial_3_name}}, {{cidade}}  │
│                                          │
├──────────────────────────────────────────┤
│                                          │
│  {{stats_investors}} investidores ativos │
│  R$ {{stats_patrimony}} acompanhados     │
│  {{stats_portfolios}} carteiras atualizadas│
│                                          │
└──────────────────────────────────────────┘
```

| Variável | Charles/P3X |
|---|---|
| `{{testimonial_focus_1}}` | Antes/depois — descobriu concentração que não sabia |
| `{{testimonial_focus_2}}` | Iniciante que ganhou autonomia |
| `{{testimonial_focus_3}}` | Patrimônio relevante que ganhou organização |
| `{{stats_investors}}` | [X] mil |
| `{{stats_patrimony}}` | R$ [X] milhões |
| `{{stats_portfolios}}` | [X] carteiras |

**Notas de produção:**
- Depoimentos vêm de alunos destaque da EVL
- Números a preencher após 30 dias de atividade da plataforma
- Considerar fotos/avatar dos depoentes para aumentar credibilidade

---

## Seção 07 — OFERTA

**Fundo:** `var(--brand-dark)` — #000000
**Layout:** Coluna única centralizada com card de preço

```
┌─────────────────────────────────────┐
│                                     │
│  {{offer_headline}}                 │
│  {{offer_anchor_text}}              │
│                                     │
│  ┌───────────────────────────────┐  │
│  │  De: R$ {{price_list}}/ano    │  │  ← riscado
│  │  Por: R$ {{price_current}}/ano│  │  ← destaque verde
│  │  = R$ {{price_monthly}}/mês   │  │
│  │                               │  │
│  │  [CTA PRINCIPAL →]            │  │
│  └───────────────────────────────┘  │
│                                     │
└─────────────────────────────────────┘
```

| Variável | Charles/P3X |
|---|---|
| `{{offer_headline}}` | "Quanto custa parar de operar no escuro?" |
| `{{offer_anchor_text}}` | "Antes do número, faz uma conta..." |
| `{{price_list}}` | 997,00 |
| `{{price_current}}` | 597,00 |
| `{{price_monthly}}` | 49,75 |
| `{{price_period}}` | ano |
| `{{cta_offer_text}}` | "COMEÇAR AGORA — R$ 597/ANO →" |

---

## Seção 08 — GARANTIA

**Fundo:** `var(--brand-mid)` — #2D2D2D
**Layout:** Badge centralizado + texto curto

```
┌─────────────────────────────────────┐
│                                     │
│    [🛡 Badge Garantia]              │
│    {{guarantee_days}} dias          │
│    de garantia incondicional        │
│                                     │
│    {{guarantee_text}}               │
│                                     │
└─────────────────────────────────────┘
```

| Variável | Charles/P3X |
|---|---|
| `{{guarantee_days}}` | 7 |
| `{{guarantee_text}}` | "Entra. Conecta a B3. Mexe na plataforma. Se em até 7 dias você achar que não é para você, por qualquer motivo, manda um e-mail e a gente devolve 100%. Sem pergunta, sem retenção." |

---

## Seção 09 — FAQ

**Fundo:** `var(--brand-dark)` — #000000
**Layout:** Accordion com 5 perguntas

| # | Variável pergunta | Charles/P3X |
|---|---|---|
| 1 | `{{faq_q1}}` | "A P3X tem custódia dos meus ativos?" |
| 2 | `{{faq_q2}}` | "Já comprei curso e ferramenta e não usei. Por que dessa vez seria diferente?" |
| 3 | `{{faq_q3}}` | "Sou iniciante. Vou conseguir usar?" |
| 4 | `{{faq_q4}}` | "Já tenho patrimônio relevante. Vai me servir?" |
| 5 | `{{faq_q5}}` | "E se eu cancelar?" |

**Notas de produção:**
- Accordion com animação suave de expand/collapse
- Linha divisória sutil entre perguntas (`1px solid rgba(255,255,255,0.1)`)

---

## Seção 10 — FECHAMENTO

**Fundo:** `var(--brand-dark)` — #000000 com foto do influencer integrada
**Layout:** Texto + foto + CTA final + assinatura

```
┌──────────────────────┬──────────────────────┐
│                      │                      │
│  {{close_headline}}  │  [Foto do criador]   │
│                      │                      │
│  {{close_path_a}}    │                      │
│  {{close_path_b}}    │                      │
│                      │                      │
│  [CTA FINAL →]       │                      │
│                      │                      │
│  — {{author_name}}   │                      │
│  {{author_title}}    │                      │
└──────────────────────┴──────────────────────┘
```

| Variável | Charles/P3X |
|---|---|
| `{{close_headline}}` | "Você tem dois caminhos a partir daqui." |
| `{{close_path_a}}` | "Um é fechar essa página, voltar para o app da corretora..." |
| `{{close_path_b}}` | "O outro é entrar na P3X agora, conectar sua conta da B3 nos próximos cinco minutos..." |
| `{{cta_final_text}}` | "ENTRAR NA P3X AGORA →" |
| `{{close_photo}}` | `Fotos - Charles/01 - Principal.jpg` |

---

## Seção 11 — FOOTER

**Fundo:** `#111111`
**Layout:** Logo + links legais + copyright

```
[Logo]    Termos de Uso | Política de Privacidade | Contato

© {{current_year}} {{platform_name}}. Todos os direitos reservados.
```

---

## Diretrizes de Responsividade

| Breakpoint | Comportamento |
|---|---|
| `> 1200px` | Layout de 2 colunas nas seções Hero, Solução, Autoridade, Fechamento |
| `768px–1200px` | Colunas menores, texto ajustado |
| `< 768px` | Layout em coluna única. CTAs full-width. Foto acima do texto no Hero. |

---

## Referência Visual — LP do Mira

A LP do Mira serviu como benchmark de layout. Pontos a replicar:

- ✅ **Seções bem delimitadas** com alternância de fundo claro/escuro
- ✅ **Muito respiro** (padding generoso entre elementos)
- ✅ **Componentes claros** — ícones simples, sem poluição visual
- ✅ **Tipografia grande** nos headlines de seção
- ✅ **CTAs repetidos** em múltiplas seções (não apenas no hero)
- ✅ **Foto do influencer** integrada naturalmente em pelo menos 2 seções
- ✅ **Grid de features/pilares** limpo com ícones monocromáticos
- ✅ **Faixa de números** (prova social quantitativa) impactante
- ✅ **Accordion de FAQ** no final antes do fechamento
