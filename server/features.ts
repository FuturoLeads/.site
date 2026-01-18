/**
 * Database helpers para as novas features de aprendizado
 */

import { eq, and, desc } from "drizzle-orm";
import { getDb } from "./db";
import {
  learningPaths,
  exercises,
  exerciseSubmissions,
  badges,
  userNotes,
  glossaryTerms,
  forumPosts,
  forumReplies,
  performanceAnalytics,
  spacedRepetition,
} from "../drizzle/schema";
import type {
  InsertLearningPath,
  InsertExerciseSubmission,
  InsertBadge,
  InsertUserNote,
  InsertForumPost,
  InsertForumReply,
  InsertPerformanceAnalytics,
  InsertSpacedRepetition,
} from "../drizzle/schema";

// ============ Learning Paths ============

export async function getLearningPathsByUser(userId: number) {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(learningPaths).where(eq(learningPaths.userId, userId));
}

export async function updateLearningPath(
  userId: number,
  moduleId: string,
  data: Partial<InsertLearningPath>
) {
  const db = await getDb();
  if (!db) return null;

  const existing = await db
    .select()
    .from(learningPaths)
    .where(and(eq(learningPaths.userId, userId), eq(learningPaths.moduleId, moduleId)))
    .limit(1);

  if (existing.length > 0) {
    return db
      .update(learningPaths)
      .set(data)
      .where(and(eq(learningPaths.userId, userId), eq(learningPaths.moduleId, moduleId)));
  } else {
    return db.insert(learningPaths).values({
      userId,
      moduleId,
      ...data,
    });
  }
}

// ============ Exercises ============

export async function getExercisesByChapter(moduleId: string, chapterId: string) {
  const db = await getDb();
  if (!db) return [];
  return db
    .select()
    .from(exercises)
    .where(and(eq(exercises.moduleId, moduleId), eq(exercises.chapterId, chapterId)));
}

export async function submitExerciseAnswer(data: InsertExerciseSubmission) {
  const db = await getDb();
  if (!db) return null;
  return db.insert(exerciseSubmissions).values(data);
}

export async function getUserExerciseSubmissions(userId: number, exerciseId: number) {
  const db = await getDb();
  if (!db) return [];
  return db
    .select()
    .from(exerciseSubmissions)
    .where(
      and(eq(exerciseSubmissions.userId, userId), eq(exerciseSubmissions.exerciseId, exerciseId))
    )
    .orderBy(desc(exerciseSubmissions.submittedAt));
}

// ============ Badges ============

export async function getUserBadges(userId: number) {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(badges).where(eq(badges.userId, userId));
}

export async function awardBadge(data: InsertBadge) {
  const db = await getDb();
  if (!db) return null;

  // Verificar se badge já foi concedido
  const existing = await db
    .select()
    .from(badges)
    .where(
      and(eq(badges.userId, data.userId), eq(badges.moduleId, data.moduleId))
    )
    .limit(1);

  if (existing.length === 0) {
    return db.insert(badges).values(data);
  }
  return null;
}

// ============ User Notes ============

export async function getUserNotesByChapter(userId: number, moduleId: string, chapterId: string) {
  const db = await getDb();
  if (!db) return [];
  return db
    .select()
    .from(userNotes)
    .where(
      and(
        eq(userNotes.userId, userId),
        eq(userNotes.moduleId, moduleId),
        eq(userNotes.chapterId, chapterId)
      )
    )
    .orderBy(desc(userNotes.createdAt));
}

export async function createUserNote(data: InsertUserNote) {
  const db = await getDb();
  if (!db) return null;
  return db.insert(userNotes).values(data);
}

export async function updateUserNote(noteId: number, content: string) {
  const db = await getDb();
  if (!db) return null;
  return db
    .update(userNotes)
    .set({ content, updatedAt: new Date() })
    .where(eq(userNotes.id, noteId));
}

export async function deleteUserNote(noteId: number) {
  const db = await getDb();
  if (!db) return null;
  return db.delete(userNotes).where(eq(userNotes.id, noteId));
}

// ============ Glossary ============

