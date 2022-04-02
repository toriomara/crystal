// theme.js
import { extendTheme } from "@chakra-ui/react";

export const HeadingStyles = {
  // 1. We can update the base styles
  baseStyle: {
    fontWeight: "bold", // Normally, it is "semibold"
  },
  // 2. We can add a new component size or extend existing
  sizes: {},
  // 3. We can add a new visual variant
  variants: {
    "page-title": {
      textAlign: "center",
      fontWeights: "500",
      justify: "center",
      marginTop: 4,
      marginBottom: 4,
    },
    "section-title": {
      textDecoration: "underline",
      fontSize: 20,
      textUnderlineOffset: 6,
      textDecorationColor: "#525252",
      textDecorationThickness: 4,
      marginTop: 3,
      marginBottom: 4,
    },
    h1: {
      fontSize: "4xl",
      fontFamily: "Montserrat",
    },
    h2: {
      fontSize: "3xl",
      fontFamily: "Montserrat",
      display: "flex",
    },
    h3: {
      fontSize: "2xl",
    },
    h4: {
      fontSize: "xl",
      fontFamily: "Montserrat",
    },
    h5: {
      fontSize: "lg",
      fontFamily: "Montserrat",
    },
    h6: {
      fontSize: "md",
      fontFamily: "Montserrat",
    },
    h7: {
      fontSize: "sm",
      fontFamily: "Montserrat",
    },
    h8: {
      fontSize: "xs",
      fontFamily: "Montserrat",
    },
  },
};
