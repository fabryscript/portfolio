import {
  Box,
  Button,
  Flex,
  Heading,
  Spacer,
  Switch,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex p="3">
      <Box p="3">
        <Heading size="md" fontWeight="normal">Fabrizio Piperno</Heading>
      </Box>
      <Spacer />
      <Box>
        <Button>Get in touch</Button> {" "}
        <Button id="color-mode" size="md" colorScheme="gray" onClick={toggleColorMode}>
          {colorMode === "light" ? "🌚 Dark" : "🌞 Light"} Mode
        </Button>
      </Box>
    </Flex>
  );
};

export default Navbar;
