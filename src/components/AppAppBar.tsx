import * as React from 'react';
// Link as RouterLink,
import { useNavigate, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
// import ColorModeIconDropdown from '../shared-theme/ColorModeIconDropdown';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr auto 1fr',
  alignItems: 'center',
  width: '100%',
  minHeight: 64,
  borderBottom: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
  padding: '0 24px',
}));

export default function AppAppBar() {
  const { t } = useTranslation('common');
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  // Função para scroll suave até a seção
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setOpen(false);
  };

  // Função principal de navegação
  const handleNavigation = (path: string, sectionId?: string) => {
    if (location.pathname !== path) {
      // Navega para a página
      navigate(path);
      // Se tem seção, espera a página carregar e faz scroll
      if (sectionId) {
        setTimeout(() => {
          scrollToSection(sectionId);
        }, 100);
      }
    } else if (sectionId) {
      // Se já está na página, faz scroll direto
      scrollToSection(sectionId);
    }
    setOpen(false);
  };

  // Verifica se o link está ativo
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Configuração dos itens do menu
  const menuItems = [
    { label: t('nav.home'), path: '/', sectionId: 'home', disabled: false },
    { label: t('nav.resume'), path: '/resume', sectionId: 'resume', disabled: false },
    { label: t('nav.research'), path: '/research', disabled: false },
    { label: t('nav.publications'), path: '/publications', disabled: false },
    { label: t('nav.students'), path: '/advised', disabled: false },
    { label: t('nav.courses'), path: '/courses', disabled: false },
    { label: t('nav.contact'), path: '/', sectionId: 'contact', disabled: false },
  ];

  // Itens ativos (não desabilitados)
  const activeMenuItems = menuItems.filter(item => !item.disabled);

  return (
    <AppBar
      position="fixed"
      sx={{
        top: 0,
        boxShadow: 'none',
        backgroundColor: 'transparent',
      }}
    >
      <StyledToolbar>
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button 
            color="inherit" 
            sx={{ textTransform: 'none', fontWeight: 'bold', fontSize: '1.2rem' }}
            onClick={() => handleNavigation('/')}
          >
            {/* Meu Site */}
          </Button>
        </Box>

        {/* Menu Desktop */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            gap: 2,
            justifyContent: 'center',
          }}
        >
          {activeMenuItems.map((item) => {
            const buttonSx = {
              textTransform: 'none',
              fontWeight: isActive(item.path) && !item.sectionId ? 'bold' : 'normal',
              borderBottom: isActive(item.path) && !item.sectionId ? '2px solid' : 'none',
              borderRadius: 0,
              '&:hover': {
                borderBottom: '2px solid',
              },
              opacity: item.disabled ? 0.5 : 1,
            };

            // if (item.useLink) {
            //   return (
            //     <Button
            //       key={item.label}
            //       component={RouterLink}
            //       to={item.path}
            //       color="inherit"
            //       sx={buttonSx}
            //       disabled={item.disabled}
            //     >
            //       {item.label}
            //     </Button>
            //   );
            // }

            return (
              <Button
                key={item.label}
                color="inherit"
                sx={buttonSx}
                onClick={() => handleNavigation(item.path, item.sectionId)}
                disabled={item.disabled}
              >
                {item.label}
              </Button>
            );
          })}
        </Box>

        {/* Direita */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: 1,
          }}
        >
          {/* Escolha de tema */}
          {/* <ColorModeIconDropdown /> */}
          <LanguageSwitcher />
          <IconButton onClick={toggleDrawer(true)} sx={{ display: { xs: 'flex', md: 'none' } }}>
            <MenuIcon />
          </IconButton>
        </Box>
      </StyledToolbar>

      {/* Drawer Mobile */}
      <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseRoundedIcon />
            </IconButton>
          </Box>

          <Typography variant="subtitle2" sx={{ px: 2, pt: 2, fontWeight: 'bold', color: 'text.secondary' }}>
            {t('nav.menu')}
          </Typography>
          
          {activeMenuItems.map((item) => {
            const menuItemSx = {
              fontWeight: isActive(item.path) && !item.sectionId ? 'bold' : 'normal',
              opacity: item.disabled ? 0.5 : 1,
            };

            // if (item.useLink) {
            //   return (
            //     <MenuItem
            //       key={item.label}
            //       component={RouterLink}
            //       to={item.path}
            //       onClick={toggleDrawer(false)}
            //       disabled={item.disabled}
            //       sx={menuItemSx}
            //     >
            //       {item.label}
            //     </MenuItem>
            //   );
            // }

            return (
              <MenuItem
                key={item.label}
                onClick={() => handleNavigation(item.path, item.sectionId)}
                disabled={item.disabled}
                sx={menuItemSx}
              >
                {item.label}
                {item.disabled && ` (${t('nav.soon')})`}
              </MenuItem>
            );
          })}

          <Divider sx={{ my: 2 }} />
        </Box>
      </Drawer>
    </AppBar>
  );
}
