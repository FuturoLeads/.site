import { useState } from 'react';
import { ChevronRight, Lock, CheckCircle2, Circle, Rocket, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';
import {
  learningStructure,
  canAccessModule,
  getRecommendedNextModules,
  calculateOverallProgress,
} from '@/data/learningStructure';

interface LearningMapProps {
  completedModules: string[];
  onSelectModule: (moduleId: string) => void;
}

export function LearningMap({ completedModules, onSelectModule }: LearningMapProps) {
  const [expandedModule, setExpandedModule] = useState<string | null>(null);
  const [, setLocation] = useLocation();
  const overallProgress = calculateOverallProgress(completedModules);
  const recommendedModules = getRecommendedNextModules(completedModules, 3);

  // Encontrar o módulo correspondente no data/modules.ts
  const handleStartModule = (moduleId: string) => {
    onSelectModule(moduleId);
    // Navegar para a página Home e selecionar o módulo
    // Isso será feito via callback do componente pai
  };

  return (
    <div className="space-y-6">
      {/* Progresso Geral */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Seu Progresso Geral
          </h3>
          <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {overallProgress}%
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full transition-all duration-500"
            style={{ width: `${overallProgress}%` }}
          />
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
          {completedModules.length} de {learningStructure.length} módulos completados
        </p>
      </div>

      {/* Módulos Recomendados */}
      {recommendedModules.length > 0 && (
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950 rounded-lg p-6 border border-amber-200 dark:border-amber-800 shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Rocket className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            ⭐ Próximos Passos Recomendados
          </h3>
          <div className="space-y-3">
            {recommendedModules.map((module) => (
              <button
                key={module.id}
                onClick={() => handleStartModule(module.id)}
                className="w-full text-left p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md hover:scale-105 transition-all border-2 border-amber-200 dark:border-amber-800 hover:border-amber-400 dark:hover:border-amber-600"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-base">
                      {module.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      ⏱️ {module.estimatedHours}h • Nível: {module.difficulty}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-orange-600 dark:text-orange-400 animate-pulse" />
                    <ChevronRight className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Mapa Completo de Módulos */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Mapa de Aprendizado Completo
        </h3>
        <div className="space-y-2">
          {learningStructure.map((module, index) => {
            const isCompleted = completedModules.includes(module.id);
            const canAccess = canAccessModule(module.id, completedModules);
            const isLocked = !canAccess && !isCompleted;
            const isExpanded = expandedModule === module.id;

            return (
              <div
                key={module.id}
                className={`rounded-lg border transition-all ${
                  isCompleted
                    ? 'bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800'
                    : isLocked
                      ? 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700'
                      : 'bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800'
                }`}
              >
                <button
                  onClick={() =>
                    setExpandedModule(isExpanded ? null : module.id)
                  }
                  disabled={isLocked}
                  className={`w-full p-4 flex items-center justify-between ${
                    isLocked ? 'cursor-not-allowed opacity-60' : 'hover:bg-opacity-75'
                  } transition-colors`}
                >
                  <div className="flex items-center gap-3 flex-1">
                    {isCompleted ? (
                      <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0" />
                    ) : isLocked ? (
                      <Lock className="w-6 h-6 text-gray-400 dark:text-gray-500 flex-shrink-0" />
                    ) : (
                      <Circle className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                    )}
                    <div className="text-left">
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {module.name}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        ⏱️ {module.estimatedHours}h • {module.difficulty}
                        {module.prerequisites.length > 0 && (
                          <span className="ml-2">
                            • Requer {module.prerequisites.length} módulo(s)
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                  {!isLocked && (
                    <ChevronRight
                      className={`w-5 h-5 transition-transform ${
                        isExpanded ? 'rotate-90' : ''
                      }`}
                    />
                  )}
                </button>

                {/* Pré-requisitos */}
                {isExpanded && module.prerequisites.length > 0 && (
                  <div className="px-4 pb-3 border-t border-current border-opacity-10">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Pré-requisitos:
                    </p>
                    <div className="space-y-1">
                      {module.prerequisites.map((prereqId) => {
                        const prereq = learningStructure.find(
                          (m) => m.id === prereqId
                        );
                        const isPrereqCompleted =
                          completedModules.includes(prereqId);
                        return (
                          <div
                            key={prereqId}
                            className="text-sm flex items-center gap-2 text-gray-600 dark:text-gray-400"
                          >
                            {isPrereqCompleted ? (
                              <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
                            ) : (
                              <Circle className="w-4 h-4 text-gray-400" />
                            )}
                            {prereq?.name}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Ação - Botão Chamativo e Dinâmico */}
                {isExpanded && !isLocked && (
                  <div className="px-4 pb-4 border-t border-current border-opacity-10">
                    <button
                      onClick={() => handleStartModule(module.id)}
                      className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 ${
                        isCompleted
                          ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-lg hover:shadow-xl hover:scale-105'
                          : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl hover:scale-105 animate-pulse'
                      }`}
                    >
                      <Rocket className="w-5 h-5" />
                      {isCompleted ? '🔄 Revisar Módulo' : '🚀 Começar Módulo'}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
