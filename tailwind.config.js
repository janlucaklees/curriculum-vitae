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
				// rating: '#E98B2A',
				// aside: 'rgba(0, 92, 175, 0.75)',
				// border: 'rgba(11, 52, 110, 0.8)'
				//
				// Brown
				// subline: '#E98B2A',
				// rating: '#E98B2A',
				// aside: '#52433D',
				// border: '#3A3226'
				//
				// Light Brown
				// subline: 'rgba(215, 84, 85, 0.90)',
				// rating: 'rgba(215, 84, 85, 0.90)',
				// aside: 'rgba(82, 67, 61, 0.75)',
				// border: 'rgba(58, 50, 38, 0.75)'
				//
				// Light bown / purple
				// subline: '#E98B2A',
				// rating: '#E98B2A',
				// aside: '#72636E',
				// border: '#3A3226'
				//
				// Muted blue
				// subline: '#E98B2A',
				// rating: '#E98B2A',
				// aside: '#577C8A',
				// border: '#3A3226',
				//
				// Light Blue with Orange
				subline: '#F05E1C',
				rating: '#F05E1CCC',
				// aside: 'hsla(208, 100%, 30%, .666)',
				aside: '#1f5195',
				border: '#1c1c1caa'
				//
				// NGE
				// subline: '#F08B18',
				// rating: '#F08B18',
				// aside: '#711F8C',
				// border: '#2C8C1F',
				//
				// NGE 2
				// subline: '#f7ba2b',
				// rating: '#a3da58',
				// aside: '#a877c8',
				// border: '#592661',
				//
				// NGE 3
				// text: '#201D30',
				// subline: '#EC7744',
				// rating: '#5549B7',
				// aside: '#995cd0',
				// border: '#8edf5f'
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
