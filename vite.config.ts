import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import requireTransform from 'vite-plugin-require-transform';
import postcss from 'rollup-plugin-postcss';
const postcssImport = require('postcss-import');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const path = require('path');
export default defineConfig({
	css: {
		postcss: {
			plugins: [require('postcss-import'), require('tailwindcss'), require('autoprefixer')],
		},
	},
	plugins: [requireTransform({}), react()],
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/index.ts'),
			name: 'react-markdown-editor',
			fileName: (format) => `react-markdown-editor.${format}.js`,
		},
		rollupOptions: {
			plugins: [
				// postcss({
				// 	extensions: ['.css'],
				// 	extract: false,
				// 	sourceMap: true,
				// 	plugins: [postcssImport(), tailwindcss(), autoprefixer()],
				// 	inject: { insertAt: 'top' },
				// }),
			],
			external: [
				'react',
				'react-dom',
				'markdown-it',
				'markdown-it-emoji',
				'markdown-it-underline',
				'dompurify',
				'highlight.js',
			],
		},
	},
});
