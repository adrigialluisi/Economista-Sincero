# Projeto LP — Template de Landing Page para Influencers de Investimento

## Visão Geral

Este projeto entrega uma **Landing Page de vendas modular e reutilizável** para influencers do mercado financeiro. A primeira instância é para a plataforma **P3X do Charles Mendlowicz (Economista Sincero)**. A arquitetura foi pensada para ser um template que pode ser adaptado para outros influencers com mínimo esforço.

---

## O Produto — P3X

| Campo | Valor |
|---|---|
| Nome da plataforma | P3X — Comunidade P3X |
| Domínio | comunidadep3x.com.br |
| Tagline | "Onde informação vira decisão e decisão vira renda" |
| Modelo | Assinatura anual |
| Preço de lista | R$ 997,00 |
| Preço atual | R$ 597,00/ano (R$ 49,75/mês) |
| Garantia | 7 dias, sem perguntas |

### Os 4 Pilares da P3X
1. **Consolidador B3** — conecta uma vez, vê tudo (ações, FIIs, renda fixa, BDRs)
2. **Carteiras recomendadas** — Brasil e Exterior, atualizadas com tese explicada
3. **Cursos e conteúdos** — 13 módulos, do zero ao avançado
4. **Comunidade ativa** — ambiente exclusivo e sem ruído

### Método — Portfólio 3X
- **Posicionamento** — saber onde e como alocar
- **Proteção** — blindar o patrimônio
- **Potência** — multiplicar capital

---

## Estrutura de Arquivos do Projeto

```
Charles - Economista Sincero/
│
├── PROJECT.md                  ← Este arquivo. Visão geral e contexto.
├── BRANDBOOK.md                ← Design tokens: cores, fontes, logos, regras visuais.
├── LP-STRUCTURE.md             ← Arquitetura template da LP (seções e componentes).
├── COPY-CHARLES.md             ← Copy completo da LP do Charles, seção por seção.
├── INFLUENCER-CHARLES.md       ← Perfil do Charles: bio, credenciais, tom, fotos.
├── TEMPLATE-GUIDE.md           ← Como adaptar a LP para outro influencer.
│
├── brandbook/
│   └── [P3X] ARTES E CONCEITO.pdf
│
├── font/
│   └── TuskerGrotesk-*.ttf     ← Família completa de headlines
│
├── LOGO/
│   ├── __positivo.png
│   ├── __negativo.png
│   ├── __fundo-preto.png
│   └── (variações icon)
│
├── Fotos - Charles/
│   ├── 01 - Principal.jpg      ← ⭐ Foto principal aprovada
│   ├── 02 - Principal.jpg      ← ⭐ Foto alternativa aprovada
│   └── Charles (1-8).jpg       ← Fotos de apoio
│
└── Charles-P3X/
    └── (capas dos módulos — 455x255 e full size)
```

---

## Contexto de Negócio

- A LP é o principal instrumento de conversão da P3X
- Público-alvo: investidor brasileiro pessoa física, com algum patrimônio, que sente falta de clareza e organização
- A plataforma concorre com agregadores (como o Status Invest) mas se posiciona como **ecossistema**, não apenas ferramenta
- Tom: direto, sem promessa milagrosa, sem emoji, voz do Charles em primeira pessoa

---

## Referência de Design

A LP do **Mira** (outro influencer do mesmo contexto) foi usada como referência de layout. Características que devem ser mantidas:
- Design limpo, com muito respiro
- Seções bem delimitadas, alternando fundo escuro e claro
- Componentes claros: ícones simples, tipografia grande, CTAs evidentes
- Foto do influencer integrada às seções de autoridade e fechamento

---

## Status do Projeto

| Etapa | Status |
|---|---|
| Briefing e levantamento de assets | ✅ Concluído |
| Documentação (.md files) | ✅ Concluído |
| Desenvolvimento da LP (HTML/CSS) | ⏳ Próximo passo |
| Revisão e QA | ⏳ Aguardando |
| Deploy | ⏳ Aguardando |
