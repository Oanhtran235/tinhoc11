import React from 'react';
import { History, Award, Clock, Calendar, CheckCircle2, ChevronRight, Zap, ArrowLeft } from 'lucide-react';
import { ExamResult } from '../types';
import { sound } from '../utils/audio';

interface ExamHistoryViewProps {
  history: ExamResult[];
  onStartNewExam: () => void;
  onBackToMain?: () => void;
}

export const ExamHistoryView: React.FC<ExamHistoryViewProps> = ({
  history,
  onStartNewExam,
  onBackToMain,
}) => {
  return (
    <div className="space-y-6">
      
      {/* Top Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-sky-700 via-blue-800 to-indigo-900 text-white shadow-xl shadow-sky-900/10">
        {onBackToMain && (
          <button
            onClick={() => { sound.playClick(); onBackToMain(); }}
            className="mb-4 px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-black flex items-center gap-2 border border-white/25 transition-all shadow-sm cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Quay lại màn hình chính</span>
          </button>
        )}

        <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-200 border border-cyan-300/30 uppercase tracking-wider inline-block mb-2">
          Theo dõi tiến độ học tập
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
          Lịch Sử Kiểm Tra & Đánh Giá Năng Lực
        </h2>
        <p className="text-xs sm:text-sm text-sky-100/90 mt-2 max-w-2xl leading-relaxed">
          Ghi nhận toàn bộ các bài kiểm tra 15 phút, 45 phút và đề thi học kỳ mà em đã thực hiện. Phân tích chi tiết tỷ lệ đạt theo từng mức độ nhận thức.
        </p>
      </div>

      {/* History List */}
      {history.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 text-slate-400 space-y-3">
          <History className="w-12 h-12 mx-auto text-slate-300" />
          <h3 className="text-base font-bold text-slate-700">Chưa có bài kiểm tra nào được ghi nhận</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Hãy bắt đầu một bài kiểm tra 15 phút hoặc 45 phút để đánh giá mức độ tiếp thu kiến thức của em.
          </p>
          <button
            onClick={() => { sound.playClick(); onStartNewExam(); }}
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 shadow-sm inline-flex items-center gap-2 mt-2"
          >
            <Clock className="w-4 h-4" />
            Bắt đầu bài kiểm tra ngay
          </button>
        </div>
      ) : (
        <div className="space-y-3.5">
          {history.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-700 shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-3 text-xs text-slate-500 mt-1 flex-wrap">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {item.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {Math.round(item.durationSeconds / 60)} phút làm bài
                    </span>
                    <span>{item.totalQuestions} câu hỏi</span>
                  </div>
                </div>
              </div>

              {/* Score Badges */}
              <div className="flex items-center gap-3 self-end sm:self-center">
                <div className="text-right">
                  <span className="text-2xl font-black text-sky-800">
                    {item.score}
                    <span className="text-xs font-bold text-slate-400"> / 10</span>
                  </span>
                  <span className="block text-[10px] font-bold text-emerald-700">
                    {item.percent}% Đạt chuẩn
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>
      )}

    </div>
  );
};
