/** @type {import('tailwindcss').Config} */
const colors = {
  primary: {
    100: "var(--primary-100)",
    500: "var(--primary-500)",
    900: "var(--primary-900)",
  },

  success: {
    100: "#e7f5ed",
    500: "#34ab66",
    700: "#226f42",
  },
  error: {
    100: "#fce9ea",
    500: "#e72f3c",
    700: "#971e26",
  },
  white: "#fff",
  black: "#000",

  seccondary: "var(--secondary)",
  slate: "var(--slate)",
  safronGreen: "var(--safronGreen)",
  levender: "var(--levender)",
  bubblegum: "var(--bubblegum)",
  copperRust: "var(--copperRust)",
};

const spacing = {
  xs: "var(--space-xs)",
  sm: "var(--space-sm)",
  md: "var(--space-md)",
  lg: "var(--space-lg)",
};

const borderRadius = {
  sm: "var(--radius-sm)",
  md: "var(--radius-md)",
  lg: "var(--radius-lg)",
  full: "50%",
};

const fontSize = {
  base: "1rem",
  sm: [
    "var(--text-sm)",
    {
      lineHeight: "1.5",
      letterSpacing: "-0.01em",
      fontWeight: "500",
    },
  ],
  md: "var(--text-md)",
  lg: "var(--text-lg)",
  xl: "var(--text-xl)",
  h1: "var(--text-h1)",
  h2: "var(--text-h2)",
  h3: "var(--text-h3)",
  h4: "var(--text-h4)",
  h5: "var(--text-h5)",
  h6: "var(--text-h6)",
};
const fontWeight = {
  regular: "400",
  bold: "700",
};

const boxShadow = {
  sm: "0px 2px 4px 0px rgba(11, 10, 55, 0.15)",
  lg: "0px 8px 20px 0px rgba(18, 16, 99, 0.06)",
};

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors,
    fontSize,
    borderRadius,
    boxShadow,
    extend: {
      fontWeight,
      spacing,
      screens: {
        laptop: { min: "1200px", max: "1450px" },
      },
    },
  },
  plugins: [],
};
