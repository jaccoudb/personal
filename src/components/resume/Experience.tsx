import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import WorkIcon from '@mui/icons-material/Work';
import { alpha } from '@mui/material/styles';

export default function Experience() {
  const experiences = [
    {
      year: '2022 - Presente',
      title: 'Senior Research Scientist',
      company: 'Instituto de Pesquisas Avançadas',
      description: 'Liderança em projetos de IA e machine learning. Desenvolvimento de soluções inovadoras para análise de dados em larga escala.',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'AWS'],
    },
    {
      year: '2019 - 2022',
      title: 'Research Associate',
      company: 'Laboratório de Inteligência Artificial - USP',
      description: 'Pesquisa em deep learning para visão computacional. Publicação de artigos em conferências internacionais.',
      technologies: ['Python', 'Keras', 'OpenCV', 'Docker'],
    },
    {
      year: '2017 - 2019',
      title: 'Data Scientist',
      company: 'Tech Solutions Ltda',
      description: 'Desenvolvimento de modelos preditivos para análise de comportamento. Implementação de pipelines de dados ETL.',
      technologies: ['R', 'SQL', 'Tableau', 'Scikit-learn'],
    },
  ];

  return (
    <Box
      id="experience"
      sx={{
        width: '100%',
        py: { xs: 6, sm: 10 },
        position: 'relative',
        zIndex: 1,
      }}
    >
      <Container>
        <Typography
          variant="h3"
          component="h2"
          sx={{
            textAlign: 'center',
            mb: 6,
            fontWeight: 600,
            position: 'relative',
            '&:after': {
              content: '""',
              position: 'absolute',
              bottom: -16,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 60,
              height: 4,
              bgcolor: 'primary.main',
              borderRadius: 2,
            },
          }}
        >
          Professional Experience
        </Typography>

        <Timeline position="alternate">
          {experiences.map((exp, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                {exp.year}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot>
                  <WorkIcon />
                </TimelineDot>
                {index < experiences.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span" sx={{ fontWeight: 600 }}>
                  {exp.title}
                </Typography>
                <Typography variant="subtitle2" color="primary" sx={{ mb: 1 }}>
                  {exp.company}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                  {exp.description}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 1 }}>
                  {exp.technologies.map((tech, i) => (
                    <Box
                      key={i}
                      sx={{
                        px: 1.5,
                        py: 0.5,
                        bgcolor: alpha('#000', 0.08),
                        borderRadius: 2,
                        fontSize: '0.75rem',
                        color: 'text.primary',
                      }}
                    >
                      {tech}
                    </Box>
                  ))}
                </Box>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
}