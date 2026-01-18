import { useState } from 'react';
import { Trophy, Zap, Target, TrendingUp, Star, Flame } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LeaderboardUser {
  rank: number;
  name: string;
  points: number;
  level: number;
  avatar?: string;
  streak?: number;
}

interface WeeklyChallenge {
  id: string;
  title: string;
  description: string;
  points: number;
  progress: number;
  maxProgress: number;
  icon: React.ReactNode;
  completed: boolean;
}

interface GamificationHubProps {
  currentUserPoints?: number;
  currentUserLevel?: number;
  currentUserRank?: number;
}

const mockLeaderboard: LeaderboardUser[] = [
  { rank: 1, name: 'João Silva', points: 4850, level: 8, streak: 15 },
  { rank: 2, name: 'Maria Santos', points: 4620, level: 7, streak: 12 },
  { rank: 3, name: 'Pedro Costa', points: 4390, level: 7, streak: 10 },
  { rank: 4, name: 'Ana Oliveira', points: 4120, level: 6, streak: 8 },
  { rank: 5, name: 'Carlos Souza', points: 3890, level: 6, streak: 6 },
];

const mockChallenges: WeeklyChallenge[] = [
  {
    id: '1',
    title: 'Completar 3 Capítulos',
    description: 'Conclua 3 capítulos em um dia',
    points: 150,
    progress: 2,
    maxProgress: 3,
    icon: <Zap className="w-5 h-5" />,
    completed: false,
  },
  {
    id: '2',
    title: 'Acertar Quiz Perfeito',
    description: 'Acerte 100% em um quiz',
    points: 200,
    progress: 1,
    maxProgress: 1,
    icon: <Target className="w-5 h-5" />,
    completed: true,
  },
  {
    id: '3',
    title: 'Semana de Fogo',
    description: 'Estude 7 dias seguidos',
    points: 300,
    progress: 5,
    maxProgress: 7,
    icon: <Flame className="w-5 h-5" />,
    completed: false,
  },
  {
    id: '4',
    title: 'Mestre em Anotações',
    description: 'Crie 10 anotações em um módulo',
    points: 100,
    progress: 7,
    maxProgress: 10,
    icon: <Star className="w-5 h-5" />,
    completed: false,
  },
];

