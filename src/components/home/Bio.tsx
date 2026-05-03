import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { alpha } from '@mui/material/styles';
import DownloadIcon from '@mui/icons-material/Download';
import SchoolIcon from '@mui/icons-material/School';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { FaGoogleScholar as GoogleScholarIcon} from "react-icons/fa6";
import { FaResearchgate as ResearchGateIcon } from "react-icons/fa";
import { FaOrcid as OrcidIcon} from "react-icons/fa";
import { SiScopus } from "react-icons/si";
import { ReactComponent as LattesIcon } from '../../assets/lattes.svg';
import perfil from '../../assets/perfil_lucena.png';

export default function Bio() {


  const interests = [
    'Machine Learning',
    'Artificial Intelligence',
    'Computer Vision',
    'Natural Language Processing',
    'Deep Learning',
    'Data Science',
    'Distributed Systems',
    'Big Data',
    'Reinforcement Learning'
  ];

  // Redes sociais
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <GitHubIcon/>,
      url: 'https://github.com/rachel_lucena',
      color: '#333',
    },
    {
      name: 'LinkedIn',
      icon: <LinkedInIcon />,
      url: 'https://www.linkedin.com/in/rachellucena',
      color: '#0077b5',
    },
    {
      name: 'Email',
      icon: <EmailIcon />,
      url: 'mailto:rachel.lucena@eng.uerj.br',
      color: '#ea4335',
    },
        {
      name: 'Lattes',
      icon: <LattesIcon/>,
      url: 'http://lattes.cnpq.br/9348327979369533',
      color: '#030b4d',
    },
    {
      name: 'Google Scholar',
      icon: <GoogleScholarIcon />,
      url: 'https://scholar.google.com/citations?hl=pt-BR&user=ih4O_f4AAAAJ',
      color: '#4285f4',
    },
    {
      name: 'ResearchGate',
      icon: <ResearchGateIcon />,
      url: 'https://www.researchgate.net/profile/Rachel-Lucena',
      color: '#00CCBB',
    },
    {
      name: 'Orcid',
      icon: <OrcidIcon />,
      url: 'https://orcid.org/0000-0003-2089-7313',
      color: '#A6CE39',
    },
    {
      name: 'Scopus',
      icon: <SiScopus />,
      url: 'https://www.scopus.com/authid/detail.uri?authorId=57204213376',
      color: '#E9711C',
    },
  ];

  return (
    <Box
      id="hero"
      sx={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 1, py: 10, pt: 20 }}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={6}>
          {/* 👤 FOTO + INFO */}
          <Stack direction="column" spacing={1.5} sx={{ justifyContent: "center", alignItems: "center" }}>
            <Avatar
              src={perfil}
              sx={{
                width: 200,
                height: 200,
                border: '4px solid white',
              }}
            />

            <Typography variant="h2" sx={{ fontWeight: 600 }}>
              Dra. Rachel Lucena
            </Typography>

            <Typography variant="caption" sx={{ fontWeight: 600 }}>
              (she/her)
            </Typography>

            <Typography variant="h4" sx={(theme) => ({
              color: 'secondary.main',
              ...theme.applyStyles('dark', {
                color: 'secondary.light',
              }),
            })}>
              Professora Adjunta, UERJ
            </Typography>


            <Typography variant="h6" sx={(theme) => ({
              color: 'secondary.main',
              ...theme.applyStyles('dark', {
                color: 'secondary.light',
              }),
            })}>
            Coordenadora da área de Termociências, PPG-EM
            </Typography>

            <Typography sx={{ color: alpha('#fff', 0.5), fontSize: 14 }}>
              UERJ - Universidade do Estado do Rio de Janeiro
            </Typography>

            {/* Redes Sociais - Ícones brancos, hover mostra cores originais */}
            <Stack direction="row" spacing={1.5} sx={{ mt: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
              {socialLinks.map((social, index) => (
                <Tooltip key={index} title={social.name} arrow placement="top">
                  <IconButton
                    component="a"
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: '#fff', // Ícone sempre branco
                      border: '2px solid white',
                      backgroundColor: 'transparent',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: social.color,
                        color: '#fff', // Mantém branco ou muda para branco? Vamos manter branco
                        transform: 'translateY(-4px)',
                        borderColor: social.color,
                      },
                    }}
                  >
                    {social.icon}
                  </IconButton>
                </Tooltip>
              ))}
            </Stack>
          </Stack>

          {/* 📄 RESUMO + EDUCAÇÃO */}
          <Stack spacing={4} sx={{ flex: 1 }}>
            <Stack spacing={2}>
              <Typography variant="h5" sx={{ mb: 1, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
                <AccountCircleIcon sx={{ fontSize: 28 }} />
                Professional Summary
              </Typography>

              <Typography sx={{ color: alpha('#fff', 0.7), lineHeight: 1.6 }}>
                Pesquisadora com experiência nas áreas de Engenharia Mecânica e Matemática, 
                com ênfase em princípios variacionais e métodos numéricos, desenvolvendo pesquisas principalmente nos seguintes temas: 
                simulação numérica, método dos elementos finitos, escoamento em meios porosos e escoamentos compressíveis.
              </Typography>

              <Button
                sx={{
                  mt: 2,
                  background: 'linear-gradient(45deg, #fada61, #ff9188, #ff5acd)',
                  color: '#fff',
                  width: 160,
                }}
                startIcon={<DownloadIcon />}
              >
                Download CV
              </Button>
            </Stack>

            {/* 🎓 EDUCAÇÃO */}
            <Box>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
                <SchoolIcon sx={{ fontSize: 28 }} />
                Education
              </Typography>

              <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                {[
                  { title: 'PhD in Computer Science', period: '2018 - 2022', place: 'USP' },
                  { title: 'MSc in Computer Science', period: '2016 - 2018', place: 'UFRJ' },
                  { title: 'BSc in Computer Science', period: '2012 - 2016', place: 'UFF' },
                ].map((item, i) => (
                  <Box
                    key={i}
                    sx={{
                      flex: 1,
                      p: 3,
                      borderRadius: 3,
                      backgroundColor: alpha('#fff', 0.05),
                      backdropFilter: 'blur(12px)',
                      border: `1px solid ${alpha('#fff', 0.1)}`,
                      transition: '0.3s',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        borderColor: '#ff9188',
                      },
                    }}
                  >
                    <Typography sx={{ fontWeight: 600 }}>{item.title}</Typography>
                    <Typography sx={{ fontSize: 14, color: alpha('#fff', 0.6), mt: 1 }}>
                      {item.period}
                    </Typography>
                    <Typography sx={{ fontSize: 14, color: alpha('#fff', 0.5) }}>
                      {item.place}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>

            {/* INTERESSES */}
            <Box>
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
                <AutoAwesomeIcon sx={{ fontSize: 28 }} />
                Interests
              </Typography>

              <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1.5 }}>
                {interests.map((interest, index) => (
                  <Chip
                    key={index}
                    label={interest}
                    sx={{
                      backgroundColor: '#f8f8f8',
                      color: 'secondary.main',
                      border: 'none',
                      padding: '16px 8px',
                      height: 'auto',
                      '& .MuiChip-label': {
                        padding: '8px 16px',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                      },
                      '&:hover': {
                        backgroundColor: '#e8e8e8',
                        transform: 'translateY(-2px)',
                        transition: 'all 0.2s ease',
                      }
                    }}
                  />
                ))}
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}