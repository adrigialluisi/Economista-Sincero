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
  tagline: 'Onde informação vira decisão e decisão vira renda',
  domain: 'comunidadep3x.com.br',
  checkoutUrl: 'https://comunidadep3x.com.br/checkout',
  priceList: 'R$ 997,00',
  priceCurrent: 'R$ 597,00',
  priceMonthly: 'R$ 49,75',
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
    '4x Melhor Influenciador ANBIMA',
    'Best-seller em 3 idiomas',
    '2x Top 03 IBEST',
  ],
  photos: {
    hero: '/Economista-Sincero/images/charles-hero.jpg',
    authority: '/Economista-Sincero/images/charles-authority.jpg',
    closing: '/Economista-Sincero/images/charles-hero.jpg',
  },
}

export const nav = {
  logoTop: '/Economista-Sincero/images/logo-positivo.png',
  logoScrolled: '/Economista-Sincero/images/__positivo-icon.png',
  ctaText: 'Começar agora',
}

export const hero = {
  tag: 'Plataforma de Investimentos',
  headline: 'Você não tem um problema de dinheiro. Você tem um problema de visão.',
  subheadline: 'Para quem cansou de não saber, no domingo à noite, quanto realmente tem investido.',
  context:
    'A P3X conecta sua conta da B3, organiza tudo o que você já tem e mostra o que fazer com o que falta. É a primeira plataforma brasileira que entrega a coisa mais cara do mundo dos investimentos: clareza.',
  ctaText: 'QUERO VER MEU DINHEIRO COM CLAREZA',
  ctaMicrocopy:
    'Acesso imediato. Garantia de 7 dias. Seus ativos continuam na sua corretora.',
}

export const pain = {
  headline: 'Deixa eu adivinhar como é o seu domingo à noite.',
  narrative:
    'Você abre o app da corretora. Olha o saldo. Fecha. Lembra que tem dinheiro em outra corretora também. Pensa em fazer um aporte, mas não sabe se compra mais do que já tem ou se diversifica. Pensa em rebalancear, mas não sabe quanto cada coisa pesa hoje. Fecha tudo. Vai dormir com aquela sensação meio surda de quem está fazendo alguma coisa, mas não sabe direito o quê.',
  transition:
    'Não é falta de inteligência. Não é falta de dinheiro. É falta de um lugar onde tudo faça sentido junto.',
  closing:
    'E enquanto você troca entre sete abas para responder uma pergunta simples — "quanto eu tenho, onde está, e o que eu faço amanhã?" — o seu dinheiro fica parado, mal alocado, ou decidido no impulso.',
}

export const solution = {
  label: 'O ecossistema completo do investidor brasileiro.',
  headline: 'Não é APENAS uma comunidade. Não é mais um curso. Não é mais um agregador.',
  description:
    'É a melhor plataforma brasileira que junta, num só ambiente, as quatro coisas que um investidor sério precisa pra parar de operar no escuro:',
  closing:
    'E acima de tudo, com o olhar e o método do Charlão. Sem enrolação e sem promessa milagrosa.',
  pillars: [
    {
      title: 'Consolidador integrado à B3',
      description:
        'Conecta uma vez, vê tudo: ações, FIIs, renda fixa, BDRs. Patrimônio, alocação, dividendos. Sem digitar nada. Sem custódia — seus ativos continuam na sua corretora.',
    },
    {
      title: 'Carteiras recomendadas — Brasil e Exterior',
      description:
        'Estruturadas e atualizadas continuamente, com a tese por trás de cada movimento. Você para de adivinhar.',
    },
    {
      title: 'Cursos e conteúdos',
      description:
        'Do iniciante ao avançado, mercado nacional e internacional. Conteúdo vivo, atualizado com o cenário.',
    },
    {
      title: 'Comunidade ativa',
      description:
        'Milhares de investidores trocando tese, validando decisão. Sem ruído, em um ambiente exclusivo e seguro.',
    },
  ],
}

export const moment = {
  headline: 'Tem um momento, dentro da P3X, que muda alguma coisa em quem entra.',
  narrative:
    'É quando você conecta sua conta da B3 pela primeira vez.\n\nLeva trinta segundos. A tela carrega. E aí, de repente, está tudo ali. Cada ação que você esqueceu. Cada FII que acumulou. Cada centavo de dividendo que pingou. Quanto você tem, onde está, como cresceu.\n\nPela primeira vez você olha para a tela e pensa:',
  quote: '"Caralh#, é isso que eu tenho."',
  closing:
    'Não é mágica. É só o seu dinheiro, finalmente visível. E é a partir daí que toda decisão fica mais fácil.',
}

export const socialProof = {
  testimonials: [
    {
      text: '[Depoimento — idealmente alguém que dramatize o antes/depois. Ex: descobriu concentração que não sabia que tinha, parou de operar no escuro, etc.]',
      name: '[Nome]',
      role: '[Profissão / Cidade]',
    },
    {
      text: '[Depoimento — foco em alguém que era iniciante e ganhou autonomia.]',
      name: '[Nome]',
      role: '[Profissão / Cidade]',
    },
    {
      text: '[Depoimento — foco em alguém com patrimônio relevante que ganhou em organização/eficiência.]',
      name: '[Nome]',
      role: '[Profissão / Cidade]',
    },
  ],
  stats: [
    { value: '[X] mil', label: 'investidores ativos' },
    { value: 'R$ [X] milhões', label: 'em patrimônio acompanhado' },
    { value: '[X]', label: 'carteiras recomendadas atualizadas' },
  ],
}

export const offer = {
  headline: 'Quanto custa parar de operar no escuro?',
  anchorText:
    'Antes do número, faz uma conta. Quanto você perdeu no último ano por não ter clareza? Aporte parado em conta corrente. Posição que caiu por inércia. Imposto pago a mais. Provavelmente esse número passou de R$ 597 só nos últimos doze meses.',
  priceList: 'R$ 997,00',
  priceCurrent: 'R$ 597,00',
  priceMonthly: 'R$ 49,75',
  pricePeriod: 'ano',
  priceNote: 'Acesso completo ao ecossistema, atualizado o ano inteiro.',
  priceComparison: 'Menos do que você gasta em delivery num mês comum.',
  ctaText: 'COMEÇAR AGORA — R$ 597/ANO',
}

export const guarantee = {
  days: 7,
  text: 'Entra. Conecta a B3. Mexe na plataforma. Se em até 7 dias você achar que não é para você, por qualquer motivo, inclusive nenhum — manda um e-mail e a gente devolve 100%. Sem pergunta, sem retenção. O risco é nosso.',
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
  headline: 'Você tem dois caminhos a partir daqui.',
  pathA:
    'Um é fechar essa página, voltar para o app da corretora, abrir a planilha que você não atualiza desde julho, e seguir tomando decisão financeira baseada em pedaço de informação.',
  pathB:
    'O outro é entrar na P3X agora, conectar sua conta da B3 nos próximos cinco minutos, e finalmente ver com clareza o que está acontecendo com o seu dinheiro.',
  summary: 'Sete dias de garantia. R$ 597 no ano. Acesso imediato.',
  ctaText: 'ENTRAR NA P3X AGORA',
}

export const footer = {
  logo: '/Economista-Sincero/images/__positivo-icon.png',
  links: [
    { label: 'Termos de Uso', href: '#' },
    { label: 'Política de Privacidade', href: '#' },
    { label: 'Contato', href: '#' },
  ],
  copyright: `© ${new Date().getFullYear()} P3X. Todos os direitos reservados.`,
}
