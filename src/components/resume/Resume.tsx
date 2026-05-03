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
