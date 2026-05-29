// src/data/charles.ts
// Fonte única de copy e dados da LP P3X / Charles Mendlowicz.
// Para adaptar a novo influencer: criar src/data/[nome].ts com a mesma estrutura.

export const brand = {
  primaryColor: '#2A9345',
  darkColor: '#000000',
  midColor: '#2D2D2D',
  lightColor: '#FFFFFF',
}

export const platform = {
  name: 'P3X',
  tagline: 'Onde informação vira decisão e decisão vira renda.',
  domain: 'comunidadep3x.com.br',
  checkoutUrl: 'https://comunidadep3x.com.br/checkout',
  priceList: 'R$997,00',
  priceCurrent: 'R$597,00',
  priceMonthly: 'R$49,75',
  pricePeriod: 'ano',
  guaranteeDays: 7,
}

export const author = {
  name: 'Charles Mendlowicz',
  nickname: 'Charlão',
  title: 'Economista Sincero',
  bioShort:
    'Charles Mendlowicz é economista com 30 anos de experiência real no mercado financeiro. Criador do canal Economista Sincero — eleito 4 vezes o melhor influenciador de investimentos do Brasil pela ANBIMA. Sem enrolação. Sem promessa milagrosa.',
  bioFull:
    'Charles Mendlowicz é economista formado pela UERJ, com MBA em Gestão Estratégica (UFF) e MBA em Logística (FGV). São 30 anos de experiência real no mercado financeiro. Autor do best-seller "18 Princípios para Você Evoluir", publicado em 3 idiomas. Desde 2018, lidera o canal Economista Sincero, democratizando o acesso à educação financeira com uma abordagem direta, transparente e sem enrolação.',
  credentials: [
    '30 anos de mercado',
    '4x melhor influenciador ANBIMA',
    'Livro publicado em 3 idiomas',
    '2x Top 03 IBEST',
  ],
  photos: {
    hero: '/Economista-Sincero/images/charles-hero.jpg',
    authority: '/Economista-Sincero/images/charles-authority.jpg',
    closing: '/Economista-Sincero/images/charles-hero.jpg',
    guarantee: '/Economista-Sincero/images/charles-6.jpg',
  },
}

export const nav = {
  logoTop: '/Economista-Sincero/images/logo-positivo.png',
  logoScrolled: '/Economista-Sincero/images/__positivo-icon.png',
  ctaText: 'Começar agora',
}

export const hero = {
  tag: 'Economista Sincero', // unused now?
  headline: 'PARE DE INVESTIR NO ESCURO.',
  subheadline: {
    before: 'VOCÊ NÃO TEM UM PROBLEMA DE DINHEIRO. TEM UM PROBLEMA DE ',
    highlight: 'VISÃO.'
  },
  description: 'Você abre a corretora e não sabe direito quanto tem, onde está, nem o que fazer com o dinheiro parado. A P3X conecta sua conta da B3 e mostra tudo organizado já na primeira vez que você entra.',
  checklist: [
    'Consolidador integrado à B3',
    'Carteiras recomendadas',
    'Cursos do zero ao avançado',
    'Comunidade ativa'
  ],
  checklistHighlight: '',
  ctaText: 'QUERO ENXERGAR MEUS INVESTIMENTOS COM CLAREZA',
  ctaMicrocopy:
    'Acesso imediato • Garantia de 7 dias • Seus ativos continuam na sua corretora',
}

export const pain = {
  headline: 'O PONTO CEGO\nSeus investimentos estão espalhados, e isso custa caro.',
  narrative: [
    'Você abre a corretora.',
    'Depois outro app.',
    'Depois aquela planilha que você jurou que ia manter atualizada.'
  ],
  bulletsIntro: 'No fim das contas, você não sabe:',
  bullets: [
    '**quanto** você realmente tem.',
    '**se** está fazendo certo.',
    '**o que** deveria fazer amanhã.'
  ],
  closing: 'O problema não é você não saber investir.',
  closingPre: 'É não conseguir ',
  closingBold: 'enxergar o que você já tem.',
}

export const solution = {
  label: 'Ecossistema',
  headline: 'Tudo o que um investidor precisa. Em um só lugar.',
  description:
    'Tudo o que hoje está espalhado em apps, planilhas e abas do navegador fica num lugar só.',
  closing:
    'Tudo do jeito que o Charlão pensa e investe.',
  ctaText: 'QUERO ENXERGAR MEUS INVESTIMENTOS COM CLAREZA',
  pillars: [
    {
      icon: '📊',
      title: 'Consolidador integrado à B3',
      description:
        'Veja ações, FIIs, renda fixa e dividendos em segundos. Atualização automática.',
    },
    {
      icon: '📈',
      title: 'Carteiras recomendadas',
      description:
        'Brasil e exterior, com a tese explicada e atualização contínua.',
    },
    {
      icon: '🎓',
      title: 'Cursos e conteúdos',
      description:
        'Do básico ao avançado, sem enrolação.',
    },
    {
      icon: '🤝',
      title: 'Comunidade ativa',
      description:
        'Troca de ideias com milhares de investidores, num espaço moderado e sem ruído.',
    },
    {
      icon: '🏷️',
      title: 'Clube de Benefícios',
      description:
        'Descontos em farmácias, mercados, postos e e-commerces que você já usa todo mês.',
    },
  ],
}

