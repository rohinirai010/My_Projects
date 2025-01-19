/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "move-to-center": "move-to-center 3s ease-in-out forwards",
        "shrink": "shrink 4s ease-in-out forwards", 
        "shrinkText": "shrink 2s ease-in-out forwards", 
        "fade-in": "fade-in 2s ease-out forwards",
        "fade-out": "fade-out 2s ease-out forwards",
        "move-down-fade-out": "move-down-fade-out 3s ease-out forwards",
      },
      keyframes: {
        "move-to-center": {
          "0%": {
            transform: "translate(0, -50%) scale(0.5)",
            opacity: "0",
          },
          "100%": {
            transform: "translate(-130%, -50%) scale(1)",
            opacity: "1",
          },
        },
        shrink: {
          "0%": {
            transform: "translate(0, -50%) scaleX(1)",
            transformOrigin: "left",
            opacity: "1"
          },
          "100%": {
            transform: "translate(0, -50%) scaleX(0)",
            transformOrigin: "left",
            opacity: "0"
          },
        },
        shrinkText: {
          "0%": {
            transform: "translate(0, -50%) scaleX(1)",
            transformOrigin: "left",
            opacity: "1"
          },
          "100%": {
            transform: "translate(0, -50%) scaleX(0)",
            transformOrigin: "left",
            opacity: "0"
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        
        "fade-out": {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
        "move-down-fade-out": {
          "0%": {
            transform: "translateY(0)",
            opacity: "1",
          },
          "100%": {
            transform: "translateY(150%)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
}
