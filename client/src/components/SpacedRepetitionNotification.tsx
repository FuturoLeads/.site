import { useEffect, useState } from 'react';
import { AlertCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SpacedRepetitionNotificationProps {
  dueItemsCount: number;
  onDismiss?: () => void;
  onNavigate?: () => void;
}

export function SpacedRepetitionNotification({
  dueItemsCount,
  onDismiss,
  onNavigate,
}: SpacedRepetitionNotificationProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Auto-hide after 10 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible || dueItemsCount === 0) {
    return null;
  }

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  const handleNavigate = () => {
    setIsVisible(false);
    onNavigate?.();
  };

  return (
    <div className="fixed bottom-4 right-4 max-w-md z-50 animate-in slide-in-from-bottom-5">
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg shadow-lg p-4 flex items-start gap-4">
        <div className="flex-shrink-0 mt-0.5">
          <AlertCircle className="w-5 h-5" />
        </div>

        <div className="flex-1">
          <h3 className="font-semibold mb-1">
            {dueItemsCount} {dueItemsCount === 1 ? 'item' : 'itens'} para revisar
          </h3>
          <p className="text-sm text-orange-100 mb-3">
            Você tem {dueItemsCount} {dueItemsCount === 1 ? 'conceito' : 'conceitos'} vencido
            {dueItemsCount === 1 ? '' : 's'} no sistema de revisão espaçada. Revise agora para
            melhorar sua retenção!
          </p>

          <div className="flex gap-2">
            <Button
              onClick={handleNavigate}
              className="bg-white text-orange-600 hover:bg-orange-50 text-sm h-8"
            >
              Revisar Agora
            </Button>
            <Button
              onClick={handleDismiss}
              variant="outline"
              className="border-white text-white hover:bg-white hover:bg-opacity-10 text-sm h-8"
            >
              Depois
            </Button>
          </div>
        </div>

        <button
          onClick={handleDismiss}
          className="flex-shrink-0 text-orange-100 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
