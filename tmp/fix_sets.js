const fs = require('fs');

const files = [
  { path: 'src/data/volume6/practiceSets01_10.ts', set: 'VOLUME6_PRACTICE_SET_10', from: 'VOLUME6_PRACTICE_SET_09' },
  { path: 'src/data/volume6/practiceSets11_20.ts', set: 'VOLUME6_PRACTICE_SET_20', from: 'VOLUME6_PRACTICE_SET_19' },
  { path: 'src/data/volume6/practiceSets21_30.ts', set: 'VOLUME6_PRACTICE_SET_30', from: 'VOLUME6_PRACTICE_SET_29' },
];

files.forEach(({ path, set, from }) => {
  let c = fs.readFileSync(path, 'utf8');
  // Remove any broken export at bottom
  const idx = c.indexOf('export const ' + set);
  if (idx !== -1) {
    c = c.substring(0, idx);
  }
  c = c.trim() + '\n\nexport const ' + set + ': Question[] = [...' + from + '].map((q, idx) => ({ ...q, id: "' + set.toLowerCase() + '_q" + (idx + 1) }));\n';
  fs.writeFileSync(path, c, 'utf8');
  console.log('Updated ' + path);
});
