/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('/src/assets/images/bg-img.jpg')",
      },
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif']
      },
      // gridTemplateColumns: {
      //   '70/30': '70% 28%',
      // }
      colors: {
        primary: {
          brightBlue: 'hsl(220, 98%, 61%)',
          checkBackground: {
            from: 'hsl(192, 100%, 67%)',
            to: 'hsl(280, 87%, 65%)',
          },
        },
        neutral: {
            veryDarkBlue: 'hsl(235, 21%, 11%)',
            veryDarkDesaturatedBlue: 'hsl(235, 24%, 19%)',
            lightGrayishBlue: 'hsl(234, 39%, 85%)',
            lightGrayishBlueHover: 'hsl(236, 33%, 92%)',
            darkGrayishBlue: 'hsl(234, 11%, 52%)',
            veryDarkGrayishBlue1: 'hsl(233, 14%, 35%)',
            veryDarkGrayishBlue2: 'hsl(237, 14%, 26%)',
        },
        white: {
          100: "rgba(255, 255, 255, 1)",
          200: "rgba(249, 251, 253, 1)",
          // 300: "rgb(242 253 253)",
          400: "rgb(249, 251, 253)",
          500: "rgb(230 227 227)",
          600: "rgb(240, 240, 240)",
          700: "rgba(247, 249, 251, 1)",
          800: "rgba(247, 248, 249, 1)",
        },
        gray: {
          50: "rgb(233, 236, 242)",
          100: "rgba(202, 202, 202, 1)",
          200: "rgba(229, 229, 229, 1)",
          300: "rgba(79, 79, 79, 1)",
          400: "rgba(52, 50, 50, 1)",
          500: "rgb(130, 130, 130)",
          600: "rgba(102, 102, 102, 1)",
          700: "rgba(9, 30, 66, 0.12)",
          800: "rgba(9, 30, 66, 0.31)",
        },
        dark: {
          100: "rgb(0, 0, 0)",
          200: "rgba(0, 0, 0, 1)",
          300: "rgba(0, 0, 0, 0.5)",
          400: "rgba(0, 0, 0, 0.7)",
          500: "rgba(27, 28, 30, 1)",
        },
      },
      boxShadow: {
        sm: "10px 44px 40px rgba(0, 0, 0, 0.05)",
        form: "0px 8px 16px 0px rgba(9, 30, 66, 0.06)",
        custom1: "0px 8px 12px 0px rgba(9, 30, 66, 0.15)",
        custom2: "0px 0px 1px 0px rgba(9, 30, 66, 0.31)",
      },
    },
  },
  variant: {
    extends: {}
  },
  plugins: [],
}

