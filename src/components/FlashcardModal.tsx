import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, RotateCw, Sparkles, BookOpen } from 'lucide-react';
import { Topic, Lesson } from '../types';
import { sound } from '../utils/audio';
import { FormattedLessonText } from './FormattedLessonText';

interface FlashcardModalProps {
  topic: Topic;
  lessons: Lesson[];
  onClose: () => void;
}

export const FlashcardModal: React.FC<FlashcardModalProps> = ({
  topic,
  lessons,
  onClose,
}) => {
  // Collect all knowledge box cards
  const cards: Array<{ lessonTitle: string; lessonNum: number; front: string; back: string }> = [];

  lessons.forEach((l) => {
    l.knowledgeBox.forEach((kb, idx) => {
      cards.push({
        lessonTitle: l.title,
        lessonNum: l.lessonNumber,
        front: `Bài ${l.lessonNumber}: ${l.title} (Ý cốt lõi ${idx + 1})`,
        back: kb,
      });
    });
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNext = () => {
    sound.playClick();
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev < cards.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    sound.playClick();
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : cards.length - 1));
  };

  const handleFlip = () => {
    sound.playClick();
    setIsFlipped(!isFlipped);
  };

  const currentCard = cards[currentIndex];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/65 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-sky-100 overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-sky-600 to-blue-700 text-white flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => { sound.playClick(); onClose(); }}
              className="px-3 py-1.5 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-bold flex items-center gap-1.5 transition-colors border border-white/20 cursor-pointer"
            >
              ← Quay lại màn hình chính
            </button>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-200" />
              <div>
                <span className="text-[11px] font-bold text-sky-200 uppercase">
                  {topic.code} • THẺ NHỚ ÔN TẬP
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white line-clamp-1">
                  {topic.title}
                </h3>
              </div>
            </div>
          </div>

          <button
            onClick={() => { sound.playClick(); onClose(); }}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Card Body with 3D Flip style */}
        <div className="p-6 sm:p-8 flex flex-col items-center justify-center min-h-[300px]">
          
          <div className="w-full flex items-center justify-between text-xs text-slate-400 font-bold mb-3">
            <span>Thẻ {currentIndex + 1} / {cards.length}</span>
            <span className="text-sky-600">Nhấp vào thẻ để lật mặt</span>
          </div>

          <div
            onClick={handleFlip}
            className={`w-full h-56 sm:h-64 rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 shadow-md border-2 ${
              isFlipped
                ? 'bg-gradient-to-br from-sky-50 to-blue-50 border-sky-400 shadow-sky-500/10'
                : 'bg-white border-slate-200 hover:border-sky-300 hover:shadow-lg'
            }`}
          >
            {!isFlipped ? (
              <div className="space-y-3">
                <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-sky-100 text-sky-800 uppercase tracking-wider">
                  Mặt câu hỏi / Vấn đề
                </span>
                <p className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {currentCard?.front}
                </p>
                <div className="pt-2 text-xs font-semibold text-slate-400 flex items-center justify-center gap-1">
                  <RotateCw className="w-3.5 h-3.5" />
                  Nhấp để lật xem Hộp kiến thức
                </div>
              </div>
            ) : (
              <div className="space-y-3 animate-in fade-in">
                <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-100 text-emerald-800 uppercase tracking-wider">
                  Mặt Hộp kiến thức chốt SGK
                </span>
                <div className="text-xs sm:text-sm font-semibold text-slate-900 leading-relaxed max-w-md text-left">
                  <FormattedLessonText text={currentCard?.back} spacing="tight" />
                </div>
                <div className="pt-2 text-xs font-semibold text-sky-600 flex items-center justify-center gap-1">
                  <RotateCw className="w-3.5 h-3.5" />
                  Nhấp để lật lại
                </div>
              </div>
            )}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between w-full mt-6">
            <button
              onClick={handlePrev}
              className="p-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Thẻ trước
            </button>

            <button
              onClick={handleFlip}
              className="px-4 py-2.5 rounded-2xl bg-sky-50 text-sky-700 hover:bg-sky-100 font-bold text-xs flex items-center gap-1.5 border border-sky-200 transition-colors"
            >
              <RotateCw className="w-4 h-4" />
              Lật thẻ
            </button>

            <button
              onClick={handleNext}
              className="p-3 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition-colors"
            >
              Thẻ sau
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
