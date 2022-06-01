import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import ParticlesBackground from '../src/components/ParticlesBackground';
import {
  Box,
  Heading,
  HStack,
  Icon,
  IconButton,
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

      {/* <ParticlesBackground /> */}
      <Box height="100vh" width="100vw" bg="red.200">
        <VStack
          position="absolute"
          top="50%"
          left="10%"
          alignItems="flex-start"
          spacing={8}
          bg="blue.200"
        >
          <VStack alignItems="flex-start">
            <Heading size={['xl', '2xl', '3xl', '4xl']}>Vincent Taneri</Heading>
            <Text fontSize={['xs', 'sm', 'md']}>Software Developer</Text>
          </VStack>
          <HStack spacing={4}>
            <Link href="#" target="_blank">
              <Icon as={RiGithubFill} h={5} w={5} />
            </Link>
            <Link href="#" target="_blank">
              <Icon as={RiLinkedinBoxFill} h={5} w={5} />
            </Link>
            <Link href="#" target="_blank">
              <Icon as={RiFacebookCircleFill} h={5} w={5} />
            </Link>
            <Link href="#" target="_blank">
              <Icon as={RiTwitterFill} h={5} w={5} />
            </Link>
            <Link href="#" target="_blank">
              <Icon as={RiMailFill} h={5} w={5} />
            </Link>
            <Link href="#" target="_blank">
              <Icon as={RiMoreFill} h={5} w={5} />
            </Link>
          </HStack>
        </VStack>
      </Box>
    </>
  );
};

export default Home;
