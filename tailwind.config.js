/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "80vh": "80vh",
        "100vh": "100vh",
        "400px": "400px",
        "300px": "300px",
        "500px": "500px",
        "600px": "600px",
      },
      translate: {
        scrollUpIndexOne: "27%",
        30: "20%",
        scrollUpIndexTwo: "40%",
        scrollUpIndexThree: "50%",
      },
      transitionProperty: {
        transform: "transform",
      },
      transitionDuration: {
        4: "1500ms",
      },
      width: {
        "800px": "800px",
        "50%": "50%",
        "1000px": "1000px",
        "400px": "400px",
        "500px": "500px",
      },
      boxShadow: {
        customShadow:
          "rgba(0, 0, 0, 0.1) 0px 0px 0px 2px, rgba(0, 0, 0, 0.3) 0px 4px 6px -1px, rgba(255, 255, 255, 0.04) 0px 1px 0px inset",
        textStackShadow:
          "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      },
    },
  },
  plugins: [],
};
