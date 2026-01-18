import { z } from 'zod';
import { publicProcedure, router } from './_core/trpc';
import { askTutor, generateExercises, generateSummary, TutorContext } from './tutorAI';

export const tutorRouter = router({
  /**
   * Enviar pergunta ao tutor IA
   */
  askQuestion: publicProcedure
    .input(
      z.object({
        question: z.string().min(1, 'Pergunta não pode ser vazia'),
        ebookTitle: z.string(),
        moduleTitle: z.string(),
        chapterTitle: z.string(),
        chapterContent: z.string(),
        conversationHistory: z
          .array(
            z.object({
              role: z.enum(['user', 'assistant']),
              content: z.string(),
            })
          )
          .optional()
          .default([]),
      })
    )
    .mutation(async ({ input }) => {
      const context: TutorContext = {
        ebookTitle: input.ebookTitle,
        moduleTitle: input.moduleTitle,
        chapterTitle: input.chapterTitle,
        chapterContent: input.chapterContent,
      };

      const response = await askTutor(input.question, context, input.conversationHistory);
      return {
        success: true,
        response,
        timestamp: new Date(),
      };
    }),

  /**
   * Gerar exercícios para um capítulo
   */
  generateExercises: publicProcedure
    .input(
      z.object({
        ebookTitle: z.string(),
        moduleTitle: z.string(),
        chapterTitle: z.string(),
        chapterContent: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const context: TutorContext = {
        ebookTitle: input.ebookTitle,
        moduleTitle: input.moduleTitle,
        chapterTitle: input.chapterTitle,
        chapterContent: input.chapterContent,
      };

      const exercises = await generateExercises(context);
      return {
        success: true,
        exercises,
        timestamp: new Date(),
      };
    }),

  /**
   * Gerar resumo de um capítulo
   */
  generateSummary: publicProcedure
    .input(
      z.object({
        ebookTitle: z.string(),
        moduleTitle: z.string(),
        chapterTitle: z.string(),
        chapterContent: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const context: TutorContext = {
        ebookTitle: input.ebookTitle,
        moduleTitle: input.moduleTitle,
        chapterTitle: input.chapterTitle,
        chapterContent: input.chapterContent,
      };

      const summary = await generateSummary(context);
      return {
        success: true,
        summary,
        timestamp: new Date(),
      };
    }),
});
