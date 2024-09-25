import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-100": "#f2f4f7",
        "gray-200": "#e4e7ec",
        "gray-300": "#d0d5dd",
        "gray-600": "#475467",
        "gray-700": "#344054",
        "gray-900": "#101828",
        "brand-50": "#f9f5ff",
        "brand-100": "#F4EBFF",
        "brand-600": "#7f56d9",
        "brand-700": "#6941c6",
      },
    },
  },
  plugins: [],
};
export default config;
