// src/data/socialLinks.tsx
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { FaGoogleScholar as GoogleScholarIcon } from "react-icons/fa6";
import { FaResearchgate as ResearchGateIcon } from "react-icons/fa";
import { FaOrcid as OrcidIcon } from "react-icons/fa";
import { SiScopus } from "react-icons/si";
import { ReactComponent as LattesIcon } from '../assets/lattes.svg';
import { JSX } from 'react';

export interface SocialLink {
  name: string;
  icon: JSX.Element;
  url: string;
  color: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    icon: <GitHubIcon />,
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
    name: 'Lattes',
    icon: <LattesIcon />,
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
  {
    name: 'Email',
    icon: <EmailIcon />,
    url: 'mailto:rachel.lucena@eng.uerj.br',
    color: '#ea4335',
  },
];