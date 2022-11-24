import { Box, Button, Heading, HStack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";

const italianParagraphs = [
  "Sono uno sviluppatore frontend che vanta un'esperienza pluriennale nell'ambito dello sviluppo web.",
  "In particolare faccio uso di tecnologie come TypeScript, React e Vue per creare applicazioni web moderne e performanti.",
  "Inoltre sono un appassionato di UI/UX design, e mi occupo di progettare e sviluppare l'interfaccia utente di ogni progetto.",
  "Infine, sono anche un appassionato di musica e di videogiochi e, quando non sto lavorando, mi dedico alla mia passione per il pianoforte e la batteria.",
];

const englishParagraphs = [
  "I'm a frontend developer with years of experience in web development.",
  "Specifically, I use technologies like TypeScript, React and Vue to create modern and performant web applications.",
  "On top of that, I'm passionate about UI/UX design, and I take care of designing and developing the user interface of every project.",
  "Finally, I'm a music and videogames enthusiast, and when I'm not working I dedicate myself to my passion for piano and drums.",
];

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
    <Layout next="/portfolio">
      <Box p="2%">
        <Heading
          as="h1"
          textAlign={{ base: "center", md: "left", lg: "left" }}
          fontWeight={650}
          fontSize={{ base: "5xl", md: "54px", lg: "62px" }}
          bgGradient="linear(to-r, #00B5D8, #B794F4)"
          bgClip="text"
        >
          About
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
      </Box>
    </Layout>
  );
}

export default About;
