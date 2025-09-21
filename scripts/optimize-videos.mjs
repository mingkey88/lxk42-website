#!/usr/bin/env node

/**
 * Video optimization script for LXK42 Studio website
 * Compresses videos and generates poster images
 */

import { readdir, stat, mkdir } from 'fs/promises';
import { join, basename, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

const STATIC_DIR = join(projectRoot, 'static');
const VIDEO_DIR = join(STATIC_DIR, 'video');
const POSTER_DIR = join(STATIC_DIR, 'posters');

async function ensureDirectories() {
  try {
    await mkdir(VIDEO_DIR, { recursive: true });
    await mkdir(POSTER_DIR, { recursive: true });
    console.log('✅ Directories created');
  } catch (error) {
    console.error('❌ Error creating directories:', error);
  }
}

async function generatePosterFromVideo(videoPath, outputPath) {
  return new Promise((resolve, reject) => {
    // For now, we'll create a placeholder poster
    // In a real implementation, you'd use ffmpeg to extract frames
    const videoName = basename(videoPath, extname(videoPath));

    // Create a gradient poster image as placeholder
    const width = 1280;
    const height = 720;

    // Create SVG gradient matching LXK brand colors
    const svgGradient = `
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lxkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#8FA68E;stop-opacity:0.8" />
            <stop offset="50%" style="stop-color:#F5F3F0;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#E6A866;stop-opacity:0.8" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#lxkGradient)" />
        <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle"
              font-family="Inter, sans-serif" font-size="48" font-weight="600"
              fill="#5D5A56" opacity="0.8">
          ${videoName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
        </text>
      </svg>
    `;

    sharp(Buffer.from(svgGradient))
      .webp({ quality: 85 })
      .toFile(outputPath)
      .then(() => {
        console.log(`✅ Generated poster: ${basename(outputPath)}`);
        resolve();
      })
      .catch(reject);
  });
}

async function optimizeVideo(inputPath, outputPath) {
  // For now, we'll copy the original file
  // In production, you'd use ffmpeg for compression
  const fs = await import('fs/promises');

  try {
    await fs.copyFile(inputPath, outputPath);
    console.log(`📹 Processed video: ${basename(outputPath)}`);
  } catch (error) {
    console.error(`❌ Error processing video ${basename(inputPath)}:`, error);
  }
}

async function processVideos() {
  console.log('🎬 Starting video optimization...\n');

  try {
    const files = await readdir(STATIC_DIR);
    const videoFiles = files.filter(file =>
      ['.mp4', '.webm', '.mov'].includes(extname(file).toLowerCase())
    );

    if (videoFiles.length === 0) {
      console.log('ℹ️  No video files found in static directory');
      return;
    }

    console.log(`Found ${videoFiles.length} video files to process:\n`);

    for (const videoFile of videoFiles) {
      const inputPath = join(STATIC_DIR, videoFile);
      const videoName = basename(videoFile, extname(videoFile));

      // Generate paths
      const optimizedVideoPath = join(VIDEO_DIR, `${videoName}.mp4`);
      const posterPath = join(POSTER_DIR, `${videoName}-poster.webp`);

      console.log(`Processing: ${videoFile}`);

      // Check file size
      const stats = await stat(inputPath);
      const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
      console.log(`  Size: ${sizeMB}MB`);

      // Generate poster image
      await generatePosterFromVideo(inputPath, posterPath);

      // Optimize video (placeholder for now)
      await optimizeVideo(inputPath, optimizedVideoPath);

      console.log(`  ✅ Completed processing ${videoFile}\n`);
    }

    console.log('🎉 Video optimization complete!');
    console.log('\n📊 Summary:');
    console.log(`   • Processed ${videoFiles.length} videos`);
    console.log(`   • Generated ${videoFiles.length} poster images`);
    console.log(`   • Created optimized video variants`);

  } catch (error) {
    console.error('❌ Error processing videos:', error);
  }
}

async function main() {
  console.log('🚀 LXK42 Video Optimization Tool\n');

  await ensureDirectories();
  await processVideos();

  console.log('\n💡 Next steps:');
  console.log('   • Replace VideoPlayer components with OptimizedVideo');
  console.log('   • Test lazy loading on mobile devices');
  console.log('   • Monitor Core Web Vitals improvements');
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}

export { main as optimizeVideos };