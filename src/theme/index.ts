import {
  extendTheme,
  theme as base,
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

const fonts = {
  heading: `Inter, ${base.fonts.heading}`,
  body: `Source Sans Pro, ${base.fonts.body}`,
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
    fonts,
    // colors,
  }
  // withDefaultColorScheme({ colorScheme: 'brand' })
);

export default theme;
