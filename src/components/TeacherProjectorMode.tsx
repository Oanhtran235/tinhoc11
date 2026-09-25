import React, { useState, useEffect } from 'react';
import { 
  Tv, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Eye, 
  EyeOff, 
  Clock, 
  Play, 
  Pause, 
  RotateCcw, 
  BookOpen, 
  Lightbulb, 
  Target, 
  CheckCircle2,
  Sparkles,
  ArrowLeft
} from 'lucide-react';
import { ALL_LESSONS } from '../data/lessons';
import { getQuestionsByLesson } from '../data/questions';
import { sound } from '../utils/audio';
import { FormattedLessonText } from './FormattedLessonText';

interface TeacherProjectorModeProps {
  onBackToMain?: () => void;
}

export const TeacherProjectorMode: React.FC<TeacherProjectorModeProps> = ({ onBackToMain }) => {
  const [selectedLessonId, setSelectedLessonId] = useState(1);
  const [currentSlide, setCurrentSlide] = useState<'objectives' | 'starter' | 'discovery' | 'knowledge' | 'quiz'>('objectives');
  
  // Timer state for classroom group discussion
  const [timerSeconds, setTimerSeconds] = useState(120);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Classroom Quiz reveal answer
  const [quizIndex, setQuizIndex] = useState(0);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);

  const lesson = ALL_LESSONS.find((l) => l.id === selectedLessonId) || ALL_LESSONS[0];
  const lessonQuestions = getQuestionsByLesson(lesson.id);

  // Countdown timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => {
          if (prev <= 1) {
            setIsTimerRunning(false);
            sound.playChime();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSeconds]);

  const toggleTimer = () => {
    sound.playClick();
    setIsTimerRunning(!isTimerRunning);
  };

  const resetTimer = (sec: number) => {
    sound.playClick();
    setIsTimerRunning(false);
    setTimerSeconds(sec);
  };

  const toggleFullScreen = () => {
    sound.playClick();
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Control Bar */}
      <div className="p-4 sm:p-5 bg-white rounded-2xl border border-sky-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        {/* Left: Back button + Lesson selector */}
        <div className="flex items-center gap-3 flex-wrap">
          {onBackToMain && (
            <button
              onClick={() => { sound.playClick(); onBackToMain(); }}
              className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-black flex items-center gap-1.5 transition-colors cursor-pointer border border-slate-200"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Quay lại màn hình chính</span>
            </button>
          )}

          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-50 text-amber-700">
              <Tv className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-amber-800 uppercase block">
                Chế độ Máy chiếu lớp học (GV)
              </span>
              <select
                value={selectedLessonId}
                onChange={(e) => {
                  sound.playClick();
                  setSelectedLessonId(Number(e.target.value));
                  setQuizIndex(0);
                  setIsAnswerRevealed(false);
                }}
                className="text-xs sm:text-sm font-bold text-slate-800 border-none bg-slate-100 rounded-lg px-2.5 py-1 outline-hidden cursor-pointer"
              >
                {ALL_LESSONS.map((l) => (
                  <option key={l.id} value={l.id}>
                    Bài {l.lessonNumber}: {l.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Slide navigation buttons */}
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-none text-xs font-bold bg-slate-100 p-1 rounded-xl">
          <button
            onClick={() => { sound.playClick(); setCurrentSlide('objectives'); }}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              currentSlide === 'objectives' ? 'bg-white text-sky-800 shadow-xs' : 'text-slate-600'
            }`}
          >
            Mục tiêu
          </button>
          <button
            onClick={() => { sound.playClick(); setCurrentSlide('starter'); }}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              currentSlide === 'starter' ? 'bg-white text-sky-800 shadow-xs' : 'text-slate-600'
            }`}
          >
            Khởi động
          </button>
          <button
            onClick={() => { sound.playClick(); setCurrentSlide('discovery'); }}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              currentSlide === 'discovery' ? 'bg-white text-sky-800 shadow-xs' : 'text-slate-600'
            }`}
          >
            Thảo luận nhóm
          </button>
          <button
            onClick={() => { sound.playClick(); setCurrentSlide('knowledge'); }}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              currentSlide === 'knowledge' ? 'bg-white text-sky-800 shadow-xs' : 'text-slate-600'
            }`}
          >
            Kiến thức chốt
          </button>
          <button
            onClick={() => { sound.playClick(); setCurrentSlide('quiz'); }}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              currentSlide === 'quiz' ? 'bg-sky-600 text-white shadow-xs' : 'text-slate-600'
            }`}
          >
            Trắc nghiệm lớp
          </button>
        </div>

        {/* Fullscreen button */}
        <button
          onClick={toggleFullScreen}
          title="Toàn màn hình máy chiếu"
          className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors self-end md:self-center"
        >
          <Maximize2 className="w-4 h-4" />
        </button>

      </div>

      {/* Big Presentation Display Screen */}
      <div className="min-h-[520px] rounded-3xl bg-gradient-to-br from-sky-900 via-blue-950 to-slate-950 text-white p-8 sm:p-12 shadow-2xl border-4 border-sky-400/30 flex flex-col justify-between relative overflow-hidden">
        
        {/* Subtle geometric grid backdrop */}
        <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

        {/* Slide Header */}
        <div className="relative z-10 flex items-center justify-between pb-6 border-b border-white/10">
          <div>
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-cyan-300">
              BÀI {lesson.lessonNumber} • CHƯƠNG TRÌNH TIN HỌC 11
            </span>
            <h1 className="text-2xl sm:text-4xl font-black text-white mt-1">
              {lesson.title}
            </h1>
          </div>

          {/* Group discussion classroom timer widget */}
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20">
            <Clock className="w-5 h-5 text-amber-400" />
            <span className="font-mono text-xl font-bold text-amber-300">
              {Math.floor(timerSeconds / 60)}:{(timerSeconds % 60).toString().padStart(2, '0')}
            </span>
            <button
              onClick={toggleTimer}
              className="p-1 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <button
              onClick={() => resetTimer(120)}
              title="Đặt lại 2 phút"
              className="p-1 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Slide Main Content */}
        <div className="relative z-10 my-8 flex-1 flex flex-col justify-center">
          
          {/* Slide: Objectives */}
          {currentSlide === 'objectives' && (
            <div className="space-y-6 max-w-3xl animate-in fade-in">
              <div className="inline-flex items-center gap-2 text-cyan-300 text-sm font-extrabold uppercase tracking-wider">
                <Target className="w-5 h-5" />
                Mục tiêu bài học cần đạt:
              </div>
              <div className="space-y-4">
                {lesson.objectives.map((obj, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 text-base sm:text-xl font-semibold leading-relaxed">
                    <CheckCircle2 className="w-6 h-6 text-cyan-400 shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <FormattedLessonText text={obj} highlightBullets={false} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Slide: Starter */}
          {currentSlide === 'starter' && (
            <div className="space-y-6 max-w-3xl animate-in fade-in">
              <div className="inline-flex items-center gap-2 text-amber-300 text-sm font-extrabold uppercase tracking-wider">
                <Lightbulb className="w-5 h-5" />
                Khởi động • Tình huống thực tiễn:
              </div>
              <div className="text-xl sm:text-2xl text-slate-200 leading-relaxed font-medium">
                <FormattedLessonText text={lesson.starter.situation} highlightBullets={false} />
              </div>
              <div className="p-6 rounded-2xl bg-amber-500/20 border-2 border-amber-400 text-lg sm:text-xl font-bold text-amber-200">
                ❓ <FormattedLessonText text={lesson.starter.question} highlightBullets={false} />
              </div>
            </div>
          )}

          {/* Slide: Discovery */}
          {currentSlide === 'discovery' && (
            <div className="space-y-6 max-w-3xl animate-in fade-in">
              <div className="inline-flex items-center gap-2 text-cyan-300 text-sm font-extrabold uppercase tracking-wider">
                <Sparkles className="w-5 h-5" />
                Nhiệm vụ thảo luận nhóm học sinh:
              </div>
              {lesson.discoveryActivities[0] && (
                <div className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {lesson.discoveryActivities[0].title}
                  </h3>
                  <div className="text-base sm:text-lg text-slate-200 bg-white/10 p-5 rounded-2xl border border-white/10 leading-relaxed">
                    <FormattedLessonText text={lesson.discoveryActivities[0].context} />
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-cyan-200">
                    ❓ <FormattedLessonText text={lesson.discoveryActivities[0].guidingQuestion} highlightBullets={false} />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Slide: Knowledge Box */}
          {currentSlide === 'knowledge' && (
            <div className="space-y-6 max-w-3xl animate-in fade-in">
              <div className="inline-flex items-center gap-2 text-amber-300 text-sm font-extrabold uppercase tracking-wider">
                <BookOpen className="w-5 h-5" />
                Hộp kiến thức trọng tâm SGK:
              </div>
              <div className="space-y-4">
                {lesson.knowledgeBox.map((box, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-5 rounded-2xl bg-amber-400/10 border-2 border-amber-400/40 text-base sm:text-lg text-amber-100 font-semibold leading-relaxed">
                    <span className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 font-black flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <div className="flex-1">
                      <FormattedLessonText text={box} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Slide: Quiz */}
          {currentSlide === 'quiz' && (
            <div className="space-y-6 max-w-3xl animate-in fade-in">
              {lessonQuestions.length > 0 ? (
                (() => {
                  const q = lessonQuestions[quizIndex];
                  return (
                    <div className="space-y-5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-cyan-300 uppercase">
                          Câu {quizIndex + 1} / {lessonQuestions.length} ({q.difficulty})
                        </span>
                        <button
                          onClick={() => { sound.playClick(); setIsAnswerRevealed(!isAnswerRevealed); }}
                          className="px-4 py-1.5 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs flex items-center gap-1.5 transition-colors"
                        >
                          {isAnswerRevealed ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          {isAnswerRevealed ? 'Ẩn đáp án' : 'Hiện đáp án chuẩn'}
                        </button>
                      </div>

                      <p className="text-lg sm:text-2xl font-bold text-white leading-relaxed">
                        {q.type === 'multiple_choice' ? q.question : q.prompt}
                      </p>

                      {q.type === 'multiple_choice' ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base">
                          {q.options.map((opt, i) => {
                            const isCorrect = i === q.correctAnswer;
                            return (
                              <div
                                key={i}
                                className={`p-4 rounded-xl border flex items-start gap-3 ${
                                  isAnswerRevealed && isCorrect
                                    ? 'bg-emerald-500/30 border-emerald-400 text-emerald-200 font-bold'
                                    : 'bg-white/10 border-white/20 text-slate-200'
                                }`}
                              >
                                <span className="font-extrabold text-cyan-300">{['A', 'B', 'C', 'D'][i]}.</span>
                                <span>{opt}</span>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="space-y-2">
                          {q.items.map((it) => (
                            <div key={it.id} className="p-3 rounded-xl bg-white/10 border border-white/20 flex items-center justify-between text-sm">
                              <span><strong className="uppercase mr-2 text-cyan-300">{it.id})</strong> {it.statement}</span>
                              {isAnswerRevealed && (
                                <span className={`px-2 py-0.5 rounded-md font-bold text-xs ${it.isTrue ? 'bg-emerald-400 text-slate-900' : 'bg-rose-400 text-slate-900'}`}>
                                  {it.isTrue ? 'ĐÚNG' : 'SAI'}
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Question pagination */}
                      <div className="flex items-center gap-2 pt-2">
                        <button
                          disabled={quizIndex === 0}
                          onClick={() => { sound.playClick(); setQuizIndex(quizIndex - 1); setIsAnswerRevealed(false); }}
                          className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-30 text-xs font-bold"
                        >
                          Câu trước
                        </button>
                        <button
                          disabled={quizIndex === lessonQuestions.length - 1}
                          onClick={() => { sound.playClick(); setQuizIndex(quizIndex + 1); setIsAnswerRevealed(false); }}
                          className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-30 text-xs font-bold"
                        >
                          Câu sau
                        </button>
                      </div>
                    </div>
                  );
                })()
              ) : (
                <p className="text-slate-400">Chưa có câu hỏi trắc nghiệm riêng cho bài này.</p>
              )}
            </div>
          )}

        </div>

        {/* Slide Footer */}
        <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-semibold">
          <span>Phím cách (Space) hoặc bấm các nút trên thanh công cụ để chuyển tiếp nội dung</span>
          <span>© Tin học 11 - Định hướng Tin học ứng dụng</span>
        </div>

      </div>

    </div>
  );
};
