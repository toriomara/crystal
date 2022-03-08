import {mode, darken, whiten} from '@chakra-ui/theme-tools'
import {useColorModeValue} from '@chakra-ui/react'

export const ButtonStyles = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: (props) => ({
      bg: useColorModeValue('primary', 'primary'),
      color: 'white',
      fontWeight: 'regular',
      _hover: {
        bg: mode(darken('primary', 10), whiten('primary', 20))(props),
        boxShadow: 'md'
      },
      _focus: {
        outline: 'none'
      }
    }),
    secondary: (props) => ({
      bg: 'secondaryDark',
      color: 'white',
      fontWeight: 'regular',
      _hover: {
        bg: mode(darken('secondaryDark', 20), whiten('secondaryDark', 20))(props),
        color: useColorModeValue('white', 'white'),
        boxShadow: 'md'
      }
    }),
    outline: (props) => ({
      bg: 'transparent',
      color: useColorModeValue('black', 'white'),
      //borderColor: '1px solid red',
      fontWeight: 'regular',
      _hover: {
        bg: mode(darken('alternative', 20), whiten('alternative', 20))(props),
        boxShadow: 'md'
      }
    }),
    inverse: (props) => ({
      bg: 'transparent',
      color: useColorModeValue('black', 'white'),
      border: '1px solid #EDF2F7',
      fontWeight: 'regular',
      _hover: {
        bg: mode(darken('secondaryDark', 20), whiten('secondary', 20))(props),
        color: useColorModeValue('white', 'black'),
      }
    }),
  },
  // default values for `size` and `variant`
  defaultProps: {},
}