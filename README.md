# eurovan-03

Blank Vite + React + TypeScript project carrying the same styling as the Reseller Ledger:
brand tokens (src/brand/tokens.css), Instrument Serif / DM Sans / DM Mono fonts,
the 11th Coolors palette in light and dark themes, and the masthead/shell classes.

## Run

```bash
npm install
npm run dev
```

## Styling

- `src/brand-bridge.css` maps the app's variables onto the shared brand tokens.
- `src/brand-overrides.css` is for tuning this app only; it loads last.
- `src/styles.css` holds layout and type rules.
- `src/theme.ts` and `src/components/palettes.ts` set the colour theme (light by default).
