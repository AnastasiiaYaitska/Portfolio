/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#fff",
      gray: "#111",
    },
    fontFamily: {
      sans: ["Georgia", "sans-serif"],
      serif: ["Merriweather", "serif"],
      display: ["Oswald"],
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      lg: "1.15rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.244rem",
      "5xl": "3.052rem",
    },
    minWidth: {
      0: "0",
      100: "100px",
    },
    extend: {
      width: {
        "1/3-g": "30%",
      },
      minHeight: { 50: "55px" },
      boxShadow: {
        footer:
          " -5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3);",
      },
      backgroundImage: {
        header: "linear-gradient(to right, #fc5c7d, #6a82fb)",
      },
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        sm: "0.8rem",
        "4xl": "2rem",
      },
      flexBasis: {
        "4/5": "66%",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      animation: {
        glowing: "glowing 20s linear infinite",
      },
      keyframes: {
        glowing: {
          "0%": { backgroundPosition: "0 0" },
          "50%": { backgroundPosition: "400% 0" },
          "100%": { backgroundPosition: "0 0" },
        },
      },
    },
  },
  plugins: [],
};
