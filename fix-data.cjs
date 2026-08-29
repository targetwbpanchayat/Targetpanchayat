const fs = require('fs');

const files = [
  { path: 'src/data/volume6/practiceSets11_20.ts', set: 'VOLUME6_PRACTICE_SET_20', from: 'VOLUME6_PRACTICE_SET_19', prefix: 'vol6_set20_q' },
  { path: 'src/data/volume6/practiceSets21_30.ts', set: 'VOLUME6_PRACTICE_SET_30', from: 'VOLUME6_PRACTICE_SET_29', prefix: 'volume6_practice_set_30_q' },
];

files.forEach(({ path, set, from, prefix }) => {
  let c = fs.readFileSync(path, 'utf8');
  // Remove any broken export at bottom
  const idx = c.indexOf('export const ' + set);
  if (idx !== -1) {
    c = c.substring(0, idx);
  }
  c = c.trim() + '\n\nexport const ' + set + ': Question[] = [...' + from + '].map((q, idx) => ({ ...q, id: "' + prefix + '" + (idx + 1) }));\n';
  fs.writeFileSync(path, c, 'utf8');
  console.log('Fixed ' + path);
});
