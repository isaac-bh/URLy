import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        blurred_dot: "blurred_dot 10s infinite",
      },
      keyframes: {
        blurred_dot: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "10%": {
            transform: "translate(-10px, -10px) scale(1.1)",
          },
          "20%": {
            transform: "translate(-20px, -10px) scale(1.2)",
          },
          "30%": {
            transform: "translate(-25px, -20px) scale(1.1)",
          },
          "40%": {
            transform: "translate(-35px, -30px) scale(1.2)",
          },
          "50%": {
            transform: "translate(-50px, -50px) scale(1.2)",
          },
          "60%": {
            transform: "translate(-35px, -30px) scale(1.2)",
          },
          "70%": {
            transform: "translate(-25px, -20px) scale(1.1)",
          },
          "80%": {
            transform: "translate(-20px, -10px) scale(1.2)",
          },
          "90%": {
            transform: "translate(-10px, -10px) scale(1.1)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
