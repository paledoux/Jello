import { createTheme, createText, createBox } from "@shopify/restyle";

export const theme = createTheme({
  colors: {
    lightGrey: "#414B5A",
    grey: "#B8BFC5",
    white: "#FFFFFF",
    primary: "#0062CD",
    lightBlue: "#0059BA",
    secondary: "#FFC33A",
    borderColor: "#DCDCDC",
    red: "#E9421E",
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 10,
    m: 20,
    l: 40,
    xl: 60,
  },
  breakpoints: {},
  textVariants: {
    title: {
      fontSize: 16,
      fontFamily: "Roboto-Medium",
      letterSpacing: 1,
      color: "lightGrey",
    },
    title2: {
      fontSize: 20,
      fontFamily: "Roboto-Medium",
      color: "white",
    },
    onboardingDescription: {
      fontSize: 14,
      fontFamily: "Roboto-Regular",
      lineHeight: 22,
      letterSpacing: 1,
      color: "grey",
      textAlign: "center",
    },
  },
});

export const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    secondary: "red",
  },
};

export type Theme = typeof theme;
export const Text = createText<Theme>();
export const Box = createBox<Theme>();
