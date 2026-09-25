import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Search, 
  Sparkles, 
  Layers, 
  Compass, 
  GraduationCap, 
  CheckCircle2, 
  ExternalLink,
  Flame,
  Zap,
  HelpCircle,
  Clock,
  Tv,
  Gamepad2,
  ChevronDown
} from 'lucide-react';
import { Topic, Lesson, QuizQuestion, CustomAppLink, ExamResult } from './types';
import { TOPICS } from './data/topics';
import { ALL_LESSONS, getLessonsByTopic } from './data/lessons';
import { getQuestionsByLesson, generateExamSet } from './data/questions';
import { Header } from './components/Header';
import { TopicCard } from './components/TopicCard';
import { LessonDetailModal } from './components/LessonDetailModal';
import { QuizModal } from './components/QuizModal';
import { CustomLinkModal } from './components/CustomLinkModal';
import { FlashcardModal } from './components/FlashcardModal';
import { QuestionBankView } from './components/QuestionBankView';
import { ExamModeView } from './components/ExamModeView';
import { ExamHistoryView } from './components/ExamHistoryView';
import { TeacherProjectorMode } from './components/TeacherProjectorMode';
import { LearningGamesView } from './components/LearningGamesView';
import { AutoLearnCheckModal } from './components/AutoLearnCheckModal';
import { 
  loadUserStats, 
  saveUserStats, 
  addXp, 
  markLessonCompleted, 
  unmarkLessonCompleted,
  recordLessonQuizResult,
  loadCustomLinks, 
  saveCustomLink 
} from './utils/storage';
import { sound } from './utils/audio';

