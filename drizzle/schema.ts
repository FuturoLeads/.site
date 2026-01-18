import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, boolean, decimal, json } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Learning Path - Mapa de aprendizado com pré-requisitos
 */
export const learningPaths = mysqlTable("learning_paths", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  moduleId: varchar("moduleId", { length: 64 }).notNull(),
  isCompleted: boolean("isCompleted").default(false).notNull(),
  completedAt: timestamp("completedAt"),
  progress: int("progress").default(0).notNull(), // 0-100
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type LearningPath = typeof learningPaths.$inferSelect;
export type InsertLearningPath = typeof learningPaths.$inferInsert;

/**
 * Exercises - Exercícios práticos interativos
 */
export const exercises = mysqlTable("exercises", {
  id: int("id").autoincrement().primaryKey(),
  moduleId: varchar("moduleId", { length: 64 }).notNull(),
  chapterId: varchar("chapterId", { length: 64 }).notNull(),
  title: text("title").notNull(),
  description: text("description"),
  type: mysqlEnum("type", ["scenario", "case_study", "practical_task"]).notNull(),
  content: json("content").notNull(), // { question, options, correctAnswer, explanation }
  difficulty: mysqlEnum("difficulty", ["beginner", "intermediate", "advanced"]).default("beginner").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type Exercise = typeof exercises.$inferSelect;
export type InsertExercise = typeof exercises.$inferInsert;

/**
 * Exercise Submissions - Respostas dos usuários aos exercícios
 */
export const exerciseSubmissions = mysqlTable("exercise_submissions", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  exerciseId: int("exerciseId").notNull(),
  answer: json("answer").notNull(),
  isCorrect: boolean("isCorrect").notNull(),
  feedback: text("feedback"),
  submittedAt: timestamp("submittedAt").defaultNow().notNull(),
});

export type ExerciseSubmission = typeof exerciseSubmissions.$inferSelect;
export type InsertExerciseSubmission = typeof exerciseSubmissions.$inferInsert;

/**
 * Badges - Certificados progressivos por módulo
 */
export const badges = mysqlTable("badges", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  moduleId: varchar("moduleId", { length: 64 }).notNull(),
  badgeName: varchar("badgeName", { length: 255 }).notNull(),
  badgeIcon: text("badgeIcon"), // URL ou SVG
  description: text("description"),
  earnedAt: timestamp("earnedAt").defaultNow().notNull(),
});

export type Badge = typeof badges.$inferSelect;
export type InsertBadge = typeof badges.$inferInsert;

/**
 * User Notes - Anotações pessoais por capítulo
 */
export const userNotes = mysqlTable("user_notes", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  moduleId: varchar("moduleId", { length: 64 }).notNull(),
  chapterId: varchar("chapterId", { length: 64 }).notNull(),
  content: text("content").notNull(),
  color: varchar("color", { length: 7 }).default("#FFF3CD"), // Cor da nota (hex)
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type UserNote = typeof userNotes.$inferSelect;
export type InsertUserNote = typeof userNotes.$inferInsert;

/**
 * Glossary - Termos técnicos com definições
 */
export const glossaryTerms = mysqlTable("glossary_terms", {
  id: int("id").autoincrement().primaryKey(),
  term: varchar("term", { length: 255 }).notNull().unique(),
  definition: text("definition").notNull(),
  moduleId: varchar("moduleId", { length: 64 }),
  category: varchar("category", { length: 100 }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type GlossaryTerm = typeof glossaryTerms.$inferSelect;
export type InsertGlossaryTerm = typeof glossaryTerms.$inferInsert;

/**
 * Forum Posts - Discussões da comunidade
 */
export const forumPosts = mysqlTable("forum_posts", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  moduleId: varchar("moduleId", { length: 64 }).notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  content: text("content").notNull(),
  category: mysqlEnum("category", ["doubt", "discussion", "resource", "success_story"]).default("doubt").notNull(),
  isAnswered: boolean("isAnswered").default(false).notNull(),
  views: int("views").default(0).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type ForumPost = typeof forumPosts.$inferSelect;
export type InsertForumPost = typeof forumPosts.$inferInsert;

/**
 * Forum Replies - Respostas nos posts do fórum
 */
export const forumReplies = mysqlTable("forum_replies", {
  id: int("id").autoincrement().primaryKey(),
  postId: int("postId").notNull(),
  userId: int("userId").notNull(),
  content: text("content").notNull(),
  isMarkedAsAnswer: boolean("isMarkedAsAnswer").default(false).notNull(),
  likes: int("likes").default(0).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type ForumReply = typeof forumReplies.$inferSelect;
export type InsertForumReply = typeof forumReplies.$inferInsert;

/**
 * Performance Analytics - Análise de desempenho do usuário
 */
export const performanceAnalytics = mysqlTable("performance_analytics", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  moduleId: varchar("moduleId", { length: 64 }).notNull(),
  timeSpentMinutes: int("timeSpentMinutes").default(0).notNull(),
  completionRate: decimal("completionRate", { precision: 5, scale: 2 }).default("0.00").notNull(), // 0-100
  exerciseScore: decimal("exerciseScore", { precision: 5, scale: 2 }).default("0.00").notNull(), // 0-100
  quizScore: decimal("quizScore", { precision: 5, scale: 2 }).default("0.00").notNull(), // 0-100
  strengthAreas: json("strengthAreas"), // Array de áreas fortes
  weakAreas: json("weakAreas"), // Array de áreas fracas
  lastAccessedAt: timestamp("lastAccessedAt"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type PerformanceAnalytics = typeof performanceAnalytics.$inferSelect;
export type InsertPerformanceAnalytics = typeof performanceAnalytics.$inferInsert;

/**
 * Spaced Repetition - Sistema de revisão espaçada
 */
export const spacedRepetition = mysqlTable("spaced_repetition", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  moduleId: varchar("moduleId", { length: 64 }).notNull(),
  chapterId: varchar("chapterId", { length: 64 }).notNull(),
  nextReviewDate: timestamp("nextReviewDate").notNull(),
  repetitionCount: int("repetitionCount").default(0).notNull(),
  easeFactor: decimal("easeFactor", { precision: 3, scale: 2 }).default("2.50").notNull(), // SM-2 algorithm
  interval: int("interval").default(1).notNull(), // Dias até próxima revisão
  lastReviewedAt: timestamp("lastReviewedAt"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type SpacedRepetition = typeof spacedRepetition.$inferSelect;
export type InsertSpacedRepetition = typeof spacedRepetition.$inferInsert;
