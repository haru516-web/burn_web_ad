import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const sourcePath = path.join(root, 'docs', 'js', 'pages', 'loveMobbyDiagnosis.js');
const compatibilityPath = path.join(root, 'love_mobby_compatibility_136.md');
const imageDir = path.join(root, 'docs', 'image', 'lovemobby');
const outputDir = path.join(root, 'docs', 'image', 'lovemobby-share-cards');

const source = fs.readFileSync(sourcePath, 'utf8');
const compatibility = fs.readFileSync(compatibilityPath, 'utf8');

const resultBlock = source.match(/export const RESULT_TYPES = \{([\s\S]*?)\n\};/);
if (!resultBlock) {
  throw new Error('RESULT_TYPES block was not found.');
}

const resultTypes = [];
const typePattern = /([A-Z]{4}): \{ code: '([^']+)', typeName: '([^']+)', characterName: '([^']+)', shortCopy: '([^']+)' \}/g;
let match;
while ((match = typePattern.exec(resultBlock[1]))) {
  resultTypes.push({
    key: match[1],
    code: match[2],
    typeName: match[3],
    characterName: match[4],
    shortCopy: match[5],
  });
}

if (resultTypes.length !== 16) {
  throw new Error(`Expected 16 result types, found ${resultTypes.length}.`);
}

const headings = Array.from(compatibility.matchAll(/^##\s+([A-Z]{4}):\s+(.+)$/gm)).map((item) => ({
  code: item[1],
  typeName: item[2].trim(),
}));

const missingHeadings = resultTypes.filter((type) => !headings.some((heading) => heading.code === type.code));
if (missingHeadings.length) {
  throw new Error(`Missing compatibility headings: ${missingHeadings.map((type) => type.code).join(', ')}`);
}

const axisLabels = {
  H: '愛され主役',
  S: '支える相棒',
  L: '近さを大切にする',
  F: '余白も大切にする',
  T: 'ときめき重視',
  A: '安心重視',
  O: '見せたい恋',
  C: '内にしまう恋',
};

const palette = {
  HLTO: ['#fff6f5', '#f2a7a0', '#6d3834'],
  HLTC: ['#f6f2ff', '#a992d8', '#43345f'],
  HLAO: ['#fff8e8', '#f1bd64', '#5c4020'],
  HLAC: ['#f2f7fb', '#8eb8d0', '#294859'],
  HFTO: ['#fff3f8', '#e58bb1', '#633149'],
  HFTC: ['#f7f4fb', '#9b8ac4', '#383050'],
  HFAO: ['#fff8ec', '#e7b46d', '#604425'],
  HFAC: ['#f4f8f3', '#93b88c', '#31482e'],
  SLTO: ['#fff6ea', '#e8a65d', '#5d371f'],
  SLTC: ['#f6f0f5', '#b989ab', '#4d3144'],
  SLAO: ['#f7f8e8', '#bcc86c', '#464d22'],
  SLAC: ['#f6f2ed', '#b79d82', '#4d3d2f'],
  SFTO: ['#eff7f7', '#77b9bd', '#254e51'],
  SFTC: ['#f2f4fa', '#7f92bd', '#2e3c59'],
  SFAO: ['#f8f4ed', '#c6aa77', '#4c3f2b'],
  SFAC: ['#eef4f2', '#789e91', '#2d463e'],
};

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function toFileUrl(filePath) {
  return new URL(`file:///${filePath.replaceAll(path.sep, '/')}`).href;
}

