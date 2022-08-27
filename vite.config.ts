import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
    css:{modules:{localsConvention: 'camelCaseOnly', globalModulePaths: [/\\.(s)?css$/], generateScopedName: '[name]_[hash:base64:4]'}},
    plugins: [
        svgr({exportAsDefault: true}),
        cssInjectedByJsPlugin(),
        react(),
        dts({
            insertTypesEntry: true,
        }),
    ],
    build: {
        sourcemap: true,
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'ui-kit',
            formats: ['es', 'umd'],
            fileName: (format) => `ui-kit.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'styled-components'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'styled-components': 'styled',
                },
            },
        },
    },
});
