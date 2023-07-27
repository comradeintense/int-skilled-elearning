/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'Dusted-Peri': 'hsl(234, 25%, 52%)',
				'Deadly-Depths': 'hsl(233, 54%, 16%)',
				'Top-Shelf': 'hsl(232, 10%, 56%)',
				'Flamboyant-Flamingo': 'hsl(341, 92%, 62%)',
				'Taffy-Pink': 'hsl(341, 100%, 83%)',
				'Magnificent-Magenta-gr': 'hsl(322, 87%, 55%)',
				'Outrageous-Orange-gr': 'hsl(13, 100%, 64%)',
				'Hooloovoo-Blue-gr': 'hsl(237, 100%, 64%)',
			},
			fontSize: {
				HeadingXL: [
					'clamp(1.5rem, -0.8855rem + 10.1781vw, 4rem)',
					{
						lineHeight: '1.25',
						fontWeight: '800',
					},
				],
			},
		},
	},
	plugins: [],
};
