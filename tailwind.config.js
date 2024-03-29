/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      Cyan: "hsl(179, 62%, 43%)",
      BrightCyan: "	hsl(179, 47%, 52%)",
      BrightYellow: "hsl(71, 73%, 54%)",
      LightGray: "hsl(204, 43%, 93%)",
      GrayishBlue: "hsl(218, 22%, 67%)",
      TitanWhite: "hsl(240, 100%, 100%)",
    },
  },
  plugins: [],
};
