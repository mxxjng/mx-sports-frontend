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
      primary: '#E1003C',
      bg: '#1A1C24',
      bgHighlight: '#24252F',
      hrColor: '#353745',
      colorChat: '#393B4B',
      textColor: '#C5C6D3',
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
