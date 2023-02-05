import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
export default function Navbar(){
    return <>
        <Tabs orientation='vertical' h={"100%"}>
  <TabList w={"10%"} display={"flex"} justifyContent={"space-between"}>
    <Tab >Me</Tab>
    <Tab>My Work</Tab>
    <Tab>Contact Me</Tab>
    <Tab>Contact Me</Tab>
    <Tab>Contact Me</Tab>
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
    <TabPanel>
      <p>four!</p>
    </TabPanel>
    <TabPanel>
      <p>five!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
    </>
}