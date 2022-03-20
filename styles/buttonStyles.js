import { mode, darken, whiten } from "@chakra-ui/theme-tools";
import { useColorModeValue } from "@chakra-ui/react";

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
      bg: useColorModeValue("brand.100", "brand.600"),
      color: "white",
      fontWeight: "regular",
      _hover: {
        bg: mode(whiten("brand.100", 10), darken("brand.600", 20))(props),
        boxShadow: "md",
      },
      _focus: {
        outline: "none",
      },
    }),
    secondary: (props) => ({
      bg: useColorModeValue("brand.50", "brand.50"),
      color: "white",
      fontWeight: "regular",
      fontFamily: "Montserrat",
      _hover: {
        bg: mode(whiten("brand.50", 30), darken("brand.50", 20))(props),
        boxShadow: "md",
      },
    }),
    outlined: (props) => ({
      bg: useColorModeValue("white", "gray.100"),
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
  },
  // default values for `size` and `variant`
  defaultProps: {},
};
