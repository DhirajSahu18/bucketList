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
          yellow: "#F3DE1B",
          black: "#231F20",
          white: "#FFFFFF",
          offwhite: "#F7F6F0",
          gray: "#E9E9E5",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Arial Narrow", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 8vw, 6rem)", { lineHeight: "0.95", fontWeight: "900" }],
        "display-lg": ["clamp(2.5rem, 6vw, 4.5rem)", { lineHeight: "0.95", fontWeight: "900" }],
        "display-md": ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1", fontWeight: "800" }],
        "display-sm": ["clamp(1.5rem, 3vw, 2rem)", { lineHeight: "1.1", fontWeight: "700" }],
      },
      spacing: {
        "section": "clamp(4rem, 10vw, 8rem)",
      },
    },
  },
  plugins: [],
};

export default config;
