import { TrendingUp, AlertCircle, Target, Clock } from 'lucide-react';

interface PerformanceData {
  moduleId: string;
  moduleName: string;
  timeSpentMinutes: number;
  completionRate: number;
  exerciseScore: number;
  quizScore: number;
  strengthAreas: string[];
  weakAreas: string[];
  lastAccessedAt: Date;
}

interface PerformanceDashboardProps {
  performanceData: PerformanceData[];
  completedModules: string[];
  totalModules: number;
}

export function PerformanceDashboard({
  performanceData,
  completedModules,
  totalModules,
}: PerformanceDashboardProps) {
  const totalTimeSpent = performanceData.reduce(
    (sum, data) => sum + data.timeSpentMinutes,
    0
  );
  const averageScore =
    performanceData.length > 0
      ? Math.round(
          performanceData.reduce(
            (sum, data) => sum + (data.exerciseScore + data.quizScore) / 2,
            0
          ) / performanceData.length
        )
      : 0;

  const overallCompletion = Math.round(
    (completedModules.length / totalModules) * 100
  );

  // Identificar áreas fortes e fracas
  const allStrengthAreas = performanceData.flatMap((d) => d.strengthAreas);
  const allWeakAreas = performanceData.flatMap((d) => d.weakAreas);

  const strengthCounts = allStrengthAreas.reduce(
    (acc, area) => {
      acc[area] = (acc[area] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  const weakCounts = allWeakAreas.reduce(
    (acc, area) => {
      acc[area] = (acc[area] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  const topStrengths = Object.entries(strengthCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3)
    .map(([area]) => area);

  const topWeaknesses = Object.entries(weakCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3)
    .map(([area]) => area);

  return (
    <div className="space-y-6">
      {/* Métricas Principais */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Tempo Total */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg p-4 border border-blue-200 dark:border-blue-700">
          <div className="flex items-center justify-between mb-2">
            <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
              Total
            </span>
          </div>
          <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">
            {Math.round(totalTimeSpent / 60)}h
          </p>
          <p className="text-xs text-blue-700 dark:text-blue-300 mt-1">
            Tempo de estudo
          </p>
        </div>

        {/* Conclusão */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-lg p-4 border border-green-200 dark:border-green-700">
          <div className="flex items-center justify-between mb-2">
            <Target className="w-5 h-5 text-green-600 dark:text-green-400" />
            <span className="text-xs font-medium text-green-600 dark:text-green-400">
              Progresso
            </span>
          </div>
          <p className="text-2xl font-bold text-green-900 dark:text-green-100">
            {overallCompletion}%
          </p>
          <p className="text-xs text-green-700 dark:text-green-300 mt-1">
            {completedModules.length} de {totalModules} módulos
          </p>
        </div>

        {/* Pontuação Média */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 rounded-lg p-4 border border-purple-200 dark:border-purple-700">
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <span className="text-xs font-medium text-purple-600 dark:text-purple-400">
              Média
            </span>
          </div>
          <p className="text-2xl font-bold text-purple-900 dark:text-purple-100">
            {averageScore}%
          </p>
          <p className="text-xs text-purple-700 dark:text-purple-300 mt-1">
            Pontuação geral
          </p>
        </div>

        {/* Módulos Completados */}
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900 dark:to-orange-800 rounded-lg p-4 border border-orange-200 dark:border-orange-700">
          <div className="flex items-center justify-between mb-2">
            <AlertCircle className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            <span className="text-xs font-medium text-orange-600 dark:text-orange-400">
              Concluído
            </span>
          </div>
          <p className="text-2xl font-bold text-orange-900 dark:text-orange-100">
            {completedModules.length}
          </p>
          <p className="text-xs text-orange-700 dark:text-orange-300 mt-1">
            Módulos completos
          </p>
        </div>
      </div>

      {/* Áreas Fortes e Fracas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Áreas Fortes */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            ⭐ Áreas Fortes
          </h3>
          {topStrengths.length > 0 ? (
            <div className="space-y-3">
              {topStrengths.map((area, index) => (
                <div key={area} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center text-green-700 dark:text-green-300 font-semibold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900 dark:text-white font-medium">
                      {area}
                    </p>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-1">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: `${80 + index * 5}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 dark:text-gray-400">
              Nenhuma área forte identificada ainda
            </p>
          )}
        </div>

        {/* Áreas para Melhorar */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            🎯 Áreas para Melhorar
          </h3>
          {topWeaknesses.length > 0 ? (
            <div className="space-y-3">
              {topWeaknesses.map((area, index) => (
                <div key={area} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center text-orange-700 dark:text-orange-300 font-semibold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900 dark:text-white font-medium">
                      {area}
                    </p>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-1">
                      <div
                        className="bg-orange-500 h-2 rounded-full"
                        style={{ width: `${50 - index * 10}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 dark:text-gray-400">
              Parabéns! Nenhuma área fraca identificada
            </p>
          )}
        </div>
      </div>

      {/* Desempenho por Módulo */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          📊 Desempenho por Módulo
        </h3>
        <div className="space-y-4">
          {performanceData.length > 0 ? (
            performanceData.map((data) => (
              <div key={data.moduleId} className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-gray-900 dark:text-white">
                    {data.moduleName}
                  </p>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {Math.round((data.exerciseScore + data.quizScore) / 2)}%
                  </span>
                </div>
                <div className="flex gap-2">
                  <div className="flex-1">
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                      Exercícios
                    </p>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${data.exerciseScore}%` }}
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                      Quiz
                    </p>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-purple-500 h-2 rounded-full"
                        style={{ width: `${data.quizScore}%` }}
                      />
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  ⏱️ {Math.round(data.timeSpentMinutes / 60)}h de estudo
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-600 dark:text-gray-400">
              Nenhum dado de desempenho disponível
            </p>
          )}
        </div>
      </div>

      {/* Recomendações */}
      <div className="bg-blue-50 dark:bg-blue-900 rounded-lg border border-blue-200 dark:border-blue-800 p-6">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
          💡 Recomendações Personalizadas
        </h3>
        <ul className="space-y-2 text-blue-800 dark:text-blue-200">
          {topWeaknesses.length > 0 && (
            <li>
              • Revise os conceitos de{' '}
              <strong>{topWeaknesses[0]}</strong> para melhorar seu desempenho
            </li>
          )}
          {overallCompletion < 50 && (
            <li>
              • Continue estudando! Você está no caminho certo. Faltam apenas{' '}
              <strong>{totalModules - completedModules.length}</strong> módulos
            </li>
          )}
          {averageScore < 70 && (
            <li>
              • Tente fazer os exercícios novamente para consolidar o
              aprendizado
            </li>
          )}
          {topStrengths.length > 0 && (
            <li>
              • Excelente desempenho em <strong>{topStrengths[0]}</strong>!
              Continue assim
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
