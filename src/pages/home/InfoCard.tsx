import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { Typewriter } from 'react-typewriting-effect';

interface InfoCardProps {
  colorMode: string
  sectionRef: React.MutableRefObject<null | HTMLDivElement>
  twString: string,
  infoP: string
}

export const InfoCard: React.FC<InfoCardProps> = ({
  colorMode,
  infoP,
  sectionRef,
  twString
}) =>{
  return (
    <Box
        p={["6%", "2%"]}
        bgColor={colorMode === "light" ? "gray.200" : "whiteAlpha.200"}
        borderRadius="4%"
        m="5% 3% 2% 3%"
        display={{ md: "flex" }}
        ref={sectionRef}
      >
        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
          <Text fontWeight="bold" fontSize="5xl" letterSpacing="wide">
            <Typewriter
              string={twString}
              delay={140}
              onComplete={() => {}}
            />
          </Text>
          <Text fontSize={["lg", "2xl"]} mt="2%">
          {infoP}
          </Text>
        </Box>
      </Box>
  );
}