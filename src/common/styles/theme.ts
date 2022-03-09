export const COLORS = {
  white1: '0deg 0% 99%',
  white2: '0deg 0% 95%',
  orange: '37deg 98% 58%',
  blue: {
    100: '203deg 28% 79%',
    300: '203deg 22% 55%',
    500: '205deg 37% 55%',
    700: '205deg 30% 27%',
    900: '206deg 45% 15%',
  },
};

export const WEIGHTS = {
  regular: 400,
  bold: 700,
};

export const BREAKPOINTS = {
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1500,
};

export const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
};
