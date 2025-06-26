/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				sidebar: 'var(--sidebar)',
				primary: 'var(--primary)',
				title: 'var(--title)',
				section: 'var(--section)',
				experience: 'var(--experience)',
				company: 'var(--company)'
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
