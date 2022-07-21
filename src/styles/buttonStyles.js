import { mode, darken, whiten } from '@chakra-ui/theme-tools';

export const ButtonStyles = {
  baseStyle: {
    fontFamily: 'Montserrat',
  },
  sizes: {},
  variants: {
    primary: (props) => ({
      bg: props.colorMode === 'light' ? 'brand.100' : 'brand.400',
      color: 'white',
      fontWeight: 'regular',
      _hover: {
        bg: mode(whiten('brand.100', 10), darken('brand.400', 20))(props),
        boxShadow: 'md',
      },
      _active: {
        bg: mode(whiten('brand.200', 10), darken('brand.300', 20))(props),
      },
    }),
    secondary: (props) => ({
      bgColor: props.colorMode === 'light' ? 'brand.50' : 'brand.50',
      color: 'white',
      fontWeight: 'regular',
      fontFamily: 'Montserrat',
      _hover: {
        bg: mode(whiten('brand.50', 30), darken('brand.50', 20))(props),
        boxShadow: 'md',
      },
    }),
    outlined: (props) => ({
      bg: props.colorMode === 'light' ? 'white' : 'whiteAlpha.300',
      color: props.colorMode === 'light' ? 'blackAlpha.900' : 'whiteAlpha.700',
      border: '1px',
      borderStyle: 'solid',
      borderColor:
        props.colorMode === 'light' ? 'blackAlpha.300' : 'transparent',
      fontWeight: '500',
      fontFamily: 'Montserrat',
      _hover: {
        bg: mode(whiten('blackAlpha.100'), darken('whiteAlpha.200')), //props.colorMode === 'light' ? 'brand.100' : 'brand.100',
        color: 'white',
        boxShadow: 'md',
      },
    }),
    azure: (props) => ({
      bg: 'brand.200',
      color: props.colorMode === 'light' ? 'white' : 'black',
      fontWeight: 'regular',
      _hover: {
        bg: mode(whiten('brand.200', 20), darken('brand.200', 20))(props),
        boxShadow: 'md',
      },
      fontWeight: 'bold',
    }),
  },
  defaultProps: {},
};
