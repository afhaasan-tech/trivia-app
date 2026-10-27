// Design tokens: change the look of the whole app from one place.

export const colors = {
  primary: '#4F46E5',
  primaryPressed: '#4338CA',
  background: '#F8FAFC',
  surface: '#FFFFFF',
  text: '#0F172A',
  textMuted: '#64748B',
  border: '#E2E8F0',
  success: '#16A34A',
  error: '#DC2626',
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
} as const;

export const fontSizes = {
  caption: 13,
  body: 16,
  subtitle: 20,
  title: 28,
} as const;

export const theme = { colors, spacing, radius, fontSizes } as const;
