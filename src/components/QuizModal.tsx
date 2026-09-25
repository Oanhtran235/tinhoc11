import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  ArrowRight, 
  RotateCcw, 
  Trophy, 
  Zap, 
  Check, 
  Sparkles,
  Award,
  ArrowLeft,
  Type
} from 'lucide-react';
import { QuizQuestion, MultipleChoiceQuestion, TrueFalseQuestion, Difficulty } from '../types';
import { sound } from '../utils/audio';

interface QuizModalProps {
  title: string;
  subtitle?: string;
  questions: QuizQuestion[];
  lessonId?: number;
  onClose: () => void;
  onCompleteQuiz: (score: number, maxScore: number, xpEarned: number) => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({
  title,
  subtitle,
  questions,
  lessonId,
  onClose,
  onCompleteQuiz,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fontScale, setFontScale] = useState<'standard' | 'large' | 'huge'>('large');
  
  // Multiple Choice Answers: questionId -> selectedOptionIndex (0-3)
  const [mcAnswers, setMcAnswers] = useState<Record<string, number>>({});
  
  // True False Answers: questionId -> { a?: boolean, b?: boolean, c?: boolean, d?: boolean }
  const [tfAnswers, setTfAnswers] = useState<Record<string, Record<string, boolean>>>({});
  
  // Submitted status per question
  const [submitted, setSubmitted] = useState<Record<string, boolean>>({});
  
  const [isFinished, setIsFinished] = useState(false);

  if (!questions || questions.length === 0) {
    return (
      <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-3xl max-w-md w-full text-center space-y-5 shadow-2xl border border-sky-100">
          <p className="text-slate-800 text-base font-bold">Chưa có câu hỏi luyện tập cho bài học này.</p>
          <button
            onClick={onClose}
            className="px-6 py-3 bg-sky-600 text-white rounded-2xl text-sm font-black shadow-md hover:bg-sky-700 cursor-pointer"
          >
            Quay lại màn hình chính
          </button>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentIndex];
  const isCurrentSubmitted = !!submitted[currentQ.id];

  // Helper for difficulty badge
  const renderDifficultyBadge = (diff: Difficulty) => {
    switch (diff) {
      case 'nhan_biet':
        return <span className="px-3 py-1 rounded-full text-xs font-black bg-emerald-100 text-emerald-800 border border-emerald-200">🟢 Nhận biết</span>;
      case 'thong_hieu':
        return <span className="px-3 py-1 rounded-full text-xs font-black bg-blue-100 text-blue-800 border border-blue-200">🔵 Thông hiểu</span>;
      case 'van_dung':
        return <span className="px-3 py-1 rounded-full text-xs font-black bg-amber-100 text-amber-800 border border-amber-200">🟠 Vận dụng</span>;
      case 'van_dung_cao':
        return <span className="px-3 py-1 rounded-full text-xs font-black bg-rose-100 text-rose-800 border border-rose-200">🔴 Vận dụng cao</span>;
    }
  };

  // Submit current answer and check correctness
  const handleSubmitAnswer = () => {
    if (isCurrentSubmitted) return;

    if (currentQ.type === 'multiple_choice') {
      const selected = mcAnswers[currentQ.id];
      if (selected === undefined) return;
      const isCorrect = selected === currentQ.correctAnswer;
      if (isCorrect) sound.playCorrect();
      else sound.playIncorrect();
    } else {
      // True / False type
      const currentAns = tfAnswers[currentQ.id] || {};
      const allSelected = ['a', 'b', 'c', 'd'].every((key) => currentAns[key] !== undefined);
      if (!allSelected) return;

      const correctCount = currentQ.items.filter((item) => currentAns[item.id] === item.isTrue).length;
      if (correctCount >= 3) sound.playCorrect();
      else sound.playIncorrect();
    }

    setSubmitted((prev) => ({ ...prev, [currentQ.id]: true }));
  };

  // Calculate final score
  const calculateScore = () => {
    let totalScore = 0;
    const maxScore = questions.length; // 1 point per question

    questions.forEach((q) => {
      if (q.type === 'multiple_choice') {
        if (mcAnswers[q.id] === q.correctAnswer) {
          totalScore += 1;
        }
      } else {
        // True / False: MOET point scale
        const userAns = tfAnswers[q.id] || {};
        const correctCount = q.items.filter((item) => userAns[item.id] === item.isTrue).length;
        if (correctCount === 4) totalScore += 1.0;
        else if (correctCount === 3) totalScore += 0.5;
        else if (correctCount === 2) totalScore += 0.25;
        else if (correctCount === 1) totalScore += 0.1;
      }
    });

    const percent = Math.round((totalScore / maxScore) * 100);
    const xp = Math.round(totalScore * 25);
    return {
      totalScore: Number(totalScore.toFixed(2)),
      maxScore,
      percent,
      xp,
    };
  };

  const handleNext = () => {
    sound.playClick();
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // Finished all
      setIsFinished(true);
      const res = calculateScore();
      sound.playChime();
      onCompleteQuiz(res.totalScore, res.maxScore, res.xp);
    }
  };

  const handleRestart = () => {
    sound.playClick();
    setCurrentIndex(0);
    setMcAnswers({});
    setTfAnswers({});
    setSubmitted({});
    setIsFinished(false);
  };

  // Dynamic typography scale
  const questionTextClass = fontScale === 'huge'
    ? 'text-xl sm:text-2xl lg:text-3xl font-black leading-snug'
    : fontScale === 'large'
    ? 'text-lg sm:text-xl lg:text-2xl font-black leading-snug'
    : 'text-base sm:text-lg lg:text-xl font-bold leading-snug';

  const optionTextClass = fontScale === 'huge'
    ? 'text-base sm:text-lg lg:text-xl font-bold'
    : fontScale === 'large'
    ? 'text-sm sm:text-base lg:text-lg font-semibold'
    : 'text-xs sm:text-sm font-medium';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 lg:p-6">
      
      {/* EXPANDED VIEWPORT MODAL */}
      <div className="relative w-full max-w-5xl xl:max-w-6xl bg-white rounded-3xl shadow-2xl border-2 border-sky-100 overflow-hidden flex flex-col max-h-[96vh] animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top Header */}
        <div className="p-5 sm:p-7 bg-gradient-to-r from-sky-700 via-blue-800 to-indigo-900 text-white relative shrink-0">
          
          <div className="flex items-center justify-between gap-4 flex-wrap">
            
            {/* Prominent Back to main screen button */}
            <button
              onClick={() => { sound.playClick(); onClose(); }}
              className="px-4 sm:px-5 py-2.5 rounded-2xl bg-white/20 hover:bg-white/30 text-white font-black text-xs sm:text-sm flex items-center gap-2 border border-white/30 transition-all shadow-md hover:scale-102 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-white" />
              <span>Quay lại màn hình chính</span>
            </button>

            {/* Font Size Adjuster Controls */}
            <div className="flex items-center gap-2 bg-black/25 px-3 py-1.5 rounded-2xl border border-white/20">
              <Type className="w-4 h-4 text-sky-200" />
              <span className="text-xs font-bold text-sky-100 hidden sm:inline">Cỡ chữ:</span>
              <button
                type="button"
                onClick={() => { sound.playClick(); setFontScale('standard'); }}
                className={`px-2.5 py-1 text-xs font-extrabold rounded-xl transition-all cursor-pointer ${
                  fontScale === 'standard' ? 'bg-white text-sky-900 shadow-xs' : 'text-sky-200 hover:text-white'
                }`}
              >
                A Vừa
              </button>
              <button
                type="button"
                onClick={() => { sound.playClick(); setFontScale('large'); }}
                className={`px-2.5 py-1 text-xs font-black rounded-xl transition-all cursor-pointer ${
                  fontScale === 'large' ? 'bg-cyan-300 text-sky-950 shadow-xs' : 'text-sky-200 hover:text-white'
                }`}
              >
                A+ To
              </button>
              <button
                type="button"
                onClick={() => { sound.playClick(); setFontScale('huge'); }}
                className={`px-2.5 py-1 text-xs font-black rounded-xl transition-all cursor-pointer ${
                  fontScale === 'huge' ? 'bg-amber-300 text-amber-950 shadow-xs' : 'text-sky-200 hover:text-white'
                }`}
              >
                A++ Rất to
              </button>
            </div>

            <button
              onClick={() => { sound.playClick(); onClose(); }}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer"
              title="Đóng cửa sổ"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="mt-4">
            <span className="text-xs font-black uppercase tracking-wider text-cyan-200 block">
              {subtitle || 'Luyện tập 10 câu trắc nghiệm & Đúng/Sai phân hóa'}
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white line-clamp-1 mt-0.5">
              {title}
            </h2>
          </div>

          {/* Progress bar */}
          <div className="mt-4 flex items-center gap-3">
            <div className="flex-1 bg-white/20 h-3 rounded-full overflow-hidden">
              <div 
                className="h-full bg-cyan-300 rounded-full transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
              />
            </div>
            <span className="text-xs sm:text-sm font-black text-sky-100 shrink-0">
              Câu {currentIndex + 1}/{questions.length}
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-9 overflow-y-auto flex-1 space-y-6 bg-slate-50/50">

          {/* Finished Screen */}
          {isFinished ? (
            <div className="text-center py-8 space-y-6">
              <div className="w-24 h-24 mx-auto rounded-3xl bg-amber-50 border-2 border-amber-200 flex items-center justify-center text-amber-500 shadow-xl shadow-amber-500/20 animate-bounce">
                <Trophy className="w-12 h-12" />
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                  Hoàn thành xuất sắc bài luyện tập!
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mt-1 font-medium">
                  Em đã trả lời toàn bộ câu hỏi phân hóa của bài học chuẩn SGK.
                </p>
              </div>

              {/* Score Display Card */}
              <div className="max-w-md mx-auto p-6 rounded-3xl bg-gradient-to-br from-sky-50 to-blue-50 border-2 border-sky-200 space-y-3.5 shadow-sm">
                <div className="text-4xl font-black text-sky-900">
                  {calculateScore().totalScore} / {calculateScore().maxScore}
                  <span className="text-sm font-bold text-sky-600 block mt-1">
                    ({calculateScore().percent}% điểm số đạt được)
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm font-black text-amber-800 bg-amber-100/90 py-2 px-4 rounded-full">
                  <Zap className="w-4 h-4 fill-amber-500" />
                  + {calculateScore().xp} XP đã được cộng vào tài khoản
                </div>

                {/* Auto-learn notification if lesson quiz */}
                {lessonId && (
                  calculateScore().percent >= 80 ? (
                    <div className="p-3.5 rounded-2xl bg-emerald-100/90 border border-emerald-300 text-emerald-950 space-y-1 text-center animate-in fade-in">
                      <div className="flex items-center justify-center gap-1.5 font-black text-sm text-emerald-900">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        <span>TỰ ĐỘNG TÍCH "ĐÃ HỌC" THÀNH CÔNG!</span>
                      </div>
                      <p className="text-xs font-semibold text-emerald-800">
                        Đạt {calculateScore().percent}% (&gt; 80%). Hệ thống đã tự động lưu tiến độ và tích dấu "Đã học" cho bài này!
                      </p>
                    </div>
                  ) : (
                    <div className="p-3.5 rounded-2xl bg-amber-100/80 border border-amber-300 text-amber-950 space-y-1 text-center animate-in fade-in">
                      <div className="flex items-center justify-center gap-1.5 font-bold text-xs text-amber-900">
                        <span>⚠️ Chưa đủ điều kiện tự tích "Đã học" (Cần &gt; 80%)</span>
                      </div>
                      <p className="text-[11px] text-amber-800 font-medium">
                        Điểm số đạt {calculateScore().percent}%. Hãy nhấn "Luyện tập lại bài này" để cải thiện kết quả đạt từ 80% trở lên nhé!
                      </p>
                    </div>
                  )
                )}
              </div>

              {/* Action buttons including Back to Main */}
              <div className="flex items-center justify-center gap-3 pt-3 flex-wrap">
                <button
                  type="button"
                  onClick={() => { sound.playClick(); onClose(); }}
                  className="px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-black text-slate-700 bg-slate-100 hover:bg-slate-200 flex items-center gap-2 transition-all cursor-pointer border border-slate-200"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Quay lại màn hình chính
                </button>

                <button
                  type="button"
                  onClick={handleRestart}
                  className="px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-black text-sky-800 bg-sky-50 hover:bg-sky-100 border border-sky-200 flex items-center gap-2 transition-all cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  Luyện tập lại bài này
                </button>

                <button
                  type="button"
                  onClick={() => { sound.playClick(); onClose(); }}
                  className="px-8 py-3.5 rounded-2xl text-xs sm:text-sm font-black text-white bg-gradient-to-r from-sky-600 to-blue-700 hover:opacity-95 shadow-md flex items-center gap-2 transition-all cursor-pointer"
                >
                  <Check className="w-4 h-4" />
                  Hoàn tất & Đóng
                </button>
              </div>

            </div>
          ) : (
            /* Active Question Screen with ENLARGED text */
            <div className="space-y-6">
              
              {/* Question Meta & Difficulty */}
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs sm:text-sm font-black text-slate-400">
                    CÂU HỎI {currentIndex + 1}
                  </span>
                  <span className="text-xs sm:text-sm font-black px-3 py-1 rounded-xl bg-slate-100 text-slate-700 border border-slate-200">
                    {currentQ.type === 'multiple_choice' ? 'Trắc nghiệm 4 phương án' : 'Trắc nghiệm Đúng / Sai (Form mới Bộ GD&ĐT)'}
                  </span>
                </div>

                {renderDifficultyBadge(currentQ.difficulty)}
              </div>

              {/* Question Text */}
              {currentQ.type === 'multiple_choice' ? (
                <div className="space-y-5">
                  <h3 className={`${questionTextClass} text-slate-900 bg-white p-6 sm:p-8 rounded-3xl border-2 border-slate-200 shadow-xs`}>
                    {currentQ.question}
                  </h3>

                  {/* Options */}
                  <div className="mt-4 space-y-3.5">
                    {currentQ.options.map((opt, optIdx) => {
                      const isSelected = mcAnswers[currentQ.id] === optIdx;
                      const isCorrect = optIdx === currentQ.correctAnswer;
                      const prefix = ['A', 'B', 'C', 'D'][optIdx];

                      let btnStyle = 'bg-white border-slate-200 hover:border-sky-400 hover:bg-sky-50/50 text-slate-800 shadow-2xs';

                      if (isCurrentSubmitted) {
                        if (isCorrect) {
                          btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-black shadow-xs ring-2 ring-emerald-500/20';
                        } else if (isSelected && !isCorrect) {
                          btnStyle = 'bg-rose-50 border-rose-400 text-rose-950 line-through opacity-80';
                        } else {
                          btnStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                        }
                      } else if (isSelected) {
                        btnStyle = 'bg-sky-50 border-sky-600 text-sky-950 ring-2 ring-sky-600/30 font-black';
                      }

                      return (
                        <button
                          key={optIdx}
                          type="button"
                          disabled={isCurrentSubmitted}
                          onClick={() => {
                            sound.playClick();
                            setMcAnswers((prev) => ({ ...prev, [currentQ.id]: optIdx }));
                          }}
                          className={`w-full text-left p-5 sm:p-6 rounded-2xl border-2 transition-all flex items-start gap-4 cursor-pointer ${btnStyle}`}
                        >
                          <span className={`w-9 h-9 rounded-xl font-black text-sm sm:text-base flex items-center justify-center shrink-0 mt-0.5 ${
                            isSelected && !isCurrentSubmitted
                              ? 'bg-sky-600 text-white'
                              : isCurrentSubmitted && isCorrect
                              ? 'bg-emerald-600 text-white'
                              : 'bg-slate-100 text-slate-700'
                          }`}>
                            {prefix}
                          </span>
                          <span className={`${optionTextClass} leading-relaxed pt-1`}>
                            {opt}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : (
                /* True / False Question Format */
                <div className="space-y-5">
                  <div className="p-6 rounded-3xl bg-sky-50 border-2 border-sky-200 mb-4 shadow-xs">
                    <span className="text-xs sm:text-sm font-black text-sky-800 uppercase tracking-wider block mb-2">
                      Ngữ cảnh / Lệnh hỏi:
                    </span>
                    <p className={`${questionTextClass} text-slate-900 leading-relaxed`}>
                      {currentQ.prompt}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {currentQ.items.map((item) => {
                      const userChoice = tfAnswers[currentQ.id]?.[item.id];
                      const isCorrectChoice = userChoice === item.isTrue;

                      return (
                        <div 
                          key={item.id}
                          className="p-5 sm:p-6 rounded-2xl bg-white border-2 border-slate-200 hover:border-slate-300 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-2xs"
                        >
                          <div className="flex items-start gap-3.5 flex-1">
                            <span className="w-8 h-8 rounded-xl bg-slate-100 text-slate-700 font-black text-sm flex items-center justify-center shrink-0 uppercase mt-0.5">
                              {item.id}
                            </span>
                            <span className={`${optionTextClass} text-slate-800 leading-relaxed`}>
                              {item.statement}
                            </span>
                          </div>

                          {/* True / False Toggle Buttons */}
                          <div className="flex items-center gap-2.5 self-end sm:self-center shrink-0">
                            <button
                              type="button"
                              disabled={isCurrentSubmitted}
                              onClick={() => {
                                sound.playClick();
                                setTfAnswers((prev) => ({
                                  ...prev,
                                  [currentQ.id]: {
                                    ...(prev[currentQ.id] || {}),
                                    [item.id]: true,
                                  },
                                }));
                              }}
                              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                                userChoice === true
                                  ? isCurrentSubmitted
                                    ? item.isTrue
                                      ? 'bg-emerald-600 text-white'
                                      : 'bg-rose-600 text-white'
                                    : 'bg-emerald-600 text-white shadow-xs'
                                  : 'bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-700'
                              }`}
                            >
                              Đúng
                            </button>

                            <button
                              type="button"
                              disabled={isCurrentSubmitted}
                              onClick={() => {
                                sound.playClick();
                                setTfAnswers((prev) => ({
                                  ...prev,
                                  [currentQ.id]: {
                                    ...(prev[currentQ.id] || {}),
                                    [item.id]: false,
                                  },
                                }));
                              }}
                              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                                userChoice === false
                                  ? isCurrentSubmitted
                                    ? !item.isTrue
                                      ? 'bg-emerald-600 text-white'
                                      : 'bg-rose-600 text-white'
                                    : 'bg-rose-600 text-white shadow-xs'
                                  : 'bg-slate-100 text-slate-600 hover:bg-rose-50 hover:text-rose-700'
                              }`}
                            >
                              Sai
                            </button>

                            {isCurrentSubmitted && (
                              <span className="ml-1">
                                {isCorrectChoice ? (
                                  <CheckCircle2 className="w-7 h-7 text-emerald-600" />
                                ) : (
                                  <XCircle className="w-7 h-7 text-rose-500" />
                                )}
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Explanation box after submission */}
              {isCurrentSubmitted && (
                <div className="p-6 rounded-3xl bg-amber-50 border-2 border-amber-200 animate-in fade-in space-y-3">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-black text-amber-900 uppercase">
                    <Sparkles className="w-5 h-5 text-amber-600" />
                    Lời giải chi tiết & Căn cứ SGK:
                  </div>
                  {currentQ.type === 'multiple_choice' ? (
                    <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-semibold">
                      {currentQ.explanation}
                    </p>
                  ) : (
                    <div className="space-y-2 text-xs sm:text-sm text-slate-800 font-semibold">
                      {currentQ.items.map((it) => (
                        <div key={it.id} className="flex items-start gap-2">
                          <span className="font-black text-amber-900 uppercase shrink-0">Ý {it.id} ({it.isTrue ? 'Đúng' : 'Sai'}):</span>
                          <span>{it.explanation}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

            </div>
          )}

        </div>

        {/* Footer Actions */}
        {!isFinished && (
          <div className="p-5 sm:p-6 bg-white border-t-2 border-slate-100 flex items-center justify-between gap-3 shrink-0">
            <div className="text-xs sm:text-sm text-slate-500 font-bold">
              {!isCurrentSubmitted && (
                currentQ.type === 'multiple_choice'
                  ? 'Hãy chọn 1 đáp án phù hợp nhất'
                  : 'Hãy chọn Đúng/Sai cho cả 4 ý khẳng định'
              )}
            </div>

            <div className="flex items-center gap-3">
              {!isCurrentSubmitted ? (
                <button
                  type="button"
                  onClick={handleSubmitAnswer}
                  disabled={
                    currentQ.type === 'multiple_choice'
                      ? mcAnswers[currentQ.id] === undefined
                      : !['a', 'b', 'c', 'd'].every((k) => tfAnswers[currentQ.id]?.[k] !== undefined)
                  }
                  className="px-6 py-3 rounded-2xl text-xs sm:text-sm font-black text-white bg-sky-600 hover:bg-sky-700 disabled:opacity-40 disabled:hover:bg-sky-600 shadow-md transition-all cursor-pointer"
                >
                  Kiểm tra đáp án
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-7 py-3 rounded-2xl text-xs sm:text-sm font-black text-white bg-gradient-to-r from-sky-600 to-blue-700 hover:opacity-95 shadow-md shadow-sky-600/25 flex items-center gap-2 transition-all cursor-pointer"
                >
                  <span>{currentIndex < questions.length - 1 ? 'Câu tiếp theo' : 'Xem kết quả bài làm'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
