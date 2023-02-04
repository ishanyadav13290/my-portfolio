import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
export default function Navbar(){
    return <>
        <Tabs orientation='vertical' h={"100%"}>
  <TabList display={"flex"} justifyContent={"space-between"}>
    <Tab>Me</Tab>
    <Tab>My Work</Tab>
    <Tab></Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
    <TabPanel>
      <p>three!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
    </>
}