import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Experience from './Experience';
import { Divider } from '@mui/material';
import Education from './Education';

export default function Resume() {
  return (
    <Box
      id="resume"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },

      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4" gutterBottom>
            My Research
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
            Explore why our product stands out: adaptability, durability,
            user-friendly design, and innovation. Enjoy reliable customer support and
            precision in every detail.
          </Typography>
        </Box>
      </Container>

      <Divider />


      {/* Seções */}
      <section id="home">
        <Experience />
      </section>

      {/* <section id="resume">
              <Resume />
            </section> */}

      <Divider />

      <section id="contact">
        <Education />
      </section>
    </Box>
  );
}
