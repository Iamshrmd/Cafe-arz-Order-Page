/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
              '49': '49%',
        },
      keyframes: {
          moveLeft: {
            '0%': { right: '0' },
            '100%': { left: '0' },
          }
        },
      animation: {
        moveLeft: {
          '0%': { right: '0' },
          '100%': { left: '0' },
        }
        }
    },
  },
  plugins: [],
}