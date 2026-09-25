import React from 'react';
import { 
  BookOpen, 
  CheckCircle2, 
  ExternalLink, 
  Play, 
  Sparkles, 
  Gamepad2, 
  Cpu, 
  Network, 
  ShieldCheck, 
  Database, 
  Briefcase, 
  Terminal, 
  Palette,
  FileQuestion,
  Layers,
  ArrowRight
} from 'lucide-react';
import { Topic, Lesson, CustomAppLink, LessonQuizStat } from '../types';
import { sound } from '../utils/audio';

// Color palettes for distinguishing each lesson within a topic group (Màu sắc nhẹ nhàng, phân biệt rõ từng bài)
interface LessonPalette {
  cardBg: string;
  borderColor: string;
  borderAccent: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  titleHover: string;
  divider: string;
}

const LESSON_COLOR_PALETTES: LessonPalette[] = [
  // 1. Lam nhạt (Soft Sky Blue)
  {
    cardBg: 'bg-sky-50/50 hover:bg-sky-50/80',
    borderColor: 'border-sky-200 hover:border-sky-300',
    borderAccent: 'border-l-4 border-l-sky-500',
    badgeBg: 'bg-sky-100 group-hover:bg-sky-600',
    badgeText: 'text-sky-800 group-hover:text-white',
    badgeBorder: 'border-sky-300',
    titleHover: 'group-hover:text-sky-700',
    divider: 'border-sky-200/70',
  },
  // 2. Ngọc lục / Mint (Soft Emerald)
  {
    cardBg: 'bg-emerald-50/50 hover:bg-emerald-50/80',
    borderColor: 'border-emerald-200 hover:border-emerald-300',
    borderAccent: 'border-l-4 border-l-emerald-500',
    badgeBg: 'bg-emerald-100 group-hover:bg-emerald-600',
    badgeText: 'text-emerald-800 group-hover:text-white',
    badgeBorder: 'border-emerald-300',
    titleHover: 'group-hover:text-emerald-700',
    divider: 'border-emerald-200/70',
  },
  // 3. Hổ phách / Cam đào nhạt (Soft Amber)
  {
    cardBg: 'bg-amber-50/50 hover:bg-amber-50/80',
    borderColor: 'border-amber-200 hover:border-amber-300',
    borderAccent: 'border-l-4 border-l-amber-500',
    badgeBg: 'bg-amber-100 group-hover:bg-amber-600',
    badgeText: 'text-amber-900 group-hover:text-white',
    badgeBorder: 'border-amber-300',
    titleHover: 'group-hover:text-amber-800',
    divider: 'border-amber-200/70',
  },
  // 4. Tím hoa cà / Oải hương (Soft Purple / Violet)
  {
    cardBg: 'bg-purple-50/50 hover:bg-purple-50/80',
    borderColor: 'border-purple-200 hover:border-purple-300',
    borderAccent: 'border-l-4 border-l-purple-500',
    badgeBg: 'bg-purple-100 group-hover:bg-purple-600',
    badgeText: 'text-purple-800 group-hover:text-white',
    badgeBorder: 'border-purple-300',
    titleHover: 'group-hover:text-purple-700',
    divider: 'border-purple-200/70',
  },
  // 5. Hồng san hô nhạt (Soft Rose)
  {
    cardBg: 'bg-rose-50/50 hover:bg-rose-50/80',
    borderColor: 'border-rose-200 hover:border-rose-300',
    borderAccent: 'border-l-4 border-l-rose-500',
    badgeBg: 'bg-rose-100 group-hover:bg-rose-600',
    badgeText: 'text-rose-800 group-hover:text-white',
    badgeBorder: 'border-rose-300',
    titleHover: 'group-hover:text-rose-700',
    divider: 'border-rose-200/70',
  },
  // 6. Xanh mòng két / Teal (Soft Teal)
  {
    cardBg: 'bg-teal-50/50 hover:bg-teal-50/80',
    borderColor: 'border-teal-200 hover:border-teal-300',
    borderAccent: 'border-l-4 border-l-teal-500',
    badgeBg: 'bg-teal-100 group-hover:bg-teal-600',
    badgeText: 'text-teal-800 group-hover:text-white',
    badgeBorder: 'border-teal-300',
    titleHover: 'group-hover:text-teal-700',
    divider: 'border-teal-200/70',
  },
  // 7. Chàm lam nhạt (Soft Indigo)
  {
    cardBg: 'bg-indigo-50/50 hover:bg-indigo-50/80',
    borderColor: 'border-indigo-200 hover:border-indigo-300',
    borderAccent: 'border-l-4 border-l-indigo-500',
    badgeBg: 'bg-indigo-100 group-hover:bg-indigo-600',
    badgeText: 'text-indigo-800 group-hover:text-white',
    badgeBorder: 'border-indigo-300',
    titleHover: 'group-hover:text-indigo-700',
    divider: 'border-indigo-200/70',
  },
  // 8. Cam quýt nhạt (Soft Orange)
  {
    cardBg: 'bg-orange-50/50 hover:bg-orange-50/80',
    borderColor: 'border-orange-200 hover:border-orange-300',
    borderAccent: 'border-l-4 border-l-orange-500',
    badgeBg: 'bg-orange-100 group-hover:bg-orange-600',
    badgeText: 'text-orange-900 group-hover:text-white',
    badgeBorder: 'border-orange-300',
    titleHover: 'group-hover:text-orange-800',
    divider: 'border-orange-200/70',
  },
];

