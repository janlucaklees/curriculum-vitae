import { writable } from 'svelte/store';

export const supportedThemes = {
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
	default: {
		name: 'Default',
		cssVariables: {
			subline: '#F05E1C',
			rating: '#F05E1CCC',
			// aside: 'hsla(208, 100%, 30%, .666)',
			aside: '#1f5195',
			border: '#1c1c1caa'
		}
	},
	// nge1: {
	// 	name: 'Neon Genesis Evangelion',
	// 	cssVariables: {
	// 		subline: '#F08B18',
	// 		rating: '#F08B18',
	// 		aside: '#711F8C',
	// 		border: '#2C8C1F'
	// 	}
	// },
	// nge2: {
	// 	name: 'Neon Genesis Evangelion 2',
	// 	cssVariables: {
	// 		subline: '#F08B18',
	// 		rating: '#F08B18',
	// 		aside: '#711F8C',
	// 		border: '#2C8C1F'
	// 	}
	// },
	nge3: {
		name: 'Unit 1',
		cssVariables: {
			subline: '#F08B18',
			rating: '#F08B18',
			aside: '#711F8C',
			border: '#2C8C1F'
		}
	}
};

export const selectedTheme = writable('default');

export function changeTheme(newTheme: string) {
	selectedTheme.set(newTheme);
}

// export const supportedColorSchemes = [
// 	{
// 		label: 'Light',
// 		code: 'light'
// 	},
// 	{
// 		label: 'Dark',
// 		code: 'dark'
// 	},
// 	{
// 		label: 'System',
// 		code: 'system'
// 	}
// ];

// export const selectedColorScheme = writable('light');

// export function changeColorScheme(newColorScheme: string) {
// 	selectedColorScheme.set(newColorScheme);
// }
