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
import { sortedExperiences } from '../../data/experience';

export default function Experience() {
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

        {/* Experiência Profissional */}
        <Timeline position="alternate">
          {sortedExperiences.map((exp, index) => (
            <TimelineItem key={`exp-${index}`}>
              <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2" color="text.secondary">
                {exp.year}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot>
                  <WorkIcon />
                </TimelineDot>
                {index < sortedExperiences.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {exp.title}
                </Typography>
                <Typography variant="subtitle2" color="primary" sx={{ mb: 1.5 }}>
                  {exp.company}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1.5 }}>
                  {exp.description}
                </Typography>
                
                {/* Details melhor alinhado */}
                {exp.details && exp.details.length > 0 && (
                  <Box sx={{ mt: 1.5, pl: 2 }}>
                    {exp.details.map((detail, i) => (
                      <Box 
                        key={i} 
                        sx={{ 
                          display: 'flex', 
                          alignItems: 'flex-start', 
                          gap: 1.5, 
                          mb: 1,
                        }}
                      >
                        <Box 
                          sx={{ 
                            width: 6, 
                            height: 6, 
                            borderRadius: '50%', 
                            bgcolor: 'primary.main',
                            mt: 0.8,
                            flexShrink: 0,
                          }} 
                        />
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            color: 'text.secondary',
                            lineHeight: 1.5,
                          }}
                        >
                          {detail}
                        </Typography>
                      </Box>
                    ))}
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