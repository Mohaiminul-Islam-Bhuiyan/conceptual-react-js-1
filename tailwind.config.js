/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#8f32c9",
        
"secondary": "#138e13",
        
"accent": "#ea7cda",
        
"neutral": "#212031",
        
"base-100": "#FDFBFD",
        
"info": "#95CFEE",
        
"success": "#0B5B53",
        
"warning": "#D07311",
        
"error": "#EB6682",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
