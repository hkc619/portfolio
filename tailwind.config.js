/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // 👈 開啟暗黑模式支援
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7C3AED", // 紫色主色（Tailwind 紫 600）
          light: "#A78BFA",
          dark: "#6D28D9",
        },
      },
    },
  },
  plugins: [],
};
