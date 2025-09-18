/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,html,svelte}'],
  safelist: [
    // Ensure animation classes aren't purged
    'animate-kaki-float',
    'animate-kaki-pulse',
    'animate-kaki-glow',
    'animate-gentle-bounce',
    'animate-organic-scale',
    'will-change-transform',
    'will-change-opacity',
    'will-change-auto',
    'kaki-gradient',
    'kaki-glass',
    'kaki-morphism',
    'perspective-1000',
    'backface-hidden',
    'transform-style-preserve-3d',
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
        // Enhanced color system with opacity variants
        'lxk-sage-50': 'rgba(143, 166, 142, 0.05)',
        'lxk-sage-100': 'rgba(143, 166, 142, 0.1)',
        'lxk-sage-200': 'rgba(143, 166, 142, 0.2)',
        'lxk-peach-50': 'rgba(230, 168, 102, 0.05)',
        'lxk-peach-100': 'rgba(230, 168, 102, 0.1)',
        'lxk-peach-200': 'rgba(230, 168, 102, 0.2)',
        // Semantic colors for UI states
        primary: {
          DEFAULT: '#8FA68E',
          dark: '#617661',
          light: '#B8D4B8',
          50: 'rgba(143, 166, 142, 0.05)',
          100: 'rgba(143, 166, 142, 0.1)',
        },
        secondary: {
          DEFAULT: '#E6A866',
          dark: '#ae6f35',
          light: '#f4dec4',
          50: 'rgba(230, 168, 102, 0.05)',
          100: 'rgba(230, 168, 102, 0.1)',
        },
        accent: {
          DEFAULT: '#D4947A',
          dark: '#9a5545',
          light: '#e8d4ca',
          50: 'rgba(212, 148, 122, 0.05)',
          100: 'rgba(212, 148, 122, 0.1)',
        },
        neutral: {
          DEFAULT: '#5D5A56',
          dark: '#4a4946',
          light: '#F5F3F0',
          50: 'rgba(93, 90, 86, 0.05)',
          100: 'rgba(93, 90, 86, 0.1)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        // Enhanced spacing scale for consistency
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
        30: '7.5rem',
        34: '8.5rem',
        38: '9.5rem',
        42: '10.5rem',
        46: '11.5rem',
        50: '12.5rem',
        54: '13.5rem',
        58: '14.5rem',
        62: '15.5rem',
        66: '16.5rem',
        70: '17.5rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      backdropBlur: {
        xs: '2px',
        '4xl': '72px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'kaki-mesh':
          'radial-gradient(circle at 25% 25%, rgba(143, 166, 142, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(230, 168, 102, 0.1) 0%, transparent 50%)',
      },
      boxShadow: {
        kaki: '0 4px 20px rgba(143, 166, 142, 0.15)',
        'kaki-lg': '0 8px 32px rgba(143, 166, 142, 0.2)',
        peach: '0 4px 20px rgba(230, 168, 102, 0.15)',
        'peach-lg': '0 8px 32px rgba(230, 168, 102, 0.2)',
        warm: '0 4px 20px rgba(212, 148, 122, 0.15)',
        organic: '0 8px 25px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(143, 166, 142, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'kaki-float': 'kakiFloat 6s ease-in-out infinite',
        'kaki-pulse': 'kakiPulse 4s ease-in-out infinite',
        'kaki-glow': 'kakiGlow 8s ease-in-out infinite',
        'gentle-bounce': 'gentleBounce 2s ease-in-out infinite',
        'organic-scale': 'organicScale 5s ease-in-out infinite',
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
        kakiFloat: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-8px) rotate(1deg)' },
          '50%': { transform: 'translateY(-12px) rotate(0deg)' },
          '75%': { transform: 'translateY(-6px) rotate(-1deg)' },
        },
        kakiPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.05)', opacity: '1' },
        },
        kakiGlow: {
          '0%, 100%': {
            filter: 'brightness(1) drop-shadow(0 0 0 transparent)',
            transform: 'scale(1)',
          },
          '50%': {
            filter: 'brightness(1.1) drop-shadow(0 4px 20px rgba(230, 168, 102, 0.3))',
            transform: 'scale(1.02)',
          },
        },
        gentleBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        organicScale: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
          '33%': { transform: 'scale(1.02) rotate(0.5deg)' },
          '66%': { transform: 'scale(0.98) rotate(-0.5deg)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    // Custom plugin for kaki-specific utilities
    function ({ addUtilities, theme, e }) {
      const kakiUtilities = {
        '.kaki-gradient': {
          background: 'linear-gradient(135deg, #8FA68E 0%, #E6A866 50%, #D4947A 100%)',
        },
        '.kaki-glass': {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        },
        '.kaki-morphism': {
          background: 'rgba(245, 243, 240, 0.25)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
          borderRadius: '10px',
          border: '1px solid rgba(255, 255, 255, 0.18)',
        },
        '.will-change-transform': {
          willChange: 'transform',
        },
        '.will-change-opacity': {
          willChange: 'opacity',
        },
        '.will-change-auto': {
          willChange: 'auto',
        },
        '.perspective-1000': {
          perspective: '1000px',
        },
        '.backface-hidden': {
          backfaceVisibility: 'hidden',
        },
        '.transform-style-preserve-3d': {
          transformStyle: 'preserve-3d',
        },
        '.touch-device .hover\\:': {
          '@media (hover: none)': {
            '&:hover': {
              transform: 'none !important',
              scale: '1 !important',
            },
          },
        },
      };

      addUtilities(kakiUtilities);
    },
  ],
};
