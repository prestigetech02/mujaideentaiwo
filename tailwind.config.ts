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
        brand: {
          primary: "#22E58A",
          purple: "#8b5cf6",
        },
        dark: {
          bg: "#05070B",
          surface: "#0B1018",
          border: "#1e293b",
        },
      },
      boxShadow: {
        neu: "12px 12px 30px rgba(0,0,0,0.55), -10px -10px 25px rgba(35,35,35,0.35)",
        "neu-soft":
          "8px 8px 22px rgba(0,0,0,0.45), -6px -6px 16px rgba(35,35,35,0.32)",
        "neu-inset":
          "inset 4px 4px 10px rgba(0,0,0,0.5), inset -4px -4px 10px rgba(35,35,35,0.25)",
      },
      backdropBlur: {
        glass: "18px",
      },
      borderRadius: {
        xl2: "1.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
