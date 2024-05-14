/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				subline: '#E98B2A',
				aside: 'rgba(0, 92, 175, 0.75)',
				border: 'rgba(11, 52, 110, 0.8)'
			}
		}
	},
	plugins: []
};
