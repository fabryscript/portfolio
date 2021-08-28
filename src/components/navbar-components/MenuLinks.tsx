import React from "react";
import { Stack, Box, useColorMode, useToast } from "@chakra-ui/react";
import MenuItem from "./MenuItem";
const MenuLinks = ({ isOpened }: any) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const toast = useToast();

  return (
    <>
      <Box
        display={{ base: isOpened ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Stack
          spacing={8}
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <MenuItem onClick={() => toast({
            description: "WIP! This page is going to be created soon",
            title: "Coming soon!",
            duration: 10000,
            status: "info",
            isClosable: true
          })}>
            Get in touch
          </MenuItem>
          <MenuItem onClick={toggleColorMode}>
            {colorMode === "light" ? "🌚 Dark" : "🌞 Light"} Mode
          </MenuItem>
        </Stack>
      </Box>
    </>
  );
};

export default MenuLinks;
