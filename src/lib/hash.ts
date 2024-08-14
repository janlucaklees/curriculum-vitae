export default function hash(value: string, seed: number = 1) {
	return (
		value.split('').reduce((sum, char, i) => sum + ((i + seed) * char.charCodeAt(0)) / 256, 0) % 1
	);
}
