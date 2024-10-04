/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,vue}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': 'Inter',
        'monsterrat': 'Monsterrat',
        'rejection': 'Rejection'
      }
    }
  }
}

