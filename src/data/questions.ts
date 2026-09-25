import { QuizQuestion, Difficulty } from '../types';
import { QUESTIONS_PART_1 } from './questions_part1';
import { QUESTIONS_PART_2 } from './questions_part2';
import { QUESTIONS_PART_3 } from './questions_part3';
import { createLessonTenQuestions } from './lesson_questions_generator';
import { ALL_LESSONS } from './lessons';

// Curated questions
const CURATED_QUESTIONS: QuizQuestion[] = [
  ...QUESTIONS_PART_1,
  ...QUESTIONS_PART_2,
  ...QUESTIONS_PART_3,
];

// Generate 10 questions for every single lesson
const GENERATED_ALL: QuizQuestion[] = ALL_LESSONS.flatMap((lesson) => 
  createLessonTenQuestions(lesson.id)
);

// Map to hold questions per lesson (ensuring each lesson has at least 10 questions)
export const getQuestionsByLesson = (lessonId: number): QuizQuestion[] => {
  const curated = CURATED_QUESTIONS.filter((q) => q.lessonId === lessonId);
  if (curated.length >= 10) {
    return curated.slice(0, 10);
  }
  const generated = createLessonTenQuestions(lessonId);

  // Combine and remove duplicate IDs, ensure 10 questions
  const combined = [...curated, ...generated];
  const uniqueMap = new Map<string, QuizQuestion>();
  combined.forEach((q) => uniqueMap.set(q.id, q));
  
  const result = Array.from(uniqueMap.values());
  return result.slice(0, 10);
};

export const ALL_QUESTIONS: QuizQuestion[] = Array.from(
  new Map(
    [...CURATED_QUESTIONS, ...GENERATED_ALL].map((q) => [q.id, q])
  ).values()
);

export const getQuestionsByTopic = (topicId: number): QuizQuestion[] => {
  return ALL_QUESTIONS.filter((q) => q.topicId === topicId);
};

export const getQuestionsByType = (type: 'multiple_choice' | 'true_false'): QuizQuestion[] => {
  return ALL_QUESTIONS.filter((q) => q.type === type);
};

export const getQuestionsByDifficulty = (diff: Difficulty): QuizQuestion[] => {
  return ALL_QUESTIONS.filter((q) => q.difficulty === diff);
};

// Generate balanced assessment exam based on official MOET distribution
export const generateExamSet = (options: {
  topicId?: number;
  count?: number;
  type?: 'mixed' | 'multiple_choice' | 'true_false';
}): QuizQuestion[] => {
  let pool = [...ALL_QUESTIONS];
  if (options.topicId) {
    pool = pool.filter((q) => q.topicId === options.topicId);
  }
  if (options.type && options.type !== 'mixed') {
    pool = pool.filter((q) => q.type === options.type);
  }

  // Shuffle pool
  const shuffled = [...pool].sort(() => 0.5 - Math.random());
  const targetCount = options.count || Math.min(shuffled.length, 10);
  return shuffled.slice(0, targetCount);
};
