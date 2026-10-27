const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function generateOgImage() {
  const width = 1200;
  const height = 630;

  const logoPath = path.join(__dirname, '..', 'public', 'bhsoft-logo.png');
  const logoBuffer = await sharp(logoPath)
    .resize(320, 320, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .ensureAlpha(1)
    .png()
    .toBuffer();

  // Create an SVG overlay for the typography, gradients, and badges
  const svgOverlay = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="60%" stop-color="#f8fafc" />
          <stop offset="100%" stop-color="#e2e8f0" />
        </linearGradient>
        <radialGradient id="glow" cx="80%" cy="30%" r="50%">
          <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.18" />
          <stop offset="60%" stop-color="#06b6d4" stop-opacity="0.06" />
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="glow2" cx="20%" cy="80%" r="40%">
          <stop offset="0%" stop-color="#6366f1" stop-opacity="0.12" />
          <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
        </radialGradient>
      </defs>

      <!-- Background -->
      <rect width="${width}" height="${height}" fill="url(#bg)" />
      <rect width="${width}" height="${height}" fill="url(#glow)" />
      <rect width="${width}" height="${height}" fill="url(#glow2)" />

      <!-- Border frame -->
      <rect x="24" y="24" width="${width - 48}" height="${height - 48}" rx="24" fill="none" stroke="#cbd5e1" stroke-width="2" />

      <!-- Pill Badge -->
      <g transform="translate(420, 110)">
        <rect x="0" y="0" width="460" height="42" rx="21" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5" />
        <circle cx="20" cy="21" r="6" fill="#2563eb" />
        <text x="36" y="26" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="700" fill="#1d4ed8" letter-spacing="1.5">
          BHSOFT IT SOLUTION • JAIPUR &amp; GLOBAL
        </text>
      </g>

      <!-- Main Headline -->
      <text x="420" y="210" font-family="system-ui, -apple-system, sans-serif" font-size="44" font-weight="800" fill="#0f172a" letter-spacing="-0.5">
        Enterprise AI Agents &amp;
      </text>
      <text x="420" y="265" font-family="system-ui, -apple-system, sans-serif" font-size="44" font-weight="800" fill="#2563eb" letter-spacing="-0.5">
        Software Engineering
      </text>

      <!-- Subtitle Description -->
      <text x="420" y="325" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="500" fill="#475569">
        Autonomous Voice AI • Full-Stack Web Development • Cloud SaaS
      </text>
      <text x="420" y="358" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="400" fill="#64748b">
        Custom high-performance platforms built for startups and enterprises.
      </text>

      <!-- Metric / Trust Pills -->
      <g transform="translate(420, 410)">
        <!-- Pill 1 -->
        <rect x="0" y="0" width="160" height="44" rx="12" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
        <text x="18" y="27" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="700" fill="#0f172a">⚡ 99.9% Uptime</text>

        <!-- Pill 2 -->
        <rect x="175" y="0" width="190" height="44" rx="12" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
        <text x="18" y="27" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="700" fill="#0f172a">🤖 Voice AI Agents</text>

        <!-- Pill 3 -->
        <rect x="380" y="0" width="170" height="44" rx="12" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
        <text x="18" y="27" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="700" fill="#0f172a">🚀 Next.js 16 Ready</text>
      </g>

      <!-- Footer Bar -->
      <line x1="60" y1="520" x2="1140" y2="520" stroke="#e2e8f0" stroke-width="1" />

      <g transform="translate(60, 560)">
        <text x="0" y="0" font-family="system-ui, -apple-system, sans-serif" font-size="17" font-weight="700" fill="#2563eb">
          bhsoft.solutions
        </text>
        <text x="160" y="0" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="500" fill="#64748b">
          |  Jaipur, Rajasthan, India  |  +91 96725 80100  |  contact@bhsoft.solutions
        </text>
      </g>
    </svg>
  `;

  // Composite background SVG with Logo
  const baseCanvas = await sharp(Buffer.from(svgOverlay))
    .png()
    .toBuffer();

  const finalImage = await sharp(baseCanvas)
    .composite([
      {
        input: logoBuffer,
        left: 70,
        top: 155,
      },
    ])
    .png({ quality: 90, compressionLevel: 8 })
    .toFile(path.join(__dirname, '..', 'public', 'og-image.png'));

  console.log('Successfully created public/og-image.png (1200x630):', finalImage);

  // Also write to src/app/opengraph-image.png for native Next.js automatic OG discovery
  await sharp(path.join(__dirname, '..', 'public', 'og-image.png'))
    .toFile(path.join(__dirname, '..', 'src', 'app', 'opengraph-image.png'));

  console.log('Successfully created src/app/opengraph-image.png');
}

generateOgImage().catch(console.error);
