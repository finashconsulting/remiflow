/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        noto: ["var(--font-noto)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
        outfit: ['var(--font-outfit)', "sans-serif"],
      },
    },
  },
  plugins: [],
};
