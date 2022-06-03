import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import {
  Box,
  Center,
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

      <Center height="100vh" width="100vw">
        <VStack
          position="absolute"
          left={[null, null, '10%']}
          alignItems="flex-start"
          spacing={4}
          p={12}
          borderRadius="lg"
          divider={<Divider />}
          bg="whiteAlpha.100"
          boxShadow="md"
          className="glassmorphism"
        >
          <VStack alignItems="flex-start">
            <Heading
              size="xl"
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
            <LinkIcon
              href="https://github.com/tanerijun"
              icon={RiGithubFill}
              name="Github"
            />
            <LinkIcon href="#" icon={RiLinkedinBoxFill} name="LinkedIn" />
            <LinkIcon
              href="https://www.facebook.com/VinceTaneri/"
              icon={RiFacebookCircleFill}
              name="Facebook"
            />
            <LinkIcon
              href="https://twitter.com/tanerivince"
              icon={RiTwitterFill}
              name="Twitter"
            />
            <LinkIcon
              href="mailto:tanerivince@gmail.com"
              icon={RiMailFill}
              name="Email"
            />
            <LinkIcon href="#" icon={RiMoreFill} name="About Me" />
          </HStack>
        </VStack>
      </Center>
    </>
  );
};

export default Home;
