import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// Vite config for Attempt 002 (parallel implementation)
export default defineConfig({
  plugins: [react()],
  
  // Use attempt-002 specific entry point
  build: {
    rollupOptions: {
      input: resolve(__dirname, 'index-attempt-002.html'),
    },
    outDir: 'dist-attempt-002',
  },
  
  // Dev server config
  server: {
    port: 5174, // Different port from main dev server
  },
});
