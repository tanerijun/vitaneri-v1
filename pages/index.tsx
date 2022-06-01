import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import ParticlesBackground from '../src/components/ParticlesBackground';
import { Box, Heading, Text } from '@chakra-ui/react';

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
      <Box height="100vh" width="100vw" bg="red.200">
        <Box
          position="absolute"
          top="50%"
          left="10%"
          height={100}
          bg="blue.200"
        >
          <Box>
            <Heading>Vincent Taneri</Heading>
            <Text>Software Developer</Text>
          </Box>
          <Box>Icons</Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
