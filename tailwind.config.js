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
        old_fashion: {
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
        mytheme: {
          "primary": "#6419E6",
          "secondary": "#D926A9",
          "accent": "#1FB2A6",
          "neutral": "#191D24",
          "base-100": "#2A303C",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

// npx tailwindcss -i ./style/css/source.css -o ./style/css/style.css --watch