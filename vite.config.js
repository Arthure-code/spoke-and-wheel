import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// The test block is Vitest's, as the Vue guide sets it up: one config for
// the build and the tests, globals on, a simulated DOM from happy-dom.
export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'happy-dom',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
      include: ['src/**/*.vue', 'src/**/*.js'],
      exclude: ['src/main.js'],
    },
  },
})
