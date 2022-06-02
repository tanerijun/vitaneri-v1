import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
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
import ParticlesBackground from '../src/components/ParticlesBackground';
import LinkIcon from '../src/components/LinkIcon';

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
          boxShadow="md"
          className="glassmorphism"
        >
          <VStack alignItems="flex-start">
            <Heading
              size="2xl"
              fontFamily="Merriweather"
              fontWeight="light"
              letterSpacing="1px"
            >
              Vincent Taneri
            </Heading>
            <Text fontSize="md" fontFamily="Inter" letterSpacing="0.5px">
              Software Developer
            </Text>
          </VStack>
          <HStack spacing={4}>
            <LinkIcon href="#" icon={RiGithubFill} />
            <LinkIcon href="#" icon={RiLinkedinBoxFill} />
            <LinkIcon href="#" icon={RiFacebookCircleFill} />
            <LinkIcon href="#" icon={RiTwitterFill} />
            <LinkIcon href="mailto:tanerivince@gmail.com" icon={RiMailFill} />
            <LinkIcon href="#" icon={RiMoreFill} />
          </HStack>
        </VStack>
      </Box>
    </>
  );
};

export default Home;
