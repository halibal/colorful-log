import { defineConfig } from 'tsup';

export default defineConfig([
    // for production
    {
        format: ['cjs', 'esm'],
        entry: ['src/index.ts'],
        dts: true,
        shims: true,
        skipNodeModulesBundle: true,
        clean: true,
        minify: true
    },
    // for test cases
    {
        entry: ['src/test.ts'],
        format: ['cjs'],
        outDir: 'dist/tests',
        splitting: false,
        sourcemap: true,
        clean: false
    }
]);
