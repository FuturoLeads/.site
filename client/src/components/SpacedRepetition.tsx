import { useState, useEffect } from 'react';
import { Calendar, BookOpen, RotateCcw, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ReviewItem {
  id: string;
  moduleId: string;
  moduleName: string;
  chapterId: string;
  chapterName: string;
  nextReviewDate: Date;
  repetitionCount: number;
  easeFactor: number;
  interval: number;
  lastReviewedAt?: Date;
  daysUntilReview: number;
}

interface SpacedRepetitionProps {
  reviewItems: ReviewItem[];
  onReviewComplete?: (itemId: string, quality: number) => void;
}

export function SpacedRepetition({
  reviewItems,
  onReviewComplete,
}: SpacedRepetitionProps) {
  const [selectedItem, setSelectedItem] = useState<ReviewItem | null>(null);
  const [reviewQuality, setReviewQuality] = useState<number | null>(null);

  // Separar itens por status
  const dueForReview = reviewItems.filter((item) => item.daysUntilReview <= 0);
  const upcomingReview = reviewItems.filter((item) => item.daysUntilReview > 0);

  const handleReviewComplete = (quality: number) => {
    if (!selectedItem) return;

    // Implementar algoritmo SM-2 (Supermemo 2)
    const newEaseFactor = Math.max(
      1.3,
      selectedItem.easeFactor +
        0.1 -
        (5 - quality) * (0.08 + (5 - quality) * 0.02)
    );

    let newInterval = 1;
    if (selectedItem.repetitionCount === 0) {
      newInterval = 1;
    } else if (selectedItem.repetitionCount === 1) {
      newInterval = 3;
    } else {
      newInterval = Math.round(
        selectedItem.interval * newEaseFactor
      );
    }

    onReviewComplete?.(selectedItem.id, quality);
    setSelectedItem(null);
    setReviewQuality(null);
  };

  return (
    <div className="space-y-6">
      {/* Cabeçalho */}
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950 dark:to-blue-950 rounded-lg p-6 border border-indigo-200 dark:border-indigo-800">
        <h2 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 flex items-center gap-2 mb-2">
          <RotateCcw className="w-6 h-6" />
          Sistema de Revisão Espaçada
        </h2>
        <p className="text-indigo-800 dark:text-indigo-200">
          Revise conceitos no momento ideal para máxima retenção de memória
        </p>
      </div>

      {!selectedItem ? (
        <div className="space-y-6">
          {/* Resumo */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-red-50 dark:bg-red-900 rounded-lg p-4 border border-red-200 dark:border-red-800">
              <p className="text-sm font-medium text-red-700 dark:text-red-300 mb-1">
                Vencidas
              </p>
              <p className="text-3xl font-bold text-red-900 dark:text-red-100">
                {dueForReview.length}
              </p>
              <p className="text-xs text-red-600 dark:text-red-400 mt-2">
                Revisar agora
              </p>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900 rounded-lg p-4 border border-yellow-200 dark:border-yellow-800">
              <p className="text-sm font-medium text-yellow-700 dark:text-yellow-300 mb-1">
                Próximas
              </p>
              <p className="text-3xl font-bold text-yellow-900 dark:text-yellow-100">
                {upcomingReview.length}
              </p>
              <p className="text-xs text-yellow-600 dark:text-yellow-400 mt-2">
                Agendadas
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900 rounded-lg p-4 border border-green-200 dark:border-green-800">
              <p className="text-sm font-medium text-green-700 dark:text-green-300 mb-1">
                Total
              </p>
              <p className="text-3xl font-bold text-green-900 dark:text-green-100">
                {reviewItems.length}
              </p>
              <p className="text-xs text-green-600 dark:text-green-400 mt-2">
                Itens de revisão
              </p>
            </div>
          </div>

          {/* Itens Vencidos */}
          {dueForReview.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                🔴 Revisar Agora ({dueForReview.length})
              </h3>
              <div className="space-y-2">
                {dueForReview.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedItem(item)}
                    className="w-full text-left bg-red-50 dark:bg-red-900 hover:bg-red-100 dark:hover:bg-red-800 rounded-lg p-4 border border-red-200 dark:border-red-800 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {item.chapterName}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {item.moduleName}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-red-700 dark:text-red-300">
                          {item.repetitionCount} revisões
                        </p>
                        <p className="text-xs text-red-600 dark:text-red-400">
                          Vencida há {Math.abs(item.daysUntilReview)} dias
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Próximas Revisões */}
          {upcomingReview.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Próximas Revisões ({upcomingReview.length})
              </h3>
              <div className="space-y-2">
                {upcomingReview
                  .sort((a, b) => a.daysUntilReview - b.daysUntilReview)
                  .slice(0, 5)
                  .map((item) => (
                    <div
                      key={item.id}
                      className="bg-yellow-50 dark:bg-yellow-900 rounded-lg p-4 border border-yellow-200 dark:border-yellow-800"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white">
                            {item.chapterName}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {item.moduleName}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-yellow-700 dark:text-yellow-300">
                            {item.repetitionCount} revisões
                          </p>
                          <p className="text-xs text-yellow-600 dark:text-yellow-400">
                            Em {item.daysUntilReview} dias
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {reviewItems.length === 0 && (
            <div className="text-center py-12 text-gray-500 dark:text-gray-400">
              <BookOpen className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>Nenhum item de revisão agendado</p>
              <p className="text-sm mt-2">
                Complete módulos para ativar a revisão espaçada
              </p>
            </div>
          )}
        </div>
      ) : (
        /* Tela de Revisão */
        <div className="space-y-6">
          <button
            onClick={() => setSelectedItem(null)}
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-1"
          >
            ← Voltar
          </button>

          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 space-y-6">
            {/* Informações */}
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                Módulo: {selectedItem.moduleName}
              </p>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {selectedItem.chapterName}
              </h2>
              <div className="flex gap-4 mt-3 text-sm text-gray-600 dark:text-gray-400">
                <span>📚 Revisão #{selectedItem.repetitionCount + 1}</span>
                <span>
                  ⏱️ Intervalo: {selectedItem.interval} dias
                </span>
              </div>
            </div>

            {/* Pergunta/Conteúdo */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
              <p className="text-gray-900 dark:text-white">
                Você se lembra do conteúdo deste capítulo?
              </p>
            </div>

            {/* Avaliação */}
            {reviewQuality === null ? (
              <div className="space-y-3">
                <p className="font-medium text-gray-900 dark:text-white">
                  Como foi sua recordação?
                </p>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    onClick={() => handleReviewComplete(1)}
                    className="p-4 rounded-lg bg-red-100 dark:bg-red-900 hover:bg-red-200 dark:hover:bg-red-800 border border-red-300 dark:border-red-700 transition-colors"
                  >
                    <p className="text-2xl font-bold text-red-700 dark:text-red-300">
                      1
                    </p>
                    <p className="text-xs text-red-600 dark:text-red-400 mt-1">
                      Não lembrei
                    </p>
                  </button>
                  <button
                    onClick={() => handleReviewComplete(3)}
                    className="p-4 rounded-lg bg-yellow-100 dark:bg-yellow-900 hover:bg-yellow-200 dark:hover:bg-yellow-800 border border-yellow-300 dark:border-yellow-700 transition-colors"
                  >
                    <p className="text-2xl font-bold text-yellow-700 dark:text-yellow-300">
                      3
                    </p>
                    <p className="text-xs text-yellow-600 dark:text-yellow-400 mt-1">
                      Lembrei com dif.
                    </p>
                  </button>
                  <button
                    onClick={() => handleReviewComplete(5)}
                    className="p-4 rounded-lg bg-green-100 dark:bg-green-900 hover:bg-green-200 dark:hover:bg-green-800 border border-green-300 dark:border-green-700 transition-colors"
                  >
                    <p className="text-2xl font-bold text-green-700 dark:text-green-300">
                      5
                    </p>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      Lembrei fácil
                    </p>
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-green-50 dark:bg-green-900 rounded-lg p-4 flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400" />
                <div>
                  <p className="font-semibold text-green-900 dark:text-green-100">
                    ✅ Revisão Registrada!
                  </p>
                  <p className="text-sm text-green-800 dark:text-green-200">
                    Próxima revisão agendada para breve
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
