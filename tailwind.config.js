/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				subline: 'var(--subline)',
				rating: 'var(--rating)',
				aside: 'var(--aside)',
				border: 'var(--border)'
			},
			screens: {
				print: { raw: 'print' }
			},
			fontWeight: {
				medium: '450'
			}
		}
	},
	plugins: []
};
