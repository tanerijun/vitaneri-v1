import '@fontsource/inter';
import '@fontsource/merriweather';
import '@fontsource/source-sans-pro';

import type { AppProps } from 'next/app';

import 'focus-visible/dist/focus-visible';
import { Global, css } from '@emotion/react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../src/theme';

const GlobalStyles = css`
  /* This will hide the focus indicator if an element receive focus via mouse click, but the focus indicator will still show up on keyboard navigation */

  .js-focus-visible :focus::not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }

  .glassmorphism {
    -webkit-backdrop-filter: blur(10px) saturate(125%); // Support for webkit
    backdrop-filter: blur(8px) saturate(125%);
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    border-left: 1px solid rgba(255, 255, 255, 0.2);
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
