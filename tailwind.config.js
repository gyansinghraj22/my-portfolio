/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      'xl': {'max': '1279px'},
      'lg': {'max': '1023px'},
      'md': {'max': '767px'},
      'sm': {'max': '639px'},
    },
    extend: {
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "#101820",
        lightText: "#c4cfde",
        boxBg: "linear-gradient(145deg, #1e2024, #23273b)",
        designColor: "#4dd3f1",
      },
      boxShadow: {
        ShadowOne: "10px 10px 19px #1c1e22,-10px -10px 19px #23272b",
      },
      animation: {
        'bounce-once': 'bounce 0.5s ease-in-out',
        'ping-slow': 'ping 5s cubic-bezier(0, 0, 1, 1) infinite',

      },
      keyframes: {
        'bounce-once': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
