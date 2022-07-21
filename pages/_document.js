import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';
import theme from '../src/styles/theme';
import i18nextConfig from '../next-i18next.config';

class Document extends NextDocument {
  render() {
    const currentLocale =
      this.props.__NEXT_DATA__.query.locale || i18nextConfig.i18n.defaultLocale;

    return (
      <Html lang={currentLocale}>
        <Head>
          {/* Open+Sans, Murecho, EB+Garamond, Nunito, Inter, Jost */}
          <link
            href='https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;700;800&display=swap'
            rel='stylesheet'
          />

          <link
            href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
