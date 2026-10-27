import { StyleSheet, Text, type TextProps } from 'react-native';

import { colors, fontSizes, rtlText } from '@/constants/theme';

type Variant = 'title' | 'subtitle' | 'body' | 'caption';

export type AppTextProps = TextProps & {
  variant?: Variant;
  muted?: boolean;
};

export function AppText({ variant = 'body', muted = false, style, ...rest }: AppTextProps) {
  return <Text style={[styles.base, styles[variant], muted && styles.muted, style]} {...rest} />;
}

const styles = StyleSheet.create({
  base: {
    color: colors.text,
    ...rtlText,
  },
  title: {
    fontSize: fontSizes.title,
    fontWeight: '800',
  },
  subtitle: {
    fontSize: fontSizes.subtitle,
    fontWeight: '700',
  },
  body: {
    fontSize: fontSizes.body,
  },
  caption: {
    fontSize: fontSizes.caption,
  },
  muted: {
    color: colors.textMuted,
  },
});
