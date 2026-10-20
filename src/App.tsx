import { useState } from 'react';
import { applyTheme, loadTheme, saveTheme, type ThemeName } from './theme';
import { AuthGate, signOut } from './auth/AuthGate';

function Shell() {
  const [theme, setTheme] = useState<ThemeName>(() => loadTheme());

  const toggleTheme = () => {
    const next: ThemeName = theme === 'light' ? 'dark' : 'light';
    saveTheme(next);
    applyTheme(next);
    setTheme(next);
  };

  return (
    <div className="shell">
      <header className="masthead">
        <span className="wordmark">eurovan-03</span>
        <span className="meta">
          <button type="button" className="link" onClick={toggleTheme}>
            {theme === 'light' ? 'Dark mode' : 'Light mode'}
          </button>
          <button type="button" className="link" onClick={() => { void signOut(); }}>Sign out</button>
        </span>
      </header>
      <main>
        <h1>eurovan-03</h1>
        <p>Blank project using the Reseller Ledger styling.</p>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <AuthGate>
      <Shell />
    </AuthGate>
  );
}
