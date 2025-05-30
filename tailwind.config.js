/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        PrimaryColor:"#059eda",
        SecondaryColor:"#f6931c",
        color3rd:"#3f3d56",
        color4th:"#c0c0c0",
        cardbg:"#fdf9f3",
        bodyColor:'#01062E',
        TextColor:'#FF8719',
        TextColor2:'#0082BE'
      },
    },
  },
  plugins: [],
}