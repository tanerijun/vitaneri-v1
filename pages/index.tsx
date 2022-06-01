import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import ParticlesBackground from '../src/components/ParticlesBackground';
import {
  Box,
  Divider,
  Heading,
  HStack,
  Icon,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import {
  RiGithubFill,
  RiFacebookCircleFill,
  RiTwitterFill,
  RiLinkedinBoxFill,
  RiMailFill,
  RiMoreFill,
} from 'react-icons/ri';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Vincent Taneri</title>
        <meta
          name="description"
          content="Vincent Taneri's personal portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ParticlesBackground />

      <Box height="100vh" width="100vw">
        <VStack
          position="absolute"
          top="45%"
          left="10%"
          alignItems="flex-start"
          spacing={4}
          p={4}
          borderRadius="lg"
          divider={<Divider />}
          bg="whiteAlpha.100"
        >
          <VStack alignItems="flex-start">
            <Heading size={{ base: '2xl', lg: '3xl', xl: '4xl' }}>
              Vincent Taneri
            </Heading>
            <Text fontSize={{ base: 'xs', md: 'sm', lg: 'md', xl: 'lg' }}>
              Software Developer
            </Text>
          </VStack>
          <HStack spacing={4}>
            <Link href="#" target="_blank">
              <Icon
                as={RiGithubFill}
                h={{ base: 5, md: 6, xl: 8 }}
                w={{ base: 5, md: 6, xl: 8 }}
              />
            </Link>
            <Link href="#" target="_blank">
              <Icon
                as={RiLinkedinBoxFill}
                h={{ base: 5, md: 6, xl: 8 }}
                w={{ base: 5, md: 6, xl: 8 }}
              />
            </Link>
            <Link href="#" target="_blank">
              <Icon
                as={RiFacebookCircleFill}
                h={{ base: 5, md: 6, xl: 8 }}
                w={{ base: 5, md: 6, xl: 8 }}
              />
            </Link>
            <Link href="#" target="_blank">
              <Icon
                as={RiTwitterFill}
                h={{ base: 5, md: 6, xl: 8 }}
                w={{ base: 5, md: 6, xl: 8 }}
              />
            </Link>
            <Link href="#" target="_blank">
              <Icon
                as={RiMailFill}
                h={{ base: 5, md: 6, xl: 8 }}
                w={{ base: 5, md: 6, xl: 8 }}
              />
            </Link>
            <Link href="#" target="_blank">
              <Icon
                as={RiMoreFill}
                h={{ base: 5, md: 6, xl: 8 }}
                w={{ base: 5, md: 6, xl: 8 }}
              />
            </Link>
          </HStack>
        </VStack>
      </Box>
    </>
  );
};

export default Home;
