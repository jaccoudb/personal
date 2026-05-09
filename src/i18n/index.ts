import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import commonPtBr from './locales/pt-BR/common.json';
import homePtBr from './locales/pt-BR/home.json';
import researchPtBr from './locales/pt-BR/research.json';
import publicationsPtBr from './locales/pt-BR/publications.json';
import resumePtBr from './locales/pt-BR/resume.json';
import studentsPtBr from './locales/pt-BR/students.json';
import coursesPtBr from './locales/pt-BR/courses.json';
import courseMaterialsPtBr from './locales/pt-BR/course-materials.json';

import commonEn from './locales/en/common.json';
import homeEn from './locales/en/home.json';
import researchEn from './locales/en/research.json';
import publicationsEn from './locales/en/publications.json';
import resumeEn from './locales/en/resume.json';
import studentsEn from './locales/en/students.json';
import coursesEn from './locales/en/courses.json';
import courseMaterialsEn from './locales/en/course-materials.json';

import commonFr from './locales/fr/common.json';
import homeFr from './locales/fr/home.json';
import researchFr from './locales/fr/research.json';
import publicationsFr from './locales/fr/publications.json';
import resumeFr from './locales/fr/resume.json';
import studentsFr from './locales/fr/students.json';
import coursesFr from './locales/fr/courses.json';
import courseMaterialsFr from './locales/fr/course-materials.json';

export const supportedLngs = ['pt-BR', 'en', 'fr'] as const;
export type SupportedLanguage = (typeof supportedLngs)[number];

export const defaultNS = 'common';

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      'pt-BR': {
        common: commonPtBr,
        home: homePtBr,
        research: researchPtBr,
        publications: publicationsPtBr,
        resume: resumePtBr,
        students: studentsPtBr,
        courses: coursesPtBr,
        'course-materials': courseMaterialsPtBr,
      },
      en: {
        common: commonEn,
        home: homeEn,
        research: researchEn,
        publications: publicationsEn,
        resume: resumeEn,
        students: studentsEn,
        courses: coursesEn,
        'course-materials': courseMaterialsEn,
      },
      fr: {
        common: commonFr,
        home: homeFr,
        research: researchFr,
        publications: publicationsFr,
        resume: resumeFr,
        students: studentsFr,
        courses: coursesFr,
        'course-materials': courseMaterialsFr,
      },
    },
    fallbackLng: 'pt-BR',
    supportedLngs,
    defaultNS,
    ns: ['common', 'home', 'research', 'publications', 'resume', 'students', 'courses', 'course-materials'],
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
