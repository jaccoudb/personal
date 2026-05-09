// src/components/AdvisedStudents.tsx
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import ScienceIcon from '@mui/icons-material/Science';
import { useTranslation } from 'react-i18next';
import { ongoingProjects, completedProjects, type Student } from '../../data/studentsData';

type StudentLevel = Student['level'];

export default function AdvisedStudents() {
    const { t } = useTranslation(['students', 'common']);

    const getLevelIcon = (level: StudentLevel) => {
        if (level === 'masters') return <SchoolIcon fontSize="small" />;
        if (level === 'doctorate') return <ScienceIcon fontSize="small" />;
        return <WorkIcon fontSize="small" />;
    };

    const getLevelColor = (level: StudentLevel) => {
        switch (level) {
            case 'masters': return { bg: '#e3f2fd', color: '#1976d2' };
            case 'doctorate': return { bg: '#e8f5e9', color: '#388e3c' };
            case 'scientificInitiation': return { bg: '#fff3e0', color: '#f57c00' };
            case 'postdoc': return { bg: '#f3e5f5', color: '#7b1fa2' };
            default: return { bg: '#f5f5f5', color: '#616161' };
        }
    };

    const StudentCard = ({ student }: { student: Student }) => {
        const levelInfo = getLevelColor(student.level);
        return (
            <Card sx={{ mb: 2, '&:hover': { boxShadow: 3 } }}>
                <CardContent>
                    <Stack spacing={1.5}>
                        <Stack
                            direction="row"
                            sx={{
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                flexWrap: 'wrap',
                                gap: 1,
                            }}
                        >
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                {student.name}
                            </Typography>
                            <Stack direction="row" spacing={1}>
                                <Chip
                                    icon={getLevelIcon(student.level)}
                                    label={t(`levels.${student.level}`, { ns: 'common' })}
                                    size="small"
                                    sx={{ bgcolor: levelInfo.bg, color: levelInfo.color }}
                                />
                                <Chip
                                    label={t(`roles.${student.role}`, { ns: 'common' })}
                                    size="small"
                                    color={student.role === 'advisor' ? 'primary' : 'secondary'}
                                    variant="outlined"
                                />
                            </Stack>
                        </Stack>

                        <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
                            {student.title}
                        </Typography>

                        <Typography variant="body2" sx={{ color: 'text.primary' }}>
                            <strong>{student.institution}</strong>
                            {student.startYear && ` • ${student.startYear}${student.endYear ? ` - ${student.endYear}` : ` - ${t('time.present', { ns: 'common' })}`}`}
                        </Typography>

                        {student.funding && (
                            <Typography variant="caption" color="text.secondary">
                                {t('funding', { ns: 'students' })}: {student.funding}
                            </Typography>
                        )}
                    </Stack>
                </CardContent>
            </Card>
        );
    };

    // Agrupar projetos por nível
    const groupByLevel = (projects: Student[]) => {
        const groups: Partial<Record<StudentLevel, Student[]>> = {};
        const order: StudentLevel[] = ['doctorate', 'postdoc', 'masters', 'scientificInitiation', 'other'];
        projects.forEach(project => {
            if (!groups[project.level]) {
                groups[project.level] = [];
            }
            groups[project.level]?.push(project);
        });
        return { groups, order };
    };

    const ongoingGroups = groupByLevel(ongoingProjects);
    const completedGroups = groupByLevel(completedProjects);

    return (
        <Box
            id="advised-students"
            sx={{
                minHeight: '100vh',
                pt: { xs: 8, sm: 12 },
                pb: { xs: 8, sm: 16 },
                bgcolor: 'background.default',
            }}
        >
            <Container maxWidth="lg">
                <Typography
                    variant="h2"
                    component="h1"
                    sx={{
                        textAlign: 'center',
                        mb: 4,
                        fontWeight: 600,
                        position: 'relative',
                        '&:after': {
                            content: '""',
                            position: 'absolute',
                            bottom: -16,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: 80,
                            height: 4,
                            bgcolor: 'primary.main',
                            borderRadius: 2,
                        },
                    }}
                >
                    {t('title', { ns: 'students' })}
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        textAlign: 'center',
                        color: 'text.secondary',
                        maxWidth: 800,
                        mx: 'auto',
                        mb: 6,
                    }}
                >
                    {t('subtitle', { ns: 'students' })}
                </Typography>

                {/* Projetos em Andamento */}
                <Accordion defaultExpanded sx={{ mb: 4, '&:before': { display: 'none' } }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        sx={{
                            bgcolor: 'primary.main',
                            color: '#fff',
                            borderRadius: 1,
                            transition: 'background-color 0.2s ease',
                            '&:hover': {
                                bgcolor: 'primary.dark',
                                borderRadius: 1,
                            },
                        }}
                    >
                        <Typography variant="h5" sx={{ fontWeight: 600 }}>
                            {t('ongoingTitle', { ns: 'students' })} ({ongoingProjects.length})
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ pt: 3 }}>
                        {ongoingGroups.order.map(level => (
                            ongoingGroups.groups[level] && ongoingGroups.groups[level].length > 0 && (
                                <Box key={level} sx={{ mb: 4 }}>
                                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}>
                                        {t(`levels.${level}`, { ns: 'common' })}
                                    </Typography>
                                    {ongoingGroups.groups[level].map((student) => (
                                        <StudentCard key={student.id} student={student} />
                                    ))}
                                </Box>
                            )
                        ))}
                    </AccordionDetails>
                </Accordion>

                {/* Projetos Concluídos */}
                <Accordion sx={{ '&:before': { display: 'none' } }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        sx={{
                            bgcolor: 'secondary.main',
                            color: '#fff',
                            borderRadius: 1,
                            transition: 'background-color 0.2s ease',
                            '&:hover': {
                                bgcolor: 'secondary.dark',
                                borderRadius: 1,
                            },
                        }}
                    >
                        <Typography variant="h5" sx={{ fontWeight: 600 }}>
                            {t('completedTitle', { ns: 'students' })} ({completedProjects.length})
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ pt: 3 }}>
                        {completedGroups.order.map(level => (
                            completedGroups.groups[level] && completedGroups.groups[level].length > 0 && (
                                <Box key={level} sx={{ mb: 4 }}>
                                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: 'secondary.main' }}>
                                        {t(`levels.${level}`, { ns: 'common' })}
                                    </Typography>
                                    {completedGroups.groups[level].map((student) => (
                                        <StudentCard key={student.id} student={student} />
                                    ))}
                                </Box>
                            )
                        ))}
                    </AccordionDetails>
                </Accordion>
            </Container>
        </Box>
    );
}
