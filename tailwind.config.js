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
				fs56: ['3.5rem', '1.25'],
				fs40: ['2.5rem', '1.275'],
				'fs36-45': ['2.25rem', '1.25'],
				fs32: ['2rem', '1.25'],
				fs28: ['1.75rem', '1.17'],
				'fs28-35': ['1.75rem', '1.25'],
				'fs24-32': ['1.5rem', '1.33'],
				'fs20-25': ['1.25rem', '1.25'],
				'fs18-28': ['1.125rem', '1.57'],
				'fs16-26': ['1rem', '1.625'],
				'fs16-28': ['1rem', '1.75'],
			},
		},
	},
	plugins: [],
};
