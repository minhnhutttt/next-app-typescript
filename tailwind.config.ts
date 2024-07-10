import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "serif"],
        inter: ["var(--font-inter)", "serif"],
        serif: ["var(--font-serif)", "serif"],
      },
      screens: {
        dt: "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
