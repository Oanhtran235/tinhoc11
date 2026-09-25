import React, { useState, useEffect } from 'react';
import { 
  Gamepad2, 
  Trophy, 
  Zap, 
  RotateCcw, 
  Play, 
  CheckCircle2, 
  XCircle, 
  Flame, 
  Sparkles, 
  Clock, 
  Award,
  Layers,
  Check,
  ChevronRight,
  ArrowRight,
  ArrowLeft,
  BookOpen,
  Lock,
  Swords,
  Users,
  Settings2,
  SlidersHorizontal,
  Wand2
} from 'lucide-react';
import { QuizQuestion, Lesson } from '../types';
import { getQuestionsByLesson } from '../data/questions';
import { ALL_LESSONS } from '../data/lessons';
import { sound } from '../utils/audio';
import { DualBattleGame } from './DualBattleGame';

interface LearningGamesViewProps {
  onAddXp: (amount: number) => void;
  selectedLesson?: Lesson;
  onBackToMain: () => void;
}

export const LearningGamesView: React.FC<LearningGamesViewProps> = ({
  onAddXp,
  selectedLesson,
  onBackToMain,
}) => {
  const [selectedGame, setSelectedGame] = useState<'battle' | 'race' | 'memory' | 'lightning' | 'creator'>('battle');
  const [currentLessonId, setCurrentLessonId] = useState<number>(selectedLesson ? selectedLesson.id : 1);

  // Sync if selectedLesson prop changes
  useEffect(() => {
    if (selectedLesson) {
      setCurrentLessonId(selectedLesson.id);
    }
  }, [selectedLesson]);

  const activeLesson = ALL_LESSONS.find((l) => l.id === currentLessonId) || ALL_LESSONS[0];
  
  // Strictly load ONLY questions belonging to this specific lesson
  const lessonQuestions = getQuestionsByLesson(activeLesson.id);

  return (
    <div className="space-y-6">
      
      {/* Top Navigation: Return to Main Screen Button + Quick Lesson Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-4 sm:p-5 rounded-3xl border-2 border-sky-100 shadow-sm">
        
        {/* Prominent Back to Main Screen Button */}
        <button
          onClick={() => { sound.playClick(); onBackToMain(); }}
          className="px-5 py-3 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white font-black text-xs sm:text-sm transition-all flex items-center gap-2.5 shadow-md shadow-sky-600/20 hover:scale-102 self-start cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
          <span>Quay lại màn hình chính</span>
        </button>

        {/* Lesson Scope Picker & Indicator */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-sky-50 border border-sky-200">
            <BookOpen className="w-4 h-4 text-sky-700 shrink-0" />
            <span className="text-xs font-black text-sky-900 hidden md:inline">
              Đang chọn bài học:
            </span>
          </div>

          <select
            value={currentLessonId}
            onChange={(e) => {
              sound.playClick();
              setCurrentLessonId(Number(e.target.value));
            }}
            className="px-4 py-2.5 text-xs sm:text-sm font-black text-slate-900 bg-slate-50 border-2 border-slate-200 rounded-xl outline-hidden focus:border-sky-500 cursor-pointer"
          >
            {ALL_LESSONS.map((l) => (
              <option key={l.id} value={l.id}>
                Bài {l.lessonNumber}: {l.title}
              </option>
            ))}
          </select>
        </div>

      </div>

      {/* Banner: Emphasizing that questions are strictly scoped to THIS LESSON */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-sky-700 via-blue-800 to-indigo-900 text-white shadow-xl shadow-sky-950/15 relative overflow-hidden">
        <div className="max-w-4xl relative z-10 space-y-3">
          
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-black bg-cyan-400/25 text-cyan-200 border border-cyan-300/40 uppercase tracking-widest flex items-center gap-1.5">
              <Gamepad2 className="w-4 h-4" />
              Đấu trường trò chơi & Thi đấu
            </span>

            <span className="px-3.5 py-1.5 rounded-full text-xs font-black bg-emerald-400/25 text-emerald-200 border border-emerald-300/40 flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5" />
              Chế độ riêng: Bài {activeLesson.lessonNumber} ({lessonQuestions.length} câu phân hóa)
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            Game Tương Tác: Bài {activeLesson.lessonNumber} - {activeLesson.title}
          </h1>

          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/20 text-xs sm:text-base text-sky-100 font-medium leading-relaxed">
            🎯 <strong>Trò chơi học tập sinh động:</strong> Tích hợp chế độ <strong>Song đấu 1v1 cho 2 học sinh cùng thi đấu trên 1 màn hình</strong>, đua xe tri thức, đấu trường đúng/sai và bộ công cụ tạo game linh hoạt cho giáo viên và học sinh!
          </div>

          {/* Game Switcher Tabs */}
          <div className="flex items-center gap-2.5 pt-2 flex-wrap">
            {/* TAB 1: 1v1 BATTLE - PRIMARY HIGHLIGHT */}
            <button
              onClick={() => { sound.playClick(); setSelectedGame('battle'); }}
              className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-black transition-all flex items-center gap-2 cursor-pointer ${
                selectedGame === 'battle'
                  ? 'bg-gradient-to-r from-rose-500 to-amber-500 text-white shadow-lg shadow-rose-500/25 scale-102 ring-2 ring-amber-300'
                  : 'bg-white/15 text-white hover:bg-white/25'
              }`}
            >
              <Swords className="w-4 h-4 text-amber-300" />
              <span>⚔️ Đấu Trường 1v1 (2 Học Sinh Thi Đấu)</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-rose-600 text-white animate-pulse">
                HOT
              </span>
            </button>

            {/* TAB 2: SPEED RACE */}
            <button
              onClick={() => { sound.playClick(); setSelectedGame('race'); }}
              className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-black transition-all flex items-center gap-2 cursor-pointer ${
                selectedGame === 'race'
                  ? 'bg-cyan-300 text-sky-950 shadow-md font-black'
                  : 'bg-white/15 text-white hover:bg-white/25'
              }`}
            >
              🏎️ Đua Xe Tri Thức
            </button>

            {/* TAB 3: MEMORY MATCH */}
            <button
              onClick={() => { sound.playClick(); setSelectedGame('memory'); }}
              className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-black transition-all flex items-center gap-2 cursor-pointer ${
                selectedGame === 'memory'
                  ? 'bg-cyan-300 text-sky-950 shadow-md font-black'
                  : 'bg-white/15 text-white hover:bg-white/25'
              }`}
            >
              🃏 Ghép Thẻ Khái Niệm
            </button>

            {/* TAB 4: LIGHTNING TRUE/FALSE */}
            <button
              onClick={() => { sound.playClick(); setSelectedGame('lightning'); }}
              className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-black transition-all flex items-center gap-2 cursor-pointer ${
                selectedGame === 'lightning'
                  ? 'bg-cyan-300 text-sky-950 shadow-md font-black'
                  : 'bg-white/15 text-white hover:bg-white/25'
              }`}
            >
              ⚡ Đúng - Sai 15s
            </button>

            {/* TAB 5: GAME CREATOR */}
            <button
              onClick={() => { sound.playClick(); setSelectedGame('creator'); }}
              className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-black transition-all flex items-center gap-2 cursor-pointer ${
                selectedGame === 'creator'
                  ? 'bg-amber-300 text-slate-950 shadow-md font-black'
                  : 'bg-white/15 text-white hover:bg-white/25'
              }`}
            >
              <Wand2 className="w-4 h-4 text-amber-200" />
              <span>🛠️ Tạo Game Tùy Chỉnh</span>
            </button>
          </div>

        </div>
      </div>

      {/* Render Active Game */}
      {selectedGame === 'battle' && (
        <DualBattleGame 
          lesson={activeLesson}
          questions={lessonQuestions} 
          onAddXp={onAddXp} 
          onBackToMain={onBackToMain}
          allLessons={ALL_LESSONS}
          onSelectOtherLesson={(id) => setCurrentLessonId(id)}
        />
      )}

      {selectedGame === 'race' && (
        <SpeedRaceGame 
          lesson={activeLesson}
          questions={lessonQuestions} 
          onAddXp={onAddXp} 
          onBackToMain={onBackToMain}
        />
      )}

      {selectedGame === 'memory' && (
        <TermMemoryGame 
          lesson={activeLesson}
          onAddXp={onAddXp} 
          onBackToMain={onBackToMain}
        />
      )}

      {selectedGame === 'lightning' && (
        <TrueFalseLightningGame 
          lesson={activeLesson}
          questions={lessonQuestions} 
          onAddXp={onAddXp} 
          onBackToMain={onBackToMain}
        />
      )}

      {selectedGame === 'creator' && (
        <CustomGameCreatorView
          currentLesson={activeLesson}
          allLessons={ALL_LESSONS}
          onLaunchGame={(lessonId, gameMode) => {
            setCurrentLessonId(lessonId);
            setSelectedGame(gameMode);
          }}
          onBackToMain={onBackToMain}
        />
      )}

    </div>
  );
};

/* -------------------------------------------------------------
 * GAME CREATOR: Tùy Biến & Khởi Tạo Trò Chơi Nhanh
 * ------------------------------------------------------------- */
const CustomGameCreatorView: React.FC<{
  currentLesson: Lesson;
  allLessons: Lesson[];
  onLaunchGame: (lessonId: number, gameMode: 'battle' | 'race' | 'memory' | 'lightning') => void;
  onBackToMain: () => void;
}> = ({ currentLesson, allLessons, onLaunchGame, onBackToMain }) => {
  const [selectedLessonId, setSelectedLessonId] = useState<number>(currentLesson.id);
  const [selectedMode, setSelectedMode] = useState<'battle' | 'race' | 'memory' | 'lightning'>('battle');
  const [qCount, setQCount] = useState<number>(10);
  const [timerOption, setTimerOption] = useState<number>(15);

  const targetLesson = allLessons.find(l => l.id === selectedLessonId) || currentLesson;
  const questionsInLesson = getQuestionsByLesson(targetLesson.id);

  return (
    <div className="bg-white rounded-3xl border-2 border-slate-200 shadow-xl p-6 sm:p-8 space-y-6">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center shadow-lg shadow-amber-500/20">
            <Wand2 className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Công Cụ Tạo Game Học Tập Tùy Biến
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold">
              Chọn câu hỏi, thể loại trò chơi và thiết lập thi đấu cho học sinh
            </p>
          </div>
        </div>

        <button
          onClick={() => { sound.playClick(); onBackToMain(); }}
          className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 flex items-center gap-2 self-start cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Quay lại</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Step 1: Pick Lesson */}
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
          <label className="block text-xs font-black text-slate-700 uppercase tracking-wider">
            1. Chọn bài học muốn tạo game:
          </label>
          <select
            value={selectedLessonId}
            onChange={(e) => { sound.playClick(); setSelectedLessonId(Number(e.target.value)); }}
            className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 font-bold text-sm bg-white text-slate-800 outline-hidden focus:border-amber-500 cursor-pointer"
          >
            {allLessons.map(l => (
              <option key={l.id} value={l.id}>
                Bài {l.lessonNumber}: {l.title}
              </option>
            ))}
          </select>
          <div className="text-xs font-bold text-emerald-700 bg-emerald-50 p-2.5 rounded-xl border border-emerald-200 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>Đã nạp sẵn {questionsInLesson.length} câu hỏi phân hóa chuẩn SGK của bài này!</span>
          </div>
        </div>

        {/* Step 2: Pick Game Mode */}
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
          <label className="block text-xs font-black text-slate-700 uppercase tracking-wider">
            2. Chọn thể loại trò chơi:
          </label>
          <div className="grid grid-cols-2 gap-2.5">
            <button
              onClick={() => { sound.playClick(); setSelectedMode('battle'); }}
              className={`p-3 rounded-xl text-left border-2 transition-all cursor-pointer ${
                selectedMode === 'battle'
                  ? 'bg-rose-50 border-rose-500 text-rose-900 font-black shadow-xs ring-2 ring-rose-200'
                  : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700 font-bold'
              }`}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <Swords className="w-4 h-4 text-rose-600" />
                <span className="text-xs font-black">Song Đấu 1v1</span>
              </div>
              <span className="text-[11px] text-slate-500 leading-tight block">2 học sinh cùng đấu</span>
            </button>

            <button
              onClick={() => { sound.playClick(); setSelectedMode('race'); }}
              className={`p-3 rounded-xl text-left border-2 transition-all cursor-pointer ${
                selectedMode === 'race'
                  ? 'bg-sky-50 border-sky-500 text-sky-900 font-black shadow-xs ring-2 ring-sky-200'
                  : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700 font-bold'
              }`}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-sm">🏎️</span>
                <span className="text-xs font-black">Đua Xe Tri Thức</span>
              </div>
              <span className="text-[11px] text-slate-500 leading-tight block">Tốc độ & phản xạ</span>
            </button>

            <button
              onClick={() => { sound.playClick(); setSelectedMode('memory'); }}
              className={`p-3 rounded-xl text-left border-2 transition-all cursor-pointer ${
                selectedMode === 'memory'
                  ? 'bg-amber-50 border-amber-500 text-amber-900 font-black shadow-xs ring-2 ring-amber-200'
                  : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700 font-bold'
              }`}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-sm">🃏</span>
                <span className="text-xs font-black">Ghép Thẻ Khái Niệm</span>
              </div>
              <span className="text-[11px] text-slate-500 leading-tight block">Ghi nhớ định nghĩa</span>
            </button>

            <button
              onClick={() => { sound.playClick(); setSelectedMode('lightning'); }}
              className={`p-3 rounded-xl text-left border-2 transition-all cursor-pointer ${
                selectedMode === 'lightning'
                  ? 'bg-purple-50 border-purple-500 text-purple-900 font-black shadow-xs ring-2 ring-purple-200'
                  : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700 font-bold'
              }`}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-sm">⚡</span>
                <span className="text-xs font-black">Đúng - Sai 15s</span>
              </div>
              <span className="text-[11px] text-slate-500 leading-tight block">Phán đoán chớp nhoáng</span>
            </button>
          </div>
        </div>

      </div>

      {/* Launch Action */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
        <div>
          <h3 className="text-lg font-black flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-yellow-200" />
            <span>Sẵn Sàng Khởi Động Trò Chơi</span>
          </h3>
          <p className="text-xs sm:text-sm text-white/90 font-medium">
            Bài {targetLesson.lessonNumber}: {targetLesson.title} • Thể loại: {
              selectedMode === 'battle' ? 'Song đấu 1v1 (2 người chơi)' :
              selectedMode === 'race' ? 'Đua xe tri thức' :
              selectedMode === 'memory' ? 'Ghép thẻ khái niệm' : 'Đúng - Sai 15s'
            }
          </p>
        </div>

        <button
          onClick={() => {
            sound.playFanfare();
            onLaunchGame(selectedLessonId, selectedMode);
          }}
          className="px-8 py-3.5 rounded-xl bg-white hover:bg-yellow-50 text-slate-900 font-black text-sm shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer shrink-0"
        >
          <Play className="w-4 h-4 fill-slate-900" />
          <span>BẮT ĐẦU CHƠI NGAY</span>
        </button>
      </div>

    </div>
  );
};

/* -------------------------------------------------------------
 * GAME 1: Đua Xe Tri Thức (Chỉ dùng 10 câu hỏi của bài học này)
 * ------------------------------------------------------------- */
const SpeedRaceGame: React.FC<{ 
  lesson: Lesson; 
  questions: QuizQuestion[]; 
  onAddXp: (amount: number) => void;
  onBackToMain: () => void;
}> = ({ lesson, questions, onAddXp, onBackToMain }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(0); // km/h
  const [distance, setDistance] = useState(0); // meters
  const [timeLeft, setTimeLeft] = useState(60);
  const [streak, setStreak] = useState(0);
  const [score, setScore] = useState(0);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [gameFinished, setGameFinished] = useState(false);

  // Filter questions of this lesson only (multiple choice format)
  const mcQuestions = questions.filter((q) => q.type === 'multiple_choice');
  const activeQList = mcQuestions.length > 0 ? mcQuestions : questions;
  const currentQ = activeQList[currentQIndex % activeQList.length];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            handleGameOver();
            return 0;
          }
          return prev - 1;
        });

        // distance increases with speed
        setDistance((prev) => prev + Math.round(speed / 10));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, timeLeft, speed]);

  const handleStartGame = () => {
    sound.playCorrect();
    setIsPlaying(true);
    setSpeed(60);
    setDistance(0);
    setTimeLeft(60);
    setStreak(0);
    setScore(0);
    setCurrentQIndex(0);
    setGameFinished(false);
  };

  const handleGameOver = () => {
    setIsPlaying(false);
    setGameFinished(true);
    sound.playChime();
    const earnedXp = Math.round(score * 10);
    onAddXp(earnedXp);
  };

  const handleAnswer = (optionIdx: number) => {
    if (!isPlaying || !currentQ) return;

    if (currentQ.type === 'multiple_choice' && optionIdx === currentQ.correctAnswer) {
      sound.playCorrect();
      setStreak((prev) => prev + 1);
      setSpeed((prev) => Math.min(280, prev + 30));
      setScore((prev) => prev + 10 * (streak + 1));
    } else {
      sound.playIncorrect();
      setStreak(0);
      setSpeed((prev) => Math.max(30, prev - 25));
    }
    setCurrentQIndex((prev) => prev + 1);
  };

  return (
    <div className="p-6 sm:p-9 rounded-3xl bg-white border-2 border-sky-100 shadow-lg space-y-6">
      
      {/* Race Track Header Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
        <div className="p-4 bg-sky-50 rounded-2xl border border-sky-100">
          <span className="text-xs font-bold text-sky-600 block">Tốc độ xe</span>
          <span className="text-2xl sm:text-3xl font-black text-sky-950">{speed} km/h</span>
        </div>
        <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
          <span className="text-xs font-bold text-emerald-600 block">Quãng đường</span>
          <span className="text-2xl sm:text-3xl font-black text-emerald-950">{distance} m</span>
        </div>
        <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100">
          <span className="text-xs font-bold text-amber-600 block">Thời gian còn lại</span>
          <span className={`text-2xl sm:text-3xl font-black ${timeLeft <= 10 ? 'text-rose-600 animate-pulse' : 'text-amber-950'}`}>
            {timeLeft}s
          </span>
        </div>
        <div className="p-4 bg-violet-50 rounded-2xl border border-violet-100">
          <span className="text-xs font-bold text-violet-600 block">Chuỗi đúng</span>
          <span className="text-2xl sm:text-3xl font-black text-violet-950">{streak} 🔥</span>
        </div>
      </div>

      {/* Visual Race Track Representation */}
      <div className="relative bg-slate-900 p-5 rounded-2xl overflow-hidden border border-slate-800">
        <div className="text-xs text-sky-300 font-bold mb-2 flex items-center justify-between">
          <span>🏁 ĐƯỜNG ĐUA TRI THỨC - BÀI {lesson.lessonNumber}: {lesson.title}</span>
          <span>Đã vượt qua {currentQIndex} thử thách</span>
        </div>
        
        {/* Track lane */}
        <div className="relative h-12 bg-slate-800 rounded-xl overflow-hidden border border-slate-700 flex items-center px-4">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:12px_12px]" />
          
          {/* Animated road markings */}
          <div className="w-full flex justify-between border-b-2 border-dashed border-slate-600 pb-1">
            <span className="text-[10px] text-slate-500">XUẤT PHÁT</span>
            <span className="text-[10px] text-slate-500">ĐÍCH</span>
          </div>

          {/* Car icon position based on progress */}
          <div 
            className="absolute top-1/2 -translate-y-1/2 transition-all duration-300 text-2xl"
            style={{ left: `${Math.min(92, Math.max(2, (currentQIndex * 10) % 95))}%` }}
          >
            🏎️
          </div>
        </div>
      </div>

      {!isPlaying && !gameFinished ? (
        <div className="text-center py-8 space-y-4">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900">
            Sẵn sàng tăng tốc cùng câu hỏi Bài {lesson.lessonNumber}?
          </h3>
          <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto leading-relaxed">
            Trả lời nhanh các câu hỏi trắc nghiệm của riêng Bài {lesson.lessonNumber} để tăng tốc xe và đạt điểm cao nhất trong 60 giây.
          </p>

          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              onClick={() => { sound.playClick(); onBackToMain(); }}
              className="px-5 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-black text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              Quay lại màn hình chính
            </button>

            <button
              onClick={handleStartGame}
              className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-sky-600 to-blue-700 hover:opacity-95 text-white font-black text-sm sm:text-base shadow-lg shadow-sky-600/30 flex items-center gap-2 hover:scale-105 transition-all cursor-pointer"
            >
              <Play className="w-5 h-5 fill-white" />
              Bắt Đầu Đua Xe
            </button>
          </div>
        </div>
      ) : gameFinished ? (
        <div className="text-center py-8 space-y-4 animate-in fade-in">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-amber-50 text-amber-500 flex items-center justify-center border-2 border-amber-200 shadow-md">
            <Trophy className="w-10 h-10" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
            Hoàn Thành Cuộc Đua Bài {lesson.lessonNumber}!
          </h3>
          
          <div className="max-w-xs mx-auto p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
            <div className="text-3xl font-black text-sky-800">{score} Điểm</div>
            <div className="text-xs font-bold text-slate-500">Quãng đường: {distance}m</div>
            <div className="text-xs font-bold text-amber-600">+ {Math.round(score * 10)} XP</div>
          </div>

          <div className="pt-2 flex items-center justify-center gap-3 flex-wrap">
            <button
              onClick={() => { sound.playClick(); onBackToMain(); }}
              className="px-6 py-3 rounded-2xl bg-slate-100 text-slate-800 font-black text-xs sm:text-sm hover:bg-slate-200 flex items-center gap-2 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              Quay lại màn hình chính
            </button>

            <button
              onClick={handleStartGame}
              className="px-6 py-3 rounded-2xl bg-sky-600 text-white font-black text-xs sm:text-sm hover:bg-sky-700 shadow-md cursor-pointer"
            >
              Đua Lại Vòng Khác
            </button>
          </div>
        </div>
      ) : (
        /* Playing Question Box with ENLARGED text */
        <div className="space-y-5 animate-in fade-in">
          <div className="flex items-center justify-between">
            <span className="text-xs sm:text-sm font-black text-sky-800 uppercase bg-sky-50 px-3.5 py-1.5 rounded-xl border border-sky-200">
              Bài {lesson.lessonNumber}: Câu {((currentQIndex) % activeQList.length) + 1}
            </span>
            <span className="text-xs sm:text-sm font-black text-amber-600 bg-amber-50 px-3.5 py-1.5 rounded-xl border border-amber-200">
              Điểm số: {score}
            </span>
          </div>

          {currentQ && currentQ.type === 'multiple_choice' ? (
            <>
              {/* ENLARGED QUESTION TEXT */}
              <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-slate-900 bg-slate-50 p-6 rounded-2xl border-2 border-slate-200 leading-relaxed">
                {currentQ.question}
              </h3>

              {/* ENLARGED OPTIONS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentQ.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(i)}
                    className="text-left p-5 rounded-2xl bg-white hover:bg-sky-50 border-2 border-slate-200 hover:border-sky-500 text-sm sm:text-base font-bold transition-all flex items-start gap-4 shadow-xs hover:scale-[1.01] cursor-pointer"
                  >
                    <span className="w-8 h-8 rounded-xl bg-sky-100 text-sky-900 font-black text-sm flex items-center justify-center shrink-0">
                      {['A', 'B', 'C', 'D'][i]}
                    </span>
                    <span className="pt-0.5 leading-relaxed text-slate-800">{opt}</span>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-4">
              <button onClick={() => setCurrentQIndex(prev => prev + 1)} className="px-5 py-2.5 bg-sky-600 text-white rounded-xl text-xs sm:text-sm font-black cursor-pointer">
                Câu tiếp theo →
              </button>
            </div>
          )}
        </div>
      )}

    </div>
  );
};

/* -------------------------------------------------------------
 * GAME 2: Nối Cặp Kiến Thức (Chỉ dùng kiến thức của bài học này)
 * ------------------------------------------------------------- */
const TermMemoryGame: React.FC<{ 
  lesson: Lesson; 
  onAddXp: (amount: number) => void;
  onBackToMain: () => void;
}> = ({ lesson, onAddXp, onBackToMain }) => {
  // Generate term pairs strictly from this lesson's knowledge box & activities
  const lessonPairs = lesson.knowledgeBox.map((box, idx) => {
    const parts = box.split(':');
    if (parts.length >= 2) {
      return {
        term: parts[0].trim(),
        def: parts.slice(1).join(':').trim(),
      };
    }
    return {
      term: `Ý cốt lõi ${idx + 1} (Bài ${lesson.lessonNumber})`,
      def: box.length > 80 ? box.slice(0, 80) + '...' : box,
    };
  });

  const activePairs = lessonPairs.length >= 2 ? lessonPairs.slice(0, 4) : [
    { term: `Bài ${lesson.lessonNumber}: ${lesson.title}`, def: lesson.objectives[0] || 'Kiến thức chuẩn SGK' },
    { term: 'Mục tiêu bài học', def: lesson.objectives[1] || lesson.knowledgeBox[0] },
  ];

  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);
  const [selectedDef, setSelectedDef] = useState<string | null>(null);
  const [matchedTerms, setMatchedTerms] = useState<string[]>([]);
  const [moves, setMoves] = useState(0);

  const isWon = matchedTerms.length === activePairs.length;

  const handleSelectTerm = (t: string) => {
    sound.playClick();
    setSelectedTerm(t);
    checkMatch(t, selectedDef);
  };

  const handleSelectDef = (d: string) => {
    sound.playClick();
    setSelectedDef(d);
    checkMatch(selectedTerm, d);
  };

  const checkMatch = (term: string | null, def: string | null) => {
    if (!term || !def) return;
    setMoves((prev) => prev + 1);

    const match = activePairs.find((p) => p.term === term && p.def === def);
    if (match) {
      sound.playCorrect();
      setMatchedTerms((prev) => [...prev, term]);
      setSelectedTerm(null);
      setSelectedDef(null);
      if (matchedTerms.length + 1 === activePairs.length) {
        sound.playChime();
        onAddXp(150);
      }
    } else {
      sound.playIncorrect();
      setTimeout(() => {
        setSelectedTerm(null);
        setSelectedDef(null);
      }, 700);
    }
  };

  const handleReset = () => {
    sound.playClick();
    setSelectedTerm(null);
    setSelectedDef(null);
    setMatchedTerms([]);
    setMoves(0);
  };

  return (
    <div className="p-6 sm:p-9 rounded-3xl bg-white border-2 border-sky-100 shadow-lg space-y-6">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <span className="text-xs font-black text-sky-800 uppercase tracking-wider block">
            Bài {lesson.lessonNumber}: {lesson.title}
          </span>
          <h3 className="text-lg sm:text-xl font-black text-slate-900">
            Ghép Thuật Ngữ & Khái Niệm Đúng
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Chọn một thuật ngữ ở cột trái và nội dung tương ứng của Bài {lesson.lessonNumber} ở cột phải
          </p>
        </div>

        <div className="flex items-center gap-3 self-end sm:self-center">
          <span className="text-xs sm:text-sm font-black text-sky-900 bg-sky-50 px-4 py-2 rounded-xl border border-sky-200">
            Đã ghép: {matchedTerms.length} / {activePairs.length}
          </span>
          <button
            onClick={handleReset}
            title="Chơi lại"
            className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>
      </div>

      {isWon ? (
        <div className="text-center py-8 space-y-4 animate-in fade-in">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-emerald-50 text-emerald-600 flex items-center justify-center border-2 border-emerald-200 shadow-md">
            <Trophy className="w-10 h-10" />
          </div>
          <h4 className="text-2xl sm:text-3xl font-black text-slate-900">
            Xuất Sắc! Đã Ghép Đúng Tất Cả Ý Cốt Lõi Bài {lesson.lessonNumber}!
          </h4>
          <p className="text-sm text-slate-600">Số lượt thử: {moves} lượt</p>
          <div className="text-sm font-black text-amber-900 bg-amber-100 px-5 py-2 rounded-full inline-block">
            + 150 XP đã được cộng!
          </div>
          <div className="pt-3 flex items-center justify-center gap-3 flex-wrap">
            <button
              onClick={() => { sound.playClick(); onBackToMain(); }}
              className="px-6 py-3 rounded-2xl bg-slate-100 text-slate-800 font-black text-xs sm:text-sm hover:bg-slate-200 flex items-center gap-2 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              Quay lại màn hình chính
            </button>
            <button
              onClick={handleReset}
              className="px-6 py-3 rounded-2xl bg-sky-600 text-white font-black text-xs sm:text-sm hover:bg-sky-700 shadow-md cursor-pointer"
            >
              Chơi Lại Vòng Này
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          
          {/* Column Left: Terms */}
          <div className="space-y-3">
            <span className="text-xs font-black text-slate-400 uppercase tracking-wider block mb-1">
              Thuật ngữ / Vấn đề (Bài {lesson.lessonNumber}):
            </span>
            {activePairs.map((item) => {
              const isMatched = matchedTerms.includes(item.term);
              const isSelected = selectedTerm === item.term;

              return (
                <button
                  key={item.term}
                  disabled={isMatched}
                  onClick={() => handleSelectTerm(item.term)}
                  className={`w-full text-left p-5 rounded-2xl border-2 text-sm sm:text-base font-bold transition-all leading-relaxed cursor-pointer ${
                    isMatched
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-900 opacity-60'
                      : isSelected
                      ? 'bg-sky-50 border-sky-600 text-sky-950 ring-2 ring-sky-600/20 font-black'
                      : 'bg-white border-slate-200 hover:border-sky-300 hover:bg-sky-50/50 text-slate-800 shadow-2xs'
                  }`}
                >
                  {item.term}
                </button>
              );
            })}
          </div>

          {/* Column Right: Definitions */}
          <div className="space-y-3">
            <span className="text-xs font-black text-slate-400 uppercase tracking-wider block mb-1">
              Giải thích / Bản chất (Bài {lesson.lessonNumber}):
            </span>
            {activePairs.map((item) => {
              const isMatched = matchedTerms.includes(item.term);
              const isSelected = selectedDef === item.def;

              return (
                <button
                  key={item.def}
                  disabled={isMatched}
                  onClick={() => handleSelectDef(item.def)}
                  className={`w-full text-left p-5 rounded-2xl border-2 text-sm sm:text-base font-semibold transition-all leading-relaxed cursor-pointer ${
                    isMatched
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-900 opacity-60'
                      : isSelected
                      ? 'bg-amber-50 border-amber-600 text-amber-950 ring-2 ring-amber-600/20 font-bold'
                      : 'bg-white border-slate-200 hover:border-amber-300 hover:bg-amber-50/50 text-slate-800 shadow-2xs'
                  }`}
                >
                  {item.def}
                </button>
              );
            })}
          </div>

        </div>
      )}

    </div>
  );
};

/* -------------------------------------------------------------
 * GAME 3: Đấu Trường Đúng - Sai 15s (Chỉ dùng câu hỏi bài học này)
 * ------------------------------------------------------------- */
const TrueFalseLightningGame: React.FC<{ 
  lesson: Lesson; 
  questions: QuizQuestion[]; 
  onAddXp: (amount: number) => void;
  onBackToMain: () => void;
}> = ({ lesson, questions, onAddXp, onBackToMain }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentRound, setCurrentRound] = useState(0);
  const [seconds, setSeconds] = useState(15);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  // Extract all true/false statements from THIS lesson only!
  const tfItems: Array<{ statement: string; isTrue: boolean }> = [];
  questions.filter((q) => q.type === 'true_false').forEach((q) => {
    if (q.type === 'true_false') {
      q.items.forEach((it) => {
        tfItems.push({
          statement: it.statement,
          isTrue: it.isTrue,
        });
      });
    }
  });

  const activeTfList = tfItems.length > 0 ? tfItems : [
    { statement: `Bài ${lesson.lessonNumber}: ${lesson.title} thuộc chương trình SGK Tin học 11.`, isTrue: true },
    { statement: lesson.knowledgeBox[0] || 'Kiến thức cốt lõi', isTrue: true },
    { statement: 'Dữ liệu luôn được lưu trữ tự do không theo quy tắc cấu trúc nào.', isTrue: false },
  ];

  const currentItem = activeTfList[currentRound % activeTfList.length];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying && seconds > 0) {
      timer = setInterval(() => {
        setSeconds((prev) => {
          if (prev <= 1) {
            handleTimeout();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, seconds]);

  const handleStart = () => {
    sound.playCorrect();
    setIsPlaying(true);
    setCurrentRound(0);
    setSeconds(15);
    setScore(0);
    setStreak(0);
    setIsGameOver(false);
  };

  const handleTimeout = () => {
    sound.playIncorrect();
    setIsPlaying(false);
    setIsGameOver(true);
    onAddXp(score * 5);
  };

  const handleChoice = (choice: boolean) => {
    if (!isPlaying) return;

    if (choice === currentItem.isTrue) {
      sound.playCorrect();
      setStreak((prev) => prev + 1);
      setScore((prev) => prev + 1);
      setSeconds(15);
      setCurrentRound((prev) => prev + 1);
    } else {
      sound.playIncorrect();
      setIsPlaying(false);
      setIsGameOver(true);
      onAddXp(score * 5);
    }
  };

  return (
    <div className="p-6 sm:p-9 rounded-3xl bg-white border-2 border-sky-100 shadow-lg space-y-6">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <span className="text-xs font-black text-sky-800 uppercase tracking-wider block">
            Bài {lesson.lessonNumber}: {lesson.title}
          </span>
          <h3 className="text-lg sm:text-xl font-black text-slate-900">
            Đấu Trường Phản Xạ Đúng / Sai 15 Giây
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Khẳng định sau đây về Bài {lesson.lessonNumber} là Đúng hay Sai? Quyết định trước khi hết giờ!
          </p>
        </div>

        <div className="flex items-center gap-3 self-end sm:self-center">
          <div className="flex items-center gap-1.5 text-xs sm:text-sm font-black text-orange-800 bg-orange-50 px-4 py-2 rounded-xl border border-orange-200">
            <Flame className="w-4 h-4 fill-orange-500" />
            Chuỗi: {streak}
          </div>
          <div className="flex items-center gap-1.5 text-xs sm:text-sm font-black text-sky-900 bg-sky-50 px-4 py-2 rounded-xl border border-sky-200">
            <Trophy className="w-4 h-4 text-sky-600" />
            Điểm: {score}
          </div>
        </div>
      </div>

      {!isPlaying && !isGameOver ? (
        <div className="text-center py-8 space-y-4">
          <h4 className="text-xl sm:text-2xl font-black text-slate-900">
            Thử thách phản xạ Đúng / Sai Bài {lesson.lessonNumber}!
          </h4>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            Mỗi nhận định có đúng 15 giây. Trả lời sai hoặc hết giờ trò chơi sẽ dừng lại.
          </p>
          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              onClick={() => { sound.playClick(); onBackToMain(); }}
              className="px-5 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-black text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              Quay lại màn hình chính
            </button>

            <button
              onClick={handleStart}
              className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-sky-600 to-blue-700 text-white font-black text-sm shadow-md hover:opacity-95 hover:scale-102 transition-all cursor-pointer"
            >
              Bắt Đầu Thử Thách
            </button>
          </div>
        </div>
      ) : isGameOver ? (
        <div className="text-center py-8 space-y-4 animate-in fade-in">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-rose-50 text-rose-600 flex items-center justify-center border-2 border-rose-200 shadow-md">
            <XCircle className="w-10 h-10" />
          </div>
          <h4 className="text-2xl sm:text-3xl font-black text-slate-900">Kết Thúc Thử Thách!</h4>
          <p className="text-sm sm:text-base text-slate-600">
            Em đã trả lời đúng liên tiếp <strong className="text-sky-700 font-black">{score} câu</strong> của Bài {lesson.lessonNumber}!
          </p>
          <div className="text-sm font-black text-amber-900 bg-amber-100 py-2 px-5 rounded-full inline-block">
            + {score * 5} XP được cộng!
          </div>
          <div className="pt-3 flex items-center justify-center gap-3 flex-wrap">
            <button
              onClick={() => { sound.playClick(); onBackToMain(); }}
              className="px-6 py-3 rounded-2xl bg-slate-100 text-slate-800 font-black text-xs sm:text-sm hover:bg-slate-200 flex items-center gap-2 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              Quay lại màn hình chính
            </button>

            <button
              onClick={handleStart}
              className="px-6 py-3 rounded-2xl bg-sky-600 text-white font-black text-xs sm:text-sm hover:bg-sky-700 shadow-md cursor-pointer"
            >
              Chơi Lại Vòng Khác
            </button>
          </div>
        </div>
      ) : (
        /* Active lightning round with ENLARGED font */
        <div className="space-y-6">
          
          {/* Countdown timer bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs sm:text-sm font-black">
              <span className="text-slate-600">Bài {lesson.lessonNumber} • Câu {currentRound + 1}</span>
              <span className={`font-mono text-base ${seconds <= 5 ? 'text-rose-600 animate-pulse font-black' : 'text-sky-700'}`}>
                ⏳ Còn {seconds}s
              </span>
            </div>
            <div className="w-full bg-slate-100 h-3.5 rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-1000 rounded-full ${
                  seconds <= 5 ? 'bg-rose-500' : 'bg-gradient-to-r from-cyan-400 to-sky-600'
                }`}
                style={{ width: `${(seconds / 15) * 100}%` }}
              />
            </div>
          </div>

          {/* Statement Card - ENLARGED */}
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border-2 border-slate-200 text-center min-h-[180px] flex items-center justify-center shadow-xs">
            <p className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 leading-relaxed">
              "{currentItem.statement}"
            </p>
          </div>

          {/* Big True / False buttons */}
          <div className="grid grid-cols-2 gap-5">
            <button
              onClick={() => handleChoice(true)}
              className="py-5 sm:py-7 rounded-3xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xl sm:text-3xl shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-3 cursor-pointer"
            >
              <CheckCircle2 className="w-8 h-8" />
              ĐÚNG
            </button>

            <button
              onClick={() => handleChoice(false)}
              className="py-5 sm:py-7 rounded-3xl bg-rose-600 hover:bg-rose-700 text-white font-black text-xl sm:text-3xl shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-3 cursor-pointer"
            >
              <XCircle className="w-8 h-8" />
              SAI
            </button>
          </div>

        </div>
      )}

    </div>
  );
};
