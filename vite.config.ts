import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    // GitHub Pages-এ সাইট targetwbpanchayat.github.io/Targetpanchayat/ পাথে হোস্ট হয়,
    // তাই base path সেট করা জরুরি — নাহলে JS/CSS ফাইল লোড হবে না আর পেজ সাদা থাকবে।
    base: '/Targetpanchayat/',
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    build: {
      outDir: 'dist',
      emptyOutDir: true,
    },
  };
});
