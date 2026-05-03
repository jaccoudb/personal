import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School';
import { TimelineOppositeContent } from '@mui/lab';

export default function Education() {
  const educations = [
    {
      year: '2018 - 2022',
      title: 'PhD in Computer Science',
      institution: 'Universidade de São Paulo (USP)',
      description: 'Tese em Inteligência Artificial e Machine Learning. Foco em deep learning para processamento de imagens médicas.',
      achievements: [
        'Publicação de 5 artigos em periódicos internacionais',
        'Prêmio de melhor tese na área de IA',
        'Bolsista CAPES/PROEX',
      ],
    },
    {
      year: '2016 - 2018',
      title: 'MSc in Computer Science',
      institution: 'Universidade Federal do Rio de Janeiro (UFRJ)',
      description: 'Pesquisa em sistemas distribuídos e computação em nuvem.',
      achievements: [
        'Dissertação sobre otimização de recursos em nuvem',
        'Participação em projetos de pesquisa com indústria',
        'Monitoria em disciplinas de algoritmos',
      ],
    },
    {
      year: '2012 - 2016',
      title: 'BSc in Computer Science',
      institution: 'Universidade Federal Fluminense (UFF)',
      description: 'Formação sólida em ciência da computação com ênfase em desenvolvimento de software.',
      achievements: [
        'Iniciação científica em visão computacional',
        'Representante estudantil por 2 anos',
        'Média geral: 8.5/10',
      ],
    },
  ];

  return (
    <Box
      id="education"
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
          Education
        </Typography>

        <Timeline position="alternate">
          {educations.map((edu, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                {edu.year}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="secondary">
                  <SchoolIcon />
                </TimelineDot>
                {index < educations.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span" sx={{ fontWeight: 600 }}>
                  {edu.title}
                </Typography>
                <Typography variant="subtitle2" color="secondary" sx={{ mb: 1 }}>
                  {edu.institution}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                  {edu.description}
                </Typography>
                <Box sx={{ mt: 1 }}>
                  {edu.achievements.map((achievement, i) => (
                    <Box
                      key={i}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        mb: 0.5,
                      }}
                    >
                      <Box
                        sx={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          bgcolor: 'primary.main',
                        }}
                      />
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        {achievement}
                      </Typography>
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