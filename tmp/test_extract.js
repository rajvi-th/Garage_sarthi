import fs from 'fs';
import path from 'path';

const ASSETS_DIR = 'c:/Users/Admin/react-app/Gs_landingpage/src/assets/icons';
const OUTPUT_DIR = 'c:/Users/Admin/react-app/Gs_landingpage/src/assets/optimized';

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const file = 'Demo.svg';
const content = fs.readFileSync(path.join(ASSETS_DIR, file), 'utf8');
const base64Regex = /data:image\/([^;]+);base64,([^\"]+)/g;
let match;
let count = 0;

console.log(`Processing ${file}...`);

while ((match = base64Regex.exec(content)) !== null) {
  const ext = match[1];
  const base64Data = match[2];
  const buffer = Buffer.from(base64Data, 'base64');
  const fileName = `${path.basename(file, '.svg')}_extracted_${count}.${ext}`;
  const filePath = path.join(OUTPUT_DIR, fileName);

  fs.writeFileSync(filePath, buffer);
  console.log(`  Saved ${fileName} (${buffer.length} bytes)`);
  count++;
}
