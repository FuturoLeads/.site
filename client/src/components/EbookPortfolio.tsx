import { ebooks } from '@/data/ebooks';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Lock, ArrowRight } from 'lucide-react';
import { useLocation } from 'wouter';

interface EbookPortfolioProps {
  onSelectEbook?: (ebookId: string) => void;
}

export function EbookPortfolio({ onSelectEbook }: EbookPortfolioProps) {
  const [, setLocation] = useLocation();

  return (
    <div className="w-full py-12 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Nossos E-books
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Escolha entre nossos cursos especializados e comece sua jornada de aprendizado
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {ebooks.map((ebook) => (
            <div
              key={ebook.id}
              className="group flex flex-col bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Cover */}
              <div
                className={`bg-gradient-to-br ${ebook.color} h-40 flex items-center justify-center relative overflow-hidden`}
              >
                <div className="text-6xl">{ebook.cover}</div>
                {ebook.isPurchased && (
                  <div className="absolute top-2 right-2 bg-green-500 rounded-full p-1.5">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                )}
                {!ebook.isPurchased && (
                  <div className="absolute top-2 right-2 bg-gray-500/80 rounded-full p-1.5">
                    <Lock className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-bold text-foreground mb-1">{ebook.title}</h3>
                <p className="text-xs text-muted-foreground mb-3">{ebook.subtitle}</p>

                {/* Quick Stats */}
                <div className="flex gap-2 mb-4 text-xs">
                  <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-foreground">
                    {ebook.modules} módulos
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-foreground">
                    {ebook.level}
                  </span>
                </div>

                {/* Price or Progress */}
                <div className="mb-4 flex-1">
                  {ebook.isPurchased ? (
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Progresso</span>
                        <span className="font-semibold text-green-600">{ebook.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                        <div
                          className="bg-green-500 h-1.5 rounded-full transition-all"
                          style={{ width: `${ebook.progress}%` }}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="text-xl font-bold text-foreground">
                      R$ {ebook.price.toFixed(2).replace('.', ',')}
                    </div>
                  )}
                </div>

                {/* Button */}
                <Button
                  onClick={() => {
                    if (ebook.isPurchased) {
                      onSelectEbook?.(ebook.id);
                    } else {
                      setLocation('/catalog');
                    }
                  }}
                  className={`w-full text-sm ${
                    ebook.isPurchased
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  {ebook.isPurchased ? 'Acessar' : 'Compre'}
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button
            onClick={() => setLocation('/catalog')}
            variant="outline"
            className="text-base px-8 py-2"
          >
            Ver Catálogo Completo
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
