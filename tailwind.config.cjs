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
          mauve: '#733345',
          turquoise: '#27BDBE',
          brown: '#532A08',
          orange: '#F15A22',
          green: '#B9AB0F',
          chengdu: '#A9112C',
          qingdao: '#00053E',
          tianjin: '#273691',
          wellspring: '#009DC7',
          wuhan: '#004023',
          wuxi: '#00A88E',
          yantai: '#6C2888',
        },
        gray: {
          300: '#CCCCCC',
          500: '#999999',
          700: '#666666',
          900: '#333333',
        }
      },
      fontFamily: {
        sans: ['"Graphik Web"', 'source-han-sans-simplified-c', 'source-han-sans-korean', '"Graphik Arabic Web"', ...defaultTheme.fontFamily.sans],
        serif: ['"Canela Text Web"', 'source-han-serif-sc', 'source-han-serif-korean', 'source-han-serif-korean', '"Lyon Arabic Text Web"', ...defaultTheme.fontFamily.serif],
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
            lineHeight: '1.4',
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
            ul: {
              listStylePosition: 'inside',
              paddingLeft: 0,
              '> li': {
                paddingLeft: 0,
                'p:first-child': {
                  display: 'inline',
                },
              },
            },
            li: {
              marginTop: 0,
              marginBottom: 0,
              paddingLeft: 0,
              p: {
                marginBottom: 0,
              }
            },
            img: {
              marginTop: 0,
              marginBottom: '1.7rem',
            },
            strong: {
              fontWeight: theme('fontWeight.bold'),
              color: 'inherit',
            },
            'h2:first-child': {
              marginTop: 0,
            },
            h2: {
              fontFamily: theme('fontFamily.sans').join(','),
            },
            h3: {
              fontWeight: theme('fontWeight.bold'),
            },
            h4: {
              fontWeight: theme('fontWeight.bold'),
            },
          }
        },
        sm: {
          css: {
            lineHeight: '1.4',
          }
        },
        lg: {
          css: {
            fontFamily: theme('fontFamily.serif').join(','),
            lineHeight: '1.4',
            p: {
              marginTop: 0,
              marginBottom: '1.5rem',
            },
            img: {
              marginTop: 0,
              marginBottom: 0,
            },
            ul: {
              paddingLeft: 0,
              '> li': {
                paddingLeft: 0,
              }
            },
            li: {
              marginTop: 0,
              marginBottom: 0,
              paddingLeft: 0,
            },
            'h2:first-child': {
              marginTop: 0,
            },
          }
        },
        xl: {
          css: {
            lineHeight: '1.4',
          },
          'h2:first-child': {
            marginTop: 0,
          },
        },
        '2xl': {
          css: {
            lineHeight: '1.4',
            'h2:first-child': {
              marginTop: 0,
            },
          },
        },
      })
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
