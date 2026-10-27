import { StyleSheet, View } from 'react-native';

import { AppButton, AppText, Screen } from '@/components';
import { spacing } from '@/constants/theme';

// Placeholder screen that confirms the setup works. The game is built later.
export default function HomeScreen() {
  return (
    <Screen style={styles.container}>
      <View style={styles.header}>
        <AppText variant="title">Trivia App</AppText>
        <AppText muted>Setup complete. Ready to build.</AppText>
      </View>
      <AppButton title="Start (coming soon)" disabled />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    gap: spacing.xl,
  },
  header: {
    alignItems: 'center',
    gap: spacing.sm,
  },
});
