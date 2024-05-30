import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import writeBuiltTimePlugin from './plugins/writeBuiltTimePlugin';

export default defineConfig({
  server: {
    strictPort: true,
    port: 3000,
  },
  plugins: [react(), writeBuiltTimePlugin()],
});
