// src/components/research/Research.tsx
import { useState, useMemo } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import GroupIcon from '@mui/icons-material/Group';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { researchProjects } from '../../data/researchData';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function Research() {
  const { t } = useTranslation(['research', 'common']);
  const [expandedProjects, setExpandedProjects] = useState<number[]>([]);
  const [selectedCoordinator, setSelectedCoordinator] = useState<string>('all');

  const toggleExpand = (projectId: number) => {
    setExpandedProjects(prev =>
      prev.includes(projectId)
        ? prev.filter(id => id !== projectId)
        : [...prev, projectId]
    );
  };

  const isExpanded = (projectId: number) => expandedProjects.includes(projectId);

  // Função para verificar se a descrição tem mais de 150 caracteres
  const isLongDescription = (description: string) => description.length > 150;

  // Extrair todos os coordenadores únicos
  const coordinatorsList = useMemo(() => {
    const coordinators = new Set<string>();
    researchProjects.forEach(project => {
      project.coordinators.forEach(coordinator => {
        coordinators.add(coordinator);
      });
    });
    return Array.from(coordinators).sort();
  }, []);

  // Filtrar projetos por coordenador
  const filteredProjects = useMemo(() => {
    if (selectedCoordinator === 'all') {
      return researchProjects;
    }
    return researchProjects.filter(project =>
      project.coordinators.includes(selectedCoordinator)
    );
  }, [selectedCoordinator]);

  // Ordenar projetos por período (mais recente primeiro)
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    const getYear = (period: string) => {
      const startYear = parseInt(period.split(' - ')[0]);
      return startYear;
    };
    return getYear(b.period) - getYear(a.period);
  });

  return (
    <Box
      id="research"
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
          {t('title', { ns: 'research' })}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            maxWidth: 800,
            mx: 'auto',
            mb: 4,
          }}
        >
          {t('subtitle', { ns: 'research' })}
        </Typography>

        {/* Filtro por Coordenador */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3, mb: 5 }}>
          <FormControl sx={{ minWidth: 280 }}>
            <InputLabel
              sx={{
                fontSize: '0.9rem',
                bgcolor: 'background.paper',
                px: 0.5,
              }}
            >
              {t('filterLabel', { ns: 'research' })}
            </InputLabel>
            <Select
              value={selectedCoordinator}
              onChange={(e) => setSelectedCoordinator(e.target.value)}
              label={t('filterLabel', { ns: 'research' })}
              sx={{
                '& .MuiSelect-select': {
                  py: 1.5,
                },
              }}
            >
              <MenuItem value="all">{t('allCoordinators', { ns: 'research' })} ({researchProjects.length})</MenuItem>
              {coordinatorsList.map((coordinator) => (
                <MenuItem key={coordinator} value={coordinator}>
                  {coordinator} ({researchProjects.filter(p => p.coordinators.includes(coordinator)).length})
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        {/* Resultados */}
        {sortedProjects.length === 0 ? (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h6" color="text.secondary">
              {t('empty', { ns: 'research' })}
            </Typography>
          </Box>
        ) : (
          <Stack spacing={4}>
            {sortedProjects.map((project) => {
              const expanded = isExpanded(project.id);
              const longDescription = isLongDescription(project.description);

              return (
                <Card
                  key={project.id}
                  sx={{
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 3,
                    },
                    borderLeft: `4px solid ${project.status === 'ongoing' ? '#4caf50' : '#9e9e9e'}`,
                  }}
                >
                  <CardContent>
                    <Stack spacing={3}>
                      {/* Título em uma linha */}
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                        {project.title}
                      </Typography>

                      {/* Período, Status e Funding */}
                      <Stack
                        direction="row"
                        sx={{
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          flexWrap: 'wrap',
                          gap: 1,
                          mb: 0.5
                        }}
                      >
                        <Typography variant="subtitle2" color="text.secondary">
                          {project.period}
                        </Typography>

                        <Stack direction="row" spacing={1}>
                          <Chip
                            label={t(`status.${project.status}`, { ns: 'common' })}
                            size="small"
                            color={project.status === 'ongoing' ? 'success' : 'default'}
                            sx={{ fontSize: '0.7rem' }}
                          />
                          <Stack direction="row" spacing={0.5}>
                            {project.funding.map((fund, idx) => (
                              <Chip
                                key={idx}
                                label={fund}
                                size="small"
                                variant="outlined"
                                sx={{ fontSize: '0.7rem' }}
                              />
                            ))}
                          </Stack>
                        </Stack>
                      </Stack>

                      {/* Descrição com botão expandir */}
                      <Box>
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'text.secondary',
                            display: '-webkit-box',
                            WebkitLineClamp: expanded ? 'unset' : 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            transition: 'all 0.3s ease',
                            pr: longDescription ? 4 : 0,
                          }}
                        >
                          {project.description}
                        </Typography>

                        {longDescription && (
                          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 0.5 }}>
                            <Button
                              onClick={() => toggleExpand(project.id)}
                              size="small"
                              sx={{
                                textTransform: 'none',
                                minWidth: 'auto',
                                color: 'primary.main',
                                p: 0,
                                '&:hover': {
                                  bgcolor: 'transparent',
                                  textDecoration: 'underline',
                                },
                              }}
                              disableRipple
                              startIcon={expanded ? (
                                <RemoveIcon fontSize="small" />
                              ) : (
                                <AddIcon fontSize="small" />
                              )}
                            >
                              {expanded ? t('actions.showLess', { ns: 'common' }) : t('actions.showMore', { ns: 'common' })}
                            </Button>
                          </Box>
                        )}
                      </Box>

                      {/* Alunos envolvidos */}
                      {Object.keys(project.students).length > 0 && (
                        <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1 }}>
                          {project.students.undergraduate && (
                            <Chip
                              icon={<GroupIcon />}
                              label={`${t('students.undergraduate', { ns: 'research' })}: ${project.students.undergraduate}`}
                              size="small"
                              variant="outlined"
                            />
                          )}
                          {project.students.masters && (
                            <Chip
                              icon={<GroupIcon />}
                              label={`${t('students.masters', { ns: 'research' })}: ${project.students.masters}`}
                              size="small"
                              variant="outlined"
                            />
                          )}
                          {project.students.professionalMasters && (
                            <Chip
                              icon={<GroupIcon />}
                              label={`${t('students.professionalMasters', { ns: 'research' })}: ${project.students.professionalMasters}`}
                              size="small"
                              variant="outlined"
                            />
                          )}
                          {project.students.doctorate && (
                            <Chip
                              icon={<GroupIcon />}
                              label={`${t('students.doctorate', { ns: 'research' })}: ${project.students.doctorate}`}
                              size="small"
                              variant="outlined"
                            />
                          )}
                        </Stack>
                      )}

                      {/* Coordenador */}
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                          {t('coordinators', { ns: 'research' })}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                          {project.coordinators.map((coordinator, idx) => (
                            <Chip
                              key={idx}
                              label={coordinator}
                              size="small"
                              variant="filled"
                              sx={{ fontSize: '0.7rem' }}
                            />
                          ))}
                        </Box>
                      </Box>

                      {/* Integrantes */}
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                          {t('researchers', { ns: 'research' })}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                          {project.researchers.map((researcher, idx) => (
                            <Chip
                              key={idx}
                              label={researcher}
                              size="small"
                              variant="outlined"
                              sx={{ fontSize: '0.7rem' }}
                            />
                          ))}
                        </Box>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              );
            })}
          </Stack>
        )}
      </Container>
    </Box>
  );
}
