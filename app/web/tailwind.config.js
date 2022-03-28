module.exports = {
  content: [
    './node_modules/flowbite/**/*.js',
    './dist/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './*.html',
    '../../pkgs/theme/src/**/*.{js,jsx,ts,tsx}',
    '../../pkgs/web/ui/src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        bungee: ['Bungee', 'cursive'],
      },
      backgroundImage: {
        primary:
          'linear-gradient(90deg, rgba(255, 118, 20, 1) 0%, rgba(255, 84, 17, 1) 100%)',
        second:
          'linear-gradient(90deg, rgba(93, 12, 255, 1) 0%, rgba(155, 0, 250, 1) 100%)',
        third:
          'linear-gradient(90deg, rgba(255, 12, 241, 1) 0%, rgba(250, 0, 135, 1) 100%)',
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/line-clamp'),
  ],
}
