import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

const AboutMeTabs = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Bio</Tab>
        <Tab>Project</Tab>
        <Tab>Blog</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>Bio</TabPanel>
        <TabPanel>Project</TabPanel>
        <TabPanel>Blog</TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default AboutMeTabs;
