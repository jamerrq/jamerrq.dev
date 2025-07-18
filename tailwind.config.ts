export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // or 'media' or 'class
  theme: {
    debugScreens: {
      style: {
        backgroundColor: 'gold',
        color: 'black',
        position: 'fixed',
        borderRadius: '5px',
        fontFamily: 'Fira Code',
        fontStyle: 'italic',
        fontSize: '10px',
        fontWeight: 'bold',
        margin: '5px',
        opacity: '0.9'
      },
      position: ['bottom', 'right']
    },
    screens: {
      xs: { min: '300px', max: '639px' },
      // => @media (min-width: 300px and max-width: 639px) { ... }

      sm: { min: '640px', max: '767px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: '768px', max: '1023px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: '1024px', max: '1279px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: '1280px' } //, max: '1535px' },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      // '2xl': { min: '1536px' },
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        calistoga: ['Calistoga', 'system-ui'],
        rubikDoodle: ['Rubik Doodle Subset', 'system - ui'],
        merriweather: ['Merriweather', 'serif'],
        averia: ['Averia Serif Libre', 'system-ui'],
        firaSans: ['Fira Sans', 'sans-serif'],
        firaMono: ['Fira Mono', 'monospace'],
        bitter: ['Bitter Variable', 'serif'],
        primary: ['Bitter Variable', 'serif'],
        secondary: ['Bitter Variable', 'serif']
      },
      colors: {
        blueBoard: '#153448'
      }
    }
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    require('@midudev/tailwind-animations'),
    'prettier-plugin-tailwindcss'
  ],
  safelist: [
    'fill-[#BC52EE]',
    'fill-[#3FCF8E]',
    'fill-[#000000]',
    'fill-[#06B6D4]',
    'fill-[#3178C6]',
    'fill-[#512BD4]',
    'fill-[#512BD4]',
    'fill-[#000000]',
    'fill-[#52B0E7]',
    'fill-[#4169E1]',
    'fill-[#61DAFB]',
    'fill-[#3776AB]',
    'fill-[#F37626]',
    'fill-[#008080]',
    'fill-[#E34F26]',
    'fill-[#F7DF1E]',
    'fill-[#777BB4]',
    'fill-[#1572B6]',
    'fill-[#339933]',
    'bg-indigo-100',
    'bg-indigo-900',
    'text-indigo-800',
    'text-indigo-300',
    'bg-yellow-100',
    'bg-yellow-900',
    'text-yellow-800',
    'text-yellow-300',
    'bg-amber-100',
    'bg-amber-900',
    'text-amber-800',
    'text-amber-300',
    'bg-red-100',
    'bg-red-900',
    'text-red-800',
    'text-red-300',
    'bg-teal-100',
    'bg-teal-900',
    'text-teal-800',
    'text-teal-300',
    'bg-pink-100',
    'bg-pink-900',
    'text-pink-800',
    'text-pink-300',
    'animate-delay-100',
    'animate-delay-200'
  ]
}
