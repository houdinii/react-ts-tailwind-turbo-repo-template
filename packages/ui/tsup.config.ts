// packages/ui/tsup.config.ts
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.tsx'], // ← single entry
  format: ['cjs', 'esm'], // both builds
  splitting: false, // one file per format
  dts: true,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
});
