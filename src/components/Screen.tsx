import type { ReactNode } from 'react';
import { StyleSheet, View, type ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors, spacing } from '@/constants/theme';

type ScreenProps = {
  children: ReactNode;
  style?: ViewStyle;
};

// Wrap every screen in this so safe areas (notch, home bar), padding and RTL direction stay consistent.
export function Screen({ children, style }: ScreenProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.content, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
    direction: 'rtl',
  },
  content: {
    flex: 1,
    padding: spacing.lg,
  },
});
