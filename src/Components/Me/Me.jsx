import { Box, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Me(){
    let [flexWidth, setFlexWidth] = useState(40)

    // useEffect(() => {
    //     let intervalDecrease = setInterval(() => {
    //       if (flexWidth <= 0) {
    //         clearInterval(intervalDecrease);
    //         let intervalIncrease = setInterval(() => {
    //           setFlexWidth(flexWidth + 1);
    //           if (flexWidth >= 40) {
    //             clearInterval(intervalIncrease);
    //           }
    //         }, 100);
    //       } else {
    //         setFlexWidth(flexWidth - 1);
    //       }
    //     }, 100);
    //     return () => clearInterval(intervalDecrease);
    //   }, [flexWidth]);
    useEffect(() => {
        let interval = setInterval(() => {
          if (flexWidth <= 0) {
            setFlexWidth(flexWidth + 1);
          } else if (flexWidth >= 40) {
            setFlexWidth(flexWidth - 1);
          } 
        }, 100);
      
        // return () => clearInterval(interval);
      }, [flexWidth]);
      
      
    return <Box h={"100%"}>
        <Flex justify={"flex-end"} alignItems={"center"}>
        <Box  w={`${flexWidth}%`} overflow={"hidden"} ><Text w={"400px"} fontSize={"4xl"} fontWeight={"700"}>I'm Ishan Yadav</Text></Box>
        <Spacer />
            <Flex justify={"center"}>
                <Image src="https://avatars.githubusercontent.com/u/112482175?v=4" borderRadius={"50%"} w={"40%"}  />
            </Flex>
        </Flex>
    </Box>

}