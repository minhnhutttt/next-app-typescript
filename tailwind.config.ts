import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        zen: ["var(--font-zen)", "sans-serif"],
        serifHk: ["var(--font-serif-hk)", "sans-serif"],
      },
      screens: {
        dt: "1440px",
      },
    },
  },
  plugins: [],
}

export default config
