import { ScaleFade, Box, Flex, Text, useColorMode } from "@chakra-ui/react";
import { Typewriter } from "react-typewriting-effect";
import "react-typewriting-effect/dist/index.css";
import React, { useRef } from "react";
import "./home.css";
import { InfoCard } from "./InfoCard";
import { SkillsCard } from "./SkillsCard";
import Footer from "../../components/Footer";
import TopNavBar from "../../components/TopNavBar";

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  const { colorMode } = useColorMode();
  const aboutRef = useRef<null | HTMLDivElement>(null);

  return (
    <>
      <TopNavBar />
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
                  onComplete={() => {}}
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
        infoP={`Hello! I'm Fabrizio Piperno, a web dev, pianist and gamer based in Milazzo, a small city which is located in Messina, in the south of Italy and I welcome you to my portfolio!
        I currently study at ITT E. Majorana, a high, technical school.`}
      />
      <InfoCard
        colorMode={colorMode === "light" ? "gray.200" : "whiteAlpha.200"}
        sectionRef={aboutRef}
        twString={`˜ $ cat work.md`}
        infoP={`I work as a Freelance Web Developer and I'm specialized in Front-end technologies such as ReactJS & Typescript. I also work in the back-end stack with tools like NodeJS (TypeScript) and Python.`}
      />
      <SkillsCard
        colorMode={colorMode === "light" ? "gray.200" : "whiteAlpha.200"}
        sectionRef={aboutRef}
        twString={`˜ $ ./skills.sh`}
        infoP={`This is my skill graph for the most technologies I use:`}
      />
      <Footer />
    </>
  );
};

export default Home;
