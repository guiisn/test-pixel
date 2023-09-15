import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import dts from 'vite-plugin-dts'
import typescript from '@rollup/plugin-typescript'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/lib/index.ts'),
      name: 'pixel',
      fileName: 'pixel'
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: "React",
          'react-dom': "ReactDOM"
        }
      }
    },
  },
  plugins: [react(), dts(),
  typescript({
    'target': 'es2022',
    'rootDir': './src',
    'declaration': true,
    'declarationDir': './dist',
    exclude: './node_modules/**',
    allowSyntheticDefaultImports: true
  })
  ],
})
