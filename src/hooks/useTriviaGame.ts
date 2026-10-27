import { useMemo, useState } from 'react';

import { getQuestions } from '@/services/questionService';

// All game rules live here so screens only render state.
export function useTriviaGame() {
  const questions = useMemo(() => getQuestions(), []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const question = questions[currentIndex];
  const isAnswered = selectedIndex !== null;
  const isCorrect = isAnswered && selectedIndex === question.correctIndex;
  const isLastQuestion = currentIndex === questions.length - 1;

  function selectAnswer(index: number) {
    if (isAnswered) return; // one answer per question
    setSelectedIndex(index);
    if (index === question.correctIndex) setScore((s) => s + 1);
  }

  function next() {
    if (!isAnswered) return;
    if (isLastQuestion) {
      setIsFinished(true);
      return;
    }
    setCurrentIndex((i) => i + 1);
    setSelectedIndex(null);
  }

  function restart() {
    setCurrentIndex(0);
    setSelectedIndex(null);
    setScore(0);
    setIsFinished(false);
  }

  return {
    question,
    total: questions.length,
    currentNumber: currentIndex + 1,
    selectedIndex,
    score,
    isAnswered,
    isCorrect,
    isLastQuestion,
    isFinished,
    selectAnswer,
    next,
    restart,
  };
}
