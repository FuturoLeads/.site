import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";

/**
 * Hook para carregar todos os dados das features do tRPC
 */
export function useFeatureData() {
  const { user } = useAuth();
  const userId = user?.id || 0;

  // Learning Progress
  const learningProgress = trpc.learning.getProgress.useQuery(
    { userId },
    { enabled: !!user }
  );

  // User Badges
  const userBadges = trpc.badges.getUserBadges.useQuery(
    { userId },
    { enabled: !!user }
  );

  // Performance Analytics
  const performanceData = trpc.performance.getAllPerformance.useQuery(
    { userId },
    { enabled: !!user }
  );

  // Spaced Repetition Items
  const spacedRepetitionItems = trpc.spacedRepetition.getItems.useQuery(
    { userId },
    { enabled: !!user }
  );

  // Items due for review
  const dueForReview = trpc.spacedRepetition.getDueForReview.useQuery(
    { userId },
    { enabled: !!user }
  );

  // User Notes for a chapter
  const getUserNotes = (moduleId: string, chapterId: string) =>
    trpc.notes.getByChapter.useQuery(
      { userId, moduleId, chapterId },
      { enabled: !!user }
    );

  // Glossary terms
  const getGlossaryByModule = (moduleId: string) =>
    trpc.glossary.getByModule.useQuery(
      { moduleId },
      { enabled: !!user }
    );

  // Forum posts
  const getForumPosts = (moduleId: string) =>
    trpc.forum.getPostsByModule.useQuery(
      { moduleId, limit: 20 },
      { enabled: !!user }
    );

  // Exercises by chapter
  const getExercises = (moduleId: string, chapterId: string) =>
    trpc.exercises.getByChapter.useQuery(
      { moduleId, chapterId },
      { enabled: !!user }
    );

  const isLoading =
    learningProgress.isLoading ||
    userBadges.isLoading ||
    performanceData.isLoading ||
    spacedRepetitionItems.isLoading ||
    dueForReview.isLoading;

  return {
    user,
    userId,
    learningProgress: learningProgress.data || [],
    userBadges: userBadges.data || [],
    performanceData: performanceData.data || [],
    spacedRepetitionItems: spacedRepetitionItems.data || [],
    dueForReview: dueForReview.data || [],
    getUserNotes,
    getGlossaryByModule,
    getForumPosts,
    getExercises,
    isLoading,
    isError:
      learningProgress.isError ||
      userBadges.isError ||
      performanceData.isError ||
      spacedRepetitionItems.isError ||
      dueForReview.isError,
  };
}
