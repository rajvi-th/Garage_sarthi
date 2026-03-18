import fs from 'fs';
import path from 'path';

const ASSETS_DIR = 'src/assets/icons';
const OUTPUT_DIR = 'src/assets/optimized';

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const svgs = ['Demo.svg', 'Gform.svg', 'Bookdemo.svg', 'Gvector.svg', 'Gimage.svg']; 

async function processSVGs() {
  for (const svg of svgs) {
    const svgPath = path.join(ASSETS_DIR, svg);
    if (!fs.existsSync(svgPath)) continue;

    const content = fs.readFileSync(svgPath, 'utf8');
    const base64Regex = /data:image\/([^;]+);base64,([^\"]+)/g;
    let match;
    let count = 0;

    console.log(`Processing ${svg}...`);

    while ((match = base64Regex.exec(content)) !== null) {
      const ext = match[1] === 'jpeg' ? 'jpg' : match[1];
      const base64Data = match[2];
      const buffer = Buffer.from(base64Data, 'base64');
      const fileName = `${path.basename(svg, '.svg')}_extracted_${count}.${ext}`;
      const filePath = path.join(OUTPUT_DIR, fileName);

      fs.writeFileSync(filePath, buffer);
      console.log(`  Saved ${fileName}`);
      count++;
    }
  }
}

processSVGs().then(() => console.log('Done.')).catch(console.error);
