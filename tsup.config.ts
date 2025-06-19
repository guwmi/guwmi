import { defineConfig } from 'tsup';

export default defineConfig(() => {
  return {
    entry: ['./src/index.ts'],
    loader: {
      '.css': 'copy',
      '.scss': 'copy',
    },
    format: ['esm'],
    dts: true,
    bundle: true,
    skipNodeModulesBundle: true,
    splitting: false,
    sourcemap: true,
    clean: true,
    esbuildOptions(options) {
      options.outbase = './src';
    },
    tsconfig: 'tsconfig.build.json',
    external: ['react', 'react-dom'],
  };
});