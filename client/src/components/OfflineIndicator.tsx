import { useOffline } from '@/_core/hooks/useOffline';
import { Wifi, WifiOff } from 'lucide-react';

export function OfflineIndicator() {
  const isOffline = useOffline();

  if (!isOffline) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-3 flex items-center gap-3 shadow-lg">
      <WifiOff className="w-5 h-5 flex-shrink-0" />
      <div className="flex-1">
        <p className="font-semibold text-sm">Modo Offline</p>
        <p className="text-xs opacity-90">Você está sem conexão. Conteúdo em cache disponível.</p>
      </div>
    </div>
  );
}

export function OnlineIndicator() {
  const isOffline = useOffline();

  if (isOffline) return null;

  return (
    <div className="fixed bottom-4 right-4 z-40 bg-green-500 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg text-sm">
      <Wifi className="w-4 h-4" />
      <span>Online</span>
    </div>
  );
}
