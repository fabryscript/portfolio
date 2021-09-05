import React from "react";
import { Stack, Box, useColorMode } from "@chakra-ui/react";
import MenuItem from "./MenuItem";
const MenuLinks = ({ isOpened }: any) => {
  const { colorMode, toggleColorMode } = useColorMode();

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
          <MenuItem>
            <a href="https://forms.gle/E9TAL7yNNW3y2WW99">Get in touch</a>
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
