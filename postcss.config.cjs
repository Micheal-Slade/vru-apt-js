// eslint-disable-next-line @typescript-eslint/no-require-imports
const tailwindcss = require('tailwindcss');

// eslint-disable-next-line @typescript-eslint/no-require-imports
const autoprefixer = require('autoprefixer');

const config = {
	plugins: [
		//Some plugins, like tailwindcss/nesting, need to run before Tailwind,
		tailwindcss(),
		//But others, like autoprefixer, need to run after,
		autoprefixer
	]
};

module.exports = config;