export default function App() {
  const [currentTab, setCurrentTab] = useState<'topics' | 'question_bank' | 'exam' | 'history' | 'projector' | 'game'>('topics');
  const [selectedGrade, setSelectedGrade] = useState<number>(11);
  const [userStats, setUserStats] = useState(loadUserStats());
  const [customLinks, setCustomLinks] = useState<Record<number, CustomAppLink>>(loadCustomLinks());
  
  // Topic search & filter in main view
  const [searchTopicQuery, setSearchTopicQuery] = useState('');
  const [activeTopicFilter, setActiveTopicFilter] = useState<number | 'all'>('all');
  const [isTopicsDropdownOpen, setIsTopicsDropdownOpen] = useState(false);
  const [overviewMode, setOverviewMode] = useState<'topics_only' | 'all_lessons'>('topics_only');

  // Active Modals
  const [selectedLessonForDetail, setSelectedLessonForDetail] = useState<Lesson | null>(null);
  const [activeQuizData, setActiveQuizData] = useState<{ questions: QuizQuestion[]; title: string; subtitle?: string; lessonId?: number } | null>(null);
  const [selectedLessonForCustomLink, setSelectedLessonForCustomLink] = useState<Lesson | null>(null);
  const [selectedTopicForFlashcard, setSelectedTopicForFlashcard] = useState<Topic | null>(null);
  const [selectedGameLesson, setSelectedGameLesson] = useState<Lesson | undefined>(undefined);
  const [selectedLessonForAutoLearnCheck, setSelectedLessonForAutoLearnCheck] = useState<Lesson | null>(null);

  // Sync sound setting
  useEffect(() => {
    sound.setEnabled(userStats.soundEnabled);
  }, [userStats.soundEnabled]);

  const handleToggleSound = () => {
    const updated = { ...userStats, soundEnabled: !userStats.soundEnabled };
    setUserStats(updated);
    saveUserStats(updated);
  };

  const handleMarkLessonCompleted = (lessonId: number) => {
    const updated = markLessonCompleted(lessonId);
    setUserStats({ ...updated });
  };

  const handleSaveCustomLink = (link: CustomAppLink) => {
    const updated = saveCustomLink(link);
    setCustomLinks({ ...updated });
  };

  const handleResetCustomLink = (lessonId: number) => {
    const links = { ...customLinks };
    delete links[lessonId];
    setCustomLinks(links);
    try {
      localStorage.setItem('tinhoc11_custom_app_links', JSON.stringify(links));
    } catch {
      // ignore
    }
  };

  const handleStartLessonQuiz = (lesson: Lesson) => {
    const questions = getQuestionsByLesson(lesson.id);
    setActiveQuizData({
      lessonId: lesson.id,
      questions: questions.length > 0 ? questions : generateExamSet({ count: 10 }),
      title: `Bài ${lesson.lessonNumber}: ${lesson.title}`,
      subtitle: `Luyện tập 10 câu Trắc nghiệm & Đúng/Sai phân hóa`,
    });
  };

  const handleStartTopicExam = (topic: Topic) => {
    const questions = generateExamSet({ topicId: topic.id, count: 10 });
    setActiveQuizData({
      questions,
      title: `Thi thử: ${topic.code} - ${topic.title}`,
      subtitle: `10 câu Trắc nghiệm phân hóa chuẩn ma trận`,
    });
  };

  const handleStartCustomQuiz = (questions: QuizQuestion[], title: string) => {
    setActiveQuizData({
      questions,
      title,
      subtitle: 'Luyện tập Ngân hàng câu hỏi',
    });
  };

  const handleSaveExamResult = (result: ExamResult) => {
    const stats = { ...userStats };
    stats.examHistory.unshift(result);
    stats.xp += Math.round(result.score * 15);
    setUserStats(stats);
    saveUserStats(stats);
  };

  const handleCompleteQuiz = (score: number, maxScore: number, xpEarned: number) => {
    if (activeQuizData?.lessonId) {
      const { stats } = recordLessonQuizResult(activeQuizData.lessonId, score, maxScore);
      setUserStats({ ...stats });
    } else {
      const stats = addXp(xpEarned);
      setUserStats({ ...stats });
    }
  };

  const handleUnmarkLessonCompleted = (lessonId: number) => {
    const updated = unmarkLessonCompleted(lessonId);
    setUserStats({ ...updated });
  };

  const handleCheckAutoLearn = (lesson: Lesson) => {
    setSelectedLessonForAutoLearnCheck(lesson);
  };

  const handleAddGameXp = (amount: number) => {
    const stats = addXp(amount);
    setUserStats({ ...stats });
  };

  // Filter topics for main screen
  const visibleTopics = TOPICS.filter((topic) => {
    if (activeTopicFilter !== 'all' && topic.id !== activeTopicFilter) {
      return false;
    }
    
    if (searchTopicQuery.trim()) {
      const q = searchTopicQuery.toLowerCase();
      const topicLessons = getLessonsByTopic(topic.id);
      const matchesTopic = topic.title.toLowerCase().includes(q) || topic.code.toLowerCase().includes(q);
      const matchesLesson = topicLessons.some((l) => l.title.toLowerCase().includes(q));
      if (!matchesTopic && !matchesLesson) return false;
    }
    return true;
  });

  // Helper to render a topic card with equal dimensions and unified color tone
  const renderTopicCard = (topic: Topic) => {
    const topicLessons = getLessonsByTopic(topic.id);
    const showLessons = activeTopicFilter !== 'all' || overviewMode === 'all_lessons';

    return (
      <TopicCard
        key={topic.id}
        topic={topic}
        lessons={topicLessons}
        showLessons={showLessons}
        onSelectTopic={(t) => {
          setActiveTopicFilter(t.id);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        colorVariant="sky"
        completedLessonIds={userStats.completedLessons}
        lessonQuizStats={userStats.lessonQuizStats || {}}
        customLinks={customLinks}
        onOpenLessonDetail={(lesson) => setSelectedLessonForDetail(lesson)}
        onOpenLessonQuiz={(lesson) => handleStartLessonQuiz(lesson)}
        onCheckAutoLearn={handleCheckAutoLearn}
        onOpenFlashcard={(t) => setSelectedTopicForFlashcard(t)}
        onOpenTopicExam={(t) => handleStartTopicExam(t)}
        onOpenGame={(lesson) => {
          setSelectedGameLesson(lesson);
          setCurrentTab('game');
        }}
        onEditCustomLink={(lesson) => setSelectedLessonForCustomLink(lesson)}
      />
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 bg-geometric-grid flex flex-col font-sans">
      
      {/* Header bar matching user's reference mockup */}
      <Header
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        userStats={userStats}
        onToggleSound={handleToggleSound}
        selectedGrade={selectedGrade}
        onSelectGrade={(g) => {
          setSelectedGrade(g);
          sound.playClick();
        }}
      />

      {/* Main Content Area - Rút gọn khoảng cách và đệm để nội dung chính nổi bật */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-3 sm:px-5 lg:px-8 py-3 sm:py-4 space-y-4">
        
        {/* TAB 1: Topics & Lessons Grid */}
        {currentTab === 'topics' && (
          <div className="space-y-4">
            
            {/* Title & Subtitle Section - Gọn gàng, tiết kiệm chiều cao */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 bg-white p-3.5 sm:p-4 rounded-2xl border border-sky-100 shadow-xs">
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded-lg text-xs font-black bg-sky-100 text-sky-800 border border-sky-200">
                    CHƯƠNG TRÌNH GDPT 2018
                  </span>
                  <span className="px-2.5 py-0.5 rounded-lg text-xs font-black bg-emerald-100 text-emerald-800 border border-emerald-200">
                    TỰ LUYỆN ONLINE
                  </span>
                </div>

                <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">
                  Hệ Thống Bài Học Môn Tin Học 11
                </h1>
                
                <p className="text-xs sm:text-sm text-slate-600 font-medium">
                  Chuẩn hóa SGK: Khởi động, Khám phá, Hộp kiến thức, Thực hành, Luyện tập, Vận dụng & Tự luyện Online từng bài.
                </p>
              </div>

              {/* Direct Link to KenhHocTap Practice */}
              <a
                href="https://kenhhoctap.edu.vn/bai-tap/trac-nghiem-tin-hoc-ung-dung-11-ket-noi-bai-1-he-dieu-hanh-277"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs sm:text-sm font-black shadow-xs hover:shadow-md transition-all shrink-0 cursor-pointer"
                title="Mở Tự luyện Online Bài 1 trên kenhhoctap.edu.vn"
              >
                <ExternalLink className="w-4 h-4 text-emerald-200" />
                <span>Tự luyện Online</span>
              </a>
            </div>

            {/* Topic Filter & Search Bar - Compact design */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-2.5 bg-white p-2.5 sm:p-3 rounded-2xl border border-sky-100 shadow-xs">
              
              {/* Search box */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchTopicQuery}
                  onChange={(e) => setSearchTopicQuery(e.target.value)}
                  placeholder="Tìm kiếm bài học: Hệ điều hành, Logic, CPU, RAM, USB, An toàn mạng..."
                  className="w-full pl-10 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-hidden bg-slate-50/50 text-slate-800 font-medium placeholder:text-slate-400"
                />
              </div>

              {/* Topic Pills Filter */}
              <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-0.5 md:pb-0 shrink-0">
                {/* 1. Nút Hệ thống bài học: chứa tên các chủ đề của chương trình */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => {
                      sound.playClick();
                      if (activeTopicFilter === 'all') {
                        setIsTopicsDropdownOpen((prev) => !prev);
                      } else {
                        setActiveTopicFilter('all');
                        setIsTopicsDropdownOpen(false);
                      }
                    }}
                    className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-black whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                      activeTopicFilter === 'all'
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                    }`}
                    title="Bấm để xem danh sách tên các chủ đề của chương trình"
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>Hệ thống bài học</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isTopicsDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Menu chứa tên các chủ đề của chương trình */}
                  {isTopicsDropdownOpen && (
                    <>
                      <div 
                        className="fixed inset-0 z-40" 
                        onClick={() => setIsTopicsDropdownOpen(false)} 
                      />
                      <div className="absolute left-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-xl border-2 border-slate-200 p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                        <div className="px-3 py-2 border-b border-slate-100 flex items-center justify-between">
                          <span className="text-[11px] font-black text-slate-500 uppercase tracking-wider">
                            CÁC CHỦ ĐỀ CỦA CHƯƠNG TRÌNH:
                          </span>
                          <span className="text-[10px] font-black text-sky-700 bg-sky-100 px-2 py-0.5 rounded-md">
                            7 Chủ đề
                          </span>
                        </div>

                        <div className="py-1 max-h-80 overflow-y-auto space-y-1">
                          {TOPICS.map((topic) => (
                            <button
                              key={topic.id}
                              type="button"
                              onClick={() => {
                                sound.playClick();
                                setActiveTopicFilter(topic.id);
                                setIsTopicsDropdownOpen(false);
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                              }}
                              className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-colors flex items-start gap-2.5 cursor-pointer ${
                                activeTopicFilter === topic.id
                                  ? 'bg-sky-50 text-sky-900 font-bold'
                                  : 'hover:bg-slate-50 text-slate-700'
                              }`}
                            >
                              <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded-md shrink-0 mt-0.5">
                                {topic.code}
                              </span>
                              <div className="flex-1 min-w-0">
                                <div className="font-extrabold text-slate-900 line-clamp-1">
                                  {topic.title}
                                </div>
                                <div className="text-[11px] text-slate-400 font-medium">
                                  {topic.lessonIds.length} bài học
                                </div>
                              </div>
                            </button>
                          ))}
                        </div>

                        <div className="pt-2 border-t border-slate-100">
                          <button
                            type="button"
                            onClick={() => {
                              sound.playClick();
                              setActiveTopicFilter('all');
                              setIsTopicsDropdownOpen(false);
                            }}
                            className="w-full text-center py-2 text-xs font-bold text-sky-700 hover:bg-sky-50 rounded-xl transition-colors cursor-pointer"
                          >
                            Xem toàn bộ các chủ đề trên trang chính
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* 2. Các nút Chủ đề 1 - 7: không ghi số lượng bài */}
                {TOPICS.map((topic) => (
                  <button
                    key={topic.id}
                    type="button"
                    onClick={() => {
                      sound.playClick();
                      setActiveTopicFilter(topic.id);
                      setIsTopicsDropdownOpen(false);
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                      activeTopicFilter === topic.id
                        ? 'bg-sky-600 text-white shadow-xs font-black'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                    }`}
                  >
                    Chủ đề {topic.id}
                  </button>
                ))}
              </div>

            </div>

            {/* Header cho chế độ Hệ thống bài học: Chỉ hiển thị tên các chủ đề của chương trình */}
            {activeTopicFilter === 'all' && (
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 bg-white/95 rounded-2xl border border-sky-100 shadow-2xs">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-black uppercase tracking-wider text-sky-800 bg-sky-100 px-2.5 py-0.5 rounded-lg border border-sky-200">
                      HỆ THỐNG BÀI HỌC
                    </span>
                    <span className="text-xs text-slate-500 font-bold">
                      7 chủ đề chuẩn chương trình Tin học 11
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 mt-1">
                    Danh mục tên các chủ đề của chương trình
                  </h3>
                </div>

                <div className="flex items-center gap-1.5 bg-slate-100/90 p-1 rounded-xl self-stretch sm:self-auto border border-slate-200/80">
                  <button
                    type="button"
                    onClick={() => { sound.playClick(); setOverviewMode('topics_only'); }}
                    className={`flex-1 sm:flex-none px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      overviewMode === 'topics_only'
                        ? 'bg-white text-slate-900 shadow-xs font-black'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Chỉ tên các chủ đề
                  </button>
                  <button
                    type="button"
                    onClick={() => { sound.playClick(); setOverviewMode('all_lessons'); }}
                    className={`flex-1 sm:flex-none px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      overviewMode === 'all_lessons'
                        ? 'bg-white text-slate-900 shadow-xs font-black'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Chi tiết tất cả bài học
                  </button>
                </div>
              </div>
            )}

            {/* Topic Cards Layout: Độ dài rộng khung nhóm chủ đề bằng nhau, cùng tông màu */}
            {visibleTopics.length === 1 ? (
              <div className="max-w-3xl mx-auto w-full">
                {visibleTopics.map((t) => renderTopicCard(t))}
              </div>
            ) : overviewMode === 'topics_only' ? (
              /* Chế độ chỉ tên các chủ đề: lưới chuẩn với kích thước chiều dài & chiều rộng các khung hoàn toàn bằng nhau */
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 items-stretch">
                {visibleTopics.map((topic) => renderTopicCard(topic))}
              </div>
            ) : (
              /* Chế độ chi tiết tất cả bài học: lưới 2 cột đều nhau, cùng chiều rộng và chiều cao hàng */
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
                {visibleTopics.map((topic) => renderTopicCard(topic))}
              </div>
            )}

          </div>
        )}

        {/* TAB 2: Question Bank */}
        {currentTab === 'question_bank' && (
          <QuestionBankView 
            onStartQuizWithQuestions={handleStartCustomQuiz} 
            onBackToMain={() => setCurrentTab('topics')}
          />
        )}

        {/* TAB 3: Exam and Evaluation Mode */}
        {currentTab === 'exam' && (
          <ExamModeView 
            onSaveExamResult={handleSaveExamResult} 
            onBackToMain={() => setCurrentTab('topics')}
          />
        )}

        {/* TAB 4: History & Progress */}
        {currentTab === 'history' && (
          <ExamHistoryView 
            history={userStats.examHistory} 
            onStartNewExam={() => setCurrentTab('exam')} 
            onBackToMain={() => setCurrentTab('topics')}
          />
        )}

        {/* TAB 5: Teacher Projector Mode (Máy chiếu GV) */}
        {currentTab === 'projector' && (
          <TeacherProjectorMode 
            onBackToMain={() => setCurrentTab('topics')}
          />
        )}

        {/* TAB 6: Learning Games (Trò chơi học tập) */}
        {currentTab === 'game' && (
          <LearningGamesView 
            onAddXp={handleAddGameXp} 
            selectedLesson={selectedGameLesson}
            onBackToMain={() => setCurrentTab('topics')}
          />
        )}

      </main>

      {/* Footer */}
      <footer className="mt-auto bg-white border-t border-sky-100/80 py-5 text-center text-xs text-slate-500 font-medium">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-sky-700">Wayground TinHọc</span>
            <span>• GDPT 2018 (Tin học 11 - Định hướng Tin học ứng dụng)</span>
          </div>
          <div className="text-slate-400">
            31 bài học • 10 câu trắc nghiệm phân hóa/bài • Trò chơi tương tác • Máy chiếu GV
          </div>
        </div>
      </footer>

      {/* Modals */}
      {selectedLessonForDetail && (
        <LessonDetailModal
          lesson={selectedLessonForDetail}
          isCompleted={userStats.completedLessons.includes(selectedLessonForDetail.id)}
          quizStat={userStats.lessonQuizStats?.[selectedLessonForDetail.id]}
          customLink={customLinks[selectedLessonForDetail.id]}
          onClose={() => setSelectedLessonForDetail(null)}
          onMarkCompleted={handleMarkLessonCompleted}
          onStartQuiz={handleStartLessonQuiz}
          onEditLink={(l) => {
            setSelectedLessonForCustomLink(l);
          }}
          onPlayGame={(l) => {
            setSelectedGameLesson(l);
            setCurrentTab('game');
          }}
        />
      )}

      {activeQuizData && (
        <QuizModal
          title={activeQuizData.title}
          subtitle={activeQuizData.subtitle}
          questions={activeQuizData.questions}
          lessonId={activeQuizData.lessonId}
          onClose={() => setActiveQuizData(null)}
          onCompleteQuiz={handleCompleteQuiz}
        />
      )}

      {selectedLessonForAutoLearnCheck && (
        <AutoLearnCheckModal
          lesson={selectedLessonForAutoLearnCheck}
          isCompleted={userStats.completedLessons.includes(selectedLessonForAutoLearnCheck.id)}
          quizStat={userStats.lessonQuizStats?.[selectedLessonForAutoLearnCheck.id]}
          onClose={() => setSelectedLessonForAutoLearnCheck(null)}
          onStartQuiz={handleStartLessonQuiz}
          onConfirmAutoMark={handleMarkLessonCompleted}
          onUnmarkCompleted={handleUnmarkLessonCompleted}
        />
      )}

      {selectedLessonForCustomLink && (
        <CustomLinkModal
          lesson={selectedLessonForCustomLink}
          currentCustomLink={customLinks[selectedLessonForCustomLink.id]}
          onClose={() => setSelectedLessonForCustomLink(null)}
          onSave={handleSaveCustomLink}
          onReset={handleResetCustomLink}
        />
      )}

      {selectedTopicForFlashcard && (
        <FlashcardModal
          topic={selectedTopicForFlashcard}
          lessons={getLessonsByTopic(selectedTopicForFlashcard.id)}
          onClose={() => setSelectedTopicForFlashcard(null)}
        />
      )}

    </div>
  );
}
