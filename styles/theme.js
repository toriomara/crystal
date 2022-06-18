import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
  withDefaultVariant,
} from '@chakra-ui/react';
import { mode, createBreakpoints } from '@chakra-ui/theme-tools';
import { ButtonStyles as Button } from '../styles/buttonStyles';
import { BoxStyles as Box } from '../styles/boxStyles';
import { HeadingStyles as Heading } from '../styles/headingStyles';
import { InputStyles as Input } from '../styles/inputStyles';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const styles = {
  global: (props) => ({
    'html, body': {
      display: 'grid',
      //flexDirection: "column",
      height: '100%',
      width: '100%',
      margin: 0,
      padding: 0,
      gridTemplateRows: '1fr auto',
      bg: mode('#ffffff', '#22272e')(props),
      fontSize: '16px',
      fontWeights: {
        normal: 300,
        medium: 600,
        bold: 700,
      },
      '::-webkit-scrollbar': {
        width: '16px',
        background: mode('#ffffff', '#22272e')(props),
      },
      '::-webkit-scrollbar-thumb': {
        background: '#575757',
        borderRadius: '16px',
        borderStyle: 'solid',
        borderWidth: '4px',
        borderColor: mode('#ffffff', '#22272e')(props),
      },
      a: {
        _hover: {
          textDecoration: 'none',
        },
      },
    },
  }),
};

const breakpoints = createBreakpoints({
  xs: '20rem',
  sm: '30rem',
  md: '48rem',
  lg: '62rem',
  xl: '80rem',
  '2xl': '96rem',
});

const components = {
  Heading,
  Button,
  Heading,
  Input,
  Box,
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
    50: '#D2202F', //red Main color on https://mycolor.space/?hex=%23D2202F&sub=1
    100: '#043f76', //brandedBlue
    200: '#00BBFF', //azure
    300: '#6574E4', //MediumSlateBlue
    400: '#0075EE', //DeepSkyBlue
    500: '#043f76', //brandedBlue
    600: '#CC359A', //orchid
    700: '#79AF07', //LimeGreen
    //500: "#A757C7", //violet
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
  colorScheme: 'brand',
  components: ['Checkbox'],
});

withDefaultVariant({
  variant: 'filled',
  components: ['Input', 'Select'],
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
