import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import Page from './App';

document.documentElement.setAttribute(
  'data-mui-color-scheme',
  'light'
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <Page />
  </HashRouter>
);