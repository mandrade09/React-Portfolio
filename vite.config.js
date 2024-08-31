import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', 
    rollupOptions: {
      input: '/public/index.html' // Ensure Vite is looking for index.html
    }
  },
  server: {
    port: 3000, // You can change this to your preferred port
    open: true
  }
});
