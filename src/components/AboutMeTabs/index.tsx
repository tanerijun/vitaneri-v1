import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
  Text,
} from '@chakra-ui/react';

const AboutMeTabs = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>About</Tab>
        <Tab>Project</Tab>
        <Tab>Blog</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <Heading size="lg">Introduction</Heading>
          <Text>
            Hi, my name is Vincent. I'm currently a student at LongHua
            University of Science and Technology pursuing a B.S in Electronic
            Engineering.
          </Text>
          <Text>
            Over the past 8 years, coding has developed into a passion of mine.
          </Text>
        </TabPanel>
        <TabPanel>Project</TabPanel>
        <TabPanel>Blog</TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default AboutMeTabs;
