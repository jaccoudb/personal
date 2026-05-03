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
import { ongoingProjects, completedProjects } from '../../data/studentsData';

export default function AdvisedStudents() {
    const getLevelIcon = (level: string) => {
        if (level === 'Mestrado') return <SchoolIcon fontSize="small" />;
        if (level === 'Doutorado') return <ScienceIcon fontSize="small" />;
        return <WorkIcon fontSize="small" />;
    };

    const getLevelColor = (level: string) => {
        switch (level) {
            case 'Mestrado': return { bg: '#e3f2fd', color: '#1976d2' };
            case 'Doutorado': return { bg: '#e8f5e9', color: '#388e3c' };
            case 'Iniciação Científica': return { bg: '#fff3e0', color: '#f57c00' };
            case 'Pós-doutorado': return { bg: '#f3e5f5', color: '#7b1fa2' };
            default: return { bg: '#f5f5f5', color: '#616161' };
        }
    };

    const StudentCard = ({ student }: { student: any }) => {
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
                                    label={student.level}
                                    size="small"
                                    sx={{ bgcolor: levelInfo.bg, color: levelInfo.color }}
                                />
                                <Chip
                                    label={student.role}
                                    size="small"
                                    color={student.role === 'Orientador' ? 'primary' : 'secondary'}
                                    variant="outlined"
                                />
                            </Stack>
                        </Stack>

                        <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
                            {student.title}
                        </Typography>

                        <Typography variant="body2" sx={{ color: 'text.primary' }}>
                            <strong>{student.institution}</strong>
                            {student.startYear && ` • ${student.startYear}${student.endYear ? ` - ${student.endYear}` : ' - Presente'}`}
                        </Typography>

                        {student.funding && (
                            <Typography variant="caption" color="text.secondary">
                                Fomento: {student.funding}
                            </Typography>
                        )}
                    </Stack>
                </CardContent>
            </Card>
        );
    };

    // Agrupar projetos por nível
    const groupByLevel = (projects: any[]) => {
        const groups: { [key: string]: any[] } = {};
        const order = ['Doutorado', 'Pós-doutorado', 'Mestrado', 'Iniciação Científica', 'Outra natureza'];
        projects.forEach(project => {
            if (!groups[project.level]) {
                groups[project.level] = [];
            }
            groups[project.level].push(project);
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
                    Advised Students
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
                    Orientações e supervisões acadêmicas em andamento e concluídas
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
                            Orientações e supervisões em andamento ({ongoingProjects.length})
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ pt: 3 }}>
                        {ongoingGroups.order.map(level => (
                            ongoingGroups.groups[level] && ongoingGroups.groups[level].length > 0 && (
                                <Box key={level} sx={{ mb: 4 }}>
                                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}>
                                        {level}
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
                            Orientações e supervisões concluídas ({completedProjects.length})
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ pt: 3 }}>
                        {completedGroups.order.map(level => (
                            completedGroups.groups[level] && completedGroups.groups[level].length > 0 && (
                                <Box key={level} sx={{ mb: 4 }}>
                                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: 'secondary.main' }}>
                                        {level}
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