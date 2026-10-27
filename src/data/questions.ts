import type { Question } from '@/types';

// Local General Knowledge questions. Replaced later by an API / AI source via services/questionService.
export const generalKnowledgeQuestions: Question[] = [
  {
    id: 'gk-1',
    text: 'ما هو أكبر كوكب في المجموعة الشمسية؟',
    options: ['الأرض', 'المشتري', 'المريخ', 'زحل'],
    correctIndex: 1,
  },
  {
    id: 'gk-2',
    text: 'كم عدد قارات العالم؟',
    options: ['5', '6', '7', '8'],
    correctIndex: 2,
  },
  {
    id: 'gk-3',
    text: 'ما هي عاصمة دولة الكويت؟',
    options: ['الجهراء', 'حولي', 'الأحمدي', 'مدينة الكويت'],
    correctIndex: 3,
  },
  {
    id: 'gk-4',
    text: 'ما هو أطول نهر في قارة أفريقيا؟',
    options: ['نهر النيل', 'نهر الكونغو', 'نهر النيجر', 'نهر الزامبيزي'],
    correctIndex: 0,
  },
  {
    id: 'gk-5',
    text: 'أي غاز يحتاجه الإنسان للتنفس؟',
    options: ['النيتروجين', 'الأكسجين', 'ثاني أكسيد الكربون', 'الهيدروجين'],
    correctIndex: 1,
  },
];
