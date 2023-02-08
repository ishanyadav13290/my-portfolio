import { Box, Flex, Image, Spacer } from "@chakra-ui/react";
import { useState } from "react";
import TypewriterComponent from "typewriter-effect";

export default function Me(){
    let [flexWidth, setFlexWidth] = useState(40)
      
    return <Box h={"100%"}>
        <Flex justify={"flex-end"} alignItems={"center"}>
        <Box fontWeight={700} w={`${flexWidth}%`} overflow={"hidden"} fontSize={"4xl"}>
<TypewriterComponent
  onInit={(typewriter) => {
    typewriter.start()
    .typeString('Hello')
    .pauseFor(1000)
    .deleteAll()
    .typeString("I'm Ishan Yadav")
    .pauseFor(1000)
    .deleteChars(6)
    .typeString(", a Full-Stack Developer")
  .pauseFor(1000)
  .start()
  }}
  options={{
    loop:true
  }}
/>
</Box>
        <Spacer />
            <Flex justify={"center"}>
                <Image src="https://avatars.githubusercontent.com/u/112482175?v=4" borderRadius={"50%"} w={"40%"}  />
            </Flex>
        </Flex>
    </Box>

}