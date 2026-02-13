/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        'terminal-black': '#000000',
        'terminal-orange': '#FF6600',
        'terminal-text': '#00FF00',
        'terminal-text-dim': '#00AA00',
        'terminal-blue': '#0099FF',
        'terminal-yellow': '#FFFF00',
        'terminal-red': '#FF0000',
        'terminal-gray': '#333333',
        'terminal-border': '#00FF00',
      },
      fontFamily: {
        mono: ['Courier New', 'monospace'],
      },
      borderColor: {
        DEFAULT: '#00FF00',
      },
    },
  },
  plugins: [],
}
