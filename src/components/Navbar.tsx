import {
  Box,
  Flex,
  Button,
  Stack,
  IconButton,
  Avatar,
  useMediaQuery,
  Collapse,
  VStack,
} from "@chakra-ui/react";
import firma from "../assets/firmozza.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";

const NAV_ITEMS = [
  {
    label: "Get in touch",
    href: "https://forms.gle/2cdtWn44Qtcq1iZM6",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Portfolio",
    href: "/portfolio",
  },
];

export default function Navbar() {
  const [isDesktop] = useMediaQuery("(min-width: 768px)");
  const [isMobile] = useMediaQuery("(max-width: 425px)");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Box mt="1%" px={4}>
        <Flex justify={"space-between"} flex={1}>
          <Flex as={"a"} href="/">
            <Avatar src={firma} />
          </Flex>
          {isDesktop ? (
            <Stack ml="2" direction={"row"}>
              {NAV_ITEMS.map(({ href, label }) => {
                const isHttps = href.includes("https");
                return !isHttps ? (
                  <Button
                    key={label}
                    as={Link}
                    to={href}
                    variant={"ghost"}
                    target="_blank"
                  >
                    {label}
                  </Button>
                ) : (
                  <Button key={label} as={"a"} href={href} variant={"ghost"}>
                    {label}
                  </Button>
                );
              })}
            </Stack>
          ) : (
            <Box>
              <IconButton
                onClick={() => setIsOpen((prev) => !prev)}
                variant={"ghost"}
                aria-label="Open Menu"
                icon={isOpen ? <FiX /> : <GiHamburgerMenu />}
              />
            </Box>
          )}
        </Flex>
        <Collapse in={isOpen}>
          <VStack p={4} display={{ md: "none" }}>
            {NAV_ITEMS.map(({ href, label }) => {
              const isHttps = href.includes("https");
              return !isHttps ? (
                <Button
                  width={"full"}
                  key={label}
                  as={Link}
                  to={href}
                  variant={"ghost"}
                >
                  {label}
                </Button>
              ) : (
                <Button
                  width={"full"}
                  key={label}
                  as={"a"}
                  href={href}
                  target="_blank"
                  variant={"ghost"}
                >
                  {label}
                </Button>
              );
            })}
          </VStack>
        </Collapse>
      </Box>
    </>
  );
}
