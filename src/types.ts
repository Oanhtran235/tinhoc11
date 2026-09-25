export type Difficulty = 'nhan_biet' | 'thong_hieu' | 'van_dung' | 'van_dung_cao';

export interface Topic {
  id: number;
  code: string;
  title: string;
  shortDesc: string;
  icon: string;
  badgeColor: string;
  accentColor: string;
  lessonIds: number[];
}

export interface DiscoveryActivity {
  id: number;
  title: string;
  context: string;
  guidingQuestion: string;
  hints: string[];
  discoverySummary: string;
}

export interface PracticalGuide {
  title: string;
  description?: string;
  steps: string[];
}

export interface Lesson {
  id: number;
  topicId: number;
  lessonNumber: number;
  title: string;
  pageRange: string;
  objectives: string[]; // Sau bài học này em sẽ
  starter: {
    situation: string;
    question: string;
  };
  discoveryActivities: DiscoveryActivity[];
  knowledgeBox: string[]; // Hộp kiến thức đóng khung SGK
  practicalGuide?: PracticalGuide;
  exerciseReview?: Array<{
    question: string;
    answer: string;
  }>;
  application: {
    question: string;
    guidance: string;
  };
  defaultApp: {
    name: string;
    type: 'tool' | 'simulator' | 'cloud' | 'external';
    url: string;
    badge: string;
    description: string;
  };
}

export interface MultipleChoiceQuestion {
  id: string;
  lessonId: number;
  topicId: number;
  type: 'multiple_choice';
  difficulty: Difficulty;
  question: string;
  options: [string, string, string, string];
  correctAnswer: number; // 0, 1, 2, 3
  explanation: string;
}

export interface TrueFalseItem {
  id: 'a' | 'b' | 'c' | 'd';
  statement: string;
  isTrue: boolean;
  explanation: string;
}

export interface TrueFalseQuestion {
  id: string;
  lessonId: number;
  topicId: number;
  type: 'true_false';
  difficulty: Difficulty;
  prompt: string;
  items: [TrueFalseItem, TrueFalseItem, TrueFalseItem, TrueFalseItem];
}

export type QuizQuestion = MultipleChoiceQuestion | TrueFalseQuestion;

export interface ExamResult {
  id: string;
  date: string;
  title: string;
  lessonId?: number;
  topicId?: number;
  totalQuestions: number;
  score: number;
  maxScore: number;
  percent: number;
  durationSeconds: number;
  difficultyStats: {
    nhan_biet: { correct: number; total: number };
    thong_hieu: { correct: number; total: number };
    van_dung: { correct: number; total: number };
    van_dung_cao: { correct: number; total: number };
  };
}

export interface LessonQuizStat {
  lessonId: number;
  bestScore: number;
  maxScore: number;
  percent: number; // e.g. 80, 90, 100
  passed: boolean; // percent >= 80
  lastAttemptDate: string;
}

export interface UserStats {
  streak: number;
  lastActiveDate: string;
  xp: number;
  completedLessons: number[];
  lessonQuizStats?: Record<number, LessonQuizStat>;
  bookmarkedQuestions: string[];
  examHistory: ExamResult[];
  soundEnabled: boolean;
}

export interface CustomAppLink {
  lessonId: number;
  customName: string;
  customUrl: string;
  note?: string;
}
