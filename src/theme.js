export const colors = {
  accentPrimary: '#4CAF50',
  accentPrimaryDark: '#43A047',
  accentPrimaryLight: '#66BB6A',
  accentPrimaryLightest: '#81C784',

  greyDark: '#4e4e4e',
  greyLight: '#575757',
  greyLighter: '#dedede',

  white: '#fff',
  whiteDarker: '#cecece',

  backgroundDark: '#303030',
  backgroundLight: '#e2e2e2'
};

export const palette = {
  primary: {
    main: colors.accentPrimary,
  },
  secondary: {
    main: colors.accentPrimaryLight
  },
};

export const typography = {
  fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
  fontSize: 13,
  useNextVariants: true
};

export const baseTheme = {
  colors,
  palette,
  typography
};

export const getTheme = darkMode => ({
  ...baseTheme,
  palette: {
    ...baseTheme.palette,
    type: darkMode
      ? 'dark'
      : 'light',
    text: {
      ...baseTheme.text,
      secondaryLight: darkMode
        ? colors.greyDark
        : colors.greyLighter,
      secondary: darkMode
        ? colors.whiteDarker
        : colors.greyLight,
      primary: darkMode
        ? colors.white
        : colors.greyDark
    },
    background: {
      ...baseTheme.palette.background,
      default: darkMode
        ? colors.backgroundDark
        : colors.backgroundLight
    }
  }
});
