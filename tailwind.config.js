/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        'jakarta': ['"Plus Jakarta Sans"', 'sans-serif'],
        'inter': ['"inter"', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '24px',
      },
      screens: { // Đặt bên ngoài `extend`
        'sm': '640px',
        'md': '768px',
        'lg': '1024px', 
        '2xl': '1198px', // Giá trị này sẽ ghi đè giá trị mặc định của Tailwind
      },
      colors: {
        primary: '#228EA9',
        secondary: '#FF5E00',
        charcoal: '#272727', 
        lightblue: '#F2F7F8',
        tan: '#F1EDE6'
      },
      spacing: {
        '15': '60px',
        '22': '88px',
        '25': '100px',
      },
      boxShadow: {
        derek: `0px 0px 0px 1px rgb(0 0 0 / 0.06),
        0px 1px 1px -0.5px rgb(0 0 0 / 0.06),
        0px 3px 3px -1.5px rgb(0 0 0 / 0.06), 
        0px 6px 6px -3px rgb(0 0 0 / 0.06),
        0px 12px 12px -6px rgb(0 0 0 / 0.06),
        0px 24px 24px -12px rgb(0 0 0 / 0.06)`,
        aceternity: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        move: "move 5s linear infinite",
        "spin-circle": "spin-circle 3s linear infinite",
      },
      keyframes: {
        move: {
          "0%": { transform: "translateX(-200px)" },
          "100%": { transform: "translateX(200px)" },
        },
        "spin-circle": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
}