import { TRENDING_PALETTES, defaultRoles, lightRoles, paletteToTokens, type PaletteMode } from './components/palettes';

/*
 * The app's two themes. Each is a Coolors palette (numbered as the tuner shows
 * them) applied in one mode. Light is the default.
 */
export type ThemeName = 'light' | 'dark';

const THEMES: Record<ThemeName, { palette: number; mode: PaletteMode }> = {
  light: { palette: 11, mode: 'light' },
  dark: { palette: 11, mode: 'dark' },
};

const STORAGE_KEY = 'ledger-theme';
const THEME_STYLE_ID = 'ledger-theme-tokens';

/**
 * Sets the colour tokens for a theme. They go in a <style> element rather than
 * inline styles, so brand-overrides.css can still override them (a more specific
 * selector wins). Runs before the first render so there is no flash.
 */
export function applyTheme(name: ThemeName): void {
  const { palette, mode } = THEMES[name];
  const colors = TRENDING_PALETTES[palette - 1] ?? [];
  const roles = mode === 'light' ? lightRoles(colors) : defaultRoles(colors);
  const map = paletteToTokens(colors, roles, mode);
  const root = document.documentElement;
  root.dataset.theme = name;
  root.style.colorScheme = name;

  let style = document.getElementById(THEME_STYLE_ID) as HTMLStyleElement | null;
  if (!style) {
    style = document.createElement('style');
    style.id = THEME_STYLE_ID;
    document.head.prepend(style);
  }
  const body = Object.entries(map).map(([n, v]) => `  ${n}: ${v};`).join('\n');
  // [data-theme] makes this selector more specific than the brand's own :root defaults,
  // so the theme wins. brand-overrides.css comes later with the same specificity, so it still wins.
  style.textContent = `:root[data-theme='${name}'] {\n${body}\n}`;
}

/** The theme the viewer chose last, or light. Storage can be blocked, so it is wrapped. */
export function loadTheme(): ThemeName {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'dark' ? 'dark' : 'light';
  } catch {
    return 'light';
  }
}

export function saveTheme(name: ThemeName): void {
  try {
    localStorage.setItem(STORAGE_KEY, name);
  } catch {
    // Storage is unavailable; the theme still applies for this visit.
  }
}
