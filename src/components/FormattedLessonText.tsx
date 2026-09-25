import React from 'react';
import { splitContentIntoIdeas } from '../utils/textFormatter';

interface FormattedLessonTextProps {
  text?: string | null;
  className?: string;
  itemClassName?: string;
  spacing?: 'tight' | 'normal' | 'loose';
  highlightBullets?: boolean;
}

/**
 * Renders lesson content with automatic line breaks between ideas:
 * - Line breaks after semicolons (;)
 * - Line breaks after periods (.)
 * - Indented styling for list items (1), a), -, •)
 */
export const FormattedLessonText: React.FC<FormattedLessonTextProps> = ({
  text,
  className = '',
  itemClassName = '',
  spacing = 'normal',
  highlightBullets = true,
}) => {
  if (!text) return null;

  const lines = splitContentIntoIdeas(text);

  if (lines.length <= 1) {
    return <span className={className}>{text}</span>;
  }

  const spaceClass =
    spacing === 'tight'
      ? 'space-y-1.5'
      : spacing === 'loose'
      ? 'space-y-3.5'
      : 'space-y-2';

  return (
    <div className={`${spaceClass} ${className}`}>
      {lines.map((line, idx) => {
        const isListItem = /^([0-9]+[\)\.]|[a-zA-Z][\)\.]|[\-\–\—\•])\s+/.test(line);

        return (
          <p
            key={idx}
            className={`leading-relaxed ${itemClassName} ${
              isListItem && highlightBullets
                ? 'pl-2.5 sm:pl-3.5 border-l-2 border-sky-400/70 bg-sky-50/40 rounded-r-lg py-0.5'
                : ''
            }`}
          >
            {line}
          </p>
        );
      })}
    </div>
  );
};
