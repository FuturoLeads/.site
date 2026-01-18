/**
 * Estrutura de aprendizado com pré-requisitos e caminhos recomendados
 */

export interface LearningModule {
  id: string;
  name: string;
  description: string;
  order: number;
  prerequisites: string[]; // IDs dos módulos que devem ser completados antes
  estimatedHours: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export const learningStructure: LearningModule[] = [
  {
    id: 'module1',
    name: 'Fundamentos do Marketing Digital',
    description: 'Conceitos básicos e essenciais para começar',
    order: 1,
    prerequisites: [],
    estimatedHours: 4,
    difficulty: 'beginner',
  },
  {
    id: 'module2',
    name: 'Estratégias de Marketing Digital',
    description: 'Estratégias comprovadas e eficazes',
    order: 2,
    prerequisites: ['module1'],
    estimatedHours: 5,
    difficulty: 'beginner',
  },
  {
    id: 'module3',
    name: 'Canais de Marketing Digital',
    description: 'Explore os principais canais disponíveis',
    order: 3,
    prerequisites: ['module1', 'module2'],
    estimatedHours: 6,
    difficulty: 'intermediate',
  },
  {
    id: 'module4',
    name: 'Ferramentas e Plataformas',
    description: 'Domine as ferramentas essenciais',
    order: 4,
    prerequisites: ['module2'],
    estimatedHours: 5,
    difficulty: 'intermediate',
  },
  {
    id: 'module5',
    name: 'Marketing Avançado',
    description: 'Técnicas avançadas e otimizações',
    order: 5,
    prerequisites: ['module2', 'module3', 'module4'],
    estimatedHours: 7,
    difficulty: 'advanced',
  },
  {
    id: 'module6',
    name: 'Monetização e ROI',
    description: 'Transforme conhecimento em lucro',
    order: 6,
    prerequisites: ['module5'],
    estimatedHours: 4,
    difficulty: 'advanced',
  },
  {
    id: 'module6extra',
    name: 'Passo a Passo Prático',
    description: 'Guia prático e aplicável',
    order: 7,
    prerequisites: ['module1'],
    estimatedHours: 3,
    difficulty: 'beginner',
  },
];

/**
 * Caminhos de aprendizado recomendados baseados em objetivos
 */
export interface LearningPath {
  id: string;
  name: string;
  description: string;
  targetAudience: string;
  modules: string[]; // IDs dos módulos em ordem
  estimatedWeeks: number;
}

export const recommendedPaths: LearningPath[] = [
  {
    id: 'path_beginner',
    name: 'Iniciante Completo',
    description: 'Caminho ideal para quem está começando do zero',
    targetAudience: 'Iniciantes',
    modules: ['module1', 'module6extra', 'module2', 'module3', 'module4'],
    estimatedWeeks: 4,
  },
  {
    id: 'path_intermediate',
    name: 'Profissional Intermediário',
    description: 'Para quem já tem experiência básica',
    targetAudience: 'Intermediários',
    modules: ['module2', 'module3', 'module4', 'module5', 'module6'],
    estimatedWeeks: 5,
  },
  {
    id: 'path_advanced',
    name: 'Especialista Avançado',
    description: 'Domine todas as técnicas e estratégias',
    targetAudience: 'Avançados',
    modules: ['module1', 'module2', 'module3', 'module4', 'module5', 'module6'],
    estimatedWeeks: 6,
  },
  {
    id: 'path_entrepreneur',
    name: 'Empreendedor Digital',
    description: 'Foco em monetização e ROI',
    targetAudience: 'Empreendedores',
    modules: ['module1', 'module2', 'module4', 'module5', 'module6'],
    estimatedWeeks: 5,
  },
];

/**
 * Verificar se um módulo pode ser acessado baseado em pré-requisitos
 */
export function canAccessModule(
  moduleId: string,
  completedModules: string[]
): boolean {
  const module = learningStructure.find((m) => m.id === moduleId);
  if (!module) return false;
  if (module.prerequisites.length === 0) return true;
  return module.prerequisites.every((prereq) => completedModules.includes(prereq));
}

/**
 * Calcular progresso geral do usuário
 */
export function calculateOverallProgress(completedModules: string[]): number {
  if (learningStructure.length === 0) return 0;
  return Math.round((completedModules.length / learningStructure.length) * 100);
}

/**
 * Obter próximos módulos recomendados
 */
export function getRecommendedNextModules(
  completedModules: string[],
  limit: number = 3
): LearningModule[] {
  return learningStructure
    .filter((module) => !completedModules.includes(module.id))
    .filter((module) => canAccessModule(module.id, completedModules))
    .sort((a, b) => a.order - b.order)
    .slice(0, limit);
}
