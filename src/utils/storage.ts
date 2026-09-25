import { UserStats, CustomAppLink, LessonQuizStat } from '../types';

const STATS_KEY = 'tinhoc11_user_stats';
const LINKS_KEY = 'tinhoc11_custom_app_links';

const defaultStats: UserStats = {
  streak: 3,
  lastActiveDate: new Date().toISOString().split('T')[0],
  xp: 350,
  completedLessons: [1, 2],
  lessonQuizStats: {
    1: {
      lessonId: 1,
      bestScore: 9,
      maxScore: 10,
      percent: 90,
      passed: true,
      lastAttemptDate: new Date().toISOString().split('T')[0],
    },
    2: {
      lessonId: 2,
      bestScore: 8.5,
      maxScore: 10,
      percent: 85,
      passed: true,
      lastAttemptDate: new Date().toISOString().split('T')[0],
    },
  },
  bookmarkedQuestions: [],
  examHistory: [],
  soundEnabled: true,
};

export const loadUserStats = (): UserStats => {
  try {
    const raw = localStorage.getItem(STATS_KEY);
    if (!raw) return defaultStats;
    const parsed = JSON.parse(raw);
    return {
      ...defaultStats,
      ...parsed,
      lessonQuizStats: {
        ...(defaultStats.lessonQuizStats || {}),
        ...(parsed.lessonQuizStats || {}),
      },
    };
  } catch {
    return defaultStats;
  }
};

export const saveUserStats = (stats: UserStats): void => {
  try {
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  } catch {
    // LocalStorage quota or access error
  }
};

export const addXp = (amount: number): UserStats => {
  const stats = loadUserStats();
  stats.xp += amount;
  saveUserStats(stats);
  return stats;
};

export const markLessonCompleted = (lessonId: number): UserStats => {
  const stats = loadUserStats();
  if (!stats.completedLessons.includes(lessonId)) {
    stats.completedLessons.push(lessonId);
    stats.xp += 50; // +50 XP for completing self-study
  }
  saveUserStats(stats);
  return stats;
};

export const unmarkLessonCompleted = (lessonId: number): UserStats => {
  const stats = loadUserStats();
  stats.completedLessons = stats.completedLessons.filter((id) => id !== lessonId);
  saveUserStats(stats);
  return stats;
};

/**
 * Record multiple choice / true-false quiz progress for a lesson.
 * If score >= 80% (trên 80%), auto-ticks lesson as completed!
 */
export const recordLessonQuizResult = (
  lessonId: number,
  score: number,
  maxScore: number
): { stats: UserStats; passed: boolean; percent: number; autoMarked: boolean } => {
  const stats = loadUserStats();
  const percent = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;
  const passed = percent >= 80;

  if (!stats.lessonQuizStats) {
    stats.lessonQuizStats = {};
  }

  const existing = stats.lessonQuizStats[lessonId];
  const bestScore = existing ? Math.max(existing.bestScore, score) : score;
  const bestPercent = existing ? Math.max(existing.percent, percent) : percent;

  stats.lessonQuizStats[lessonId] = {
    lessonId,
    bestScore,
    maxScore,
    percent: bestPercent,
    passed: bestPercent >= 80,
    lastAttemptDate: new Date().toISOString().split('T')[0],
  };

  let autoMarked = false;
  if (passed && !stats.completedLessons.includes(lessonId)) {
    stats.completedLessons.push(lessonId);
    stats.xp += 50; // Auto-tick award
    autoMarked = true;
  }

  saveUserStats(stats);
  return { stats, passed, percent, autoMarked };
};

export const loadCustomLinks = (): Record<number, CustomAppLink> => {
  try {
    const raw = localStorage.getItem(LINKS_KEY);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch {
    return {};
  }
};

export const saveCustomLink = (link: CustomAppLink): Record<number, CustomAppLink> => {
  const links = loadCustomLinks();
  links[link.lessonId] = link;
  try {
    localStorage.setItem(LINKS_KEY, JSON.stringify(links));
  } catch {
    // ignore
  }
  return links;
};
