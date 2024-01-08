import type { Config } from 'tailwindcss'
export default <Partial<Config>>{
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        // Poppins: true,
        poppins: ['Poppins', 'sans-serif'],
        // Roboto: true,
        roboto: ['Roboto', 'sans-serif'],
        // Outfit: true
        outfit: ['Outfit', 'sans-serif'],
        // Inter: true
        inter: ['Inter', 'sans-serif']
      },
      screens: {
        xs: '475px'
      },
      boxShadow: {
        blur: '0px 0px 40px 40px #00000033'
      },
      animation: {
        shake: 'shake 1s cubic-bezier(.36,.07,.19,.97) infinite',
        pulse2: 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        shake: {
          '10%, 90%': { transform: 'rotate(0)' },
          '20%, 80%': { transform: 'rotate(-10deg)' },
          '30%, 50%, 70%': { transform: 'rotate(0)' },
          '40%, 60%': { transform: 'rotate(10deg)' }
        }
      },
      colors: {
        albonyan: {
          '50': '#f9f0df',
          '100': '#f5e9d0',
          '200': '#ebcf9c',
          '300': '#e0b369',
          '400': '#d99b46',
          '500': '#d07e30',
          '600': '#b86027',
          '700': '#994624',
          '800': '#7d3823',
          '900': '#673020',
          '950': '#3b160d',
        },
      }
    }
  }
}
