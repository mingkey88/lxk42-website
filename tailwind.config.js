/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html,svelte}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors (simple values for immediate compatibility)
        'lxk-sage': '#8FA68E',
        'lxk-mint': '#B8D4B8',
        'lxk-peach': '#E6A866',
        'lxk-coral': '#D4947A',
        'lxk-cream': '#F5F3F0',
        'lxk-warm-gray': '#5D5A56',
        'lxk-soft-teal': '#7BA098',
        // Semantic colors for UI states
        primary: {
          DEFAULT: '#8FA68E',
          dark: '#617661',
          light: '#B8D4B8',
        },
        secondary: {
          DEFAULT: '#E6A866',
          dark: '#ae6f35',
          light: '#f4dec4',
        },
        accent: {
          DEFAULT: '#D4947A',
          dark: '#9a5545',
          light: '#e8d4ca',
        },
        neutral: {
          DEFAULT: '#5D5A56',
          dark: '#4a4946',
          light: '#F5F3F0',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        // Enhanced spacing scale for consistency
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
        '46': '11.5rem',
        '50': '12.5rem',
        '54': '13.5rem',
        '58': '14.5rem',
        '62': '15.5rem',
        '66': '16.5rem',
        '70': '17.5rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
