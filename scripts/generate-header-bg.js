const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function generateHeaderBackground() {
  const width = 2400;
  const height = 1350;

  // Modern Luxury Light-Theme 3D Tech Architecture SVG
  const svg = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <!-- Base Gradients -->
      <linearGradient id="skyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ffffff" />
        <stop offset="40%" stop-color="#f8fafc" />
        <stop offset="80%" stop-color="#f1f5f9" />
        <stop offset="100%" stop-color="#e2e8f0" />
      </linearGradient>

      <!-- Ambient Glows -->
      <radialGradient id="heroGlowCenter" cx="65%" cy="35%" r="55%">
        <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.18" />
        <stop offset="40%" stop-color="#60a5fa" stop-opacity="0.08" />
        <stop offset="80%" stop-color="#06b6d4" stop-opacity="0.03" />
        <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
      </radialGradient>

      <radialGradient id="heroGlowTopLeft" cx="20%" cy="20%" r="45%">
        <stop offset="0%" stop-color="#6366f1" stop-opacity="0.12" />
        <stop offset="50%" stop-color="#818cf8" stop-opacity="0.05" />
        <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
      </radialGradient>

      <radialGradient id="heroGlowBottomRight" cx="85%" cy="75%" r="50%">
        <stop offset="0%" stop-color="#0ea5e9" stop-opacity="0.15" />
        <stop offset="60%" stop-color="#38bdf8" stop-opacity="0.04" />
        <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
      </radialGradient>

      <!-- Grid Pattern -->
      <pattern id="isometricGrid" width="60" height="60" patternUnits="userSpaceOnUse">
        <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#cbd5e1" stroke-width="0.75" stroke-opacity="0.45" />
        <circle cx="0" cy="0" r="1.5" fill="#3b82f6" fill-opacity="0.3" />
      </pattern>

      <!-- High-tech Hex Pattern -->
      <pattern id="hexPattern" width="120" height="104" patternUnits="userSpaceOnUse">
        <path d="M 60 0 L 120 34.6 L 120 104 L 60 138.6 L 0 104 L 0 34.6 Z" fill="none" stroke="#94a3b8" stroke-width="0.6" stroke-opacity="0.25" />
      </pattern>
    </defs>

    <!-- Canvas Background -->
    <rect width="${width}" height="${height}" fill="url(#skyGrad)" />
    <rect width="${width}" height="${height}" fill="url(#heroGlowCenter)" />
    <rect width="${width}" height="${height}" fill="url(#heroGlowTopLeft)" />
    <rect width="${width}" height="${height}" fill="url(#heroGlowBottomRight)" />

    <!-- Isometric & Hex Overlay -->
    <rect width="${width}" height="${height}" fill="url(#isometricGrid)" />
    <rect x="${width * 0.35}" y="0" width="${width * 0.65}" height="${height}" fill="url(#hexPattern)" opacity="0.6" />

    <!-- Decorative Curved 3D Wave Ribbons -->
    <g opacity="0.6">
      <path d="M -100 300 C 500 150, 1100 550, 1800 320 C 2100 220, 2350 400, 2600 350" fill="none" stroke="#3b82f6" stroke-width="2.5" stroke-dasharray="8 6" opacity="0.4" />
      <path d="M -100 340 C 520 190, 1120 590, 1820 360 C 2120 260, 2370 440, 2600 390" fill="none" stroke="#6366f1" stroke-width="1.5" opacity="0.35" />
      <path d="M -100 380 C 540 230, 1140 630, 1840 400 C 2140 300, 2390 480, 2600 430" fill="none" stroke="#0ea5e9" stroke-width="1" opacity="0.3" />
    </g>

    <!-- Floating 3D Isometric Nodes & Connection Lines -->
    <g opacity="0.75" transform="translate(1300, 180)">
      <!-- Central Iso Node Group -->
      <line x1="0" y1="0" x2="320" y2="180" stroke="#3b82f6" stroke-width="1.8" stroke-dasharray="6 4" opacity="0.7" />
      <line x1="0" y1="0" x2="-220" y2="140" stroke="#6366f1" stroke-width="1.5" opacity="0.6" />
      <line x1="320" y1="180" x2="540" y2="90" stroke="#0ea5e9" stroke-width="1.5" opacity="0.6" />
      <line x1="320" y1="180" x2="380" y2="420" stroke="#2563eb" stroke-width="1.8" opacity="0.7" />
      <line x1="-220" y1="140" x2="-140" y2="380" stroke="#8b5cf6" stroke-width="1.2" opacity="0.5" />
      <line x1="-140" y1="380" x2="160" y2="520" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="4 4" opacity="0.6" />
      <line x1="380" y1="420" x2="160" y2="520" stroke="#60a5fa" stroke-width="1.5" opacity="0.6" />

      <!-- Isometric Polygonal Nodes -->
      <polygon points="0,-18 20,-6 20,16 0,26 -20,16 -20,-6" fill="#3b82f6" fill-opacity="0.25" stroke="#2563eb" stroke-width="2" />
      <circle cx="0" cy="5" r="4" fill="#2563eb" />

      <polygon points="320,162 340,174 340,196 320,206 300,196 300,174" fill="#0ea5e9" fill-opacity="0.3" stroke="#0284c7" stroke-width="2" />
      <circle cx="320" cy="185" r="4" fill="#0284c7" />

      <polygon points="-220,122 -200,134 -200,156 -220,166 -240,156 -240,134" fill="#8b5cf6" fill-opacity="0.3" stroke="#7c3aed" stroke-width="2" />
      <circle cx="-220" cy="145" r="4" fill="#7c3aed" />

      <polygon points="380,402 400,414 400,436 380,446 360,436 360,414" fill="#2563eb" fill-opacity="0.25" stroke="#1d4ed8" stroke-width="2" />
      <circle cx="380" cy="425" r="4" fill="#1d4ed8" />

      <polygon points="-140,362 -120,374 -120,396 -140,406 -160,396 -160,374" fill="#06b6d4" fill-opacity="0.3" stroke="#0891b2" stroke-width="2" />
      <circle cx="-140" cy="385" r="4" fill="#0891b2" />

      <polygon points="160,502 180,514 180,536 160,546 140,536 140,514" fill="#3b82f6" fill-opacity="0.3" stroke="#2563eb" stroke-width="2" />
      <circle cx="160" cy="525" r="4" fill="#2563eb" />

      <!-- Data Packet Micro Orbs -->
      <circle cx="160" cy="90" r="3" fill="#3b82f6" />
      <circle cx="350" cy="300" r="3" fill="#0ea5e9" />
      <circle cx="-180" cy="260" r="3" fill="#8b5cf6" />
      <circle cx="270" cy="470" r="3" fill="#2563eb" />
    </g>

    <!-- Floating 3D Wireframe Cube Accent (Top Right) -->
    <g opacity="0.45" transform="translate(1950, 140)">
      <polygon points="0,0 80,-46 160,0 80,46" fill="#3b82f6" fill-opacity="0.08" stroke="#3b82f6" stroke-width="1.8" />
      <polygon points="0,0 80,46 80,140 0,94" fill="#1d4ed8" fill-opacity="0.14" stroke="#2563eb" stroke-width="1.8" />
      <polygon points="160,0 80,46 80,140 160,94" fill="#60a5fa" fill-opacity="0.05" stroke="#3b82f6" stroke-width="1.8" />
    </g>

    <!-- Floating 3D Wireframe Cube Accent 2 (Mid Right) -->
    <g opacity="0.35" transform="translate(1820, 680)">
      <polygon points="0,0 60,-35 120,0 60,35" fill="#6366f1" fill-opacity="0.08" stroke="#6366f1" stroke-width="1.5" />
      <polygon points="0,0 60,35 60,105 0,70" fill="#4f46e5" fill-opacity="0.15" stroke="#4f46e5" stroke-width="1.5" />
      <polygon points="120,0 60,35 60,105 120,70" fill="#818cf8" fill-opacity="0.05" stroke="#6366f1" stroke-width="1.5" />
    </g>

    <!-- Floating 3D Wireframe Cube Accent 3 (Left subtle) -->
    <g opacity="0.3" transform="translate(180, 720)">
      <polygon points="0,0 50,-28 100,0 50,28" fill="#0ea5e9" fill-opacity="0.06" stroke="#0ea5e9" stroke-width="1.4" />
      <polygon points="0,0 50,28 50,84 0,56" fill="#0284c7" fill-opacity="0.12" stroke="#0284c7" stroke-width="1.4" />
      <polygon points="100,0 50,28 50,84 100,56" fill="#38bdf8" fill-opacity="0.04" stroke="#0ea5e9" stroke-width="1.4" />
    </g>

    <!-- Tech Crosses & Marker Pins -->
    <g opacity="0.5" stroke="#64748b" stroke-width="1.2">
      <path d="M 120 220 L 132 220 M 126 214 L 126 226" />
      <path d="M 450 140 L 462 140 M 456 134 L 456 146" />
      <path d="M 880 280 L 892 280 M 886 274 L 886 286" />
      <path d="M 320 880 L 332 880 M 326 874 L 326 886" />
      <path d="M 1150 920 L 1162 920 M 1156 914 L 1156 926" />
      <path d="M 2180 480 L 2192 480 M 2186 474 L 2186 486" />
      <path d="M 1720 980 L 1732 980 M 1726 974 L 1726 986" />
    </g>

    <!-- Bottom Vignette / Clean Bleed Fade -->
    <linearGradient id="bottomFade" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#f8fafc" stop-opacity="0" />
      <stop offset="65%" stop-color="#f8fafc" stop-opacity="0.4" />
      <stop offset="90%" stop-color="#f8fafc" stop-opacity="0.85" />
      <stop offset="100%" stop-color="#f8fafc" stop-opacity="1" />
    </linearGradient>
    <rect y="${height - 280}" width="${width}" height="280" fill="url(#bottomFade)" />
  </svg>
  `;

  const outputDir = path.join(__dirname, '..', 'public', 'images');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // 1. Generate WebP (Ultra-optimized)
  await sharp(Buffer.from(svg))
    .webp({ quality: 90 })
    .toFile(path.join(outputDir, 'header-bg.webp'));

  console.log('Successfully created public/images/header-bg.webp');

  // 2. Generate PNG as standard fallback
  await sharp(Buffer.from(svg))
    .png({ quality: 90, compressionLevel: 8 })
    .toFile(path.join(outputDir, 'header-bg.png'));

  console.log('Successfully created public/images/header-bg.png');
}

generateHeaderBackground().catch(console.error);
