import React from 'react';
import { 
  CheckCircle2, 
  X, 
  FileQuestion, 
  Sparkles, 
  RotateCcw, 
  ArrowRight, 
  Award,
  AlertTriangle,
  BookOpen
} from 'lucide-react';
import { Lesson, LessonQuizStat } from '../types';
import { sound } from '../utils/audio';

interface AutoLearnCheckModalProps {
  lesson: Lesson;
  isCompleted: boolean;
  quizStat?: LessonQuizStat;
  onClose: () => void;
  onStartQuiz: (lesson: Lesson) => void;
  onConfirmAutoMark: (lessonId: number) => void;
  onUnmarkCompleted?: (lessonId: number) => void;
}

export const AutoLearnCheckModal: React.FC<AutoLearnCheckModalProps> = ({
  lesson,
  isCompleted,
  quizStat,
  onClose,
  onStartQuiz,
  onConfirmAutoMark,
  onUnmarkCompleted,
}) => {
  const currentPercent = quizStat ? quizStat.percent : 0;
  const isEligible = currentPercent >= 80;

  const handleStartQuizClick = () => {
    sound.playClick();
    onClose();
    onStartQuiz(lesson);
  };

  const handleConfirmMark = () => {
    sound.playCorrect();
    onConfirmAutoMark(lesson.id);
    onClose();
  };

  const handleUnmark = () => {
    sound.playClick();
    if (onUnmarkCompleted) {
      onUnmarkCompleted(lesson.id);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border-2 border-sky-100 overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className={`p-5 sm:p-6 text-white relative shrink-0 ${
          isCompleted 
            ? 'bg-gradient-to-r from-emerald-600 via-teal-700 to-emerald-800' 
            : isEligible
            ? 'bg-gradient-to-r from-teal-600 via-sky-700 to-blue-800'
            : 'bg-gradient-to-r from-sky-700 via-blue-800 to-indigo-900'
        }`}>
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-wider text-emerald-200 bg-white/10 px-2.5 py-1 rounded-lg">
              Bài {lesson.lessonNumber} • Tự tích đã học
            </span>
            <button
              onClick={() => { sound.playClick(); onClose(); }}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <h2 className="text-lg sm:text-xl font-black mt-2 leading-snug">
            {lesson.title}
          </h2>
          <p className="text-xs text-sky-100 mt-1">
            Điều kiện: Hoàn thành 10 câu trắc nghiệm với độ chính xác trên 80%
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 bg-slate-50/50">
          
          {/* CASE 1: ALREADY COMPLETED */}
          {isCompleted && (
            <div className="p-5 rounded-2xl bg-emerald-50 border-2 border-emerald-200 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0 shadow-xs">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-black text-emerald-950">
                    Bài học đã được công nhận hoàn thành!
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-800 mt-1 font-medium">
                    {quizStat ? (
                      <>
                        Kết quả trắc nghiệm tốt nhất:{' '}
                        <strong className="font-extrabold text-emerald-950">
                          {quizStat.bestScore}/{quizStat.maxScore} câu ({quizStat.percent}%)
                        </strong>
                        . Đã đạt yêu cầu trên 80%.
                      </>
                    ) : (
                      'Bài học đã được tích dấu Đã học trong hệ thống.'
                    )}
                  </p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="space-y-1.5 pt-1">
                <div className="flex items-center justify-between text-xs font-bold text-emerald-900">
                  <span>Tiến độ trắc nghiệm:</span>
                  <span className="font-black text-emerald-700">
                    {quizStat ? `${quizStat.percent}% (Đạt chuẩn >80%)` : 'Đã xác nhận'}
                  </span>
                </div>
                <div className="w-full bg-emerald-200/60 h-2.5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-emerald-600 rounded-full"
                    style={{ width: `${Math.max(quizStat ? quizStat.percent : 100, 100)}%` }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* CASE 2: NOT COMPLETED BUT ELIGIBLE (>=80%) */}
          {!isCompleted && isEligible && (
            <div className="p-5 rounded-2xl bg-teal-50 border-2 border-teal-300 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-2xl bg-teal-100 flex items-center justify-center text-teal-700 shrink-0 shadow-xs">
                  <Sparkles className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-black text-teal-950">
                    Đủ điều kiện tự tích Đã học!
                  </h3>
                  <p className="text-xs sm:text-sm text-teal-800 mt-1 font-medium">
                    Kết quả trắc nghiệm đạt{' '}
                    <strong className="font-extrabold text-teal-950">
                      {quizStat?.percent}%
                    </strong>{' '}
                    (vượt chuẩn 80%). Em có thể tự tích hoàn thành bài ngay bây giờ!
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleConfirmMark}
                className="w-full py-3.5 px-4 rounded-xl text-sm font-black text-white bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <CheckCircle2 className="w-5 h-5" />
                <span>Xác nhận tự tích "Đã học" (+50 XP)</span>
              </button>
            </div>
          )}

          {/* CASE 3: NOT COMPLETED & NOT ELIGIBLE (<80%) */}
          {!isCompleted && !isEligible && (
            <div className="p-5 rounded-2xl bg-amber-50 border-2 border-amber-200 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-700 shrink-0 shadow-xs">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-black text-amber-950">
                    Chưa đủ điều kiện tự tích "Đã học"
                  </h3>
                  <p className="text-xs sm:text-sm text-amber-800 mt-1 font-medium">
                    {quizStat ? (
                      <>
                        Kết quả hiện tại là{' '}
                        <strong className="font-bold text-amber-950">
                          {quizStat.bestScore}/{quizStat.maxScore} câu ({quizStat.percent}%)
                        </strong>
                        . Cần đạt trên 80% (từ 8 câu đúng trở lên) để tự tích.
                      </>
                    ) : (
                      'Em chưa hoàn thành bộ 10 câu trắc nghiệm của bài học này.'
                    )}
                  </p>
                </div>
              </div>

              {/* Visual gauge */}
              <div className="space-y-1.5 bg-white p-3.5 rounded-xl border border-amber-200">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-slate-600">Tiến độ trắc nghiệm:</span>
                  <span className="text-amber-700 font-black">
                    {quizStat ? `${quizStat.percent}% / Yêu cầu >80%` : '0% / Yêu cầu >80%'}
                  </span>
                </div>
                <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden relative">
                  <div 
                    className="h-full bg-amber-500 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(currentPercent, 100)}%` }}
                  />
                  {/* 80% marker */}
                  <div 
                    className="absolute top-0 bottom-0 w-0.5 bg-red-500 z-10"
                    style={{ left: '80%' }}
                    title="Mốc chuẩn 80%"
                  />
                </div>
                <div className="flex justify-between text-[10px] text-slate-400 font-semibold pt-0.5">
                  <span>0%</span>
                  <span className="text-red-600 font-bold">Mốc 80% (Chuẩn Đã học)</span>
                  <span>100%</span>
                </div>
              </div>
            </div>
          )}

          {/* Regulation Note Box */}
          <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 space-y-1">
            <div className="font-black text-slate-800 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-sky-600" />
              <span>Cơ chế tự tích Đã học tự động:</span>
            </div>
            <p className="leading-relaxed">
              Mỗi bài học gồm <strong>10 câu trắc nghiệm phân hóa</strong> (4 lựa chọn và Đúng/Sai chuẩn cấu trúc GDPT). Khi em luyện tập đạt từ <strong>80% điểm số trở lên</strong>, hệ thống sẽ tự động tích dấu <strong>"Đã học"</strong> trên thẻ bài học và lưu trữ kết quả.
            </p>
          </div>

          {/* Modal Action Buttons */}
          <div className="flex items-center gap-3 pt-2 flex-wrap">
            <button
              type="button"
              onClick={handleStartQuizClick}
              className="flex-1 min-w-[170px] py-3 px-4 rounded-xl text-xs sm:text-sm font-black text-white bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <FileQuestion className="w-4 h-4" />
              <span>{isCompleted ? 'Luyện tập lại 10 câu' : 'Làm 10 câu trắc nghiệm ngay'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {isCompleted && onUnmarkCompleted && (
              <button
                type="button"
                onClick={handleUnmark}
                className="py-3 px-3.5 rounded-xl text-xs font-bold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 transition-all cursor-pointer"
                title="Bỏ đánh dấu hoàn thành nếu muốn tự luyện lại từ đầu"
              >
                Bỏ tích
              </button>
            )}

            <button
              type="button"
              onClick={() => { sound.playClick(); onClose(); }}
              className="py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-all cursor-pointer"
            >
              Đóng
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
