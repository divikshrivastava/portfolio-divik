import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/theme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        customPulse: {
          '0%': { boxShadow: '0 0 0 0 #69ffa8' },
          '100%': { boxShadow: '0 0 0 14px #69ffa800' },
        },
      },
      animation: {
        customPulse: 'customPulse 1.5s infinite ease-in-out',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
