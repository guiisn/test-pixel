/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { UserConfigExport, defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default ({ mode }): UserConfigExport => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    build: {
      sourcemap: true,
    },
    plugins: [
      react(),
      tsconfigPaths(),
    ],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./test/vitest-setup.ts'],
      passWithNoTests: true,
      allowOnly: true,
    },
  });
};