interface TopicCardProps {
  topic: Topic;
  lessons: Lesson[];
  completedLessonIds: number[];
  lessonQuizStats?: Record<number, LessonQuizStat>;
  customLinks: Record<number, CustomAppLink>;
  colorVariant?: 'sky' | 'emerald';
  showLessons?: boolean;
  onSelectTopic?: (topic: Topic) => void;
  onOpenLessonDetail: (lesson: Lesson) => void;
  onOpenLessonQuiz: (lesson: Lesson) => void;
  onCheckAutoLearn?: (lesson: Lesson) => void;
  onOpenFlashcard: (topic: Topic) => void;
  onOpenTopicExam: (topic: Topic) => void;
  onOpenGame?: (lesson: Lesson) => void;
  onEditCustomLink?: (lesson: Lesson) => void;
  onResetCustomLink?: (lessonId: number) => void;
}

export const TopicCard: React.FC<TopicCardProps> = ({
  topic,
  lessons,
  completedLessonIds,
  lessonQuizStats = {},
  customLinks,
  colorVariant = 'sky',
  showLessons = true,
  onSelectTopic,
  onOpenLessonDetail,
  onOpenLessonQuiz,
  onCheckAutoLearn,
  onOpenFlashcard,
  onOpenTopicExam,
  onOpenGame,
}) => {
  const isEmerald = colorVariant === 'emerald';
  const completedCount = lessons.filter((l) => completedLessonIds.includes(l.id)).length;
  const progressPercent = lessons.length > 0 ? Math.round((completedCount / lessons.length) * 100) : 0;

  // Render topic icon
  const renderTopicIcon = (iconName: string) => {
    const props = { className: 'w-7 h-7 sm:w-8 sm:h-8 text-white' };
    switch (iconName) {
      case 'Cpu': return <Cpu {...props} />;
      case 'Network': return <Network {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'Database': return <Database {...props} />;
      case 'Briefcase': return <Briefcase {...props} />;
      case 'Terminal': return <Terminal {...props} />;
      case 'Palette': return <Palette {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <div className="rounded-3xl shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden h-full bg-gradient-to-b from-sky-50/70 via-blue-50/20 to-white border border-sky-200/90 hover:border-sky-300">
      
      {/* CARD TOP SECTION: Topic Banner */}
      <div className="p-4 sm:p-5 space-y-3.5 flex-1 flex flex-col justify-between">
        
        {/* Header: Icon, Code & Title */}
        <div>
          <div className="flex items-start gap-4">
            <div 
              className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl p-0.5 shadow-md flex items-center justify-center shrink-0"
              style={{ backgroundColor: topic.accentColor }}
            >
              {renderTopicIcon(topic.icon)}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs sm:text-sm font-black uppercase tracking-wider px-2.5 py-0.5 rounded-lg border text-sky-800 bg-sky-100/90 border-sky-200">
                  {topic.code}
                </span>
                <span className="text-xs font-bold text-slate-500">
                  {completedCount}/{lessons.length} bài đã hoàn thành
                </span>
              </div>

              <div className="min-h-[3.25rem] flex items-center mt-1.5">
                <h2 className="text-base sm:text-lg md:text-xl font-black text-slate-900 leading-snug line-clamp-2">
                  {topic.title}
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1 line-clamp-2 h-10">
                {topic.shortDesc}
              </p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mt-3.5">
            <div 
              className="h-full transition-all duration-500 rounded-full bg-gradient-to-r from-sky-500 to-blue-600"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* LESSONS LIST: Hoặc chỉ cần tên chủ đề chương trình theo yêu cầu */}
        {showLessons ? (
          <div className="rounded-2xl border border-sky-100/90 bg-white/85 p-3 sm:p-3.5 space-y-2 flex-1 flex flex-col mt-3.5">
            <div className="text-xs font-black tracking-wider uppercase text-slate-500 flex items-center justify-between shrink-0">
              <span>DANH SÁCH BÀI HỌC:</span>
              <span className="text-[11px] font-semibold text-sky-600">
                Đầy đủ SGK & 10 câu trắc nghiệm
              </span>
            </div>

            <div className="space-y-2 flex-1 overflow-y-auto max-h-[500px] pr-0.5">
              {lessons.map((lesson, lIdx) => {
                const isCompleted = completedLessonIds.includes(lesson.id);
                const customLink = customLinks[lesson.id];
                const palette = LESSON_COLOR_PALETTES[lIdx % LESSON_COLOR_PALETTES.length];
                const quizStat = lessonQuizStats[lesson.id];
                const hasPassedQuiz = (quizStat?.percent ?? 0) >= 80;

                return (
                  <div 
                    key={lesson.id}
                    className={`p-2.5 sm:p-3 rounded-2xl border ${palette.borderAccent} transition-all duration-200 space-y-2 hover:shadow-xs ${palette.cardBg} ${palette.borderColor}`}
                  >
                    {/* Top line: Lesson title & Nút lệnh tự tích đã học */}
                    <div className="flex items-start justify-between gap-2.5">
                      <div 
                        onClick={() => { sound.playClick(); onOpenLessonDetail(lesson); }}
                        className="flex items-start gap-2.5 flex-1 min-w-0 cursor-pointer group"
                      >
                        <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center font-black text-xs sm:text-sm shrink-0 mt-0.5 border ${palette.badgeBorder} ${palette.badgeBg} ${palette.badgeText} transition-all shadow-2xs`}>
                          {lesson.lessonNumber}
                        </div>
                        <div>
                          <h3 className={`text-base sm:text-lg font-bold text-slate-800 ${palette.titleHover} transition-colors leading-snug`}>
                            Bài {lesson.lessonNumber}: {lesson.title}
                          </h3>
                          <p className="text-xs text-slate-500 mt-0.5 line-clamp-1 font-medium">
                            {lesson.objectives[0] || lesson.starter.situation}
                          </p>
                        </div>
                      </div>

                      {/* Nút lệnh tự tích đã học nếu kiểm tra được tiến độ trả lời câu hỏi trắc nghiệm đúng trên 80% */}
                      {isCompleted ? (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            sound.playClick();
                            onCheckAutoLearn?.(lesson);
                          }}
                          className="shrink-0 flex items-center gap-1.5 text-xs font-black text-emerald-800 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 px-2.5 py-1.5 rounded-xl shadow-2xs transition-all cursor-pointer group/status"
                          title="Bấm để xem chi tiết tiến độ hoặc quản lý trạng thái Đã học"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Đã học</span>
                          {quizStat && (
                            <span className="text-[10px] font-extrabold text-emerald-900 bg-emerald-200/90 px-1.5 py-0.5 rounded-md">
                              {quizStat.percent}%
                            </span>
                          )}
                        </button>
                      ) : hasPassedQuiz ? (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            sound.playClick();
                            onCheckAutoLearn?.(lesson);
                          }}
                          className="shrink-0 flex items-center gap-1.5 text-xs font-black text-teal-900 bg-teal-100 hover:bg-teal-200 border-2 border-teal-400 px-2.5 py-1.5 rounded-xl shadow-xs transition-all cursor-pointer animate-pulse"
                          title={`Đạt ${quizStat?.percent}% (>80%). Bấm để tự tích Đã học ngay!`}
                        >
                          <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                          <span>Tự tích đã học ({quizStat?.percent}%)</span>
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            sound.playClick();
                            onCheckAutoLearn?.(lesson);
                          }}
                          className="shrink-0 flex items-center gap-1.5 text-xs font-bold text-slate-600 bg-white/95 hover:bg-sky-50 hover:text-sky-800 hover:border-sky-300 border border-slate-300 px-2.5 py-1.5 rounded-xl shadow-2xs transition-all cursor-pointer group/autotick"
                          title="Kiểm tra tiến độ trắc nghiệm: Cần đạt đúng trên 80% để tự tích Đã học"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 group-hover/autotick:text-sky-600 transition-colors" />
                          <span>Tự tích đã học</span>
                          {quizStat ? (
                            <span className="text-[10px] font-extrabold text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded">
                              {quizStat.percent}%
                            </span>
                          ) : (
                            <span className="text-[10px] text-slate-400 font-medium hidden sm:inline">
                              (&gt;80%)
                            </span>
                          )}
                        </button>
                      )}
                    </div>

                    {/* Actions line: 3 distinct buttons for big & clear touch targets */}
                    <div className={`flex items-center gap-2 pt-2 border-t ${palette.divider} flex-wrap`}>
                      
                      {/* Button 1: Read full lesson */}
                      <button
                        type="button"
                        onClick={() => { sound.playClick(); onOpenLessonDetail(lesson); }}
                        className="flex-1 min-w-[110px] flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-bold text-sky-700 bg-white/95 hover:bg-sky-600 hover:text-white border border-sky-200 hover:border-transparent transition-all shadow-2xs"
                      >
                        <BookOpen className="w-4 h-4" />
                        <span>Học bài</span>
                      </button>

                      {/* Button 2: 10 Quiz Questions */}
                      <button
                        type="button"
                        onClick={() => { sound.playClick(); onOpenLessonQuiz(lesson); }}
                        className="flex-1 min-w-[125px] flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-bold text-indigo-700 bg-white/95 hover:bg-indigo-600 hover:text-white border border-indigo-200 hover:border-transparent transition-all shadow-2xs"
                      >
                        <FileQuestion className="w-4 h-4" />
                        <span>10 câu trắc nghiệm</span>
                      </button>

                      {/* Button: Game Đấu Trường 1v1 (2 học sinh cùng thi đấu) */}
                      {onOpenGame && (
                        <button
                          type="button"
                          onClick={() => { sound.playClick(); onOpenGame(lesson); }}
                          className="flex-1 min-w-[105px] flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-bold text-rose-800 bg-white/95 hover:bg-rose-600 hover:text-white border border-rose-200 hover:border-transparent transition-all cursor-pointer shadow-2xs"
                          title="Đấu trường game câu hỏi & thi đấu 1v1 cho 2 học sinh"
                        >
                          <Gamepad2 className="w-4 h-4 text-rose-600" />
                          <span>Game 1v1</span>
                        </button>
                      )}

                      {/* Button 3: Tự luyện Online Kênh Học Tập */}
                      <a
                        href={lesson.defaultApp?.url || "https://kenhhoctap.edu.vn/bai-tap/trac-nghiem-tin-hoc-ung-dung-11-ket-noi-bai-1-he-dieu-hanh-277"}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => sound.playClick()}
                        title={`Mở Tự luyện Online Bài ${lesson.lessonNumber} trên Kênh Học Tập`}
                        className="flex-1 min-w-[125px] flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-bold text-emerald-800 bg-white/95 hover:bg-emerald-600 hover:text-white border border-emerald-200 hover:border-transparent transition-all cursor-pointer shadow-2xs"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Tự luyện Online</span>
                      </a>

                      {customLink && (
                        <a
                          href={customLink.customUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-xl text-slate-500 hover:text-sky-600 bg-white/95 hover:bg-sky-50 border border-slate-200 transition-colors shadow-2xs"
                          title={customLink.customName}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}

                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        ) : (
          <div className="rounded-2xl border border-sky-100 bg-white/90 p-4 flex items-center justify-between gap-3 shadow-2xs mt-auto">
            <div>
              <span className="text-xs font-bold text-slate-700 block">
                Chương trình gồm <strong className="text-sky-900 font-extrabold">{lessons.length} bài học</strong>
              </span>
              <span className="text-[11px] font-semibold text-sky-700">
                Tiến độ: {completedCount}/{lessons.length} bài đã hoàn thành ({progressPercent}%)
              </span>
            </div>

            {onSelectTopic && (
              <button
                type="button"
                onClick={() => { sound.playClick(); onSelectTopic(topic); }}
                className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center gap-1.5 shadow-xs cursor-pointer shrink-0 bg-sky-600 text-white hover:bg-sky-700"
              >
                <span>Xem các bài học</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        )}

      </div>

      {/* CARD BOTTOM ACTION BAR: Flashcards, Luyện tập, Thi thử */}
      <div className="p-3.5 sm:p-4 pt-0 mt-auto">
        <div className="grid grid-cols-3 gap-2 p-1.5 rounded-2xl border text-center bg-slate-100/80 border-slate-200">
          
          {/* Flashcards */}
          <button
            type="button"
            onClick={() => { sound.playClick(); onOpenFlashcard(topic); }}
            className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs sm:text-sm font-bold text-slate-700 hover:bg-white hover:text-sky-700 hover:shadow-xs transition-all"
          >
            <Layers className="w-4 h-4 text-sky-600" />
            <span>Flashcards</span>
          </button>

          {/* Luyện Tập Quiz */}
          <button
            type="button"
            onClick={() => {
              sound.playClick();
              if (lessons.length > 0) onOpenLessonQuiz(lessons[0]);
            }}
            className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs sm:text-sm font-bold hover:bg-white hover:shadow-xs transition-all text-blue-700 hover:text-blue-800"
          >
            <Play className="w-4 h-4 fill-current text-blue-600" />
            <span>Luyện Tập</span>
          </button>

          {/* Thi Thử */}
          <button
            type="button"
            onClick={() => { sound.playClick(); onOpenTopicExam(topic); }}
            className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs sm:text-sm font-bold text-rose-600 hover:bg-white hover:shadow-sm transition-all"
          >
            <Sparkles className="w-4 h-4" />
            <span>Thi Thử</span>
          </button>

        </div>
      </div>

    </div>
  );
};
