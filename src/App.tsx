import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route } from 'react-router-dom'; // Remove BrowserRouter da importação
import AppTheme from './shared-theme/AppTheme';
import AppAppBar from './components/AppAppBar';
import Home from './components/home/Home';
import Resume from './components/resume/Resume';

// Placeholders para páginas que serão criadas
const Papers = () => <div style={{ paddingTop: '80px' }}>Papers Page (Em breve)</div>;
const Courses = () => <div style={{ paddingTop: '80px' }}>Courses Page (Em breve)</div>;

export default function Page(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/papers" element={<Papers />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </AppTheme>
  );
}