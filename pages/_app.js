import { ChakraProvider } from '@chakra-ui/react';
import theme from '../src/styles/theme';
import Main from '../src/layouts/main';
import { appWithTranslation } from 'next-i18next';

const App = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Main router={router}>
        <Component {...pageProps} key={router.route} />
      </Main>
    </ChakraProvider>
  );
}

export default appWithTranslation(App);
