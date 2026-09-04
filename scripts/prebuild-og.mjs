/**
 * Gera os cards OG como assets estáticos em public/og/ ANTES do build do Astro.
 * Isso faz os PNGs serem servidos diretamente como arquivos, sem passar pelo
 * roteamento do Astro (que adiciona trailingSlash e causa redirect).
 *
 * Rodar: node scripts/prebuild-og.mjs
 * O package.json chama isso automaticamente via "prebuild".
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { routes } from '../src/data/pairs.js';
import { categorySlugs, pairSlug } from '../src/i18n/slugs.js';
import { cardTemplate, defaultCardTemplate } from '../src/lib/og.js';
import { fonts } from '../src/lib/og-fonts.js';

const locales = ['en', 'es'];

async function generate(tree, outPath) {
  const svg = await satori(tree, { width: 1200, height: 630, fonts });
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, png);
}

let count = 0;
for (const locale of locales) {
  for (const r of routes) {
    const catSlug = categorySlugs[locale][r.category];
    const ps = pairSlug(r.from, r.to, locale);
    const prefix = locale === 'en' ? 'public/og' : `public/og/${locale}`;
    const path = `${prefix}/${catSlug}/${ps}.png`;
    await generate(cardTemplate({ ...r, locale }), path);
    count++;
  }

  const defPath = locale === 'en' ? 'public/og/default.png' : `public/og/${locale}/default.png`;
  await generate(defaultCardTemplate({ locale }), defPath);
  count++;
}

console.log(`✓ ${count} OG cards generated in public/og/`);
