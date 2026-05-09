import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Page from './App';
import './i18n';

document.documentElement.setAttribute(
  'data-mui-color-scheme',
  'light'
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <Page />
  </BrowserRouter>
);