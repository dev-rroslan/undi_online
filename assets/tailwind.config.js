module.exports = {
  
  
    content: [
      './js/**/*.js',
      '../lib/*_web/**/*.*ex'
    ],
    
  
  theme: {
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('daisyui')
  ],
}
