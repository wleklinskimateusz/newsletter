import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      "Dark-Navy": "#242742",
      "Pale-Navy": "#36384D",
      Vermilon: "#FF6155",
      grey: {
        25: "rgba(25, 24, 43, 0.25)",
      },
    },
    fontSize: {
      "2xl": "56px",
      xl: "40px",
      sm: "12px",
    },
    extend: {
      backgroundColor: {
        warning: "rgba(255, 97, 85, 0.15)",
      },
      boxShadow: {
        color: "0px 16px 32px 0px rgba(255, 97, 85, 0.50)",
        box: "0px 15px 60px 0px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        "Gradient-1": "linear-gradient(204deg, #FF6A3A 0%, #FF527B 100%)",
      },
      lineHeight: {
        full: "100%",
      },
      fontFamily: {
        roboto: "var(--roboto)",
      },
    },
  },
  plugins: [],
};
export default config;
