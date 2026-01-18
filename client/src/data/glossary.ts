/**
 * Glossário interativo com termos técnicos e definições
 */

export interface GlossaryTerm {
  id: string;
  term: string;
  definition: string;
  moduleId?: string;
  category: 'fundamental' | 'strategy' | 'channel' | 'tool' | 'metric' | 'advanced';
  example?: string;
  relatedTerms?: string[]; // IDs de termos relacionados
}

export const glossaryTerms: GlossaryTerm[] = [
  // Fundamentais
  {
    id: 'term_1',
    term: 'Marketing Digital',
    definition:
      'Conjunto de estratégias e técnicas de marketing realizadas em canais digitais como internet, redes sociais, email e aplicativos móveis.',
    category: 'fundamental',
    moduleId: 'module1',
    example:
      'Uma campanha de email marketing ou um anúncio no Google Ads são exemplos de marketing digital.',
    relatedTerms: ['term_2', 'term_3'],
  },
  {
    id: 'term_2',
    term: 'Persona',
    definition:
      'Representação semi-fictícia do cliente ideal, baseada em dados reais, pesquisa e análise de comportamento.',
    category: 'fundamental',
    moduleId: 'module1',
    example:
      'Uma persona pode ser "Maria, 35 anos, gerente de projetos, busca ferramentas de produtividade".',
    relatedTerms: ['term_1', 'term_4'],
  },
  {
    id: 'term_3',
    term: 'Público-alvo',
    definition:
      'Grupo de pessoas para o qual uma empresa direciona seus esforços de marketing e vendas.',
    category: 'fundamental',
    moduleId: 'module1',
    example: 'O público-alvo de um software de design pode ser designers freelancers.',
    relatedTerms: ['term_2'],
  },
  {
    id: 'term_4',
    term: 'Segmentação',
    definition:
      'Divisão do público em grupos menores com características, comportamentos ou necessidades semelhantes.',
    category: 'fundamental',
    moduleId: 'module2',
    example:
      'Segmentar por idade, localização, interesse ou comportamento de compra.',
    relatedTerms: ['term_2', 'term_3'],
  },

  // Estratégia
  {
    id: 'term_5',
    term: 'Funil de Vendas',
    definition:
      'Representação visual das etapas que um cliente potencial passa, desde o conhecimento até a compra.',
    category: 'strategy',
    moduleId: 'module2',
    example:
      'Topo (Awareness) → Meio (Consideration) → Fundo (Decision/Compra).',
    relatedTerms: ['term_6', 'term_7'],
  },
  {
    id: 'term_6',
    term: 'Lead',
    definition:
      'Pessoa que demonstrou interesse em um produto ou serviço, fornecendo seus dados de contato.',
    category: 'strategy',
    moduleId: 'module2',
    example:
      'Alguém que preenche um formulário no seu website é considerado um lead.',
    relatedTerms: ['term_5', 'term_8'],
  },
  {
    id: 'term_7',
    term: 'Conversão',
    definition:
      'Ação desejada que um usuário realiza, como fazer uma compra, preencher formulário ou assinar newsletter.',
    category: 'strategy',
    moduleId: 'module2',
    example: 'Um usuário que compra um produto completou uma conversão.',
    relatedTerms: ['term_5', 'term_6'],
  },
  {
    id: 'term_8',
    term: 'Taxa de Conversão',
    definition:
      'Percentual de visitantes que completam uma ação desejada em relação ao total de visitantes.',
    category: 'metric',
    moduleId: 'module2',
    example: 'Se 100 pessoas visitam seu site e 5 compram, sua taxa de conversão é 5%.',
    relatedTerms: ['term_7', 'term_9'],
  },

  // Canais
  {
    id: 'term_9',
    term: 'SEO',
    definition:
      'Search Engine Optimization - Conjunto de técnicas para melhorar o posicionamento de um site nos resultados de busca.',
    category: 'channel',
    moduleId: 'module3',
    example:
      'Otimizar palavras-chave, criar conteúdo de qualidade e construir backlinks são técnicas de SEO.',
    relatedTerms: ['term_10', 'term_11'],
  },
  {
    id: 'term_10',
    term: 'SEM',
    definition:
      'Search Engine Marketing - Marketing em mecanismos de busca através de anúncios pagos.',
    category: 'channel',
    moduleId: 'module3',
    example: 'Google Ads é a plataforma mais popular para SEM.',
    relatedTerms: ['term_9', 'term_11'],
  },
  {
    id: 'term_11',
    term: 'Email Marketing',
    definition:
      'Estratégia de marketing que utiliza email para enviar mensagens promocionais ou informativas para uma lista de contatos.',
    category: 'channel',
    moduleId: 'module3',
    example:
      'Enviar newsletters semanais ou campanhas promocionais para sua lista de emails.',
    relatedTerms: ['term_9', 'term_12'],
  },
  {
    id: 'term_12',
    term: 'Redes Sociais',
    definition:
      'Plataformas online onde usuários se conectam e compartilham conteúdo, usadas para marketing e engajamento.',
    category: 'channel',
    moduleId: 'module3',
    example: 'Facebook, Instagram, LinkedIn, TikTok e Twitter são redes sociais populares.',
    relatedTerms: ['term_11', 'term_13'],
  },
  {
    id: 'term_13',
    term: 'Influenciador Digital',
    definition:
      'Pessoa com grande número de seguidores em redes sociais que pode influenciar decisões de compra.',
    category: 'channel',
    moduleId: 'module3',
    example:
      'Um influenciador com 100k seguidores pode promover produtos para sua audiência.',
    relatedTerms: ['term_12'],
  },

  // Ferramentas e Métricas
  {
    id: 'term_14',
    term: 'Google Analytics',
    definition:
      'Ferramenta gratuita do Google que rastreia e analisa o tráfego e comportamento dos visitantes em um website.',
    category: 'tool',
    moduleId: 'module4',
    example:
      'Usar Google Analytics para ver quantas pessoas visitaram seu site e quanto tempo ficaram.',
    relatedTerms: ['term_15', 'term_16'],
  },
  {
    id: 'term_15',
    term: 'CRM',
    definition:
      'Customer Relationship Management - Sistema para gerenciar relacionamento com clientes e leads.',
    category: 'tool',
    moduleId: 'module4',
    example: 'Ferramentas como Salesforce ou HubSpot são CRMs populares.',
    relatedTerms: ['term_14', 'term_6'],
  },
  {
    id: 'term_16',
    term: 'Automação de Marketing',
    definition:
      'Uso de software para automatizar tarefas repetitivas de marketing como envio de emails e segmentação.',
    category: 'tool',
    moduleId: 'module4',
    example:
      'Enviar automaticamente um email de boas-vindas quando alguém se inscreve na newsletter.',
    relatedTerms: ['term_15', 'term_11'],
  },

  // Métricas Avançadas
  {
    id: 'term_17',
    term: 'ROI',
    definition:
      'Return on Investment - Medida de retorno financeiro obtido em relação ao investimento realizado.',
    category: 'metric',
    moduleId: 'module5',
    example:
      'Se investiu R$1000 e ganhou R$5000, seu ROI é 400%.',
    relatedTerms: ['term_18', 'term_19'],
  },
  {
    id: 'term_18',
    term: 'CAC',
    definition:
      'Customer Acquisition Cost - Custo médio para adquirir um novo cliente.',
    category: 'metric',
    moduleId: 'module5',
    example:
      'Se gastou R$1000 em marketing e adquiriu 10 clientes, seu CAC é R$100.',
    relatedTerms: ['term_17', 'term_20'],
  },
  {
    id: 'term_19',
    term: 'LTV',
    definition:
      'Lifetime Value - Valor total que um cliente gera para a empresa ao longo de seu relacionamento.',
    category: 'metric',
    moduleId: 'module5',
    example:
      'Se um cliente gasta R$50/mês e fica 2 anos, seu LTV é R$1200.',
    relatedTerms: ['term_17', 'term_18'],
  },
  {
    id: 'term_20',
    term: 'Engajamento',
    definition:
      'Nível de interação e interesse que o público demonstra com seu conteúdo ou marca.',
    category: 'metric',
    moduleId: 'module5',
    example:
      'Curtidas, comentários, compartilhamentos e cliques são métricas de engajamento.',
    relatedTerms: ['term_12', 'term_21'],
  },
  {
    id: 'term_21',
    term: 'Impressão',
    definition:
      'Número de vezes que um anúncio ou conteúdo é exibido para usuários.',
    category: 'metric',
    moduleId: 'module5',
    example:
      'Se seu anúncio foi mostrado 10000 vezes, você teve 10000 impressões.',
    relatedTerms: ['term_20'],
  },

  // Avançado
  {
    id: 'term_22',
    term: 'Growth Hacking',
    definition:
      'Estratégia focada em crescimento rápido usando criatividade, análise de dados e técnicas não convencionais.',
    category: 'advanced',
    moduleId: 'module5',
    example:
      'Usar referral programs ou viral loops para crescimento exponencial.',
    relatedTerms: ['term_17', 'term_23'],
  },
  {
    id: 'term_23',
    term: 'A/B Testing',
    definition:
      'Teste comparativo entre duas versões de uma página, email ou anúncio para determinar qual performa melhor.',
    category: 'advanced',
    moduleId: 'module5',
    example:
      'Testar dois botões diferentes para ver qual gera mais cliques.',
    relatedTerms: ['term_22', 'term_24'],
  },
  {
    id: 'term_24',
    term: 'Retargeting',
    definition:
      'Técnica de mostrar anúncios para pessoas que já visitaram seu site mas não converteram.',
    category: 'advanced',
    moduleId: 'module5',
    example:
      'Mostrar anúncio de um produto que o usuário visualizou mas não comprou.',
    relatedTerms: ['term_23', 'term_10'],
  },
  {
    id: 'term_25',
    term: 'Monetização',
    definition:
      'Processo de gerar receita a partir de um produto, serviço ou conteúdo.',
    category: 'advanced',
    moduleId: 'module6',
    example:
      'Vender produtos, oferecer serviços premium ou exibir anúncios são formas de monetização.',
    relatedTerms: ['term_17', 'term_19'],
  },
];

/**
 * Buscar termos por palavra-chave
 */
export function searchGlossary(keyword: string): GlossaryTerm[] {
  const lowerKeyword = keyword.toLowerCase();
  return glossaryTerms.filter(
    (term) =>
      term.term.toLowerCase().includes(lowerKeyword) ||
      term.definition.toLowerCase().includes(lowerKeyword)
  );
}

/**
 * Obter termos por categoria
 */
export function getTermsByCategory(
  category: GlossaryTerm['category']
): GlossaryTerm[] {
  return glossaryTerms.filter((term) => term.category === category);
}

/**
 * Obter termos por módulo
 */
export function getTermsByModule(moduleId: string): GlossaryTerm[] {
  return glossaryTerms.filter((term) => term.moduleId === moduleId);
}

/**
 * Obter termos relacionados
 */
export function getRelatedTerms(termId: string): GlossaryTerm[] {
  const term = glossaryTerms.find((t) => t.id === termId);
  if (!term || !term.relatedTerms) return [];
  return glossaryTerms.filter((t) => term.relatedTerms?.includes(t.id));
}

/**
 * Obter termo por ID
 */
export function getTermById(id: string): GlossaryTerm | undefined {
  return glossaryTerms.find((term) => term.id === id);
}
