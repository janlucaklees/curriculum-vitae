import { writable } from 'svelte/store';

export const supportedLocales = [
	{
		label: 'English',
		code: 'en'
	},
	{
		label: 'Deutsch',
		code: 'de'
	}
];

export const locale = writable('en');

export function changeLocale(newLocale: string) {
	locale.set(newLocale);
}
