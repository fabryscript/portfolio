import { ScaleFade, Box, Flex, Text, useColorMode } from "@chakra-ui/react";
import { Typewriter } from "react-typewriting-effect";
import "react-typewriting-effect/dist/index.css";
import React, { useRef } from "react";
import Navbar from "../../components/Navbar";
import "./home.css";
import { InfoCard } from "./InfoCard";

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  const { colorMode } = useColorMode();
  const scrollInto = (
    refElement: React.MutableRefObject<null | HTMLDivElement>
  ) => {
    refElement.current?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
    });
  };

  const aboutRef = useRef<null | HTMLDivElement>(null);

  return (
    <>
      <Navbar />
      <ScaleFade in={true} initialScale={0.9}>
        <Box p="5%" display="grid" placeItems="center">
          <Flex>
            <Box p="6">
              <Text
                fontSize="5xl"
                color={colorMode === "light" ? "black" : "white"}
                fontWeight="normal"
              >
                <Typewriter
                  className="tw-string"
                  string={`"I just love programming, that's it <3"`}
                  delay={40}
                  onComplete={() => scrollInto(aboutRef)}
                />
              </Text>
            </Box>
          </Flex>
          <Text>programmer, pianist and gaming enthusiast based 🎯 in Milazzo, Messina, Italy 🇮🇹</Text>
        </Box>
      </ScaleFade>
      <InfoCard
        colorMode={colorMode === "light" ? "gray.200" : "whiteAlpha.200"}
        sectionRef={aboutRef}
        twString={`˜ $ whoami`}
        infoP={`Hello! I'm Fabrizio Piperno, a web dev, pianist and gamer based in Milazzo, a small city which is located in Messina, in the south of Italy; and I welcome you to my portfolio!
        I currently study at ITT E. Majorana, a high, technical-adressed school.`}
      />
    </>
  );
};

export default Home;
