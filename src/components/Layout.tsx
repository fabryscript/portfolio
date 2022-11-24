import { Box, Button, HStack } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const strip = (str: string) => {
  const replaced = str.replace("/", "");
  const splitted = replaced.split("");
  return splitted[0].toUpperCase() + splitted.slice(1).join("");
};

function Layout({
  children,
  next,
  back
}: { children: React.ReactNode } & { next?: string, back?: string }) {
  const navigate = useNavigate();
  return (
    <Box p="2%">
      <HStack justify={"space-between"}>
        <Button
          size="lg"
          variant={"ghost"}
          leftIcon={<FaArrowLeft />}
          as={Link}
          to={back || "/"}
        >
          {back ? strip(back) : "Home"}
        </Button>
        {next && (
          <Button
            onClick={() => navigate(next)}
            size="lg"
            variant={"ghost"}
            rightIcon={<FaArrowRight />}
            as={Link}
            to={next}
          >
            {strip(next)}
          </Button>
        )}
      </HStack>
      {children}
    </Box>
  );
}

export default Layout;
