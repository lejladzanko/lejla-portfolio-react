import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/lejla-portfolio-react/',
  build: {
    outDir: 'dist',
  },
});
