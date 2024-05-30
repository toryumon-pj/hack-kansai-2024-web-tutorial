import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
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
  plugins: [react(), writeBuiltTimePlugin(buildDir)],
});
