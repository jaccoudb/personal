import 'react-i18next';
import common from './locales/pt-BR/common.json';
import home from './locales/pt-BR/home.json';
import research from './locales/pt-BR/research.json';
import publications from './locales/pt-BR/publications.json';
import resume from './locales/pt-BR/resume.json';
import students from './locales/pt-BR/students.json';
import courses from './locales/pt-BR/courses.json';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: {
      common: typeof common;
      home: typeof home;
      research: typeof research;
      publications: typeof publications;
      resume: typeof resume;
      students: typeof students;
      courses: typeof courses;
    };
  }
}
