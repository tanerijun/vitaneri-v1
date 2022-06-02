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
          p={8}
          borderRadius="lg"
          divider={<Divider />}
          bg="whiteAlpha.100"
          className="glassmorphism"
        >
          <VStack alignItems="flex-start">
            <Heading
              size="2xl"
              fontWeight="light"
              fontFamily="Merriweather"
              letterSpacing="1px"
            >
              Vincent Taneri
            </Heading>
            <Text fontSize="md" fontFamily="Inter" letterSpacing="0.5px">
              Software Developer
            </Text>
          </VStack>
          <HStack spacing={4}>
            <Link href="#" target="_blank">
              <Icon
                as={RiGithubFill}
                h={{ base: 5, lg: 6 }}
                w={{ base: 5, lg: 6 }}
              />
            </Link>
            <Link href="#" target="_blank">
              <Icon
                as={RiLinkedinBoxFill}
                h={{ base: 5, lg: 6 }}
                w={{ base: 5, lg: 6 }}
              />
            </Link>
            <Link href="#" target="_blank">
              <Icon
                as={RiFacebookCircleFill}
                h={{ base: 5, lg: 6 }}
                w={{ base: 5, lg: 6 }}
              />
            </Link>
            <Link href="#" target="_blank">
              <Icon
                as={RiTwitterFill}
                h={{ base: 5, lg: 6 }}
                w={{ base: 5, lg: 6 }}
              />
            </Link>
            <Link href="#" target="_blank">
              <Icon
                as={RiMailFill}
                h={{ base: 5, lg: 6 }}
                w={{ base: 5, lg: 6 }}
              />
            </Link>
            <Link href="#" target="_blank">
              <Icon
                as={RiMoreFill}
                h={{ base: 5, lg: 6 }}
                w={{ base: 5, lg: 6 }}
              />
            </Link>
          </HStack>
        </VStack>
      </Box>
    </>
  );
};

export default Home;
