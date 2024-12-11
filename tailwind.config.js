/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,html}"],
  theme: {
    extend: {
      screens:{
        lg:{max:'1023px'},
        md:{max:'770px'},
        sm:{max:'639px'}
      }
  
    },
  },
  plugins: [],
}

