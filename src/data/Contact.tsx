import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { useTranslation } from 'react-i18next';

// Importando as imagens PNG da pasta assets
import uerjLogo from '../assets/uerj.png';
import mecanLogo from '../assets/mecan.png';
import gesarLogo from '../assets/gesar.png';
import faperjLogo from '../assets/faperj.png';
import cnpqLogo from '../assets/cnpq.png';
import capesLogo from '../assets/capes.png';
import ppgemLogo from '../assets/ppgem.png';

export default function Contact() {
  const { t } = useTranslation('home');
  const logos = [
    {
      name: 'UERJ',
      url: 'https://www.uerj.br',
      image: uerjLogo,
    },
    {
      name: 'MECAN',
      url: 'https://www.mecanica.uerj.br/',
      image: mecanLogo,
      width: 160,
      height: 160,
    },
    {
      name: 'PPGEM',
      url: 'https://www.ppgem.uerj.br/',
      image: ppgemLogo,
      width: 140,
      height: 140,
    },
    {
      name: 'GESAR',
      url: 'https://www.gesar.uerj.br/',
      image: gesarLogo,
      width: 140,
      height: 140,
    },
    {
      name: 'FAPERJ',
      url: 'https://www.faperj.br/',
      image: faperjLogo,
    },
    {
      name: 'CNPq',
      url: 'https://www.cnpq.br',
      image: cnpqLogo,
    },
    {
      name: 'CAPES',
      url: 'https://www.gov.br/capes',
      image: capesLogo,
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        marginTop: 'auto',
        position: 'relative',
        zIndex: 1,
      }}
    >
      {/* Conteúdo do footer */}
      <Box
        sx={{
          pt: 6,
          pb: 4,
          px: { xs: 2, sm: 4, md: 6 },
          color: '#333',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={3}>
            <Stack spacing={1.5} sx={{ justifyContent: "center", alignItems: "center", textAlign: 'center' }}>
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                {t('contact.department')}
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                {t('contact.program')}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                {t('contact.laboratory')}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.7 }}>
                {t('contact.address')}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.7 }}>
                {t('contact.phoneEmail')}
              </Typography>
            </Stack>

            <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 3, justifyContent: 'center', alignItems: 'center', pt: 1 }}>
              {logos.map((logo, index) => (
                <Box
                  key={index}
                  component="a"
                  href={logo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: 'inline-block',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))',
                    },
                  }}
                >
                  <img
                    src={logo.image}
                    alt={logo.name}
                    style={{
                      width: logo.width || '80px',
                      height: logo.height || '80px',
                      objectFit: 'contain',
                    }}
                  />
                </Box>
              ))}
            </Stack>

            <Typography variant="caption" align="center" sx={{ opacity: 0.6, pt: 1 }}>
              © {new Date().getFullYear()} - {t('contact.rights')}
            </Typography>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
