import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'franchise': ['franchise','sans-serif'],
        'lunch': ['lunch','sans-serif'],
        'lemonmilk': ['lemon','sans-serif'],
        'lemonmilk-m': ['lemonM','sans-serif']
      },
      animation: {
        text: "text 5s ease infinite",
      },
      keyframes:{
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        }
      },
      boxShadow: {
        'custom': '4px 10px 20px #0000000a',
      }
    },
  },
  plugins: [],
}
export default config
