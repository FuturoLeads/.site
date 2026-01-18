import { useState } from 'react';
import {
  BookOpen,
  Zap,
  Award,
  FileText,
  BookMarked,
  MessageSquare,
  BarChart3,
  RotateCcw,
  Loader2,
  ArrowLeft,
  Trophy,
} from 'lucide-react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { LearningMap } from '@/components/LearningMap';
import { InteractiveExercise } from '@/components/InteractiveExercise';
import { BadgesDisplay } from '@/components/BadgesDisplay';
import { PersonalNotes } from '@/components/PersonalNotes';
import { GlossaryModal } from '@/components/GlossaryModal';
import { CommunityForum } from '@/components/CommunityForum';
import { PerformanceDashboard } from '@/components/PerformanceDashboard';
import { SpacedRepetition } from '@/components/SpacedRepetition';
import { SpacedRepetitionNotification } from '@/components/SpacedRepetitionNotification';
import { GamificationHub } from '@/components/GamificationHub';
import { useFeatureData } from '@/hooks/useFeatureData';

type TabType =
  | 'learning'
  | 'exercises'
  | 'badges'
  | 'notes'
  | 'glossary'
  | 'forum'
  | 'performance'
  | 'spaced'
  | 'gamification';

interface TabConfig {
  id: TabType;
  label: string;
  icon: React.ReactNode;
  description: string;
}

const TABS: TabConfig[] = [
  {
    id: 'learning',
    label: 'Mapa de Aprendizado',
    icon: <BookOpen className="w-5 h-5" />,
    description: 'Visualize seu caminho de aprendizado com pré-requisitos',
  },
  {
    id: 'exercises',
    label: 'Exercícios',
    icon: <Zap className="w-5 h-5" />,
    description: 'Pratique com exercícios interativos',
  },
  {
    id: 'badges',
    label: 'Badges',
    icon: <Award className="w-5 h-5" />,
    description: 'Acompanhe seus certificados progressivos',
  },
  {
    id: 'notes',
    label: 'Anotações',
    icon: <FileText className="w-5 h-5" />,
    description: 'Crie e organize suas anotações',
  },
  {
    id: 'glossary',
    label: 'Glossário',
    icon: <BookMarked className="w-5 h-5" />,
    description: 'Consulte termos técnicos',
  },
  {
    id: 'forum',
    label: 'Comunidade',
    icon: <MessageSquare className="w-5 h-5" />,
    description: 'Discuta com outros alunos',
  },
  {
    id: 'performance',
    label: 'Desempenho',
    icon: <BarChart3 className="w-5 h-5" />,
    description: 'Analise seu progresso',
  },
  {
    id: 'spaced',
    label: 'Revisão Espaçada',
    icon: <RotateCcw className="w-5 h-5" />,
    description: 'Sistema de revisão espaçada',
  },
  {
    id: 'gamification',
    label: 'Gamificação',
    icon: <Trophy className="w-5 h-5" />,
    description: 'Leaderboard, pontos e desafios',
  },
];

