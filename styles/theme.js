import {
  Checkbox,
  extendTheme,
  theme as base,
  withDefaultColorScheme,
  withDefaultVariant,
} from "@chakra-ui/react";
import { mode, createBreakpoints } from "@chakra-ui/theme-tools";
import { ButtonStyles as Button } from "../styles/buttonStyles";
import { HeadingStyles as Heading } from "../styles/headingStyles";

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const styles = {
  global: (props) => ({
    "html, body": {
      display: "grid",
      //flexDirection: "column",
      minHeight: "100%",
      gridTemplateRows: "1fr auto",
      bg: mode("#ffffff", "#22272e")(props),
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
  sm: "30rem",
  md: "48rem",
  lg: "62rem",
  xl: "80rem",
  "2xl": "96rem",
});

const InputSelectStyles = {
  variants: {
    filled: {
      field: {
        _focus: {
          borderColor: "brand.200",
        },
      },
    },
  },
  sizes: {
    md: {
      field: {
        //borderRadius: 'none'
      },
    },
  },
};

const brandRing = {
  _focus: {
    ring: 2,
    ringColor: "brand.200",
  },
};

const components = {
  Heading,
  Button,
  Heading,

  Input: { ...InputSelectStyles },
  Select: { ...InputSelectStyles },
  Checkbox: {
    baseStyle: {
      control: {
        ...brandRing,
      },
    },
  },
};

const fonts = {
  heading: `Montserrat, ${base.fonts?.heading} `,
  body: `Montserrat, ${base.fonts?.body}`,
  
  //heading: `EB Garamond, ${base.fonts?.heading} `,
  //heading: 'Nunito, sans-serif',
  //body: 'Open Sans, sans-serif',
  //body: 'Murecho, sans-serif',
  //body: 'Jost, sans-serif',
  //body: "Inter, sans-serif"
};

const colors = {
  brand: {
    50: "#D2202F", //red Main color on https://mycolor.space/?hex=%23D2202F&sub=1
    100: "#043f76", //brandedBlue
    200: "#00BBFF", //azure
    300: "#6574E4", //MediumSlateBlue
    400: "#0075EE", //DeepSkyBlue
    500: "#A757C7", //violet
    600: "#CC359A", //orchid
    700: "#79AF07", //LimeGreen
  },

  // primary: "#C53030",
  // secondary: "#EDF2F7",
  // secondaryDark: "#656768",
  // black: "#151414",
  // coral: "#E0998F",
  // highlight: "#F3EED9",
  // alternative: "#97AAE0",
  // alt: "#A8AD9C",
};

withDefaultColorScheme({
  colorScheme: "brand",
  components: ["Checkbox"],
});

withDefaultVariant({
  variant: "filled",
  components: ["Input", "Select"],
});

const theme = extendTheme({
  config,
  styles,
  components,
  fonts,
  colors,
  breakpoints,
});

export default theme;
