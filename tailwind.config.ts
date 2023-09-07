import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs' :'500px',
          // => @media (min-width: 500px) { ... }

        'sm': '600px',
        // => @media (min-width: 600px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
        'smedium' : '861px',   
         // => @media (min-width: 861px) { ... }
        'medium' : '992px',   
         // => @media (min-width: 992px) { ... }
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      fontFamily: {
      sand: ['var(--font-sand)']  ,
      courier : ['var(--font-courier)'],
      space: ['var(--font-space)'],
     
      },
      colors: {
        primary: '#000',
        secodary: '#82837d80',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
