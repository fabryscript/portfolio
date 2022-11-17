import {
  ChakraProvider,
  extendTheme,
  type ThemeConfig,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <About />
        <Footer />
      </>
    ),
  },
]);

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  styles: {
    global: {
      body: {
        backgroundColor: "#141414",
      },
    },
  },
});

function Routes() {
  useEffect(() => {
    localStorage.setItem("chakra-ui-color-mode", "dark");
  })
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={routes} />
    </ChakraProvider>
  );
}

export default Routes;
