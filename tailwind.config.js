/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "winter",
      {
        darkTheme: {
          "primary": "#28829b",
          "secondary": "#db99ff",
          "accent": "#027717",
          "neutral": "#374151",
          "base-100": "#111827",
          "info": "#1f72ef",
          "success": "#0e775c",
          "warning": "#d5b00b",
          "error": "#ec5153",
        },
      },
    ],
  },
}

