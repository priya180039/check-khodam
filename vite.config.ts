import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "priya-bagus-amanullah",
    project: "javascript-react"
  })],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 9080,
  },
  build: {
    sourcemap: true,
  },
});