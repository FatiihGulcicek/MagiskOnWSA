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
        // Primary - Warm Terracotta
        terracotta: {
          50: "#fdf4f0",
          100: "#fbe5d8",
          200: "#f7cab0",
          300: "#f0a47e",
          400: "#e87549",
          500: "#d4522a",
          600: "#b8401f",
          700: "#94321a",
          800: "#792b1c",
          900: "#65261c",
          950: "#371009",
        },
        // Secondary - Deep Navy
        navy: {
          50: "#f0f4ff",
          100: "#e0eaff",
          200: "#c7d7fe",
          300: "#a5bbfc",
          400: "#8098f8",
          500: "#5d6ef3",
          600: "#4550e8",
          700: "#3840d4",
          800: "#2f35ab",
          900: "#1e2266",
          950: "#141650",
        },
        // Accent - Gold
        gold: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
          950: "#451a03",
        },
        // Neutral - Warm Cream
        cream: {
          50: "#fefdfb",
          100: "#fdf9f3",
          200: "#faf2e4",
          300: "#f5e6cc",
          400: "#edd5ac",
          500: "#e2bf84",
          600: "#d4a55e",
          700: "#b8874a",
          800: "#956d3e",
          900: "#795836",
          950: "#412e1b",
        },
        // Dark
        obsidian: {
          50: "#f6f6f5",
          100: "#e8e7e4",
          200: "#d2cfca",
          300: "#b3afa7",
          400: "#908980",
          500: "#756e64",
          600: "#625d54",
          700: "#524e47",
          800: "#47433d",
          900: "#3e3a35",
          950: "#18171a",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        arabic: ["var(--font-arabic)", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "slide-in-right": "slideInRight 0.8s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
        shimmer: "shimmer 2s linear infinite",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        marquee: "marquee 25s linear infinite",
        "marquee-reverse": "marquee-reverse 25s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern": "url('/patterns/kilim-pattern.svg')",
      },
      boxShadow: {
        luxury: "0 25px 60px -12px rgba(0,0,0,0.25)",
        "luxury-sm": "0 8px 30px -4px rgba(0,0,0,0.15)",
        card: "0 4px 24px -2px rgba(0,0,0,0.08), 0 2px 8px -2px rgba(0,0,0,0.05)",
        "card-hover": "0 20px 48px -8px rgba(0,0,0,0.18), 0 8px 16px -4px rgba(0,0,0,0.08)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },
    },
  },
  plugins: [],
};

export default config;
