import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Divider,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";

export interface WorkProps {
  title: string;
  githubLink: string;
  websiteLink: string;
  description: string;
  languages: string[];
  imageURL: string;
  isPrivate: boolean;
}

const getColor = (language: string) => {
  switch (language) {
    case "JavaScript":
      return "yellow";
    case "TypeScript":
      return "blue";
    case "HTML":
      return "red";
    case "CSS":
      return "blue";
    case "Python":
      return "yellow";
    case "Chakra UI":
      return "green";
    case "React":
      return "cyan";
    default:
      return "gray";
  }
};

function Work({
  description,
  githubLink,
  languages,
  title,
  websiteLink,
  imageURL,
  isPrivate,
}: WorkProps) {
  return (
    <Card bg="#252525" textAlign={"center"} rounded="2xl">
      <CardHeader>
        <Heading>{title}</Heading>
      </CardHeader>
      <CardBody>
        <Center mt="-5%">
          <Image rounded={"3xl"} maxW="65%" src={imageURL} />
        </Center>
        <VStack spacing={2} mt="2%">
          <HStack mt="2%">
            {languages.map((l, i) => (
              <Badge key={i} colorScheme={getColor(l)}>
                {l}
              </Badge>
            ))}
          </HStack>
          <Text>{description}</Text>
        </VStack>
      </CardBody>
      <Divider />
      <CardFooter justify={"space-between"}>
        <Button
          leftIcon={<AiOutlineLink />}
          as="a"
          href={websiteLink}
          variant="ghost"
          flex="1"
        >
          Visit
        </Button>
        <Button
          leftIcon={<AiOutlineGithub />}
          as="a"
          href={!isPrivate ? githubLink : undefined}
          variant="ghost"
          flex="1"
          ml="2%"
          disabled={isPrivate}
        >
          Github
        </Button>
      </CardFooter>
    </Card>
  );
}

export default Work;
