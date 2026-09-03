import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { routes } from '../../data/pairs.js';
import { categorySlugs, pairSlug, locales } from '../../i18n/slugs.js';
import { cardTemplate, defaultCardTemplate } from '../../lib/og.js';
import { fonts } from '../../lib/og-fonts.js';

export function getStaticPaths() {
  const pairCards = locales.flatMap(locale =>
    routes.map(r => ({
      params: {
        slug: locale === 'en'
          ? `${categorySlugs[locale][r.category]}/${pairSlug(r.from, r.to, locale)}`
          : `${locale}/${categorySlugs[locale][r.category]}/${pairSlug(r.from, r.to, locale)}`
      },
      props: { ...r, locale, kind: 'pair' }
    }))
  );

  const defaults = locales.map(locale => ({
    params: { slug: locale === 'en' ? 'default' : `${locale}/default` },
    props: { locale, kind: 'default' }
  }));

  return [...pairCards, ...defaults];
}

export async function GET({ props }) {
  const tree = props.kind === 'pair' ? cardTemplate(props) : defaultCardTemplate(props);
  const svg = await satori(tree, { width: 1200, height: 630, fonts });
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();

  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable'
    }
  });
}
