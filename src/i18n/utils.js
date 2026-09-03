import en from './en.js';
import es from './es.js';

const dicts = { en, es };

// Símbolos são internacionais — não se traduzem.
export const symbols = {
  meter: 'm', kilometer: 'km', decimeter: 'dm', centimeter: 'cm',
  millimeter: 'mm', micrometer: 'µm', nanometer: 'nm', mile: 'mi', yard: 'yd',
  foot: 'ft', inch: 'in', nauticalMile: 'nmi', lightYear: 'ly',
  kilogram: 'kg', gram: 'g', milligram: 'mg', microgram: 'µg', tonne: 't',
  pound: 'lb', ounce: 'oz', stone: 'st',
  celsius: '°C', fahrenheit: '°F', kelvin: 'K',
  squareMeter: 'm²', squareKilometer: 'km²', squareCentimeter: 'cm²',
  squareMile: 'mi²', squareYard: 'yd²', squareFoot: 'ft²', squareInch: 'in²',
  hectare: 'ha', acre: 'ac',
  liter: 'l', milliliter: 'ml', deciliter: 'dl', kiloliter: 'kl',
  cubicMeter: 'm³', cubicCentimeter: 'cm³', gallonUS: 'gal', gallonUK: 'gal',
  quartUS: 'qt', pintUS: 'pt', fluidOunceUS: 'fl oz', cupUS: 'cup', cupMetric: 'cup',
  second: 's', millisecond: 'ms', minute: 'min', hour: 'h', day: 'd',
  week: 'wk', month30: 'mo', year365: 'yr',
  pascal: 'Pa', kilopascal: 'kPa', bar: 'bar', millibar: 'mbar', psi: 'psi',
  atmosphere: 'atm', torr: 'Torr',
  joule: 'J', kilojoule: 'kJ', calorie: 'cal', kilocalorie: 'kcal',
  wattHour: 'Wh', kilowattHour: 'kWh', electronvolt: 'eV', btu: 'BTU',
  footPound: 'ft·lb',
  meterPerSecond: 'm/s', kilometerPerHour: 'km/h', milePerHour: 'mph',
  footPerSecond: 'ft/s', knot: 'kn'
};

export function t(key, locale = 'en') {
  const dict = dicts[locale] ?? dicts.en;
  const value = key.split('.').reduce((acc, k) => (acc == null ? acc : acc[k]), dict);
  return value ?? key;
}

export function unitName(unitKey, locale = 'en') {
  return t(`units.${unitKey}`, locale);
}

// Plural correto em inglês: "Inches", não "Inchs".
export function unitPlural(unitKey, locale = 'en') {
  const dict = dicts[locale] ?? dicts.en;
  return dict.unitsPlural?.[unitKey] ?? unitName(unitKey, locale);
}

// No título alemão a forma escrita vale mais que o símbolo: "Zoll in cm", não "in in cm".
export function titleAbbr(unitKey, locale = 'en') {
  const dict = dicts[locale] ?? dicts.en;
  return dict.titleAbbr?.[unitKey] ?? symbols[unitKey] ?? unitName(unitKey, locale);
}

export function unitLabel(unitKey, locale = 'en') {
  const sym = symbols[unitKey];
  const name = unitName(unitKey, locale);
  return sym && sym !== name ? `${name} (${sym})` : name;
}

export function htmlLang(locale) {
  return locale === 'es' ? 'es' : 'en';
}
