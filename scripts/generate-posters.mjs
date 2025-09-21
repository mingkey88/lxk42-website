import { readdir } from 'fs/promises';
import { join, basename, extname } from 'path';
import sharp from 'sharp';

const staticDir = 'static';
const posterDir = 'static/posters';

console.log('🎬 Generating video poster images...\n');

try {
  const files = await readdir(staticDir);
  const videoFiles = files.filter(file => file.endsWith('.mp4'));

  console.log(`Found ${videoFiles.length} video files`);

  for (const videoFile of videoFiles) {
    const videoName = basename(videoFile, '.mp4');
    const posterPath = join(posterDir, `${videoName}-poster.webp`);

    console.log(`Creating poster for: ${videoFile}`);

    // Create branded poster image
    const width = 1280;
    const height = 720;

    const svgGradient = `
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lxkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#8FA68E;stop-opacity:0.6" />
            <stop offset="50%" style="stop-color:#F5F3F0;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#E6A866;stop-opacity:0.6" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#lxkGradient)" />
        <circle cx="640" cy="360" r="80" fill="rgba(93,90,86,0.1)" />
        <polygon points="620,340 620,380 660,360" fill="#5D5A56" opacity="0.7" />
      </svg>
    `;

    await sharp(Buffer.from(svgGradient))
      .webp({ quality: 85 })
      .toFile(posterPath);

    console.log(`✅ Created: ${posterPath}`);
  }

  console.log('\n🎉 Poster generation complete!');

} catch (error) {
  console.error('❌ Error:', error);
}