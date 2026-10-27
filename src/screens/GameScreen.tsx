import { ScrollView, StyleSheet, View } from 'react-native';

import {
  AnswerButton,
  AppButton,
  AppText,
  ProgressIndicator,
  QuestionCard,
  ResultsScreen,
  ScoreDisplay,
  Screen,
} from '@/components';
import { colors, radius, spacing } from '@/constants/theme';
import { useTriviaGame } from '@/hooks/useTriviaGame';
import type { AnswerState } from '@/types';

const BADGES = ['أ', 'ب', 'ج', 'د'];

export default function GameScreen() {
  const game = useTriviaGame();

  if (game.isFinished) {
    return (
      <Screen>
        <ResultsScreen score={game.score} total={game.total} onPlayAgain={game.restart} />
      </Screen>
    );
  }

  function getAnswerState(index: number): AnswerState {
    if (!game.isAnswered) return 'idle';
    if (index === game.question.correctIndex) return 'correct';
    if (index === game.selectedIndex) return 'wrong';
    return 'dimmed';
  }

  return (
    <Screen style={styles.container}>
      <View style={styles.header}>
        <ProgressIndicator current={game.currentNumber} total={game.total} />
        <ScoreDisplay score={game.score} total={game.total} />
      </View>

      <ScrollView contentContainerStyle={styles.body} showsVerticalScrollIndicator={false}>
        <QuestionCard text={game.question.text} />

        <View style={styles.answers}>
          {game.question.options.map((option, index) => (
            <AnswerButton
              key={option}
              label={option}
              badge={BADGES[index]}
              state={getAnswerState(index)}
              disabled={game.isAnswered}
              onPress={() => game.selectAnswer(index)}
            />
          ))}
        </View>

        {game.isAnswered && (
          <View style={[styles.feedback, game.isCorrect ? styles.feedbackOk : styles.feedbackBad]}>
            <AppText style={styles.feedbackText}>
              {game.isCorrect
                ? '🎉 إجابة صحيحة! أحسنت'
                : `😕 إجابة خاطئة. الإجابة الصحيحة: ${game.question.options[game.question.correctIndex]}`}
            </AppText>
          </View>
        )}
      </ScrollView>

      <AppButton
        title={game.isLastQuestion ? 'عرض النتيجة' : 'السؤال التالي'}
        onPress={game.next}
        disabled={!game.isAnswered}
        style={styles.next}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.md,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  body: {
    gap: spacing.lg,
    paddingBottom: spacing.md,
  },
  answers: {
    gap: spacing.md,
  },
  feedback: {
    borderRadius: radius.lg,
    borderWidth: 2,
    padding: spacing.md,
  },
  feedbackOk: {
    backgroundColor: colors.successSoft,
    borderColor: colors.success,
  },
  feedbackBad: {
    backgroundColor: colors.errorSoft,
    borderColor: colors.error,
  },
  feedbackText: {
    fontWeight: '700',
  },
  next: {
    minHeight: 64,
    justifyContent: 'center',
    borderRadius: radius.lg,
  },
});
