import CssBaseline from '@mui/material/CssBaseline';
import { Routes } from 'react-router-dom';
import AppTheme from './shared-theme/AppTheme';
import NavBar from './components/NavBar';
import ScrollToTop from './components/ScrollToTop';
import { routes } from './routes';

export default function Page(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <NavBar />
      
      <Routes>{routes}
      </Routes>

      <ScrollToTop />
    </AppTheme>
  );
}
