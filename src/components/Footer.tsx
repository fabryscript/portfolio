import React from 'react';
import { Box, Flex, Stack, ButtonGroup, IconButton, Text } from '@chakra-ui/react';
import { FaGithub, FaInstagram, FaReddit, FaTwitch, FaTwitter } from "react-icons/fa";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) =>{
  return (
    <Box as="footer" mt="2%" role="contentinfo" py="6">
      <Flex
        direction={{ base: "column", md: "row" }}
        maxW={{ base: "xl", md: "7xl" }}
        mx="auto"
        px={{ base: "6", md: "8" }}
        align="center"
      >
        <Stack
          my={{ base: "6", md: 0 }}
          direction={{ base: "column", md: "row" }}
          marginStart={{ md: "8" }}
          fontSize="sm"
          spacing={{ base: "2", md: "8" }}
          textAlign={{ base: "center", md: "start" }}
        >
          <Text>Made with 🍪 and <a href="https://en.wikipedia.org/wiki/Love"> ❤ </a> in <a href="https://en.wikipedia.org/wiki/Milazzo">Milazzu</a> </Text>
          <Text>
            &copy; {new Date().getFullYear()}
            <a href="https://github.com/fabry-js"> Fabrizio Piperno </a>
          </Text>
        </Stack>
        <ButtonGroup
          marginStart={{ md: "auto" }}
          color="gray.600"
          variant="ghost"
        >
          <IconButton
            as="a"
            href="https://github.com/fabry-js/"
            aria-label="GitHub"
            icon={<FaGithub />}
          />
          <IconButton
            as="a"
            href="https://instagram.com/fabry.jp"
            aria-label="Instagram"
            icon={<FaInstagram />}
          />
          <IconButton
            as="a"
            href="https://www.reddit.com/user/Fabry_04"
            aria-label="Reddit"
            icon={<FaReddit />}
          />
          <IconButton
            as="a"
            href="https://www.twitch.tv/fabryscript"
            aria-label="Twitch"
            icon={<FaTwitch />}
          />
          <IconButton
            as="a"
            href="https://twitter.com/fabryscript"
            aria-label="Twitter"
            icon={<FaTwitter />}
          />
        </ButtonGroup>
      </Flex>
    </Box>
  );
}

export default Footer