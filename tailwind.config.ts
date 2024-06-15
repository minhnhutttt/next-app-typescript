import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        dt: "1440px",
      },
      boxShadow: {
        base: "0px 0px 20px 0px rgba(0, 0, 0, 0.05)",
      },
      colors: {
        main: "#0D0D0D",
      },
    },
    fontFamily: {
      inter: ["var(--font-inter)", "sans-serif"],
      serif: ["var(--font-serif)", "sans-serif"],
      roboto: ["var(--font-roboto)", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
