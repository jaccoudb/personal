// src/components/Courses.tsx
import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import WorkIcon from '@mui/icons-material/Work';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { courses, getLevelColor } from '../../data/coursesData';

export default function Courses() {
    const [selectedCourse, setSelectedCourse] = useState<any>(null);
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleOpenDialog = (course: any) => {
        setSelectedCourse(course);
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
        setSelectedCourse(null);
    };

    return (
        <Box
            id="courses"
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
                    Cursos Ministrados
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
                    Disciplinas ministradas na graduação e pós-graduação em Engenharia Mecânica
                </Typography>

                {/* CSS Grid com auto-fit para centralizar */}
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            sm: 'repeat(auto-fit, minmax(300px, 1fr))',
                            md: 'repeat(auto-fit, minmax(320px, 1fr))',
                        },
                        gap: 3,
                    }}
                >
                    {courses.map((course) => {
                        const primaryLevel = course.level[0];
                        const levelInfo = getLevelColor(primaryLevel);

                        return (
                            <Card
                                key={course.id}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100%',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        boxShadow: 6,
                                    },
                                    borderTop: `4px solid ${levelInfo.color}`,
                                }}
                            >
                                <CardContent sx={{ flexGrow: 1, p: 2.5 }}>
                                    {/* Níveis (array de chips) */}
                                    <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
                                        {course.level.map((level, idx) => {
                                            const levelInfoItem = getLevelColor(level);
                                            return (
                                                <Chip
                                                    key={idx}
                                                    label={level}
                                                    size="small"
                                                    sx={{
                                                        bgcolor: levelInfoItem.bg,
                                                        color: levelInfoItem.color,
                                                        fontWeight: 500,
                                                    }}
                                                />
                                            );
                                        })}
                                    </Stack>

                                    <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: "block" }}>
                                        {course.code}
                                    </Typography>

                                    <Box sx={{ minHeight: 65, mb: 2 }}>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: 600,
                                                lineHeight: 1.3,
                                                display: '-webkit-box',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                WebkitLineClamp: 2,
                                                WebkitBoxOrient: 'vertical',
                                            }}
                                        >
                                            {course.name}
                                        </Typography>
                                        {/* Período */}

                                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
                                            {course.period}
                                        </Typography>
                                    </Box>

                                    {/* Código da turma - alinhado à esquerda */}
                                    {course.classCode && (
                                        <Typography
                                            variant="caption"
                                            sx={{
                                                display: 'block',
                                                mb: 2,
                                                color: 'text.secondary',
                                                fontFamily: 'monospace',
                                            }}
                                        >
                                            {course.classCode}
                                        </Typography>
                                    )}

                                    <Box sx={{ minHeight: 85 }}>
                                        <Stack spacing={1.5}>
                                            {/* Horários (array) */}
                                            <Box>
                                                {course.schedule.map((time, idx) => (
                                                    <Stack key={idx} direction="row" spacing={1} sx={{ alignItems: "center", mb: idx < course.schedule.length - 1 ? 1 : 0 }}>
                                                        <AccessTimeIcon sx={{ fontSize: 16, color: 'text.secondary', flexShrink: 0, minWidth: 20 }} />
                                                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
                                                            {time}
                                                        </Typography>
                                                    </Stack>
                                                ))}
                                            </Box>

                                            {/* Créditos */}
                                            <Stack direction="row" sx={{alignItems:"center"}} spacing={1}>
                                                <CreditCardIcon sx={{ fontSize: 16, color: 'text.secondary', flexShrink: 0, minWidth: 20 }} />
                                                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
                                                    {course.credits} créditos | {course.workload}h
                                                </Typography>
                                            </Stack>
                                        </Stack>
                                    </Box>
                                </CardContent>
                                <CardActions sx={{ p: 2, pt: 0, pb: 2.5 }}>
                                    <Button
                                        size="small"
                                        variant="outlined"
                                        onClick={() => handleOpenDialog(course)}
                                        fullWidth
                                        sx={{ borderRadius: 2 }}
                                    >
                                        Ver Ementa
                                    </Button>
                                </CardActions>
                            </Card>
                        );
                    })}
                </Box>

                {/* Dialog com ementa completa */}
                <Dialog
                    open={dialogOpen}
                    onClose={handleCloseDialog}
                    maxWidth="md"
                    fullWidth
                >
                    {selectedCourse && (
                        <>
                            <DialogTitle>
                                <Box>
                                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                                        {selectedCourse.code}
                                    </Typography>
                                    <Typography variant="h5" sx={{ fontWeight: 600 }}>
                                        {selectedCourse.name}
                                    </Typography>
                                    <Stack direction="row" spacing={1} sx={{ mt: 1, flexWrap: 'wrap', gap: 1 }}>
                                        {selectedCourse.level.map((level: string, idx: number) => {
                                            const levelInfoItem = getLevelColor(level);
                                            return (
                                                <Chip
                                                    key={idx}
                                                    label={level}
                                                    size="small"
                                                    sx={{
                                                        bgcolor: levelInfoItem.bg,
                                                        color: levelInfoItem.color,
                                                    }}
                                                />
                                            );
                                        })}
                                        <Chip
                                            label={selectedCourse.period}
                                            size="small"
                                            variant="outlined"
                                        />
                                    </Stack>
                                    {selectedCourse.classCode && (
                                        <Typography variant="body2" sx={{ mt: 1, fontFamily: 'monospace' }}>
                                            {selectedCourse.classCode}
                                        </Typography>
                                    )}
                                </Box>
                            </DialogTitle>
                            <DialogContent dividers>
                                <Stack spacing={3}>
                                    <Box>
                                        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                                            <WorkIcon sx={{ fontSize: 20, mr: 1, verticalAlign: 'middle' }} />
                                            Horários
                                        </Typography>
                                        <List dense>
                                            {selectedCourse.schedule.map((time: string, idx: number) => (
                                                <ListItem key={idx} sx={{ px: 0 }}>
                                                    <ListItemIcon sx={{ minWidth: 24 }}>
                                                        <AccessTimeIcon sx={{ fontSize: 16 }} />
                                                    </ListItemIcon>
                                                    <ListItemText primary={time} />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Box>

                                    <Box>
                                        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                                            <MenuBookIcon sx={{ fontSize: 20, mr: 1, verticalAlign: 'middle' }} />
                                            Ementa
                                        </Typography>
                                        <List dense>
                                            {selectedCourse.syllabus.map((item: string, index: number) => (
                                                <ListItem key={index} sx={{ px: 0 }}>
                                                    <ListItemIcon sx={{ minWidth: 24 }}>
                                                        <Box
                                                            sx={{
                                                                width: 6,
                                                                height: 6,
                                                                borderRadius: '50%',
                                                                bgcolor: 'primary.main',
                                                            }}
                                                        />
                                                    </ListItemIcon>
                                                    <ListItemText primary={item} />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Box>

                                    <Box>
                                        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                                            Informações Adicionais
                                        </Typography>
                                        <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', gap: 1 }}>
                                            <Chip
                                                label={`${selectedCourse.credits} créditos`}
                                                size="small"
                                                variant="outlined"
                                            />
                                            <Chip
                                                label={`${selectedCourse.workload} horas`}
                                                size="small"
                                                variant="outlined"
                                            />
                                        </Stack>
                                    </Box>
                                </Stack>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleCloseDialog}>Fechar</Button>
                            </DialogActions>
                        </>
                    )}
                </Dialog>
            </Container>
        </Box>
    );
}