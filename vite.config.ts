import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import requireTransform from 'vite-plugin-require-transform';
const path = require('path');
export default defineConfig({
	// root: './demo',
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
		sourcemap: true,
		rollupOptions: {
			plugins: [],
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
