/*
 * Palettes from https://coolors.co/palettes/trending (captured as shown on the
 * page; Coolors does not give them names, so they are numbered).
 *
 * paletteToTokens() turns any of them into the brand's colour tokens, so one
 * click fills in a whole theme. The brand is dark-only, so the darkest colour
 * becomes the background and the lightest becomes the text.
 */

export const TRENDING_PALETTES: string[][] = [
  ['#780000', '#C1121F', '#FDF0D5', '#003049', '#669BBC'],
  ['#606C38', '#283618', '#FEFAE0', '#DDA15E', '#BC6C25'],
  ['#CDB4DB', '#FFC8DD', '#FFAFCC', '#BDE0FE', '#A2D2FF'],
  ['#CAD2C5', '#84A98C', '#52796F', '#354F52', '#2F3E46'],
  ['#FFE5EC', '#FFC2D1', '#FFB3C6', '#FF8FAB', '#FB6F92'],
  ['#386641', '#6A994E', '#A7C957', '#F2E8CF', '#BC4749'],
  ['#CCD5AE', '#E9EDC9', '#FEFAE0', '#FAEDCD', '#D4A373'],
  ['#6F1D1B', '#BB9457', '#432818', '#99582A', '#FFE6A7'],
  ['#250902', '#38040E', '#640D14', '#800E13', '#AD2831'],
  ['#132A13', '#31572C', '#4F772D', '#90A955', '#ECF39E'],
  ['#22223B', '#4A4E69', '#9A8C98', '#C9ADA7', '#F2E9E4'],
  ['#03045E', '#023E8A', '#0077B6', '#0096C7', '#00B4D8', '#48CAE4', '#90E0EF', '#ADE8F4', '#CAF0F8'],
  ['#FFBE0B', '#FB5607', '#FF006E', '#8338EC', '#3A86FF'],
  ['#001219', '#005F73', '#0A9396', '#94D2BD', '#E9D8A6', '#EE9B00', '#CA6702', '#BB3E03', '#AE2012', '#9B2226'],
  ['#000814', '#001D3D', '#003566', '#FFC300', '#FFD60A'],
  ['#335C67', '#FFF3B0', '#E09F3E', '#9E2A2B', '#540B0E'],
  ['#CC8B86', '#F9EAE1', '#7D4F50', '#D1BE9C', '#AA998F'],
  ['#F9DBBD', '#FFA5AB', '#DA627D', '#A53860', '#450920'],
  ['#233D4D', '#FE7F2D', '#FCCA46', '#A1C181', '#619B8A'],
  ['#EF476F', '#FFD166', '#06D6A0', '#118AB2', '#073B4C'],
  ['#8ECAE6', '#219EBC', '#023047', '#FFB703', '#FB8500'],
  ['#03071E', '#370617', '#6A040F', '#9D0208', '#D00000', '#DC2F02', '#E85D04', '#F48C06', '#FAA307', '#FFBA08'],
  ['#5F0F40', '#9A031E', '#FB8B24', '#E36414', '#0F4C5C'],
  ['#957186', '#D9B8C4', '#703D57', '#402A2C', '#241715'],
  ['#D8E2DC', '#FFE5D9', '#FFCAD4', '#F4ACB7', '#9D8189'],
  ['#724319', '#D88180', '#F7B1B0', '#FEEAC7', '#CAD182'],
  ['#0081A7', '#00AFB9', '#FDFCDC', '#FED9B7', '#F07167'],
  ['#0D1B2A', '#1B263B', '#415A77', '#778DA9', '#E0E1DD'],
  ['#DAD7CD', '#A3B18A', '#588157', '#3A5A40', '#344E41'],
  ['#000000', '#14213D', '#FCA311', '#E5E5E5', '#FFFFFF'],
  ['#264653', '#2A9D8F', '#E9C46A', '#F4A261', '#E76F51'],
  ['#590D22', '#800F2F', '#A4133C', '#C9184A', '#FF4D6D', '#FF758F', '#FF8FA3', '#FFB3C1', '#FFCCD5', '#FFF0F3'],
  ['#582F0E', '#7F4F24', '#936639', '#A68A64', '#B6AD90', '#C2C5AA', '#A4AC86', '#656D4A', '#414833', '#333D29'],
  ['#E63946', '#F1FAEE', '#A8DADC', '#457B9D', '#1D3557'],
  ['#FFADAD', '#FFD6A5', '#FDFFB6', '#CAFFBF', '#9BF6FF', '#A0C4FF', '#BDB2FF', '#FFC6FF', '#FFFFFC'],
  ['#03045E', '#0077B6', '#00B4D8', '#90E0EF', '#CAF0F8'],
  ['#FFFCF2', '#CCC5B9', '#403D39', '#252422', '#EB5E28'],
  ['#EDE0D4', '#E6CCB2', '#DDB892', '#B08968', '#7F5539', '#9C6644'],
  ['#390099', '#9E0059', '#FF0054', '#FF5400', '#FFBD00'],
  ['#C9E4CA', '#87BBA2', '#55828B', '#3B6064', '#364958'],
  ['#FFCDB2', '#FFB4A2', '#E5989B', '#B5838D', '#6D6875'],
  ['#6D85A3', '#E84D2D', '#FDE59C', '#7F8937', '#1C4E65'],
  ['#F72585', '#7209B7', '#3A0CA3', '#4361EE', '#4CC9F0'],
  ['#780116', '#F7B538', '#DB7C26', '#D8572A', '#C32F27'],
  ['#3D348B', '#7678ED', '#F7B801', '#F18701', '#F35B04'],
  ['#0B2027', '#40798C', '#70A9A1', '#CFD7C7', '#F6F1D1'],
  ['#A2A77F', '#E3E7AF', '#EFF1C5', '#035E7B', '#002E2C'],
];

