const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#E30613',
          base: '#FFFCE5',
          pink: '#E60064',
          gold: '#A89258',
          blue: '#323044',
          green: '#ADA01F',
          purple: '#702283',
          brown: '#932826',
          orange: '#E84E0F',
        },
        gray: {
          300: '#CCCCCC',
          500: '#999999',
          700: '#666666',
          900: '#333333',
        }
      },
      fontFamily: {
        sans: ['"Graphik Web"', ...defaultTheme.fontFamily.sans],
        serif: ['"Canela Text Web"', ...defaultTheme.fontFamily.serif],
        orleans: ['"LifePlus Orleans Web"', ...defaultTheme.fontFamily.serif],
        'arabic-sans': ['"Graphik Arabic Web"', ...defaultTheme.fontFamily.sans],
        'arabic-serif': ['"Lyon Arabic Text Web"', ...defaultTheme.fontFamily.serif],
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            '--tw-prose-bullets': theme('colors.gray.500'),
            color: theme('colors.black'),
            fontFamily: theme('fontFamily.serif').join(','),
            a: {
              'transition-property': 'color, text-decoration-color',
              'transition-timing-function': 'cubic-bezier(0.4, 0, 0.2, 1)',
              'transition-duration': '150ms',
              color: theme('colors.brand.primary'),
              textDecoration: 'underline',
              lineHeight: '1.6875rem',
              '&:hover': {
                color: theme('colors.black'),
                textDecoration: 'none',
              },
            },
          }
        }
      })
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
