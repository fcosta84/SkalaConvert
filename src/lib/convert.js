import { categories } from '../data/categories.js';

export function convert(value, categoryKey, from, to) {
  if (!Number.isFinite(value)) return NaN;
  const cat = categories[categoryKey];
  if (!cat) return NaN;
  if (cat.affine) return convertTemperature(value, from, to);
  return (value * cat.units[from]) / cat.units[to];
}

const toCelsius = {
  celsius: v => v,
  fahrenheit: v => ((v - 32) * 5) / 9,
  kelvin: v => v - 273.15
};
const fromCelsius = {
  celsius: c => c,
  fahrenheit: c => (c * 9) / 5 + 32,
  kelvin: c => c + 273.15
};

function convertTemperature(value, from, to) {
  return fromCelsius[to](toCelsius[from](value));
}

export function formatNumber(num, locale = 'en') {
  if (!Number.isFinite(num)) return '';
  if (num === 0) return '0';

  const abs = Math.abs(num);
  if (abs < 1e-6 || abs >= 1e12) {
    const [mantissa, exp] = num.toExponential(6).split('e');
    const m = new Intl.NumberFormat(locale, { maximumFractionDigits: 6 })
      .format(parseFloat(mantissa));
    return `${m}\u00D710${toSuperscript(exp)}`;
  }

  const digits = abs >= 100 ? 4 : abs >= 1 ? 6 : 9;
  return new Intl.NumberFormat(locale, {
    maximumFractionDigits: digits,
    useGrouping: abs >= 10000
  }).format(num);
}

const SUP = {
  '-': '\u207B', '+': '', 0: '\u2070', 1: '\u00B9', 2: '\u00B2', 3: '\u00B3',
  4: '\u2074', 5: '\u2075', 6: '\u2076', 7: '\u2077', 8: '\u2078', 9: '\u2079'
};
function toSuperscript(exp) {
  return [...exp].map(c => SUP[c] ?? c).join('');
}

// Alemão digita "1,5". Sem isto, vira 1 e o usuário conclui que a conta está errada.
export function parseInput(raw) {
  if (typeof raw !== 'string') return NaN;
  return parseFloat(raw.trim().replace(/\s/g, '').replace(',', '.'));
}
