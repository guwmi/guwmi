import { defineConfig } from 'tsup';

export default defineConfig(() => {
  return {
    entry: ['./src/index.ts'],
    loader: {
      '.css': 'copy',
      '.scss': 'copy',
    },
    format: ['cjs', 'esm'], // Build for commonJS and ESmodules
    dts: true, // Generate declaration file (.d.ts)
    splitting: false,
    sourcemap: true,
    clean: false,
  };
});