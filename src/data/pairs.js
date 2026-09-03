// volume = busca mensal agregada DE+SE+DK observada na amostra de keywords.
export const pairs = [
  { category: 'length',      from: 'inch',        to: 'centimeter',       volume: 291200 },
  { category: 'mass',        from: 'pound',       to: 'kilogram',         volume: 163000 },
  { category: 'length',      from: 'foot',        to: 'centimeter',       volume: 64800 },
  { category: 'volume',      from: 'kiloliter',   to: 'liter',            volume: 60500 },
  { category: 'length',      from: 'mile',        to: 'kilometer',        volume: 54500 },
  { category: 'mass',        from: 'microgram',   to: 'gram',             volume: 49500 },
  { category: 'length',      from: 'foot',        to: 'meter',            volume: 47300 },
  { category: 'length',      from: 'millimeter',  to: 'centimeter',       volume: 41500 },
  { category: 'pressure',    from: 'psi',         to: 'bar',              volume: 36700 },
  { category: 'speed',       from: 'milePerHour', to: 'kilometerPerHour', volume: 33400 },
  { category: 'length',      from: 'centimeter',  to: 'meter',            volume: 22200 },
  { category: 'volume',      from: 'gallonUS',    to: 'liter',            volume: 21100 },
  { category: 'length',      from: 'inch',        to: 'millimeter',       volume: 17700 },
  { category: 'volume',      from: 'deciliter',   to: 'milliliter',       volume: 15700 },
  { category: 'length',      from: 'millimeter',  to: 'meter',            volume: 14800 },
  { category: 'length',      from: 'yard',        to: 'meter',            volume: 14800 },
  // Adicionados a partir do levantamento em espanhol (MX/ES, set/2026):
  // cozinha é o maior bloco de demanda hispanofalante ainda descoberto.
  { category: 'volume',      from: 'fluidOunceUS', to: 'milliliter',      volume: 61800 },
  { category: 'mass',        from: 'ounce',        to: 'gram',            volume: 39700 },
  // Decisão editorial, não orientada pela amostra: o concorrente não ranqueia
  // para este par nesses mercados, mas é das conversões mais buscadas do mundo.
  { category: 'temperature', from: 'celsius',     to: 'fahrenheit',       volume: null }
];

// Direção importa: inches-to-cm e cm-to-inches ranqueiam separadamente.
export const routes = pairs.flatMap(p => [
  { ...p },
  { ...p, from: p.to, to: p.from }
]);

// Fase 2 = os 10 pares de maior volume nos dois sentidos.
export const phase2 = routes.filter(r =>
  pairs.slice(0, 10).some(p =>
    (p.from === r.from && p.to === r.to) || (p.from === r.to && p.to === r.from)
  )
);