export const moment = {
  headline: 'A primeira vez que você vê tudo junto.',
  narrative: [
    'Você conecta sua conta da B3.',
    'A tela carrega.',
    'E pela primeira vez você enxerga:'
  ],
  bullets: [
    'quanto tem',
    'onde está',
    'como evoluiu'
  ],
  closingBold: 'Só clareza.',
  closing: 'Sem planilha. Sem achismo. ',
}

export const socialProof = {
  headline: 'QUEM ENTROU, ENTENDEU RÁPIDO.',
  testimonials: [
    { text: '[Depoimento 1 a receber]', name: '[Nome 1]', role: '[Profissão / Cidade]' },
    { text: '[Depoimento 2 a receber]', name: '[Nome 2]', role: '[Profissão / Cidade]' },
    { text: '[Depoimento 3 a receber]', name: '[Nome 3]', role: '[Profissão / Cidade]' },
  ],
  stats: [
    { value: '+[X] mil', label: 'investidores ativos' },
    { value: 'R$[X] milhões', label: 'acompanhados na plataforma' },
    { value: '[X]', label: 'carteiras atualizadas' },
  ],
}

export const offer = {
  headline: 'QUANTO CUSTA PARAR DE INVESTIR NO ESCURO?',
  cardTitle: 'ASSINATURA ANUAL P3X',
  priceList: 'R$997,00',
  priceCurrent: 'R$597,00',
  priceMonthly: 'R$49,75',
  pricePeriod: 'ANO',
  badge: '40% off',
  priceComparison: 'Menos do que uma pizza por mês.',
  benefitsTitle: 'ACESSO COMPLETO',
  benefits: [
    'Consolidador de carteira - integrado à B3',
    'Carteiras recomendadas - Brasil e Exterior',
    'Cursos do iniciante ao avançado',
    'Comunidade ativa, moderada, sem ruído',
    'Clube de Benefícios — economia no dia a dia',
    'Acesso por 12 meses completos a tudo'
  ],
  ctaText: 'COMEÇAR AGORA',
}

export const guarantee = {
  headline: 'O RISCO É MEU',
  subheadline: 'Garantia de 7 dias',
  text: 'Conecte sua B3 e veja tudo na primeira tela. Se a clareza não aparecer pra você, devolvemos 100% do seu dinheiro. Você tem 7 dias garantidos pra decidir, sem burocracia e sem pergunta chata.',
}

export const faq = [
  {
    question: 'A P3X tem custódia dos meus ativos?',
    answer:
      'Não, em hipótese nenhuma. Seus ativos continuam na sua corretora. A P3X apenas lê os dados via integração oficial da B3.',
  },
  {
    question: 'Já comprei curso e ferramenta antes e não usei. Por que dessa vez seria diferente?',
    answer:
      'Porque a P3X não te pede pra estudar antes de ver valor. No primeiro dia você conecta a B3 e já vê tudo organizado. O valor aparece na primeira vez que você usa, não daqui a três meses.',
  },
  {
    question: 'Sou iniciante. Vou conseguir usar?',
    answer:
      'Sim. Os cursos partem do zero, as carteiras vêm com a tese explicada e a comunidade está cheia de gente no mesmo ponto que você.',
  },
  {
    question: 'Já tenho patrimônio relevante. Vai me servir?',
    answer:
      'Provavelmente ainda mais. Quanto maior o patrimônio, mais cara fica a falta de clareza.',
  },
  {
    question: 'O preço muda quando eu renovar?',
    answer:
      'Não, se você entrar no mês de lançamento. Quem assina nessa janela trava o valor: seu preço não muda pelos próximos 2 anos, mesmo que a P3X reajuste para novos assinantes. É a vantagem de entrar cedo.',
  },
  {
    question: 'E se eu cancelar?',
    answer:
      'Você cancela quando quiser, pelo próprio painel. Sem fidelidade, sem multa, sem ligação de retenção.',
  },
]

export const closing = {
  label: 'DECISÃO',
  headline: 'VOCÊ PODE CONTINUAR NO ESCURO…',
  subheadline: {
    before: '…ou entrar na P3X e ',
    highlight: 'ver seu dinheiro com clareza de uma vez.',
  },
  checklist: [
    '7 dias de garantia',
    'R$ 597 no ano (R$ 49,75/mês)',
    'Preço travado por 2 anos no lançamento'
  ],
  ctaText: 'ENTRAR NA P3X AGORA',
}

export const footer = {
  logo: '/Economista-Sincero/images/logo-positivo.png',
  tagline: 'Onde informação vira decisão e decisão vira renda.',
  links: [
    { label: 'Contato', href: '#' },
    { label: 'Termos de Uso', href: '#' },
    { label: 'Política de Privacidade', href: '#' },
  ],
  copyright: `© ${new Date().getFullYear()} P3X. Todos os direitos reservados. • P3X não é corretora | sem custódia de ativos`,
}
