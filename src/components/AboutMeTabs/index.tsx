import {
  Box,
  Link,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
  Text,
  Table,
  Thead,
  Tbody,
  Th,
  Tr,
  Td,
  TableContainer,
  UnorderedList,
  ListItem,
  VStack,
  Flex,
} from "@chakra-ui/react";
import OptimizedImage from "../OptimizedImage";
import profilePic from "../../../public/portrait.jpg";

const AboutTab = () => {
  return (
    <VStack alignItems="flex-start" spacing={8}>
      <VStack alignItems="flex-start" spacing={2}>
        <Heading as="h3" size="lg">
          Introduction
        </Heading>
        <Flex
          flexDirection={["column", "row"]}
          justifyContent="space-between"
          alignItems="center"
          gap={4}
          width="full"
          py={4}
        >
          <OptimizedImage
            src={profilePic}
            alt="Picture of Vincent"
            borderRadius="full"
            width={200}
            height={200}
            priority
          />
          <Text
            as="i"
            fontFamily="Merriweather"
            fontSize="sm"
            color="gray.300"
            alignSelf="center"
            flex={1}
            textAlign="center"
          >
            - Build - Break - Learn -
          </Text>
        </Flex>
        <Text>
          Hi, my name is Vincent. I&apos;m currently a student at{" "}
          <Link href="https://www.lhu.edu.tw/" isExternal>
            LongHua University of Science and Technology
          </Link>
          , Taiwan, pursuing a B.E in Electronic Engineering.
        </Text>
        <Text>
          From a very young age, I&apos;ve always been interested in Tech and
          Science. Initially, I started coding out of curiosity, eventually it
          became a hobby, and after many hobby projects, I finally decided to
          pursue a career in software development.
        </Text>
        <Text>
          I have a passion for design and development, I like to create things
          that don&apos;t just look good, but that also functional and
          performant. I am always eager to take on a challenge, and aim to
          exceed in all tasks I take on.
        </Text>
      </VStack>
      <Box>
        <Heading as="h3" size="lg" my={4}>
          Likes
        </Heading>
        <UnorderedList>
          <ListItem>Tinkering electronics</ListItem>
          <ListItem>Reading (Non-fiction, Fiction, Manga)</ListItem>
          <ListItem>Playing Video Games</ListItem>
          <ListItem>Watching Movies</ListItem>
          <ListItem>Cycling</ListItem>
          <ListItem>Running</ListItem>
        </UnorderedList>
      </Box>
      <Box width="full">
        <Heading as="h3" size="lg" my={4}>
          Languages
        </Heading>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Th>Language</Th>
              <Th>Proficiency</Th>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Indonesian</Td>
                <Td>Fluent</Td>
              </Tr>
              <Tr>
                <Td>English</Td>
                <Td>Advanced</Td>
              </Tr>
              <Tr>
                <Td>Chinese</Td>
                <Td>Advanced</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Box width="full">
        <Heading as="h3" size="lg" my={4}>
          Skills
        </Heading>
        <TableContainer>
          <Table variant="simple">
            <Tbody>
              <Tr>
                <Td rowSpan={4}>Languages</Td>
                <Td>Python</Td>
              </Tr>
              <Tr>
                <Td>Java</Td>
              </Tr>
              <Tr>
                <Td>JavaScript</Td>
              </Tr>
              <Tr>
                <Td>TypeScript</Td>
              </Tr>
              <Tr>
                <Td rowSpan={11}>Frontend</Td>
                <Td>HTML</Td>
              </Tr>
              <Tr>
                <Td>CSS</Td>
              </Tr>
              <Tr>
                <Td>TailwindCSS</Td>
              </Tr>
              <Tr>
                <Td>Styled Component</Td>
              </Tr>
              <Tr>
                <Td>ChakraUI</Td>
              </Tr>
              <Tr>
                <Td>JQuery</Td>
              </Tr>
              <Tr>
                <Td>React</Td>
              </Tr>
              <Tr>
                <Td>Redux</Td>
              </Tr>
              <Tr>
                <Td>NextJS</Td>
              </Tr>
              <Tr>
                <Td>Framer Motion</Td>
              </Tr>
              <Tr>
                <Td>...</Td>
              </Tr>
              <Tr>
                <Td rowSpan={8}>Backend</Td>
                <Td>NodeJS / Express</Td>
              </Tr>
              <Tr>
                <Td>J2EE</Td>
              </Tr>
              <Tr>
                <Td>Spring / Spring Boot</Td>
              </Tr>
              <Tr>
                <Td>MongoDB</Td>
              </Tr>
              <Tr>
                <Td>MySQL</Td>
              </Tr>
              <Tr>
                <Td>PostgreSQL</Td>
              </Tr>
              <Tr>
                <Td>Firebase</Td>
              </Tr>
              <Tr>
                <Td>...</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Box>
        <Heading as="h3" size="lg" my={4}>
          Aspiration
        </Heading>
        <Text>
          I want to be part of a team with clear vision and resources to build
          an awesome product. A product that is used on a day-to-day basis.
          Something where documentation and automation take away stress and
          frustration, where great innovations are quickly evaluated and
          implemented if proven significant, where motivation flourishes, where
          we can build a positive future by giving back to our community.
        </Text>
      </Box>
    </VStack>
  );
};

const AboutMeTabs = () => {
  return (
    <Tabs isFitted variant="line">
      <TabList>
        <Tab>About</Tab>
        <Tab>Projects</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <AboutTab />
        </TabPanel>
        <TabPanel>
          <Flex alignItems="center" justifyContent="center">
            Coming Soon
          </Flex>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default AboutMeTabs;
