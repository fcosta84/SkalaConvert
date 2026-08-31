import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

// Fontes vêm do node_modules (@fontsource) e são lidas só no build.
// Satori não lê woff2 — usar .woff.
function load(pkg, file) {
  return readFileSync(require.resolve(`${pkg}/files/${file}`));
}

export const fonts = [
  {
    name: 'IBM Plex Sans',
    data: load('@fontsource/ibm-plex-sans', 'ibm-plex-sans-latin-400-normal.woff'),
    weight: 400,
    style: 'normal'
  },
  {
    name: 'IBM Plex Sans',
    data: load('@fontsource/ibm-plex-sans', 'ibm-plex-sans-latin-600-normal.woff'),
    weight: 600,
    style: 'normal'
  },
  {
    name: 'IBM Plex Mono',
    data: load('@fontsource/ibm-plex-mono', 'ibm-plex-mono-latin-600-normal.woff'),
    weight: 600,
    style: 'normal'
  }
];
