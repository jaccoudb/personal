import type { SupportedLanguage } from '../i18n';

export type LocalizedText = Record<SupportedLanguage, string>;

export type CourseMaterialType = 'pdf' | 'zip' | 'ppt' | 'pptx' | 'doc' | 'docx' | 'link';

export interface CourseMaterial {
  title: string;
  file: string;
  type: CourseMaterialType;
}

export interface Course {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  materials: CourseMaterial[];
}

export interface CourseIndex {
  courses: Course[];
}
