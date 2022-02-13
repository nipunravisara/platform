module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        primary: '#3b82f6',
        'primary-action': '#2563eb',
        backgound: '#f5f5fb',
        'text-secondary': '#103460'
      },
      fontFamily: {
        sans: ['Gotham', 'sans-serif'],
        serif: ['Nunito', 'serif']
      },
      backgroundImage: {
        'banner-background': "url('/src/assets/backgrounds/banner-background.png')",
        'carousel-background': "url('/src/assets/backgrounds/carousel-background.png')",
        'notification-background': "url('/src/assets/backgrounds/notification-background.png')"
      }
    }
  },
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/line-clamp')]
};
