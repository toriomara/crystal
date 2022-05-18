import { mode, darken, whiten } from '@chakra-ui/theme-tools';

export const BoxStyles = {
  baseStyle: {},
  sizes: {},
  variants: {
    text: (props) => ({
      bg: props.colorMode === 'light' ? 'blackAlpha.50' : 'whiteAlpha.100',
      color: 'white',
      borderColor: 'red',
      py: '10px',
      _hover: {
        bg: mode(whiten('brand.100', 10), darken('brand.400', 20))(props),
        boxShadow: 'md',
      },
      bgColor: 'brand.50',
      position: 'absolute',
    })(props),
  },
  defaultProps: {},
};
