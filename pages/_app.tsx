import '@fontsource/inter';
import '@fontsource/merriweather';
import '@fontsource/source-sans-pro';

import type { AppProps } from 'next/app';

import { Global, css } from '@emotion/react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../src/theme';

const GlobalStyles = css`
  .glassmorphism {
    -webkit-backdrop-filter: blur(5px) saturate(125%); // Support for webkit
    backdrop-filter: blur(5px) saturate(125%);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    border-right: 1px solid rgba(255, 255, 255, 0.07);
    border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
