import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Root is project root, /public is served as static
  // Content lives at /public/content/* and is fetched via /content/*
});
