export const locales = ['en', 'es'];

export const categorySlugs = {
  en: { length: 'length', mass: 'weight', temperature: 'temperature',
        area: 'area', volume: 'volume', time: 'time',
        pressure: 'pressure', energy: 'energy', speed: 'speed' },
  es: { length: 'longitud', mass: 'peso', temperature: 'temperatura',
        area: 'superficie', volume: 'volumen', time: 'tiempo',
        pressure: 'presion', energy: 'energia', speed: 'velocidad' }
};

export const pairConnector = { en: 'to', es: 'a' };

// Sem acentos nem eñe na URL: "presión" vira %C3%B3 e polui o link
// compartilhado em chat. O texto visível na página usa a grafia correta.
export const unitSlugs = {
  en: { inch: 'inches', centimeter: 'cm', pound: 'lbs', kilogram: 'kg',
        foot: 'feet', meter: 'meters', mile: 'miles', kilometer: 'km',
        millimeter: 'mm', yard: 'yards', psi: 'psi', bar: 'bar',
        milePerHour: 'mph', kilometerPerHour: 'kph', gallonUS: 'gallons',
        liter: 'liters', microgram: 'micrograms', gram: 'grams',
        deciliter: 'deciliters', milliliter: 'milliliters',
        kiloliter: 'kiloliters', celsius: 'celsius', fahrenheit: 'fahrenheit',
        ounce: 'ounces', fluidOunceUS: 'fluid-ounces' },
  es: { inch: 'pulgadas', centimeter: 'cm', pound: 'libras', kilogram: 'kg',
        foot: 'pies', meter: 'metros', mile: 'millas', kilometer: 'km',
        millimeter: 'mm', yard: 'yardas', psi: 'psi', bar: 'bar',
        milePerHour: 'mph', kilometerPerHour: 'kmh', gallonUS: 'galones',
        liter: 'litros', microgram: 'microgramos', gram: 'gramos',
        deciliter: 'decilitros', milliliter: 'ml',
        kiloliter: 'kilolitros', celsius: 'centigrados', fahrenheit: 'fahrenheit',
        ounce: 'onzas', fluidOunceUS: 'onzas-liquidas' }
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

// Caminhos institucionais por idioma — o slug faz parte da localização.
export const pagePaths = {
  en: { about: '/about/', contact: '/contact/',
        privacy: '/privacy-policy/', terms: '/terms-of-use/' },
  es: { about: '/es/acerca-de/', contact: '/es/contacto/',
        privacy: '/es/politica-de-privacidad/', terms: '/es/terminos-de-uso/' }
};

export function hreflang(locale) {
  return locale === 'es' ? 'es' : 'en';
}
