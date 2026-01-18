export interface StepDetail {
  id: string;
  title: string;
  description: string;
  steps: {
    number: number;
    title: string;
    details: string[];
    tips: string[];
  }[];
  resources: string[];
  timeEstimate: string;
}

export const stepByStepGuides: StepDetail[] = [
  {
    id: 'step-1-1',
    title: 'Como Definir o que é Marketing Digital para Seu Negócio',
    description: 'Guia completo para entender e definir marketing digital no contexto do seu negócio específico.',
    steps: [
      {
        number: 1,
        title: 'Analise Seu Negócio Atual',
        details: [
          'Identifique seus produtos/serviços principais',
          'Defina seu público-alvo ideal',
          'Liste seus principais concorrentes',
          'Avalie sua presença digital atual',
        ],
        tips: [
          'Use ferramentas como Google Trends para entender demanda',
          'Pesquise seus concorrentes no LinkedIn e redes sociais',
          'Faça uma auditoria do seu site atual',
        ],
      },
      {
        number: 2,
        title: 'Defina Seus Objetivos de Marketing',
        details: [
          'Aumentar awareness (conhecimento da marca)',
          'Gerar leads qualificados',
          'Aumentar vendas diretas',
          'Melhorar retenção de clientes',
        ],
        tips: [
          'Use a metodologia SMART para definir objetivos',
          'Estabeleça KPIs mensuráveis',
          'Crie metas realistas e alcançáveis',
        ],
      },
      {
        number: 3,
        title: 'Escolha Seus Canais Digitais',
        details: [
          'Redes Sociais (Instagram, Facebook, LinkedIn, TikTok)',
          'Email Marketing',
          'Google Ads e SEO',
          'Content Marketing (Blog, YouTube)',
          'WhatsApp Business',
        ],
        tips: [
          'Foque nos canais onde seu público está',
          'Comece com 2-3 canais e domine-os',
          'Teste e meça resultados em cada canal',
        ],
      },
      {
        number: 4,
        title: 'Crie Seu Plano de Ação',
        details: [
          'Defina responsáveis por cada canal',
          'Estabeleça frequência de postagens',
          'Crie calendário de conteúdo',
          'Defina orçamento mensal',
        ],
        tips: [
          'Use ferramentas como Asana ou Monday.com',
          'Documente tudo em um arquivo compartilhado',
          'Revise e ajuste o plano mensalmente',
        ],
      },
    ],
    resources: [
      'Google Analytics para rastreamento',
      'Buffer ou Later para agendamento de posts',
      'Mailchimp para email marketing',
      'Google Ads para publicidade paga',
    ],
    timeEstimate: '2-3 horas',
  },
  {
    id: 'step-1-2',
    title: 'Como Identificar Seus Canais Digitais Principais',
    description: 'Aprenda a escolher os melhores canais digitais para seu negócio.',
    steps: [
      {
        number: 1,
        title: 'Pesquise Onde Seu Público Está',
        details: [
          'Faça pesquisa de mercado com seu público-alvo',
          'Analise seus concorrentes em cada rede social',
          'Verifique estatísticas de uso por faixa etária',
          'Considere o tipo de conteúdo em cada plataforma',
        ],
        tips: [
          'Use Google Trends para ver tendências',
          'Crie uma planilha comparativa de redes sociais',
          'Teste com anúncios pequenos em diferentes plataformas',
        ],
      },
      {
        number: 2,
        title: 'Avalie Cada Canal',
        details: [
          'Instagram: Visual, stories, reels (público jovem)',
          'Facebook: Comunidades, grupos, anúncios segmentados',
          'LinkedIn: B2B, networking profissional',
          'TikTok: Conteúdo viral, público Gen Z',
          'YouTube: Vídeos longos, tutoriais, vlogs',
        ],
        tips: [
          'Comece com 2-3 canais principais',
          'Não tente estar em todos os lugares',
          'Qualidade > Quantidade',
        ],
      },
      {
        number: 3,
        title: 'Defina Sua Estratégia por Canal',
        details: [
          'Tipo de conteúdo que vai postar',
          'Frequência de postagens',
          'Horários ideais para publicar',
          'Métricas que vai acompanhar',
        ],
        tips: [
          'Use ferramentas de análise nativa de cada rede',
          'Teste diferentes horários e formatos',
          'Acompanhe métricas semanalmente',
        ],
      },
    ],
    resources: [
      'Hootsuite para gerenciar múltiplas redes',
      'Meta Business Suite para Facebook/Instagram',
      'LinkedIn Analytics',
      'TikTok Creator Fund',
    ],
    timeEstimate: '1-2 horas',
  },
  {
    id: 'step-1-3',
    title: 'Como Estabelecer Seus Primeiros KPIs',
    description: 'Defina métricas claras para medir o sucesso de suas campanhas de marketing digital.',
    steps: [
      {
        number: 1,
        title: 'Entenda os Principais KPIs',
        details: [
          'Alcance: Quantas pessoas viram seu conteúdo',
          'Engajamento: Curtidas, comentários, compartilhamentos',
          'Cliques: Quantas pessoas clicaram em seus links',
          'Conversões: Quantas pessoas realizaram ação desejada',
          'ROI: Retorno sobre investimento em publicidade',
        ],
        tips: [
          'Nem todos os KPIs são relevantes para seu negócio',
          'Foque nos KPIs que impactam suas vendas',
          'Acompanhe consistentemente',
        ],
      },
      {
        number: 2,
        title: 'Defina Suas Metas',
        details: [
          'Meta de alcance mensal',
          'Meta de engajamento (taxa de engajamento %)',
          'Meta de leads gerados',
          'Meta de vendas/conversões',
          'Meta de ROI em publicidade',
        ],
        tips: [
          'Use dados históricos como base',
          'Seja realista mas ambicioso',
          'Revise metas trimestralmente',
        ],
      },
      {
        number: 3,
        title: 'Configure Rastreamento',
        details: [
          'Instale Google Analytics no seu site',
          'Configure Facebook Pixel',
          'Crie UTM parameters para links',
          'Configure conversões no Google Ads',
          'Crie dashboard de acompanhamento',
        ],
        tips: [
          'Use Google Data Studio para visualizar dados',
          'Crie relatórios automáticos semanais',
          'Compartilhe resultados com sua equipe',
        ],
      },
    ],
    resources: [
      'Google Analytics',
      'Facebook Pixel',
      'Google Data Studio',
      'Hotjar para rastreamento de comportamento',
    ],
    timeEstimate: '2-3 horas',
  },
];
