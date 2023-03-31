import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Experience from './NavComponents/Experience/Experience'
import Me from './NavComponents/Me/Me'
export default function Navbar(){
    return <>
        <Tabs orientation='vertical' h={"100%"}>
  <TabList w={"10%"} display={"flex"} justifyContent={"space-between"}>
    <Tab>Who Am I?</Tab>
    <Tab>Works</Tab>
    <Tab>Experience</Tab>
    <Tab>Education</Tab>
    <Tab>Contact Me</Tab>
  </TabList>

  <TabPanels >
    <TabPanel h={"100%"}>
      <Me />
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
    <TabPanel h={"100%"}>
      <Experience />
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