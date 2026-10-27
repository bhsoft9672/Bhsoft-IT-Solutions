const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function optimizeImages() {
  const projectsDir = path.join(__dirname, '..', 'public', 'images', 'projects');
  const files = fs.readdirSync(projectsDir);

  console.log('Optimizing project images in:', projectsDir);

  let originalTotal = 0;
  let newTotal = 0;

  for (const file of files) {
    if (!file.endsWith('.jpg') && !file.endsWith('.jpeg') && !file.endsWith('.png')) continue;
    // Skip if already webp
    if (file.endsWith('.webp')) continue;

    const filePath = path.join(projectsDir, file);
    const stat = fs.statSync(filePath);
    originalTotal += stat.size;

    const baseName = path.parse(file).name;
    const webpPath = path.join(projectsDir, `${baseName}.webp`);

    // 1. Generate optimized WebP (max width 800, quality 80)
    await sharp(filePath)
      .resize({ width: 800, withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 })
      .toFile(webpPath);

    const webpStat = fs.statSync(webpPath);
    console.log(`Created ${baseName}.webp: ${(stat.size / 1024).toFixed(1)} KB -> ${(webpStat.size / 1024).toFixed(1)} KB`);

    // 2. Also compress the original JPG in-place so any direct fallback is tiny!
    const tempJpg = path.join(projectsDir, `${baseName}-temp.jpg`);
    await sharp(filePath)
      .resize({ width: 800, withoutEnlargement: true })
      .jpeg({ quality: 80, mozjpeg: true })
      .toFile(tempJpg);

    fs.unlinkSync(filePath);
    fs.renameSync(tempJpg, filePath);

    const newJpgStat = fs.statSync(filePath);
    newTotal += newJpgStat.size;
    console.log(`Optimized ${file}: ${(stat.size / 1024).toFixed(1)} KB -> ${(newJpgStat.size / 1024).toFixed(1)} KB`);
  }

  // Also optimize bhsoft-logo.png if needed or create small version
  const logoPath = path.join(__dirname, '..', 'public', 'bhsoft-logo.png');
  if (fs.existsSync(logoPath)) {
    const smallLogoPath = path.join(__dirname, '..', 'public', 'bhsoft-logo-small.webp');
    await sharp(logoPath)
      .resize(96, 96)
      .webp({ quality: 90 })
      .toFile(smallLogoPath);
    console.log('Created public/bhsoft-logo-small.webp (96x96)');
  }

  console.log(`Total size reduced from ${(originalTotal / (1024 * 1024)).toFixed(2)} MB to ${(newTotal / (1024 * 1024)).toFixed(2)} MB!`);
}

optimizeImages().catch(err => {
  console.error('Image optimization failed:', err);
  process.exit(1);
});
