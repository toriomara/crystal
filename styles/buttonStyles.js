import { mode, darken, whiten } from "@chakra-ui/theme-tools";
import { useColorModeValue } from "@chakra-ui/react";

const brandRing = {
  _focus: {
    ring: 2,
    ringColor: "brand.200",
  },
};

export const ButtonStyles = {
  // style object for base or default style
  baseStyle: {
    fontFamily: "Montserrat",
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: (props) => ({
      bgColor: useColorModeValue("brand.100", "brand.400"),
      color: "white",
      fontWeight: "regular",
      ...brandRing,
      _hover: {
        bg: mode(whiten("brand.100", 10), darken("brand.400", 20))(props),
        boxShadow: "md",
      },
      _active: {
        backgroundColor: mode(
          whiten("brand.200", 10),
          darken("brand.300", 20)
        )(props),
      },
    }),
    secondary: (props) => ({
      bgColor: useColorModeValue("brand.50", "brand.50"),
      color: "white",
      fontWeight: "regular",
      fontFamily: "Montserrat",
      _hover: {
        bg: mode(whiten("brand.50", 30), darken("brand.50", 20))(props),
        boxShadow: "md",
      },
    }),
    outlined: (props) => ({
      bgColor: useColorModeValue("white", "gray.100"),
      color: "brand.100",
      border: "1px",
      borderColor: "brand.100",
      fontWeight: "500",
      fontFamily: "Montserrat",
      _hover: {
        bg: useColorModeValue("brand.100", "brand.100"),
        color: useColorModeValue("white", "white"),
        boxShadow: "md",
      },
    }),
    azure: (props) => ({
      bgColor: "brand.200",
      color: useColorModeValue("white", "black"),
      fontWeight: "regular",
      _hover: {
        bg: mode(whiten("brand.200", 20), darken("brand.200", 20))(props),
        boxShadow: "md",
      },
      fontWeight: "bold",
    }),
  },
  // default values for `size` and `variant`
  defaultProps: {
    // _focus: {
    //   ring: '4px',
    //   ringColor: 'red.200',
    //   ringOffset: '3px',
    //   ringOffsetColor: 'red.300',
    // },
  },
};
