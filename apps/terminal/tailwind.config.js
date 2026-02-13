/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bloomberg: {
          black: '#000000',
          orange: '#FF6600',
          amber: '#FBBF24',
          yellow: '#FCD34D',
          green: '#10B981',
          red: '#EF4444',
          blue: '#3B82F6',
        },
      },
      fontFamily: {
        mono: ['Monaco', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
};
