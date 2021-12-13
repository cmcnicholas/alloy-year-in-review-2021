import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  plugins: [
    vue(),
  ],
  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      'vuex',
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});