export default function FeaturesHub() {
  const [activeTab, setActiveTab] = useState<TabType>('learning');
  const [glossaryOpen, setGlossaryOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const [, setLocation] = useLocation();

  // Carregar dados reais do tRPC
  const {
    isLoading,
    performanceData,
    userBadges,
    spacedRepetitionItems,
    dueForReview,
    learningProgress,
  } = useFeatureData();

  // Calcular estatísticas
  const totalTimeSpent = performanceData.reduce(
    (sum, data) => sum + (data.timeSpentMinutes || 0),
    0
  );
  const completedModules = learningProgress.filter(
    (p) => p.isCompleted
  ).length;
  const totalModules = learningProgress.length || 5;
  const averageScore =
    performanceData.length > 0
      ? Math.round(
          performanceData.reduce(
            (sum, data) =>
              sum +
              ((parseFloat(data.exerciseScore as any) || 0) +
                (parseFloat(data.quizScore as any) || 0)) /
                2,
            0
          ) / performanceData.length
        )
      : 0;

  const mockExercise = {
    id: 1,
    moduleId: 'module1',
    chapterId: 'chapter1',
    type: 'scenario' as const,
    title: 'Exercício de Cenário',
    description: 'Analise um cenário de marketing digital',
    question: 'Uma empresa quer aumentar suas vendas online. O que você faria?',
    content: 'Uma empresa quer aumentar suas vendas online. O que você faria?',
    options: [
      'Aumentar o orçamento de publicidade',
      'Melhorar a experiência do usuário',
      'Implementar estratégia de SEO',
    ],
    correctAnswer: 'Implementar estratégia de SEO',
    explanation: 'SEO é fundamental para visibilidade orgânica.',
    feedback: 'Excelente! SEO é fundamental para visibilidade orgânica.',
    difficulty: 'medium' as const,
  } as any;

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-blue-600 dark:text-blue-400" />
          <span className="ml-3 text-gray-600 dark:text-gray-400">
            Carregando dados...
          </span>
        </div>
      );
    }

    switch (activeTab) {
      case 'learning':
        return (
          <LearningMap
            completedModules={learningProgress
              .filter((p) => p.isCompleted)
              .map((p) => p.moduleId)}
            onSelectModule={(moduleId) => console.log('Selected:', moduleId)}
          />
        );
      case 'exercises':
        return <InteractiveExercise exercise={mockExercise} />;
      case 'badges':
        return (
          <BadgesDisplay
            completedModules={learningProgress
              .filter((p) => p.isCompleted)
              .map((p) => p.moduleId)}
            totalModules={totalModules}
          />
        );
      case 'notes':
        return <PersonalNotes chapterId="chapter1" />;
      case 'glossary':
        return (
          <GlossaryModal
            isOpen={glossaryOpen}
            onClose={() => setGlossaryOpen(false)}
          />
        );
      case 'forum':
        return <CommunityForum moduleId="module1" />;
      case 'performance':
        return (
          <PerformanceDashboard
            performanceData={performanceData as any}
            completedModules={learningProgress
              .filter((p) => p.isCompleted)
              .map((p) => p.moduleId)}
            totalModules={totalModules}
          />
        );
      case 'spaced':
        return <SpacedRepetition reviewItems={spacedRepetitionItems as any} />;
      case 'gamification':
        return <GamificationHub currentUserPoints={2450} currentUserLevel={5} currentUserRank={12} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Notificação de Spaced Repetition */}
      {showNotification && (
        <SpacedRepetitionNotification
          dueItemsCount={dueForReview.length}
          onDismiss={() => setShowNotification(false)}
          onNavigate={() => {
            setShowNotification(false);
            setActiveTab('spaced');
          }}
        />
      )}

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-800 dark:to-indigo-800 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => setLocation('/')}
            className="flex items-center gap-2 mb-4 px-4 py-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar para Home
          </button>
          <h1 className="text-4xl font-bold mb-2">Hub de Aprendizado</h1>
          <p className="text-blue-100">
            Acesse todas as ferramentas para potencializar seu aprendizado
          </p>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto gap-2 py-4">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
                title={tab.description}
              >
                {tab.icon}
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Tab Description */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {TABS.find((t) => t.id === activeTab)?.label}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {TABS.find((t) => t.id === activeTab)?.description}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
          {renderContent()}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            📊 Seu Progresso
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-400">Módulos Completos</p>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                {completedModules}/{totalModules}
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-400">Tempo de Estudo</p>
              <p className="text-3xl font-bold text-green-600 dark:text-green-400">
                {Math.round(totalTimeSpent / 60)}h
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-400">Badges Conquistados</p>
              <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                {userBadges.length}
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-400">Pontuação Média</p>
              <p className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                {averageScore}%
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-800 dark:to-indigo-800 text-white py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-3">Pronto para começar?</h3>
          <p className="text-blue-100 mb-6">
            Explore todas as ferramentas disponíveis e potencialize seu aprendizado de marketing
            digital
          </p>
          <Button
            onClick={() => setActiveTab('learning')}
            className="bg-white text-blue-600 hover:bg-blue-50"
          >
            Começar Agora
          </Button>
        </div>
      </div>
    </div>
  );
}
