import { convert, formatNumber } from './convert.js';
import { unitName, unitPlural, titleAbbr, symbols, t } from '../i18n/utils.js';
import { pairPath, ogPath, locales } from '../i18n/slugs.js';
import { categories } from '../data/categories.js';
import { getPairCopy } from '../content/pairCopy.js';

// Texto derivado do dado, não de template retórico: título, fórmula e um
// exemplo resolvido. Nada aqui inventa prosa que não venha dos fatores.
export function buildPairCopy({ category, from, to, locale }) {
  const nFrom = unitName(from, locale);
  const nTo = unitName(to, locale);
  const sFrom = symbols[from];
  const sTo = symbols[to];
  const pFrom = unitPlural(from, locale);
  const pTo = unitPlural(to, locale);
  const aFrom = titleAbbr(from, locale);
  const aTo = titleAbbr(to, locale);
  const one = convert(1, category, from, to);
  const oneFmt = formatNumber(one, locale);

  const isTemp = categories[category].affine;

  const title = locale === 'de'
    ? `${nFrom} in ${nTo} (${aFrom} in ${aTo}) Umrechner`
    : `${pFrom} to ${pTo} (${sFrom} to ${sTo}) Converter`;

  const h1 = locale === 'de'
    ? `${nFrom} in ${nTo} umrechnen`
    : `Convert ${pFrom.toLowerCase()} to ${pTo.toLowerCase()}`;

  const description = isTemp
    ? (locale === 'de'
        ? `${nFrom} in ${nTo} umrechnen. Sofortiges Ergebnis, Formel und Umrechnungstabelle.`
        : `Convert ${nFrom} to ${nTo}. Instant result, formula and conversion table.`)
    : (locale === 'de'
        ? `1 ${sFrom} = ${oneFmt} ${sTo}. Sofortiges Ergebnis, Formel und Umrechnungstabelle.`
        : `1 ${sFrom} = ${oneFmt} ${sTo}. Instant result, formula and conversion table.`);

  const formula = isTemp
    ? temperatureFormula(from, to, locale)
    : (locale === 'de'
        ? `${nTo} = ${nFrom} × ${oneFmt}`
        : `${pTo} = ${pFrom} × ${oneFmt}`);

  const sample = isTemp ? 20 : 10;
  const worked = `${formatNumber(sample, locale)} ${sFrom} = ` +
    `${formatNumber(convert(sample, category, from, to), locale)} ${sTo}`;

  const alternates = locales.map(l => ({
    hreflang: l === 'de' ? 'de-DE' : 'en',
    href: new URL(pairPath(category, from, to, l), 'https://skalaconvert.com').href
  }));

  const ogImage = ogPath(category, from, to, locale);

  // Texto editorial escrito à mão, quando existir para este par.
  // Só em inglês por enquanto: a versão alemã é reescrita, não traduzida (Fase 4).
  const editorial = locale === 'en' ? getPairCopy(category, from, to) : null;
  const faqSchema = editorial ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: editorial.faq.map(([q, a]) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a }
    }))
  } : null;

  return {
    // O título e a descrição escritos à mão vencem os gerados, quando existirem
    title: editorial && !editorial.reversed ? editorial.title : title,
    description: editorial && !editorial.reversed ? editorial.description : description,
    h1, formula, worked, alternates, ogImage, oneFmt, sFrom, sTo,
    editorial, faqSchema
  };
}

function temperatureFormula(from, to, locale) {
  const map = {
    'celsius>fahrenheit': '°F = °C × 9/5 + 32',
    'fahrenheit>celsius': '°C = (°F − 32) × 5/9',
    'celsius>kelvin': 'K = °C + 273.15',
    'kelvin>celsius': '°C = K − 273.15',
    'fahrenheit>kelvin': 'K = (°F − 32) × 5/9 + 273.15',
    'kelvin>fahrenheit': '°F = (K − 273.15) × 9/5 + 32'
  };
  return map[`${from}>${to}`] ?? t('formula', locale);
}

// Linhas da tabela de conversão: valores que as pessoas realmente procuram.
export const tableSteps = [1, 2, 5, 10, 20, 25, 50, 100];
