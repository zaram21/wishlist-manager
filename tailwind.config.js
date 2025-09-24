export default {
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        accent: "#10B981",
      },
      fontFamily: {
        sans: ['Vazirmatn', 'Inter', 'ui-sans-serif', 'system-ui'],
      }
    },
  },
  plugins: [],
}

