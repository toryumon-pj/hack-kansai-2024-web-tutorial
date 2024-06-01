import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import writeBuiltTimePlugin from './plugins/writeBuiltTimePlugin';

const buildDir = 'dist';

export default defineConfig({
  build: {
    outDir: buildDir,
  },
  server: {
    strictPort: true,
    port: 3000,
  },
  base: './',
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [react(), writeBuiltTimePlugin(buildDir)],
});
