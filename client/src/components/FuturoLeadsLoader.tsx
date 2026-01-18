import { useEffect, useState } from 'react';

export function FuturoLeadsLoader() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simular progresso de carregamento
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) {
          return prev;
        }
        // Progresso mais rápido no início, mais lento no final
        const increment = Math.random() * (prev > 50 ? 2 : 8);
        return Math.min(prev + increment, 95);
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Completar carregamento após 2.5 segundos
    const timer = setTimeout(() => {
      setProgress(100);
      // Ocultar loader após animação
      setTimeout(() => {
        setIsVisible(false);
      }, 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-600 via-purple-500 to-orange-500 flex flex-col items-center justify-center z-50">
      {/* Logo Container */}
      <div className="mb-12 animate-fade-in">
        <div className="relative w-24 h-24 md:w-32 md:h-32">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl animate-pulse" />
          
          {/* Logo */}
          <img
            src="/futuro-leads-icon.png"
            alt="Futuro Leads"
            className="w-full h-full object-contain relative z-10 drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Text */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Futuro Leads
        </h1>
        <p className="text-white/80 text-sm md:text-base">
          Carregando sua jornada de aprendizado...
        </p>
      </div>

      {/* Progress Bar Container */}
      <div className="w-64 md:w-80 px-4">
        {/* Background bar */}
        <div className="h-2 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
          {/* Progress fill */}
          <div
            className="h-full bg-gradient-to-r from-white to-white/70 rounded-full transition-all duration-300 ease-out shadow-lg"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress text */}
        <div className="text-center mt-4">
          <p className="text-white/80 text-xs md:text-sm font-medium">
            {Math.round(progress)}%
          </p>
        </div>
      </div>

      {/* Animated dots */}
      <div className="flex gap-2 mt-8">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2 h-2 bg-white rounded-full animate-bounce"
            style={{
              animationDelay: `${i * 0.2}s`,
              animationDuration: '1.4s',
            }}
          />
        ))}
      </div>

      {/* Styles */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}
