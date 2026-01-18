# 📋 Guia de Implementação: Persistência de Dados e Notificações

## 📌 Visão Geral

Este documento fornece um guia prático para completar as funcionalidades pendentes do projeto, com foco em **persistência de dados** e **sistema de notificações** para o Spaced Repetition.

## ✅ Status Atual da Persistência

A boa notícia é que **a maioria da persistência de dados já está implementada**! Aqui está o que já está pronto:

| Funcionalidade | Status | Arquivo |
| :--- | :--- | :--- |
| Learning Paths (Progresso) | ✅ Completo | `server/features.ts` (linhas 30-64) |
| Exercises (Exercícios) | ✅ Completo | `server/features.ts` (linhas 66-93) |
| Badges (Certificados) | ✅ Completo | `server/features.ts` (linhas 95-120) |
| User Notes (Anotações) | ✅ Completo | `server/features.ts` (linhas 122-159) |
| Glossary (Glossário) | ✅ Completo | `server/features.ts` (linhas 161-180) |
| Forum (Fórum) | ✅ Completo | `server/features.ts` (linhas 182-225) |
| Performance Analytics | ✅ Completo | `server/features.ts` (linhas 227-281) |
| Spaced Repetition | ⚠️ Parcial | `server/features.ts` (linhas 283-352) |

## 🔧 Melhorias Necessárias

### 1. Corrigir a Função `getDueForReview` (Spaced Repetition)

**Problema:** A função `getDueForReview` não está filtrando corretamente os itens vencidos.

**Localização:** `server/features.ts`, linhas 295-309

**Solução:**

```typescript
export async function getDueForReview(userId: number) {
  const db = await getDb();
  if (!db) return [];

  const now = new Date();
  return db
    .select()
    .from(spacedRepetition)
    .where(
      and(
        eq(spacedRepetition.userId, userId),
        // Comparar nextReviewDate com a data atual
        sql`${spacedRepetition.nextReviewDate} <= ${now}`
      )
    );
}
```

**Nota:** Você precisará importar `sql` do `drizzle-orm`:

```typescript
import { eq, and, desc, sql } from "drizzle-orm";
```

### 2. Implementar Sistema de Notificações

Crie um novo arquivo `server/notificationService.ts`:

```typescript
/**
 * Serviço de notificações para Spaced Repetition
 */

import { getDb } from "./db";
import { getDueForReview } from "./features";
import { spacedRepetition } from "../drizzle/schema";
import { eq } from "drizzle-orm";

export interface Notification {
  userId: number;
  type: "spaced_repetition_due" | "module_completed" | "badge_earned";
  title: string;
  message: string;
  data: Record<string, any>;
  createdAt: Date;
  read: boolean;
}

// Armazenar notificações em memória (em produção, usar banco de dados)
const notifications: Map<number, Notification[]> = new Map();

export async function checkDueReviews(userId: number): Promise<Notification[]> {
  const dueItems = await getDueForReview(userId);
  
  if (dueItems.length === 0) return [];

  const notifs: Notification[] = dueItems.map((item) => ({
    userId,
    type: "spaced_repetition_due",
    title: "📚 Revisão Pendente",
    message: `Você tem ${dueItems.length} item(ns) para revisar no módulo "${item.moduleId}"`,
    data: {
      moduleId: item.moduleId,
      chapterId: item.chapterId,
      itemId: item.id,
    },
    createdAt: new Date(),
    read: false,
  }));

  // Armazenar notificações
  if (!notifications.has(userId)) {
    notifications.set(userId, []);
  }
  notifications.get(userId)!.push(...notifs);

  return notifs;
}

export function getUserNotifications(userId: number): Notification[] {
  return notifications.get(userId) || [];
}

export function markNotificationAsRead(userId: number, index: number): void {
  const userNotifs = notifications.get(userId);
  if (userNotifs && userNotifs[index]) {
    userNotifs[index].read = true;
  }
}

export function clearNotifications(userId: number): void {
  notifications.delete(userId);
}
```

### 3. Adicionar Rotas de Notificações ao tRPC

Atualize `server/featureRouters.ts` para incluir:

