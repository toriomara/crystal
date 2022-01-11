import '../styles/globals.css'
import {ChakraProvider} from '@chakra-ui/react'
import theme from '../styles/theme'
import Main from '../layouts/main'

function App({Component, pageProps}) {
  return (
    <ChakraProvider theme={theme}>
      <Main>
        <Component {...pageProps} />
      </Main>
    </ChakraProvider>

  )
}

export default App
