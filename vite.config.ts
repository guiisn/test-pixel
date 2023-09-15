import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/lib/index.ts'),
      name: 'pixel',
      formats: ['es', 'umd'],
      fileName: (format) => `pixel.${format}.js`,
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
  plugins: [react(), dts()],
})
