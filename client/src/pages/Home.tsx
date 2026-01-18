import { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, BookOpen, CheckCircle2, Circle, Volume2, Pause, Play, Square, ChevronLeft, ChevronRight, Zap, ListTodo, Award, Facebook, Instagram, Linkedin, Twitter, Mail, MessageSquare, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/_core/hooks/useAuth';
import { ActionMenu } from '@/components/ActionMenu';
import { EbookGroup } from '@/components/EbookGroup';

import { modules } from '@/data/modules';
import { moduleQuizzes } from '@/data/quizzes';
import { stepByStepGuides } from '@/data/stepByStep';
import { platformTutorials } from '@/data/platformTutorials';

import { TutorAI } from '@/components/TutorAI';

interface ChecklistItems {
  [key: string]: boolean;
}

interface ChapterContent {
  emoji?: string;
  subtitle?: string;
  steps?: string[];
  exercises?: string[];
}

interface QuizQuestion {
  id: string;
  question: string;
  options: {
    text: string;
    correct: boolean;
  }[];
  explanation: string;
}

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  const [sidebarOpen, setSidebarOpen] = useState(true);
  // expandedModules removido - agora gerenciado pelo EbookGroup

  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);
  const [expandedEbook, setExpandedEbook] = useState<boolean>(false);
  const [checklist, setChecklist] = useState<ChecklistItems>({});
  const [showChecklist, setShowChecklist] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechRate, setSpeechRate] = useState(1);
  const [selectedLanguage, setSelectedLanguage] = useState('pt-BR');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [practiceExercises, setPracticeExercises] = useState<ChecklistItems>({});
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<{ [key: string]: number }>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [selectedStepGuide, setSelectedStepGuide] = useState<string | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // toggleModule removido - agora gerenciado pelo EbookGroup

  const toggleChecklistItem = (itemId: string) => {
    setChecklist((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const stopSpeech = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = selectedLanguage;
      utterance.rate = speechRate;
      utterance.pitch = 1;
      utterance.volume = 1;

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      utteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleChapterChange = (chapterId: string) => {
    setSelectedChapter(chapterId);
    stopSpeech();
    setTimeout(() => {
      const mainContent = document.querySelector('main');
      if (mainContent) {
        mainContent.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 0);
  };

  useEffect(() => {
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
    return () => {
      stopSpeech();
    };
  }, []);

  const currentModule = modules.find((m) =>
    m.chapters.some((c) => c.id === selectedChapter)
  );

  const currentChapter = currentModule?.chapters.find(
    (c) => c.id === selectedChapter
  );

  const allChapters = modules.flatMap((m) => m.chapters);
  const currentChapterIndex = allChapters.findIndex((c) => c.id === selectedChapter);

  const checklistItems = [
    { id: 'modulo1', label: 'Módulo 1 - Fundamentos Completo' },
    { id: 'modulo2', label: 'Módulo 2 - Produtos Digitais Completo' },
    { id: 'modulo3', label: 'Módulo 3 - Tráfego Pago Completo' },
    { id: 'modulo4', label: 'Módulo 4 - Tráfego Orgânico Completo' },
    { id: 'modulo5', label: 'Módulo 5 - Funis de Vendas Completo' },
    { id: 'modulo6', label: 'Módulo 6 - Monetização Completo' },
    { id: 'bonus', label: 'Módulo Bônus Completo' },
    { id: 'aplicar', label: 'Aplicar conhecimento em seu negócio' },
    { id: 'comunidade', label: 'Participar da comunidade exclusiva' },
    { id: 'certificado', label: 'Obter certificado de conclusão' },
  ];

  const completedItems = Object.values(checklist).filter(Boolean).length;
  const progressPercentage = Math.round((completedItems / checklistItems.length) * 100);

  const pauseSpeech = () => {
    if ('speechSynthesis' in window) {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
        setIsSpeaking(true);
      } else {
        window.speechSynthesis.pause();
        setIsSpeaking(false);
      }
    }
  };

  return (
    <div className="flex h-screen bg-background text-foreground">
      {/* Overlay para mobile */}
      {sidebarOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? (isMobile ? 'w-72 fixed left-0 top-0 h-screen z-50' : 'w-80') : 'w-0'
        } bg-card border-r border-border transition-all duration-300 overflow-y-auto flex flex-col`}
      >
        {sidebarOpen && (
          <div className="p-4 md:p-6 border-b border-border sticky top-0 bg-card flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                <h1 className="text-base md:text-lg font-bold text-foreground">
                  Marketing Digital
                </h1>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground">
                Do Zero ao Avançado
              </p>
              <div className="mt-4 bg-accent p-3 rounded-lg">
                <p className="text-xs text-muted-foreground mb-2">Progresso Geral</p>
                <div className="w-full bg-border rounded-full h-2 mb-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
                <p className="text-xs font-semibold text-foreground">{progressPercentage}%</p>
              </div>
            </div>
            {isMobile && (
              <button
                onClick={() => setSidebarOpen(false)}
                className="text-foreground hover:text-primary transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            )}
          </div>
        )}

        {sidebarOpen && (
          <div className="flex flex-col h-full">
            <nav className="flex-1 p-3 md:p-4 space-y-1 md:space-y-2 overflow-y-auto">
            <button
              onClick={() => {
                handleChapterChange('cover');
                if (isMobile) setSidebarOpen(false);
              }}
              className={`w-full text-left p-2 md:p-3 rounded-lg transition-colors text-sm md:text-base ${
                selectedChapter === 'cover'
                  ? 'bg-primary text-primary-foreground font-semibold'
                  : 'hover:bg-accent text-foreground'
              }`}
            >
              📖 Capa do E-book
            </button>

            {/* E-book Group */}
            <EbookGroup
              ebookTitle="Marketing Digital: Do Zero ao Avançado"
              ebookIcon="🎯"
              modules={modules}
              selectedChapter={selectedChapter}
              onChapterSelect={handleChapterChange}
              onMobileClose={() => isMobile && setSidebarOpen(false)}
            />
            </nav>

            {/* Footer com Hub e Ícones Fixos */}
            <div className="border-t border-border p-3 md:p-4 space-y-2 md:space-y-3 bg-card">
              <a
                href="/features"
                className="w-full p-2 md:p-3 rounded-lg transition-all text-left font-semibold text-xs md:text-sm bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600 hover:shadow-lg flex items-center gap-2 justify-center"
              >
                <Zap className="w-4 h-4" />
                Hub de Aprendizado
              </a>

              <button
                className="w-full flex items-center justify-center gap-2 p-2 md:p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-all text-xs md:text-sm font-medium"
                title="Tutor IA"
                onClick={() => {
                  const tutorButton = document.querySelector('[title="Abrir Tutor IA"]') as HTMLButtonElement;
                  if (tutorButton) tutorButton.click();
                }}
              >
                <Sparkles className="w-4 h-4" />
                <span className="hidden sm:inline">Tutor IA</span>
              </button>

              <div className="flex gap-2 justify-center">
                <button
                  className="flex-1 flex items-center justify-center gap-1 p-2 rounded-lg bg-accent hover:bg-accent/80 transition-colors text-foreground text-xs md:text-sm font-medium"
                  title="Certificados"
                >
                  <Award className="w-4 h-4" />
                  <span className="hidden sm:inline">Certificados</span>
                </button>
                <button
                  className="flex-1 flex items-center justify-center gap-1 p-2 rounded-lg bg-accent hover:bg-accent/80 transition-colors text-foreground text-xs md:text-sm font-medium"
                  title="Suporte"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span className="hidden sm:inline">Suporte</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="border-b border-border bg-card sticky top-0 z-10">
          <div className="flex items-center justify-between p-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-foreground"
            >
              {sidebarOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>

            <div className="flex-1 ml-4">
              <h2 className="text-lg font-semibold text-foreground">
                {selectedChapter === 'cover'
                  ? 'Marketing Digital: Do Zero ao Avançado'
                  : currentChapter?.title || 'Marketing Digital'}
              </h2>
            </div>

            <div className="flex items-center gap-1 md:gap-2 mr-2 md:mr-4 flex-wrap">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  if (isSpeaking) {
                    pauseSpeech();
                  } else if (currentChapter) {
                    speakText(currentChapter.content);
                  }
                }}
                disabled={!currentChapter || selectedChapter === 'cover'}
                title="Ler em voz alta"
                className="text-xs md:text-sm px-2 md:px-3"
              >
                {isSpeaking ? (
                  <>
                    <Pause className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                    {!isMobile && 'Pausar'}
                  </>
                ) : (
                  <>
                    <Volume2 className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                    {!isMobile && 'Ouvir'}
                  </>
                )}
              </Button>
              
              {isSpeaking && !isMobile && (
                <>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={stopSpeech}
                    title="Parar leitura"
                    className="px-2 md:px-3"
                  >
                    <Square className="w-3 h-3 md:w-4 md:h-4" />
                  </Button>

                  <select
                    value={speechRate}
                    onChange={(e) => setSpeechRate(parseFloat(e.target.value))}
                    className="text-xs md:text-sm px-2 py-1 rounded border border-border bg-background text-foreground cursor-pointer"
                  >
                    <option value="0.5">0.5x</option>
                    <option value="0.75">0.75x</option>
                    <option value="1">1x</option>
                    <option value="1.25">1.25x</option>
                    <option value="1.5">1.5x</option>
                    <option value="2">2x</option>
                  </select>

                  <select
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                    className="text-xs md:text-sm px-2 py-1 rounded border border-border bg-background text-foreground cursor-pointer hidden md:block"
                  >
                    <option value="pt-BR">Português (BR)</option>
                    <option value="en-US">English (US)</option>
                    <option value="es-ES">Español</option>
                    <option value="fr-FR">Français</option>
                    <option value="de-DE">Deutsch</option>
                    <option value="it-IT">Italiano</option>
                    <option value="ja-JP">日本語</option>
                    <option value="zh-CN">中文 (简体)</option>
                  </select>
                </>
              )}

              {isSpeaking && isMobile && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={stopSpeech}
                  title="Parar leitura"
                  className="px-2"
                >
                  <Square className="w-3 h-3" />
                </Button>
              )}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowChecklist(!showChecklist)}
              className="text-xs md:text-sm px-2 md:px-3"
            >
              ✓ {!isMobile && 'Checklist'} ({completedItems}/{checklistItems.length})
            </Button>

            <div className="text-xs md:text-sm text-muted-foreground hidden md:block">
              {selectedChapter === 'cover' ? 'Capa' : currentChapter?.id}
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="flex flex-col lg:flex-row gap-4 md:gap-8">
            {/* Main Content */}
            <div className="flex-1 min-w-0">
              {selectedChapter === 'cover' ? (
                // Capa
                <div className="max-w-4xl mx-auto">
                  <img
                    src="/capa-marketing-digital.png"
                    alt="Capa - Marketing Digital: Do Zero ao Avançado"
                    className="w-full max-w-2xl mx-auto rounded-xl md:rounded-2xl shadow-2xl mb-8 md:mb-12"
                  />

                  <div className="bg-accent p-4 md:p-8 rounded-lg mb-6 md:mb-8">
                    <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">
                      📋 Sumário Completo
                    </h2>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                      {modules.map((module) => (
                        <div key={module.id} className="bg-card p-3 md:p-4 rounded-lg border border-border">
                          <h3 className="font-bold text-sm md:text-base text-foreground mb-2 md:mb-3">
                            {module.icon} {module.title}
                          </h3>
                          <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-muted-foreground">
                            {module.chapters.map((chapter) => (
                              <li key={chapter.id} className="flex items-start gap-2">
                                <span className="text-primary">•</span>
                                <span>{chapter.title}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-card p-4 md:p-8 rounded-lg border border-border">
                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4">
                      Como Usar Este E-book
                    </h3>
                    <ol className="space-y-2 md:space-y-3 text-foreground text-sm md:text-base">
                      <li className="flex gap-2 md:gap-3">
                        <span className="font-bold text-primary flex-shrink-0">1.</span>
                        <span>Leia cada módulo na sequência para construir conhecimento sólido</span>
                      </li>
                      <li className="flex gap-2 md:gap-3">
                        <span className="font-bold text-primary flex-shrink-0">2.</span>
                        <span>Use o checklist para acompanhar seu progresso</span>
                      </li>
                      <li className="flex gap-2 md:gap-3">
                        <span className="font-bold text-primary flex-shrink-0">3.</span>
                        <span>Aplique os conhecimentos em seu negócio imediatamente</span>
                      </li>
                      <li className="flex gap-2 md:gap-3">
                        <span className="font-bold text-primary flex-shrink-0">4.</span>
                        <span>Acesse os recursos bônus para potencializar seus resultados</span>
                      </li>
                    </ol>
                  </div>
                </div>
              ) : selectedChapter ? (
                // Conteúdo do Capítulo
                <article className="max-w-4xl mx-auto">
                  <div className="mb-6 md:mb-8">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
                      {selectedChapter.includes('1.1') && '🎯 '}
                      {selectedChapter.includes('1.2') && '📚 '}
                      {selectedChapter.includes('1.3') && '🔑 '}
                      {selectedChapter.includes('1.4') && '👤 '}
                      {selectedChapter.includes('1.5') && '🛤️ '}
                      {selectedChapter.includes('1.6') && '📊 '}
                      {selectedChapter.includes('1.7') && '🛠️ '}
                      {selectedChapter.includes('1.8') && '🧠 '}
                      {selectedChapter.includes('2.1') && '💡 '}
                      {selectedChapter.includes('2.2') && '✅ '}
                      {selectedChapter.includes('2.3') && '✍️ '}
                      {selectedChapter.includes('2.4') && '☁️ '}
                      {selectedChapter.includes('2.5') && '💰 '}
                      {selectedChapter.includes('2.6') && '📝 '}
                      {selectedChapter.includes('2.7') && '🎯 '}
                      {selectedChapter.includes('2.8') && '🤝 '}
                      {selectedChapter.includes('3.1') && '👍 '}
                      {selectedChapter.includes('3.2') && '📸 '}
                      {selectedChapter.includes('3.3') && '🔍 '}
                      {selectedChapter.includes('3.4') && '▶️ '}
                      {selectedChapter.includes('3.5') && '🎵 '}
                      {selectedChapter.includes('3.6') && '🔄 '}
                      {selectedChapter.includes('3.7') && '⚙️ '}
                      {selectedChapter.includes('3.8') && '📈 '}
                      {selectedChapter.includes('4.1') && '🔎 '}
                      {selectedChapter.includes('4.2') && '📰 '}
                      {selectedChapter.includes('4.3') && '📷 '}
                      {selectedChapter.includes('4.4') && '🎬 '}
                      {selectedChapter.includes('4.5') && '🎭 '}
                      {selectedChapter.includes('4.6') && '💼 '}
                      {selectedChapter.includes('4.7') && '📌 '}
                      {selectedChapter.includes('4.8') && '💬 '}
                      {selectedChapter.includes('5.1') && '🏗️ '}
                      {selectedChapter.includes('5.2') && '🎪 '}
                      {selectedChapter.includes('5.3') && '🤖 '}
                      {selectedChapter.includes('5.4') && '📧 '}
                      {selectedChapter.includes('5.5') && '🧲 '}
                      {selectedChapter.includes('5.6') && '⬆️ '}
                      {selectedChapter.includes('5.7') && '📉 '}
                      {selectedChapter.includes('5.8') && '🎯 '}
                      {selectedChapter.includes('6.1') && '💎 '}
                      {selectedChapter.includes('6.2') && '🔗 '}
                      {selectedChapter.includes('6.3') && '🚀 '}
                      {selectedChapter.includes('6.4') && '🔁 '}
                      {selectedChapter.includes('6.5') && '👨‍🏫 '}
                      {selectedChapter.includes('6.6') && '📈 '}
                      {selectedChapter.includes('6.7') && '💵 '}
                      {selectedChapter.includes('6.8') && '🌍 '}
                      {selectedChapter}
                    </h1>
                    <div className="h-1 w-16 md:w-20 bg-primary rounded-full"></div>
                  </div>

                  <div className="prose prose-invert max-w-none">
                    {currentChapter && currentChapter.content && currentChapter.content.split('\n\n').map((paragraph, idx) => (
                      <p
                        key={idx}
                        className="text-sm md:text-base text-foreground leading-relaxed mb-4 md:mb-6 whitespace-pre-wrap"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>


                  {/* Exercícios */}
                  <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-border">
                    <p className="text-xs md:text-sm lg:text-base text-muted-foreground mb-2 font-semibold">Coloque em Prática</p>
                    <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-4 md:mb-6 flex items-center gap-2">
                      <ListTodo className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                      Exercícios Práticos
                    </h2>
                    <div className="space-y-3 md:space-y-4">
                      {[
                        'Crie uma lista com 5 canais digitais que você vai usar',
                        'Defina 3 métricas principais para seu negócio',
                        'Pesquise 3 concorrentes e analise sua presença digital',
                        'Faça um plano de ação para os próximos 30 dias'
                      ].map((exercise, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            const exerciseId = `${selectedChapter}-ex-${idx}`;
                            setPracticeExercises((prev) => ({
                              ...prev,
                              [exerciseId]: !prev[exerciseId],
                            }));
                          }}
                          className="w-full flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-card border border-border rounded-lg hover:bg-accent transition-colors text-left"
                        >
                          {practiceExercises[`${selectedChapter}-ex-${idx}`] ? (
                            <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-0.5" />
                          ) : (
                            <Circle className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground flex-shrink-0 mt-0.5" />
                          )}
                          <span
                            className={`text-sm md:text-base ${
                              practiceExercises[`${selectedChapter}-ex-${idx}`]
                                ? 'text-muted-foreground line-through'
                                : 'text-foreground'
                            }`}
                          >
                            {exercise}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Quiz Section */}
                  {selectedChapter.includes('1.') && !showQuiz && (
                    <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-border">
                      <Button
                        onClick={() => {
                          setShowQuiz(true);
                          setQuizSubmitted(false);
                          setQuizAnswers({});
                        }}
                        className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs md:text-sm px-3 md:px-4 w-full md:w-auto"
                      >
                        <Award className="w-4 h-4 mr-2" />
                        Fazer Quiz do Modulo
                      </Button>
                    </div>
                  )}

                  {showQuiz && moduleQuizzes[0] && (
                    <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-border w-full">
                      <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                        <Award className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                        Quiz do Modulo
                      </h2>
                      <div className="space-y-6 p-4 md:p-6 bg-accent rounded-lg">
                        {moduleQuizzes[0].questions.map((question) => (
                          <div key={question.id} className="space-y-3">
                            <p className="text-sm md:text-base font-semibold text-foreground">
                              {question.question}
                            </p>
                            <div className="space-y-2">
                              {question.options.map((option, oIdx) => {
                                const isSelected = quizAnswers[question.id] === oIdx;
                                const isCorrect = option.correct;
                                const showResult = quizSubmitted && isSelected;
                                let buttonColor = 'bg-card border border-border hover:bg-accent';
                                if (isSelected && !quizSubmitted) {
                                  buttonColor = 'bg-primary text-primary-foreground';
                                }
                                if (showResult) {
                                  buttonColor = isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white';
                                }

                                return (
                                  <button
                                    key={oIdx}
                                    onClick={() => {
                                      if (!quizSubmitted) {
                                        setQuizAnswers((prev) => ({
                                          ...prev,
                                          [question.id]: oIdx,
                                        }));
                                      }
                                    }}
                                    disabled={quizSubmitted}
                                    className={`w-full text-left p-3 rounded-lg transition-colors text-xs md:text-sm ${buttonColor}`}
                                  >
                                    <div className="flex items-start gap-2">
                                      <input
                                        type="radio"
                                        name={question.id}
                                        checked={isSelected}
                                        readOnly
                                        className="mt-1"
                                      />
                                      <span>{option.text}</span>
                                    </div>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        ))}

                        {!quizSubmitted && (
                          <Button
                            onClick={() => setQuizSubmitted(true)}
                            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-xs md:text-sm mt-4"
                          >
                            Enviar Respostas
                          </Button>
                        )}

                        {quizSubmitted && (
                          <div className="p-4 md:p-6 bg-card rounded-lg border-2 border-primary">
                            <p className="text-sm md:text-base font-bold text-foreground mb-4">
                              Resultado:
                            </p>
                            <div className="space-y-2 mb-4">
                              {moduleQuizzes[0].questions.map((question) => {
                                const selectedIndex = quizAnswers[question.id];
                                const isCorrect = selectedIndex !== undefined && question.options[selectedIndex]?.correct;
                                return (
                                  <div
                                    key={question.id}
                                    className={`p-2 md:p-3 rounded-lg text-xs md:text-sm flex items-center gap-2 ${
                                      isCorrect
                                        ? 'bg-green-500/20 text-green-700'
                                        : 'bg-red-500/20 text-red-700'
                                    }`}
                                  >
                                    {isCorrect ? '✓' : '✗'} {question.question}
                                  </div>
                                );
                              })}
                            </div>
                            <Button
                              onClick={() => {
                                setShowQuiz(false);
                                setQuizSubmitted(false);
                                setQuizAnswers({});
                              }}
                              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-xs md:text-sm"
                            >
                              Fechar Quiz
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Navigation */}
                  <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
                    <Button
                      variant="outline"
                      onClick={() => {
                        if (currentChapterIndex > 0) {
                          handleChapterChange(allChapters[currentChapterIndex - 1].id);
                        }
                      }}
                      disabled={currentChapterIndex === 0}
                      className="w-full md:w-auto text-xs md:text-sm px-3 md:px-4"
                    >
                      <ChevronLeft className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                      Anterior
                    </Button>

                    <span className="text-xs md:text-sm text-muted-foreground">
                      {currentChapterIndex + 1} de {allChapters.length}
                    </span>

                    <Button
                      variant="outline"
                      onClick={() => {
                        if (currentChapterIndex < allChapters.length - 1) {
                          handleChapterChange(allChapters[currentChapterIndex + 1].id);
                        }
                      }}
                      disabled={currentChapterIndex === allChapters.length - 1}
                      className="w-full md:w-auto text-xs md:text-sm px-3 md:px-4"
                    >
                      Próximo
                      <ChevronRight className="w-3 h-3 md:w-4 md:h-4 ml-1" />
                    </Button>
                  </div>
                </article>
              ) : (
                // Nenhum capítulo selecionado
                <div className="flex flex-col items-center justify-center h-96 text-center">
                  <BookOpen className="w-16 h-16 md:w-20 md:h-20 text-muted-foreground mb-4 opacity-50" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Bem-vindo!</h2>
                  <p className="text-lg text-muted-foreground mb-6">Selecione um capítulo no sidebar para começar a estudar</p>
                  <p className="text-sm text-muted-foreground/70">Clique em "Marketing Digital: Do Zero ao Avançado" para expandir os módulos</p>
                </div>
              )}
            </div>

            {/* Checklist Sidebar */}
            {showChecklist && (
              <div className="w-80 bg-card border-l border-border p-6 overflow-y-auto">
                <h3 className="text-lg font-bold text-foreground mb-4">
                  ✓ Seu Progresso
                </h3>
                <div className="mb-6 p-4 bg-accent rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">Conclusão Geral</p>
                  <div className="w-full bg-border rounded-full h-3 mb-2">
                    <div
                      className="bg-primary h-3 rounded-full transition-all duration-300"
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                  <p className="text-lg font-bold text-foreground">{progressPercentage}%</p>
                </div>

                <div className="space-y-3">
                  {checklistItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => toggleChecklistItem(item.id)}
                      className="w-full flex items-start gap-3 p-3 rounded-lg hover:bg-accent transition-colors text-left"
                    >
                      {checklist[item.id] ? (
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      ) : (
                        <Circle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                      )}
                      <span
                        className={`text-sm ${
                          checklist[item.id]
                            ? 'text-muted-foreground line-through'
                            : 'text-foreground'
                        }`}
                      >
                        {item.label}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-accent rounded-lg">
                  <p className="text-xs text-muted-foreground mb-2">
                    Itens Completados
                  </p>
                  <p className="text-2xl font-bold text-foreground">
                    {completedItems}/{checklistItems.length}
                  </p>
                </div>
              </div>
            )}
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-12 md:mt-16 pt-8 md:pt-12 border-t border-border bg-gradient-to-r from-primary/10 via-accent to-primary/10">
          <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">
            {/* Redes Sociais */}
            <div className="flex justify-center gap-4 md:gap-6 mb-8 md:mb-10">
              <a
                href="https://facebook.com/futuroLeads"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-blue-500/20 hover:bg-blue-500/30 text-blue-500 hover:text-blue-400 transition-all duration-300 hover:scale-110"
                title="Facebook"
              >
                <Facebook className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a
                href="https://instagram.com/futuroLeads"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-pink-500/20 hover:bg-pink-500/30 text-pink-500 hover:text-pink-400 transition-all duration-300 hover:scale-110"
                title="Instagram"
              >
                <Instagram className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a
                href="https://linkedin.com/company/futuroLeads"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-blue-600/20 hover:bg-blue-600/30 text-blue-600 hover:text-blue-500 transition-all duration-300 hover:scale-110"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a
                href="https://twitter.com/futuroLeads"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-sky-500/20 hover:bg-sky-500/30 text-sky-500 hover:text-sky-400 transition-all duration-300 hover:scale-110"
                title="Twitter"
              >
                <Twitter className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a
                href="mailto:contato@futuroLeads.com"
                className="p-3 rounded-full bg-green-500/20 hover:bg-green-500/30 text-green-500 hover:text-green-400 transition-all duration-300 hover:scale-110"
                title="Email"
              >
                <Mail className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6 md:mb-8"></div>

            {/* Copyright */}
            <div className="text-center space-y-2">
              <p className="text-xs md:text-sm text-foreground font-semibold">
                Futuro Leads - By Autech
              </p>
              <p className="text-xs md:text-sm text-muted-foreground">
                Todos os direitos reservados © {new Date().getFullYear()}
              </p>
              <p className="text-xs text-muted-foreground/70">
                Marketing Digital: Do Zero ao Avançado
              </p>
            </div>
          </div>
        </footer>
      </div>

      {/* Action Menu */}
      <ActionMenu 
        moduleTitle={currentModule?.title}
        chapterTitle={currentChapter?.title}
        progressPercentage={progressPercentage}
      />

      {/* Tutor IA */}
      {selectedChapter && selectedChapter !== 'cover' && (
        <TutorAI
          ebookTitle="Marketing Digital: Do Zero ao Avançado"
          moduleTitle={currentModule?.title || 'Módulo'}
          chapterTitle={currentChapter?.title || 'Capítulo'}
          chapterContent={currentChapter?.content || ''}
        />
      )}
    </div>

  );
}
