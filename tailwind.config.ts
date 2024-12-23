import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");
const config: Config = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}"
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
      "max-sm" : {max : '640px'},
      "max-md" : {max : '768px'},
      "max-lg" : {max : '1024px'},
      "max-xl" : {max : '1280px'},
      "max-2xl" : {max : '1536px'},
    },
    },
  },
  plugins: [],
});
export default config;
