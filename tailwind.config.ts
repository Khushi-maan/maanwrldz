import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
      },
       backgroundImage: {
         "white-canvas": "url(/assets/images/png/page-design-white-canvas.png)",
         "photo-canvas": "url(/assets/images/png/photo-canvas.png)",
         "white-linear":"linear-gradient(180deg, rgba(255, 255, 255, 0) 21.02%, rgba(255, 255, 255, 0.28) 56.89%, #FFFFFF 100%)"
      },
      colors: {
        skyblue: "#3498DB",
        black: "#010101",
        darkgray: "#373737",
        orange: "#F39C12",
        green:"#2ECC71"
      },  
      fontSize: {
        "custom-3xl":"32px",
        "custom-4xl": "44px",
        "custom-6xl":"64px",
        "custom-5xl": "56px",
        "custom-9xl":"98px",
      },
      fontFamily: {
        "asap": ["Asap", "serif"],
        "ballet": ["Ballet", "serif"],
        "kaushan": ["Kaushan Script", "serif"],
        "laila":["Laila", "serif"],
      },
      lineHeight: {
        150: "150%",
        105: "105%",
        120: "120%",
        160:"160%",
      },
    },
  },
  plugins: [],
} satisfies Config;
