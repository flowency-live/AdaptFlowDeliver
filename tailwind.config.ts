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
        background: "var(--background)",
        foreground: "var(--foreground)",
        // AFD Brand Colors - Professional Turquoise & Blues
        primary: {
          50: '#ecfeff',   // Very light turquoise
          100: '#cffafe',  // Light turquoise
          200: '#a5f3fc',  // Soft turquoise
          300: '#67e8f9',  // Bright turquoise (accents/highlights)
          400: '#22d3ee',  // Vibrant turquoise
          500: '#0891b2',  // Main brand turquoise
          600: '#0e7490',  // Deeper turquoise
          700: '#155e75',  // Dark turquoise
          800: '#164e63',  // Very dark turquoise
          900: '#083344',  // Darkest turquoise
        },
        secondary: {
          50: '#f0f9ff',   // Very light blue
          100: '#e0f2fe',  // Light blue
          200: '#bae6fd',  // Soft blue
          300: '#7dd3fc',  // Medium blue
          400: '#38bdf8',  // Bright blue
          500: '#0284c7',  // Strong blue
          600: '#0369a1',  // Deep blue
          700: '#075985',  // Darker blue
          800: '#0c4a6e',  // Very dark blue (authority)
          900: '#082f49',  // Darkest blue
        },
        accent: {
          light: '#67e8f9',   // Light turquoise for CTAs
          DEFAULT: '#0891b2', // Main turquoise
          dark: '#0c4a6e',    // Deep blue for contrast
        },
      },
    },
  },
  plugins: [],
};
export default config;
