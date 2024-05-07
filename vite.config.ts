import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [
    react(), 
    viteTsconfigPaths()
  ],
  test: {
    environment: 'jsdom',
  },
});