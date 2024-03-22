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
      screens:{
        'xxl':'1400px'
      },
      backgroundImage: {
        'gradient-radial':'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-white-light-100':'linear-gradient(90deg,hsla(0,0%,100%,.1) 0,hsla(0,0%,100%,0))',
        'gradient-white-light-200':'linear-gradient(90deg,hsla(0,0%,100%,.2) 0,hsla(0,0%,100%,0))!important',
        'gredient-black-purpel':'radial-gradient(ellipse 120% 210% at 95% 0,#3b3ece 10%,#2f32a9 20%,#03031a 70%)',
        'gredient-gray-white':'linear-gradient(90deg,#f5f5f5,#fff)'
      },
      backgroundColor:{
        'transparent-white':'hsla(0, 0%, 100%, 0.15)',
        'primary':'#3b3ece',
        'dark-primary':'#2f32a9',
        'light-primary':'#5c5ff4',
        'secondary':'#03031a',
        'gray-white':'#f9fafb',
        'dark-gray-white':'#f3f5fa',
        'light-gray':'#e8ecf3',
        'dark-gray':'#a7a7b1'
      },
      borderColor: {
        'white-light': 'hsla(0, 0%, 100%, 0.15)',
      },
      fontFamily: {
        body: ['Open Sans', 'system-ui', 'sans-serif'],
        heading: ['Open Sans', 'system-ui', 'sans-serif'],
      },
      fontSize:{
        'h1':'clamp(1.7rem, 4vw, 3rem)',
        'h2':'clamp(1.5rem, 2.8vw, 2.2rem)',
        'h3':'clamp(1.2rem, 2.13vw, 1.6rem)',
        'h4':'clamp(1rem, 1.7vw, 1.34rem)',
        'h5':'clamp(1rem, 1.67vw, 1.25rem)',
        'h6':'clamp(0.8rem, 1.3vw, 1rem)',
        'normal':'clamp(16px, 1.5vw, 18px)',
        'medium':'clamp(14px, 1.3vw, 16px)',
        'less-medium':'clamp(12px, 1.2vw, 14px)',
        'small':'clamp(11px, 1vw, 13px)'
      },
      colors:{
        'primary':'#3b3ece',
        'light-primary':'#5c5ff4',
        'dark-primary':'#2f32a9',
        'secondary':'#03031a',
        'dark-gray':'#4f4e56',
        'light-gray':'#a7a7b1',
        'crimson':'crimson'
      },
      container:{
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      }
    },
    
  },
  plugins: [],
}
export default config
