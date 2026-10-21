const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function generateFavicons() {
  const sourcePath = path.join(__dirname, '..', 'public', 'bhsoft-logo.png');
  console.log('Reading source image from:', sourcePath);

  // Load and convert to genuine PNG
  const baseImg = sharp(sourcePath);
  
  // 1. Generate PNGs of various standard sizes
  const sizes = [
    { name: 'icon-16.png', size: 16 },
    { name: 'icon-32.png', size: 32 },
    { name: 'icon-48.png', size: 48 },
    { name: 'icon-96.png', size: 96 },
    { name: 'icon-144.png', size: 144 },
    { name: 'icon-192.png', size: 192 },
    { name: 'icon-512.png', size: 512 },
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'apple-icon.png', size: 180 },
    { name: 'icon.png', size: 192 }, // Default Next.js App Router icon
  ];

  const publicDir = path.join(__dirname, '..', 'public');
  const appDir = path.join(__dirname, '..', 'src', 'app');

  const pngBuffers = {};

  for (const item of sizes) {
    const buf = await baseImg
      .clone()
      .resize(item.size, item.size, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .ensureAlpha(1)
      .png({ compressionLevel: 9 })
      .toBuffer();

    pngBuffers[item.size] = buf;

    // Write to public
    fs.writeFileSync(path.join(publicDir, item.name), buf);
    console.log(`Generated public/${item.name} (${item.size}x${item.size}) - ${buf.length} bytes`);
  }

  // Also write to src/app for Next.js App Router automatic metadata
  fs.writeFileSync(path.join(appDir, 'icon.png'), pngBuffers[192]);
  fs.writeFileSync(path.join(appDir, 'apple-icon.png'), pngBuffers[180]);
  console.log('Wrote src/app/icon.png and src/app/apple-icon.png');

  // 2. Generate a valid multi-resolution Windows ICO file containing 16x16, 32x32, and 48x48
  // Standard ICO header: 6 bytes
  // Directory entries: 16 bytes each
  // Image data: PNG buffers directly following entries
  const icoSizes = [16, 32, 48];
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // 1 = ICO
  header.writeUInt16LE(icoSizes.length, 4); // count

  let currentOffset = 6 + (16 * icoSizes.length);
  const dirEntries = [];
  const imageBuffers = [];

  for (const s of icoSizes) {
    const buf = pngBuffers[s];
    imageBuffers.push(buf);

    const entry = Buffer.alloc(16);
    entry.writeUInt8(s === 256 ? 0 : s, 0); // width
    entry.writeUInt8(s === 256 ? 0 : s, 1); // height
    entry.writeUInt8(0, 2); // color palette count
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(buf.length, 8); // image size
    entry.writeUInt32LE(currentOffset, 12); // image offset

    dirEntries.push(entry);
    currentOffset += buf.length;
  }

  const icoBuffer = Buffer.concat([header, ...dirEntries, ...imageBuffers]);

  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(appDir, 'favicon.ico'), icoBuffer);
  console.log(`Generated true ICO favicon (16, 32, 48) - ${icoBuffer.length} bytes`);

  // Verify first bytes of generated ICO
  console.log('ICO Magic bytes:', icoBuffer.slice(0, 4).toString('hex')); // should be 00000100
}

generateFavicons().catch(err => {
  console.error('Error generating favicons:', err);
  process.exit(1);
});