```typescript
export const notificationsRouter = router({
  getNotifications: publicProcedure
    .input(z.object({ userId: z.number() }))
    .query(async ({ input }) => {
      const notificationService = await import("./notificationService");
      return notificationService.getUserNotifications(input.userId);
    }),

  checkDueReviews: publicProcedure
    .input(z.object({ userId: z.number() }))
    .mutation(async ({ input }) => {
      const notificationService = await import("./notificationService");
      return notificationService.checkDueReviews(input.userId);
    }),

  markAsRead: publicProcedure
    .input(z.object({ userId: z.number(), notificationIndex: z.number() }))
    .mutation(async ({ input }) => {
      const notificationService = await import("./notificationService");
      notificationService.markNotificationAsRead(input.userId, input.notificationIndex);
      return { success: true };
    }),
});
```

Depois, adicione ao `appRouter` em `server/routers.ts`:

```typescript
import { notificationsRouter } from "./featureRouters";

export const appRouter = router({
  // ... outras rotas
  notifications: notificationsRouter,
});
```

### 4. Integrar Notificações no Frontend

Crie um componente `client/src/components/NotificationCenter.tsx`:

```typescript
import { useEffect, useState } from "react";
import { trpc } from "@/lib/trpc";
import { Bell, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Notification {
  userId: number;
  type: string;
  title: string;
  message: string;
  data: Record<string, any>;
  createdAt: Date;
  read: boolean;
}

export function NotificationCenter({ userId }: { userId: number }) {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const checkDueReviews = trpc.notifications.checkDueReviews.useMutation();
  const getNotifications = trpc.notifications.getNotifications.useQuery({ userId });
  const markAsRead = trpc.notifications.markAsRead.useMutation();

  useEffect(() => {
    // Verificar notificações a cada 5 minutos
    const interval = setInterval(() => {
      checkDueReviews.mutate({ userId });
    }, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, [userId]);

  useEffect(() => {
    if (getNotifications.data) {
      setNotifications(getNotifications.data);
    }
  }, [getNotifications.data]);

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="relative"
      >
        <Bell className="w-5 h-5" />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-lg">Notificações</h3>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-4 text-center text-gray-500">
                Nenhuma notificação
              </div>
            ) : (
              notifications.map((notif, index) => (
                <div
                  key={index}
                  className={`p-4 border-b border-gray-100 dark:border-gray-800 ${
                    !notif.read ? "bg-blue-50 dark:bg-blue-900/20" : ""
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <p className="font-semibold text-sm">{notif.title}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {notif.message}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => markAsRead.mutate({ userId, notificationIndex: index })}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
```

## 🎯 Próximos Passos

1. **Implementar as correções acima** nos arquivos indicados
2. **Testar a persistência de dados** com um usuário real
3. **Validar o sistema de notificações** verificando se as notificações aparecem corretamente
4. **Implementar o gerenciamento de vídeos** (v2.8.0) - consulte a seção abaixo

## 🎬 Gerenciamento de Vídeos (Opcional)

Se você deseja adicionar suporte a vídeos, aqui está um exemplo básico:

### Schema do Banco de Dados

Adicione à `drizzle/schema.ts`:

```typescript
export const videos = mysqlTable("videos", {
  id: int("id").autoincrement().primaryKey(),
  moduleId: varchar("moduleId", { length: 64 }).notNull(),
  chapterId: varchar("chapterId", { length: 64 }).notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  videoUrl: text("videoUrl").notNull(), // URL do S3 ou provedor de vídeo
  duration: int("duration"), // Duração em segundos
  thumbnailUrl: text("thumbnailUrl"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type Video = typeof videos.$inferSelect;
export type InsertVideo = typeof videos.$inferInsert;
```

### Componente de Reprodução

Crie `client/src/components/VideoPlayer.tsx`:

```typescript
import { useState } from "react";
import { Play, Volume2, Maximize } from "lucide-react";

interface VideoPlayerProps {
  videoUrl: string;
  title: string;
  duration?: number;
}

export function VideoPlayer({ videoUrl, title, duration }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full bg-black rounded-lg overflow-hidden">
      <video
        src={videoUrl}
        controls
        className="w-full h-auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        Seu navegador não suporta reprodução de vídeo.
      </video>
      <div className="p-4 bg-gray-900 text-white">
        <h3 className="font-bold">{title}</h3>
        {duration && (
          <p className="text-sm text-gray-400">
            Duração: {Math.floor(duration / 60)}:{(duration % 60).toString().padStart(2, "0")}
          </p>
        )}
      </div>
    </div>
  );
}
```

## 📚 Referências

*   [Drizzle ORM Documentation](https://orm.drizzle.team/)
*   [tRPC Documentation](https://trpc.io/)
*   [React Query Documentation](https://tanstack.com/query/latest)

---

**Desenvolvido com ❤️ pela FuturoLeads**
