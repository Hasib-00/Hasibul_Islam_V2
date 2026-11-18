import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { ink: "#080808", panel: "#101114", edge: "#22252b", mute: "#9aa0ab", cyan: { DEFAULT: "#4fd8ff" }, violet: { DEFAULT: "#8b7bff" } },
    fontFamily: { display: ["var(--font-display)"], sans: ["var(--font-body)"] },
  } },
  plugins: [],
} satisfies Config;
