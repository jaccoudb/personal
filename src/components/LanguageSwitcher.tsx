import * as React from 'react';
import { useTranslation } from 'react-i18next';
import ReactCountryFlag from 'react-country-flag';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import type { SupportedLanguage } from '../i18n';

type LanguageOption = {
  code: SupportedLanguage;
  label: 'Português' | 'English' | 'Français';
  countryCode: 'BR' | 'GB' | 'FR';
};

const languages: LanguageOption[] = [
  { code: 'pt-BR', label: 'Português', countryCode: 'BR' },
  { code: 'en', label: 'English', countryCode: 'GB' },
  { code: 'fr', label: 'Français', countryCode: 'FR' },
];

function LanguageFlag({ language }: { language: LanguageOption }) {
  return (
    <ReactCountryFlag
      countryCode={language.countryCode}
      svg
      aria-label={language.label}
      style={{
        width: '1.5em',
        height: '1.5em',
        display: 'block',
      }}
    />
  );
}

function normalizeLanguage(language: string): SupportedLanguage {
  if (language.startsWith('en')) return 'en';
  if (language.startsWith('fr')) return 'fr';
  return 'pt-BR';
}

export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation('common');
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const currentLanguage = normalizeLanguage(i18n.resolvedLanguage ?? i18n.language);
  const currentOption = languages.find((language) => language.code === currentLanguage) ?? languages[0];

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeLanguage = (language: SupportedLanguage) => {
    void i18n.changeLanguage(language);
    handleClose();
  };

  return (
    <>
      <Tooltip title={currentOption.label} arrow>
        <IconButton
          color="inherit"
          aria-label={`${t('language.label')}: ${currentOption.label}`}
          aria-controls={open ? 'language-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleOpen}
          sx={{
            width: 40,
            height: 40,
            p: 0,
            border: 'none',
            outline: 'none',
            boxShadow: 'none',
            borderRadius: '50%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'transparent',

            '&:hover': {
              backgroundColor: 'action.hover',
            },

            '&:focus': {
              outline: 'none',
            },

            '&:focus-visible': {
              outline: 'none',
              boxShadow: 'none',
            },

            '&.Mui-focusVisible': {
              outline: 'none',
              boxShadow: 'none',
            },
          }}
        >
          <LanguageFlag language={currentOption} />
        </IconButton>
      </Tooltip>

      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            sx: { mt: 1, minWidth: 190 },
          },
        }}
      >
        {languages.map((language) => {
          const selected = language.code === currentLanguage;

          return (
            <MenuItem
              key={language.code}
              selected={selected}
              aria-label={language.label}
              onClick={() => handleChangeLanguage(language.code)}
              sx={{
                gap: 1.5,
                minHeight: 44,
                '&.Mui-selected': {
                  fontWeight: 700,
                },
              }}
            >
              <LanguageFlag language={language} />
              <Typography sx={{ fontWeight: selected ? 700 : 400 }}>
                {language.label}
              </Typography>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
}
