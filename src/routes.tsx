// AppRoutes.tsx
import { Route } from 'react-router-dom';
import Home from './components/home/Home';
import Publications from './components/publication/Publications';
import Research from './components/research/Research';
import Resume from './components/resume/Resume';
import AdvisedStudents from './components/students/AdvisedStudents';
import Courses from './components/students/Courses';
import CourseMaterialsPage from './pages/course-materials/CourseMaterialsPage';

export const routes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/resume" element={<Resume />} />
    <Route path="/research" element={<Research />} />
    <Route path="/publications" element={<Publications />} />
    <Route path="/advised" element={<AdvisedStudents />} />
    <Route path="/courses" element={<Courses />} />
    <Route path="/courses/materials" element={<CourseMaterialsPage />} />
    <Route path="/courses/:slug/materials" element={<CourseMaterialsPage />} />
  </>
);