type RGB = [number, number, number];

const toRgb = (hex: string): RGB => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16)) as RGB;

const toHex = (c: RGB): string =>
  '#' + c.map((v) => Math.round(Math.min(255, Math.max(0, v))).toString(16).padStart(2, '0')).join('').toUpperCase();

const mix = (a: string, b: string, t: number): string => {
  const A = toRgb(a);
  const B = toRgb(b);
  return toHex(A.map((v, i) => v + ((B[i] ?? 0) - v) * t) as RGB);
};

export const luma = (hex: string): number => {
  const [r, g, b] = toRgb(hex).map((v) => v / 255);
  return 0.2126 * (r ?? 0) + 0.7152 * (g ?? 0) + 0.0722 * (b ?? 0);
};

/** Returns [hue in degrees, saturation 0-1, lightness 0-1]. */
const hsl = (hex: string): [number, number, number] => {
  const [r, g, b] = toRgb(hex).map((v) => v / 255) as RGB;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) return [0, 0, l];
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h: number;
  if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
  else if (max === g) h = (b - r) / d + 2;
  else h = (r - g) / d + 4;
  return [h * 60, s, l];
};

/** The most saturated colour whose hue falls in [from, to], if it is vivid enough. */
const pickHue = (colors: string[], from: number, to: number): string | undefined => {
  let best: { c: string; s: number } | undefined;
  for (const c of colors) {
    const [h, s] = hsl(c);
    const inRange = from <= to ? h >= from && h <= to : h >= from || h <= to;
    if (inRange && s >= 0.3 && (!best || s > best.s)) best = { c, s };
  }
  return best?.c;
};

/** Lifts a colour toward white when it would be too dark to read on the dark background. */
const readable = (c: string): string => (luma(c) < 0.5 ? mix(c, '#FFFFFF', 0.5) : c);

const DEFAULT_STATE = {
  info: '#C3CFD5',
  danger: '#E68A8D',
  success: '#A3C48A',
  warning: '#DDB45E',
};

/** The colours a palette fills in. Each one is a role in the brand. */
export interface PaletteRoles {
  background: string;
  text: string;
  primary: string;
  info: string;
  danger: string;
  success: string;
  warning: string;
}

const ROLE_NAMES: (keyof PaletteRoles)[] = ['background', 'text', 'primary', 'info', 'danger', 'success', 'warning'];

/** Picks roles by meaning: darkest is the background, hue matches the states. */
export function defaultRoles(colors: string[]): PaletteRoles {
  const sorted = [...colors].sort((a, b) => luma(a) - luma(b));
  const accent =
    colors.filter((c) => hsl(c)[1] >= 0.3 && luma(c) > 0.2 && luma(c) < 0.8)
      .sort((a, b) => hsl(b)[1] - hsl(a)[1])[0] ?? sorted[Math.floor(sorted.length / 2)] ?? '#9AA390';
  return {
    background: sorted[0] ?? '#131212',
    text: sorted[sorted.length - 1] ?? '#F0EADA',
    primary: accent,
    info: pickHue(colors, 190, 250) ?? DEFAULT_STATE.info,
    danger: pickHue(colors, 340, 20) ?? DEFAULT_STATE.danger,
    warning: pickHue(colors, 30, 55) ?? DEFAULT_STATE.warning,
    success: pickHue(colors, 80, 160) ?? DEFAULT_STATE.success,
  };
}

/** Deals the palette's colours to the roles in a random order. Repeats if the palette is short. */
export function shuffledRoles(colors: string[]): PaletteRoles {
  const deck = [...colors];
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j] ?? '', deck[i] ?? ''];
  }
  const out = {} as PaletteRoles;
  ROLE_NAMES.forEach((role, i) => {
    out[role] = deck[i % deck.length] ?? '#131212';
  });
  return out;
}

/**
 * Light-theme version of a palette, for preview only. The lightest colour
 * becomes the background, the darkest becomes the text, and the same
 * accent and state colours are used. Returned in the same role order as
 * PaletteRoles so the variant chips line up.
 */
export function lightRoles(colors: string[]): PaletteRoles {
  const base = defaultRoles(colors);
  const sorted = [...colors].sort((a, b) => luma(a) - luma(b));
  const darkest = sorted[0] ?? '#131212';
  const lightest = sorted[sorted.length - 1] ?? '#F0EADA';
  return {
    background: luma(lightest) > 0.8 ? lightest : mix(lightest, '#FFFFFF', 0.6),
    text: luma(darkest) < 0.25 ? darkest : mix(darkest, '#000000', 0.6),
    primary: mix(base.primary, '#000000', 0.2),
    info: base.info,
    danger: base.danger,
    success: base.success,
    warning: base.warning,
  };
}

