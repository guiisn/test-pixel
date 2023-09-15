/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import path from 'path';
import { UserConfigExport, defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';
import typescript from '@rollup/plugin-typescript';

// https://vitejs.dev/config/
export default ({ mode }): UserConfigExport => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    build: {
      lib: {
        entry: path.resolve(__dirname, 'src/lib/index.ts'),
        name: 'pixel',
        fileName: 'pixel',
      },
      rollupOptions: {
        external: ['react', 'react-dom'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
        },
      },
    },
    plugins: [
      react(),
      dts(),
      tsconfigPaths(),
      typescript(
        {
          target: 'es2022',
          rootDir: './src',
          declaration: true,
          declarationDir: './dist',
          exclude: './node_modules/**',
          allowSyntheticDefaultImports: true,
        },
      ),
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
