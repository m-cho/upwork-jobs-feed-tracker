export const colors = {
  accentPrimary: '#4CAF50',
  accentPrimaryDark: '#43A047',
  accentPrimaryLight: '#66BB6A',
  accentPrimaryLightest: '#81C784'
};

export const palette = {
  primary: {
    main: colors.accentPrimary,
    dark: colors.accentPrimaryDark,
    light: colors.accentPrimaryLight,
    lightest: colors.accentPrimaryLightest
  }
};

export const typography = {
  fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
  fontSize: 14,
  useNextVariants: true
};

export const theme = {
  colors,
  palette,
  typography
};
