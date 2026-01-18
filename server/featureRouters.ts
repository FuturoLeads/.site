/**
 * tRPC routers para as novas features de aprendizado
 */

import { z } from "zod";
import { publicProcedure, router } from "./_core/trpc";
import * as features from "./features";

export const learningRouter = router({
  getProgress: publicProcedure
    .input(z.object({ userId: z.number() }))
    .query(async ({ input }) => {
      return features.getLearningPathsByUser(input.userId);
    }),

  updateProgress: publicProcedure
    .input(
      z.object({
        userId: z.number(),
        moduleId: z.string(),
        progress: z.number().min(0).max(100),
        isCompleted: z.boolean().optional(),
      })
    )
    .mutation(async ({ input }) => {
      return features.updateLearningPath(input.userId, input.moduleId, {
        progress: input.progress,
        isCompleted: input.isCompleted,
        completedAt: input.isCompleted ? new Date() : undefined,
      });
    }),
});

export const exercisesRouter = router({
  getByChapter: publicProcedure
    .input(z.object({ moduleId: z.string(), chapterId: z.string() }))
    .query(async ({ input }) => {
      return features.getExercisesByChapter(input.moduleId, input.chapterId);
    }),

  submitAnswer: publicProcedure
    .input(
      z.object({
        userId: z.number(),
        exerciseId: z.number(),
        answer: z.record(z.string(), z.unknown()),
        isCorrect: z.boolean(),
        feedback: z.string().optional(),
      })
    )
    .mutation(async ({ input }) => {
      return features.submitExerciseAnswer({
        userId: input.userId,
        exerciseId: input.exerciseId,
        answer: input.answer,
        isCorrect: input.isCorrect,
        feedback: input.feedback,
      } as any);
    }),

  getSubmissions: publicProcedure
    .input(z.object({ userId: z.number(), exerciseId: z.number() }))
    .query(async ({ input }) => {
      return features.getUserExerciseSubmissions(input.userId, input.exerciseId);
    }),
});

export const badgesRouter = router({
  getUserBadges: publicProcedure
    .input(z.object({ userId: z.number() }))
    .query(async ({ input }) => {
      return features.getUserBadges(input.userId);
    }),

  awardBadge: publicProcedure
    .input(
      z.object({
        userId: z.number(),
        moduleId: z.string(),
        badgeName: z.string(),
        badgeIcon: z.string().optional(),
        description: z.string().optional(),
      })
    )
    .mutation(async ({ input }) => {
      return features.awardBadge({
        userId: input.userId,
        moduleId: input.moduleId,
        badgeName: input.badgeName,
        badgeIcon: input.badgeIcon,
        description: input.description,
      });
    }),
});

