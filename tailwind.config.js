module.exports = {
	mdoe: 'jit',
	// purge: {
	// 	enabled: true,
	// 	content: ['./src/**/*.html', './src/**/*.jsx', './src/**/*.tsx'],
	// },
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				default: 'system-ui,-apple-system,BlinkMacSystemFont,".SFNSText-Regular",sans-serif;',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
