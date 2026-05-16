import * as React from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import MaterialCard from '../../components/course-materials/MaterialCard';
import { loadCourseMaterials } from '../../services/courseMaterialsService';
import { courses as coursesData } from '../../data/coursesData';
import type { CourseIndex, LocalizedText, Course as MaterialCourse } from '../../types/course-materials';
import type { SupportedLanguage } from '../../i18n';

function normalizeLanguage(language: string): SupportedLanguage {
  if (language.startsWith('en')) return 'en';
  if (language.startsWith('fr')) return 'fr';
  return 'pt-BR';
}

function getLocalizedText(text: LocalizedText, language: SupportedLanguage): string {
  return text[language] ?? text['pt-BR'];
}

export default function CourseMaterialsPage() {
  const { slug } = useParams<{ slug?: string }>();
  const { t, i18n } = useTranslation(['course-materials', 'common']);
  const [courseIndex, setCourseIndex] = React.useState<CourseIndex | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const currentLanguage = normalizeLanguage(i18n.resolvedLanguage ?? i18n.language);

  React.useEffect(() => {
    let active = true;

    async function loadMaterials() {
      try {
        setLoading(true);
        setError(null);
        const materials = await loadCourseMaterials();

        if (active) {
          setCourseIndex(materials);
        }
      } catch (err) {
        if (active) {
          setError(err instanceof Error ? err.message : t('errors.unknown', { ns: 'course-materials' }));
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    void loadMaterials();

    return () => {
      active = false;
    };
  }, [t]);

  const filteredCourses: MaterialCourse[] = React.useMemo(() => {
    if (!courseIndex) return [];
    if (!slug) return courseIndex.courses;
    const courseEntry = coursesData.find((c) => c.slug === slug);
    if (!courseEntry || !courseEntry.materialsId) return [];
    return courseIndex.courses.filter((c) => c.id === courseEntry.materialsId);
  }, [slug, courseIndex]);

  const courseName = React.useMemo(() => {
    if (!slug) return null;
    const entry = coursesData.find((c) => c.slug === slug);
    return entry?.name ?? null;
  }, [slug]);

  return (
    <Box
      id="course-materials"
      sx={{
        minHeight: '100vh',
        pt: { xs: 10, sm: 14 },
        pb: { xs: 8, sm: 12 },
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={4}>
          <Stack spacing={2}>
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label={t('breadcrumbs.label', { ns: 'course-materials' })}>
              <Link component={RouterLink} underline="hover" color="inherit" to="/">
                {t('nav.home', { ns: 'common' })}
              </Link>
              <Link component={RouterLink} underline="hover" color="inherit" to="/courses">
                {t('nav.courses', { ns: 'common' })}
              </Link>
              <Typography color="text.primary">
                {courseName ?? t('title', { ns: 'course-materials' })}
              </Typography>
            </Breadcrumbs>

            <Box>
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  fontSize: { xs: '2.25rem', md: '3.5rem' },
                }}
              >
                {courseName ?? t('title', { ns: 'course-materials' })}
              </Typography>
              {!slug && (
                <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 760 }}>
                  {t('description', { ns: 'course-materials' })}
                </Typography>
              )}
            </Box>
          </Stack>

          {loading && (
            <Stack sx={{ py: 8, alignItems: 'center' }}>
              <CircularProgress />
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                {t('loading', { ns: 'course-materials' })}
              </Typography>
            </Stack>
          )}

          {error && (
            <Alert severity="error">
              {t('errors.load', { ns: 'course-materials' })}
            </Alert>
          )}

          {!loading && !error && filteredCourses.length === 0 && (
            <Alert severity="info">
              {t('empty', { ns: 'course-materials' })}
            </Alert>
          )}

          {!loading && !error && filteredCourses.map((course) => (
            <Box key={course.id}>
              <Stack spacing={1} sx={{ mb: 3 }}>
                <Typography variant="h4" component="h2" sx={{ fontWeight: 700 }}>
                  {getLocalizedText(course.title, currentLanguage)}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 780 }}>
                  {getLocalizedText(course.description, currentLanguage)}
                </Typography>
              </Stack>

              <Grid container spacing={3}>
                {course.materials.map((material) => (
                  <Grid key={`${course.id}-${material.file}`} size={{ xs: 12, sm: 6, md: 4 }}>
                    <MaterialCard
                      material={material}
                      openLabel={t('actions.open', { ns: 'course-materials' })}
                      downloadLabel={t('actions.download', { ns: 'course-materials' })}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
