/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'neubrutalism': {
          'yellow': '#FFE066',
          'pink': '#FF6B9D',
          'blue': '#4ECDC4',
          'purple': '#A8E6CF',
          'orange': '#FFB347',
          'red': '#FF6B6B',
          'green': '#51CF66',
          'black': '#2D3436',
          'white': '#FFFFFF',
        }
      },
      boxShadow: {
        'neubrutalism': '8px 8px 0px #2D3436',
        'neubrutalism-sm': '4px 4px 0px #2D3436',
        'neubrutalism-lg': '12px 12px 0px #2D3436',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
