/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    colors:{
      darkMangenta:"hsl(var(--very-dark-magenta))",
      softPink:"hsl(var(--soft-pink))",
      greyishMagenta:"hsl(var(--dark-grayish-magenta))",
      lightMagenta:"hsl(var(--light-grayish-magenta))",
      white:"hsl(var(--white))"

    },
    extend: {
      fontFamily:{
        LeagueSpartanFont:"'League Spartan', sans-serif"
      },
      screens:{
        'md':"860px"
      }
    },
  },
  plugins: [],
}

