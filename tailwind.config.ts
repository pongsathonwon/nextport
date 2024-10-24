import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        deluge: {
          DEFAULT: "#7469B6",
          50: "#E6E4F2",
          100: "#DAD7EB",
          200: "#C0BBDE",
          300: "#A7A0D1",
          400: "#8D84C3",
          500: "#7469B6",
          600: "#574C9B",
          700: "#423976",
          800: "#2D2750",
          900: "#18142A",
          950: "#0D0B17",
        },
        white: "#fff",
        black: "#000",
        red: "#ef4444",
        blue: "#3b82f6",
        amber: "#f59e0b",
        primary: {
          DEFAULT: "rgba(var(--color-primary-1)/<alpha-value>)",
          1: "rgba(var(--color-primary-1)/<alpha-value>)",
          2: "rgba(var(--color-primary-2)/<alpha-value>)",
        },
        secondary: "rgba(var(--color-secondary)/<alpha-value>)",
        neutral: "rgba(var(--color-neutral)/<alpha-value>)",
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
        "spin-slow-delay1": "spin 10s 1s linear infinite",
        "spin-slow-delay5": "spin 10s 5s linear infinite",
        "pulse-slow": "pulse 5s linear infinite",
        next: "right 1s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
