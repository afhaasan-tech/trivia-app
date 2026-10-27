import { Pressable, StyleSheet, type PressableProps } from 'react-native';

import { colors, radius, spacing } from '@/constants/theme';
import { AppText } from './AppText';

export type AppButtonProps = Omit<PressableProps, 'children'> & {
  title: string;
  variant?: 'primary' | 'outline';
};

export function AppButton({ title, variant = 'primary', disabled, style, ...rest }: AppButtonProps) {
  const isPrimary = variant === 'primary';

  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled}
      style={(state) => [
        styles.base,
        isPrimary ? styles.primary : styles.outline,
        state.pressed && (isPrimary ? styles.primaryPressed : styles.outlinePressed),
        disabled && styles.disabled,
        typeof style === 'function' ? style(state) : style,
      ]}
      {...rest}
    >
      <AppText style={[styles.label, { color: isPrimary ? colors.white : colors.primary }]}>
        {title}
      </AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.md,
    alignItems: 'center',
  },
  primary: {
    backgroundColor: colors.primary,
  },
  primaryPressed: {
    backgroundColor: colors.primaryPressed,
  },
  outline: {
    borderWidth: 2,
    borderColor: colors.primary,
    backgroundColor: 'transparent',
  },
  outlinePressed: {
    backgroundColor: colors.border,
  },
  disabled: {
    opacity: 0.5,
  },
  label: {
    fontWeight: '600',
  },
});
