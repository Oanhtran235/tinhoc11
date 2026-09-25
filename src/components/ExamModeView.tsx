import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  Award, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  Play, 
  RotateCcw, 
  Layers, 
  BarChart3,
  Calendar,
  Zap,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';
import { QuizQuestion, ExamResult } from '../types';
import { TOPICS } from '../data/topics';
import { generateExamSet, ALL_QUESTIONS } from '../data/questions';
import { sound } from '../utils/audio';

interface ExamModeViewProps {
  onSaveExamResult: (result: ExamResult) => void;
  onBackToMain?: () => void;
}

export const ExamModeView: React.FC<ExamModeViewProps> = ({ onSaveExamResult, onBackToMain }) => {
  const [selectedTopicId, setSelectedTopicId] = useState<number | 'all'>('all');
  const [examType, setExamType] = useState<'15min' | '45min' | 'semester'>('15min');
  
  // Active test state
  const [isTesting, setIsTesting] = useState(false);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mcAnswers, setMcAnswers] = useState<Record<string, number>>({});
  const [tfAnswers, setTfAnswers] = useState<Record<string, Record<string, boolean>>>({});
  
  // Timer state
  const [timeLeft, setTimeLeft] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  
  // Result screen
  const [completedResult, setCompletedResult] = useState<ExamResult | null>(null);

  // Countdown timer effect
  useEffect(() => {
    if (!isTesting || timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleFinishExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isTesting, timeLeft]);

  const handleStartExam = () => {
    sound.playClick();
    const count = examType === '15min' ? 10 : examType === '45min' ? 15 : 20;
    const minutes = examType === '15min' ? 15 : examType === '45min' ? 45 : 60;
    
    const examQuestions = generateExamSet({
      topicId: selectedTopicId === 'all' ? undefined : selectedTopicId,
      count,
      type: 'mixed',
    });

    setQuestions(examQuestions);
    setTimeLeft(minutes * 60);
    setTotalTime(minutes * 60);
    setMcAnswers({});
    setTfAnswers({});
    setCurrentIndex(0);
    setCompletedResult(null);
    setIsTesting(true);
  };

  const handleFinishExam = () => {
    sound.playChime();
    setIsTesting(false);

    let earnedScore = 0;
    const maxScore = 10; // Normalized out of 10 points
    const rawTotal = questions.length;

    const diffStats = {
      nhan_biet: { correct: 0, total: 0 },
      thong_hieu: { correct: 0, total: 0 },
      van_dung: { correct: 0, total: 0 },
      van_dung_cao: { correct: 0, total: 0 },
    };

    questions.forEach((q) => {
      diffStats[q.difficulty].total += 1;

      if (q.type === 'multiple_choice') {
        if (mcAnswers[q.id] === q.correctAnswer) {
          earnedScore += 1;
          diffStats[q.difficulty].correct += 1;
        }
      } else {
        const userTf = tfAnswers[q.id] || {};
        const count = q.items.filter((it) => userTf[it.id] === it.isTrue).length;
        if (count === 4) {
          earnedScore += 1.0;
          diffStats[q.difficulty].correct += 1;
        } else if (count === 3) {
          earnedScore += 0.5;
        } else if (count === 2) {
          earnedScore += 0.25;
        } else if (count === 1) {
          earnedScore += 0.1;
        }
      }
    });

    const scaledScore = Math.round((earnedScore / rawTotal) * 10 * 10) / 10;
    const percent = Math.round((scaledScore / 10) * 100);

    const result: ExamResult = {
      id: 'exam_' + Date.now(),
      date: new Date().toLocaleDateString('vi-VN') + ' ' + new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
      title: examType === '15min' ? 'Kiểm tra 15 phút' : examType === '45min' ? 'Kiểm tra 1 tiết (45p)' : 'Đề thi học kỳ',
      topicId: selectedTopicId === 'all' ? undefined : selectedTopicId,
      totalQuestions: rawTotal,
      score: scaledScore,
      maxScore: 10,
      percent,
      durationSeconds: totalTime - timeLeft,
      difficultyStats: diffStats,
    };

    setCompletedResult(result);
    onSaveExamResult(result);
  };

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="space-y-6">
      
      {/* If currently taking exam */}
      {isTesting ? (
        <div className="bg-white rounded-3xl border border-sky-100 shadow-xl overflow-hidden">
          
          {/* Header with Countdown and Exit */}
          <div className="p-4 sm:p-5 bg-gradient-to-r from-sky-700 via-blue-800 to-indigo-900 text-white flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3">
              {onBackToMain && (
                <button
                  onClick={() => {
                    if (window.confirm('Bạn có chắc muốn thoát bài thi để về màn hình chính?')) {
                      sound.playClick();
                      setIsTesting(false);
                      onBackToMain();
                    }
                  }}
                  className="px-3.5 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-bold flex items-center gap-1.5 transition-colors border border-white/20 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Quay lại màn hình chính</span>
                </button>
              )}

              <div>
                <span className="text-xs font-bold text-cyan-200 uppercase">
                  Phòng thi trực tuyến • Tính điểm chuẩn 10
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white">
                  {examType === '15min' ? 'Bài kiểm tra 15 phút' : examType === '45min' ? 'Bài kiểm tra 1 tiết (45 phút)' : 'Đề thi học kỳ'}
                </h3>
              </div>
            </div>

            {/* Timer badge */}
            <div className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl font-mono text-sm sm:text-base font-bold shadow-xs ${
              timeLeft < 180 ? 'bg-rose-500 text-white animate-pulse' : 'bg-white/10 text-cyan-200 border border-white/20'
            }`}>
              <Clock className="w-4 h-4" />
              <span>{formatTimer(timeLeft)}</span>
            </div>
          </div>

          {/* Exam question navigation strip */}
          <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
            {questions.map((q, idx) => {
              const isAnswered = q.type === 'multiple_choice' 
                ? mcAnswers[q.id] !== undefined 
                : ['a', 'b', 'c', 'd'].some((k) => tfAnswers[q.id]?.[k] !== undefined);

              return (
                <button
                  key={q.id}
                  onClick={() => { sound.playClick(); setCurrentIndex(idx); }}
                  className={`w-8 h-8 rounded-lg font-bold text-xs shrink-0 transition-all ${
                    currentIndex === idx
                      ? 'bg-sky-600 text-white shadow-xs'
                      : isAnswered
                      ? 'bg-sky-100 text-sky-800 border border-sky-300'
                      : 'bg-white text-slate-500 border border-slate-200'
                  }`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>

          {/* Active Question Content */}
          {questions[currentIndex] && (
            <div className="p-6 sm:p-8 space-y-6">
              
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-extrabold text-sky-800 uppercase tracking-wider">
                  CÂU SỐ {currentIndex + 1} / {questions.length}
                </span>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                  {questions[currentIndex].type === 'multiple_choice' ? 'Trắc nghiệm 4 lựa chọn' : 'Trắc nghiệm Đúng / Sai'}
                </span>
              </div>

              {questions[currentIndex].type === 'multiple_choice' ? (
                <div className="space-y-4">
                  <p className="text-base font-bold text-slate-900 leading-relaxed">
                    {questions[currentIndex].question}
                  </p>
                  
                  <div className="space-y-2.5">
                    {questions[currentIndex].options.map((opt, optIdx) => {
                      const isSelected = mcAnswers[questions[currentIndex].id] === optIdx;
                      return (
                        <button
                          key={optIdx}
                          onClick={() => {
                            sound.playClick();
                            setMcAnswers((prev) => ({ ...prev, [questions[currentIndex].id]: optIdx }));
                          }}
                          className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-start gap-3 ${
                            isSelected
                              ? 'bg-sky-50 border-sky-600 text-sky-900 ring-2 ring-sky-600/20 font-bold'
                              : 'bg-white border-slate-200 hover:border-slate-300 text-slate-800'
                          }`}
                        >
                          <span className={`w-7 h-7 rounded-xl font-extrabold text-xs flex items-center justify-center shrink-0 ${
                            isSelected ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-700'
                          }`}>
                            {['A', 'B', 'C', 'D'][optIdx]}
                          </span>
                          <span className="text-xs sm:text-sm pt-0.5 leading-relaxed">{opt}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : (
                /* True / False Question in Exam */
                <div className="space-y-4">
                  <div className="p-4 bg-sky-50 rounded-2xl border border-sky-200 text-xs sm:text-sm font-semibold text-slate-900 leading-relaxed">
                    {questions[currentIndex].prompt}
                  </div>

                  <div className="space-y-3">
                    {questions[currentIndex].items.map((it) => {
                      const userChoice = tfAnswers[questions[currentIndex].id]?.[it.id];
                      return (
                        <div key={it.id} className="p-3.5 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
                          <div className="flex items-start gap-2 flex-1">
                            <span className="w-6 h-6 rounded-lg bg-slate-100 text-slate-700 font-extrabold text-xs flex items-center justify-center shrink-0 uppercase mt-0.5">
                              {it.id}
                            </span>
                            <span className="text-slate-800 leading-relaxed font-medium">{it.statement}</span>
                          </div>

                          <div className="flex items-center gap-1.5 self-end sm:self-center shrink-0">
                            <button
                              type="button"
                              onClick={() => {
                                sound.playClick();
                                setTfAnswers((prev) => ({
                                  ...prev,
                                  [questions[currentIndex].id]: {
                                    ...(prev[questions[currentIndex].id] || {}),
                                    [it.id]: true,
                                  },
                                }));
                              }}
                              className={`px-3.5 py-1.5 rounded-xl font-bold text-xs transition-all ${
                                userChoice === true ? 'bg-emerald-600 text-white shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-700'
                              }`}
                            >
                              Đúng
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                sound.playClick();
                                setTfAnswers((prev) => ({
                                  ...prev,
                                  [questions[currentIndex].id]: {
                                    ...(prev[questions[currentIndex].id] || {}),
                                    [it.id]: false,
                                  },
                                }));
                              }}
                              className={`px-3.5 py-1.5 rounded-xl font-bold text-xs transition-all ${
                                userChoice === false ? 'bg-rose-600 text-white shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-rose-50 hover:text-rose-700'
                              }`}
                            >
                              Sai
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Bottom Nav inside exam */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  disabled={currentIndex === 0}
                  onClick={() => { sound.playClick(); setCurrentIndex(currentIndex - 1); }}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 disabled:opacity-40 transition-colors"
                >
                  Câu trước
                </button>

                <div className="flex items-center gap-2">
                  {currentIndex < questions.length - 1 ? (
                    <button
                      type="button"
                      onClick={() => { sound.playClick(); setCurrentIndex(currentIndex + 1); }}
                      className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 shadow-sm flex items-center gap-1.5 transition-all"
                    >
                      <span>Câu tiếp theo</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleFinishExam}
                      className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/25 flex items-center gap-1.5 transition-all"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      Nộp bài thi ngay
                    </button>
                  )}
                </div>
              </div>

            </div>
          )}

        </div>
      ) : completedResult ? (
        /* Result Screen */
        <div className="bg-white rounded-3xl border border-sky-100 shadow-xl p-6 sm:p-8 space-y-6 animate-in fade-in">
          
          <div className="text-center space-y-3">
            <div className="w-16 h-16 mx-auto rounded-3xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-500 shadow-md shadow-amber-500/20">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-slate-900">
              Kết Quả Bài Kiểm Tra Đánh Giá
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              {completedResult.title} • Thời gian làm bài: {Math.round(completedResult.durationSeconds / 60)} phút
            </p>
          </div>

          {/* Big Score Card */}
          <div className="max-w-md mx-auto p-6 rounded-3xl bg-gradient-to-br from-sky-50 via-cyan-50 to-blue-50 border-2 border-sky-200 text-center space-y-2">
            <div className="text-5xl font-black text-sky-800 tracking-tight">
              {completedResult.score} <span className="text-xl font-bold text-sky-600">/ 10</span>
            </div>
            <div className="text-xs font-bold text-sky-700">
              Đạt {completedResult.percent}% tổng điểm chuẩn ma trận
            </div>
            <div className="inline-block px-3 py-1 rounded-full text-xs font-extrabold bg-sky-600 text-white shadow-xs">
              {completedResult.score >= 8.5 ? 'Xếp loại: Giỏi' : completedResult.score >= 7.0 ? 'Xếp loại: Khá' : completedResult.score >= 5.0 ? 'Xếp loại: Đạt' : 'Xếp loại: Cần cố gắng'}
            </div>
          </div>

          {/* Competency Analysis (Ma trận phân hóa năng lực) */}
          <div className="max-w-xl mx-auto space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
              Phân tích năng lực theo 4 mức độ:
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center">
              <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200">
                <span className="text-[10px] font-bold text-emerald-800 block">Nhận biết</span>
                <span className="text-lg font-black text-emerald-900">
                  {completedResult.difficultyStats.nhan_biet.correct}/{completedResult.difficultyStats.nhan_biet.total}
                </span>
              </div>
              <div className="p-3 rounded-2xl bg-blue-50 border border-blue-200">
                <span className="text-[10px] font-bold text-blue-800 block">Thông hiểu</span>
                <span className="text-lg font-black text-blue-900">
                  {completedResult.difficultyStats.thong_hieu.correct}/{completedResult.difficultyStats.thong_hieu.total}
                </span>
              </div>
              <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200">
                <span className="text-[10px] font-bold text-amber-800 block">Vận dụng</span>
                <span className="text-lg font-black text-amber-900">
                  {completedResult.difficultyStats.van_dung.correct}/{completedResult.difficultyStats.van_dung.total}
                </span>
              </div>
              <div className="p-3 rounded-2xl bg-rose-50 border border-rose-200">
                <span className="text-[10px] font-bold text-rose-800 block">Vận dụng cao</span>
                <span className="text-lg font-black text-rose-900">
                  {completedResult.difficultyStats.van_dung_cao.correct}/{completedResult.difficultyStats.van_dung_cao.total}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 pt-2 flex-wrap">
            {onBackToMain && (
              <button
                onClick={() => { sound.playClick(); onBackToMain(); }}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                Quay lại màn hình chính
              </button>
            )}

            <button
              onClick={() => { sound.playClick(); setCompletedResult(null); }}
              className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 shadow-sm cursor-pointer"
            >
              Trở về danh mục kiểm tra
            </button>
          </div>

        </div>
      ) : (
        /* Configuration Screen */
        <div className="space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-sky-700 via-blue-800 to-indigo-900 text-white shadow-xl shadow-sky-900/10 relative overflow-hidden">
            {onBackToMain && (
              <button
                onClick={() => { sound.playClick(); onBackToMain(); }}
                className="mb-4 px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-black flex items-center gap-2 border border-white/25 transition-all shadow-sm cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Quay lại màn hình chính</span>
              </button>
            )}

            <div className="max-w-2xl relative">
              <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-200 border border-cyan-300/30 uppercase tracking-wider inline-block mb-2">
                Hệ thống kiểm tra & đánh giá năng lực
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Thi Thử Trắc Nghiệm Chuẩn Ma Trận
              </h2>
              <p className="text-xs sm:text-sm text-sky-100/90 mt-2 leading-relaxed">
                Tổ chức kiểm tra định kỳ hoặc học kỳ với đề thi tự động kết hợp cả 2 dạng: Trắc nghiệm 4 lựa chọn và Đúng/Sai phân hóa, có tính giờ thực tế và xếp loại học tập.
              </p>
            </div>
          </div>

          {/* Exam Type Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <div 
              onClick={() => { sound.playClick(); setExamType('15min'); }}
              className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                examType === '15min'
                  ? 'bg-sky-50/70 border-sky-600 shadow-md ring-2 ring-sky-600/10'
                  : 'bg-white border-slate-200 hover:border-sky-300'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="p-2.5 rounded-xl bg-sky-100 text-sky-800 font-extrabold text-xs">
                  15 PHÚT
                </span>
                <Clock className="w-5 h-5 text-sky-600" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">
                Kiểm tra thường xuyên
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-3">
                10 câu hỏi ngắn trắc nghiệm & đúng sai kiểm tra độ hiểu bài sau mỗi chủ đề.
              </p>
              <span className="text-xs font-bold text-sky-700">10 câu • 15 phút</span>
            </div>

            <div 
              onClick={() => { sound.playClick(); setExamType('45min'); }}
              className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                examType === '45min'
                  ? 'bg-sky-50/70 border-sky-600 shadow-md ring-2 ring-sky-600/10'
                  : 'bg-white border-slate-200 hover:border-sky-300'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="p-2.5 rounded-xl bg-blue-100 text-blue-800 font-extrabold text-xs">
                  45 PHÚT
                </span>
                <Clock className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">
                Kiểm tra giữa kì (1 tiết)
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-3">
                15 câu hỏi cấu trúc phân hóa đầy đủ 4 mức độ: Nhận biết, Thông hiểu, Vận dụng.
              </p>
              <span className="text-xs font-bold text-blue-700">15 câu • 45 phút</span>
            </div>

            <div 
              onClick={() => { sound.playClick(); setExamType('semester'); }}
              className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                examType === 'semester'
                  ? 'bg-sky-50/70 border-sky-600 shadow-md ring-2 ring-sky-600/10'
                  : 'bg-white border-slate-200 hover:border-sky-300'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="p-2.5 rounded-xl bg-indigo-100 text-indigo-800 font-extrabold text-xs">
                  HỌC KỲ
                </span>
                <Award className="w-5 h-5 text-indigo-600" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">
                Đề thi Cuối học kỳ
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-3">
                20 câu tổng hợp kiến thức cả 7 chủ đề với câu hỏi tình huống thực tế chuyên sâu.
              </p>
              <span className="text-xs font-bold text-indigo-700">20 câu • 60 phút</span>
            </div>

          </div>

          {/* Scope selection */}
          <div className="p-5 bg-white rounded-2xl border border-sky-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex-1">
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Phạm vi kiến thức thi thử:
              </label>
              <select
                value={selectedTopicId}
                onChange={(e) => setSelectedTopicId(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                className="w-full sm:w-80 px-3.5 py-2 text-xs font-bold rounded-xl border border-slate-300 bg-slate-50 text-slate-800 outline-hidden"
              >
                <option value="all">Toàn bộ 7 Chủ đề SGK Tin học 11</option>
                {TOPICS.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.code}: {t.title}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={handleStartExam}
              className="px-8 py-3 rounded-2xl text-xs font-black text-white bg-gradient-to-r from-sky-600 via-blue-700 to-indigo-800 hover:opacity-95 shadow-md shadow-sky-600/30 flex items-center justify-center gap-2 transition-all self-end sm:self-center"
            >
              <Play className="w-4 h-4 fill-white" />
              Bắt đầu tính giờ làm bài
            </button>
          </div>

        </div>
      )}

    </div>
  );
};
