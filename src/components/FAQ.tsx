import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';

type FaqItem = {
  question: string;
  answer: string;
};

export default function FAQ() {
  const { t } = useTranslation('home');
  const [expanded, setExpanded] = React.useState<string[]>([]);
  const items = t('faq.items', { returnObjects: true }) as FaqItem[];

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(
        isExpanded
          ? [...expanded, panel]
          : expanded.filter((item) => item !== panel),
      );
    };

  return (
    <Container
      id="faq"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Typography
        component="h2"
        variant="h4"
        sx={{
          color: 'text.primary',
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        {t('faq.title')}
      </Typography>
      <Box sx={{ width: '100%' }}>
        {items.map((item, index) => {
          const panelId = `panel${index + 1}`;

          return (
            <Accordion
              key={item.question}
              expanded={expanded.includes(panelId)}
              onChange={handleChange(panelId)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`${panelId}d-content`}
                id={`${panelId}d-header`}
              >
                <Typography component="span" variant="subtitle2">
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{ maxWidth: { sm: '100%', md: '70%' } }}
                >
                  {item.answer.includes('rachel.lucena@eng.uerj.br') ? (
                    <>
                      {item.answer.replace('rachel.lucena@eng.uerj.br.', '')}
                      <Link href="mailto:rachel.lucena@eng.uerj.br">rachel.lucena@eng.uerj.br</Link>.
                    </>
                  ) : item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>
    </Container>
  );
}
