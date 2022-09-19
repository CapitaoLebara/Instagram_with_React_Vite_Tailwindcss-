/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'phone':"url('/src/img/phone.png')"
      },
      colors:{
        'color-border':'rgb(219,219,219)',
        'color-input':'#262626',
        'input-border':'#dbdbdb',
        'input-back':'#fafafa',
        'btn-color':'#0195f6',
        'separetor-color':'#8e8e8e',
        'before-color':'#dbdbdb',
        'facebook-color':'#385885'
      },
      spacing:{
        '770px':'770px',
        '910px':'910px',
        '618px':'618px',
        '650px':'650px',
        '136px':'136px',
        '1px':'1px',
        '14px':'14px',
        'img-px':'124px'
      },
      gridTemplateColumns:{
        'cont':'1fr 350px '
      },

    },
  },
  plugins: [],
}