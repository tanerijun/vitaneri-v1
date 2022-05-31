import {
  extendTheme,
  // withDefaultColorScheme,
  type ThemeConfig,
} from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props: any) => ({
    body: {
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('gray.100', '#141214')(props),
    },
  }),
};

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

// const colors= {
//   brand: {
//     // Add this later
//   }
// }

const theme = extendTheme(
  {
    config,
    styles,
    // colors,
  }
  // withDefaultColorScheme({ colorScheme: 'brand' })
);

export default theme;
