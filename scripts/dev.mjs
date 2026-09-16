// `npm start` entry point: regenerates the gallery manifest whenever a file
// changes under public/images/gallery/, and forwards to `ng serve` for the
// usual Angular live-reload. Add/remove photos while this is running — no
// need to stop and restart the dev server.
import { spawn } from 'node:child_process';
import { watch } from 'node:fs';
import { generateGalleryManifest, GALLERY_DIR } from './generate-gallery-manifest.mjs';

let pending = null;

function regenerate() {
  clearTimeout(pending);
  pending = setTimeout(() => {
    const count = generateGalleryManifest();
    console.log(`[gallery] manifest updated: ${count} categories`);
  }, 150);
}

regenerate();

try {
  watch(GALLERY_DIR, { recursive: true }, () => regenerate());
} catch (err) {
  console.warn(`[gallery] could not watch ${GALLERY_DIR} for changes:`, err.message);
}

const ngBin = process.platform === 'win32' ? 'ng.cmd' : 'ng';
const ng = spawn(ngBin, ['serve'], { stdio: 'inherit' });
ng.on('exit', (code) => process.exit(code ?? 0));
