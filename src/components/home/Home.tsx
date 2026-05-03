import Box from '@mui/material/Box';
import { dracula } from '../../shared-theme/themePrimitives';
import Bio from './Bio';
import Contact from '../../data/Contact';
import Divider from '@mui/material/Divider';

export default function Home() {
  return (
    <Box
      sx={(theme) => ({
        width: '100%',
        backgroundRepeat: 'no-repeat',
        ...theme.applyStyles('light', {
          backgroundImage: `linear-gradient(135deg, ${dracula.purple} 0%, ${dracula.pink} 100%)`,
        }),
        ...theme.applyStyles('dark', {
          background: dracula.backgroundDark,
        }),
        color: dracula.foreground,
        position: 'relative',
        overflow: 'hidden',
      })}
    >
      {/* GRADIENT DECORATIVO - camada de fundo */}
      <Box
        sx={{
          position: 'absolute',
          top: -100,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '120%',
          height: 400,
          background: 'radial-gradient(circle, rgba(255,145,136,0.25), transparent)',
          filter: 'blur(120px)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Seções */}
      <section id="home">
        <Bio />
      </section>

      <Divider/>
      
      <section id="contact">
        <Contact />
      </section>
    </Box>
  );
}