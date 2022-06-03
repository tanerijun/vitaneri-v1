// This component combine NextJS' image optimization with ChakraUI's styling

import NextImage from 'next/image';
import { chakra } from '@chakra-ui/react';

const OptimizedImage = chakra(NextImage, {
  shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
});

export default OptimizedImage;
