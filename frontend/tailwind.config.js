/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBg: "#dae0e6",
        input: "#f6f7f8",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
