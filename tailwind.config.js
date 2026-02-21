/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,mdx}",
    "./components/**/*.{js,jsx,mdx}",
    "./app/**/*.{js,jsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-violet': '#8b5cf6',
        'neon-blue': '#3b82f6',
        'glass-white': 'rgba(255, 255, 255, 0.05)',
        'glass-border': 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        'heading': ['var(--font-orbitron)', 'sans-serif'],
        'body': ['var(--font-inter)', 'sans-serif'],
      },
      boxShadow: {
        'neon-violet': '0 0 20px rgba(139, 92, 246, 0.5)',
        'glow-lg': '0 0 30px rgba(139, 92, 246, 0.5)',
      }
    },
  },
  plugins: [],
}