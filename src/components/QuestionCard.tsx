import { StyleSheet, View } from 'react-native';

import { colors, radius, spacing } from '@/constants/theme';
import { AppText } from './AppText';

type QuestionCardProps = {
  text: string;
  category?: string;
};

export function QuestionCard({ text, category = 'معلومات عامة' }: QuestionCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.chip}>
        <AppText variant="caption" style={styles.chipText}>
          {category}
        </AppText>
      </View>
      <AppText variant="subtitle" style={styles.question}>
        {text}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.primary,
    borderRadius: radius.xl,
    padding: spacing.lg,
    gap: spacing.md,
    shadowColor: colors.primary,
    shadowOpacity: 0.3,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
  },
  chip: {
    alignSelf: 'flex-start', // start = right edge in RTL
    backgroundColor: colors.accent,
    borderRadius: radius.lg,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
  },
  chipText: {
    color: colors.text,
    fontWeight: '700',
  },
  question: {
    color: colors.white,
    lineHeight: 34,
  },
});
