# Trivia App

CODED Bootcamp project. Built with Expo SDK 57, React Native and TypeScript, and runs in Expo Go on iPhone.

## Project structure

```
trivia app/
├── App.tsx              # Root component (providers + first screen)
├── index.ts             # Entry point (registers App with Expo)
├── app.json             # Expo config (name, icons, platforms)
├── assets/              # Images, icons, fonts
└── src/
    ├── components/      # Reusable UI: AppButton, AppText, Screen (export from index.ts)
    ├── screens/         # One file per screen (HomeScreen, later QuizScreen, ResultScreen...)
    ├── constants/       # theme.ts: colors, spacing, font sizes
    ├── hooks/           # Custom React hooks (e.g. useQuiz)
    ├── services/        # API calls (e.g. fetching trivia questions)
    ├── types/           # Shared TypeScript types
    └── utils/           # Small helper functions (e.g. shuffle)
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
For SDK 57, you must be signed in to the **same Expo account** in the terminal (`npx expo login`) and in Expo Go (avatar icon on the Home tab).

If the phone can't connect (different Wi-Fi or school network), use `npm run start:tunnel`.

## Useful scripts

| Command             | What it does                                   |
| ------------------- | ---------------------------------------------- |
| `npm start`         | Start the dev server                           |
| `npm run typecheck` | Check TypeScript types                         |
| `npm run doctor`    | Check the project for Expo compatibility issues |
