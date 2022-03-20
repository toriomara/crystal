import { extendTheme } from "@chakra-ui/react";
import { mode, createBreakpoints  } from "@chakra-ui/theme-tools";
import { ButtonStyles as Button } from "../styles/buttonStyles";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const styles = {
  global: (props) => ({
    "html, body": {
      display: "grid",
      flexDirection: "column",
      minHeight: "100%",
      gridTemplateRows: "1fr auto",
      bg: mode("#ffffff", "#202023")(props),
      fontSize: "16px",
      fontWeights: {
        normal: 300,
        medium: 600,
        bold: 700,
      },
      "::-webkit-scrollbar": {
        width: "16px",
        background: "white",
      },
      "::-webkit-scrollbar-thumb": {
        background: "#575757",
        borderRadius: "16px",
        border: "4px solid white",
      },
      a: {
        _hover: {
          textDecoration: "none",
        },
      },
    },
  }),
};

const breakpoints = createBreakpoints({
  sm: '320px',
  bsm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px',
  '3xl': '1536px',
})

const components = {
  Heading: {
    variants: {
      "page-title": {
        textAlign: "center",
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
      },
      h2: {
        fontSize: "3xl",
      },
      h3: {
        fontSize: "2xl",
      },
      h4: {
        fontSize: "xl",
      },
      h5: {
        fontSize: "lg",
      },
      h6: {
        fontSize: "md",
      },
      h7: {
        fontSize: "sm",
      },
      h8: {
        fontSize: "xs",
      },
    },
  },
  // Link: {
  //   baseStyle: (props) => ({
  //     color: mode("black", "primary")(props),
  //     textDecoration: 'none',
  //   }),
  // },
  Button,
};

const fonts = {
  body: 'Montserrat,sans-serif',
  heading: '"EB Garamond", serif',
  //heading: 'Nunito, sans-serif',
  //body: 'Open Sans, sans-serif',
  //body: 'Murecho, sans-serif',
  //body: 'Jost, sans-serif',
  //body: "Inter, sans-serif"
};

const colors = {
  brand: {
    50: "#D2202F",//red Main color on https://mycolor.space/?hex=%23D2202F&sub=1
    100: "#043f76",//brandedBlue
    200: "#DA1266",//pink
    300: "#CC359A",//orchid
    400: "#A757C7",//violet
    500: "#6574E4",//MediumSlateBlue
    600: "#0075EE",//DeepSkyBlue
    700: "#79AF07"//LimeGreen
  }
  // primary: "#C53030",
  // secondary: "#EDF2F7",
  // secondaryDark: "#656768",
  // black: "#151414",
  // coral: "#E0998F",
  // highlight: "#F3EED9",
  // alternative: "#97AAE0",
  // alt: "#A8AD9C",
};

const theme = extendTheme({ config, styles, components, fonts, colors, breakpoints });
export default theme;
