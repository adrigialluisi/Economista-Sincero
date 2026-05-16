# Template Guide — Como Adaptar a LP para um Novo Influencer

> Este guia explica como reutilizar a estrutura da LP do Charles/P3X para outro influencer.
> Siga o checklist e substitua as variáveis. Em menos de 2h você tem a LP nova configurada.

---

## Como o Template Funciona

A LP é dividida em **dois tipos de conteúdo**:

1. **Estrutura fixa** — seções, componentes, lógica de conversão, CSS base. **Não mudar.**
2. **Variáveis de marca** — cores, fontes, textos, fotos, preços, credenciais. **Trocar por influencer.**

As variáveis estão marcadas com `{{chaves}}` em `LP-STRUCTURE.md` e como CSS Custom Properties em `BRANDBOOK.md`.

---

## Checklist de Adaptação

### ETAPA 1 — Identidade Visual

- [ ] Definir cor primária do novo influencer → substituir `--brand-primary: #2A9345`
- [ ] Definir cor de fundo (geralmente preto ou cor escura da marca) → `--brand-dark`
- [ ] Definir cor secundária/cinza → `--brand-mid`
- [ ] Confirmar fonte de headline (equivalente ao TuskerGrotesk) → `--font-headline`
- [ ] Confirmar fonte de corpo (equivalente ao Proxima Nova) → `--font-body`
- [ ] Trocar logo (positivo + negativo + icon)
- [ ] Trocar fotos do influencer (indicar as 2 principais para Hero e Autoridade)

### ETAPA 2 — Dados do Produto

- [ ] Nome da plataforma → `{{platform_name}}`
- [ ] Tagline da plataforma → `{{platform_tagline}}`
- [ ] Domínio → atualizar links de checkout
- [ ] Preço de lista → `{{price_list}}`
- [ ] Preço atual → `{{price_current}}`
- [ ] Preço mensal equivalente → `{{price_monthly}}`
- [ ] Período (ano / mês) → `{{price_period}}`
- [ ] Prazo de garantia → `{{guarantee_days}}`
- [ ] Pilares do produto (pode ser 3 ou 4) → cards da Seção 03

### ETAPA 3 — Copy (Textos)

- [ ] Headline do Hero → `{{hero_headline}}`
- [ ] Subtítulo do Hero → `{{hero_subheadline}}`
- [ ] Texto de CTA principal → `{{cta_primary_text}}`
- [ ] Microcopy do CTA → `{{cta_microcopy}}`
- [ ] Cena de dor (Seção 02) → adaptar para o avatar específico do influencer
- [ ] Nome e descrição dos pilares (Seção 03)
- [ ] Momento emocional (Seção 04) → adaptar para o produto específico
- [ ] Texto de garantia (Seção 08)
- [ ] Perguntas do FAQ (Seção 09) → adaptar para as objeções do produto
- [ ] Copy de fechamento (Seção 10)

### ETAPA 4 — Dados do Influencer

- [ ] Nome completo → `{{author_name}}`
- [ ] Título / apelido de marca → `{{author_title}}`
- [ ] Bio curta (3-4 linhas) → `{{author_bio}}`
- [ ] Credenciais para badges (4-6 itens) → `{{author_credential_*}}`
- [ ] Foto principal (Hero) → `{{hero_image}}`
- [ ] Foto autoridade (Seção 05) → `{{author_photo}}`
- [ ] Foto fechamento (Seção 10) → `{{close_photo}}`

### ETAPA 5 — Assets de Conteúdo

- [ ] Screenshot ou vídeo real do produto (Seção 04)
- [ ] Capas dos módulos/features (para grid da Seção 03)
- [ ] Fotos dos depoentes (opcional, mas aumenta conversão)
- [ ] Números reais da plataforma → `{{stats_investors}}`, `{{stats_patrimony}}`, etc.
- [ ] Depoimentos de alunos (3 com foco diferente: antes/depois, iniciante, avançado)

---

## Mapa Completo de Variáveis

