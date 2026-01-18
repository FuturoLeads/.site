export interface QuizQuestion {
  id: string;
  question: string;
  options: {
    text: string;
    correct: boolean;
  }[];
  explanation: string;
}

export interface ModuleQuiz {
  moduleId: string;
  moduleName: string;
  questions: QuizQuestion[];
}

export const moduleQuizzes: ModuleQuiz[] = [
  {
    moduleId: 'module1',
    moduleName: 'MÓDULO 1 - FUNDAMENTOS DO MARKETING DIGITAL',
    questions: [
      {
        id: '1-1',
        question: 'O que diferencia o Marketing Digital do Marketing Tradicional?',
        options: [
          {
            text: 'Marketing Digital é mais caro e menos eficaz',
            correct: false,
          },
          {
            text: 'Marketing Digital permite segmentação, mensurabilidade e ajustes em tempo real',
            correct: true,
          },
          {
            text: 'Marketing Digital só funciona para grandes empresas',
            correct: false,
          },
          {
            text: 'Marketing Digital não permite interação com o público',
            correct: false,
          },
        ],
        explanation:
          'Marketing Digital se destaca pela capacidade de segmentar o público, acompanhar resultados em tempo real e fazer ajustes rápidos nas estratégias.',
      },
      {
        id: '1-2',
        question: 'Qual é a principal vantagem de usar múltiplos canais digitais?',
        options: [
          {
            text: 'Aumentar custos de marketing',
            correct: false,
          },
          {
            text: 'Alcançar o cliente em múltiplos pontos de contato (omnichannel)',
            correct: true,
          },
          {
            text: 'Complicar a gestão de campanhas',
            correct: false,
          },
          {
            text: 'Reduzir o alcance do público',
            correct: false,
          },
        ],
        explanation:
          'Uma estratégia omnichannel permite alcançar seus clientes em vários pontos de contato, aumentando as chances de conversão e fidelização.',
      },
      {
        id: '1-3',
        question: 'Qual ferramenta é usada para acompanhar resultados em tempo real?',
        options: [
          {
            text: 'Google Analytics e Facebook Pixel',
            correct: true,
          },
          {
            text: 'Apenas redes sociais',
            correct: false,
          },
          {
            text: 'Somente email marketing',
            correct: false,
          },
          {
            text: 'Nenhuma ferramenta é necessária',
            correct: false,
          },
        ],
        explanation:
          'Google Analytics, Facebook Pixel e outras plataformas de tracking permitem acompanhar cada ação e resultado em tempo real.',
      },
      {
        id: '1-4',
        question: 'Qual é o crescimento de empresas com estratégia digital comparado a concorrentes offline?',
        options: [
          {
            text: 'Crescem 10% mais rápido',
            correct: false,
          },
          {
            text: 'Crescem 2-3x mais rápido',
            correct: true,
          },
          {
            text: 'Não há diferença significativa',
            correct: false,
          },
          {
            text: 'Crescem mais lentamente',
            correct: false,
          },
        ],
        explanation:
          'Dados mostram que empresas com estratégia digital crescem 2-3x mais rápido que concorrentes que não utilizam canais digitais.',
      },
    ],
  },
  {
    moduleId: 'module2',
    moduleName: 'MÓDULO 2 - COMO CRIAR E VENDER PRODUTOS DIGITAIS',
    questions: [
      {
        id: '2-1',
        question: 'Qual é o primeiro passo para criar um produto digital?',
        options: [
          {
            text: 'Validar a ideia com o público-alvo',
            correct: true,
          },
          {
            text: 'Começar a produzir imediatamente',
            correct: false,
          },
          {
            text: 'Investir em publicidade',
            correct: false,
          },
          {
            text: 'Criar uma página de vendas',
            correct: false,
          },
        ],
        explanation:
          'Validar a ideia com seu público-alvo é crucial para garantir que existe demanda real pelo seu produto.',
      },
      {
        id: '2-2',
        question: 'Qual é a importância do copywriting em uma página de vendas?',
        options: [
          {
            text: 'Não tem importância',
            correct: false,
          },
          {
            text: 'Influencia diretamente na taxa de conversão',
            correct: true,
          },
          {
            text: 'Apenas para decoração',
            correct: false,
          },
          {
            text: 'Só funciona em redes sociais',
            correct: false,
          },
        ],
        explanation:
          'O copywriting bem feito é essencial para persuadir o visitante a comprar, influenciando diretamente na taxa de conversão.',
      },
      {
        id: '2-3',
        question: 'Qual plataforma é mais adequada para hospedar um curso online?',
        options: [
          {
            text: 'Hotmart, Kiwify ou Teachable',
            correct: true,
          },
          {
            text: 'Apenas Google Drive',
            correct: false,
          },
          {
            text: 'Somente email',
            correct: false,
          },
          {
            text: 'Nenhuma plataforma é necessária',
            correct: false,
          },
        ],
        explanation:
          'Plataformas como Hotmart, Kiwify e Teachable são especializadas em hospedagem e venda de cursos digitais.',
      },
      {
        id: '2-4',
        question: 'O que é um programa de afiliados?',
        options: [
          {
            text: 'Um programa onde outras pessoas vendem seu produto e ganham comissão',
            correct: true,
          },
          {
            text: 'Um tipo de publicidade paga',
            correct: false,
          },
          {
            text: 'Uma rede social',
            correct: false,
          },
          {
            text: 'Um método de email marketing',
            correct: false,
          },
        ],
        explanation:
          'Um programa de afiliados permite que outras pessoas vendam seu produto em troca de uma comissão por venda realizada.',
      },
    ],
  },
  {
    moduleId: 'module3',
    moduleName: 'MÓDULO 3 - TRÁFEGO PAGO DO ZERO AO AVANÇADO',
    questions: [
      {
        id: '3-1',
        question: 'Qual é a principal vantagem do tráfego pago?',
        options: [
          {
            text: 'Resultados imediatos e mensuráveis',
            correct: true,
          },
          {
            text: 'É mais barato que tráfego orgânico',
            correct: false,
          },
          {
            text: 'Não requer otimização',
            correct: false,
          },
          {
            text: 'Funciona sem estratégia',
            correct: false,
          },
        ],
        explanation:
          'Tráfego pago oferece resultados imediatos e é altamente mensurável, permitindo otimizações rápidas.',
      },
      {
        id: '3-2',
        question: 'Qual é a diferença entre Facebook Ads e Google Ads?',
        options: [
          {
            text: 'Facebook Ads é baseado em interesse, Google Ads em intenção de busca',
            correct: true,
          },
          {
            text: 'Não há diferença',
            correct: false,
          },
          {
            text: 'Google Ads é apenas para blogs',
            correct: false,
          },
          {
            text: 'Facebook Ads é mais caro',
            correct: false,
          },
        ],
        explanation:
          'Facebook Ads segmenta por interesse e comportamento, enquanto Google Ads segmenta por intenção de busca do usuário.',
      },
      {
        id: '3-3',
        question: 'O que é remarketing/retargeting?',
        options: [
          {
            text: 'Mostrar anúncios para pessoas que já visitaram seu site',
            correct: true,
          },
          {
            text: 'Criar novos produtos',
            correct: false,
          },
          {
            text: 'Enviar emails em massa',
            correct: false,
          },
          {
            text: 'Publicar em redes sociais',
            correct: false,
          },
        ],
        explanation:
          'Remarketing/retargeting mostra anúncios para pessoas que já visitaram seu site, aumentando chances de conversão.',
      },
      {
        id: '3-4',
        question: 'Qual métrica é mais importante para avaliar uma campanha de tráfego pago?',
        options: [
          {
            text: 'ROI (Retorno sobre Investimento)',
            correct: true,
          },
          {
            text: 'Apenas número de cliques',
            correct: false,
          },
          {
            text: 'Apenas impressões',
            correct: false,
          },
          {
            text: 'Nenhuma métrica é importante',
            correct: false,
          },
        ],
        explanation:
          'ROI é a métrica mais importante pois mostra quanto você ganhou em relação ao que investiu em publicidade.',
      },
    ],
  },
];
