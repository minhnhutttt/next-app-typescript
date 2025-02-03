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
      "max-3xl" : {max : '1699px'},
      "max-2xl" : {max : '1535px'},
      "max-xl" : {max : '1279px'},
      "max-lg" : {max : '1023px'},
      "max-md" : {max : '767px'},
      "max-sm" : {max : '639px'},
      "3xl" : {min : '1700px'},
      "2xl" : {min : '1536px'},
      "xl" : {min : '1280px'},
      "lg" : {min : '1024px'},
      "md" : {min : '768px'},
      "sm" : {min : '640px'},
    },
    },
  },
  plugins: [],
});
export default config;
