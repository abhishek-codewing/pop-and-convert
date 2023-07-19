import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          default: '#2f65d5',
          accent: '#dde8ff'
        },
        static: {
          default: '#ababab',
          accent: '#e0e9ec',
        },
        font: {
          default: '#111827',
          accent: '#3c434a'
        }
      },
      fontFamily: {
        serif: ['Inter', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

