import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Save, RotateCcw, Link2, Sparkles } from 'lucide-react';
import { Lesson, CustomAppLink } from '../types';
import { sound } from '../utils/audio';

interface CustomLinkModalProps {
  lesson: Lesson;
  currentCustomLink?: CustomAppLink;
  onClose: () => void;
  onSave: (link: CustomAppLink) => void;
  onReset: (lessonId: number) => void;
}

export const CustomLinkModal: React.FC<CustomLinkModalProps> = ({
  lesson,
  currentCustomLink,
  onClose,
  onSave,
  onReset,
}) => {
  const [name, setName] = useState(currentCustomLink?.customName || lesson.defaultApp.name);
  const [url, setUrl] = useState(currentCustomLink?.customUrl || lesson.defaultApp.url);
  const [note, setNote] = useState(currentCustomLink?.note || '');

  useEffect(() => {
    setName(currentCustomLink?.customName || lesson.defaultApp.name);
    setUrl(currentCustomLink?.customUrl || lesson.defaultApp.url);
    setNote(currentCustomLink?.note || '');
  }, [lesson, currentCustomLink]);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !url.trim()) return;

    let finalUrl = url.trim();
    if (!/^https?:\/\//i.test(finalUrl)) {
      finalUrl = 'https://' + finalUrl;
    }

    sound.playCorrect();
    onSave({
      lessonId: lesson.id,
      customName: name.trim(),
      customUrl: finalUrl,
      note: note.trim(),
    });
    onClose();
  };

  const handleResetToDefault = () => {
    sound.playClick();
    setName(lesson.defaultApp.name);
    setUrl(lesson.defaultApp.url);
    setNote('');
    onReset(lesson.id);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-sky-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-sky-600 to-blue-700 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-white/10">
              <Link2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-sky-200 uppercase">
                Tùy biến liên kết bài học
              </span>
              <h3 className="text-base font-bold text-white line-clamp-1">
                Bài {lesson.lessonNumber}: {lesson.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => { sound.playClick(); onClose(); }}
              className="px-3.5 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-bold flex items-center gap-1.5 transition-colors border border-white/20"
            >
              ← Quay lại màn hình chính
            </button>

            <button
              type="button"
              onClick={() => { sound.playClick(); onClose(); }}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-xs flex items-center justify-center text-white shrink-0">
              <Link2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-sky-200 uppercase tracking-wider block">
                Cài đặt liên kết ứng dụng ngoài
              </span>
              <h3 className="text-lg font-black text-white">
                Bài {lesson.lessonNumber}: {lesson.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSave} className="p-6 space-y-4 text-xs sm:text-sm">
          
          <div className="p-3.5 rounded-2xl bg-sky-50/70 border border-sky-200 text-xs text-slate-700">
            <span className="font-bold text-sky-800">💡 Gợi ý sử dụng: </span>
            Thầy cô hoặc học sinh có thể gắn link ứng dụng học tập, bài tập Azota, Google Forms, Padlet, YouTube bài giảng hoặc website thực hành của nhà trường.
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Tên hiển thị ứng dụng / Nút liên kết:
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="VD: Trình giả lập HeidiSQL, Google Drive, Azota kiểm tra..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-hidden text-slate-800 font-medium"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Địa chỉ URL liên kết (Web Link):
            </label>
            <input
              type="text"
              required
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-hidden text-slate-800 font-mono text-xs"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Ghi chú / Hướng dẫn thực hành cho học sinh (tùy chọn):
            </label>
            <textarea
              rows={2}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="VD: Các em nhấp vào làm bài tập nhóm nộp trước 22h tối nay..."
              className="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-hidden text-slate-800 text-xs"
            />
          </div>

          {/* Quick preset suggestions */}
          <div>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
              Mẫu liên kết nhanh phổ biến:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {[
                { name: 'Google Drive', url: 'https://drive.google.com/' },
                { name: 'Photopea (GIMP Online)', url: 'https://www.photopea.com/' },
                { name: 'SQL Online Compiler', url: 'https://onecompiler.com/mysql' },
                { name: 'Canva Thiết kế', url: 'https://www.canva.com/' },
                { name: 'Quizizz Luyện tập', url: 'https://quizizz.com/' },
              ].map((preset, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    setName(preset.name);
                    setUrl(preset.url);
                  }}
                  className="px-2.5 py-1 text-[11px] rounded-lg bg-slate-100 hover:bg-sky-50 hover:text-sky-700 border border-slate-200 transition-colors text-slate-600 font-medium"
                >
                  + {preset.name}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleResetToDefault}
              className="px-3 py-2 rounded-xl text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 flex items-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Khôi phục mặc định
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => { sound.playClick(); onClose(); }}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors"
              >
                Hủy
              </button>

              <button
                type="submit"
                className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 shadow-sm flex items-center gap-1.5 transition-colors"
              >
                <Save className="w-3.5 h-3.5" />
                Lưu liên kết
              </button>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
};
