import { useColorMode } from "@chakra-ui/react";
import { useEffect } from "react";
import Hero from "./components/Hero";

function Home() {
  const { setColorMode } = useColorMode()
  useEffect(() => setColorMode("dark"))
  return <Hero />;
}

export default Home;
