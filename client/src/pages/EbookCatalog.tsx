import { ebooks } from '@/data/ebooks';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Lock, BookOpen } from 'lucide-react';
import { useLocation } from 'wouter';

export default function EbookCatalog() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-800 dark:to-indigo-800 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Catálogo de E-books</h1>
          <p className="text-blue-100 text-lg">
            Escolha os cursos que melhor se adequam ao seu desenvolvimento profissional
          </p>
        </div>
      </div>

      {/* Catalog Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ebooks.map((ebook) => (
            <div
              key={ebook.id}
              className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Cover */}
              <div
                className={`bg-gradient-to-br ${ebook.color} h-48 flex items-center justify-center relative overflow-hidden`}
              >
                <div className="text-7xl">{ebook.cover}</div>
                {ebook.isPurchased && (
                  <div className="absolute top-3 right-3 bg-green-500 rounded-full p-2">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                )}
                {!ebook.isPurchased && (
                  <div className="absolute top-3 right-3 bg-gray-500/80 rounded-full p-2">
                    <Lock className="w-5 h-5 text-white" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4 space-y-3">
                <div>
                  <h3 className="font-bold text-lg text-foreground">{ebook.title}</h3>
                  <p className="text-sm text-muted-foreground">{ebook.subtitle}</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="bg-gray-100 dark:bg-gray-700 rounded p-2">
                    <div className="font-semibold text-foreground">{ebook.modules}</div>
                    <div className="text-muted-foreground">Módulos</div>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded p-2">
                    <div className="font-semibold text-foreground">{ebook.chapters}</div>
                    <div className="text-muted-foreground">Capítulos</div>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded p-2">
                    <div className="font-semibold text-foreground">{ebook.level.split(' ')[0]}</div>
                    <div className="text-muted-foreground">Nível</div>
                  </div>
                </div>

                {/* Progress or Price */}
                {ebook.isPurchased ? (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progresso</span>
                      <span className="font-semibold text-foreground">{ebook.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full transition-all"
                        style={{ width: `${ebook.progress}%` }}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="text-2xl font-bold text-foreground">
                    R$ {ebook.price.toFixed(2).replace('.', ',')}
                  </div>
                )}

                {/* Button */}
                <Button
                  onClick={() => {
                    if (ebook.isPurchased) {
                      setLocation('/');
                    }
                  }}
                  className={`w-full ${
                    ebook.isPurchased
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  {ebook.isPurchased ? (
                    <>
                      <BookOpen className="w-4 h-4 mr-2" />
                      Acessar Curso
                    </>
                  ) : (
                    'Compre Agora'
                  )}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-blue-50 dark:bg-blue-900/20 py-12 px-4 mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Por que escolher nossos cursos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-4xl mb-2">📚</div>
              <h3 className="font-semibold text-foreground mb-2">Conteúdo Atualizado</h3>
              <p className="text-muted-foreground text-sm">
                Atualizamos regularmente com as últimas tendências do mercado
              </p>
            </div>
            <div>
              <div className="text-4xl mb-2">🎯</div>
              <h3 className="font-semibold text-foreground mb-2">Prático e Objetivo</h3>
              <p className="text-muted-foreground text-sm">
                Aprenda fazendo com exercícios e casos reais do mercado
              </p>
            </div>
            <div>
              <div className="text-4xl mb-2">🏆</div>
              <h3 className="font-semibold text-foreground mb-2">Certificados</h3>
              <p className="text-muted-foreground text-sm">
                Receba certificado profissional ao completar cada curso
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
