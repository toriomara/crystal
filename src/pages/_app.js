import { ChakraProvider } from '@chakra-ui/react';
import theme from '../styles/theme';
import { Main } from '../layouts/main';

const App = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Main router={router}>
        <Component {...pageProps} key={router.route} />
      </Main>
    </ChakraProvider>
  );
};

export default App;
