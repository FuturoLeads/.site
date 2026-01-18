import { Award, Trophy, Star, Zap } from 'lucide-react';

interface Badge {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  earnedAt?: Date;
  color: string;
}

interface BadgesDisplayProps {
  completedModules: string[];
  totalModules: number;
}

export function BadgesDisplay({
  completedModules,
  totalModules,
}: BadgesDisplayProps) {
  // Gerar badges baseado em progresso
  const badges: Badge[] = [
    {
      id: 'first_step',
      name: 'Primeiro Passo',
      description: 'Complete seu primeiro módulo',
      icon: <Star className="w-8 h-8" />,
      color: 'bg-yellow-100 dark:bg-yellow-900',
      earnedAt: completedModules.length >= 1 ? new Date() : undefined,
    },
    {
      id: 'quarter_way',
      name: 'Um Quarto do Caminho',
      description: 'Complete 25% dos módulos',
      icon: <Zap className="w-8 h-8" />,
      color: 'bg-blue-100 dark:bg-blue-900',
      earnedAt:
        completedModules.length >= Math.ceil(totalModules * 0.25)
          ? new Date()
          : undefined,
    },
    {
      id: 'halfway',
      name: 'Meio do Caminho',
      description: 'Complete 50% dos módulos',
      icon: <Trophy className="w-8 h-8" />,
      color: 'bg-purple-100 dark:bg-purple-900',
      earnedAt:
        completedModules.length >= Math.ceil(totalModules * 0.5)
          ? new Date()
          : undefined,
    },
    {
      id: 'almost_there',
      name: 'Quase Lá',
      description: 'Complete 75% dos módulos',
      icon: <Award className="w-8 h-8" />,
      color: 'bg-orange-100 dark:bg-orange-900',
      earnedAt:
        completedModules.length >= Math.ceil(totalModules * 0.75)
          ? new Date()
          : undefined,
    },
    {
      id: 'master',
      name: 'Mestre do Marketing',
      description: 'Complete todos os módulos',
      icon: <Trophy className="w-8 h-8" />,
      color: 'bg-green-100 dark:bg-green-900',
      earnedAt:
        completedModules.length === totalModules ? new Date() : undefined,
    },
  ];

  const earnedBadges = badges.filter((b) => b.earnedAt);
  const lockedBadges = badges.filter((b) => !b.earnedAt);

  return (
    <div className="space-y-6">
      {/* Badges Conquistados */}
      {earnedBadges.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            🏆 Suas Conquistas ({earnedBadges.length})
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {earnedBadges.map((badge) => (
              <div
                key={badge.id}
                className={`${badge.color} rounded-lg p-4 text-center border-2 border-current border-opacity-20 transform hover:scale-105 transition-transform`}
              >
                <div className="flex justify-center mb-2">{badge.icon}</div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">
                  {badge.name}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  {badge.description}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                  ✓ Conquistado
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Badges Bloqueados */}
      {lockedBadges.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            🔒 Próximas Conquistas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {lockedBadges.map((badge) => {
              const progressPercentage = Math.round(
                (completedModules.length / totalModules) * 100
              );
              return (
                <div
                  key={badge.id}
                  className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 text-center opacity-60 border-2 border-gray-300 dark:border-gray-600"
                >
                  <div className="flex justify-center mb-2 opacity-50">
                    {badge.icon}
                  </div>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">
                    {badge.name}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    {badge.description}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                    Progresso: {progressPercentage}%
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Barra de Progresso de Badges */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Badges Conquistados: {earnedBadges.length} de {badges.length}
        </p>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
            style={{
              width: `${(earnedBadges.length / badges.length) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
