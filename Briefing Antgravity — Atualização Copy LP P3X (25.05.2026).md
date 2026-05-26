# Briefing — Atualização de Copy LP P3X
**Data da atualização:** 25/05/2026
**Para:** Antgravity
**De:** Adriana / Charles Mendlowicz (Economista Sincero)

---

Segue abaixo todas as mudanças a aplicar na LP da P3X. A referência de comparação é a **Versão 02 do PDF enviado em 20/05/2026**.

---

## TIPOGRAFIA — MUDANÇA GLOBAL

### Fonte de headlines — SUBSTITUIR EM TODA A LP

**Remover:** TuskerGrotesk (todas as variantes)
**Substituir por:** **Bebas Neue Regular**

Esta troca se aplica a **todos os títulos e headlines** da LP, em todas as seções:
H1 (Hero), H2 (títulos de seção), H3 (subtítulos de cards), títulos dos steps "Como Funciona", título da seção "Pra Quem É a P3X", e qualquer outro elemento que usava TuskerGrotesk.

**Arquivo da fonte:** `BebasNeue-Regular.ttf` (em anexo / já na pasta `public/fonts/`)
**Google Fonts (fallback):** `https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap`

**CSS a atualizar em `tokens.css`:**

```css
/* ANTES */
--font-headline: 'TuskerGrotesk', sans-serif;
--fw-headline: 600;

/* DEPOIS */
--font-headline: 'Bebas Neue', sans-serif;
--fw-headline: 400;  /* Bebas Neue tem apenas peso Regular */
```

**`@font-face` a adicionar em `globals.css`:**

