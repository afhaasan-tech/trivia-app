import { generalKnowledgeQuestions } from '@/data/questions';
import type { Question } from '@/types';

export const QUESTIONS_PER_GAME = 5;

// Single entry point for questions. Swap the body for an API or AI source later;
// callers (the game hook) won't need to change.
export function getQuestions(count: number = QUESTIONS_PER_GAME): Question[] {
  return generalKnowledgeQuestions.slice(0, count);
}
