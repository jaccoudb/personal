import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route } from 'react-router-dom'; // Remove BrowserRouter da importação
import AppTheme from './shared-theme/AppTheme';
import AppAppBar from './components/AppAppBar';
import Home from './components/home/Home';
import Resume from './components/resume/Resume';
import Research from './components/research/Research';
import Publications from './components/publication/Publications';
import AdvisedStudents from './components/students/AdvisedStudents';
import Courses from './components/students/Courses';
import ScrollToTop from './components/ScrollToTop';
import CourseMaterialsPage from './pages/course-materials/CourseMaterialsPage';

// Placeholders para páginas que serão criadas

export default function Page(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <AppAppBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/research" element={<Research />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/advised" element={<AdvisedStudents />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/materials" element={<CourseMaterialsPage />} />
      </Routes>

       <ScrollToTop />
    </AppTheme>
  );
}
