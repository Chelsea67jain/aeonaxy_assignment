/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {},
    screens: {
      sm: { min: "280px", max: "375px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "376px", max: "834px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "835px", max: "1024px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1025px", max: "1279px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xl": { min: "1280px" },
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};

