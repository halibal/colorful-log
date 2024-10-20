import { defineConfig } from 'tsup';

export default defineConfig(() => {
    const isTestBuild = process.env.NODE_ENV === 'test';

    console.log('Building for:', isTestBuild ? 'Test' : 'Production');

    return {
        entry: isTestBuild ? ['src/test.ts'] : ['src/index.ts'], // Use the correct entry based on the build type
        format: ['cjs', 'esm'],
        dts: true,
        shims: true,
        skipNodeModulesBundle: true,
        clean: !isTestBuild, // Clean only for production builds
        minify: !isTestBuild, // Minify only for production
        sourcemap: true, // Enable sourcemaps for both builds
        outDir: isTestBuild ? 'dist/tests' : 'dist' // Output directory based on the build type
    };
});
