import { defineConfig } from 'vite-plus';
import { resolve } from 'path';

export default defineConfig({
  // Standard Vite configuration for dev/build/preview.
  plugins: [],

  // Library build configuration
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['cjs', 'es'],
      fileName: (format) => `index.${format === 'es' ? 'esm' : 'cjs'}.js`,
    },
    minify: true,
    target: ['esnext', 'node20'],
    rollupOptions: {
      // Ensure to externalize deps that shouldn't be bundled
      external: ['typescript'],
    },
  },

  // Vitest configuration.
  test: {
    globals: true,
    include: ['src/**/*.spec.ts'],
  },

  // Oxlint configuration.
  lint: {
    ignorePatterns: ['dist/**'],
  },

  // Oxfmt configuration.
  fmt: {
    semi: true,
    singleQuote: true,
  },
});
