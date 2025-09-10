/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html,svelte}",
  ],
  theme: {
    extend: {
      colors: {
        'lxk-sage': '#8FA68E',
        'lxk-mint': '#B8D4B8',
        'lxk-peach': '#E6A866',
        'lxk-coral': '#D4947A',
        'lxk-cream': '#F5F3F0',
        'lxk-warm-gray': '#5D5A56',
        'lxk-soft-teal': '#7BA098',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
