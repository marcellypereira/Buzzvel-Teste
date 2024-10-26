/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#581C87",
        dark: "#0F172A",
        blue: "#0369A1",
        blueLight: "#BAE6FD",
        light: "#FFFFFF",
        gray: "#475569",
        grayLight:"#e7e7e7",
        orange: "#D97706",
        yellow: "#FCD34D",
        brown: "#78350F",
        puerple: "#7E22CE",
      }
    },
  },
  plugins: [],
}

