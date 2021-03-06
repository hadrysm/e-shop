const breakpoints = {
  phone: 374,
  tablet: 767,
  bigTablet: 1020,
  desktop: 1150,
  bigDesktop: 1440,
  huge: 1700,
};

export const theme = {
  colors: {
    black: '#000000',
    white: '#ffffff',
    background: '#ffffff',
    primary: '#000e22',
    secondary: '#000f24',
    green100: '#007947',
    green200: '#03CEA4',
    grey100: '#313942',
    grey200: '#6a6a6a',
    grey300: '#e2e2e2',
    grey400: '#f5f5f5',
  },
  font: {
    family: {
      primary: `'Source Sans Pro', sans-serif`,
      secondary: `'ZCOOL QingKe HuangYou', cursive`,
    },
    weight: {
      regular: 400,
      semiBold: 600,
      bold: 700,
    },
    size: {
      xxs: '1.2rem',
      xs: '1.5rem',
      s: '1.8rem',
      m: '2.2rem',
      l: '4.2rem',
      xl: '8.2rem',
    },
  },

  mq: Object.keys(breakpoints).reduce((acc, breakpoint) => {
    acc[breakpoint] = `@media (min-width: ${breakpoints[breakpoint]}px)`;

    return acc;
  }, {}),

  layout: {
    maxContainerWidth: '120.4rem',
    mainSpacing: '2rem',
  },

  zIndex: {
    level1: '1000',
    level2: '2000',
    level3: '3000',
    level4: '4000',
    level5: '5000',
    level6: '6000',
    level7: '7000',
    level8: '8000',
    level9: '9000',
    level10: '10000',
    level11: '11000',
  },
};
