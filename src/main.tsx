import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { applyTheme, loadTheme } from './theme';
import '@fontsource/instrument-serif/400.css';
import '@fontsource/instrument-serif/400-italic.css';
import '@fontsource-variable/dm-sans/wght.css';
import '@fontsource/dm-mono/400.css';
import './brand-bridge.css';
import './styles.css';
import './brand-overrides.css';

const root = document.getElementById('root');
if (!root) throw new Error('missing #root');

applyTheme(loadTheme());

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