/**
 * Maps a palette's roles onto every colour token the brand uses.
 * Pass roles from defaultRoles() or shuffledRoles(). Returns a map keyed by
 * CSS variable name, ready to set on :root.
 */
export type PaletteMode = 'dark' | 'light';

/** WCAG relative luminance (not the simple luma used for sorting above). */
const relLum = (hex: string): number => {
  const [r, g, b] = toRgb(hex).map((v) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  }) as RGB;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

/** WCAG contrast ratio between two colours, 1 to 21. */
export const contrast = (a: string, b: string): number => {
  const la = relLum(a);
  const lb = relLum(b);
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
};

/**
 * Moves `fg` away from the surfaces (toward black on light ones, white on dark ones)
 * until it reaches `min` contrast against every surface. Returns the first step that passes.
 */
const ensureContrast = (fg: string, surfaces: string[], min: number): string => {
  const pull = relLum(surfaces[0] ?? '#000000') > 0.18 ? '#000000' : '#FFFFFF';
  for (let t = 0; t <= 1; t += 0.02) {
    const candidate = mix(fg, pull, t);
    if (surfaces.every((s) => contrast(candidate, s) >= min)) return candidate;
  }
  return pull;
};

/**
 * Maps a palette's roles onto every colour token the brand uses. Text meets
 * WCAG AA (4.5:1) on the surfaces it sits on, and edges and controls meet 3:1.
 * Returns a map keyed by CSS variable name, ready to set on :root.
 */
export function paletteToTokens(
  colors: string[],
  roles: PaletteRoles = defaultRoles(colors),
  mode: PaletteMode = 'dark',
): Record<string, string> {
  // Dark mode (the brand): keep the background dark and the text light, whatever role they were dealt.
  // Light mode: use the roles as they are.
  const bg = mode === 'dark' && luma(roles.background) > 0.25 ? mix(roles.background, '#000000', 0.8) : roles.background;
  const textRaw = mode === 'dark' && luma(roles.text) < 0.6 ? mix(roles.text, '#FFFFFF', 0.75) : roles.text;

  const surface = mix(bg, textRaw, 0.07);
  const surfaceRaised = mix(bg, textRaw, 0.04);
  const surfaces = [bg, surfaceRaised, surface];

  const text = ensureContrast(textRaw, surfaces, 4.5);
  // Primary is also the button fill, so it needs 4.5:1 against the background. In light mode that
  // makes it darker, so the light button text (text-inverse) reads clearly on it.
  const primary = ensureContrast(readable(roles.primary), surfaces, 4.5);
  const primaryHover = ensureContrast(mix(primary, text, 0.25), surfaces, 4.5);

  // Text on a primary button: the background colour if it reads, otherwise darken/lighten it until it does.
  const inverse = contrast(bg, primary) >= 4.5 ? bg : ensureContrast(bg, [primary], 4.5);

  const muted = ensureContrast(mix(text, bg, 0.25), surfaces, 4.5);
  const faint = ensureContrast(mix(text, bg, 0.4), surfaces, 4.5);

  // State text sits on its own tinted background (the -soft colour). Ink is pulled
  // to 4.5:1 on the surfaces, then the tint is weakened until the ink reads on it.
  const state = (name: string, c: string) => {
    const ink = ensureContrast(readable(c), surfaces, 4.5);
    const tint = [0.14, 0.1, 0.07, 0.04, 0].map((k) => mix(bg, ink, k)).find((t) => contrast(ink, t) >= 4.5) ?? bg;
    return {
      [`--color-${name}`]: ink,
      [`--color-${name}-soft`]: tint,
      [`--color-${name}-rule`]: mix(bg, ink, 0.45),
    };
  };

  return {
    '--color-background': bg,
    '--color-cream': text,
    '--color-surface-sunk': mix(bg, '#000000', 0.3),
    '--color-surface': surface,
    '--color-surface-raised': surfaceRaised,
    '--color-surface-khaki': mix(bg, primary, 0.25),
    '--color-border': mix(bg, text, 0.18),
    '--color-border-strong': ensureContrast(mix(bg, text, 0.42), [bg], 3),
    '--color-border-hover': ensureContrast(mix(bg, text, 0.6), [bg], 3),
    '--color-text': text,
    '--color-text-muted': muted,
    '--color-text-faint': faint,
    '--color-text-inverse': inverse,
    '--color-primary': primary,
    '--color-primary-hover': primaryHover,
    '--color-primary-soft': mix(bg, primary, 0.14),
    '--color-primary-rule': mix(bg, primary, 0.45),
    '--color-scrim': 'rgba(0, 0, 0, 0.6)',
    ...state('info', roles.info),
    ...state('danger', roles.danger),
    ...state('success', roles.success),
    ...state('warning', roles.warning),
  };
}
