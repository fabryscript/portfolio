import {
  Container,
  Stack,
  Box,
  Heading,
  Text,
  Button,
  Center,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./commons.css";

export default function Hero() {
  return (
    <Container p="3%" maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={"column"}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Box className="typewriter">
            <Heading
              as="h1"
              textAlign={"center"}
              fontWeight={650}
              fontSize={{ base: "5xl", sm: "104px", lg: "124px" }}
              bgGradient="linear(to-r, #00B5D8, #B794F4)"
              bgClip="text"
            >
              Fabrizio Piperno
            </Heading>
          </Box>

          <Text textAlign={"center"} fontSize="2xl" opacity={0.8}>
            Programmer, musician and gaming enthusiast based in Milazzo, Messina
            (IT).
          </Text>
          <Box>
            <Center>
              <Button
                as={Link}
                to="/about"
                className="buttonHover"
                size="lg"
                bgGradient="linear(to-r, #00B5D8, #B794F4)"
                _hover={{
                  bgGradient: "linear(to-r, #0987A0, #9F7AEA)",
                }}
                _focus={{
                  bgGradient: "linear(to-r, #065666, #553C9A)",
                }}
                w="50%"
                color="black"
              >
                Discover
              </Button>
            </Center>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
}
