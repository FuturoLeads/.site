import { useState } from 'react';
import { Search, X, ExternalLink } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  searchGlossary,
  getTermsByCategory,
  getRelatedTerms,
  glossaryTerms,
} from '@/data/glossary';
import type { GlossaryTerm } from '@/data/glossary';

interface GlossaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTerm?: string;
}

export function GlossaryModal({
  isOpen,
  onClose,
  initialTerm,
}: GlossaryModalProps) {
  const [searchQuery, setSearchQuery] = useState(initialTerm || '');
  const [selectedTerm, setSelectedTerm] = useState<GlossaryTerm | null>(null);
  const [activeTab, setActiveTab] = useState<'search' | 'categories'>('search');

  const searchResults = searchQuery ? searchGlossary(searchQuery) : [];
  const categories = [
    'fundamental',
    'strategy',
    'channel',
    'tool',
    'metric',
    'advanced',
  ] as const;

  const categoryLabels: Record<string, string> = {
    fundamental: '📚 Fundamentais',
    strategy: '🎯 Estratégia',
    channel: '📢 Canais',
    tool: '🛠️ Ferramentas',
    metric: '📊 Métricas',
    advanced: '🚀 Avançado',
  };

  const relatedTerms = selectedTerm ? getRelatedTerms(selectedTerm.id) : [];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            📖 Glossário Interativo
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Conteúdo */}
        <div className="flex-1 overflow-y-auto">
          {!selectedTerm ? (
            <div className="p-6 space-y-6">
              {/* Busca */}
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Buscar termo..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Abas */}
              <div className="flex gap-2 border-b border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => setActiveTab('search')}
                  className={`px-4 py-2 font-medium border-b-2 transition-colors ${
                    activeTab === 'search'
                      ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                      : 'border-transparent text-gray-600 dark:text-gray-400'
                  }`}
                >
                  Busca
                </button>
                <button
                  onClick={() => setActiveTab('categories')}
                  className={`px-4 py-2 font-medium border-b-2 transition-colors ${
                    activeTab === 'categories'
                      ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                      : 'border-transparent text-gray-600 dark:text-gray-400'
                  }`}
                >
                  Categorias
                </button>
              </div>

              {/* Resultados de Busca */}
              {activeTab === 'search' && (
                <div className="space-y-3">
                  {searchQuery ? (
                    searchResults.length > 0 ? (
                      searchResults.map((term) => (
                        <button
                          key={term.id}
                          onClick={() => setSelectedTerm(term)}
                          className="w-full text-left p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                        >
                          <p className="font-semibold text-gray-900 dark:text-white">
                            {term.term}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                            {term.definition}
                          </p>
                        </button>
                      ))
                    ) : (
                      <p className="text-center text-gray-500 dark:text-gray-400 py-8">
                        Nenhum termo encontrado
                      </p>
                    )
                  ) : (
                    <p className="text-center text-gray-500 dark:text-gray-400 py-8">
                      Digite para buscar um termo
                    </p>
                  )}
                </div>
              )}

              {/* Categorias */}
              {activeTab === 'categories' && (
                <div className="space-y-4">
                  {categories.map((category) => {
                    const terms = getTermsByCategory(category);
                    return (
                      <div key={category}>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                          {categoryLabels[category]}
                        </h3>
                        <div className="space-y-2">
                          {terms.map((term) => (
                            <button
                              key={term.id}
                              onClick={() => setSelectedTerm(term)}
                              className="w-full text-left p-3 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                            >
                              <p className="font-medium text-gray-900 dark:text-white">
                                {term.term}
                              </p>
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ) : (
            /* Detalhes do Termo */
            <div className="p-6 space-y-6">
              <button
                onClick={() => setSelectedTerm(null)}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-1 mb-4"
              >
                ← Voltar
              </button>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {selectedTerm.term}
                </h3>
                <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                  {categoryLabels[selectedTerm.category]}
                </span>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Definição
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  {selectedTerm.definition}
                </p>
              </div>

              {selectedTerm.example && (
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Exemplo
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 italic bg-gray-50 dark:bg-gray-700 p-3 rounded">
                    "{selectedTerm.example}"
                  </p>
                </div>
              )}

              {relatedTerms.length > 0 && (
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Termos Relacionados
                  </h4>
                  <div className="space-y-2">
                    {relatedTerms.map((term) => (
                      <button
                        key={term.id}
                        onClick={() => setSelectedTerm(term)}
                        className="w-full text-left p-3 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors flex items-center justify-between"
                      >
                        <span className="text-gray-900 dark:text-white">
                          {term.term}
                        </span>
                        <ExternalLink className="w-4 h-4 text-gray-400" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 dark:border-gray-700 p-4 flex justify-end">
          <Button onClick={onClose} variant="outline">
            Fechar
          </Button>
        </div>
      </div>
    </div>
  );
}
