import { Lesson } from '../types';
import { LESSONS_PART_1 } from './lessons_part1';
import { LESSONS_PART_2 } from './lessons_part2';
import { LESSONS_PART_3 } from './lessons_part3';
import { LESSONS_PART_4 } from './lessons_part4';

export const ALL_LESSONS: Lesson[] = [
  ...LESSONS_PART_1,
  ...LESSONS_PART_2,
  ...LESSONS_PART_3,
  ...LESSONS_PART_4,
];

export const getLessonById = (id: number): Lesson | undefined => {
  return ALL_LESSONS.find((lesson) => lesson.id === id);
};

export const getLessonsByTopic = (topicId: number): Lesson[] => {
  return ALL_LESSONS.filter((lesson) => lesson.topicId === topicId);
};
