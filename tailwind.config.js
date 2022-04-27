module.exports = {
  content: [
    "_includes/**/*.{html,js}",
    "_layouts/**/*.html",
    "pages/**/*.{html,md}"
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#a67a76",
          "secondary": "#d9ccb4",
          "accent": "#4b83a6",
          "neutral": "#d9ccb4",
          "base-100": "#ffffff",
          "info": "#ffedd5",
          "success": "#dcfce7",
          "warning": "#fef9c3",
          "error": "#fee2e2",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

// npx tailwindcss -i ./style/css/source.css -o ./style/css/style.css --watch