import React, { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import MenuLinks from "./navbar-components/MenuLinks";
import MenuToggle from "./navbar-components/MenuToggle";
import NavBarContainer from "./navbar-components/NavBarContainer";

const TopNavBar = (props: any) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Box {...props}>
        <Text fontWeight="semibold">
          Fabrizio Piperno
        </Text>
      </Box>
      <MenuToggle isOpen={isOpen} toggle={toggle} />
      <MenuLinks isOpened={isOpen} />
    </NavBarContainer>
  );
};

export default TopNavBar;
