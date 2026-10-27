import { StyleSheet, View } from 'react-native';

import { colors, radius, spacing } from '@/constants/theme';
import { AppText } from './AppText';
import { ScoreText } from './ScoreText';

type ScoreDisplayProps = {
  score: number;
  total: number;
};

export function ScoreDisplay({ score, total }: ScoreDisplayProps) {
  return (
    <View style={styles.pill} accessibilityLabel={`النتيجة ${score} من ${total}`}>
      <AppText style={styles.star}>⭐</AppText>
      <ScoreText score={score} total={total} style={styles.text} />
    </View>
  );
}

const styles = StyleSheet.create({
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderWidth: 2,
    borderColor: colors.accent,
  },
  star: {
    textAlign: 'center',
  },
  text: {
    fontWeight: '800',
    color: colors.text,
  },
});
