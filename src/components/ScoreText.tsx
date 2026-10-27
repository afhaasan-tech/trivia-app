import { StyleSheet } from 'react-native';

import { AppText, type AppTextProps } from './AppText';

type ScoreTextProps = Omit<AppTextProps, 'children'> & {
  score: number;
  total: number;
};

// "score / total" must always read left-to-right, even inside the Arabic RTL layout.
// Otherwise the RTL bidi algorithm reorders the numbers and shows "5 / 0" instead of "0 / 5".
export function ScoreText({ score, total, style, ...rest }: ScoreTextProps) {
  // ⁦ = LTR isolate, ⁩ = pop isolate: keeps the fraction in order regardless of context.
  return (
    <AppText style={[styles.ltr, style]} {...rest}>
      {`⁦${score} / ${total}⁩`}
    </AppText>
  );
}

const styles = StyleSheet.create({
  ltr: {
    writingDirection: 'ltr',
    textAlign: 'center',
  },
});
