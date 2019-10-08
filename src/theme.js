export const colors = {
  accentPrimary: '#4CAF50',
  accentPrimaryDark: '#43A047',
  accentPrimaryLight: '#66BB6A',
  accentPrimaryLightest: '#81C784',

  darkGrey: '#525252',
  white: '#fff',

  backgroundDark: '#303030',
  backgroundLight: '#e2e2e2'
};

export const palette = {
  primary: {
    main: colors.accentPrimary,
  },
  secondary: {
    main: colors.accentPrimaryLight
  }
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
      primary: darkMode
        ? colors.white
        : colors.darkGrey
    },
    background: {
      ...baseTheme.palette.background,
      default: darkMode
        ? colors.backgroundDark
        : colors.backgroundLight
    }
  }
});
