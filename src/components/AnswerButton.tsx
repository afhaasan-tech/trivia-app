import { Pressable, StyleSheet, View } from 'react-native';

import { colors, radius, spacing } from '@/constants/theme';
import type { AnswerState } from '@/types';
import { AppText } from './AppText';

type AnswerButtonProps = {
  label: string;
  badge: string;
  state: AnswerState;
  disabled?: boolean;
  onPress: () => void;
};

const stateStyles = {
  idle: { bg: colors.surface, border: colors.border, badgeBg: colors.primarySoft, badgeText: colors.primary },
  correct: { bg: colors.successSoft, border: colors.success, badgeBg: colors.success, badgeText: colors.white },
  wrong: { bg: colors.errorSoft, border: colors.error, badgeBg: colors.error, badgeText: colors.white },
  dimmed: { bg: colors.surface, border: colors.border, badgeBg: colors.border, badgeText: colors.textMuted },
} as const;

export function AnswerButton({ label, badge, state, disabled, onPress }: AnswerButtonProps) {
  const s = stateStyles[state];
  const icon = state === 'correct' ? '✓' : state === 'wrong' ? '✗' : badge;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        { backgroundColor: s.bg, borderColor: s.border },
        pressed && !disabled && styles.pressed,
        state === 'dimmed' && styles.dimmed,
      ]}
    >
      <View style={[styles.badge, { backgroundColor: s.badgeBg }]}>
        <AppText style={[styles.badgeText, { color: s.badgeText }]}>{icon}</AppText>
      </View>
      <AppText style={styles.label}>{label}</AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row', // follows the screen's RTL direction: badge sits on the right
    alignItems: 'center',
    gap: spacing.md,
    minHeight: 64,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: radius.lg,
    borderWidth: 2,
  },
  pressed: {
    transform: [{ scale: 0.98 }],
  },
  dimmed: {
    opacity: 0.6,
  },
  badge: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    fontWeight: '800',
    textAlign: 'center',
  },
  label: {
    flex: 1,
    fontWeight: '600',
  },
});
