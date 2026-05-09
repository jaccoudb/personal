import type { Course, CourseIndex, CourseMaterial, CourseMaterialType, LocalizedText } from '../types/course-materials';
import { supportedLngs } from '../i18n';

const materialTypes: CourseMaterialType[] = ['pdf', 'zip', 'ppt', 'pptx', 'doc', 'docx', 'link'];

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isLocalizedText(value: unknown): value is LocalizedText {
  if (!isRecord(value)) return false;

  return supportedLngs.every((language) => typeof value[language] === 'string');
}

function isCourseMaterial(value: unknown): value is CourseMaterial {
  if (!isRecord(value)) return false;

  return (
    typeof value.title === 'string' &&
    typeof value.file === 'string' &&
    typeof value.type === 'string' &&
    materialTypes.includes(value.type as CourseMaterialType)
  );
}

function isCourse(value: unknown): value is Course {
  if (!isRecord(value)) return false;

  return (
    typeof value.id === 'string' &&
    isLocalizedText(value.title) &&
    isLocalizedText(value.description) &&
    Array.isArray(value.materials) &&
    value.materials.every(isCourseMaterial)
  );
}

function isCourseIndex(value: unknown): value is CourseIndex {
  return isRecord(value) && Array.isArray(value.courses) && value.courses.every(isCourse);
}

export async function loadCourseMaterials(): Promise<CourseIndex> {
  const response = await fetch(`${import.meta.env.BASE_URL}materials/index.json`);

  if (!response.ok) {
    throw new Error(`Unable to load course materials: ${response.status}`);
  }

  const data: unknown = await response.json();

  if (!isCourseIndex(data)) {
    throw new Error('Invalid course materials index format.');
  }

  return data;
}

export function getMaterialUrl(file: string): string {
  return `${import.meta.env.BASE_URL}materials/${file}`;
}