```yaml
# === MARCA ===
brand_primary_color: "#2A9345"       # Cor de destaque, CTAs
brand_dark_color: "#000000"          # Fundo principal
brand_mid_color: "#2D2D2D"           # Fundo seções alternadas
brand_light_color: "#FFFFFF"         # Texto e fundos claros
font_headline: "TuskerGrotesk"       # Fonte de títulos
font_body: "Proxima Nova"            # Fonte de corpo
logo_dark: "LOGO/__negativo.png"
logo_light: "LOGO/__positivo.png"

# === PLATAFORMA ===
platform_name: "P3X"
platform_tagline: "Onde informação vira decisão e decisão vira renda"
platform_domain: "comunidadep3x.com.br"
price_list: "997,00"
price_current: "597,00"
price_monthly: "49,75"
price_period: "ano"
guarantee_days: 7

# === INFLUENCER ===
author_name: "Charles Mendlowicz"
author_title: "Economista Sincero"
author_bio: "Charles Mendlowicz é economista com 30 anos de experiência real..."
author_credential_1: "30 anos de mercado"
author_credential_2: "4x Melhor Influenciador ANBIMA"
author_credential_3: "Best-seller em 3 idiomas"
author_credential_4: "2x Top 03 IBEST"
hero_image: "Fotos - Charles/01 - Principal.jpg"
author_photo: "Fotos - Charles/02 - Principal.jpg"
close_photo: "Fotos - Charles/01 - Principal.jpg"

# === HERO ===
hero_tag: "Plataforma de Investimentos"
hero_headline: "Para quem cansou de não saber, no domingo à noite, quanto realmente tem investido."
hero_subheadline: "Você não tem um problema de dinheiro. Você tem um problema de visão."
cta_primary_text: "QUERO VER MEU DINHEIRO COM CLAREZA →"
cta_microcopy: "Acesso imediato. Garantia de 7 dias. Seus ativos continuam na sua corretora."

# === SEÇÕES ===
pain_headline: "Deixa eu adivinhar como é o seu domingo à noite."
solution_label: "O ecossistema completo do investidor brasileiro."
solution_headline: "Não é APENAS uma comunidade. Não é mais um curso."
moment_quote: "Caralh#, é isso que eu tenho."
offer_headline: "Quanto custa parar de operar no escuro?"
guarantee_text: "Entra. Conecta a B3. Mexe na plataforma. Se em até 7 dias..."
close_headline: "Você tem dois caminhos a partir daqui."
cta_final_text: "ENTRAR NA P3X AGORA →"
cta_nav_text: "Começar agora"

# === PILARES (Seção 03) ===
pillar_1_title: "Consolidador integrado à B3"
pillar_1_desc: "Conecta uma vez, vê tudo. Sem digitar nada. Sem custódia."
pillar_2_title: "Carteiras recomendadas"
pillar_2_desc: "Brasil e Exterior. Atualizadas com a tese por trás de cada movimento."
pillar_3_title: "Cursos e conteúdos"
pillar_3_desc: "Do iniciante ao avançado. Conteúdo vivo, atualizado com o cenário."
pillar_4_title: "Comunidade ativa"
pillar_4_desc: "Milhares de investidores trocando tese. Sem ruído."

# === STATS (Seção 06 — preencher após 30 dias) ===
stats_investors: "[X] mil"
stats_patrimony: "R$ [X] milhões"
stats_portfolios: "[X]"

# === FAQ ===
faq_q1: "A P3X tem custódia dos meus ativos?"
faq_q2: "Já comprei curso e ferramenta e não usei. Por que dessa vez seria diferente?"
faq_q3: "Sou iniciante. Vou conseguir usar?"
faq_q4: "Já tenho patrimônio relevante. Vai me servir?"
faq_q5: "E se eu cancelar?"
```

---

## Exemplo: Adaptando para o Mira

Para adaptar este template para o Mira (referência de design já existente):

```yaml
brand_primary_color: "#F5A623"   # Amarelo Mira
brand_dark_color: "#000000"
platform_name: "Comunidade Mira"
author_name: "[Nome do Mira]"
price_current: "497,00"
price_period: "2 anos de acesso"
```

O restante da estrutura de seções, lógica de conversão e componentes permanece idêntico.

---

## Arquivos a Criar por Novo Influencer

Para cada novo influencer, criar uma pasta com:

```
[Nome Influencer]/
├── INFLUENCER-[NOME].md     ← Bio, credenciais, tom, fotos
├── COPY-[NOME].md           ← Copy completo da LP
├── BRANDBOOK-[NOME].md      ← Tokens de design específicos
├── brandbook/               ← PDF do brandbook
├── font/                    ← Arquivos de fonte
├── LOGO/                    ← Variações de logo
└── Fotos/                   ← Fotos aprovadas
```

Os arquivos `LP-STRUCTURE.md`, `PROJECT.md` e `TEMPLATE-GUIDE.md` são **compartilhados** entre todos os influencers.

---

## Tempo Estimado de Adaptação

| Etapa | Tempo estimado |
|---|---|
| Coleta de assets (fotos, logo, brandbook) | 1-2h (depende do cliente) |
| Preenchimento das variáveis | 30min |
| Adaptação do copy | 2-4h |
| Ajuste de CSS (trocar tokens de cor/fonte) | 30min |
| QA e revisão | 1h |
| **Total** | **~5-8h** |
