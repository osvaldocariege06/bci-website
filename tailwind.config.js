/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",        // se usas App Router
    "./pages/**/*.{js,ts,jsx,tsx}",      // se usas Pages Router
    "./components/**/*.{js,ts,jsx,tsx}", // componentes
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E72A87",
        secondary: "#163E39",
      },
    },
  },
  plugins: [],
};