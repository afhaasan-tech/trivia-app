# Trivia App

CODED Bootcamp project. An Arabic (RTL) General Knowledge trivia game built with **Expo SDK 58**, React Native 0.88, React 19.3 and TypeScript. It runs in Expo Go on iPhone.

## Features

- One game screen with exactly 5 General Knowledge questions, 4 answers each
- Arabic text with right-to-left layout; the numeric score always reads left-to-right (e.g. `0 / 5`)
- Visible score and a question progress indicator ("السؤال 2 من 5")
- Instant feedback: the correct answer turns green, a wrong choice turns red
- One answer per question; score only increases for correct answers
- "Next question" button, then a results screen with a friendly message
- "Play Again" resets score and progress
- iPhone safe-area support, large tap targets, one-handed layout
- Questions are stored locally (no API or AI questions yet)

## Project structure

```
trivia-app/
|-- App.tsx                  # Root component (SafeAreaProvider + GameScreen)
|-- index.ts                 # Entry point (registers App with Expo)
|-- app.json                 # Expo config (name, icons, plugins)
|-- assets/                  # Images and icons
`-- src/
    |-- components/          # Reusable UI (exported from index.ts)
    |   |-- AnswerButton.tsx
    |   |-- AppButton.tsx
    |   |-- AppText.tsx
    |   |-- ProgressIndicator.tsx
    |   |-- QuestionCard.tsx
    |   |-- ResultsScreen.tsx
    |   |-- ScoreDisplay.tsx
    |   |-- ScoreText.tsx    # LTR-isolated "score / total"
    |   `-- Screen.tsx       # Safe area + RTL direction
    |-- screens/
    |   `-- GameScreen.tsx   # The interactive game screen
    |-- hooks/
    |   `-- useTriviaGame.ts # All game rules and state
    |-- services/
    |   `-- questionService.ts # Single place that supplies questions
    |-- data/
    |   `-- questions.ts     # Local Arabic questions
    |-- constants/
    |   `-- theme.ts         # Colors, spacing, radius, font sizes
    |-- types/
    |   `-- index.ts         # Question, AnswerState
    `-- utils/               # Small helpers (empty for now)
```

Imports use the `@/` alias for `src/`:

```ts
import { AppButton, Screen } from '@/components';
import { colors } from '@/constants/theme';
```

## Run it

```bash
npm install
npx expo login
npm start
```

Then scan the QR code with the iPhone Camera app. It opens in Expo Go.
Expo Go on iPhone only supports the latest SDK, which is why this project uses SDK 58.

If the phone can't connect (different Wi-Fi or a school network), use `npm run start:tunnel`.

On Windows PowerShell, if `npx` is blocked by the execution policy, use `npx.cmd` and `npm.cmd` instead.
Keep the project outside OneDrive (for example `C:\dev\trivia-app`); syncing `node_modules` can crash Metro.

## Useful scripts

| Command                | What it does                                    |
| ---------------------- | ----------------------------------------------- |
| `npm start`            | Start the dev server                            |
| `npm run start:tunnel` | Start the dev server through a tunnel           |
| `npm run typecheck`    | Check TypeScript types                          |
| `npm run doctor`       | Check the project for Expo compatibility issues |

## Next steps

- Load questions from Open Trivia DB through `src/services/questionService.ts`
- Add AI-generated questions
