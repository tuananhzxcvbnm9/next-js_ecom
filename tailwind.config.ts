import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(240 6% 90%)",
        input: "hsl(240 6% 90%)",
        ring: "hsl(250 84% 54%)",
        background: "hsl(0 0% 100%)",
        foreground: "hsl(240 10% 4%)",
        primary: {
          DEFAULT: "hsl(250 84% 54%)",
          foreground: "hsl(0 0% 100%)"
        },
        muted: {
          DEFAULT: "hsl(240 5% 96%)",
          foreground: "hsl(240 4% 46%)"
        }
      },
      boxShadow: {
        premium: "0 12px 48px -24px rgba(67, 56, 202, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
