import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const assetsDir = path.resolve(process.cwd(), 'src', 'lib', 'assets');

async function ensureWebpFor(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) return;

  const dir = path.dirname(filePath);
  const base = path.basename(filePath, ext);
  const webpPath = path.join(dir, `${base}.webp`);

  // Skip generation if WebP already exists
  let webpExists = true;
  try {
    await fs.access(webpPath);
  } catch {
    webpExists = false;
  }
  if (webpExists) return;

  try {
    const input = await fs.readFile(filePath);
    const image = sharp(input);
    // Convert to webp with quality tuned for ~150KB target for medium images
    const webpBuffer = await image.webp({ quality: 80, effort: 5 }).toBuffer();
    await fs.writeFile(webpPath, webpBuffer);
    console.log(`Generated WebP: ${path.relative(process.cwd(), webpPath)} (${Math.round(webpBuffer.length / 1024)}KB)`);
  } catch (err) {
    console.error(`Failed to generate WebP for ${filePath}:`, err.message);
  }
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(p);
    } else {
      await ensureWebpFor(p);
    }
  }
}

async function main() {
  try {
    await walk(assetsDir);
  } catch (e) {
    console.error('Image generation failed:', e.message);
    process.exitCode = 1;
  }
}

main();
