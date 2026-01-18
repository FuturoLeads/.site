import { useState } from 'react';
import { CheckCircle2, XCircle, Lightbulb, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Exercise } from '@/data/exercises';

interface InteractiveExerciseProps {
  exercise: Exercise;
  onSubmit?: (isCorrect: boolean, selectedOption: number) => void;
}

export function InteractiveExercise({
  exercise,
  onSubmit,
}: InteractiveExerciseProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [timeLeft, setTimeLeft] = useState(exercise.timeLimit || 0);

  const isCorrect =
    selectedOption !== null && exercise.options[selectedOption]?.isCorrect;

  const handleSubmit = () => {
    if (selectedOption === null) return;
    setSubmitted(true);
    onSubmit?.(isCorrect, selectedOption);
  };

  const handleReset = () => {
    setSelectedOption(null);
    setSubmitted(false);
    setShowHint(false);
    setTimeLeft(exercise.timeLimit || 0);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 space-y-6">
      {/* Cabeçalho */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {exercise.title}
          </h3>
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              exercise.difficulty === 'beginner'
                ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                : exercise.difficulty === 'intermediate'
                  ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
                  : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
            }`}
          >
            {exercise.difficulty === 'beginner'
              ? '🟢 Iniciante'
              : exercise.difficulty === 'intermediate'
                ? '🟡 Intermediário'
                : '🔴 Avançado'}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-400">
          {exercise.description}
        </p>
      </div>

      {/* Tipo e Tempo */}
      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">
          {exercise.type === 'scenario'
            ? '📋 Cenário'
            : exercise.type === 'case_study'
              ? '📊 Estudo de Caso'
              : '🎯 Tarefa Prática'}
        </span>
        {exercise.timeLimit && (
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {exercise.timeLimit} minutos
          </div>
        )}
      </div>

      {/* Pergunta */}
      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
        <p className="text-gray-900 dark:text-white font-medium">
          {exercise.question}
        </p>
      </div>

      {/* Opções */}
      <div className="space-y-3">
        {exercise.options.map((option, index) => {
          const isSelected = selectedOption === index;
          const isCorrectOption = option.isCorrect;
          const showResult = submitted && isSelected;

          return (
            <button
              key={index}
              onClick={() => !submitted && setSelectedOption(index)}
              disabled={submitted}
              className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                isSelected && !submitted
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900'
                  : submitted && isSelected
                    ? isCorrectOption
                      ? 'border-green-500 bg-green-50 dark:bg-green-900'
                      : 'border-red-500 bg-red-50 dark:bg-red-900'
                    : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
              } ${submitted ? 'cursor-default' : 'cursor-pointer'}`}
            >
              <div className="flex items-start justify-between">
                <span
                  className={`text-gray-900 dark:text-white ${
                    isSelected ? 'font-semibold' : ''
                  }`}
                >
                  {option.text}
                </span>
                {showResult && (
                  <div className="flex-shrink-0 ml-3">
                    {isCorrectOption ? (
                      <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400" />
                    ) : (
                      <XCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                    )}
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Dica */}
      {!submitted && exercise.hint && (
        <button
          onClick={() => setShowHint(!showHint)}
          className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          <Lightbulb className="w-4 h-4" />
          {showHint ? 'Esconder dica' : 'Mostrar dica'}
        </button>
      )}

      {showHint && exercise.hint && (
        <div className="bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <p className="text-blue-900 dark:text-blue-100 text-sm">
            💡 <strong>Dica:</strong> {exercise.hint}
          </p>
        </div>
      )}

      {/* Resultado e Explicação */}
      {submitted && (
        <div
          className={`rounded-lg p-4 ${
            isCorrect
              ? 'bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-800'
              : 'bg-red-50 dark:bg-red-900 border border-red-200 dark:border-red-800'
          }`}
        >
          <div className="flex items-start gap-3">
            {isCorrect ? (
              <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
            ) : (
              <XCircle className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
            )}
            <div>
              <p
                className={`font-semibold mb-2 ${
                  isCorrect
                    ? 'text-green-900 dark:text-green-100'
                    : 'text-red-900 dark:text-red-100'
                }`}
              >
                {isCorrect ? '✅ Resposta Correta!' : '❌ Resposta Incorreta'}
              </p>
              <p
                className={`text-sm ${
                  isCorrect
                    ? 'text-green-800 dark:text-green-200'
                    : 'text-red-800 dark:text-red-200'
                }`}
              >
                {exercise.explanation}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Botões de Ação */}
      <div className="flex gap-3">
        {!submitted ? (
          <Button
            onClick={handleSubmit}
            disabled={selectedOption === null}
            className="flex-1"
          >
            Verificar Resposta
          </Button>
        ) : (
          <>
            <Button onClick={handleReset} variant="outline" className="flex-1">
              Tentar Novamente
            </Button>
            <Button className="flex-1">Próximo Exercício</Button>
          </>
        )}
      </div>
    </div>
  );
}
