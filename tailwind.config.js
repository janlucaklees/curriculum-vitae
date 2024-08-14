/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				//
				// Blue
				// subline: '#E98B2A',
				// aside: 'rgba(0, 92, 175, 0.75)',
				// border: 'rgba(11, 52, 110, 0.8)'
				//
				// Brown
				// subline: '#E98B2A',
				// aside: '#52433D',
				// border: '#3A3226'
				//
				// Light Brown
				subline: 'rgba(215, 84, 85, 0.90)',
				aside: 'rgba(82, 67, 61, 0.75)',
				border: 'rgba(58, 50, 38, 0.75)'
				//
				// Light bown / purple
				// subline: '#E98B2A',
				// aside: '#72636E',
				// border: '#3A3226'
				//
				// Muted blue
				// subline: '#E98B2A',
				// aside: '#577C8A',
				// border: '#3A3226'
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
