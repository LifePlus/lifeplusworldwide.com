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
        sans: ['"Graphik Web"', '"Graphik Arabic Web"', ...defaultTheme.fontFamily.sans],
        serif: ['"Canela Text Web"', '"Lyon Arabic Text Web"', ...defaultTheme.fontFamily.serif],
        orleans: ['"LifePlus Orleans Web"', ...defaultTheme.fontFamily.serif],
        'arabic-sans': ['"Graphik Arabic Web"', ...defaultTheme.fontFamily.sans],
        'arabic-serif': ['"Lyon Arabic Text Web"', ...defaultTheme.fontFamily.serif],
      },
      fontSize: {
        xxs: '0.5rem',
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            '--tw-prose-bullets': theme('colors.brand.primary'),
            '--tw-prose-counters': theme('colors.brand.primary'),
            color: theme('colors.black'),
            fontFamily: theme('fontFamily.serif').join(','),
            lineHeight: '1.6875rem',
            a: {
              'transition-property': 'color, text-decoration-color',
              'transition-timing-function': 'cubic-bezier(0.4, 0, 0.2, 1)',
              'transition-duration': '150ms',
              color: theme('colors.brand.primary'),
              textDecoration: 'underline',
              fontFamily: theme('fontFamily.sans').join(','),
              '&:hover': {
                color: theme('colors.black'),
                textDecoration: 'none',
              },
            },
            p: {
              marginTop: 0,
              marginBottom: '1.6875rem',
            },
            img: {
              marginTop: 0,
              marginBottom: '1.7rem',
            },
            strong: {
              fontWeight: theme('fontWeight.bold'),
            },
            h3: {
              fontWeight: theme('fontWeight.bold'),
            },
            h4: {
              fontWeight: theme('fontWeight.bold'),
            },
          }
        },
        lg: {
          css: {
            fontFamily: theme('fontFamily.serif').join(','),
            lineHeight: '1.7rem',
            p: {
              marginTop: 0,
              marginBottom: '1.7rem',
            },
            img: {
              marginTop: 0,
              marginBottom: 0,
            },
          }
        },
        xl: {
          css: {
            lineHeight: '1.75rem',
          }
        },
        '2xl': {
          css: {
            lineHeight: '1.875rem',
          }
        },
      })
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-rtl'),
  ],
}
