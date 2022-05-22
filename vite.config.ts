import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import requireTransform from 'vite-plugin-require-transform';
import postcss from 'rollup-plugin-postcss';
import postcssImport from 'postcss-import';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
const path = require('path');
export default defineConfig({
	plugins: [requireTransform({}), react()],
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/index.ts'),
			name: 'react-markdown-editor',
			fileName: (format) => `react-markdown-editor.${format}.js`,
		},
		rollupOptions: {
			external: [
				'react',
				'react-dom',
				'markdown-it',
				'markdown-it-emoji',
				'markdown-it-underline',
				'dompurify',
				'highlight.js',
			],
			// plugins: [
			// 	postcss({
			// 		extensions: ['.css'],
			// 		extract: true,
			// 		sourceMap: true,
			// 		plugins: [postcssImport(), tailwindcss(), autoprefixer()],
			// 	}),
			// ],
		},
	},
});
