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
    before: 'A P3X conecta sua conta da B3,\norganiza seus investimentos e',
    highlight: 'mostra o que fazer com clareza.'
  },
  checklist: [
    'Consolidador de carteira',
    'Carteiras recomendadas',
    'Cursos',
    'Comunidade ativa'
  ],
  checklistHighlight: 'TUDO EM UM SÓ LUGAR',
  ctaText: 'QUERO TER CLAREZA NOS MEUS INVESTIMENTOS',
  ctaMicrocopy:
    'Acesso imediato • Garantia de 7 dias • Seus ativos continuam na sua corretora',
}

export const pain = {
  headline: 'SEUS INVESTIMENTOS ESTÃO DESORGANIZADOS E SEM LÓGICA E ISSO CUSTA CARO.',
  narrative: [
    'Você abre a corretora.',
    'Depois outro app.',
    'Depois uma planilha.'
  ],
  bulletsIntro: 'E no final… ainda não sabe:',
  bullets: [
    'quanto realmente tem',
    'se está fazendo certo',
    'ou o que deveria fazer amanhã'
  ],
  closingBold: 'FALTA DE CLAREZA.',
  closing: 'O problema não é falta de inteligência. É ',
}

export const solution = {
  label: 'Ecossistema',
  headline: 'O ECOSSISTEMA COMPLETO DO INVESTIDOR.',
  description:
    'A P3X junta, em um único lugar, tudo que um investidor precisa para deixar de tomar decisões no escuro.',
  closing:
    'TUDO COM O MÉTODO E A VISÃO DO CHARLÃO.',
  ctaText: 'QUERO TER CLAREZA NOS MEUS INVESTIMENTOS',
  pillars: [
    {
      icon: '📊',
      title: 'Consolidador integrado à B3',
      description:
        'Veja ações, FIIs, renda fixa e dividendos em segundos.',
    },
    {
      icon: '📈',
      title: 'Carteiras recomendadas',
      description:
        'Brasil e exterior com atualização contínua.',
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
        'Troca de ideias com milhares de investidores.',
    },
  ],
}

export const moment = {
  headline: 'O MOMENTO QUE MUDA TUDO.',
  narrative: [
    'Você conecta sua conta da B3.',
    'A tela carrega.',
    'E pela primeira vez você vê:'
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
    { text: '[Depoimento 4 a receber]', name: '[Nome 4]', role: '[Profissão / Cidade]' },
    { text: '[Depoimento 5 a receber]', name: '[Nome 5]', role: '[Profissão / Cidade]' },
    { text: '[Depoimento 6 a receber]', name: '[Nome 6]', role: '[Profissão / Cidade]' },
  ],
  stats: [
    { value: '+[X] mil', label: 'investidores ativos' },
    { value: 'R$[X] milhões', label: 'acompanhados' },
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
  priceComparison: 'Menos do que uma pizza.',
  benefitsTitle: 'ACESSO COMPLETO',
  benefits: [
    'Consolidador de carteira - integrado à B3',
    'Carteiras recomendadas - Brasil e Exterior',
    'Cursos do iniciante ao avançado',
    'Comunidade ativa, moderada, sem ruído',
    'Acesso por 12 meses completos a tudo'
  ],
  ctaText: 'COMEÇAR AGORA',
}

export const guarantee = {
  headline: 'O RISCO É MEU',
  subheadline: 'Garantia de 7 dias',
  text: 'Entre, conecte sua B3 e teste a plataforma.\nSe não fizer sentido pra você, devolvemos 100%.\nSem burocracia.',
}

export const faq = [
  {
    question: 'A P3X tem custódia dos meus ativos?',
    answer:
      'Não. Em hipótese nenhuma. Seus ativos continuam na sua corretora. A P3X só lê os dados via integração oficial da B3.',
  },
  {
    question: 'Já comprei curso e ferramenta e não usei. Por que dessa vez seria diferente?',
    answer:
      'Porque a P3X não te pede para estudar antes de ver valor. No primeiro dia você conecta a B3 e já vê tudo. O valor acontece na primeira sessão.',
  },
  {
    question: 'Sou iniciante. Vou conseguir usar?',
    answer:
      'Sim. Os cursos partem do zero, as carteiras vêm com tese explicada, a comunidade é cheia de gente no mesmo ponto.',
  },
  {
    question: 'Já tenho patrimônio relevante. Vai me servir?',
    answer:
      'Provavelmente até mais. Quanto maior o patrimônio, mais cara fica a falta de clareza.',
  },
  {
    question: 'E se eu cancelar?',
    answer:
      'Você cancela quando quiser, do próprio painel. Sem fidelidade, sem multa, sem ligação de retenção.',
  },
]

export const closing = {
  label: 'DECISÃO',
  headline: 'VOCÊ PODE CONTINUAR NO ESCURO…',
  subheadline: 'Ou entrar agora na P3X e finalmente enxergar seu dinheiro com clareza.',
  checklist: [
    'Garantia de 7 dias',
    'R$597 no ano',
    'Acesso imediato'
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
