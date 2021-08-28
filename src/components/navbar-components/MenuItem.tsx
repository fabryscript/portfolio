import React from "react";
import { Button, Text } from "@chakra-ui/react";

interface MenuItemProps {
  children?: any;
  isLast?: any;
  to?: string;
  onClick?: () => void;
}

const MenuItem = ({ children, isLast, to, onClick, ...rest }: MenuItemProps) => {
  return (
    <Button onClick={onClick}>
      <Text display="flex" {...rest}>
        {children}
      </Text>
    </Button>
  );
};

export default MenuItem;
