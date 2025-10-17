import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        replay: {
          bg: "#0A0F1C",
          surface: "#1E2230",
          amber: "#FFDD57",
          cyan: "#00F5FF",
          magenta: "#FF4E9C",
        },
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        plex: ["IBM Plex Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "replay-gradient": "linear-gradient(135deg, #00F5FF 0%, #FF4E9C 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
