import { defineConfig } from 'tsup';

export default defineConfig(() => {
  return {
    entry: ['./src/index.ts'],
    loader: {
      '.css': 'copy',
      '.scss': 'copy',
    },
    format: ['esm', 'cjs'], // Build for commonJS and ESmodules
    dts: true, // Generate declaration file (.d.ts)
    bundle: true,
    skipNodeModulesBundle: true,
    splitting: false,
    sourcemap: true,
    clean: true,
    esbuildOptions(options) {
      options.outbase = './src'; // Maintain directory structure in output
    },
    tsconfig: 'tsconfig.build.json',
    external: ['react', 'react-dom'],
  };
});