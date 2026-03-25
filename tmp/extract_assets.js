import fs from 'fs';
import path from 'path';

// Note: You may need to run `npm install sharp` first
import sharp from 'sharp';

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
    
    let newContent = content;
    let hasMatch = false;

    console.log(`Processing ${svg}...`);

    while ((match = base64Regex.exec(content)) !== null) {
      hasMatch = true;
      const base64Data = match[2];
      const buffer = Buffer.from(base64Data, 'base64');
      const fileName = `${path.basename(svg, '.svg')}_extracted_${count}.webp`;
      const filePath = path.join(OUTPUT_DIR, fileName);

      try {
        await sharp(buffer)
          .webp({ quality: 80 })
          .toFile(filePath);
        console.log(`  Saved optimized image: ${fileName}`);
        
        // Also attempting to update the SVG to point to the new WebP
        const searchString = `data:image/${match[1]};base64,${match[2]}`;
        // we use a relative path that Vite can resolve if imported or used correctly, 
        // however SVGs rendered via <img> can't load external URLs. 
        newContent = newContent.replace(searchString, `../optimized/${fileName}`);
        
      } catch (e) {
        console.error(`  Failed to convert ${fileName}:`, e.message);
      }
      count++;
    }

    if (hasMatch) {
      // Save a separated SVG that links to the extracted webp (may only work if inlined in HTML)
      fs.writeFileSync(path.join(OUTPUT_DIR, `${svg.replace('.svg', '_linked.svg')}`), newContent);
    }
  }
}

processSVGs().then(() => console.log('Done.')).catch(console.error);
