// Shared TypeScript types live here.

export type Question = {
  id: string;
  text: string;
  options: string[];
  // Index of the correct entry in `options`.
  correctIndex: number;
};

export type AnswerState = 'idle' | 'correct' | 'wrong' | 'dimmed';
