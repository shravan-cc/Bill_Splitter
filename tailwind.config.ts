/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    colors: {
      "custom-dark-green": "#00474b",
      "custom-teal": "#0d686d",
      "custom-light-teal": "#25c2ad",
      "custom-light-grey": "#5d6b6c",
      "custom-dark-teal": "#9fb3b2",
      "custom-label-background": "#f3f8fb",
      "custom-tiffany-blue": "#2cc0ad",
      "custom-desaturated-teal": "#9fb3b2",
      "custom-border": "#26c2ad",
    },
    fontFamily: {
      mono: ["Space Mono", "monospace"],
      poppins: ["Poppins", "sans-serif"],
    },
    screens: {
      "sm-max": { max: "550px" },
    },
  },
};
export const plugins = [];
