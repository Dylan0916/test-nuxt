import path from 'path'
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue'],
    }),
    Components({
      dirs: ['./components'],
    }),
  ],
  test: {
    setupFiles: 'setup-tests.ts',
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
      '#imports': path.resolve(__dirname, './.nuxt/imports.d.ts'),
    },
  },
})
