import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Me from '../Me/Me'
export default function Navbar(){
    return <>
        <Tabs orientation='vertical' h={"100%"}>
  <TabList w={"10%"} display={"flex"} justifyContent={"space-between"}>
    <Tab>Who Am I?</Tab>
    <Tab>Works</Tab>
    <Tab>Education</Tab>
    <Tab>Contact</Tab>
    <Tab>Contact Me</Tab>
  </TabList>

  <TabPanels >
    <TabPanel h={"100%"}>
      <Me />
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