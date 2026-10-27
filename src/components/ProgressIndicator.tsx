import { StyleSheet, View } from 'react-native';

import { colors, spacing } from '@/constants/theme';
import { AppText } from './AppText';

type ProgressIndicatorProps = {
  current: number;
  total: number;
};

export function ProgressIndicator({ current, total }: ProgressIndicatorProps) {
  return (
    <View style={styles.container} accessibilityLabel={`السؤال ${current} من ${total}`}>
      <AppText style={styles.label}>
        السؤال {current} من {total}
      </AppText>
      <View style={styles.bars}>
        {Array.from({ length: total }, (_, i) => (
          <View key={i} style={[styles.bar, i < current && styles.barDone]} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: spacing.sm,
  },
  label: {
    fontWeight: '700',
    color: colors.primary,
  },
  bars: {
    flexDirection: 'row',
    gap: spacing.xs,
  },
  bar: {
    flex: 1,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.border,
  },
  barDone: {
    backgroundColor: colors.primary,
  },
});
