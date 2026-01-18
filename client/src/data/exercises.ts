/**
 * Exercícios práticos interativos com feedback automático
 */

export interface ExerciseOption {
  text: string;
  isCorrect: boolean;
}

export interface Exercise {
  id: string;
  moduleId: string;
  chapterId: string;
  title: string;
  description: string;
  type: 'scenario' | 'case_study' | 'practical_task';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  question: string;
  options: ExerciseOption[];
  explanation: string;
  hint?: string;
  timeLimit?: number; // em minutos
}

export const exercises: Exercise[] = [
  // Módulo 1 - Fundamentos
  {
    id: 'ex1_1',
    moduleId: 'module1',
    chapterId: 'chapter1_1',
    title: 'Identificar Marketing Digital',
    description: 'Teste seu conhecimento sobre o que é marketing digital',
    type: 'scenario',
    difficulty: 'beginner',
    question: 'Qual é a principal diferença entre marketing digital e marketing tradicional?',
    options: [
      {
        text: 'Marketing digital usa apenas redes sociais',
        isCorrect: false,
      },
      {
        text: 'Marketing digital é mensurável, direcionado e ocorre em canais online',
        isCorrect: true,
      },
      {
        text: 'Marketing digital é mais barato, mas menos eficaz',
        isCorrect: false,
      },
      {
        text: 'Não há diferença significativa',
        isCorrect: false,
      },
    ],
    explanation:
      'Marketing digital se diferencia por ser totalmente mensurável, permitir segmentação precisa de público e ocorrer em canais online como redes sociais, email, buscadores e websites.',
    hint: 'Pense nas características únicas do ambiente digital',
    timeLimit: 5,
  },
  {
    id: 'ex1_2',
    moduleId: 'module1',
    chapterId: 'chapter1_3',
    title: 'Conceitos Fundamentais',
    description: 'Valide seu entendimento sobre conceitos básicos',
    type: 'scenario',
    difficulty: 'beginner',
    question: 'O que é uma "persona" no contexto de marketing?',
    options: [
      {
        text: 'Um personagem fictício que representa seu cliente ideal',
        isCorrect: true,
      },
      {
        text: 'Um perfil falso em redes sociais',
        isCorrect: false,
      },
      {
        text: 'Uma estratégia de marketing enganosa',
        isCorrect: false,
      },
      {
        text: 'Um tipo de anúncio publicitário',
        isCorrect: false,
      },
    ],
    explanation:
      'Uma persona é uma representação semi-fictícia do seu cliente ideal, baseada em dados reais e pesquisa. Ajuda a direcionar melhor suas estratégias de marketing.',
    hint: 'Pense em como você define seu público-alvo',
    timeLimit: 5,
  },

  // Módulo 2 - Estratégias
  {
    id: 'ex2_1',
    moduleId: 'module2',
    chapterId: 'chapter2_1',
    title: 'Estratégia de Conteúdo',
    description: 'Escolha a melhor estratégia de conteúdo',
    type: 'case_study',
    difficulty: 'intermediate',
    question:
      'Você está iniciando um blog para uma agência de viagens. Qual estratégia de conteúdo é mais eficaz?',
    options: [
      {
        text: 'Publicar 10 posts por dia sobre destinos aleatórios',
        isCorrect: false,
      },
      {
        text: 'Criar conteúdo consistente, direcionado para sua persona, com SEO otimizado',
        isCorrect: true,
      },
      {
        text: 'Copiar conteúdo de concorrentes',
        isCorrect: false,
      },
      {
        text: 'Publicar apenas quando tiver tempo',
        isCorrect: false,
      },
    ],
    explanation:
      'Uma estratégia de conteúdo eficaz envolve consistência, relevância para sua persona, otimização SEO e planejamento. Qualidade supera quantidade.',
    hint: 'Pense em sustentabilidade e relevância',
    timeLimit: 7,
  },

  // Módulo 3 - Canais
  {
    id: 'ex3_1',
    moduleId: 'module3',
    chapterId: 'chapter3_1',
    title: 'Escolher o Canal Certo',
    description: 'Identifique qual canal é mais apropriado',
    type: 'scenario',
    difficulty: 'intermediate',
    question:
      'Seu produto é um software B2B complexo. Qual canal seria MENOS eficaz para marketing?',
    options: [
      {
        text: 'TikTok',
        isCorrect: true,
      },
      {
        text: 'LinkedIn',
        isCorrect: false,
      },
      {
        text: 'Email marketing',
        isCorrect: false,
      },
      {
        text: 'Webinars',
        isCorrect: false,
      },
    ],
    explanation:
      'TikTok é mais orientado para conteúdo de entretenimento e público jovem. Para software B2B, LinkedIn, email marketing e webinars são muito mais eficazes.',
    hint: 'Considere o público-alvo e o tipo de conteúdo de cada plataforma',
    timeLimit: 6,
  },

  // Módulo 4 - Ferramentas
  {
    id: 'ex4_1',
    moduleId: 'module4',
    chapterId: 'chapter4_1',
    title: 'Ferramentas de Análise',
    description: 'Escolha a ferramenta correta para análise',
    type: 'practical_task',
    difficulty: 'intermediate',
    question: 'Qual ferramenta é essencial para analisar o tráfego do seu website?',
    options: [
      {
        text: 'Google Analytics',
        isCorrect: true,
      },
      {
        text: 'Photoshop',
        isCorrect: false,
      },
      {
        text: 'Microsoft Word',
        isCorrect: false,
      },
      {
        text: 'Spotify',
        isCorrect: false,
      },
    ],
    explanation:
      'Google Analytics é a ferramenta padrão da indústria para rastrear e analisar o comportamento dos visitantes em seu website.',
    hint: 'Pense em ferramentas de análise web',
    timeLimit: 5,
  },

  // Módulo 5 - Avançado
  {
    id: 'ex5_1',
    moduleId: 'module5',
    chapterId: 'chapter5_1',
    title: 'Otimização Avançada',
    description: 'Teste conhecimento avançado de otimização',
    type: 'case_study',
    difficulty: 'advanced',
    question:
      'Sua taxa de conversão é 2%. Qual é o primeiro passo para otimizá-la?',
    options: [
      {
        text: 'Aumentar o orçamento de publicidade imediatamente',
        isCorrect: false,
      },
      {
        text: 'Analisar dados para identificar gargalos no funil de conversão',
        isCorrect: true,
      },
      {
        text: 'Mudar completamente o design do site',
        isCorrect: false,
      },
      {
        text: 'Copiar estratégia de um concorrente',
        isCorrect: false,
      },
    ],
    explanation:
      'Antes de qualquer ação, é crucial analisar dados para entender onde os usuários estão abandonando o funil. Isso permite otimizações baseadas em dados.',
    hint: 'Pense em data-driven decision making',
    timeLimit: 8,
  },

  // Módulo 6 - Monetização
  {
    id: 'ex6_1',
    moduleId: 'module6',
    chapterId: 'chapter6_1',
    title: 'Cálculo de ROI',
    description: 'Calcule o retorno sobre investimento',
    type: 'practical_task',
    difficulty: 'advanced',
    question:
      'Você investiu R$1000 em uma campanha e gerou R$5000 em vendas. Qual é o ROI?',
    options: [
      {
        text: '400%',
        isCorrect: true,
      },
      {
        text: '500%',
        isCorrect: false,
      },
      {
        text: '80%',
        isCorrect: false,
      },
      {
        text: '50%',
        isCorrect: false,
      },
    ],
    explanation:
      'ROI = ((Ganho - Investimento) / Investimento) × 100. Neste caso: ((5000 - 1000) / 1000) × 100 = 400%',
    hint: 'Use a fórmula: ((Ganho - Investimento) / Investimento) × 100',
    timeLimit: 5,
  },
];

/**
 * Obter exercícios por módulo
 */
export function getExercisesByModule(moduleId: string): Exercise[] {
  return exercises.filter((ex) => ex.moduleId === moduleId);
}

/**
 * Obter exercícios por capítulo
 */
export function getExercisesByChapter(
  moduleId: string,
  chapterId: string
): Exercise[] {
  return exercises.filter(
    (ex) => ex.moduleId === moduleId && ex.chapterId === chapterId
  );
}

/**
 * Obter exercício por ID
 */
export function getExerciseById(id: string): Exercise | undefined {
  return exercises.find((ex) => ex.id === id);
}
