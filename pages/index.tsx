import type { NextPage } from 'next';
import Head from 'next/head';
import {
  Center,
  Divider,
  Heading,
  Text,
  VStack,
  keyframes,
} from '@chakra-ui/react';
import ParticlesBackground from '../src/components/ParticlesBackground';
import LinkIcons from '../src/components/LinkIcons';

// animate from black to transparent
const backgroundAnimation = keyframes`
  from {background-color: #000000;}
  to {background-color: transparent;}
`;

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

      <Center
        height="100vh"
        width="100vw"
        animation={`${backgroundAnimation} 4s ease-in`}
      >
        <VStack
          position="absolute"
          left={[null, null, '10%']}
          alignItems="flex-start"
          spacing={4}
          p={8}
          borderRadius="md"
          divider={<Divider />}
          bg="blackAlpha.50"
          boxShadow="md"
          className="glassmorphism"
        >
          <VStack alignItems="flex-start" width="100%">
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
          <LinkIcons />
        </VStack>
        <ParticlesBackground />
      </Center>
    </>
  );
};

export default Home;
