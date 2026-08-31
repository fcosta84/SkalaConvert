# Skala Convert

Conversor de unidades estático. Astro (SSG) + JS puro, sem framework de UI.

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
```

## O que já está pronto

- 92 páginas: 2 hubs, 18 categorias, 68 páginas de par (34 pares × 2 idiomas), 4 institucionais, 404
- Motor de conversão isomórfico com fatores exatos de definição (`src/lib/convert.js`)
- Slugs localizados: `/length/inches-to-cm/` e `/de/laenge/zoll-in-cm/`
- hreflang recíproco + `x-default` no `<head>` de toda página
- Formatação por idioma (`2.54` em EN, `2,54` em DE) e entrada com vírgula decimal
- Consent Mode v2 com tudo negado antes de qualquer script do Google
- Fallback de `clipboard` e proteção de `localStorage` para WebView de chat
- Slots de anúncio com altura reservada, nunca acima do widget

## O que falta

- [ ] Texto das páginas legais (`privacy-policy`, `terms-of-use`, `datenschutz`, `nutzungsbedingungen`) — hoje são placeholders. A versão alemã exige Impressum.
- [ ] Imagens OG (`src/pages/og/[...slug].png.js` do documento de arquitetura, item 8) — hoje as páginas apontam para `/og-default.png`, que ainda não existe.
- [ ] Ícones em `public/icons/` (192×192 e 512×512), para a fase PWA
- [ ] Preencher `.env` com `PUBLIC_ADSENSE_ID` e `PUBLIC_GA4_ID` **só após a aprovação no AdSense**
- [ ] `public/ads.txt` — criar só após a aprovação

## Deploy (Cloudflare Pages)

1. Cloudflare → Workers & Pages → Create → Pages → Connect to Git → `fcosta84/SkalaConvert`
2. Framework preset: **Astro**. Build command `npm run build`. Output directory `dist`.
3. Custom domains → adicionar `skalaconvert.com` e `www.skalaconvert.com`
4. Na Hostinger, trocar os nameservers do domínio pelos dois que a Cloudflare indicar

A partir daí, cada push na branch principal publica sozinho.

## Estrutura

```
src/
  data/categories.js   9 grandezas, fatores exatos
  data/pairs.js        17 pares → 34 rotas por idioma
  lib/convert.js       motor de conversão (build + cliente)
  lib/copy.js          título, fórmula e exemplo derivados do dado
  i18n/                strings, slugs e utilitários EN/DE
  components/          Converter, ConversionTable, AdSlot, HubContent
  layouts/Base.astro   head, hreflang, consent, tema
  pages/               EN na raiz, DE em /de/
```