```css
@font-face {
  font-family: 'Bebas Neue';
  src: url('/fonts/BebasNeue-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

**Notas importantes:**
- Bebas Neue tem apenas um peso (Regular 400). A hierarquia entre H1 e H2 é feita exclusivamente por tamanho.
- A fonte já é toda maiúscula — manter `text-transform: uppercase` no CSS para consistência.
- Não usar abaixo de 20px (legibilidade ruim em tamanho pequeno).
- Os tamanhos de fonte (`--text-hero`, `--text-h2`, `--text-h3`) permanecem os mesmos — só a família muda.

---

## SEÇÃO 1 · HERO

### Subtítulo — ALTERAR

**Remover:**
> A P3X conecta sua conta da B3, organiza seus investimentos e mostra o que fazer com clareza.

**Substituir por:**
> Você não tem um problema de dinheiro. Tem um problema de visão.
>
> A P3X conecta sua conta da B3 e mostra tudo organizado já na primeira vez que você entra.

### CTA principal — ALTERAR

**Remover:**
> QUERO TER CLAREZA NOS MEUS INVESTIMENTOS

**Substituir por:**
> QUERO ENXERGAR MEUS INVESTIMENTOS COM CLAREZA

---

## SEÇÃO 2 · DOR

### Título da seção — ALTERAR

**Remover:**
> SEUS INVESTIMENTOS ESTÃO DESORGANIZADOS E SEM LÓGICA E ISSO CUSTA CARO.

**Substituir por:**
> O PONTO CEGO
>
> Seus investimentos estão espalhados, e isso custa caro.

---

## SEÇÃO 3 · NOVA — "COMO FUNCIONA"

**Inserir nova seção entre a seção de Dor e o Ecossistema.**

> ### COMO FUNCIONA
>
> Funciona em 3 passos.
>
> **01. Conecte sua B3**
> Um clique, pela integração oficial. Sem digitar ativo por ativo, sem planilha.
>
> **02. Veja tudo na hora**
> Suas ações, FIIs, renda fixa e dividendos aparecem juntos em segundos.
>
> **03. Saiba o próximo passo**
> Você vê as carteiras recomendadas com a tese explicada, do jeito que o Charlão pensa.

---

## SEÇÃO 4 · ECOSSISTEMA

### Adicionar 5º item à lista

Os 4 cards/itens atuais se mantêm. **Adicionar o seguinte como item 05:**

> **05 Clube de Benefícios**
> Descontos em farmácias, mercados, postos, e-commerces e vários serviços que você já usa todo mês.

### Linha de encerramento da seção — ALTERAR

**Remover:**
> TUDO COM O MÉTODO E A VISÃO DO CHARLÃO.

**Substituir por:**
> Tudo do jeito que o Charlão pensa e investe.

---

## SEÇÃO 5 · PROVA SOCIAL INLINE — NOVA

**Inserir bloco de citação logo após o Ecossistema** (antes da seção "Pra Quem É a P3X"):

> *"Abri, conectei a B3 e pela primeira vez vi tudo o que tenho num lugar só."*
>
> [Nome real] · [Profissão / Cidade]

*(Trocar pelo depoimento real que fale do "momento da clareza". Incluir foto real.)*

---

## SEÇÃO 5B · NOVA — "PRA QUEM É A P3X"

**Inserir nova seção após a prova social inline.**

> ### PRA QUEM É A P3X
>
> Tanto faz se você está começando agora ou já investe.
>
> ---
>
> **COMEÇANDO DO ZERO**
>
> Você quer começar e não sabe por onde.
>
> - Cursos de educação financeira que partem do absoluto zero.
> - Organização das suas finanças pra fazer o dinheiro sobrar.
> - Carteiras prontas, com a tese explicada. Você só executa.
> - Uma comunidade cheia de gente no mesmo ponto que você.
>
> ---
>
> **JÁ INVESTE**
>
> Você já investe, mas perde tempo juntando os números.
>
> - Integração com a B3, sem mais planilhas manuais.
> - Carteiras recomendadas de Brasil e exterior, sempre atualizadas.
> - Visão consolidada do patrimônio inteiro, em segundos.
> - Conteúdos avançados pra escalar o que você já construiu.

---

## SEÇÃO 6 · MOMENTO QUE MUDA TUDO

Sem alterações de copy. Manter como está.

---

## SEÇÃO 7 · AUTORIDADE

Sem alterações. Manter como está.

---

## SEÇÃO 8 · DEPOIMENTOS

### Quantidade — ALTERAR

**De:** 6 espaços para depoimentos
**Para:** 3 espaços para depoimentos

*(Depoimentos reais serão enviados em breve.)*

---

## SEÇÃO 8B · NOVA — "CLUBE DE BENEFÍCIOS"

**Inserir nova seção entre os Depoimentos e a Oferta/Preço.**

> ### CLUBE DE BENEFÍCIOS
>
> Tem uma parte que pode fazer a P3X se pagar sozinha.
>
> Dentro da P3X você também ganha acesso ao Clube de Benefícios, com descontos em farmácias, mercados, postos, e-commerces e vários serviços que você já usa no dia a dia.
>
> São gastos que você já tem todo mês. A diferença é que agora parte desse dinheiro volta pro seu bolso.
>
> Pra quem usa bem, o Clube pode cobrir o valor da própria assinatura. Na prática, a clareza nos seus investimentos sai de graça.

---

## SEÇÃO 9 · OFERTA / PREÇO

### Tabela de valor percebido — ADICIONAR

**Inserir tabela antes do preço final:**

| Item | Valor individual |
|---|---|
| Consolidador integrado à B3 | R$ [valor] |
| Carteiras recomendadas (BR + exterior) | R$ [valor] |
| Cursos do iniciante ao avançado | R$ [valor] |
| Comunidade ativa e moderada | R$ [valor] |
| Clube de Benefícios (economia recorrente) | R$ [valor] |
| **VALOR TOTAL** | **R$ [soma]** |

*(Preencher com os valores reais que o Charles vai fornecer.)*

### Lista de itens inclusos — ADICIONAR ITEM

Adicionar à lista de checkmarks:

> ✔ Clube de Benefícios — economia no dia a dia

### Elemento de urgência — ADICIONAR (abaixo do CTA)

> 🔒 Quem entra no mês de lançamento trava o preço: seu valor não muda pelos próximos 2 anos, mesmo que a P3X reajuste para novos assinantes.

### Texto abaixo do CTA — ALTERAR

**Remover:**
> Menos do que uma pizza

**Substituir por:**
> Menos do que uma pizza por mês.

---

## SEÇÃO 10 · GARANTIA

### Texto — ALTERAR

**Remover:**
> Entre, conecte sua B3 e teste a plataforma. Se não fizer sentido pra você, devolvemos 100%. Sem burocracia.

**Substituir por:**
> Conecte sua B3 e veja tudo na primeira tela. Se a clareza não aparecer pra você, devolvemos 100% do seu dinheiro. Você tem 7 dias garantidos pra decidir, sem burocracia e sem pergunta chata.

---

## SEÇÃO 11 · FAQ

### Adicionar 2 perguntas novas

**Adicionar após "Já tenho patrimônio relevante. Vai me servir?":**

> **› O preço muda quando eu renovar?**
>
> Não, se você entrar no mês de lançamento. Quem assina nessa janela trava o valor: seu preço não muda pelos próximos 2 anos, mesmo que a P3X reajuste para novos assinantes. É a vantagem de entrar cedo.

**Adicionar como última pergunta do FAQ:**

> **› E se eu cancelar?**
>
> Você cancela quando quiser, pelo próprio painel. Sem fidelidade, sem multa, sem ligação de retenção.

---

## SEÇÃO 12 · FECHAMENTO / DECISÃO

### Lista de checkmarks — ALTERAR

**Remover:**
> ✔ Garantia de 7 dias
> ✔ R$597 no ano
> ✔ Acesso imediato

**Substituir por:**
> ✔ 7 dias de garantia
> ✔ R$ 597 no ano (R$ 49,75/mês)
> ✔ Preço travado por 2 anos no lançamento

---

## RESUMO — Ordem das mudanças por tipo

### Tipografia global (1)
- **Todas as headlines da LP:** TuskerGrotesk → **Bebas Neue Regular** (ver seção "TIPOGRAFIA" no topo deste briefing)

### Seções novas a criar (4)
1. **Seção 3** — "Como Funciona" (3 passos) — inserir entre Dor e Ecossistema
2. **Seção 5 inline** — Bloco de citação de cliente — inserir após Ecossistema
3. **Seção 5B** — "Pra Quem É a P3X" — inserir após Prova Social Inline
4. **Seção 8B** — "Clube de Benefícios" — inserir entre Depoimentos e Oferta

### Edições de copy em seções existentes (8)
- Hero: subtítulo + CTA
- Dor: título da seção
- Ecossistema: +1 item (Clube de Benefícios) + linha de encerramento
- Depoimentos: reduzir de 6 para 3 espaços
- Oferta: tabela de valor + item Clube de Benefícios + urgência de preço travado + "pizza por mês"
- Garantia: texto reescrito
- FAQ: +2 perguntas
- Fechamento: substituir 3 bullets

---

*Dúvidas ou alinhamentos: falar com Adriana.*
