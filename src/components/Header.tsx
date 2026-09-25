import React from 'react';
import { 
  Flame, 
  Zap, 
  Volume2, 
  VolumeX, 
  BookOpen, 
  History, 
  Tv, 
  Layers,
  ExternalLink,
  CheckSquare,
  Swords
} from 'lucide-react';
import { UserStats } from '../types';
import { sound } from '../utils/audio';

interface HeaderProps {
  currentTab: 'topics' | 'question_bank' | 'exam' | 'history' | 'projector' | 'game';
  onSelectTab: (tab: 'topics' | 'question_bank' | 'exam' | 'history' | 'projector' | 'game') => void;
  userStats: UserStats;
  onToggleSound: () => void;
  selectedGrade?: number;
  onSelectGrade?: (grade: number) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  userStats,
  onToggleSound,
}) => {
  const currentLevel = Math.max(1, Math.floor(Math.sqrt(userStats.xp / 50)) + 1);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-sky-100 shadow-xs transition-all">
      {/* COMPACT SINGLE-ROW NAVBAR: Rút gọn tối đa chiều cao để không che khuất nội dung */}
      <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-8 py-2 sm:py-2.5">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          
          {/* LEFT: Compact Brand Logo */}
          <div 
            onClick={() => { sound.playClick(); onSelectTab('topics'); }}
            className="flex items-center gap-2 sm:gap-2.5 cursor-pointer group shrink-0"
            title="Về trang chủ 9 bài học"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-sky-600 via-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
              <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>

            <div className="leading-tight">
              <div className="flex items-center gap-1">
                <span className="text-sm sm:text-base font-black tracking-tight text-slate-800">
                  TinHọc
                </span>
                <span className="text-sm sm:text-base font-black tracking-tight text-sky-600">
                  11
                </span>
              </div>
              <p className="hidden md:block text-[11px] text-slate-400 font-semibold">
                Chuẩn GDPT 2018
              </p>
            </div>
          </div>

          {/* CENTER: THANH NGANG ĐIỀU HƯỚNG */}
          <nav className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto scrollbar-none py-0.5">
            {/* [Bài Học SGK] */}
            <button
              type="button"
              onClick={() => { sound.playClick(); onSelectTab('topics'); }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-black transition-all shrink-0 cursor-pointer ${
                currentTab === 'topics'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'bg-slate-100/90 text-slate-700 hover:bg-sky-50 hover:text-sky-700 border border-slate-200/80'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Bài Học SGK</span>
            </button>

            {/* [Tự luyện Online - KẾT NỐI LINK KENHHOCTAP THEO YÊU CẦU] */}
            <a
              href="https://kenhhoctap.edu.vn/bai-tap/trac-nghiem-tin-hoc-ung-dung-11-ket-noi-bai-1-he-dieu-hanh-277"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              title="Mở Tự luyện Online trực tuyến kết nối Kênh Học Tập"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-black transition-all shrink-0 cursor-pointer bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-xs hover:from-emerald-700 hover:to-teal-700 hover:shadow-md"
            >
              <CheckSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-100" />
              <span>Tự luyện Online</span>
              <ExternalLink className="w-3 h-3 text-emerald-200" />
            </a>

            {/* [Đấu Trường Game 1v1 - 2 Học Sinh Cùng Thi Đấu] */}
            <button
              type="button"
              onClick={() => { sound.playClick(); onSelectTab('game'); }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-black transition-all shrink-0 cursor-pointer ${
                currentTab === 'game'
                  ? 'bg-gradient-to-r from-rose-600 to-amber-500 text-white shadow-xs'
                  : 'bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200'
              }`}
            >
              <Swords className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-500" />
              <span>Đấu Trường 1v1</span>
              <span className="hidden lg:inline px-1.5 py-0.2 rounded-full text-[10px] font-black bg-rose-600 text-white">
                Game
              </span>
            </button>

            {/* [Máy Chiếu GV] */}
            <button
              type="button"
              onClick={() => { sound.playClick(); onSelectTab('projector'); }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-black transition-all shrink-0 cursor-pointer ${
                currentTab === 'projector'
                  ? 'bg-indigo-700 text-white shadow-xs'
                  : 'bg-slate-100/90 text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 border border-slate-200/80'
              }`}
            >
              <Tv className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Máy Chiếu GV</span>
            </button>

            {/* [Lịch sử] */}
            <button
              type="button"
              onClick={() => { sound.playClick(); onSelectTab('history'); }}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 cursor-pointer ${
                currentTab === 'history'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'bg-slate-100/80 text-slate-600 hover:bg-slate-200 border border-slate-200/80'
              }`}
              title="Lịch sử làm bài"
            >
              <History className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden md:inline">Lịch sử</span>
            </button>
          </nav>

          {/* RIGHT: Compact stats inlined (No 2nd row) */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Streak */}
            <div 
              title="Chuỗi ngày học liên tục"
              className="hidden lg:flex items-center gap-1 px-2 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold"
            >
              <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>{userStats.streak}d</span>
            </div>

            {/* XP */}
            <div 
              title="Điểm kinh nghiệm học tập"
              className="hidden sm:flex items-center gap-1 px-2 py-1 rounded-lg bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold"
            >
              <Zap className="w-3.5 h-3.5 text-sky-500 fill-sky-500" />
              <span>{userStats.xp} XP</span>
            </div>

            {/* Level */}
            <div 
              title={`Cấp độ ${currentLevel}`}
              className="hidden xl:flex items-center gap-1 px-2 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold"
            >
              <span className="text-sky-700">Lv.{currentLevel}</span>
            </div>

            {/* Sound toggle button */}
            <button
              type="button"
              onClick={() => { sound.playClick(); onToggleSound(); }}
              title={userStats.soundEnabled ? "Tắt âm thanh hiệu ứng" : "Bật âm thanh hiệu ứng"}
              className={`p-1.5 rounded-xl border transition-colors cursor-pointer ${
                userStats.soundEnabled 
                  ? 'bg-sky-50 text-sky-700 border-sky-200 hover:bg-sky-100' 
                  : 'bg-slate-100 text-slate-400 border-slate-200 hover:bg-slate-200'
              }`}
            >
              {userStats.soundEnabled ? (
                <Volume2 className="w-4 h-4 text-sky-600" />
              ) : (
                <VolumeX className="w-4 h-4 text-slate-400" />
              )}
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
