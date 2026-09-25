import React, { useState, useEffect, useCallback, useRef } from 'react';
import { 
  Swords, 
  Trophy, 
  Crown, 
  Zap, 
  RotateCcw, 
  Play, 
  CheckCircle2, 
  XCircle, 
  Flame, 
  Sparkles, 
  Clock, 
  Award,
  ChevronRight,
  ArrowLeft,
  Volume2,
  Users,
  Settings2,
  Gamepad2,
  Radio
} from 'lucide-react';
import { QuizQuestion, MultipleChoiceQuestion, Lesson } from '../types';
import { sound } from '../utils/audio';

interface DualBattleGameProps {
  lesson: Lesson;
  questions: QuizQuestion[];
  onAddXp: (amount: number) => void;
  onBackToMain: () => void;
  allLessons?: Lesson[];
  onSelectOtherLesson?: (lessonId: number) => void;
}

interface PlayerStats {
  score: number;
  correctCount: number;
  wrongCount: number;
  fastestCount: number;
  currentStreak: number;
  maxStreak: number;
  hasAnswered: boolean;
  selectedOption: number | null;
  isCorrect: boolean | null;
  answerTime: number | null; // time taken in seconds
}

const P1_AVATARS = ['🦁', '🐉', '⚡', '🚀', '🐯', '🥊'];
const P2_AVATARS = ['🦅', '🐺', '🛸', '❄️', '🌊', '🎯'];

