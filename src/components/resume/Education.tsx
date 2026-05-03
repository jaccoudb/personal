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
import SchoolIcon from '@mui/icons-material/School';
import Chip from '@mui/material/Chip';
import { educations } from '../../data/education';

export default function Education() {
  // Ordenar por ano (mais recente primeiro)
  const sortedEducations = [...educations].sort((a, b) => {
    const getStartYear = (period: string) => parseInt(period.split(' - ')[0]);
    return getStartYear(b.year) - getStartYear(a.year);
  });

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
          {sortedEducations.map((edu, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="left"
                variant="body2"
                color="text.secondary"
              >
                {edu.year}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="secondary">
                  <SchoolIcon />
                </TimelineDot>
                {index < sortedEducations.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                {/* Título */}
                <Typography variant="h6" component="span" sx={{ fontWeight: 600 }}>
                  {edu.title}
                </Typography>

                {/* Instituição */}
                <Typography variant="subtitle2" color="secondary" sx={{ mb: 1 }}>
                  {edu.institution}
                </Typography>

                {/* Descrição (Tese/Dissertação/Título) */}
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                  {edu.description}
                </Typography>

                {/* Orientador/Coordenador - tópico único com lista */}
                {edu.advisors && edu.advisors.length > 0 && (
                  <Box sx={{ mt: 1, mb: 1, textAlign: 'left' }}>
                    <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.primary', display: 'block', mb: 0.5 }}>
                      Orientador(es):
                    </Typography>
                    {edu.advisors.map((advisor, i) => (
                      <Typography key={i} variant="caption" sx={{ color: 'text.secondary', display: 'block', ml: 1 }}>
                        • {advisor}
                      </Typography>
                    ))}
                  </Box>
                )}

                {/* Conquistas - alinhado à esquerda */}
                {edu.achievements && edu.achievements.length > 0 && (
                  <Box sx={{ mt: 1, mb: 1, textAlign: 'left' }}>
                    <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.primary', display: 'block', mb: 0.5 }}>
                      Realização(ões):
                    </Typography>
                    {edu.achievements.map((achievement, i) => (
                      <Typography key={i} variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 0.5 }}>
                        • {achievement}
                      </Typography>
                    ))}
                  </Box>
                )}

                {/* Palavras-chave */}
                {edu.keys && edu.keys.length > 0 && (
                  <Box sx={{ mt: 1, textAlign: 'left' }}>
                    <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.primary', display: 'block', mb: 0.5 }}>
                      <strong>Palavras-chave:</strong>
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {edu.keys.map((key, i) => (
                        <Chip
                          key={i}
                          label={key}
                          size="small"
                          variant="outlined"
                          sx={{ fontSize: '0.65rem' }}
                        />
                      ))}
                    </Box>
                  </Box>
                )}
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
}