import { StyleSheet, View } from 'react-native';

import { colors, radius, spacing } from '@/constants/theme';
import { AppButton } from './AppButton';
import { AppText } from './AppText';
import { ScoreText } from './ScoreText';

type ResultsScreenProps = {
  score: number;
  total: number;
  onPlayAgain: () => void;
};

function getResultMessage(score: number, total: number) {
  const ratio = score / total;
  if (ratio === 1) return { emoji: '🏆', text: 'ممتاز! أجبت على جميع الأسئلة بشكل صحيح' };
  if (ratio >= 0.6) return { emoji: '👏', text: 'عمل رائع! أنت تعرف الكثير' };
  if (ratio > 0) return { emoji: '💪', text: 'محاولة جيدة! جرّب مرة أخرى لتحسين نتيجتك' };
  return { emoji: '🌱', text: 'لا بأس، التعلّم رحلة! حاول مرة أخرى' };
}

export function ResultsScreen({ score, total, onPlayAgain }: ResultsScreenProps) {
  const { emoji, text } = getResultMessage(score, total);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <AppText style={styles.emoji}>{emoji}</AppText>
        <AppText variant="subtitle" style={styles.centered}>
          انتهت اللعبة!
        </AppText>
        <View style={styles.scoreCircle}>
          <ScoreText score={score} total={total} style={styles.scoreText} />
        </View>
        <AppText style={styles.centered}>{text}</AppText>
      </View>
      <AppButton title="العب مرة أخرى" onPress={onPlayAgain} style={styles.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: spacing.lg,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    padding: spacing.xl,
    alignItems: 'center',
    gap: spacing.md,
    shadowColor: colors.primary,
    shadowOpacity: 0.15,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 6,
  },
  emoji: {
    fontSize: 72,
    lineHeight: 88,
    textAlign: 'center',
  },
  centered: {
    textAlign: 'center',
  },
  scoreCircle: {
    minWidth: 140,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.xl,
    backgroundColor: colors.primarySoft,
    alignItems: 'center',
  },
  scoreText: {
    fontSize: 44,
    lineHeight: 54,
    fontWeight: '800',
    color: colors.primary,
    textAlign: 'center',
  },
  button: {
    minHeight: 64,
    justifyContent: 'center',
    borderRadius: radius.lg,
  },
});
