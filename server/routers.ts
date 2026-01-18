import { getSessionCookieOptions } from "./_core/cookies";
import { COOKIE_NAME } from "../shared/const";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { invokeOpenAI } from "./_core/openai";
import {
  learningRouter,
  exercisesRouter,
  badgesRouter,
  notesRouter,
  glossaryRouter,
  forumRouter,
  performanceRouter,
  spacedRepetitionRouter,
} from "./featureRouters";
import { tutorRouter } from "./tutorRouters";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  chat: router({
    askAboutModule: publicProcedure
      .input(
        z.object({
          message: z.string(),
          moduleContext: z.string().optional(),
          chapterContext: z.string().optional(),
          conversationHistory: z
            .array(
              z.object({
                role: z.enum(["user", "assistant"]),
                content: z.string(),
              })
            )
            .optional(),
        })
      )
      .mutation(async ({ input }) => {
        const { message, moduleContext, chapterContext, conversationHistory = [] } = input;

        const contextPrompt = `Você é um assistente de IA especializado em Marketing Digital. 
${moduleContext ? `O usuário está estudando: ${moduleContext}` : ""}
${chapterContext ? `Capítulo atual: ${chapterContext}` : ""}

Responda perguntas de forma clara, concisa e educacional, sempre relacionadas ao conteúdo de marketing digital. 
Se a pergunta não for sobre marketing digital, redirecione gentilmente para o tema.
Mantenha as respostas entre 100-300 palavras.`;

        try {
          const messages = [
            {
              role: "system" as const,
              content: contextPrompt,
            },
            ...conversationHistory.map((msg) => ({
              role: msg.role as "user" | "assistant",
              content: msg.content,
            })),
            {
              role: "user" as const,
              content: message,
            },
          ];

          const assistantMessage = await invokeOpenAI(messages);

          return {
            success: true,
            data: assistantMessage,
          };
        } catch (error) {
          console.error("[Chat] Error invoking OpenAI:", error);
          return {
            success: false,
            data: "Desculpe, ocorreu um erro ao processar sua pergunta. Tente novamente mais tarde.",
          };
        }
      }),
  }),

  learning: learningRouter,
  exercises: exercisesRouter,
  badges: badgesRouter,
  notes: notesRouter,
  glossary: glossaryRouter,
  forum: forumRouter,
  performance: performanceRouter,
  spacedRepetition: spacedRepetitionRouter,
  tutor: tutorRouter,
});

export type AppRouter = typeof appRouter;
