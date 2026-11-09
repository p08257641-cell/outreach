/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#10243A",
          50: "#f3f6fa",
          100: "#e2e9f2",
          200: "#c5d3e4",
          300: "#9aafc8",
          400: "#6983a4",
          500: "#476181",
          600: "#364c64",
          700: "#2c3d52",
          800: "#10243A",
          900: "#0B1726",
          950: "#070f1a",
        },
        royal: {
          DEFAULT: "#2563EB",
          50: "#eff5ff",
          100: "#dae8ff",
          200: "#bed6ff",
          300: "#91baff",
          400: "#5d93ff",
          500: "#2563EB",
          600: "#1a4fd1",
          700: "#173fb0",
          800: "#17378b",
          900: "#19326f",
        },
        gold: {
          DEFAULT: "#C6A667",
          50: "#fbf8ef",
          100: "#f5edd5",
          200: "#ebd9ab",
          300: "#dec079",
          400: "#d3aa57",
          500: "#C6A667",
          600: "#a8833f",
          700: "#876536",
          800: "#6e5230",
          900: "#5d462b",
        },
        ink: {
          DEFAULT: "#182334",
          light: "#64748B",
        },
        cloud: {
          DEFAULT: "#F6F8FB",
          dark: "#E2E8F0",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Plus Jakarta Sans", "Manrope", "system-ui", "sans-serif"],
        serif: ["DM Serif Display", "Georgia", "serif"],
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        soft: "0 1px 3px rgba(16, 36, 58, 0.06), 0 1px 2px rgba(16, 36, 58, 0.04)",
        card: "0 4px 16px rgba(16, 36, 58, 0.08)",
        lift: "0 12px 32px rgba(16, 36, 58, 0.12)",
      },
      maxWidth: {
        container: "1200px",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.96)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out forwards",
        "fade-up": "fade-up 0.6s ease-out forwards",
        "scale-in": "scale-in 0.4s ease-out forwards",
      },
    },
  },
  plugins: [],
};