export const notesRouter = router({
  getByChapter: publicProcedure
    .input(
      z.object({
        userId: z.number(),
        moduleId: z.string(),
        chapterId: z.string(),
      })
    )
    .query(async ({ input }) => {
      return features.getUserNotesByChapter(input.userId, input.moduleId, input.chapterId);
    }),

  create: publicProcedure
    .input(
      z.object({
        userId: z.number(),
        moduleId: z.string(),
        chapterId: z.string(),
        content: z.string(),
        color: z.string().optional(),
      })
    )
    .mutation(async ({ input }) => {
      return features.createUserNote({
        userId: input.userId,
        moduleId: input.moduleId,
        chapterId: input.chapterId,
        content: input.content,
        color: input.color,
      });
    }),

  update: publicProcedure
    .input(
      z.object({
        noteId: z.number(),
        content: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      return features.updateUserNote(input.noteId, input.content);
    }),

  delete: publicProcedure
    .input(z.object({ noteId: z.number() }))
    .mutation(async ({ input }) => {
      return features.deleteUserNote(input.noteId);
    }),
});

export const glossaryRouter = router({
  search: publicProcedure
    .input(z.object({ keyword: z.string() }))
    .query(async ({ input }) => {
      return features.searchGlossaryTerms(input.keyword);
    }),

  getByCategory: publicProcedure
    .input(z.object({ category: z.string() }))
    .query(async ({ input }) => {
      return features.getGlossaryTermsByCategory(input.category);
    }),

  getByModule: publicProcedure
    .input(z.object({ moduleId: z.string() }))
    .query(async ({ input }) => {
      return features.getGlossaryTermsByModule(input.moduleId);
    }),
});

export const forumRouter = router({
  getPostsByModule: publicProcedure
    .input(z.object({ moduleId: z.string(), limit: z.number().optional() }))
    .query(async ({ input }) => {
      return features.getForumPostsByModule(input.moduleId, input.limit);
    }),

  createPost: publicProcedure
    .input(
      z.object({
        userId: z.number(),
        moduleId: z.string(),
        title: z.string(),
        content: z.string(),
        category: z.enum(["doubt", "discussion", "resource", "success_story"]),
      })
    )
    .mutation(async ({ input }) => {
      return features.createForumPost({
        userId: input.userId,
        moduleId: input.moduleId,
        title: input.title,
        content: input.content,
        category: input.category,
      });
    }),

  getPostWithReplies: publicProcedure
    .input(z.object({ postId: z.number() }))
    .query(async ({ input }) => {
      return features.getForumPostWithReplies(input.postId);
    }),

  createReply: publicProcedure
    .input(
      z.object({
        postId: z.number(),
        userId: z.number(),
        content: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      return features.createForumReply({
        postId: input.postId,
        userId: input.userId,
        content: input.content,
      });
    }),
});

export const performanceRouter = router({
  getAnalytics: publicProcedure
    .input(z.object({ userId: z.number(), moduleId: z.string() }))
    .query(async ({ input }) => {
      return features.getPerformanceAnalytics(input.userId, input.moduleId);
    }),

  updateAnalytics: publicProcedure
    .input(
      z.object({
        userId: z.number(),
        moduleId: z.string(),
        timeSpentMinutes: z.number().optional(),
        completionRate: z.string().optional(),
        exerciseScore: z.string().optional(),
        quizScore: z.string().optional(),
        strengthAreas: z.array(z.string()).optional(),
        weakAreas: z.array(z.string()).optional(),
      })
    )
    .mutation(async ({ input }) => {
      return features.updatePerformanceAnalytics({
        userId: input.userId,
        moduleId: input.moduleId,
        timeSpentMinutes: input.timeSpentMinutes || 0,
        completionRate: input.completionRate,
        exerciseScore: input.exerciseScore,
        quizScore: input.quizScore,
        strengthAreas: input.strengthAreas as any,
        weakAreas: input.weakAreas as any,
      });
    }),

  getAllPerformance: publicProcedure
    .input(z.object({ userId: z.number() }))
    .query(async ({ input }) => {
      return features.getUserAllPerformance(input.userId);
    }),
});

export const spacedRepetitionRouter = router({
  getItems: publicProcedure
    .input(z.object({ userId: z.number() }))
    .query(async ({ input }) => {
      return features.getSpacedRepetitionItems(input.userId);
    }),

  getDueForReview: publicProcedure
    .input(z.object({ userId: z.number() }))
    .query(async ({ input }) => {
      return features.getDueForReview(input.userId);
    }),

  updateItem: publicProcedure
    .input(
      z.object({
        userId: z.number(),
        moduleId: z.string(),
        chapterId: z.string(),
        nextReviewDate: z.date().optional(),
        repetitionCount: z.number().optional(),
        easeFactor: z.string().optional(),
        interval: z.number().optional(),
      })
    )
    .mutation(async ({ input }) => {
      return features.updateSpacedRepetitionItem(
        input.userId,
        input.moduleId,
        input.chapterId,
        {
          nextReviewDate: input.nextReviewDate || new Date(),
          repetitionCount: input.repetitionCount || 0,
          easeFactor: (input.easeFactor || "2.50") as any,
          interval: input.interval || 1,
          lastReviewedAt: new Date(),
        }
      );
    }),
});
