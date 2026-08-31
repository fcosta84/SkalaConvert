export const locales = ['en', 'de'];

export const categorySlugs = {
  en: { length: 'length', mass: 'weight', temperature: 'temperature',
        area: 'area', volume: 'volume', time: 'time',
        pressure: 'pressure', energy: 'energy', speed: 'speed' },
  de: { length: 'laenge', mass: 'gewicht', temperature: 'temperatur',
        area: 'flaeche', volume: 'volumen', time: 'zeit',
        pressure: 'druck', energy: 'energie', speed: 'geschwindigkeit' }
};

export const pairConnector = { en: 'to', de: 'in' };

// Eszett fora da URL: "fuß" vira %C3%9F e polui o link compartilhado em chat.
export const unitSlugs = {
  en: { inch: 'inches', centimeter: 'cm', pound: 'lbs', kilogram: 'kg',
        foot: 'feet', meter: 'meters', mile: 'miles', kilometer: 'km',
        millimeter: 'mm', yard: 'yards', psi: 'psi', bar: 'bar',
        milePerHour: 'mph', kilometerPerHour: 'kph', gallonUS: 'gallons',
        liter: 'liters', microgram: 'micrograms', gram: 'grams',
        deciliter: 'deciliters', milliliter: 'milliliters',
        kiloliter: 'kiloliters', celsius: 'celsius', fahrenheit: 'fahrenheit' },
  de: { inch: 'zoll', centimeter: 'cm', pound: 'pfund', kilogram: 'kg',
        foot: 'fuss', meter: 'meter', mile: 'meilen', kilometer: 'km',
        millimeter: 'mm', yard: 'yard', psi: 'psi', bar: 'bar',
        milePerHour: 'mph', kilometerPerHour: 'kmh', gallonUS: 'gallonen',
        liter: 'liter', microgram: 'mikrogramm', gram: 'gramm',
        deciliter: 'deziliter', milliliter: 'milliliter',
        kiloliter: 'kiloliter', celsius: 'celsius', fahrenheit: 'fahrenheit' }
};

export function pairSlug(from, to, locale) {
  const u = unitSlugs[locale];
  return `${u[from]}-${pairConnector[locale]}-${u[to]}`;
}

export function categoryPath(categoryKey, locale) {
  const base = locale === 'en' ? '' : `/${locale}`;
  return `${base}/${categorySlugs[locale][categoryKey]}/`;
}

export function pairPath(categoryKey, from, to, locale) {
  return `${categoryPath(categoryKey, locale)}${pairSlug(from, to, locale)}/`;
}

// Caminho do card OG gerado no build (src/pages/og/[...slug].png.js)
export function ogPath(categoryKey, from, to, locale) {
  const prefix = locale === 'en' ? '/og' : `/og/${locale}`;
  return `${prefix}/${categorySlugs[locale][categoryKey]}/${pairSlug(from, to, locale)}.png`;
}

export function ogDefaultPath(locale) {
  return locale === 'en' ? '/og/default.png' : `/og/${locale}/default.png`;
}
