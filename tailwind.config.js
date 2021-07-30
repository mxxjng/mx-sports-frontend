module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      headline: ['ProximaNova-Bold'],
      text: ['ProximaNova-Regular'],
    },
    colors: {
      primary: '#D6490B',
      bg: '#191B27',
      bgHighlight: '#222535',
      hrColor: '#2C2F44',
      colorChat: '#393B4B',
      textColor: '#C1C4D7',
      disabled: '#15171E',
      headline: '#ffffff',
      danger: '#dc3545',
      success: '#28a745',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
