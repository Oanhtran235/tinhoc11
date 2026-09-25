import React, { useState } from 'react';
import { 
  X, 
  Target, 
  Lightbulb, 
  Search, 
  BookMarked, 
  CheckCircle2, 
  ExternalLink, 
  Play, 
  Sparkles, 
  HelpCircle,
  Wrench,
  Edit3,
  Gamepad2,
  FileCheck,
  ArrowLeft,
  ZoomIn,
  Type
} from 'lucide-react';
import { Lesson, CustomAppLink, LessonQuizStat } from '../types';
import { sound } from '../utils/audio';
import { FormattedLessonText } from './FormattedLessonText';

interface LessonDetailModalProps {
  lesson: Lesson;
  isCompleted: boolean;
  quizStat?: LessonQuizStat;
  customLink?: CustomAppLink;
  onClose: () => void;
  onMarkCompleted: (lessonId: number) => void;
  onStartQuiz: (lesson: Lesson) => void;
  onEditLink: (lesson: Lesson) => void;
  onPlayGame?: (lesson: Lesson) => void;
}

export const LessonDetailModal: React.FC<LessonDetailModalProps> = ({
  lesson,
  isCompleted,
  quizStat,
  customLink,
  onClose,
  onMarkCompleted,
  onStartQuiz,
  onEditLink,
  onPlayGame,
}) => {
  const [activeTab, setActiveTab] = useState<'content' | 'knowledge' | 'practice' | 'exercise' | 'application'>('content');
  const [fontScale, setFontScale] = useState<'standard' | 'large' | 'huge'>('large');
  const [revealedHints, setRevealedHints] = useState<Record<number, boolean>>({});
  const [revealedDiscoveries, setRevealedDiscoveries] = useState<Record<number, boolean>>({});
  const [revealedExercises, setRevealedExercises] = useState<Record<number, boolean>>({});

  const toggleHint = (actId: number) => {
    sound.playClick();
    setRevealedHints((prev) => ({ ...prev, [actId]: !prev[actId] }));
  };

  const toggleDiscovery = (actId: number) => {
    sound.playClick();
    setRevealedDiscoveries((prev) => ({ ...prev, [actId]: !prev[actId] }));
  };

  const toggleExercise = (idx: number) => {
    sound.playClick();
    setRevealedExercises((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const appName = customLink ? customLink.customName : lesson.defaultApp?.name;
  const appUrl = customLink ? customLink.customUrl : lesson.defaultApp?.url;

  // Typography scale classes based on fontScale state
  const bodyTextClass = fontScale === 'huge' 
    ? 'text-xl sm:text-2xl leading-loose font-medium' 
    : fontScale === 'large' 
    ? 'text-lg sm:text-xl leading-relaxed font-medium' 
    : 'text-base sm:text-lg leading-relaxed font-normal';

  const headingTextClass = fontScale === 'huge'
    ? 'text-2xl sm:text-3xl font-black'
    : fontScale === 'large'
    ? 'text-xl sm:text-2xl font-black'
    : 'text-lg sm:text-xl font-bold';

  const questionTextClass = fontScale === 'huge'
    ? 'text-2xl sm:text-3xl font-black text-slate-900 leading-snug'
    : fontScale === 'large'
    ? 'text-xl sm:text-2xl font-black text-slate-900 leading-snug'
    : 'text-lg sm:text-xl font-bold text-slate-900 leading-snug';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-1 sm:p-3 lg:p-5">
      
      {/* EXPANDED VIEWPORT CONTAINER (w-full max-w-[98vw] 2xl:max-w-[1460px] h-[96vh]) */}
      <div className="relative w-full max-w-[98vw] 2xl:max-w-[1460px] bg-white rounded-3xl shadow-2xl border-2 border-sky-100 overflow-hidden flex flex-col h-[96vh] animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top Header - Rút gọn tối đa để giải phóng diện tích cho nội dung chính */}
        <div className="px-4 sm:px-6 py-2.5 sm:py-3.5 bg-gradient-to-r from-sky-700 via-blue-800 to-indigo-900 text-white relative shrink-0">
          
          {/* Row 1: Back + Badge + Title + Font Scale + Close */}
          <div className="flex items-center justify-between gap-2 sm:gap-3 flex-wrap">
            
            <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
              {/* Back button */}
              <button
                type="button"
                onClick={() => { sound.playClick(); onClose(); }}
                className="px-3 py-1.5 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs sm:text-sm font-bold flex items-center gap-1.5 border border-white/20 transition-all shrink-0 cursor-pointer"
                title="Quay lại danh sách bài học"
              >
                <ArrowLeft className="w-4 h-4 text-white" />
                <span className="hidden sm:inline">Quay lại</span>
              </button>

              {/* Lesson badge */}
              <span className="px-2.5 py-1 rounded-lg text-xs font-black bg-cyan-400/25 text-cyan-200 border border-cyan-300/40 uppercase shrink-0">
                BÀI {lesson.lessonNumber}
              </span>

              {/* Lesson title */}
              <h2 className="text-sm sm:text-base lg:text-lg font-black text-white truncate max-w-xs sm:max-w-md lg:max-w-xl">
                {lesson.title}
              </h2>
            </div>

            {/* Right: Font size + Close */}
            <div className="flex items-center gap-2 shrink-0">
              {/* Font Size Adjuster Controls */}
              <div className="flex items-center gap-1 bg-black/25 px-2 py-1 rounded-xl border border-white/20">
                <Type className="w-3.5 h-3.5 text-sky-200" />
                <span className="text-[11px] font-bold text-sky-100 hidden md:inline">Chữ:</span>
                <button
                  type="button"
                  onClick={() => { sound.playClick(); setFontScale('standard'); }}
                  className={`px-2 py-0.5 text-xs font-extrabold rounded-lg transition-all cursor-pointer ${
                    fontScale === 'standard' ? 'bg-white text-sky-900 shadow-xs' : 'text-sky-200 hover:text-white'
                  }`}
                  title="Cỡ chữ chuẩn"
                >
                  A
                </button>
                <button
                  type="button"
                  onClick={() => { sound.playClick(); setFontScale('large'); }}
                  className={`px-2 py-0.5 text-xs font-black rounded-lg transition-all cursor-pointer ${
                    fontScale === 'large' ? 'bg-cyan-300 text-sky-950 shadow-xs' : 'text-sky-200 hover:text-white'
                  }`}
                  title="Cỡ chữ lớn"
                >
                  A+
                </button>
                <button
                  type="button"
                  onClick={() => { sound.playClick(); setFontScale('huge'); }}
                  className={`px-2 py-0.5 text-xs font-black rounded-lg transition-all cursor-pointer ${
                    fontScale === 'huge' ? 'bg-amber-300 text-amber-950 shadow-xs' : 'text-sky-200 hover:text-white'
                  }`}
                  title="Cỡ chữ rất to"
                >
                  A++
                </button>
              </div>

              {/* Close modal X button */}
              <button
                type="button"
                onClick={() => { sound.playClick(); onClose(); }}
                className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer"
                title="Đóng cửa sổ"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

          </div>

          {/* Row 2: Compact Tab Navigation Pills */}
          <div className="flex items-center gap-1.5 mt-2.5 overflow-x-auto scrollbar-none pb-0.5 text-xs font-bold">
            <button
              type="button"
              onClick={() => { sound.playClick(); setActiveTab('content'); }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                activeTab === 'content'
                  ? 'bg-white text-sky-900 shadow-xs font-black'
                  : 'text-sky-100 hover:bg-white/15'
              }`}
            >
              <Search className="w-3.5 h-3.5" />
              1. Khởi động & Khám phá
            </button>

            <button
              type="button"
              onClick={() => { sound.playClick(); setActiveTab('knowledge'); }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                activeTab === 'knowledge'
                  ? 'bg-white text-sky-900 shadow-xs font-black'
                  : 'text-sky-100 hover:bg-white/15'
              }`}
            >
              <BookMarked className="w-3.5 h-3.5" />
              2. Kiến thức cốt lõi
            </button>

            {lesson.practicalGuide && (
              <button
                type="button"
                onClick={() => { sound.playClick(); setActiveTab('practice'); }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                  activeTab === 'practice'
                    ? 'bg-white text-sky-900 shadow-xs font-black'
                    : 'text-sky-100 hover:bg-white/15'
                }`}
              >
                <Wrench className="w-3.5 h-3.5" />
                3. Thực hành
              </button>
            )}

            <button
              type="button"
              onClick={() => { sound.playClick(); setActiveTab('exercise'); }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                activeTab === 'exercise'
                  ? 'bg-white text-sky-900 shadow-xs font-black'
                  : 'text-sky-100 hover:bg-white/15'
              }`}
            >
              <FileCheck className="w-3.5 h-3.5" />
              4. Luyện tập SGK
            </button>

            <button
              type="button"
              onClick={() => { sound.playClick(); setActiveTab('application'); }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                activeTab === 'application'
                  ? 'bg-white text-sky-900 shadow-xs font-black'
                  : 'text-sky-100 hover:bg-white/15'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              5. Vận dụng
            </button>
          </div>
        </div>

        {/* Modal Body Content - Expanded viewport with responsive font size */}
        <div className="p-4 sm:p-6 lg:p-8 overflow-y-auto flex-1 space-y-6 sm:space-y-8 bg-slate-50/70">

          {/* TAB 1: Starter, Objectives & In-depth Discovery Activities */}
          {activeTab === 'content' && (
            <div className="space-y-8">
              
              {/* Objectives Banner */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-sky-100 shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 text-sky-800 font-black text-base sm:text-lg uppercase tracking-wider">
                  <Target className="w-6 h-6 text-sky-600" />
                  Yêu cầu cần đạt sau bài học (Chuẩn SGK):
                </div>
                <div className="space-y-3">
                  {lesson.objectives.map((obj, idx) => (
                    <div key={idx} className="flex items-start gap-3.5">
                      <span className="w-7 h-7 rounded-xl bg-sky-100 text-sky-800 font-black text-sm sm:text-base flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <div className={`${bodyTextClass} text-slate-800 font-semibold flex-1`}>
                        <FormattedLessonText text={obj} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Starter Situation */}
              <div className="p-6 sm:p-8 rounded-3xl bg-amber-50/90 border-2 border-amber-200/90 shadow-xs space-y-4">
                <div className="flex items-center gap-2.5 text-amber-900 font-black text-sm sm:text-base uppercase tracking-wider">
                  <Lightbulb className="w-6 h-6 text-amber-600 fill-amber-500" />
                  Khởi động • Tình huống thực tế khơi gợi nhận thức
                </div>
                <div className={`${bodyTextClass} text-slate-900 bg-white/70 p-5 rounded-2xl border border-amber-200/60 font-semibold italic`}>
                  <FormattedLessonText text={lesson.starter.situation} />
                </div>
                <div className="p-5 bg-white rounded-2xl border-2 border-amber-300 flex items-start gap-3.5">
                  <HelpCircle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                  <div className={`${headingTextClass} text-amber-950 font-black flex-1`}>
                    <FormattedLessonText text={lesson.starter.question} />
                  </div>
                </div>
              </div>

              {/* Discovery Activities (Phân tích chi tiết từng mục nội dung với chữ to, rõ ràng) */}
              <div className="space-y-6">
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-black uppercase tracking-wider text-slate-800 flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-sky-600" />
                    Phân tích nội dung chi tiết & Tự phát hiện kiến thức:
                  </h3>
                  <span className="text-xs sm:text-sm font-bold text-slate-500">
                    Bấm "Xem phân tích" để đọc sâu lời giải thích
                  </span>
                </div>

                <div className="space-y-6">
                  {lesson.discoveryActivities.map((act) => {
                    const isHintOpen = !!revealedHints[act.id];
                    const isDiscoveryOpen = !!revealedDiscoveries[act.id];

                    return (
                      <div 
                        key={act.id}
                        className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-slate-200/90 shadow-sm space-y-5"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm sm:text-base font-black text-sky-900 uppercase tracking-wider bg-sky-50 px-4 py-2 rounded-xl border border-sky-200">
                            Mục {act.id}: {act.title}
                          </span>
                        </div>

                        {/* Large readable context with automatic idea line breaks */}
                        <div className={`${bodyTextClass} text-slate-800 bg-slate-50 p-6 rounded-2xl border border-slate-200/80`}>
                          <FormattedLessonText text={act.context} />
                        </div>

                        {/* Large guiding question */}
                        <div className="bg-sky-50/70 p-5 sm:p-6 rounded-2xl border-2 border-sky-200 flex items-start gap-3.5">
                          <span className="text-sky-600 text-2xl font-black shrink-0">❓</span>
                          <div className={`${questionTextClass} flex-1`}>
                            <FormattedLessonText text={act.guidingQuestion} />
                          </div>
                        </div>

                        {/* Interactive Hint & Discovery toggles */}
                        <div className="flex items-center gap-3 flex-wrap pt-1">
                          <button
                            type="button"
                            onClick={() => toggleHint(act.id)}
                            className="px-4 py-2.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold text-xs sm:text-sm flex items-center gap-2 transition-colors cursor-pointer"
                          >
                            <Lightbulb className="w-4 h-4 text-amber-700" />
                            {isHintOpen ? 'Ẩn gợi ý tư duy' : '💡 Xem gợi ý tư duy'}
                          </button>

                          <button
                            type="button"
                            onClick={() => toggleDiscovery(act.id)}
                            className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-black text-xs sm:text-sm flex items-center gap-2 transition-colors shadow-sm cursor-pointer"
                          >
                            <Sparkles className="w-4 h-4 text-cyan-200" />
                            {isDiscoveryOpen ? 'Thu gọn bài giải' : '✨ Khám phá câu trả lời & Phân tích'}
                          </button>
                        </div>

                        {/* Revealed Hint Content */}
                        {isHintOpen && (
                          <div className="p-5 rounded-2xl bg-amber-50 border-2 border-amber-200 text-amber-950 space-y-2 animate-in fade-in duration-200">
                            <span className="text-xs sm:text-sm font-extrabold uppercase text-amber-800 block">
                              Gợi ý định hướng suy luận:
                            </span>
                            <div className={`${bodyTextClass} text-amber-950 font-semibold space-y-2`}>
                              {act.hints && act.hints.length > 0 ? (
                                act.hints.map((h, hIdx) => (
                                  <div key={hIdx} className="flex items-start gap-2">
                                    <span className="text-amber-700 font-bold shrink-0 mt-0.5">•</span>
                                    <div className="flex-1">
                                      <FormattedLessonText text={h} />
                                    </div>
                                  </div>
                                ))
                              ) : (
                                <p>Đọc kỹ thông tin ngữ cảnh và liên hệ kiến thức thực tế bài học.</p>
                              )}
                            </div>
                          </div>
                        )}

                        {/* Revealed Discovery Content */}
                        {isDiscoveryOpen && (
                          <div className="p-6 rounded-2xl bg-emerald-50/90 border-2 border-emerald-300 text-emerald-950 space-y-3 animate-in fade-in duration-200">
                            <div className="flex items-center gap-2 text-emerald-800 font-black text-sm sm:text-base uppercase tracking-wider">
                              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                              Kiến thức rút ra từ hoạt động:
                            </div>
                            <div className={`${bodyTextClass} text-emerald-950 font-bold`}>
                              <FormattedLessonText text={act.discoverySummary} />
                            </div>
                          </div>
                        )}

                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: Official Core Knowledge Boxes (Hộp kiến thức chốt SGK) */}
          {activeTab === 'knowledge' && (
            <div className="space-y-6">
              <div className="p-6 sm:p-7 rounded-3xl bg-blue-50 border-2 border-blue-200 flex items-center gap-3.5">
                <BookMarked className="w-8 h-8 text-sky-700 shrink-0" />
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-sky-950">
                    Hộp Kiến Thức Cần Ghi Nhớ (Trọng Tâm Bài Học)
                  </h3>
                  <p className="text-xs sm:text-sm text-sky-800 font-medium">
                    Đây là các nội dung trọng tâm bắt buộc học sinh phải nhớ để làm bài kiểm tra và thi học kỳ.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {lesson.knowledgeBox.map((box, idx) => (
                  <div 
                    key={idx}
                    className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-sky-100 shadow-sm flex items-start gap-4 hover:border-sky-300 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-2xl bg-sky-600 text-white font-black text-sm sm:text-base flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      {idx + 1}
                    </div>
                    <div className={`${bodyTextClass} text-slate-800 font-semibold flex-1`}>
                      <FormattedLessonText text={box} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: Practical Hands-on Guide (Hướng dẫn thực hành từng bước) */}
          {activeTab === 'practice' && lesson.practicalGuide && (
            <div className="space-y-6">
              <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-indigo-100 shadow-sm space-y-4">
                <span className="px-3.5 py-1.5 rounded-xl bg-indigo-50 text-indigo-700 font-black text-xs sm:text-sm uppercase tracking-wider border border-indigo-200">
                  Nhiệm vụ thực hành
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900">
                  {lesson.practicalGuide.title}
                </h3>
              </div>

              <div className="space-y-4">
                <h4 className="text-base sm:text-lg font-black uppercase text-slate-700 flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-sky-600" />
                  Các bước tiến hành chi tiết:
                </h4>

                <div className="space-y-4">
                  {lesson.practicalGuide.steps.map((step, idx) => (
                    <div 
                      key={idx}
                      className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-slate-200/90 shadow-sm flex items-start gap-4 hover:border-sky-200 transition-all"
                    >
                      <div className="w-9 h-9 rounded-2xl bg-indigo-600 text-white font-black text-sm sm:text-base flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                        B{idx + 1}
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className={`${bodyTextClass} text-slate-800 font-semibold`}>
                          <FormattedLessonText text={step} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: Luyện Tập Củng Cố */}
          {activeTab === 'exercise' && (
            <div className="space-y-6">
              <div className="p-6 sm:p-7 rounded-3xl bg-sky-50 border-2 border-sky-200 flex items-center gap-3.5">
                <FileCheck className="w-8 h-8 text-sky-700 shrink-0" />
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-sky-950">
                    Bài Tập Luyện Tập Trong SGK
                  </h3>
                  <p className="text-xs sm:text-sm text-sky-800 font-medium">
                    Tự giải bài tập để khắc sâu kiến thức, sau đó bấm xem gợi ý giải chi tiết.
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                {lesson.exerciseReview && lesson.exerciseReview.length > 0 ? (
                  lesson.exerciseReview.map((ex, idx) => {
                    const isOpen = !!revealedExercises[idx];
                    return (
                      <div 
                        key={idx}
                        className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-slate-200 shadow-sm space-y-4"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs sm:text-sm font-black text-sky-800 uppercase bg-sky-50 px-3.5 py-1.5 rounded-xl border border-sky-100">
                            Bài tập {idx + 1}
                          </span>
                        </div>

                        <div className={`${headingTextClass} text-slate-900 font-bold bg-slate-50 p-5 rounded-2xl border border-slate-200`}>
                          <FormattedLessonText text={ex.question} />
                        </div>

                        <button
                          type="button"
                          onClick={() => toggleExercise(idx)}
                          className="px-4 py-2.5 rounded-xl bg-sky-100 hover:bg-sky-200 text-sky-900 font-bold text-xs sm:text-sm flex items-center gap-2 transition-colors cursor-pointer"
                        >
                          <HelpCircle className="w-4 h-4 text-sky-700" />
                          {isOpen ? 'Thu gọn gợi ý giải' : '🔍 Xem gợi ý giải chi tiết'}
                        </button>

                        {isOpen && (
                          <div className="p-5 sm:p-6 rounded-2xl bg-emerald-50 border-2 border-emerald-300 text-emerald-950 space-y-2 animate-in fade-in duration-200">
                            <span className="text-xs sm:text-sm font-extrabold uppercase text-emerald-800 block">
                              Đáp án & Hướng dẫn giải:
                            </span>
                            <div className={`${bodyTextClass} text-emerald-950 font-semibold`}>
                              <FormattedLessonText text={ex.answer} />
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })
                ) : (
                  <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-slate-200 shadow-sm space-y-4">
                    <div className="flex items-center gap-2 text-sky-800 font-black text-sm uppercase">
                      <FileCheck className="w-5 h-5 text-sky-600" />
                      Bài tập củng cố kiến thức:
                    </div>
                    <p className={`${bodyTextClass} text-slate-800 font-semibold`}>
                      Sau khi hoàn thành nội dung bài học, học sinh thực hiện các câu hỏi trắc nghiệm và đúng/sai trong phần "Luyện tập 10 câu phân hóa" hoặc trải nghiệm các mini game tương tác.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 5: Vận Dụng Thực Tiễn */}
          {activeTab === 'application' && (
            <div className="space-y-6">
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-violet-50 to-indigo-50 border-2 border-indigo-200 shadow-sm space-y-4">
                <span className="px-3.5 py-1.5 rounded-xl bg-violet-100 text-violet-800 font-black text-xs sm:text-sm uppercase tracking-wider border border-violet-200">
                  Thử thách vận dụng thực tế
                </span>
                
                <div className={`${headingTextClass} text-slate-900 font-black leading-snug`}>
                  <FormattedLessonText text={lesson.application.question} />
                </div>

                <div className="p-6 rounded-2xl bg-white border-2 border-indigo-100 space-y-2.5">
                  <div className="flex items-center gap-2 text-indigo-700 font-black text-sm sm:text-base uppercase tracking-wider">
                    <Sparkles className="w-5 h-5" />
                    Định hướng giải quyết & Thực hiện:
                  </div>
                  <div className={`${bodyTextClass} text-slate-800 font-medium`}>
                    <FormattedLessonText text={lesson.application.guidance} />
                  </div>
                </div>
              </div>

              {/* External App Link Banner */}
              <div className="p-6 sm:p-7 rounded-3xl bg-white border-2 border-sky-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Ứng dụng bổ trợ / Phần mềm học tập liên kết:
                  </span>
                  <div className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
                    <span>{appName || 'Chưa gắn liên kết'}</span>
                    <button
                      type="button"
                      onClick={() => onEditLink(lesson)}
                      className="text-sky-600 hover:text-sky-700 p-1 rounded-lg hover:bg-sky-50 transition-colors cursor-pointer"
                      title="Chỉnh sửa link ứng dụng ngoài"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                  </div>
                  {appUrl && (
                    <p className="text-xs text-slate-500 truncate max-w-md">
                      {appUrl}
                    </p>
                  )}
                </div>

                {appUrl && (
                  <a
                    href={appUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black text-sky-800 bg-sky-50 hover:bg-sky-100 border border-sky-200 transition-colors flex items-center justify-center gap-2 cursor-pointer shrink-0"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Mở ứng dụng bổ trợ
                  </a>
                )}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Actions - Rút gọn chiều cao, liên kết Trắc nghiệm tự luyện Kênh Học Tập */}
        <div className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2.5 shrink-0">
          
          {/* Back to main screen and Complete buttons */}
          <div className="flex items-center gap-2 w-full sm:w-auto flex-wrap">
            <button
              type="button"
              onClick={() => { sound.playClick(); onClose(); }}
              className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <ArrowLeft className="w-4 h-4 text-slate-600" />
              <span>Quay lại</span>
            </button>

            <button
              type="button"
              onClick={() => {
                sound.playCorrect();
                onMarkCompleted(lesson.id);
              }}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                isCompleted
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-300'
                  : (quizStat?.percent ?? 0) >= 80
                  ? 'bg-teal-500 text-white hover:bg-teal-600 shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-emerald-600 hover:text-white'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>
                {isCompleted 
                  ? (quizStat ? `✓ Đã học (${quizStat.percent}%)` : '✓ Đã hoàn thành (+50 XP)') 
                  : (quizStat?.percent ?? 0) >= 80
                  ? `Tự tích đã học (${quizStat?.percent}%)`
                  : 'Đánh dấu đã học (+50 XP)'}
              </span>
            </button>
          </div>

          {/* Action buttons: Trắc nghiệm tự luyện (Kênh học tập) + Luyện tập 10 câu */}
          <div className="flex items-center gap-2 w-full sm:w-auto flex-wrap">
            {/* Action buttons: Game Đấu Trường 1v1 + Trắc nghiệm tự luyện (Kênh học tập) + Luyện tập 10 câu */}
            {onPlayGame && (
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  onClose();
                  onPlayGame(lesson);
                }}
                className="flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs sm:text-sm font-black text-white bg-gradient-to-r from-rose-600 to-amber-500 hover:opacity-95 shadow-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                title="Mở đấu trường game tương tác & 1v1 cho bài học này"
              >
                <Gamepad2 className="w-4 h-4 text-white" />
                <span>Game 1v1</span>
              </button>
            )}

            <a
              href={lesson.defaultApp?.url || "https://kenhhoctap.edu.vn/bai-tap/trac-nghiem-tin-hoc-ung-dung-11-ket-noi-bai-1-he-dieu-hanh-277"}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs sm:text-sm font-black text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              title="Mở Tự luyện Online trên kenhhoctap.edu.vn"
            >
              <ExternalLink className="w-4 h-4 text-emerald-100" />
              <span>Tự luyện Online (Kênh Học Tập)</span>
            </a>

            <button
              type="button"
              onClick={() => {
                sound.playClick();
                onClose();
                onStartQuiz(lesson);
              }}
              className="flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs sm:text-sm font-black text-white bg-gradient-to-r from-sky-600 to-blue-700 hover:opacity-95 shadow-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>10 câu trắc nghiệm</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
