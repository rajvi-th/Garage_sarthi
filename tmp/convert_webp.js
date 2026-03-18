import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const dir = 'src/assets/optimized';

async function convert() {
  console.log("Starting WebP conversion...");
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.png'));
  
  if (files.length === 0) {
    console.log("No PNG files found in optimized folder.");
    return;
  }

  for (const f of files) {
    console.log(`Converting ${f} to WebP...`);
    try {
      await sharp(path.join(dir, f))
        .webp({ quality: 80 })
        .toFile(path.join(dir, f.replace('.png', '.webp')));
      console.log(`  Done.`);
    } catch (e) {
      console.error(`  Error converting ${f}: ${e.message}`);
    }
  }
  console.log("All conversions to WebP finished.");
}

convert().catch(console.error);