export function GamificationHub({
  currentUserPoints = 2450,
  currentUserLevel = 5,
  currentUserRank = 12,
}: GamificationHubProps) {
  const [selectedTab, setSelectedTab] = useState<'leaderboard' | 'challenges'>('leaderboard');

  const pointsToNextLevel = 500;
  const currentLevelProgress = (currentUserPoints % pointsToNextLevel) / pointsToNextLevel * 100;

  return (
    <div className="space-y-6">
      {/* Seu Progresso */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Nível */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow-sm">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Seu Nível</p>
            <div className="flex items-center justify-center gap-2">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold text-xl">
                {currentUserLevel}
              </div>
              <div>
                <p className="font-bold text-gray-900 dark:text-white">Aprendiz</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Avançado</p>
              </div>
            </div>
          </div>

          {/* Pontos */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow-sm">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Pontos Totais</p>
            <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
              {currentUserPoints.toLocaleString()}
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">XP</p>
          </div>

          {/* Ranking */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow-sm">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Seu Ranking</p>
            <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
              #{currentUserRank}
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">de 1000+</p>
          </div>

          {/* Progresso para Próximo Nível */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Próx. Nível</p>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
              <div
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all"
                style={{ width: `${currentLevelProgress}%` }}
              />
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              {Math.round(currentLevelProgress)}% completo
            </p>
          </div>
        </div>
      </div>

      {/* Abas */}
      <div className="flex gap-2 border-b border-gray-200 dark:border-gray-700">
        <button
          onClick={() => setSelectedTab('leaderboard')}
          className={`px-4 py-2 font-semibold transition-colors ${
            selectedTab === 'leaderboard'
              ? 'text-purple-600 dark:text-purple-400 border-b-2 border-purple-600 dark:border-purple-400'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
          }`}
        >
          <Trophy className="w-5 h-5 inline mr-2" />
          Leaderboard
        </button>
        <button
          onClick={() => setSelectedTab('challenges')}
          className={`px-4 py-2 font-semibold transition-colors ${
            selectedTab === 'challenges'
              ? 'text-purple-600 dark:text-purple-400 border-b-2 border-purple-600 dark:border-purple-400'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
          }`}
        >
          <Target className="w-5 h-5 inline mr-2" />
          Desafios Semanais
        </button>
      </div>

      {/* Conteúdo das Abas */}
      {selectedTab === 'leaderboard' && (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Top 5 Alunos
          </h3>
          <div className="space-y-2">
            {mockLeaderboard.map((user) => (
              <div
                key={user.rank}
                className={`flex items-center gap-4 p-4 rounded-lg border-2 transition-all ${
                  user.rank === 1
                    ? 'bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-950 dark:to-amber-950 border-yellow-300 dark:border-yellow-700'
                    : user.rank === 2
                      ? 'bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 border-gray-300 dark:border-gray-700'
                      : user.rank === 3
                        ? 'bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950 border-orange-300 dark:border-orange-700'
                        : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
                }`}
              >
                {/* Ranking Medal */}
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center font-bold text-lg">
                  {user.rank === 1 && <span className="text-2xl">🥇</span>}
                  {user.rank === 2 && <span className="text-2xl">🥈</span>}
                  {user.rank === 3 && <span className="text-2xl">🥉</span>}
                  {user.rank > 3 && (
                    <span className="text-gray-600 dark:text-gray-400">#{user.rank}</span>
                  )}
                </div>

                {/* Info do Usuário */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {user.name}
                    </p>
                    {user.streak && user.streak >= 7 && (
                      <Flame className="w-4 h-4 text-orange-500" />
                    )}
                  </div>
                  <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <span>Nível {user.level}</span>
                    {user.streak && <span>Sequência: {user.streak} dias</span>}
                  </div>
                </div>

                {/* Pontos */}
                <div className="text-right">
                  <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                    {user.points.toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">XP</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedTab === 'challenges' && (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Desafios da Semana
          </h3>
          <div className="space-y-3">
            {mockChallenges.map((challenge) => (
              <div
                key={challenge.id}
                className={`p-4 rounded-lg border-2 transition-all ${
                  challenge.completed
                    ? 'bg-green-50 dark:bg-green-950 border-green-300 dark:border-green-700'
                    : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700'
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Ícone */}
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                      challenge.completed
                        ? 'bg-green-200 dark:bg-green-800 text-green-700 dark:text-green-300'
                        : 'bg-purple-200 dark:bg-purple-800 text-purple-700 dark:text-purple-300'
                    }`}
                  >
                    {challenge.icon}
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {challenge.title}
                      </h4>
                      {challenge.completed && (
                        <span className="text-xs bg-green-200 dark:bg-green-800 text-green-700 dark:text-green-300 px-2 py-1 rounded-full font-semibold">
                          Completo
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {challenge.description}
                    </p>

                    {/* Progresso */}
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-1">
                      <div
                        className={`h-2 rounded-full transition-all ${
                          challenge.completed
                            ? 'bg-green-500'
                            : 'bg-gradient-to-r from-purple-500 to-pink-500'
                        }`}
                        style={{
                          width: `${(challenge.progress / challenge.maxProgress) * 100}%`,
                        }}
                      />
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {challenge.progress}/{challenge.maxProgress}
                    </p>
                  </div>

                  {/* Pontos */}
                  <div className="text-right flex-shrink-0">
                    <p className="text-xl font-bold text-purple-600 dark:text-purple-400">
                      +{challenge.points}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">XP</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dica */}
          <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mt-4">
            <p className="text-sm text-blue-900 dark:text-blue-100">
              💡 <strong>Dica:</strong> Complete todos os desafios da semana para ganhar um bônus especial!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
