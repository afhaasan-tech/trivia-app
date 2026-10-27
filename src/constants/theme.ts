// Design tokens: change the look of the whole app from one place.
import type { TextStyle } from 'react-native';

export const colors = {
  primary: '#4F46E5',
  primaryPressed: '#4338CA',
  primarySoft: '#E0E7FF',
  accent: '#F59E0B',
  background: '#F5F3FF',
  surface: '#FFFFFF',
  text: '#0F172A',
  textMuted: '#64748B',
  border: '#E2E8F0',
  success: '#16A34A',
  successSoft: '#DCFCE7',
  error: '#DC2626',
  errorSoft: '#FEE2E2',
  white: '#FFFFFF',
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
} as const;

export const radius = {
  sm: 8,
  md: 12,
  lg: 20,
  xl: 28,
} as const;

export const fontSizes = {
  caption: 14,
  body: 18,
  subtitle: 22,
  title: 30,
} as const;

// The app is Arabic-first: every text block reads right-to-left.
export const rtlText: TextStyle = {
  textAlign: 'right',
  writingDirection: 'rtl',
};

export const theme = { colors, spacing, radius, fontSizes } as const;
