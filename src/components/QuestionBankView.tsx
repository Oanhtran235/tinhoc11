import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  Copy, 
  Check, 
  Play, 
  Eye, 
  EyeOff,
  Layers,
  Sparkles,
  ArrowLeft
} from 'lucide-react';
import { QuizQuestion, Difficulty, Topic } from '../types';
import { ALL_QUESTIONS } from '../data/questions';
import { TOPICS } from '../data/topics';
import { ALL_LESSONS } from '../data/lessons';
import { sound } from '../utils/audio';

interface QuestionBankViewProps {
  onStartQuizWithQuestions: (questions: QuizQuestion[], title: string) => void;
  onBackToMain?: () => void;
}

export const QuestionBankView: React.FC<QuestionBankViewProps> = ({
  onStartQuizWithQuestions,
  onBackToMain,
}) => {
  const [selectedTopicId, setSelectedTopicId] = useState<number | 'all'>('all');
  const [selectedType, setSelectedType] = useState<'all' | 'multiple_choice' | 'true_false'>('all');
  const [selectedDiff, setSelectedDiff] = useState<Difficulty | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Toggle answer visibility
  const [showAllAnswers, setShowAllAnswers] = useState(false);
  const [expandedAnswers, setExpandedAnswers] = useState<Record<string, boolean>>({});
  
  // Copy success indicator
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Filter questions
  const filteredQuestions = ALL_QUESTIONS.filter((q) => {
    if (selectedTopicId !== 'all' && q.topicId !== selectedTopicId) return false;
    if (selectedType !== 'all' && q.type !== selectedType) return false;
    if (selectedDiff !== 'all' && q.difficulty !== selectedDiff) return false;
    if (searchQuery.trim()) {
      const qLower = searchQuery.toLowerCase();
      if (q.type === 'multiple_choice') {
        const textMatch = q.question.toLowerCase().includes(qLower) || 
                          q.options.some((o) => o.toLowerCase().includes(qLower));
        if (!textMatch) return false;
      } else {
        const textMatch = q.prompt.toLowerCase().includes(qLower) || 
                          q.items.some((it) => it.statement.toLowerCase().includes(qLower));
        if (!textMatch) return false;
      }
    }
    return true;
  });

  const toggleAnswer = (id: string) => {
    sound.playClick();
    setExpandedAnswers((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCopyQuestion = (q: QuizQuestion) => {
    sound.playClick();
    let textToCopy = '';
    const lesson = ALL_LESSONS.find((l) => l.id === q.lessonId);
    const lessonText = lesson ? `[Bài ${lesson.lessonNumber}: ${lesson.title}]` : '';

    if (q.type === 'multiple_choice') {
      textToCopy = `${lessonText} Câu hỏi (${q.difficulty}): ${q.question}\n` +
        `A. ${q.options[0]}\nB. ${q.options[1]}\nC. ${q.options[2]}\nD. ${q.options[3]}\n` +
        `-> Đáp án đúng: ${['A', 'B', 'C', 'D'][q.correctAnswer]}\n` +
        `-> Hướng dẫn giải: ${q.explanation}`;
    } else {
      textToCopy = `${lessonText} Câu hỏi Đúng/Sai (${q.difficulty}): ${q.prompt}\n` +
        q.items.map((it) => `${it.id}) ${it.statement} [${it.isTrue ? 'ĐÚNG' : 'SAI'}] - ${it.explanation}`).join('\n');
    }

    navigator.clipboard.writeText(textToCopy);
    setCopiedId(q.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const renderDifficultyBadge = (diff: Difficulty) => {
    switch (diff) {
      case 'nhan_biet':
        return <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-200">🟢 Nhận biết</span>;
      case 'thong_hieu':
        return <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-blue-100 text-blue-800 border border-blue-200">🔵 Thông hiểu</span>;
      case 'van_dung':
        return <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-100 text-amber-800 border border-amber-200">🟠 Vận dụng</span>;
      case 'van_dung_cao':
        return <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-rose-100 text-rose-800 border border-rose-200">🔴 Vận dụng cao</span>;
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Top Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-sky-700 via-blue-800 to-indigo-900 text-white shadow-xl shadow-sky-900/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-radial from-white/10 to-transparent pointer-events-none rounded-full" />
        
        {onBackToMain && (
          <button
            onClick={() => { sound.playClick(); onBackToMain(); }}
            className="mb-4 px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-black flex items-center gap-2 border border-white/25 transition-all shadow-sm cursor-pointer relative z-10"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Quay lại màn hình chính</span>
          </button>
        )}

        <div className="max-w-3xl relative">
          <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-200 border border-cyan-300/30 uppercase tracking-wider inline-block mb-2">
            Ngân hàng câu hỏi chuẩn hóa SGK
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Kho Câu Hỏi Trắc Nghiệm & Đúng / Sai Phân Hóa
          </h2>
          <p className="text-xs sm:text-sm text-sky-100/90 mt-2 leading-relaxed">
            Đầy đủ 2 dạng trắc nghiệm (Nhiều lựa chọn & Đúng/Sai theo cấu trúc Bộ GD&ĐT 2025). Đã phân chia ma trận 4 mức độ: Nhận biết, Thông hiểu, Vận dụng, Vận dụng cao, sẵn sàng phục vụ ôn luyện và kiểm tra đánh giá.
          </p>

          <div className="flex items-center gap-3 mt-5 flex-wrap">
            <button
              onClick={() => {
                sound.playClick();
                onStartQuizWithQuestions(filteredQuestions, 'Luyện tập Ngân hàng câu hỏi đang lọc');
              }}
              disabled={filteredQuestions.length === 0}
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-sky-900 bg-cyan-300 hover:bg-cyan-200 shadow-sm flex items-center gap-2 transition-all disabled:opacity-50"
            >
              <Play className="w-4 h-4 fill-sky-900" />
              Luyện tập ngay {filteredQuestions.length} câu đang lọc
            </button>

            <button
              onClick={() => {
                sound.playClick();
                setShowAllAnswers(!showAllAnswers);
              }}
              className="px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 flex items-center gap-2 transition-all"
            >
              {showAllAnswers ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              {showAllAnswers ? 'Ẩn toàn bộ đáp án' : 'Hiện toàn bộ đáp án & lời giải'}
            </button>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 sm:p-5 rounded-2xl bg-white border border-sky-100 shadow-sm space-y-4">
        
        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm kiếm nội dung câu hỏi, từ khóa kỹ thuật (SQL, GIMP, RAM, Plug & Play, Port 3306...)"
            className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-hidden"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-col md:flex-row gap-3">
          
          {/* Topic Selector */}
          <div className="flex-1">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Chủ đề SGK:
            </label>
            <select
              value={selectedTopicId}
              onChange={(e) => {
                sound.playClick();
                setSelectedTopicId(e.target.value === 'all' ? 'all' : Number(e.target.value));
              }}
              className="w-full px-3 py-2 text-xs font-bold rounded-xl border border-slate-200 bg-slate-50 text-slate-700 outline-hidden"
            >
              <option value="all">Tất cả 7 Chủ đề (31 bài)</option>
              {TOPICS.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.code}: {t.title}
                </option>
              ))}
            </select>
          </div>

          {/* Question Type Selector */}
          <div className="w-full md:w-56">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Dạng trắc nghiệm:
            </label>
            <select
              value={selectedType}
              onChange={(e) => {
                sound.playClick();
                setSelectedType(e.target.value as 'all' | 'multiple_choice' | 'true_false');
              }}
              className="w-full px-3 py-2 text-xs font-bold rounded-xl border border-slate-200 bg-slate-50 text-slate-700 outline-hidden"
            >
              <option value="all">Cả 2 dạng câu hỏi</option>
              <option value="multiple_choice">Trắc nghiệm 4 phương án (A,B,C,D)</option>
              <option value="true_false">Trắc nghiệm Đúng / Sai (Bộ GD&ĐT)</option>
            </select>
          </div>

          {/* Difficulty Selector */}
          <div className="w-full md:w-48">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Mức độ phân hóa:
            </label>
            <select
              value={selectedDiff}
              onChange={(e) => {
                sound.playClick();
                setSelectedDiff(e.target.value as Difficulty | 'all');
              }}
              className="w-full px-3 py-2 text-xs font-bold rounded-xl border border-slate-200 bg-slate-50 text-slate-700 outline-hidden"
            >
              <option value="all">Tất cả mức độ</option>
              <option value="nhan_biet">🟢 Nhận biết</option>
              <option value="thong_hieu">🔵 Thông hiểu</option>
              <option value="van_dung">🟠 Vận dụng</option>
              <option value="van_dung_cao">🔴 Vận dụng cao</option>
            </select>
          </div>

        </div>

      </div>

      {/* Question Results List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs font-bold text-slate-500 px-1">
          <span>Tìm thấy {filteredQuestions.length} câu hỏi phù hợp</span>
          <span>Bấm "Xem lời giải" hoặc "Sao chép đề" để sử dụng</span>
        </div>

        {filteredQuestions.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 text-slate-400 space-y-2">
            <HelpCircle className="w-10 h-10 mx-auto opacity-40" />
            <p className="text-sm font-semibold">Không tìm thấy câu hỏi nào với bộ lọc này.</p>
            <button
              onClick={() => {
                setSelectedTopicId('all');
                setSelectedType('all');
                setSelectedDiff('all');
                setSearchQuery('');
              }}
              className="text-xs font-bold text-sky-600 hover:underline"
            >
              Xóa bộ lọc tìm kiếm
            </button>
          </div>
        ) : (
          filteredQuestions.map((q, idx) => {
            const isAnswerVisible = showAllAnswers || !!expandedAnswers[q.id];
            const lesson = ALL_LESSONS.find((l) => l.id === q.lessonId);

            return (
              <div
                key={q.id}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all space-y-4"
              >
                {/* Meta info */}
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="w-7 h-7 rounded-xl bg-sky-100 text-sky-800 font-extrabold text-xs flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700">
                      {lesson ? `Bài ${lesson.lessonNumber}: ${lesson.title}` : `Bài ${q.lessonId}`}
                    </span>
                    <span className="text-[11px] font-bold text-sky-700">
                      {q.type === 'multiple_choice' ? '• Trắc nghiệm 4 phương án' : '• Trắc nghiệm Đúng / Sai'}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {renderDifficultyBadge(q.difficulty)}

                    {/* Copy Question for Teachers */}
                    <button
                      type="button"
                      onClick={() => handleCopyQuestion(q)}
                      title="Sao chép câu hỏi để đưa vào đề kiểm tra"
                      className="p-1.5 rounded-lg border border-slate-200 text-slate-500 hover:text-sky-700 hover:bg-sky-50 transition-colors text-xs flex items-center gap-1"
                    >
                      {copiedId === q.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-[10px] text-emerald-600 font-bold">Đã chép</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span className="text-[10px] hidden sm:inline">Chép đề</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Content: Multiple choice */}
                {q.type === 'multiple_choice' ? (
                  <div className="space-y-3">
                    <p className="text-sm font-bold text-slate-900 leading-relaxed">
                      {q.question}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {q.options.map((opt, optIdx) => {
                        const isCorrect = optIdx === q.correctAnswer;
                        const prefix = ['A', 'B', 'C', 'D'][optIdx];
                        return (
                          <div
                            key={optIdx}
                            className={`p-2.5 rounded-xl border flex items-start gap-2 ${
                              isAnswerVisible && isCorrect
                                ? 'bg-emerald-50 border-emerald-300 text-emerald-900 font-bold'
                                : 'bg-slate-50 border-slate-200 text-slate-700'
                            }`}
                          >
                            <span className="font-extrabold">{prefix}.</span>
                            <span>{opt}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  /* Content: True / False */
                  <div className="space-y-3">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold text-slate-900">
                      {q.prompt}
                    </div>

                    <div className="space-y-2">
                      {q.items.map((item) => (
                        <div
                          key={item.id}
                          className="p-2.5 rounded-xl bg-slate-50/70 border border-slate-200 flex items-start justify-between gap-3 text-xs"
                        >
                          <div className="flex items-start gap-2">
                            <span className="font-extrabold uppercase text-slate-600 mt-0.5">
                              {item.id})
                            </span>
                            <span className="text-slate-800 font-medium">
                              {item.statement}
                            </span>
                          </div>

                          {isAnswerVisible && (
                            <span className={`px-2 py-0.5 rounded-md font-extrabold text-[10px] shrink-0 ${
                              item.isTrue
                                ? 'bg-emerald-100 text-emerald-800'
                                : 'bg-rose-100 text-rose-800'
                            }`}>
                              {item.isTrue ? '✓ ĐÚNG' : '✗ SAI'}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* View Explanation toggle */}
                <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => toggleAnswer(q.id)}
                    className="text-xs font-bold text-sky-600 hover:text-sky-800 flex items-center gap-1.5"
                  >
                    {isAnswerVisible ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                    <span>{isAnswerVisible ? 'Ẩn hướng dẫn giải' : 'Xem đáp án & lời giải chi tiết'}</span>
                  </button>
                </div>

                {/* Explanation text box */}
                {isAnswerVisible && (
                  <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-slate-800 space-y-1.5 animate-in fade-in">
                    <div className="flex items-center gap-1.5 font-extrabold text-amber-900 uppercase">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      Giải thích & Yêu cầu cần đạt SGK:
                    </div>
                    {q.type === 'multiple_choice' ? (
                      <p className="leading-relaxed font-medium">
                        Đáp án đúng: <span className="font-extrabold text-emerald-800">{['A', 'B', 'C', 'D'][q.correctAnswer]}</span>. {q.explanation}
                      </p>
                    ) : (
                      <div className="space-y-1">
                        {q.items.map((it) => (
                          <div key={it.id}>
                            <span className="font-bold text-amber-900 uppercase">Ý {it.id} ({it.isTrue ? 'Đúng' : 'Sai'}):</span> {it.explanation}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

              </div>
            );
          })
        )}
      </div>

    </div>
  );
};
