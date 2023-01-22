import { Box, Button, Heading, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Work, { WorkProps } from "./Work";

const italianParagraphs = [
  "Qui è possibile trovare una collezione dei lavori che ho svolto in passato che hanno contribuito alla mia formazione e rifinitura delle mie skills.",
];

const englishParagraphs = [
  "Here it is possible to find a collection of past works that I did that helped in the development and the refinement of my skills."
];

const works: WorkProps[] = [
  {
    title: "Mesan Padel Prenotazioni",
    description: "A web application for booking padel courts.",
    imageURL: "https://prenotazioni.mesanpadel.it/assets/logo.5a9ad92c.png",
    websiteLink: "https://prenotazioni.mesanpadel.it",
    githubLink: "",
    isPrivate: true,
    languages: [
      "TypeScript",
      "React",
      "Chakra UI",
    ]
  },
  {
    title: "Let's Fit JA (2020-2021)",
    description: "Official site of Junior Achievement's business Lets Fit JA, which includes a blog and an e-commerce",
    imageURL: "https://cdn.discordapp.com/attachments/1003018523670487070/1066665287115624458/ittlogo.png",
    websiteLink: "https://letsfitja.netlify.app",
    githubLink: "https://github.com/fabryscript/lets-fit-ws",
    isPrivate: false,
    languages: [
      "TypeScript",
      "React",
      "Chakra UI"
    ]
  },
  {
    title: "DeltaSolutions",
    description: "The official website of my business",
    imageURL: "https://cdn.discordapp.com/attachments/1003018523670487070/1044620576045662260/logo.png",
    websiteLink: "https://deltasolutions.it",
    githubLink: "",
    isPrivate: true,
    languages: [
      "WordPress"
    ]
  },
  {
    title: "ItaliaRevenge Dashboard",
    description: "Official site of the discord server ItaliaRevenge, which contains useful features for visualizing data usage",
    imageURL: "https://cdn.discordapp.com/attachments/1003018523670487070/1054772643758342174/phoenics.png",
    websiteLink: "https://discord.italiarevenge.it",
    githubLink: "",
    isPrivate: true,
    languages: [
      "TypeScript",
      "React",
      "Chakra UI"
    ]
  }
]

function About() {
  const [language, setLanguage] = useState("it");
  const [paragraphs, setParagraphs] = useState<string[]>([]);

  useEffect(() => {
    if (language === "it") {
      setParagraphs(italianParagraphs);
    } else {
      setParagraphs(englishParagraphs);
    }
  }, [language]);

  return (
    <Layout back="/about">
      <Box p="2%">
        <Heading
          as="h1"
          textAlign={{ base: "center", md: "left", lg: "left" }}
          fontWeight={650}
          fontSize={{ base: "5xl", md: "54px", lg: "62px" }}
          bgGradient="linear(to-r, #00B5D8, #B794F4)"
          bgClip="text"
        >
          Portfolio
        </Heading>
        <Box>
          <HStack
            my={{ base: "10%", md: "2%", lg: "2%" }}
            justify={{ base: "center", md: "left", lg: "left" }}
          >
            <Button
              variant={language === "it" ? "solid" : "ghost"}
              onClick={() => setLanguage("it")}
              leftIcon={
                <img
                  style={{ maxWidth: "20px" }}
                  src="https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg"
                  alt="italy"
                />
              }
            >
              IT
            </Button>
            <Button
              variant={language === "en" ? "solid" : "ghost"}
              onClick={() => setLanguage("en")}
              leftIcon={
                <img
                  style={{ maxWidth: "20px" }}
                  src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"
                  alt="italy"
                />
              }
            >
              EN
            </Button>
          </HStack>
          {paragraphs.map((paragraph, index) => (
            <Text
              mt={index !== 0 ? "2%" : undefined}
              key={index}
              textAlign={{ base: "center", md: "left", lg: "left" }}
              fontSize="xl"
              opacity={0.8}
            >
              {paragraph}
            </Text>
          ))}
        </Box>
        <SimpleGrid mt="2%" p="2%" columns={[1, 2, 3]} spacing="4">
          {works.map((work, index) => (
            <Work
              key={index}
              {...work}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Layout>
  );
}

export default About;
