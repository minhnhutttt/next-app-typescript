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
    },
    fontFamily: {
      dela: ["Dela Gothic One", "sans-serif"],
      noto: ["Noto Sans JP", "sans-serif"],
      lato: ["Lato", "sans-serif"],
      notoCJK: ["Noto Sans CJK JP", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      zenOld: ["Zen Old Mincho", "sans-serif"],
      zenMaru: ["Zen Maru Gothic", "sans-serif"],
      dm: ["DM Sans", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
