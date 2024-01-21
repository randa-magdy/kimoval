import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-white-light-100':'linear-gradient(90deg,hsla(0,0%,100%,.1) 0,hsla(0,0%,100%,0))',
        'gradient-white-light-200':'linear-gradient(90deg,hsla(0,0%,100%,.2) 0,hsla(0,0%,100%,0))!important'
      },
      borderColor: {
        'white-light': 'hsla(0, 0%, 100%, 0.15)',
      },
      fontFamily: {
        body: ['Open Sans', 'system-ui', 'sans-serif'],
        heading: ['Open Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
