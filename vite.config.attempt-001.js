import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// Vite config for Attempt 001 (legacy implementation)
export default defineConfig({
  plugins: [react()],
  
  // Use attempt-001 specific entry point
  build: {
    rollupOptions: {
      input: resolve(__dirname, 'index-attempt-001.html'),
    },
    outDir: 'dist-attempt-001',
  },
  
  // Dev server config
  server: {
    port: 5175, // Different port from main dev server
  },
});
