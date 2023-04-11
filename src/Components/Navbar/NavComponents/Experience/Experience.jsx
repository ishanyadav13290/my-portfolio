import { Box, Text } from "@chakra-ui/react";
import TypewriterComponent from "typewriter-effect";

export default function Experience() {
  return (
    <Box>
      <Box>
        <Box fontWeight={700} overflow={"hidden"} fontSize={"4xl"}>
<TypewriterComponent
  onInit={(typewriter) => {
    typewriter.start()
    .typeString("My Experiences")
    .pauseFor(1000)
    .deleteChars(6)
    .typeString(", a Full-Stack Developer (MERN)")
  .pauseFor(1000)
  .start()
  }}
  options={{
    loop:true
  }}
/>
</Box>
      </Box>
      <br />
      <Box>
        <Text fontSize={"2xl"} fontWeight={700}>
          Indian Centre For Development & Rights (ICFDR)
        </Text>
        <Text as={"cite"} fontSize={"sm"}>
          April 2023 to Present
        </Text>
      </Box>
      <br />
      <Box>
        <Text fontSize={"2xl"} fontWeight={700}>The Help Foundation</Text>
        <Text as={"cite"} fontSize={"sm"}>
          Feb 2023 to March 2023
        </Text>
        <Text as={"cite"} fontSize={"sm"}>
          Feb 2023 to March 2023
        </Text>
      </Box>
    </Box>
  );
}
