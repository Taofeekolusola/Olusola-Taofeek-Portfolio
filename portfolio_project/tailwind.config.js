// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a',   // deep blue
        secondary: '#f1f5f9', // light gray
        text: '#0f172a',      // slate-900
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      animation: {
        floating: 'floating 3s ease-in-out infinite',
      },
      keyframes: {
        floating: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
          '100%': { transform: 'translateY(0px)' },
        },
      },
    },
  },
  plugins: [],
};
