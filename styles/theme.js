import {extendTheme} from '@chakra-ui/react'
import {mode} from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    html: {
      height: '100%',
    },
    body: {
      display: 'grid',
      flexDirection: 'column',
      minHeight: '100%',
      gridTemplateRows: '1fr auto',
      bg: mode('#ffffff', '#202023')(props),
      fontFamily: 'Montserrat, sans-serif',
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
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: 'Montserrat, sans-serif'
}

const colors = {
  brand: {
    red: '#C53030',
    dark: '#171923'
  }
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

const theme = extendTheme({config, styles, components, fonts, colors})
export default theme
