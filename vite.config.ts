import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import path from "path"

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [
    react(), 
    viteTsconfigPaths()
  ],
  test: {
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});