import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      // The following screen sizes are converted into css like so
      // @media (max-width: ...px) { ... }
      "2xl": { max: "1536px" },
      xl: { max: "1280px" },
      lg: { max: "1024px" },
      md: { max: "768px" },
      sm: { max: "640px" },
      xs: { max: "480px" },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lightGreen: "var(--light-green)",
        darkGreen: "var(--dark-green)",
      },
      fontFamily: {
        spartan: ['"League Spartan"', 'sans-serif'],
        lalezar: ["Lalezar"],
      },
    },
  },
  plugins: [],
};
export default config;