export async function searchGlossaryTerms(keyword: string) {
  const db = await getDb();
  if (!db) return [];
  // Nota: Em produção, usar full-text search
  return db.select().from(glossaryTerms).limit(20);
}

export async function getGlossaryTermsByCategory(category: string) {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(glossaryTerms).where(eq(glossaryTerms.category, category));
}

export async function getGlossaryTermsByModule(moduleId: string) {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(glossaryTerms).where(eq(glossaryTerms.moduleId, moduleId));
}

// ============ Forum ============

export async function getForumPostsByModule(moduleId: string, limit = 20) {
  const db = await getDb();
  if (!db) return [];
  return db
    .select()
    .from(forumPosts)
    .where(eq(forumPosts.moduleId, moduleId))
    .orderBy(desc(forumPosts.createdAt))
    .limit(limit);
}

export async function createForumPost(data: InsertForumPost) {
  const db = await getDb();
  if (!db) return null;
  return db.insert(forumPosts).values(data);
}

export async function getForumPostWithReplies(postId: number) {
  const db = await getDb();
  if (!db) return null;

  const post = await db.select().from(forumPosts).where(eq(forumPosts.id, postId)).limit(1);

  if (post.length === 0) return null;

  const replies = await db
    .select()
    .from(forumReplies)
    .where(eq(forumReplies.postId, postId))
    .orderBy(desc(forumReplies.createdAt));

  return {
    ...post[0],
    replies,
  };
}

export async function createForumReply(data: InsertForumReply) {
  const db = await getDb();
  if (!db) return null;
  return db.insert(forumReplies).values(data);
}

// ============ Performance Analytics ============

export async function getPerformanceAnalytics(userId: number, moduleId: string) {
  const db = await getDb();
  if (!db) return null;

  const result = await db
    .select()
    .from(performanceAnalytics)
    .where(
      and(
        eq(performanceAnalytics.userId, userId),
        eq(performanceAnalytics.moduleId, moduleId)
      )
    )
    .limit(1);

  return result.length > 0 ? result[0] : null;
}

export async function updatePerformanceAnalytics(data: InsertPerformanceAnalytics) {
  const db = await getDb();
  if (!db) return null;

  const existing = await db
    .select()
    .from(performanceAnalytics)
    .where(
      and(
        eq(performanceAnalytics.userId, data.userId),
        eq(performanceAnalytics.moduleId, data.moduleId)
      )
    )
    .limit(1);

  if (existing.length > 0) {
    return db
      .update(performanceAnalytics)
      .set(data)
      .where(
        and(
          eq(performanceAnalytics.userId, data.userId),
          eq(performanceAnalytics.moduleId, data.moduleId)
        )
      );
  } else {
    return db.insert(performanceAnalytics).values(data);
  }
}

export async function getUserAllPerformance(userId: number) {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(performanceAnalytics).where(eq(performanceAnalytics.userId, userId));
}

// ============ Spaced Repetition ============

export async function getSpacedRepetitionItems(userId: number) {
  const db = await getDb();
  if (!db) return [];
  return db
    .select()
    .from(spacedRepetition)
    .where(eq(spacedRepetition.userId, userId))
    .orderBy(spacedRepetition.nextReviewDate);
}

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
        // nextReviewDate <= now
      )
    );
}

export async function updateSpacedRepetitionItem(
  userId: number,
  moduleId: string,
  chapterId: string,
  data: Partial<InsertSpacedRepetition>
) {
  const db = await getDb();
  if (!db) return null;

  const existing = await db
    .select()
    .from(spacedRepetition)
    .where(
      and(
        eq(spacedRepetition.userId, userId),
        eq(spacedRepetition.moduleId, moduleId),
        eq(spacedRepetition.chapterId, chapterId)
      )
    )
    .limit(1);

  if (existing.length > 0) {
    return db
      .update(spacedRepetition)
      .set(data)
      .where(
        and(
          eq(spacedRepetition.userId, userId),
          eq(spacedRepetition.moduleId, moduleId),
          eq(spacedRepetition.chapterId, chapterId)
        )
      );
  } else {
    return db.insert(spacedRepetition).values({
      userId,
      moduleId,
      chapterId,
      nextReviewDate: new Date(),
      ...data,
    });
  }
}