function getCardHtml(type) {
  const [paper, accent, ink] = palette[type.code] || ['#fffaf5', '#d7a36f', '#3f342d'];
  const tags = type.code.split('').map((key) => axisLabels[key] || key);
  const imagePath = path.join(imageDir, `${type.typeName}.webp`);
  if (!fs.existsSync(imagePath)) {
    throw new Error(`Missing character image: ${imagePath}`);
  }

  return `<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(type.code)} ${escapeHtml(type.typeName)} SNS Share Card</title>
  <style>
    @page { size: A4 portrait; margin: 0; }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      background: #ece7df;
      color: ${ink};
      font-family: "Yu Gothic", "Hiragino Kaku Gothic ProN", "Meiryo", sans-serif;
    }
    .sheet {
      position: relative;
      width: 1240px;
      height: 1754px;
      overflow: hidden;
      background:
        radial-gradient(circle at 18% 14%, rgba(255,255,255,.92), transparent 280px),
        linear-gradient(155deg, ${paper} 0%, #fffdf9 45%, #f5efe8 100%);
    }
    .sheet::before {
      content: "";
      position: absolute;
      inset: 58px;
      border: 2px solid rgba(75, 58, 45, .16);
      pointer-events: none;
    }
    .sheet::after {
      content: "";
      position: absolute;
      right: -150px;
      bottom: -210px;
      width: 640px;
      height: 640px;
      border-radius: 50%;
      border: 92px solid color-mix(in srgb, ${accent} 30%, transparent);
      opacity: .42;
    }
    .eyebrow {
      position: absolute;
      top: 86px;
      left: 86px;
      font-family: Georgia, "Times New Roman", serif;
      font-size: 25px;
      letter-spacing: 4px;
      text-transform: uppercase;
      color: ${accent};
    }
    .code {
      position: absolute;
      top: 82px;
      right: 86px;
      font-family: Georgia, "Times New Roman", serif;
      font-size: 38px;
      letter-spacing: 3px;
      color: ${ink};
    }
    .visual {
      position: absolute;
      top: 210px;
      left: 150px;
      width: 940px;
      height: 780px;
      display: grid;
      place-items: center;
    }
    .visual::before {
      content: "";
      position: absolute;
      inset: 92px 40px 34px;
      border-radius: 50%;
      background: color-mix(in srgb, ${accent} 22%, white);
      filter: blur(2px);
      opacity: .66;
    }
    .visual img {
      position: relative;
      z-index: 1;
      width: 760px;
      height: 760px;
      object-fit: contain;
      filter: drop-shadow(0 34px 34px rgba(59, 42, 31, .16));
    }
    .title {
      position: absolute;
      left: 98px;
      right: 98px;
      top: 1016px;
      margin: 0;
      font-size: 98px;
      line-height: 1.05;
      letter-spacing: 0;
      font-weight: 800;
      text-align: center;
    }
    .character {
      position: absolute;
      top: 1142px;
      left: 148px;
      right: 148px;
      margin: 0;
      font-size: 35px;
      line-height: 1.45;
      text-align: center;
      color: color-mix(in srgb, ${ink} 78%, white);
    }
    .copy {
      position: absolute;
      top: 1236px;
      left: 160px;
      right: 160px;
      margin: 0;
      font-size: 42px;
      line-height: 1.66;
      font-weight: 700;
      text-align: center;
    }
    .tags {
      position: absolute;
      left: 104px;
      right: 104px;
      bottom: 174px;
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 18px;
    }
    .tag {
      min-height: 76px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid color-mix(in srgb, ${accent} 42%, white);
      background: rgba(255, 255, 255, .54);
      border-radius: 999px;
      font-size: 27px;
      font-weight: 700;
    }
    .brand {
      position: absolute;
      left: 86px;
      bottom: 78px;
      font-family: Georgia, "Times New Roman", serif;
      font-size: 30px;
      letter-spacing: 2px;
      color: ${accent};
    }
    .share {
      position: absolute;
      right: 86px;
      bottom: 78px;
      font-size: 24px;
      color: color-mix(in srgb, ${ink} 60%, white);
    }
  </style>
</head>
<body>
  <main class="sheet" aria-label="${escapeHtml(type.typeName)} SNS共有用A4カード">
    <div class="eyebrow">love mobby diagnosis</div>
    <div class="code">${escapeHtml(type.code)}</div>
    <figure class="visual">
      <img src="${toFileUrl(imagePath)}" alt="${escapeHtml(type.characterName)}">
    </figure>
    <h1 class="title">${escapeHtml(type.typeName)}</h1>
    <p class="character">${escapeHtml(type.characterName)}</p>
    <p class="copy">${escapeHtml(type.shortCopy)}</p>
    <div class="tags">
      ${tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}
    </div>
    <div class="brand">Love Mobby</div>
    <div class="share">SNS share card / A4 portrait</div>
  </main>
</body>
</html>`;
}

fs.mkdirSync(outputDir, { recursive: true });

const cards = resultTypes.map((type) => {
  const htmlName = `${type.code}-${type.typeName}.html`;
  const htmlPath = path.join(outputDir, htmlName);
  fs.writeFileSync(htmlPath, getCardHtml(type), 'utf8');
  return { ...type, htmlName };
});

const indexHtml = `<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Love Mobby SNS Share Cards</title>
  <style>
    body { margin: 0; padding: 32px; background: #eee9e1; color: #3f342d; font-family: "Yu Gothic", "Meiryo", sans-serif; }
    h1 { margin: 0 0 10px; font-size: 28px; }
    p { margin: 0 0 24px; color: #75685d; }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 14px; }
    a { display: block; padding: 16px; border-radius: 12px; background: #fffaf5; color: inherit; text-decoration: none; border: 1px solid #ddd2c6; }
    strong, span { display: block; }
    span { margin-top: 4px; color: #8b7a6b; font-size: 13px; }
  </style>
</head>
<body>
  <h1>Love Mobby SNS Share Cards</h1>
  <p>A4縦サイズ: 1240 x 1754px。各カードを開いてPNG書き出しできます。</p>
  <div class="grid">
    ${cards.map((card) => `<a href="./${encodeURI(card.htmlName)}"><strong>${escapeHtml(card.typeName)}</strong><span>${escapeHtml(card.code)} / ${escapeHtml(card.characterName)}</span></a>`).join('')}
  </div>
</body>
</html>`;

fs.writeFileSync(path.join(outputDir, 'index.html'), indexHtml, 'utf8');

console.log(`Generated ${cards.length} A4 card HTML files in ${path.relative(root, outputDir)}`);
