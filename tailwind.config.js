/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true
    },
    screens: {
      sm: '600px',
      md: '728px',
      lg: '1024px',
      xl: '1240px'
    },
      extend: {
        keyframes: {
          slideDown:{
            "0%":{transform : "translateY(-10px)", opacity: "0"},
            "100%":{ transform: "translateY(0px)", opacity: "1"},
          },
        },
        animation: {
          "slide-down": "SlideDown 0.7s linear",
        }
      },
    
  },
  plugins: [
    function ({addUtilities}) {
      const newUtilities = {
        ".no-scrollbar::webkit-scrollbar": {
          display: "none",
        },
        "no.scrollbar":{
          "-ms-overflow-style":"none",
          "scrollbar-width": "none",
        }

      }
      addUtilities(newUtilities)
    }
],
};