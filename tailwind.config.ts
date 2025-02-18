import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blueL: "#6F9DE2",
        purpleL: "#9871F3",
        danger: "#F05D6C",
      },
    },
    fontFamily: {
      sans: ["var(--font-oxanium)", "sans-serif"],
      mono: ["var(--font-montserrat)", "monospace"],
    },
  },
  plugins: [],
} satisfies Config;
  