export const DualBattleGame: React.FC<DualBattleGameProps> = ({
  lesson,
  questions,
  onAddXp,
  onBackToMain,
  allLessons,
  onSelectOtherLesson
}) => {
  // Game state
  const [gameState, setGameState] = useState<'lobby' | 'countdown' | 'playing' | 'round_result' | 'game_over'>('lobby');
  
  // Player configs
  const [p1Name, setP1Name] = useState('Chiến Binh Đỏ');
  const [p1Avatar, setP1Avatar] = useState(P1_AVATARS[0]);
  const [p2Name, setP2Name] = useState('Chiến Binh Xanh');
  const [p2Avatar, setP2Avatar] = useState(P2_AVATARS[0]);

  // Match settings
  const [matchQuestionsCount, setMatchQuestionsCount] = useState<number>(10);
  const [roundDuration, setRoundDuration] = useState<number>(15); // seconds per question

  // Active match data
  const [activeQuestions, setActiveQuestions] = useState<MultipleChoiceQuestion[]>([]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(15);
  const [countdownNum, setCountdownNum] = useState(3);

  // Player stats
  const [p1Stats, setP1Stats] = useState<PlayerStats>({
    score: 0,
    correctCount: 0,
    wrongCount: 0,
    fastestCount: 0,
    currentStreak: 0,
    maxStreak: 0,
    hasAnswered: false,
    selectedOption: null,
    isCorrect: null,
    answerTime: null,
  });

  const [p2Stats, setP2Stats] = useState<PlayerStats>({
    score: 0,
    correctCount: 0,
    wrongCount: 0,
    fastestCount: 0,
    currentStreak: 0,
    maxStreak: 0,
    hasAnswered: false,
    selectedOption: null,
    isCorrect: null,
    answerTime: null,
  });

  const roundTimerRef = useRef<NodeJS.Timeout | null>(null);
  const roundStartTimestamp = useRef<number>(Date.now());
  const roundEndedRef = useRef<boolean>(false);

  // Filter multiple choice questions for battle
  const prepareQuestions = useCallback((): MultipleChoiceQuestion[] => {
    const mc = questions.filter((q): q is MultipleChoiceQuestion => q.type === 'multiple_choice');
    // Shuffle and pick desired count
    const shuffled = [...mc].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(matchQuestionsCount, shuffled.length));
  }, [questions, matchQuestionsCount]);

  // Start match from Lobby
  const handleStartLobbyCountdown = () => {
    sound.playClick();
    const readyQuestions = prepareQuestions();
    if (readyQuestions.length === 0) return;

    setActiveQuestions(readyQuestions);
    setCurrentQIndex(0);
    setGameState('countdown');
    setCountdownNum(3);

    // Reset scores
    const initialStats: PlayerStats = {
      score: 0,
      correctCount: 0,
      wrongCount: 0,
      fastestCount: 0,
      currentStreak: 0,
      maxStreak: 0,
      hasAnswered: false,
      selectedOption: null,
      isCorrect: null,
      answerTime: null,
    };
    setP1Stats({ ...initialStats });
    setP2Stats({ ...initialStats });

    let count = 3;
    const cdInterval = setInterval(() => {
      count -= 1;
      if (count > 0) {
        sound.playClick();
        setCountdownNum(count);
      } else if (count === 0) {
        sound.playCorrect();
        setCountdownNum(0); // "GO!"
      } else {
        clearInterval(cdInterval);
        startNewQuestionRound(0, readyQuestions);
      }
    }, 900);
  };

  // Start a specific question round
  const startNewQuestionRound = (qIdx: number, _qList?: MultipleChoiceQuestion[]) => {
    setCurrentQIndex(qIdx);
    setSecondsLeft(roundDuration);
    roundEndedRef.current = false;
    roundStartTimestamp.current = Date.now();

    // Reset round-specific answer flags
    setP1Stats(prev => ({
      ...prev,
      hasAnswered: false,
      selectedOption: null,
      isCorrect: null,
      answerTime: null,
    }));
    setP2Stats(prev => ({
      ...prev,
      hasAnswered: false,
      selectedOption: null,
      isCorrect: null,
      answerTime: null,
    }));

    setGameState('playing');
  };

  // Current Question
  const currentQ = activeQuestions[currentQIndex];

  // Evaluate when both have answered or timer expires
  const endQuestionRound = useCallback(() => {
    if (roundEndedRef.current) return;
    roundEndedRef.current = true;
    if (roundTimerRef.current) clearInterval(roundTimerRef.current);

    setGameState('round_result');

    // Auto advance after 2.5 seconds
    setTimeout(() => {
      setCurrentQIndex(prev => {
        const nextIdx = prev + 1;
        if (nextIdx < activeQuestions.length) {
          startNewQuestionRound(nextIdx, activeQuestions);
          return nextIdx;
        } else {
          // Game Over!
          setGameState('game_over');
          sound.playFanfare();
          const earned = Math.max(p1Stats.score, p2Stats.score);
          onAddXp(Math.round(earned * 0.1));
          return prev;
        }
      });
    }, 2500);
  }, [activeQuestions, onAddXp, p1Stats.score, p2Stats.score]);

  // Main round countdown
  useEffect(() => {
    if (gameState === 'playing') {
      roundTimerRef.current = setInterval(() => {
        setSecondsLeft(prev => {
          if (prev <= 1) {
            sound.playBuzzer();
            endQuestionRound();
            return 0;
          }
          if (prev <= 4) {
            sound.playClick();
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (roundTimerRef.current) clearInterval(roundTimerRef.current);
    };
  }, [gameState, endQuestionRound]);

  // Handle Player 1 Answer
  const handleP1Answer = useCallback((optionIdx: number) => {
    if (gameState !== 'playing' || p1Stats.hasAnswered || !currentQ) return;

    const answerTimeSec = (Date.now() - roundStartTimestamp.current) / 1000;
    const correctIdx = currentQ.type === 'multiple_choice' ? currentQ.correctAnswer : 0;
    const isCorrect = optionIdx === correctIdx;

    let pointsToAdd = 0;
    let isFastest = false;

    if (isCorrect) {
      sound.playCorrect();
      // Base points + speed bonus
      const speedBonus = Math.max(0, Math.round(secondsLeft * 6));
      // Fastest bonus if opponent hasn't answered correctly yet
      const opponentGotItFirst = p2Stats.hasAnswered && p2Stats.isCorrect;
      if (!opponentGotItFirst) {
        pointsToAdd = 100 + speedBonus + 30; // +30 fastest bonus
        isFastest = true;
      } else {
        pointsToAdd = 70 + speedBonus;
      }

      // Combo bonus
      const newStreak = p1Stats.currentStreak + 1;
      if (newStreak >= 3) {
        pointsToAdd += 40; // Streak bonus
      }

      setP1Stats(prev => ({
        ...prev,
        score: prev.score + pointsToAdd,
        correctCount: prev.correctCount + 1,
        fastestCount: isFastest ? prev.fastestCount + 1 : prev.fastestCount,
        currentStreak: newStreak,
        maxStreak: Math.max(prev.maxStreak, newStreak),
        hasAnswered: true,
        selectedOption: optionIdx,
        isCorrect: true,
        answerTime: answerTimeSec,
      }));
    } else {
      sound.playBuzzer();
      setP1Stats(prev => ({
        ...prev,
        score: Math.max(0, prev.score - 20), // Penalty
        wrongCount: prev.wrongCount + 1,
        currentStreak: 0,
        hasAnswered: true,
        selectedOption: optionIdx,
        isCorrect: false,
        answerTime: answerTimeSec,
      }));
    }

    // Check if both have now answered
    if (p2Stats.hasAnswered) {
      setTimeout(() => endQuestionRound(), 400);
    }
  }, [gameState, p1Stats.hasAnswered, currentQ, secondsLeft, p2Stats.hasAnswered, p2Stats.isCorrect, p1Stats.currentStreak, endQuestionRound]);

  // Handle Player 2 Answer
  const handleP2Answer = useCallback((optionIdx: number) => {
    if (gameState !== 'playing' || p2Stats.hasAnswered || !currentQ) return;

    const answerTimeSec = (Date.now() - roundStartTimestamp.current) / 1000;
    const correctIdx = currentQ.type === 'multiple_choice' ? currentQ.correctAnswer : 0;
    const isCorrect = optionIdx === correctIdx;

    let pointsToAdd = 0;
    let isFastest = false;

    if (isCorrect) {
      sound.playCorrect();
      const speedBonus = Math.max(0, Math.round(secondsLeft * 6));
      const opponentGotItFirst = p1Stats.hasAnswered && p1Stats.isCorrect;
      if (!opponentGotItFirst) {
        pointsToAdd = 100 + speedBonus + 30; // +30 fastest bonus
        isFastest = true;
      } else {
        pointsToAdd = 70 + speedBonus;
      }

      const newStreak = p2Stats.currentStreak + 1;
      if (newStreak >= 3) {
        pointsToAdd += 40;
      }

      setP2Stats(prev => ({
        ...prev,
        score: prev.score + pointsToAdd,
        correctCount: prev.correctCount + 1,
        fastestCount: isFastest ? prev.fastestCount + 1 : prev.fastestCount,
        currentStreak: newStreak,
        maxStreak: Math.max(prev.maxStreak, newStreak),
        hasAnswered: true,
        selectedOption: optionIdx,
        isCorrect: true,
        answerTime: answerTimeSec,
      }));
    } else {
      sound.playBuzzer();
      setP2Stats(prev => ({
        ...prev,
        score: Math.max(0, prev.score - 20),
        wrongCount: prev.wrongCount + 1,
        currentStreak: 0,
        hasAnswered: true,
        selectedOption: optionIdx,
        isCorrect: false,
        answerTime: answerTimeSec,
      }));
    }

    if (p1Stats.hasAnswered) {
      setTimeout(() => endQuestionRound(), 400);
    }
  }, [gameState, p2Stats.hasAnswered, currentQ, secondsLeft, p1Stats.hasAnswered, p1Stats.isCorrect, p2Stats.currentStreak, endQuestionRound]);

  // Dual Keyboard Controls listener:
  // P1: A / B / C / D OR 1 / 2 / 3 / 4
  // P2: J / K / L / ; OR ArrowLeft / ArrowUp / ArrowDown / ArrowRight OR 7 / 8 / 9 / 0
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameState !== 'playing') return;
      const key = e.key.toLowerCase();

      // P1 Keys
      if (key === 'a' || key === '1') { e.preventDefault(); handleP1Answer(0); }
      else if (key === 'b' || key === '2') { e.preventDefault(); handleP1Answer(1); }
      else if (key === 'c' || key === '3') { e.preventDefault(); handleP1Answer(2); }
      else if (key === 'd' || key === '4') { e.preventDefault(); handleP1Answer(3); }

      // P2 Keys
      else if (key === 'j' || key === 'arrowleft' || key === '7') { e.preventDefault(); handleP2Answer(0); }
      else if (key === 'k' || key === 'arrowup' || key === '8') { e.preventDefault(); handleP2Answer(1); }
      else if (key === 'l' || key === 'arrowdown' || key === '9') { e.preventDefault(); handleP2Answer(2); }
      else if (key === ';' || key === 'arrowright' || key === '0') { e.preventDefault(); handleP2Answer(3); }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameState, handleP1Answer, handleP2Answer]);

  // Calculate Tug of War Score bar percentage
  const totalScore = p1Stats.score + p2Stats.score;
  const p1Share = totalScore > 0 ? Math.round((p1Stats.score / totalScore) * 100) : 50;

  // LOBBY VIEW
  if (gameState === 'lobby') {
    return (
      <div className="bg-white rounded-3xl border-2 border-slate-200 shadow-xl overflow-hidden p-5 sm:p-8 space-y-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-rose-500 to-amber-500 text-white flex items-center justify-center shadow-lg shadow-rose-500/20">
              <Swords className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
                <span>Đấu Trường 1v1: Song Đấu Tri Thức</span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-rose-100 text-rose-700 border border-rose-200">
                  2 Người Chơi Cùng Lúc
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold">
                Bài {lesson.lessonNumber}: {lesson.title} • Thi đấu trực tiếp trên cùng 1 màn hình
              </p>
            </div>
          </div>

          <button
            onClick={() => { sound.playClick(); onBackToMain(); }}
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-all flex items-center gap-2 self-start cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Quay lại</span>
          </button>
        </div>

        {/* 2 Players Setup Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          
          {/* VS Badge in Center */}
          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-slate-900 text-amber-300 font-black text-sm items-center justify-center border-4 border-white shadow-xl">
            VS
          </div>

          {/* Player 1 Card (Red / Amber) */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-rose-50 via-amber-50 to-orange-50 border-2 border-rose-300 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-xl bg-rose-600 text-white text-xs font-black uppercase tracking-wider">
                🔴 Người Chơi 1 (Bên Trái)
              </span>
              <span className="text-3xl">{p1Avatar}</span>
            </div>

            <div>
              <label className="block text-xs font-black text-slate-700 mb-1">
                Tên thí sinh:
              </label>
              <input
                type="text"
                value={p1Name}
                onChange={(e) => setP1Name(e.target.value)}
                maxLength={20}
                className="w-full px-4 py-2.5 rounded-xl border-2 border-rose-200 focus:border-rose-500 bg-white font-bold text-slate-800 text-sm outline-hidden"
                placeholder="Nhập tên học sinh 1..."
              />
            </div>

            {/* Avatar selector */}
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1.5">
                Chọn linh vật:
              </label>
              <div className="flex items-center gap-2 flex-wrap">
                {P1_AVATARS.map((av) => (
                  <button
                    key={av}
                    onClick={() => { sound.playClick(); setP1Avatar(av); }}
                    className={`w-10 h-10 rounded-xl text-xl flex items-center justify-center transition-all cursor-pointer ${
                      p1Avatar === av
                        ? 'bg-rose-600 text-white ring-2 ring-rose-400 scale-110 shadow-md'
                        : 'bg-white hover:bg-rose-100 border border-rose-200'
                    }`}
                  >
                    {av}
                  </button>
                ))}
              </div>
            </div>

            {/* Control Guide for P1 */}
            <div className="p-3.5 rounded-2xl bg-white/80 border border-rose-200 text-xs font-semibold text-rose-900 space-y-1">
              <div className="font-bold flex items-center gap-1.5 text-rose-800">
                <Gamepad2 className="w-4 h-4" />
                <span>Cách điều khiển Player 1:</span>
              </div>
              <p>• Phím bàn phím: <kbd className="px-1.5 py-0.5 rounded bg-rose-100 font-mono font-bold">A</kbd> <kbd className="px-1.5 py-0.5 rounded bg-rose-100 font-mono font-bold">B</kbd> <kbd className="px-1.5 py-0.5 rounded bg-rose-100 font-mono font-bold">C</kbd> <kbd className="px-1.5 py-0.5 rounded bg-rose-100 font-mono font-bold">D</kbd> (hoặc số 1, 2, 3, 4)</p>
              <p>• Màn hình cảm ứng: Chạm trực tiếp vào nút đáp án nửa trái.</p>
            </div>
          </div>

          {/* Player 2 Card (Blue / Cyan) */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-sky-50 via-indigo-50 to-cyan-50 border-2 border-sky-300 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-xl bg-sky-600 text-white text-xs font-black uppercase tracking-wider">
                🔵 Người Chơi 2 (Bên Phải)
              </span>
              <span className="text-3xl">{p2Avatar}</span>
            </div>

            <div>
              <label className="block text-xs font-black text-slate-700 mb-1">
                Tên thí sinh:
              </label>
              <input
                type="text"
                value={p2Name}
                onChange={(e) => setP2Name(e.target.value)}
                maxLength={20}
                className="w-full px-4 py-2.5 rounded-xl border-2 border-sky-200 focus:border-sky-500 bg-white font-bold text-slate-800 text-sm outline-hidden"
                placeholder="Nhập tên học sinh 2..."
              />
            </div>

            {/* Avatar selector */}
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1.5">
                Chọn linh vật:
              </label>
              <div className="flex items-center gap-2 flex-wrap">
                {P2_AVATARS.map((av) => (
                  <button
                    key={av}
                    onClick={() => { sound.playClick(); setP2Avatar(av); }}
                    className={`w-10 h-10 rounded-xl text-xl flex items-center justify-center transition-all cursor-pointer ${
                      p2Avatar === av
                        ? 'bg-sky-600 text-white ring-2 ring-sky-400 scale-110 shadow-md'
                        : 'bg-white hover:bg-sky-100 border border-sky-200'
                    }`}
                  >
                    {av}
                  </button>
                ))}
              </div>
            </div>

            {/* Control Guide for P2 */}
            <div className="p-3.5 rounded-2xl bg-white/80 border border-sky-200 text-xs font-semibold text-sky-900 space-y-1">
              <div className="font-bold flex items-center gap-1.5 text-sky-800">
                <Gamepad2 className="w-4 h-4" />
                <span>Cách điều khiển Player 2:</span>
              </div>
              <p>• Phím bàn phím: <kbd className="px-1.5 py-0.5 rounded bg-sky-100 font-mono font-bold">J</kbd> <kbd className="px-1.5 py-0.5 rounded bg-sky-100 font-mono font-bold">K</kbd> <kbd className="px-1.5 py-0.5 rounded bg-sky-100 font-mono font-bold">L</kbd> <kbd className="px-1.5 py-0.5 rounded bg-sky-100 font-mono font-bold">;</kbd> (hoặc phím Mũi tên)</p>
              <p>• Màn hình cảm ứng: Chạm trực tiếp vào nút đáp án nửa phải.</p>
            </div>
          </div>

        </div>

        {/* Match Settings */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between gap-4">
          
          <div className="flex items-center gap-4 flex-wrap">
            <div>
              <span className="text-xs font-bold text-slate-500 block mb-1">Số câu hỏi mỗi trận:</span>
              <div className="flex items-center gap-1.5">
                {[5, 10, 15].map((cnt) => (
                  <button
                    key={cnt}
                    onClick={() => { sound.playClick(); setMatchQuestionsCount(cnt); }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer ${
                      matchQuestionsCount === cnt
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                    }`}
                  >
                    {cnt} câu
                  </button>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs font-bold text-slate-500 block mb-1">Thời gian mỗi câu:</span>
              <div className="flex items-center gap-1.5">
                {[10, 15, 20].map((sec) => (
                  <button
                    key={sec}
                    onClick={() => { sound.playClick(); setRoundDuration(sec); }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer ${
                      roundDuration === sec
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                    }`}
                  >
                    {sec} giây
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Lesson Switcher */}
          {allLessons && allLessons.length > 0 && onSelectOtherLesson && (
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500">Đổi bài học:</span>
              <select
                value={lesson.id}
                onChange={(e) => onSelectOtherLesson(Number(e.target.value))}
                className="px-3 py-1.5 rounded-xl border border-slate-300 text-xs font-bold bg-white text-slate-800"
              >
                {allLessons.map(l => (
                  <option key={l.id} value={l.id}>
                    Bài {l.lessonNumber}: {l.title}
                  </option>
                ))}
              </select>
            </div>
          )}

        </div>

        {/* Big Start Battle Button */}
        <div className="text-center pt-2">
          <button
            onClick={handleStartLobbyCountdown}
            className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-gradient-to-r from-rose-600 via-amber-600 to-rose-600 text-white font-black text-base sm:text-lg shadow-xl shadow-rose-600/25 hover:shadow-2xl hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-3 mx-auto cursor-pointer"
          >
            <Swords className="w-6 h-6 animate-pulse" />
            <span>BẮT ĐẦU SONG ĐẤU (3..2..1)</span>
          </button>
        </div>

      </div>
    );
  }

  // COUNTDOWN VIEW
  if (gameState === 'countdown') {
    return (
      <div className="p-16 rounded-3xl bg-slate-950 text-white text-center flex flex-col items-center justify-center min-h-[420px] shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-radial from-rose-600/20 via-transparent to-transparent opacity-50" />
        
        <p className="text-base sm:text-xl font-bold text-amber-300 uppercase tracking-widest mb-4">
          Chuẩn bị sẵn sàng bàn phím & ngón tay!
        </p>

        <div className="w-36 h-36 rounded-full bg-gradient-to-tr from-rose-600 to-amber-500 flex items-center justify-center text-7xl font-black shadow-2xl shadow-rose-600/50 animate-bounce">
          {countdownNum === 0 ? 'GO!' : countdownNum}
        </div>

        <div className="mt-8 flex items-center justify-center gap-12 text-sm sm:text-base font-black">
          <span className="text-rose-400 flex items-center gap-2">
            <span>{p1Avatar}</span>
            <span>{p1Name} (Phím A B C D)</span>
          </span>
          <span className="text-amber-400">VS</span>
          <span className="text-sky-400 flex items-center gap-2">
            <span>{p2Avatar}</span>
            <span>{p2Name} (Phím J K L ;)</span>
          </span>
        </div>
      </div>
    );
  }

  // GAME OVER / VICTORY PODIUM VIEW
  if (gameState === 'game_over') {
    const isP1Winner = p1Stats.score > p2Stats.score;
    const isP2Winner = p2Stats.score > p1Stats.score;
    const isTie = p1Stats.score === p2Stats.score;

    return (
      <div className="p-6 sm:p-10 rounded-3xl bg-white border-2 border-slate-200 shadow-2xl space-y-6 animate-in zoom-in-95">
        
        {/* Victory Banner */}
        <div className="text-center space-y-3">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-amber-400 to-yellow-500 text-slate-950 flex items-center justify-center shadow-xl shadow-amber-400/30">
            <Trophy className="w-12 h-12" />
          </div>

          <span className="px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300 inline-block">
            Trận đấu hoàn thành • {matchQuestionsCount} câu hỏi
          </span>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
            {isTie ? (
              <span className="text-indigo-600">BẤT PHÂN THẮNG BẠI - HÒA NHAU! 🤝</span>
            ) : isP1Winner ? (
              <span className="text-rose-600 flex items-center justify-center gap-2">
                <Crown className="w-8 h-8 text-amber-500" />
                {p1Name} GIÀNH CHIẾN THẮNG! 🏆
              </span>
            ) : (
              <span className="text-sky-600 flex items-center justify-center gap-2">
                <Crown className="w-8 h-8 text-amber-500" />
                {p2Name} GIÀNH CHIẾN THẮNG! 🏆
              </span>
            )}
          </h2>

          <p className="text-sm sm:text-base text-slate-500 font-semibold max-w-xl mx-auto">
            Một màn tranh tài nảy lửa về kiến thức <strong>Bài {lesson.lessonNumber}: {lesson.title}</strong>!
          </p>
        </div>

        {/* Head-to-Head Comparison Table */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* P1 Results */}
          <div className={`p-6 rounded-3xl border-2 transition-all ${
            isP1Winner 
              ? 'bg-rose-50/80 border-rose-500 shadow-lg ring-2 ring-rose-200' 
              : 'bg-slate-50 border-slate-200'
          }`}>
            <div className="flex items-center justify-between pb-4 border-b border-rose-200/60">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{p1Avatar}</span>
                <div>
                  <h3 className="text-lg font-black text-slate-900">{p1Name}</h3>
                  <span className="text-xs font-bold text-rose-700">Chiến binh đỏ</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-3xl font-black text-rose-600">{p1Stats.score}</span>
                <span className="block text-[11px] font-bold text-slate-500">Điểm số</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-4 text-xs font-bold">
              <div className="p-3 rounded-xl bg-white border border-rose-100">
                <span className="text-slate-500 block">Số câu đúng:</span>
                <span className="text-base font-black text-emerald-600">{p1Stats.correctCount}/{activeQuestions.length}</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-rose-100">
                <span className="text-slate-500 block">Bấm nhanh nhất:</span>
                <span className="text-base font-black text-amber-600">{p1Stats.fastestCount} lần</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-rose-100">
                <span className="text-slate-500 block">Chuỗi đúng dài nhất:</span>
                <span className="text-base font-black text-rose-600">🔥 {p1Stats.maxStreak} câu</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-rose-100">
                <span className="text-slate-500 block">Số câu sai:</span>
                <span className="text-base font-black text-slate-700">{p1Stats.wrongCount} câu</span>
              </div>
            </div>
          </div>

          {/* P2 Results */}
          <div className={`p-6 rounded-3xl border-2 transition-all ${
            isP2Winner 
              ? 'bg-sky-50/80 border-sky-500 shadow-lg ring-2 ring-sky-200' 
              : 'bg-slate-50 border-slate-200'
          }`}>
            <div className="flex items-center justify-between pb-4 border-b border-sky-200/60">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{p2Avatar}</span>
                <div>
                  <h3 className="text-lg font-black text-slate-900">{p2Name}</h3>
                  <span className="text-xs font-bold text-sky-700">Chiến binh xanh</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-3xl font-black text-sky-600">{p2Stats.score}</span>
                <span className="block text-[11px] font-bold text-slate-500">Điểm số</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-4 text-xs font-bold">
              <div className="p-3 rounded-xl bg-white border border-sky-100">
                <span className="text-slate-500 block">Số câu đúng:</span>
                <span className="text-base font-black text-emerald-600">{p2Stats.correctCount}/{activeQuestions.length}</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-sky-100">
                <span className="text-slate-500 block">Bấm nhanh nhất:</span>
                <span className="text-base font-black text-amber-600">{p2Stats.fastestCount} lần</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-sky-100">
                <span className="text-slate-500 block">Chuỗi đúng dài nhất:</span>
                <span className="text-base font-black text-sky-600">🔥 {p2Stats.maxStreak} câu</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-sky-100">
                <span className="text-slate-500 block">Số câu sai:</span>
                <span className="text-base font-black text-slate-700">{p2Stats.wrongCount} câu</span>
              </div>
            </div>
          </div>

        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-3 pt-4 flex-wrap">
          <button
            onClick={() => { sound.playClick(); onBackToMain(); }}
            className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm flex items-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Màn hình chính</span>
          </button>

          <button
            onClick={() => { sound.playClick(); setGameState('lobby'); }}
            className="px-5 py-3 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs sm:text-sm flex items-center gap-2 cursor-pointer"
          >
            <Settings2 className="w-4 h-4" />
            <span>Cài đặt lại</span>
          </button>

          <button
            onClick={handleStartLobbyCountdown}
            className="px-7 py-3 rounded-xl bg-gradient-to-r from-rose-600 to-amber-600 text-white font-black text-xs sm:text-sm shadow-md hover:scale-102 active:scale-98 transition-all flex items-center gap-2 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>TÁI ĐẤU NGAY (TRẬN PHỤC THÙ)</span>
          </button>
        </div>

      </div>
    );
  }

  // ACTIVE MATCH PLAYING OR ROUND_RESULT VIEW
  const correctIdx = currentQ && currentQ.type === 'multiple_choice' ? currentQ.correctAnswer : 0;

  return (
    <div className="space-y-4">
      
      {/* Top HUD: Scoreboard, Tug-of-war Bar & Countdown Timer */}
      <div className="bg-slate-900 text-white p-4 sm:p-5 rounded-3xl shadow-xl space-y-3">
        
        {/* Row 1: P1 Score - Center Timer - P2 Score */}
        <div className="flex items-center justify-between gap-3">
          
          {/* P1 Score Badge */}
          <div className="flex items-center gap-2.5">
            <span className="text-3xl">{p1Avatar}</span>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs sm:text-sm font-black text-rose-300 truncate max-w-[110px] sm:max-w-[160px]">
                  {p1Name}
                </span>
                {p1Stats.currentStreak >= 2 && (
                  <span className="px-1.5 py-0.5 rounded-md text-[10px] font-black bg-rose-500 text-white flex items-center gap-0.5">
                    <Flame className="w-3 h-3 fill-white" />
                    x{p1Stats.currentStreak}
                  </span>
                )}
              </div>
              <div className="text-xl sm:text-2xl font-black text-rose-400">
                {p1Stats.score} <span className="text-[11px] font-bold text-slate-400">điểm</span>
              </div>
            </div>
          </div>

          {/* Central Timer & Round Counter */}
          <div className="text-center shrink-0">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
              Câu {currentQIndex + 1}/{activeQuestions.length}
            </div>
            <div className={`text-2xl sm:text-3xl font-black font-mono transition-all ${
              secondsLeft <= 4 ? 'text-rose-500 scale-110 animate-pulse' : 'text-amber-400'
            }`}>
              ⏳ {secondsLeft}s
            </div>
          </div>

          {/* P2 Score Badge */}
          <div className="flex items-center gap-2.5 text-right flex-row-reverse">
            <span className="text-3xl">{p2Avatar}</span>
            <div>
              <div className="flex items-center justify-end gap-1.5">
                {p2Stats.currentStreak >= 2 && (
                  <span className="px-1.5 py-0.5 rounded-md text-[10px] font-black bg-sky-500 text-white flex items-center gap-0.5">
                    <Flame className="w-3 h-3 fill-white" />
                    x{p2Stats.currentStreak}
                  </span>
                )}
                <span className="text-xs sm:text-sm font-black text-sky-300 truncate max-w-[110px] sm:max-w-[160px]">
                  {p2Name}
                </span>
              </div>
              <div className="text-xl sm:text-2xl font-black text-sky-400">
                {p2Stats.score} <span className="text-[11px] font-bold text-slate-400">điểm</span>
              </div>
            </div>
          </div>

        </div>

        {/* Tug-of-war bar */}
        <div className="space-y-1">
          <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden flex relative">
            <div 
              className="bg-gradient-to-r from-rose-600 to-amber-500 h-full transition-all duration-500"
              style={{ width: `${p1Share}%` }}
            />
            <div 
              className="bg-gradient-to-r from-cyan-400 to-sky-600 h-full transition-all duration-500"
              style={{ width: `${100 - p1Share}%` }}
            />
            {/* Center line marker */}
            <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-white/70 -translate-x-1/2 shadow-xs" />
          </div>
          <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 px-1">
            <span>{p1Share}% thế trận</span>
            <span>Tỉ số trực tiếp</span>
            <span>{100 - p1Share}% thế trận</span>
          </div>
        </div>

      </div>

      {/* Center Question Card */}
      {currentQ && (
        <div className="bg-white rounded-3xl border-2 border-slate-200 shadow-md p-5 sm:p-7 space-y-4 text-center">
          
          <div className="flex items-center justify-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-black bg-sky-100 text-sky-800 border border-sky-200">
              Bài {lesson.lessonNumber}: {lesson.title}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-black bg-amber-100 text-amber-800 border border-amber-200">
              Mức độ: {currentQ.difficulty.replace('_', ' ').toUpperCase()}
            </span>
          </div>

          <h3 className="text-base sm:text-xl lg:text-2xl font-black text-slate-900 leading-snug">
            {currentQ.question}
          </h3>

          {/* If round_result state: show answer status banner */}
          {gameState === 'round_result' && (
            <div className="p-3 rounded-2xl bg-amber-50 border-2 border-amber-300 text-slate-900 text-xs sm:text-sm font-bold animate-in fade-in">
              Đáp án chính xác là: <span className="font-black text-emerald-700">{['A', 'B', 'C', 'D'][correctIdx]}. {currentQ.options[correctIdx]}</span>
            </div>
          )}

        </div>
      )}

      {/* Split Dual Controls: Player 1 (Left) vs Player 2 (Right) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* PLAYER 1 CONTROLS (Left side - Red theme) */}
        <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-b from-rose-50 to-white border-2 border-rose-300 shadow-md space-y-3">
          
          <div className="flex items-center justify-between pb-2 border-b border-rose-200">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{p1Avatar}</span>
              <div>
                <span className="text-xs sm:text-sm font-black text-rose-900">{p1Name}</span>
                <span className="block text-[11px] font-bold text-rose-600">Phím: A • B • C • D</span>
              </div>
            </div>

            {/* Answer Status feedback */}
            {p1Stats.hasAnswered ? (
              p1Stats.isCorrect ? (
                <span className="px-3 py-1 rounded-xl bg-emerald-600 text-white text-xs font-black flex items-center gap-1 shadow-xs animate-bounce">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  ĐÚNG! (+{p1Stats.answerTime ? Math.round(100 + secondsLeft * 6) : 100}đ)
                </span>
              ) : (
                <span className="px-3 py-1 rounded-xl bg-rose-600 text-white text-xs font-black flex items-center gap-1 shadow-xs">
                  <XCircle className="w-3.5 h-3.5" />
                  SAI RỒI (-20đ)
                </span>
              )
            ) : (
              <span className="px-2.5 py-0.5 rounded-lg bg-rose-100 text-rose-700 text-xs font-bold animate-pulse">
                Đang chờ chọn...
              </span>
            )}
          </div>

          {/* P1 4 Option Buttons */}
          <div className="grid grid-cols-1 gap-2.5">
            {currentQ && currentQ.options.map((opt, idx) => {
              const isSelected = p1Stats.selectedOption === idx;
              const isThisCorrect = idx === correctIdx;
              
              let btnStyle = 'bg-white hover:bg-rose-50 text-slate-800 border-rose-200 hover:border-rose-400';
              if (p1Stats.hasAnswered) {
                if (isSelected) {
                  btnStyle = p1Stats.isCorrect 
                    ? 'bg-emerald-600 text-white border-emerald-700 shadow-md font-black' 
                    : 'bg-rose-600 text-white border-rose-700 line-through opacity-80';
                } else if (gameState === 'round_result' && isThisCorrect) {
                  btnStyle = 'bg-emerald-50 text-emerald-900 border-emerald-400 ring-2 ring-emerald-300 font-black';
                } else {
                  btnStyle = 'bg-slate-100 text-slate-400 border-slate-200 opacity-60';
                }
              }

              return (
                <button
                  key={idx}
                  disabled={p1Stats.hasAnswered || gameState !== 'playing'}
                  onClick={() => handleP1Answer(idx)}
                  className={`w-full text-left p-3 sm:p-3.5 rounded-2xl border-2 transition-all flex items-start gap-2.5 cursor-pointer shadow-xs active:scale-98 ${btnStyle}`}
                >
                  <span className={`w-7 h-7 rounded-xl font-black text-xs flex items-center justify-center shrink-0 ${
                    isSelected && p1Stats.isCorrect 
                      ? 'bg-white text-emerald-700' 
                      : isSelected && !p1Stats.isCorrect
                      ? 'bg-white text-rose-700'
                      : 'bg-rose-100 text-rose-900'
                  }`}>
                    {['A', 'B', 'C', 'D'][idx]}
                  </span>
                  <span className="text-xs sm:text-sm font-bold pt-0.5 leading-snug flex-1">
                    {opt}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

        {/* PLAYER 2 CONTROLS (Right side - Blue theme) */}
        <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-b from-sky-50 to-white border-2 border-sky-300 shadow-md space-y-3">
          
          <div className="flex items-center justify-between pb-2 border-b border-sky-200">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{p2Avatar}</span>
              <div>
                <span className="text-xs sm:text-sm font-black text-sky-900">{p2Name}</span>
                <span className="block text-[11px] font-bold text-sky-600">Phím: J • K • L • ;</span>
              </div>
            </div>

            {/* Answer Status feedback */}
            {p2Stats.hasAnswered ? (
              p2Stats.isCorrect ? (
                <span className="px-3 py-1 rounded-xl bg-emerald-600 text-white text-xs font-black flex items-center gap-1 shadow-xs animate-bounce">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  ĐÚNG! (+{p2Stats.answerTime ? Math.round(100 + secondsLeft * 6) : 100}đ)
                </span>
              ) : (
                <span className="px-3 py-1 rounded-xl bg-sky-600 text-white text-xs font-black flex items-center gap-1 shadow-xs">
                  <XCircle className="w-3.5 h-3.5" />
                  SAI RỒI (-20đ)
                </span>
              )
            ) : (
              <span className="px-2.5 py-0.5 rounded-lg bg-sky-100 text-sky-700 text-xs font-bold animate-pulse">
                Đang chờ chọn...
              </span>
            )}
          </div>

          {/* P2 4 Option Buttons */}
          <div className="grid grid-cols-1 gap-2.5">
            {currentQ && currentQ.options.map((opt, idx) => {
              const isSelected = p2Stats.selectedOption === idx;
              const isThisCorrect = idx === correctIdx;
              
              let btnStyle = 'bg-white hover:bg-sky-50 text-slate-800 border-sky-200 hover:border-sky-400';
              if (p2Stats.hasAnswered) {
                if (isSelected) {
                  btnStyle = p2Stats.isCorrect 
                    ? 'bg-emerald-600 text-white border-emerald-700 shadow-md font-black' 
                    : 'bg-sky-600 text-white border-sky-700 line-through opacity-80';
                } else if (gameState === 'round_result' && isThisCorrect) {
                  btnStyle = 'bg-emerald-50 text-emerald-900 border-emerald-400 ring-2 ring-emerald-300 font-black';
                } else {
                  btnStyle = 'bg-slate-100 text-slate-400 border-slate-200 opacity-60';
                }
              }

              return (
                <button
                  key={idx}
                  disabled={p2Stats.hasAnswered || gameState !== 'playing'}
                  onClick={() => handleP2Answer(idx)}
                  className={`w-full text-left p-3 sm:p-3.5 rounded-2xl border-2 transition-all flex items-start gap-2.5 cursor-pointer shadow-xs active:scale-98 ${btnStyle}`}
                >
                  <span className={`w-7 h-7 rounded-xl font-black text-xs flex items-center justify-center shrink-0 ${
                    isSelected && p2Stats.isCorrect 
                      ? 'bg-white text-emerald-700' 
                      : isSelected && !p2Stats.isCorrect
                      ? 'bg-white text-sky-700'
                      : 'bg-sky-100 text-sky-900'
                  }`}>
                    {['A', 'B', 'C', 'D'][idx]}
                  </span>
                  <span className="text-xs sm:text-sm font-bold pt-0.5 leading-snug flex-1">
                    {opt}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

      </div>

    </div>
  );
};
