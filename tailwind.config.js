/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0a0a0a',
          100: '#111111',
          200: '#161616',
          300: '#1c1c1c',
        },
        pink: {
          hot: '#ff2e93',
        },
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        grotesk: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        bubble: ['Rubik Bubbles', 'cursive'],
      },
    },
  },
  plugins: [],
}