import { Box, Flex, Button, Stack, Image } from "@chakra-ui/react";
import firma from "../assets/firmozza.png";

export default function Navbar() {
  return (
    <>
      <Box px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box as={"a"} href="/">
            <Image src={firma} maxW={"70px"} />
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button
                as={"a"}
                href="https://forms.gle/2cdtWn44Qtcq1iZM6"
                target={"_blank"}
                variant={"ghost"}
              >
                Get in touch
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
