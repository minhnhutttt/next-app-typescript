import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'selector',
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
    },
    fontFamily: {
      inter: ["var(--font-inter)", "sans-serif"],
      mplus: ["var(--font-mplus)", "sans-serif"],
      noto: ["var(--font-noto)", "sans-serif"],
      gothic: ["Hiragino Kaku Gothic Std", "sans-serif"],
      
    },
  },
  plugins: [],
};
export default config;
