import { useColorModeValue } from '@chakra-ui/react';

export const InputStyles = {
  baseStyle: {},
  sizes: {
    xs: {
      field: {
        borderRadius: 'sm',
        fontSize: 'xs',
        height: 6,
        paddingX: 2,
      },
    },
    sm: {
      field: {
        borderRadius: 'sm',
        fontSize: 'sm',
        height: 8,
        paddingX: 3,
      },
    },
    md: {
      field: {
        borderRadius: 'md',
        fontSize: 'md',
        height: 10,
        paddingX: 4,
      },
    },
    lg: {
      field: {
        borderRadius: 'md',
        fontSize: 'lg',
        height: 12,
        paddingX: 4,
      },
    },
  },
  variants: {
    outline: {
      field: {
        background: 'white',
        borderRadius: 0,
      },
    },
    searchInput: (props) => ({
      field: {
        color: props.colorMode == 'light' ? 'black' : 'whiteAlpha.900',
        bg: 'transparent',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: props.colorMode == 'light' ? 'blackAlpha.400' : 'whiteAlpha.400',//useColorModeValue('blackAlpha.400', 'whiteAlpha.400'),
        _hover: {
          borderColor: props.colorMode == 'light' ? 'barnd.100' : 'brand.200',
          boxShadow: 'md',
        },
        _focus: {
          boxShadow: 'md',
          boxShadowColor: 'yellow',
        },
        _active: {
          boxShadow: 'md',
          boxShadowColor: 'yellow',
        },
      },
    }),
  },
};
