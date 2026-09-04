import { convert, formatNumber } from './convert.js';
import { symbols, t, unitName, unitPlural } from '../i18n/utils.js';

// Tokens espelhados de src/styles/global.css (tema claro).
const C = {
  surface: '#FAFAFA',
  raised: '#FFFFFF',
  text: '#0A1633',
  muted: '#55658A',
  border: '#DCE4F2',
  accent: '#1D4ED8',
  accentDeep: '#132C7A',
  bandFrom: '#F2F6FE',
  bandTo: '#D6E3FB'
};

const el = (type, props, ...children) => ({
  type,
  props: { ...props, children: children.length > 1 ? children : children[0] }
});

// O card mostra a conversão, não um logotipo. É a diferença entre
// o link parecer um site e parecer a resposta.
export function cardTemplate({ category, from, to, locale }) {
  const one = convert(1, category, from, to);
  const equation = `1 ${symbols[from]} = ${formatNumber(one, locale)} ${symbols[to]}`;
  const heading = locale === 'es'
    ? `${unitPlural(from, locale)} a ${unitPlural(to, locale)}`
    : `${unitPlural(from, locale)} to ${unitPlural(to, locale)}`;
  const categoryName = t(`categories.${category}`, locale);

  // A equação nunca pode quebrar em duas linhas. Em monoespaçada a largura do
  // glifo é ~0.6em, então o tamanho sai da largura útil, não da contagem de
  // caracteres: "1 mph = 1,609344 km/h" tem 21 caracteres e não cabe a 92px.
  const AVAILABLE = 940;
  const eqSize = Math.max(34, Math.min(92, Math.floor(AVAILABLE / (equation.length * 0.6))));

  return el('div', {
    style: {
      width: '1200px', height: '630px', display: 'flex', flexDirection: 'column',
      background: C.surface, fontFamily: 'IBM Plex Sans', padding: '64px 72px',
      justifyContent: 'space-between'
    }
  },
    // topo: marca
    el('div', { style: { display: 'flex', alignItems: 'center', gap: '14px' } },
      el('div', {
        style: {
          width: '46px', height: '24px', border: `3px solid ${C.accent}`,
          borderRadius: '5px', display: 'flex', alignItems: 'flex-start',
          justifyContent: 'space-around', paddingTop: '0px'
        }
      },
        ...[10, 14, 10, 14].map(h =>
          el('div', { style: { display: 'flex', width: '3px', height: `${h}px`, background: C.accent } })
        )
      ),
      el('div', { style: { display: 'flex', fontSize: '30px', color: C.text, fontWeight: 600 } }, 'Skala'),
      el('div', { style: { display: 'flex', fontSize: '30px', color: C.muted } }, 'Convert')
    ),

    // centro: a equação
    el('div', {
      style: {
        display: 'flex', flexDirection: 'column', gap: '22px',
        background: `linear-gradient(120deg, ${C.bandFrom} 0%, ${C.bandTo} 100%)`,
        border: `1px solid ${C.border}`, borderRadius: '18px', padding: '48px 52px'
      }
    },
      el('div', {
        style: {
          display: 'flex', fontSize: '26px', color: C.muted, letterSpacing: '2px',
          textTransform: 'uppercase'
        }
      }, categoryName),
      el('div', {
        style: {
          display: 'flex', fontSize: `${eqSize}px`, color: C.accentDeep,
          fontFamily: 'IBM Plex Mono', fontWeight: 600, letterSpacing: '-1px'
        }
      }, equation)
    ),

    // rodapé: nome do par + domínio
    el('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' } },
      el('div', { style: { display: 'flex', fontSize: '34px', color: C.text, fontWeight: 600 } }, heading),
      el('div', { style: { display: 'flex', fontSize: '26px', color: C.muted } }, 'skalaconvert.com')
    )
  );
}

// Card do hub e das páginas de categoria — sem equação específica.
export function defaultCardTemplate({ locale = 'en' } = {}) {
  return el('div', {
    style: {
      width: '1200px', height: '630px', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', alignItems: 'center', gap: '24px',
      background: `linear-gradient(120deg, ${C.bandFrom} 0%, ${C.bandTo} 100%)`,
      fontFamily: 'IBM Plex Sans'
    }
  },
    el('div', {
      style: { display: 'flex', fontSize: '84px', color: C.accentDeep, fontWeight: 600 }
    }, 'Skala Convert'),
    el('div', {
      style: { display: 'flex', fontSize: '34px', color: C.muted, fontFamily: 'IBM Plex Mono' }
    }, t('tagline', locale))
  );
}
