// src/components/Publications.tsx
import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Tooltip from '@mui/material/Tooltip';
import { SiDoi } from "react-icons/si";
import { publications, getTypeColor, filterOptions } from '../../data/publicationsData';
import { useTranslation } from 'react-i18next';

export default function Publications() {
  const { t } = useTranslation(['publications', 'common']);
  const [filterType, setFilterType] = useState<string | null>('all');

  const handleFilterChange = (
    _: React.MouseEvent<HTMLElement>,
    newFilter: string | null,
  ) => {
    setFilterType(newFilter);
  };

  // Filtrar publicações
  const filteredPublications = publications.filter(pub => {
    if (filterType === 'all' || filterType === null) return true;
    return pub.type === filterType;
  });

  // Ordenar publicações por ano (mais recente primeiro)
  const sortedPublications = [...filteredPublications].sort((a, b) => b.year - a.year);

  const formatAuthors = (authors: string[]) => {
    if (authors.length === 1) return authors[0];
    const joiner = t('authorsJoiner', { ns: 'publications' });
    if (authors.length === 2) return `${authors[0]} ${joiner} ${authors[1]}`;
    return `${authors.slice(0, -1).join(', ')} ${joiner} ${authors[authors.length - 1]}`;
  };

  // Contar publicações por tipo
  const counts = {
    all: publications.length,
    journal: publications.filter(p => p.type === 'journal').length,
    conference: publications.filter(p => p.type === 'conference').length,
    'extended-abstract': publications.filter(p => p.type === 'extended-abstract').length,
    abstract: publications.filter(p => p.type === 'abstract').length,
  };

  return (
    <Box
      id="publications"
      sx={{
        minHeight: '100vh',
        pt: { xs: 8, sm: 12 },
        pb: { xs: 8, sm: 16 },
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h1"
          sx={{
            textAlign: 'center',
            mb: 4,
            fontWeight: 600,
            position: 'relative',
            '&:after': {
              content: '""',
              position: 'absolute',
              bottom: -16,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 80,
              height: 4,
              bgcolor: 'primary.main',
              borderRadius: 2,
            },
          }}
        >
          {t('title', { ns: 'publications' })}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            maxWidth: 800,
            mx: 'auto',
            mb: 4,
          }}
        >
          {t('subtitle', { ns: 'publications' })}
        </Typography>

        {/* Filtros */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4, flexWrap: 'wrap', gap: 1, backgroundColor: 'transparent' }}>
          <ToggleButtonGroup
            value={filterType}
            exclusive
            onChange={handleFilterChange}
            aria-label={t('filterAriaLabel', { ns: 'publications' })}
            sx={{
              flexWrap: 'wrap',
              gap: 1,
              '& .MuiToggleButtonGroup-grouped': {
                borderRadius: '20px !important',
                border: '1px solid',
                borderColor: 'divider',
                px: 2,
                py: 0.5,
                '&.Mui-selected': {
                  bgcolor: 'primary.main',
                  color: '#f8f8f8',
                  '&:hover': {
                    bgcolor: 'primary.dark',
                  },
                },
              },
            }}
          >
            {filterOptions.map((option) => (
              <ToggleButton key={option.value} value={option.value}>
                {t(`types.${option.value}`, { ns: 'publications' })} ({counts[option.value as keyof typeof counts]})
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>

        {/* Resultados */}
        <Stack spacing={2}>
          {sortedPublications.length === 0 ? (
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <Typography variant="h6" color="text.secondary">
                {t('empty', { ns: 'publications' })}
              </Typography>
            </Box>
          ) : (
            sortedPublications.map((pub) => {
              const typeInfo = getTypeColor(pub.type);
              return (
                <Card
                  key={pub.id}
                  sx={{
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 3,
                    },
                  }}
                >
                  <CardContent>
                    <Stack spacing={1.5}>
                      <Stack
                        direction="row"
                        sx={{
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          flexWrap: 'wrap',
                          gap: 1,
                        }}
                      >
                        <Typography variant="h6" sx={{ fontWeight: 600, flex: 1 }}>
                          {pub.title}
                        </Typography>
                        <Chip
                          label={t(`types.${pub.type}Singular`, { ns: 'publications' })}
                          size="small"
                          sx={{
                            bgcolor: typeInfo.bg,
                            color: typeInfo.color,
                            fontWeight: 500,
                          }}
                        />
                      </Stack>

                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {formatAuthors(pub.authors)}
                      </Typography>

                      <Typography variant="body2" sx={{ color: 'text.primary' }}>
                        <strong>{pub.journal}</strong>
                        {pub.volume && `, ${pub.volume}`}
                        {pub.pages && `, ${pub.pages}`}
                      </Typography>

                      {/* Ano com DOI ao lado - apenas ícone, sem botão */}
                      <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>                        <Typography variant="caption" color="text.secondary">
                        {pub.year}
                      </Typography>
                        {pub.doi && (
                          <Tooltip title={t('actions.viewDoi', { ns: 'common' })} arrow>
                            <a
                              href={pub.doi.startsWith('http') ? pub.doi : `https://doi.org/${pub.doi}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                color: '#0366d6',
                                textDecoration: 'none',
                              }}
                            >
                              <SiDoi size={14} />
                            </a>
                          </Tooltip>
                        )}
                      </Stack>
                    </Stack>
                  </CardContent>
                </Card>
              );
            })
          )}
        </Stack>
      </Container>
    </Box>
  );
}
