import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        academic: {
          navy: "#0B1F33",
          ink: "#1F2933",
          charcoal: "#30343B",
          line: "#D9DEE8",
          panel: "#F6F8FB",
          gold: "#9A7B38",
          mist: "#EEF3F7"
        }
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "\"Times New Roman\"", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        academic: "0 20px 50px -35px rgba(11, 31, 51, 0.28)"
      }
    }
  },
  plugins: []
};

export default config;
