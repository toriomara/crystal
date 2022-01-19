import {extendTheme} from '@chakra-ui/react'
import {mode} from '@chakra-ui/theme-tools'
import {ButtonStyles as Button} from '../styles/buttonStyles'

const styles = {
  global: props => ({
    'html, body': {
      display: 'grid',
      flexDirection: 'column',
      minHeight: '100%',
      gridTemplateRows: '1fr auto',
      bg: mode('#ffffff', '#202023')(props),
      fontSize: '16px',
      fontWeights: {
        normal: 300,
        medium: 600,
        bold: 700,
      },
      '::-webkit-scrollbar': {
        width: '16px',
        height: '56px',
        background: 'white'
      },
      '::-webkit-scrollbar-thumb': {
        background: '#575757',
        borderRadius: '16px',
        border: '4px solid white',
      },
    },
  })
}

const components = {
  Heading: {
    variants: {
      'page-title': {
        textAlign: 'center',
        justify: 'center',
        marginTop: 4,
        marginBottom: 4,
      },
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      },
      'h1': {
        fontSize: '4xl'
      },
      'h2': {
        fontSize: '3xl'
      },
      'h3': {
        fontSize: '2xl'
      },
      'h4': {
        fontSize: 'xl'
      },
      'h5': {
        fontSize: 'lg'
      },
      'h6': {
        fontSize: 'md'
      },
      'h7': {
        fontSize: 'sm'
      },
      'h8': {
        fontSize: 'xs'
      },
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
  },
  Button,
}

const fonts = {
  //heading: 'EB Garamond, serif',
  heading: 'Montserrat, sans-serif',
  //heading: 'Nunito, sans-serif',
  //body: 'Open Sans, sans-serif'
  //heading: 'Murecho, sans-serif',
  body: 'Jost, sans-serif',
}

const colors = {
    primary: '#C53030',
    secondary: '#EDF2F7',
    secondaryDark: '#656768',
    coral: '#E0998F',
    highlight: '#F3EED9',
    alternative: '#97AAE0',
    alt: '#A8AD9C',
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

const theme = extendTheme({config, styles, components, fonts, colors})
export default theme
