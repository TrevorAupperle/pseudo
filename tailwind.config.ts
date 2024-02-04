import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        main: ["nunito", ...fontFamily.sans],
        logo: ["ubuntu mono", ...fontFamily.mono],
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        "primaryBlue-50": "#E3ECF4",
        "primaryBlue-100": "#E0EAF3",
        "primaryBlue-200": "#C0D4E7",
        "primaryBlue-300": "#80A8CE",
        "primaryBlue-400": "#407CB6",
        primaryBlue: "#00509D",
        "primaryBlue-600": "#004893",
        "primaryBlue-700": "#003F88",
        "primaryBlue-800": "#00347A",
        "primaryBlue-900": "#00296B",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
} satisfies Config;
