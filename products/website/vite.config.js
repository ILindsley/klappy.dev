// Vite config for website lane
// Note: vite and plugins are installed at repo root, not in lane
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

// Import react plugin from repo root's node_modules
const repoRoot = resolve(__dirname, '../..');
const react = require(resolve(repoRoot, 'node_modules/@vitejs/plugin-react')).default;

export default {
  plugins: [react()],
  root: __dirname,
  publicDir: resolve(__dirname, '../../public'),
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    port: 3000,
  },
};
