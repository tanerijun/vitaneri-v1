import Image from 'next/image';
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
} from '@chakra-ui/react';

const AboutTab = () => {
  return (
    <VStack alignItems="flex-start" spacing={8}>
      <Box>
        <Heading as="h3" size="lg">
          Introduction
        </Heading>
        <Text>
          Hi, my name is Vincent. I'm currently a student at{' '}
          <Link href="https://www.lhu.edu.tw/" isExternal>
            LongHua University of Science and Technology
          </Link>
          , Taiwan, pursuing a B.S in Electronic Engineering.
        </Text>
        <Text>
          I started playing with computers when I was 15 years old. Since then,
          I've been tinkering with all sorts of technologies, and it didn't take
          long before I fell in love with coding.
        </Text>
        <Text>
          The knowledge from my Electronic Engineering class not only enhance my
          understanding of the working and intricacies of computer but also give
          me a newfound appreciation for the field. It gives me the final push
          to make software development my career.
        </Text>
      </Box>
      <Box>
        <Heading as="h3" size="lg">
          Likes
        </Heading>
        <UnorderedList>
          <ListItem>Tinkering Stuffs</ListItem>
          <ListItem>Reading (Non-fiction, Fiction, Manga)</ListItem>
          <ListItem>Playing Video Games</ListItem>
          <ListItem>Watching Movies</ListItem>
          <ListItem>Cycling</ListItem>
          <ListItem>Running</ListItem>
        </UnorderedList>
      </Box>
      <Box width="full">
        <Heading as="h3" size="lg">
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
        <Heading as="h3" size="lg">
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
                <Td>Javascript</Td>
              </Tr>
              <Tr>
                <Td>Typescript</Td>
              </Tr>
              <Tr>
                <Td>Go</Td>
              </Tr>
              <Tr>
                <Td rowSpan={9}>Frontend</Td>
                <Td>HTML</Td>
              </Tr>
              <Tr>
                <Td>CSS</Td>
              </Tr>
              <Tr>
                <Td>TailwindCSS</Td>
              </Tr>
              <Tr>
                <Td>ChakraUI</Td>
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
                <Td rowSpan={6}>Backend</Td>
                <Td>NodeJS</Td>
              </Tr>
              <Tr>
                <Td>Express</Td>
              </Tr>
              <Tr>
                <Td>MongoDB</Td>
              </Tr>
              <Tr>
                <Td>MySQL</Td>
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
        <Heading as="h3" size="lg">
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
        <Tab>Project</Tab>
        <Tab>Blog</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <AboutTab />
        </TabPanel>
        <TabPanel>Project</TabPanel>
        <TabPanel>Blog</TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default AboutMeTabs;
