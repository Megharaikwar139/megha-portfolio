import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function removeGreenScreen(inputPath, outputPath) {
  const image = sharp(inputPath);
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  
  // Create RGBA output buffer
  const outBuf = Buffer.alloc(width * height * 4);
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const srcIdx = (y * width + x) * channels;
      const dstIdx = (y * width + x) * 4;
      
      let r = data[srcIdx];
      let g = data[srcIdx + 1];
      let b = data[srcIdx + 2];
      
      // Green screen detection:
      // green dominant: g > r + 30 and g > b + 30 and g > 100
      const isGreen = g > r * 1.15 && g > b * 1.15 && g > 90;
      const isEdgeGreen = g > r && g > b && (g - Math.max(r, b)) > 15;
      
      if (isGreen) {
        // Calculate transparency based on green difference
        const greenExcess = g - Math.max(r, b);
        if (greenExcess > 40) {
          // Fully transparent
          outBuf[dstIdx] = 0;
          outBuf[dstIdx + 1] = 0;
          outBuf[dstIdx + 2] = 0;
          outBuf[dstIdx + 3] = 0;
        } else {
          // Smooth edge falloff
          const alpha = Math.max(0, Math.min(255, 255 - Math.round((greenExcess - 15) / 25 * 255)));
          // Spill suppression: reduce green to max of r and b
          g = Math.min(g, Math.max(r, b));
          outBuf[dstIdx] = r;
          outBuf[dstIdx + 1] = g;
          outBuf[dstIdx + 2] = b;
          outBuf[dstIdx + 3] = alpha;
        }
      } else {
        // Spill suppression for slight edge fringe
        if (isEdgeGreen) {
          g = Math.min(g, Math.round((r + b) / 2 * 1.05));
        }
        outBuf[dstIdx] = r;
        outBuf[dstIdx + 1] = g;
        outBuf[dstIdx + 2] = b;
        outBuf[dstIdx + 3] = 255;
      }
    }
  }
  
  // Ensure destination directory exists
  const outDir = path.dirname(outputPath);
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
  
  await sharp(outBuf, {
    raw: {
      width,
      height,
      channels: 4
    }
  })
  .png({ compressionLevel: 9 })
  .toFile(outputPath);
  
  console.log(`Saved transparent cutout to ${outputPath}`);
}

const file1 = 'C:/Users/Admin/.gemini/antigravity-ide/brain/12475411-7edd-4571-876c-d63873f25748/megha_greenscreen_1792394347546.jpg';
const file2 = 'C:/Users/Admin/.gemini/antigravity-ide/brain/12475411-7edd-4571-876c-d63873f25748/megha_greenscreen_pose2_1792394374530.jpg';

async function run() {
  await removeGreenScreen(file1, 'd:/xampp/htdocs/meghaa/public/assets/megha-hero.png');
  await removeGreenScreen(file2, 'd:/xampp/htdocs/meghaa/public/assets/megha-about.png');
}

run().catch(console.error);
