import path from 'path';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { defineConfig } from 'vite';
import { runCombined } from 'vite-plugin-yalc';

export default defineConfig(({ mode }) => ({
	base: './',
	build: {
		sourcemap: mode === 'development',
		lib: {
			entry: path.resolve(__dirname, 'src/index.tsx'),
			name: 'Types',
			formats: ['es', 'cjs'],
			fileName: (format, entryName) => (format === 'es' ? `${entryName}.mjs` : `${entryName}.cjs`),
		},
		rollupOptions: {
			external: ['https'],
			plugins: [peerDepsExternal()],
		},
	},
	plugins: [runCombined()],
	resolve: {
		alias: {
			src: path.resolve(__dirname, '/src'),
			types: path.resolve(__dirname, '/types'),
		},
	},
}));
