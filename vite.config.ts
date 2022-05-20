import { build, defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import requireTransform from 'vite-plugin-require-transform';
const path = require('path');
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [requireTransform({}), react()],
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/index.ts'),
			name: 'react-markdown-editor',
			fileName: (format) => `react-markdown-editor.${format}.js`,
		},
		rollupOptions: {
			external: ['react'],
		},
	},
});
