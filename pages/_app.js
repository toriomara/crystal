import { ChakraProvider } from '@chakra-ui/react';
import theme from '../styles/theme';
import Main from '../layouts/main';
import { AnimatePresence } from 'framer-motion';

function App({ Component, pageProps, router }) {
  return (
      <ChakraProvider theme={theme}>
        <Main router={router}>
          <AnimatePresence exitBeforeEnter initial={true}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Main>
      </ChakraProvider>
  );
}

export default App;
